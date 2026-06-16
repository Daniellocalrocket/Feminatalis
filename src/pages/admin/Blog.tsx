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
  FileCode,
  Bold,
  Italic,
  Underline,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Link as LinkIcon,
  Globe,
  RefreshCw,
  Save,
  Eye,
  Loader2,
  FileText,
  CheckCircle,
  AlertCircle,
  Copy,
  Check,
  ChevronLeft,
  Image
} from "lucide-react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogFooter
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Helper for generating clean German slugs
const generateSlug = (title: string) => {
  return title
    .toLowerCase()
    .trim()
    .replace(/[äöüß]/g, (m) => {
      const map: any = { 'ä': 'ae', 'ö': 'oe', 'ü': 'ue', 'ß': 'ss' };
      return map[m] || m;
    })
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
};

// Robust Google Docs HTML parser & cleaner
const cleanGoogleDocsHtml = (htmlString: string): { cleanHtml: string; localImages: string[] } => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, 'text/html');

  // Find all CSS rules inside style tags
  const classStyles: Record<string, { bold?: boolean; italic?: boolean; underline?: boolean; heading?: number }> = {};
  const styleTags = doc.querySelectorAll('style');
  styleTags.forEach(styleTag => {
    const cssText = styleTag.textContent || '';
    const classRegex = /\.([a-z0-9_-]+)\s*\{([^}]+)\}/gi;
    let match;
    while ((match = classRegex.exec(cssText)) !== null) {
      const className = match[1];
      const rules = match[2];
      
      const styleObj: any = {};
      if (/font-weight\s*:\s*(700|bold)/.test(rules)) styleObj.bold = true;
      if (/font-style\s*:\s*italic/.test(rules)) styleObj.italic = true;
      if (/text-decoration\s*:\s*underline/.test(rules)) styleObj.underline = true;
      
      // Determine heading levels
      const fontSizeMatch = rules.match(/font-size\s*:\s*([0-9.]+)\s*(pt|px)/);
      if (fontSizeMatch) {
        const size = parseFloat(fontSizeMatch[1]);
        const unit = fontSizeMatch[2];
        const sizeInPt = unit === 'px' ? size * 0.75 : size;
        if (sizeInPt >= 18) {
          styleObj.heading = 2;
        } else if (sizeInPt >= 13.5 && sizeInPt < 18) {
          styleObj.heading = 3;
        }
      }
      classStyles[className] = styleObj;
    }
  });

  const cleanNode = (node: Node): Node | Node[] | null => {
    if (node.nodeType === Node.TEXT_NODE) {
      return node.cloneNode(true);
    }
    if (node.nodeType !== Node.ELEMENT_NODE) {
      return null;
    }

    const element = node as HTMLElement;
    const tagName = element.tagName.toLowerCase();

    if (['style', 'script', 'meta', 'link', 'head', 'title'].includes(tagName)) {
      return null;
    }

    let isBold = false;
    let isItalic = false;
    let isUnderline = false;
    let headingLevel = 0;

    element.classList.forEach(cls => {
      const style = classStyles[cls];
      if (style) {
        if (style.bold) isBold = true;
        if (style.italic) isItalic = true;
        if (style.underline) isUnderline = true;
        if (style.heading) headingLevel = style.heading;
      }
    });

    const inlineStyle = element.getAttribute('style') || '';
    if (/font-weight\s*:\s*(700|bold)/.test(inlineStyle)) isBold = true;
    if (/font-style\s*:\s*italic/.test(inlineStyle)) isItalic = true;
    if (/text-decoration\s*:\s*underline/.test(inlineStyle)) isUnderline = true;
    if (/font-size\s*:\s*(18pt|20pt|24px)/.test(inlineStyle)) headingLevel = 2;
    if (/font-size\s*:\s*(14pt|16pt|18px)/.test(inlineStyle)) headingLevel = 3;

    const cleanedChildren: Node[] = [];
    element.childNodes.forEach(child => {
      const cleaned = cleanNode(child);
      if (cleaned) {
        if (Array.isArray(cleaned)) {
          cleanedChildren.push(...cleaned);
        } else {
          cleanedChildren.push(cleaned);
        }
      }
    });

    const wrapWithStyle = (children: Node[]): Node[] => {
      let result = children;
      if (isUnderline) {
        const u = document.createElement('u');
        result.forEach(c => u.appendChild(c));
        result = [u];
      }
      if (isItalic) {
        const em = document.createElement('em');
        result.forEach(c => em.appendChild(c));
        result = [em];
      }
      if (isBold) {
        const strong = document.createElement('strong');
        result.forEach(c => strong.appendChild(c));
        result = [strong];
      }
      return result;
    };

    if (tagName === 'span') {
      return wrapWithStyle(cleanedChildren);
    }

    if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(tagName)) {
      const targetTag = tagName === 'h1' ? 'h2' : tagName === 'h2' ? 'h3' : tagName;
      const h = document.createElement(targetTag);
      cleanedChildren.forEach(c => h.appendChild(c));
      return h;
    }

    if (headingLevel > 0) {
      const h = document.createElement(`h${headingLevel}`);
      cleanedChildren.forEach(c => h.appendChild(c));
      return h;
    }

    if (tagName === 'p') {
      const text = element.textContent?.trim() || '';
      if (text === '' && cleanedChildren.length === 0) {
        return null;
      }
      const p = document.createElement('p');
      wrapWithStyle(cleanedChildren).forEach(c => p.appendChild(c));
      return p;
    }

    if (tagName === 'a') {
      const a = document.createElement('a');
      a.setAttribute('href', element.getAttribute('href') || '');
      a.setAttribute('target', '_blank');
      a.setAttribute('rel', 'noopener noreferrer');
      wrapWithStyle(cleanedChildren).forEach(c => a.appendChild(c));
      return a;
    }

    if (tagName === 'img') {
      const img = document.createElement('img');
      img.setAttribute('src', element.getAttribute('src') || '');
      img.setAttribute('alt', element.getAttribute('alt') || '');
      img.setAttribute('class', 'rounded-xl my-6 max-h-96 w-auto object-cover');
      return img;
    }

    if (['ul', 'ol', 'li', 'blockquote', 'table', 'tr', 'td', 'th', 'thead', 'tbody'].includes(tagName)) {
      const newEl = document.createElement(tagName);
      if (tagName === 'blockquote') {
        newEl.setAttribute('class', 'border-l-4 border-primary/40 pl-6 my-6 italic text-muted-foreground');
      }
      cleanedChildren.forEach(c => newEl.appendChild(c));
      return newEl;
    }

    return cleanedChildren;
  };

  const body = doc.body;
  const cleanChildren: Node[] = [];
  body.childNodes.forEach(child => {
    const cleaned = cleanNode(child);
    if (cleaned) {
      if (Array.isArray(cleaned)) {
        cleanChildren.push(...cleaned);
      } else {
        cleanChildren.push(cleaned);
      }
    }
  });

  const wrapper = document.createElement('div');
  cleanChildren.forEach(c => wrapper.appendChild(c));
  
  // Find local image srcs
  const localImages: string[] = [];
  const imgs = wrapper.querySelectorAll('img');
  imgs.forEach(img => {
    const src = img.getAttribute('src') || '';
    if (src && !src.startsWith('http') && !src.startsWith('data:') && !src.startsWith('/')) {
      if (!localImages.includes(src)) {
        localImages.push(src);
      }
    }
  });

  return {
    cleanHtml: wrapper.innerHTML,
    localImages
  };
};

