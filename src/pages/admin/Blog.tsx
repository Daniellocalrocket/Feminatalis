import React, { useEffect, useState, useRef } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { supabase } from "@/integrations/supabase/client";
import { 
  BookOpen, 
  Plus, 
  Trash2, 
  Edit3, 
  ExternalLink,
  Search,
  Calendar,
  Tag,
  Upload,
  FileCode
} from "lucide-react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogFooter
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { formatDate } from "@/lib/index";

export default function AdminBlog() {
  const [posts, setPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [pubFilter, setPubFilter] = useState<"alle" | "published" | "draft">("alle");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleHtmlFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const text = await file.text();
      
      // Extract content from body tag
      const bodyMatch = text.match(/<body[^>]*>([\s\S]*)<\/body>/i);
      let htmlContent = bodyMatch ? bodyMatch[1] : text;

      // Clean up Google Docs styling and extract text
      htmlContent = htmlContent
        .replace(/<style[\s\S]*?<\/style>/gi, '')
        .replace(/<meta[^>]*>/gi, '')
        .replace(/<link[^>]*>/gi, '')
        .replace(/<script[\s\S]*?<\/script>/gi, '')
        .replace(/class="[^"]*"/g, '')
        .replace(/style="[^"]*"/g, '')
        .replace(/id="[^"]*"/g, '');

      setFormData(prev => ({ ...prev, content_html: htmlContent }));
      toast.success("Inhalt aus Google Docs importiert!");
    } catch (err) {
      toast.error("Fehler beim Importieren der Datei");
    }

    // Reset input
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const initialPostState = {
    title: "",
    slug: "",
    excerpt: "",
    content_html: "",
    category: "Allgemein",
    image_url: "",
    google_doc_id: "",
    is_published: false
  };

  const [formData, setFormData] = useState(initialPostState);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .order('date', { ascending: false });

    if (error) {
      toast.error("Fehler beim Laden der Blog-Posts");
    } else {
      setPosts(data || []);
    }
    setIsLoading(false);
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const postData = {
      ...formData,
      slug: formData.slug || generateSlug(formData.title),
      updated_at: new Date().toISOString()
    };

    if (editingPost) {
      const { error } = await supabase
        .from('blog_posts')
        .update(postData)
        .eq('id', editingPost.id);

      if (error) {
        toast.error("Post konnte nicht aktualisiert werden: " + error.message);
      } else {
        toast.success("Post erfolgreich aktualisiert");
        setIsDialogOpen(false);
        fetchPosts();
      }
    } else {
      const { error } = await supabase
        .from('blog_posts')
        .insert([{ ...postData, date: new Date().toISOString() }]);

      if (error) {
        toast.error("Post konnte nicht erstellt werden: " + error.message);
      } else {
        toast.success("Neuer Post erfolgreich erstellt");
        setIsDialogOpen(false);
        fetchPosts();
      }
    }
  };

  const deletePost = async (id: string) => {
    if (!confirm("Bist du sicher, dass du diesen Blog-Post löschen möchtest?")) return;

    const { error } = await supabase
      .from('blog_posts')
      .delete()
      .eq('id', id);

    if (error) {
      toast.error("Fehler beim Löschen");
    } else {
      toast.success("Post gelöscht");
      fetchPosts();
    }
  };

  const openEditDialog = (post: any) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt || "",
      content_html: post.content_html || "",
      category: post.category || "Allgemein",
      image_url: post.image_url || "",
      google_doc_id: post.google_doc_id || "",
      is_published: post.is_published ?? false
    });
    setIsDialogOpen(true);
  };

  const handleCreateNew = () => {
    setEditingPost(null);
    setFormData(initialPostState);
    setIsDialogOpen(true);
  };

  const filteredPosts = posts.filter(post => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (post.category && post.category.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesPub =
      pubFilter === "alle" ||
      (pubFilter === "published" && post.is_published) ||
      (pubFilter === "draft" && !post.is_published);
    return matchesSearch && matchesPub;
  });

  return (
    <AdminLayout title="Blog-Verwaltung">
      <div className="space-y-8 animate-in fade-in duration-500">
        
        {/* Header Actions */}
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
          <div>
            <h1 className="text-3xl font-serif text-primary">Blogartikel</h1>
            <p className="text-muted-foreground">Verfasse und verwalte deine Artikel für die Website.</p>
          </div>
          <Button 
            onClick={handleCreateNew}
            className="h-14 rounded-2xl bg-accent text-white font-bold px-8 gap-3 hover:shadow-xl transition-all shadow-accent/20"
          >
            <Plus size={22} /> Neuen Artikel schreiben
          </Button>
        </div>

        {/* Search + Filter Pills */}
        <div className="flex flex-col gap-4">
          <div className="relative max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/30" />
            <Input 
              placeholder="Nach Titeln oder Kategorien suchen..." 
              className="pl-12 h-12 rounded-xl bg-white border-primary/5 shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {(["alle", "published", "draft"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setPubFilter(f)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${
                  pubFilter === f
                    ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                    : "bg-white text-primary/50 border-primary/10 hover:border-primary/30 hover:text-primary"
                }`}
              >
                {f === "alle" ? `Alle (${posts.length})` : f === "published" ? `Veröffentlicht (${posts.filter(p => p.is_published).length})` : `Entwürfe (${posts.filter(p => !p.is_published).length})`}
              </button>
            ))}
          </div>
        </div>

        {/* Content Section */}
        {isLoading ? (
          <div className="h-96 flex flex-col items-center justify-center gap-4 text-muted-foreground bg-white/50 rounded-[3rem] border border-primary/5">
            <BookOpen className="w-12 h-12 animate-pulse opacity-20" />
            Lade Artikel...
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="h-96 flex flex-col items-center justify-center gap-6 text-muted-foreground bg-white/50 rounded-[3rem] border border-2 border-dashed border-primary/10">
            <BookOpen className="w-16 h-16 opacity-10" />
            <div className="text-center">
              <p className="text-xl font-serif text-primary mb-2">Keine Artikel gefunden</p>
              <p>Suchst du nach etwas Bestimmtem oder möchtest du einen neuen Artikel erstellen?</p>
            </div>
            <Button variant="outline" className="rounded-xl border-primary/20" onClick={handleCreateNew}>Ersten Artikel anlegen</Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 pb-20">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="border-none shadow-xl shadow-primary/5 rounded-[2rem] bg-white overflow-hidden group hover:shadow-primary/10 transition-all">
                <CardContent className="p-0 flex flex-col md:flex-row">
                  {/* Thumbnail */}
                  <div className="md:w-64 bg-slate-100 relative overflow-hidden shrink-0 aspect-video md:aspect-auto">
                    {post.image_url ? (
                      <img src={post.image_url} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-primary/5">
                        <BookOpen className="w-12 h-12 text-primary/20" />
                      </div>
                    )}
                    <Badge className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-primary border-none shadow-sm">
                      {post.category}
                    </Badge>
                  </div>

                  {/* Info */}
                  <div className="flex-1 p-8">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-serif text-primary group-hover:text-accent transition-colors mb-2">{post.title}</h3>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1"><Calendar size={14} /> {formatDate(post.date)}</span>
                          <span className="flex items-center gap-1"><Tag size={14} /> {post.slug}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={post.is_published ? "bg-green-100 text-green-700 border-green-200 border" : "bg-amber-100 text-amber-700 border-amber-200 border"}>
                          {post.is_published ? "✓ Live" : "Entwurf"}
                        </Badge>
                        <Button variant="ghost" size="icon" className="h-10 w-10 text-primary/40 hover:text-primary hover:bg-primary/5 rounded-full" onClick={() => openEditDialog(post)}>
                          <Edit3 size={18} />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-10 w-10 text-red-400/40 hover:text-red-500 hover:bg-red-50/80 rounded-full transition-all" onClick={() => deletePost(post.id)}>
                          <Trash2 size={18} />
                        </Button>
                      </div>
                    </div>
                    <p className="text-sm text-primary/60 line-clamp-2 mb-6">{post.excerpt || "Keine Kurzbeschreibung vorhanden."}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        {post.google_doc_id && (
                          <Badge variant="outline" className="border-green-100 text-green-700 bg-green-50/50">
                            G-Doc Sync aktiv
                          </Badge>
                        )}
                      </div>
                      <Button variant="link" className="text-accent p-0 font-bold flex items-center gap-2" asChild>
                        <a href={`/blog/${post.slug}`} target="_blank" rel="noreferrer">Vorschau <ExternalLink size={14} /></a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Edit/Create Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto rounded-[3rem]">
            <DialogHeader className="p-8 pb-0">
              <DialogTitle className="text-3xl font-serif text-primary">
                {editingPost ? "Artikel bearbeiten" : "Neuer Blogartikel"}
              </DialogTitle>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="grid gap-2">
                    <Label htmlFor="title" className="uppercase text-xs font-bold opacity-60">Titel *</Label>
                    <Input id="title" required value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} className="h-12 rounded-xl" />
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="slug" className="uppercase text-xs font-bold opacity-60">URL-Pfad (Slug)</Label>
                    <Input id="slug" value={formData.slug} onChange={(e) => setFormData({...formData, slug: e.target.value})} className="h-12 rounded-xl" placeholder="mein-artikel-titel" />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="category" className="uppercase text-xs font-bold opacity-60">Kategorie</Label>
                    <Select value={formData.category} onValueChange={(val) => setFormData({...formData, category: val})}>
                      <SelectTrigger className="h-12 rounded-xl">
                        <SelectValue placeholder="Kategorie wählen" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl">
                        <SelectItem value="Allgemein">Allgemein</SelectItem>
                        <SelectItem value="Hebammenpraxis">Hebammenpraxis</SelectItem>
                        <SelectItem value="Naturheilkunde">Naturheilkunde</SelectItem>
                        <SelectItem value="Kinderwunsch">Kinderwunsch</SelectItem>
                        <SelectItem value="Tipps">Tipps & Tricks</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="image_url" className="uppercase text-xs font-bold opacity-60">Beitragsbild (URL)</Label>
                    <Input id="image_url" value={formData.image_url} onChange={(e) => setFormData({...formData, image_url: e.target.value})} className="h-12 rounded-xl" placeholder="https://..." />
                  </div>

                  <div className="grid gap-2">
                    <Label className="uppercase text-xs font-bold opacity-60">Aus Google Docs importieren</Label>
                    <div className="flex gap-3">
                      <input
                        type="file"
                        ref={fileInputRef}
                        accept=".html,.htm"
                        onChange={handleHtmlFileUpload}
                        className="hidden"
                        id="html-upload"
                      />
                      <label htmlFor="html-upload" className="flex-1 cursor-pointer">
                        <div className="h-12 rounded-xl border-2 border-dashed border-primary/20 hover:border-accent hover:bg-accent/5 transition-all flex items-center justify-center gap-2 text-sm font-medium text-primary/60">
                          <FileCode className="w-4 h-4" />
                          HTML-Datei aus Google Docs hochladen
                        </div>
                      </label>
                    </div>
                    <p className="text-[10px] text-muted-foreground">
                      In Google Docs: Datei → Herunterladen → Webseite (.html)
                    </p>
                  </div>

                  {/* Published Toggle */}
                  <div className="flex items-center justify-between p-5 bg-muted/30 rounded-2xl border border-border">
                    <div>
                      <p className="font-bold text-primary text-sm">Status</p>
                      <p className="text-xs text-muted-foreground">{formData.is_published ? "Wird live auf der Website angezeigt" : "Nur intern sichtbar (Entwurf)"}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setFormData({...formData, is_published: !formData.is_published})}
                      className={`relative w-14 h-7 rounded-full transition-colors ${
                        formData.is_published ? "bg-green-500" : "bg-slate-300"
                      }`}
                    >
                      <span className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                        formData.is_published ? "translate-x-8" : "translate-x-1"
                      }`} />
                    </button>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="grid gap-2">
                    <Label htmlFor="excerpt" className="uppercase text-xs font-bold opacity-60">Kurzbeschreibung (Auszug)</Label>
                    <Textarea id="excerpt" value={formData.excerpt} onChange={(e) => setFormData({...formData, excerpt: e.target.value})} className="h-24 rounded-xl resize-none" />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="content_html" className="uppercase text-xs font-bold opacity-60">Inhalt (HTML / Text)</Label>
                    <Textarea id="content_html" value={formData.content_html} onChange={(e) => setFormData({...formData, content_html: e.target.value})} className="min-h-[300px] rounded-xl font-mono text-sm" />
                  </div>
                </div>
              </div>

              <DialogFooter className="pt-8 border-t border-primary/5">
                <Button variant="ghost" type="button" onClick={() => setIsDialogOpen(false)} className="rounded-xl h-12 px-8">Abbrechen</Button>
                <Button type="submit" className="bg-primary text-white font-bold h-12 px-10 rounded-xl hover:shadow-lg transition-all">
                  {editingPost ? "Speichern" : (formData.is_published ? "Veröffentlichen" : "Als Entwurf speichern")}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>

      </div>
    </AdminLayout>
  );
}
