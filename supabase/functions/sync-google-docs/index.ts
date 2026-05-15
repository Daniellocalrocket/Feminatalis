import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Get Google API settings from database
    const { data: settings } = await supabase
      .from("settings")
      .select("key, value")
      .in("key", ["google_api_key", "google_drive_folder_id"]);

    const apiKey = settings?.find((s) => s.key === "google_api_key")?.value;
    const folderId = settings?.find((s) => s.key === "google_drive_folder_id")?.value;

    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: "Google API Key nicht konfiguriert" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 400 }
      );
    }

    // Fetch all blog posts that have a google_doc_id
    const { data: posts, error: postsError } = await supabase
      .from("posts")
      .select("id, title, google_doc_id, content")
      .not("google_doc_id", "is", null);

    if (postsError) throw postsError;

    const results = {
      synced: 0,
      errors: [] as string[],
      details: [] as { title: string; docId: string; status: string }[],
    };

    // Sync each post that has a google_doc_id
    for (const post of posts || []) {
      if (!post.google_doc_id) continue;

      try {
        // Fetch Google Doc content as HTML
        const docId = post.google_doc_id;
        const exportUrl = `https://docs.googleapis.com/v1/documents/${docId}?key=${apiKey}&fields=body,title`;

        const response = await fetch(exportUrl);
        
        if (!response.ok) {
          const errorText = await response.text();
          results.errors.push(`Doc ${docId}: HTTP ${response.status} - ${errorText}`);
          results.details.push({
            title: post.title || "Unbekannt",
            docId: docId,
            status: "error",
          });
          continue;
        }

        const docData = await response.json();
        const htmlContent = googleDocToHtml(docData.body);

        // Update the post content
        const { error: updateError } = await supabase
          .from("posts")
          .update({
            content: htmlContent,
            updated_at: new Date().toISOString(),
          })
          .eq("id", post.id);

        if (updateError) {
          results.errors.push(`Doc ${docId}: Update failed - ${updateError.message}`);
          results.details.push({
            title: post.title || "Unbekannt",
            docId: docId,
            status: "error",
          });
        } else {
          results.synced++;
          results.details.push({
            title: docData.title || post.title || "Unbekannt",
            docId: docId,
            status: "synced",
          });
        }
      } catch (err) {
        results.errors.push(`Doc ${post.google_doc_id}: ${err.message}`);
        results.details.push({
          title: post.title || "Unbekannt",
          docId: post.google_doc_id,
          status: "error",
        });
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        ...results,
        message: `${results.synced} von ${posts?.length || 0} Artikeln synchronisiert`,
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err.message }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 500 }
    );
  }
});

// Helper function to convert Google Doc structure to HTML
function googleDocToHtml(body: any): string {
  if (!body || !body.content) return "";

  let html = "";

  for (const element of body.content) {
    if (!element.paragraph) continue;
    const p = element.paragraph;
    if (!p) continue;

    const style = p.paragraphStyle?.namedStyleType || "NORMAL_TEXT";
    const textContent = p.elements
      ?.map((e: any) => {
        if (e.textRun?.content) {
          let text = e.textRun.content;
          if (e.textRun.textStyle?.bold) text = `<strong>${text}</strong>`;
          if (e.textRun.textStyle?.italic) text = `<em>${text}</em>`;
          if (e.textRun.textStyle?.underline) text = `<u>${text}</u>`;
          return text;
        }
        return "";
      })
      .join("");

    if (!textContent?.trim()) continue;

    switch (style) {
      case "HEADING_1":
        html += `<h1>${textContent}</h1>`;
        break;
      case "HEADING_2":
        html += `<h2>${textContent}</h2>`;
        break;
      case "HEADING_3":
        html += `<h3>${textContent}</h3>`;
        break;
      case "TITLE":
        html += `<h1>${textContent}</h1>`;
        break;
      case "SUBTITLE":
        html += `<h2>${textContent}</h2>`;
        break;
      default:
        html += `<p>${textContent}</p>`;
    }
  }

  return html;
}