export default function AdminBlog() {
  const [posts, setPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [pubFilter, setPubFilter] = useState<"alle" | "published" | "draft">("alle");
  const fileInputRef = useRef<HTMLInputElement>(null);

  // States for Visual Editor & Mediathek
  const [activeTab, setActiveTab] = useState("content");
  const [mediathek, setMediathek] = useState<any[]>([]);
  const [isUploadingMedia, setIsUploadingMedia] = useState(false);
  const [copiedLink, setCopiedLink] = useState<string | null>(null);
  const [searchMedia, setSearchMedia] = useState("");

  // States for Google Docs Images Map
  const [localImages, setLocalImages] = useState<string[]>([]);
  const [uploadedLocalImages, setUploadedLocalImages] = useState<Record<string, string>>({});

  const editorRef = useRef<HTMLDivElement>(null);
  const savedRangeRef = useRef<Range | null>(null);

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
    fetchMediathek();
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

  const fetchMediathek = async () => {
    const { data, error } = await supabase.storage
      .from('site-images')
      .list('', {
        limit: 100,
        sortBy: { column: 'created_at', order: 'desc' }
      });
    
    if (error) {
      console.error("Error listing site-images:", error);
    } else {
      const imageList = (data || [])
        .filter(item => item.name.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i))
        .map(item => {
          const { data: { publicUrl } } = supabase.storage
            .from('site-images')
            .getPublicUrl(item.name);
          return {
            name: item.name,
            url: publicUrl,
            created_at: item.created_at
          };
        });
      setMediathek(imageList);
    }
  };

  const handleHtmlFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const text = await file.text();
      const { cleanHtml, localImages } = cleanGoogleDocsHtml(text);

      setFormData(prev => ({ ...prev, content_html: cleanHtml }));
      setLocalImages(localImages);
      setUploadedLocalImages({});
      
      toast.success("Inhalt aus Google Docs importiert und bereinigt!");
    } catch (err) {
      toast.error("Fehler beim Importieren der Datei");
    }

    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleUploadForLocalImage = async (localSrc: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const fileExt = file.name.split('.').pop();
      const cleanSlug = formData.slug || generateSlug(formData.title || 'post');
      const fileName = `blog_${cleanSlug}_imported_${Date.now()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from('site-images')
        .upload(fileName, file, {
          cacheControl: '3600',
          upsert: false
        });

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('site-images')
        .getPublicUrl(fileName);

      // Replace in content_html
      setFormData(prev => {
        const updatedHtml = prev.content_html.replace(new RegExp(localSrc, 'g'), publicUrl);
        return { ...prev, content_html: updatedHtml };
      });

      // Update ref in editor if visual tab is active
      if (editorRef.current) {
        editorRef.current.innerHTML = editorRef.current.innerHTML.replace(new RegExp(localSrc, 'g'), publicUrl);
      }

      setUploadedLocalImages(prev => ({ ...prev, [localSrc]: publicUrl }));
      toast.success("Bild erfolgreich hochgeladen und verknüpft!");
      fetchMediathek();
    } catch (err: any) {
      toast.error("Upload-Fehler: " + err.message);
    }
  };

  const handleMultiUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setIsUploadingMedia(true);
    let successCount = 0;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      try {
        const fileExt = file.name.split('.').pop();
        const cleanName = generateSlug(formData.title || 'blog');
        const fileName = `blog_${cleanName}_${Date.now()}_${i}.${fileExt}`;
        
        const { error } = await supabase.storage
          .from('site-images')
          .upload(fileName, file, {
            cacheControl: '3600',
            upsert: false
          });

        if (error) throw error;
        successCount++;
      } catch (err: any) {
        toast.error(`Fehler bei ${file.name}: ${err.message}`);
      }
    }

    if (successCount > 0) {
      toast.success(`${successCount} Bilder erfolgreich hochgeladen!`);
      fetchMediathek();
    }
    setIsUploadingMedia(false);
  };

  const handleUploadFeaturedImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const fileExt = file.name.split('.').pop();
      const cleanSlug = formData.slug || generateSlug(formData.title || 'post');
      const fileName = `blog_${cleanSlug}_featured_${Date.now()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from('site-images')
        .upload(fileName, file, {
          cacheControl: '3600',
          upsert: false
        });

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('site-images')
        .getPublicUrl(fileName);

      setFormData(prev => ({ ...prev, image_url: publicUrl }));
      toast.success("Beitragsbild erfolgreich hochgeladen!");
      fetchMediathek();
    } catch (err: any) {
      toast.error("Upload-Fehler: " + err.message);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    
    const slugToUse = formData.slug || generateSlug(formData.title);
    const postData = {
      ...formData,
      slug: slugToUse,
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
    setIsSaving(false);
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
    setLocalImages([]);
    setUploadedLocalImages({});
    setActiveTab("content");
    setIsDialogOpen(true);
  };

  const handleCreateNew = () => {
    setEditingPost(null);
    setFormData(initialPostState);
    setLocalImages([]);
    setUploadedLocalImages({});
    setActiveTab("content");
    setIsDialogOpen(true);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedLink(text);
    toast.success("Link kopiert!");
    setTimeout(() => setCopiedLink(null), 2000);
  };

  const saveSelection = () => {
    const sel = window.getSelection();
    if (sel && sel.rangeCount > 0) {
      savedRangeRef.current = sel.getRangeAt(0);
    }
  };

  const insertImageAtCursor = (url: string) => {
    if (editorRef.current) {
      editorRef.current.focus();
    }
    
    const sel = window.getSelection();
    if (sel && savedRangeRef.current) {
      sel.removeAllRanges();
      sel.addRange(savedRangeRef.current);
    }
    
    const html = `<img src="${url}" alt="" class="rounded-xl my-6 max-h-96 w-auto object-cover" />`;
    document.execCommand('insertHTML', false, html);
    
    if (editorRef.current) {
      setFormData(prev => ({ ...prev, content_html: editorRef.current!.innerHTML }));
    }
    
    toast.success("Bild eingefügt!");
    setActiveTab("content");
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

  const filteredMediathek = mediathek.filter(item => 
    item.name.toLowerCase().includes(searchMedia.toLowerCase())
  );

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
          <DialogContent className="max-w-6xl w-[95vw] h-[92vh] flex flex-col p-0 overflow-hidden rounded-[2.5rem] bg-stone-50 border-none">
            <style>{`
              .editor-content[contenteditable]:empty:before {
                content: attr(placeholder);
                color: #a3a3a3;
                pointer-events: none;
                display: block;
              }
            `}</style>
            
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 bg-white border-b border-primary/5">
              <div>
                <DialogTitle className="text-2xl font-serif text-primary">
                  {editingPost ? "Artikel bearbeiten" : "Neuer Blogartikel"}
                </DialogTitle>
                <p className="text-xs text-muted-foreground mt-1">
                  {formData.title ? `Titel: "${formData.title}"` : "Erstelle einen neuen Beitrag"}
                </p>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" onClick={() => setIsDialogOpen(false)} className="rounded-xl h-11 px-6">
                  Abbrechen
                </Button>
                <Button 
                  onClick={handleSubmit} 
                  disabled={isSaving}
                  className="bg-accent hover:bg-accent/90 text-white font-bold h-11 px-8 rounded-xl hover:shadow-lg transition-all"
                >
                  {isSaving ? "Wird gespeichert..." : (editingPost ? "Speichern" : (formData.is_published ? "Veröffentlichen" : "Als Entwurf speichern"))}
                </Button>
              </div>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col overflow-hidden">
              {/* Tab Navigation & Toolbar Info */}
              <div className="bg-white border-b border-primary/5 px-6 py-2 flex items-center justify-between shrink-0">
                <TabsList className="bg-primary/5 p-1 rounded-xl h-auto border-none">
                  <TabsTrigger value="content" className="rounded-lg px-4 py-2 text-sm font-medium transition-all">Inhalt (Editor)</TabsTrigger>
                  <TabsTrigger value="meta" className="rounded-lg px-4 py-2 text-sm font-medium transition-all">Metadaten</TabsTrigger>
                  <TabsTrigger value="media" className="rounded-lg px-4 py-2 text-sm font-medium transition-all">Mediathek</TabsTrigger>
                  <TabsTrigger value="code" className="rounded-lg px-4 py-2 text-sm font-medium transition-all">HTML-Code</TabsTrigger>
                  <TabsTrigger value="preview" className="rounded-lg px-4 py-2 text-sm font-medium transition-all">Live-Vorschau</TabsTrigger>
                </TabsList>
                
                <div className="flex items-center gap-3">
                  <span className="text-xs text-muted-foreground font-medium">Status:</span>
                  <button
                    type="button"
                    onClick={() => setFormData({...formData, is_published: !formData.is_published})}
                    className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${
                      formData.is_published 
                        ? "bg-green-50 text-green-700 border-green-200" 
                        : "bg-amber-50 text-amber-700 border-amber-200"
                    }`}
                  >
                    {formData.is_published ? "✓ Live" : "Entwurf"}
                  </button>
                </div>
              </div>

              {/* Scrollable Tab Content */}
              <div className="flex-1 overflow-y-auto p-8 bg-stone-50">
                
                {/* 1. Visual Editor Tab */}
                <TabsContent value="content" className="mt-0 h-full flex flex-col space-y-6 focus-visible:outline-none">
                  
                  {/* Google Doc Importer Panel */}
                  <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100 p-5 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex gap-3 items-center">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                        <FileCode size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-emerald-950 text-sm">Google Docs HTML Import</h4>
                        <p className="text-xs text-emerald-800 opacity-80">Importiere dein Webseiten-HTML aus Google Docs. Formatierungen und Listen werden automatisch bereinigt.</p>
                      </div>
                    </div>
                    <div>
                      <input
                        type="file"
                        ref={fileInputRef}
                        accept=".html,.htm"
                        onChange={handleHtmlFileUpload}
                        className="hidden"
                        id="html-editor-upload"
                      />
                      <label htmlFor="html-editor-upload" className="cursor-pointer">
                        <div className="h-10 px-5 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 text-xs font-bold shadow-md shadow-emerald-700/10">
                          <Upload size={14} /> Datei hochladen
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Imported Local Images Mapping Helper */}
                  {localImages.length > 0 && (
                    <div className="bg-amber-50 border border-amber-200 p-6 rounded-2xl space-y-4">
                      <div className="flex gap-2 items-center text-amber-800">
                        <AlertCircle size={18} className="shrink-0" />
                        <h4 className="font-bold text-sm">Gefundene Bilder aus Google Doc ({localImages.length})</h4>
                      </div>
                      <p className="text-xs text-amber-700 leading-relaxed">
                        Die folgenden Bilder sind im importierten Dokument referenziert. Lade bitte die Original-Bilddateien hoch, damit sie automatisch durch Web-URLs im Text ersetzt werden.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                        {localImages.map(src => {
                          const isUploaded = !!uploadedLocalImages[src];
                          return (
                            <div key={src} className="flex items-center justify-between gap-4 p-3 bg-white rounded-xl border border-amber-200/50 shadow-sm">
                              <div className="flex flex-col min-w-0">
                                <span className="text-xs font-bold text-primary truncate" title={src.split('/').pop()}>{src.split('/').pop()}</span>
                                <span className="text-[10px] text-muted-foreground font-mono truncate" title={src}>{src}</span>
                              </div>
                              <div>
                                {isUploaded ? (
                                  <Badge className="bg-green-50 text-green-700 border-green-200 border flex gap-1 items-center py-1.5 px-3">
                                    <CheckCircle size={12} /> Aktiv
                                  </Badge>
                                ) : (
                                  <div className="relative">
                                    <input 
                                      type="file" 
                                      id={`local-img-upload-${src}`}
                                      accept="image/*" 
                                      onChange={(e) => handleUploadForLocalImage(src, e)}
                                      className="hidden" 
                                    />
                                    <label htmlFor={`local-img-upload-${src}`} className="h-8 px-3 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-[11px] font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm">
                                      <Upload size={12} /> Bild wählen
                                    </label>
                                  </div>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* WYSIWYG Editor Component */}
                  <div className="flex-1 flex flex-col min-h-[450px]">
                    <div className="flex flex-wrap items-center gap-1 p-2 bg-white rounded-t-2xl border border-primary/10 border-b-none shadow-sm sticky top-0 z-10">
                      <Button 
                        type="button" 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => {
                          if (editorRef.current) editorRef.current.focus();
                          document.execCommand('bold', false);
                          if (editorRef.current) setFormData(prev => ({ ...prev, content_html: editorRef.current!.innerHTML }));
                        }} 
                        className="h-9 w-9 rounded-lg hover:bg-primary/5 text-primary/70"
                        title="Fett"
                      >
                        <Bold size={16} />
                      </Button>
                      <Button 
                        type="button" 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => {
                          if (editorRef.current) editorRef.current.focus();
                          document.execCommand('italic', false);
                          if (editorRef.current) setFormData(prev => ({ ...prev, content_html: editorRef.current!.innerHTML }));
                        }} 
                        className="h-9 w-9 rounded-lg hover:bg-primary/5 text-primary/70"
                        title="Kursiv"
                      >
                        <Italic size={16} />
                      </Button>
                      <Button 
                        type="button" 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => {
                          if (editorRef.current) editorRef.current.focus();
                          document.execCommand('underline', false);
                          if (editorRef.current) setFormData(prev => ({ ...prev, content_html: editorRef.current!.innerHTML }));
                        }} 
                        className="h-9 w-9 rounded-lg hover:bg-primary/5 text-primary/70"
                        title="Unterstrichen"
                      >
                        <Underline size={16} />
                      </Button>
                      
                      <div className="w-px h-5 bg-primary/10 mx-1" />

                      <Button 
                        type="button" 
                        variant="ghost" 
                        className="h-9 px-2.5 rounded-lg hover:bg-primary/5 text-primary/70 font-serif text-xs font-bold"
                        onClick={() => {
                          if (editorRef.current) editorRef.current.focus();
                          document.execCommand('formatBlock', false, '<h2>');
                          if (editorRef.current) setFormData(prev => ({ ...prev, content_html: editorRef.current!.innerHTML }));
                        }}
                        title="Überschrift H2"
                      >
                        H2
                      </Button>
                      <Button 
                        type="button" 
                        variant="ghost" 
                        className="h-9 px-2.5 rounded-lg hover:bg-primary/5 text-primary/70 font-serif text-xs font-bold"
                        onClick={() => {
                          if (editorRef.current) editorRef.current.focus();
                          document.execCommand('formatBlock', false, '<h3>');
                          if (editorRef.current) setFormData(prev => ({ ...prev, content_html: editorRef.current!.innerHTML }));
                        }}
                        title="Überschrift H3"
                      >
                        H3
                      </Button>
                      <Button 
                        type="button" 
                        variant="ghost" 
                        className="h-9 px-2.5 rounded-lg hover:bg-primary/5 text-primary/70 text-xs font-bold"
                        onClick={() => {
                          if (editorRef.current) editorRef.current.focus();
                          document.execCommand('formatBlock', false, '<p>');
                          if (editorRef.current) setFormData(prev => ({ ...prev, content_html: editorRef.current!.innerHTML }));
                        }}
                        title="Standardtext"
                      >
                        Text
                      </Button>

                      <div className="w-px h-5 bg-primary/10 mx-1" />

                      <Button 
                        type="button" 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => {
                          if (editorRef.current) editorRef.current.focus();
                          document.execCommand('insertUnorderedList', false);
                          if (editorRef.current) setFormData(prev => ({ ...prev, content_html: editorRef.current!.innerHTML }));
                        }} 
                        className="h-9 w-9 rounded-lg hover:bg-primary/5 text-primary/70"
                        title="Aufzählungsliste"
                      >
                        <List size={16} />
                      </Button>
                      <Button 
                        type="button" 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => {
                          if (editorRef.current) editorRef.current.focus();
                          document.execCommand('insertOrderedList', false);
                          if (editorRef.current) setFormData(prev => ({ ...prev, content_html: editorRef.current!.innerHTML }));
                        }} 
                        className="h-9 w-9 rounded-lg hover:bg-primary/5 text-primary/70"
                        title="Nummerierte Liste"
                      >
                        <ListOrdered size={16} />
                      </Button>

                      <div className="w-px h-5 bg-primary/10 mx-1" />

                      <Button 
                        type="button" 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => {
                          if (editorRef.current) editorRef.current.focus();
                          const url = prompt("Link-URL eingeben:");
                          if (url) {
                            document.execCommand('createLink', false, url);
                            if (editorRef.current) setFormData(prev => ({ ...prev, content_html: editorRef.current!.innerHTML }));
                          }
                        }} 
                        className="h-9 w-9 rounded-lg hover:bg-primary/5 text-primary/70"
                        title="Link einfügen"
                      >
                        <LinkIcon size={16} />
                      </Button>
                      <Button 
                        type="button" 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => {
                          saveSelection();
                          setActiveTab("media");
                          toast.info("Wähle ein Bild aus deiner Mediathek aus.");
                        }} 
                        className="h-9 w-9 rounded-lg hover:bg-primary/5 text-primary/70"
                        title="Bild einfügen"
                      >
                        <Image size={16} />
                      </Button>

                      <div className="w-px h-5 bg-primary/10 mx-1" />

                      <Button 
                        type="button" 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => {
                          if (editorRef.current) editorRef.current.focus();
                          document.execCommand('removeFormat', false);
                          if (editorRef.current) setFormData(prev => ({ ...prev, content_html: editorRef.current!.innerHTML }));
                        }} 
                        className="h-9 w-9 rounded-lg hover:bg-primary/5 text-red-500/70"
                        title="Formatierung löschen"
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                    
                    <div 
                      ref={editorRef}
                      contentEditable={true}
                      onInput={() => {
                        if (editorRef.current) {
                          setFormData(prev => ({ ...prev, content_html: editorRef.current!.innerHTML }));
                        }
                      }}
                      onBlur={() => {
                        saveSelection();
                        if (editorRef.current) {
                          setFormData(prev => ({ ...prev, content_html: editorRef.current!.innerHTML }));
                        }
                      }}
                      onKeyUp={saveSelection}
                      onMouseUp={saveSelection}
                      className="editor-content flex-1 min-h-[350px] p-6 focus:outline-none overflow-y-auto bg-white border border-primary/10 rounded-b-2xl prose prose-xl max-w-none prose-headings:font-serif prose-headings:text-primary prose-a:text-accent prose-img:rounded-2xl prose-img:shadow-md"
                      placeholder="Schreibe deinen Artikel hier oder importiere ein Google Doc..."
                      dangerouslySetInnerHTML={{ __html: formData.content_html }}
                    />
                  </div>
                </TabsContent>

                {/* 2. Metadata Tab */}
                <TabsContent value="meta" className="mt-0 h-full space-y-6 focus-visible:outline-none">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 rounded-[2rem] border border-primary/5 shadow-xl shadow-primary/5">
                    <div className="space-y-6">
                      <div className="grid gap-2">
                        <Label htmlFor="title" className="uppercase text-xs font-bold opacity-60">Titel *</Label>
                        <Input 
                          id="title" 
                          required 
                          value={formData.title} 
                          onChange={(e) => {
                            const newTitle = e.target.value;
                            setFormData(prev => ({
                              ...prev,
                              title: newTitle,
                              slug: prev.slug || generateSlug(newTitle)
                            }));
                          }} 
                          className="h-12 rounded-xl border-primary/10 focus:border-accent" 
                        />
                      </div>
                      
                      <div className="grid gap-2">
                        <Label htmlFor="slug" className="uppercase text-xs font-bold opacity-60">URL-Pfad (Slug)</Label>
                        <Input 
                          id="slug" 
                          value={formData.slug} 
                          onChange={(e) => setFormData({...formData, slug: generateSlug(e.target.value)})} 
                          className="h-12 rounded-xl border-primary/10 focus:border-accent font-mono" 
                          placeholder="mein-artikel-titel" 
                        />
                      </div>

                      <div className="grid gap-2">
                        <Label htmlFor="category" className="uppercase text-xs font-bold opacity-60">Kategorie</Label>
                        <Select value={formData.category} onValueChange={(val) => setFormData({...formData, category: val})}>
                          <SelectTrigger className="h-12 rounded-xl border-primary/10 focus:border-accent bg-white">
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
                    </div>

                    <div className="space-y-6">
                      <div className="grid gap-2">
                        <Label htmlFor="excerpt" className="uppercase text-xs font-bold opacity-60">Kurzbeschreibung (Auszug)</Label>
                        <Textarea 
                          id="excerpt" 
                          value={formData.excerpt} 
                          onChange={(e) => setFormData({...formData, excerpt: e.target.value})} 
                          className="h-24 rounded-xl border-primary/10 focus:border-accent resize-none p-4" 
                          placeholder="Eine kurze Zusammenfassung für die Beitrags-Vorschau..."
                        />
                      </div>

                      <div className="grid gap-2">
                        <Label className="uppercase text-xs font-bold opacity-60">Haupt-Beitragsbild (Featured Image)</Label>
                        <div className="flex gap-4 items-center">
                          <div className="w-24 h-24 rounded-xl bg-slate-50 border border-primary/10 overflow-hidden shrink-0 flex items-center justify-center relative">
                            {formData.image_url ? (
                              <img src={formData.image_url} alt="" className="w-full h-full object-cover" />
                            ) : (
                              <Image size={24} className="text-primary/20" />
                            )}
                          </div>
                          <div className="flex-1 space-y-2">
                            <Input 
                              value={formData.image_url} 
                              onChange={(e) => setFormData({...formData, image_url: e.target.value})}
                              placeholder="Bild URL (https://...)" 
                              className="h-11 rounded-xl border-primary/10"
                            />
                            <div className="flex gap-2">
                              <input 
                                type="file" 
                                id="featured-image-upload" 
                                accept="image/*" 
                                onChange={handleUploadFeaturedImage}
                                className="hidden" 
                              />
                              <label htmlFor="featured-image-upload" className="h-9 px-4 rounded-lg bg-primary/5 hover:bg-primary/10 text-primary text-xs font-bold flex items-center gap-1.5 cursor-pointer border border-primary/10 transition-all">
                                <Upload size={12} /> Bild hochladen
                              </label>
                              <Button 
                                type="button" 
                                variant="outline" 
                                onClick={() => {
                                  saveSelection();
                                  setActiveTab("media");
                                  toast.info("Wähle ein Bild für den Hauptbeitrag aus.");
                                }}
                                className="h-9 px-4 rounded-lg text-xs"
                              >
                                Aus Mediathek
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* 3. Mediathek (Gallery & Upload) Tab */}
                <TabsContent value="media" className="mt-0 h-full space-y-6 focus-visible:outline-none">
                  
                  {/* Gallery Actions */}
                  <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-6 rounded-2xl border border-primary/5 shadow-md">
                    <div className="relative w-full md:max-w-md">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/30" />
                      <Input 
                        placeholder="Bilder durchsuchen..."
                        value={searchMedia}
                        onChange={e => setSearchMedia(e.target.value)}
                        className="pl-10 h-11 rounded-xl border-primary/10"
                      />
                    </div>
                    
                    <div className="shrink-0">
                      <input 
                        type="file" 
                        id="media-multi-upload" 
                        multiple 
                        accept="image/*" 
                        onChange={handleMultiUpload}
                        className="hidden" 
                      />
                      <label htmlFor="media-multi-upload" className="h-11 px-6 rounded-xl bg-accent text-white hover:bg-accent/90 transition-all flex items-center justify-center gap-2 text-sm font-bold shadow-md cursor-pointer">
                        {isUploadingMedia ? <RefreshCw className="animate-spin" size={16} /> : <Upload size={16} />}
                        Mehrere Bilder hochladen
                      </label>
                    </div>
                  </div>

                  {/* Gallery Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {filteredMediathek.map(item => (
                      <Card key={item.name} className="border-none shadow-md hover:shadow-lg transition-all rounded-2xl bg-white overflow-hidden group">
                        <div className="aspect-video relative overflow-hidden bg-slate-50 border-b border-primary/5">
                          <img src={item.url} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                            <Button 
                              type="button" 
                              variant="secondary" 
                              size="sm" 
                              className="rounded-lg h-8 text-xs font-bold"
                              onClick={() => {
                                // If featured image was requested, replace featured url
                                if (activeTab === "meta") {
                                  setFormData(prev => ({ ...prev, image_url: item.url }));
                                  toast.success("Beitragsbild gesetzt!");
                                  setActiveTab("meta");
                                } else {
                                  insertImageAtCursor(item.url);
                                }
                              }}
                            >
                              {activeTab === "meta" ? "Festlegen" : "Einfügen"}
                            </Button>
                          </div>
                        </div>
                        <CardHeader className="p-3">
                          <CardTitle className="text-xs truncate font-mono" title={item.name}>{item.name}</CardTitle>
                          <div className="flex gap-2 items-center justify-between pt-1">
                            <span className="text-[10px] text-muted-foreground">{formatDate(item.created_at)}</span>
                            <div className="flex gap-1">
                              <Button 
                                type="button" 
                                variant="ghost" 
                                size="icon" 
                                className="h-7 w-7 rounded-lg hover:bg-primary/5"
                                onClick={() => copyToClipboard(item.url)}
                                title="URL kopieren"
                              >
                                {copiedLink === item.url ? <Check size={12} className="text-green-600" /> : <Copy size={12} />}
                              </Button>
                            </div>
                          </div>
                        </CardHeader>
                      </Card>
                    ))}
                    {filteredMediathek.length === 0 && (
                      <div className="col-span-full h-48 flex flex-col items-center justify-center text-muted-foreground">
                        <Image size={32} className="opacity-15 mb-2" />
                        Keine Bilder in der Mediathek gefunden
                      </div>
                    )}
                  </div>
                </TabsContent>

                {/* 4. HTML Code Tab */}
                <TabsContent value="code" className="mt-0 h-full space-y-6 focus-visible:outline-none">
                  <div className="flex flex-col h-full bg-white border border-primary/10 rounded-2xl overflow-hidden shadow-sm">
                    <div className="bg-slate-50 border-b border-primary/5 p-3 flex items-center justify-between shrink-0">
                      <span className="text-xs font-bold text-primary flex items-center gap-1.5"><FileCode size={14} /> Roher HTML Code</span>
                      <span className="text-[10px] text-muted-foreground font-mono">Direkte manuelle Text-Bearbeitung</span>
                    </div>
                    <textarea 
                      value={formData.content_html} 
                      onChange={(e) => {
                        const newHtml = e.target.value;
                        setFormData({...formData, content_html: newHtml});
                        // Also update editor element if visual editor was instantiated
                        if (editorRef.current) editorRef.current.innerHTML = newHtml;
                      }}
                      className="flex-1 p-6 font-mono text-sm focus:outline-none min-h-[400px] resize-none bg-slate-950 text-slate-100 leading-relaxed" 
                    />
                  </div>
                </TabsContent>

                {/* 5. Live Preview Tab */}
                <TabsContent value="preview" className="mt-0 h-full focus-visible:outline-none">
                  <div className="bg-white rounded-[2rem] border border-primary/5 p-8 shadow-xl max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-8 pb-8 border-b border-slate-100">
                      <div className="flex justify-center mb-4">
                        <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 uppercase tracking-widest px-4 py-1">
                          {formData.category}
                        </Badge>
                      </div>
                      <h1 className="text-3xl md:text-4xl font-serif text-primary mb-4 leading-tight font-bold">
                        {formData.title || "Titel des Artikels"}
                      </h1>
                      <div className="text-sm text-muted-foreground flex items-center justify-center gap-4">
                        <span><Calendar size={14} className="inline mr-1" /> {formatDate(new Date().toISOString())}</span>
                        <span><Tag size={14} className="inline mr-1" /> {formData.slug || "slug-url"}</span>
                      </div>
                    </div>

                    {/* Featured Image */}
                    {formData.image_url && (
                      <div className="aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden mb-8 shadow-md border border-slate-100">
                        <img src={formData.image_url} alt="" className="w-full h-full object-cover" />
                      </div>
                    )}

                    {/* Excerpt */}
                    {formData.excerpt && (
                      <div className="text-lg font-serif italic text-primary/80 border-l-4 border-accent pl-4 mb-8 leading-relaxed">
                        {formData.excerpt}
                      </div>
                    )}

                    {/* Body Content */}
                    <div 
                      className="prose prose-xl prose-headings:font-serif prose-headings:text-primary prose-a:text-accent max-w-none text-primary/95"
                      dangerouslySetInnerHTML={{ __html: formData.content_html || "<p className='text-muted-foreground italic'>Kein Inhalt verfasst.</p>" }}
                    />
                  </div>
                </TabsContent>

              </div>
            </Tabs>
          </DialogContent>
        </Dialog>

      </div>
    </AdminLayout>
  );
}
