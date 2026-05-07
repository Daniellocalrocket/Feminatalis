import React, { useEffect, useState, useRef } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { supabase } from "@/integrations/supabase/client";
import { 
  Image as ImageIcon, 
  Save, 
  RefreshCw, 
  Upload,
  Link as LinkIcon,
  Trash2,
  Eye,
  Loader2
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const IMAGE_CONFIG = [
  {
    id: "naturheilpraxis",
    label: "Naturheilpraxis",
    images: [
      { key: "img_hero_naturheilpraxis", label: "Naturheilpraxis Index Hero", default: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2040&auto=format&fit=crop" },
      { key: "img_hero_tcm", label: "TCM Hero", default: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop" },
      { key: "img_hero_long_covid", label: "Long-Covid Hero", default: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop" },
      { key: "img_hero_schwermetall", label: "Schwermetall Hero", default: "https://images.unsplash.com/photo-1532187875605-1ef6c237f1f0?q=80&w=2070&auto=format&fit=crop" },
      { key: "img_hero_lasertherapie", label: "Lasertherapie Hero", default: "https://images.unsplash.com/photo-1579152276503-3406322316e6?q=80&w=2070&auto=format&fit=crop" },
      { key: "img_hero_mitochondrien", label: "Mitochondrien Hero", default: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=2070&auto=format&fit=crop" },
      { key: "img_hero_homoeopathie", label: "Homöopathie Hero", default: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=2070&auto=format&fit=crop" },
      { key: "img_hero_allergie", label: "Allergie Hero", default: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2070&auto=format&fit=crop" },
      { key: "img_hero_labor", label: "Labor Hero", default: "https://images.unsplash.com/photo-1579152276503-3406322316e6?q=80&w=2070&auto=format&fit=crop" },
      { key: "img_hero_infusionstherapie", label: "Infusionstherapie Hero", default: "https://images.unsplash.com/photo-1516670428252-df97bba108d1?q=80&w=2070&auto=format&fit=crop" },
      { key: "img_hero_co2_therapie", label: "CO2-Therapie Hero", default: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2070&auto=format&fit=crop" },
      { key: "img_hero_darmanalyse", label: "Darmanalyse Hero", default: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=2070&auto=format&fit=crop" },
      { key: "img_hero_hormontherapie", label: "Hormontherapie Hero", default: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2070&auto=format&fit=crop" },
      { key: "img_hero_blutegel", label: "Blutegel Hero", default: "https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=2070&auto=format&fit=crop" },
    ]
  },
  {
    id: "hebammenpraxis",
    label: "Hebammenpraxis",
    images: [
      { key: "img_hero_hebammenpraxis", label: "Hebammenpraxis Index Hero", default: "/hebammenpraxis_hero.png" },
      { key: "img_portrait_angela_hebamme", label: "Angela Deschner Porträt (Hebammenpraxis)", default: "/angela_deschner.png" },
      { key: "img_hero_mikronaehrstoffe", label: "Mikronährstoffe Hero", default: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070&auto=format&fit=crop" },
      { key: "img_hero_beschwerden", label: "Beschwerden Hero", default: "https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?q=80&w=2069&auto=format&fit=crop" },
      { key: "img_hero_geburtsvorbereitung", label: "Geburtsvorbereitung Hero", default: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2040&auto=format&fit=crop" },
      { key: "img_hero_zelltraining", label: "Zelltraining Hero", default: "https://images.unsplash.com/photo-1516670428252-df97bba108d1?q=80&w=2070&auto=format&fit=crop" },
      { key: "img_hero_wochenbett", label: "Wochenbett Hero", default: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2040&auto=format&fit=crop" },
      { key: "img_hero_rueckbildung", label: "Rückbildung Hero", default: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2040&auto=format&fit=crop" },
      { key: "img_hero_akupunktur", label: "Akupunktur Hero", default: "/akupunktur_hero.png" },
    ]
  },
  {
    id: "global",
    label: "Global & Home",
    images: [
      { key: "img_hero_home", label: "Home Hero", default: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2040&auto=format&fit=crop" },
      { key: "img_hebammen_section_home", label: "Home Hebammen Sektion", default: "/hebammen_section.png" },
      { key: "img_kinderwunsch_section_home", label: "Home Kinderwunsch Sektion", default: "/kinderwunsch_section.png" },
      { key: "img_instagram_portrait", label: "Home Instagram Porträt", default: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2000&auto=format&fit=crop" },
      { key: "img_hero_ueber_mich", label: "Über Mich Hero", default: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2040&auto=format&fit=crop" },
      { key: "img_hero_kinderwunsch", label: "Kinderwunsch Hero", default: "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=2070&auto=format&fit=crop" },
      { key: "img_portrait_angela", label: "Porträt Angela (Global)", default: "/angela_portrait.png" },
      { key: "img_portrait_romy", label: "Porträt Romy", default: "" },
    ]
  }
];

export default function AdminImages() {
  const [images, setImages] = useState<Record<string, string>>({});
  const [dbKeys, setDbKeys] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isUploading, setIsUploading] = useState<string | null>(null);
  const [previews, setPreviews] = useState<Record<string, string>>({});
  const fileInputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from('settings')
      .select('*')
      .like('key', 'img_%');

    if (error) {
      toast.error("Fehler beim Laden der Bilder");
    } else {
      const imageMap: Record<string, string> = {};
      const keys: string[] = [];
      data?.forEach(s => {
        imageMap[s.key] = s.value;
        keys.push(s.key);
      });
      setImages(imageMap);
      setPreviews(imageMap);
      setDbKeys(keys);
    }
    setIsLoading(false);
  };

  const handleUrlChange = (key: string, url: string) => {
    setImages(prev => ({ ...prev, [key]: url }));
    if (url.startsWith('http') || url.startsWith('/')) {
      setPreviews(prev => ({ ...prev, [key]: url }));
    }
  };

  const handleFileUpload = async (key: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      setIsUploading(key);
      const fileExt = file.name.split('.').pop();
      const fileName = `${key}_${Math.random().toString(36).substring(2)}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('site-images')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false
        });

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('site-images')
        .getPublicUrl(filePath);

      handleUrlChange(key, publicUrl);
      toast.success("Bild erfolgreich hochgeladen");
      
    } catch (error: any) {
      console.error("Upload error:", error);
      toast.error("Upload-Fehler: " + error.message);
    } finally {
      setIsUploading(null);
    }
  };

  const saveImages = async () => {
    setIsSaving(true);
    const upsertData = Object.entries(images).map(([key, value]) => ({
      key,
      value,
      updated_at: new Date().toISOString()
    }));

    const { error } = await supabase
      .from('settings')
      .upsert(upsertData);

    if (error) {
      toast.error("Fehler beim Speichern: " + error.message);
    } else {
      toast.success("Bilder wurden erfolgreich aktualisiert");
      fetchImages(); // Refresh keys
    }
    setIsSaving(false);
  };

  const resetToDefault = (key: string, defaultValue: string) => {
    handleUrlChange(key, defaultValue);
    toast.info("Auf Standardwert zurückgesetzt");
  };

  // Identify images in DB that are not in IMAGE_CONFIG
  const configuredKeys = new Set(IMAGE_CONFIG.flatMap(s => s.images.map(img => img.key)));
  const unconfiguredKeys = dbKeys.filter(key => !configuredKeys.has(key));

  const allTabs = [
    ...IMAGE_CONFIG,
    ...(unconfiguredKeys.length > 0 ? [{
      id: "uncategorized",
      label: "Weitere Bilder",
      images: unconfiguredKeys.map(key => ({
        key,
        label: key.replace("img_", "").replace(/_/g, " "),
        default: ""
      }))
    }] : [])
  ];

  if (isLoading) {
    return (
      <AdminLayout title="Bilder-Management">
        <div className="h-96 flex items-center justify-center">
          <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="Bilder-Management">
      <div className="max-w-6xl space-y-8 animate-in fade-in duration-500 pb-20">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-serif text-primary">Bilder-Management</h1>
            <p className="text-muted-foreground">Verwalte alle Bilder deiner Webseite an einem zentralen Ort.</p>
          </div>
          <Button 
            onClick={saveImages} 
            disabled={isSaving}
            className="h-14 rounded-2xl bg-primary text-white font-bold px-10 gap-3 hover:shadow-xl transition-all shadow-primary/20 shrink-0"
          >
            {isSaving ? <RefreshCw className="animate-spin" size={20} /> : <Save size={20} />}
            Alle Änderungen speichern
          </Button>
        </div>

        <Tabs defaultValue={allTabs[0].id} className="w-full">
          <TabsList className="bg-white/50 backdrop-blur-sm p-1 rounded-2xl border border-primary/5 mb-8 h-auto flex flex-wrap">
            {allTabs.map(section => (
              <TabsTrigger 
                key={section.id} 
                value={section.id}
                className="rounded-xl px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-white transition-all font-medium"
              >
                {section.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {allTabs.map(section => (
            <TabsContent key={section.id} value={section.id} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {section.images.map(img => (
                  <Card key={img.key} className="border-none shadow-xl shadow-primary/5 rounded-[2.5rem] bg-white overflow-hidden group">
                    <CardHeader className="p-6 pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg font-serif">{img.label}</CardTitle>
                          <CardDescription className="text-xs font-mono">{img.key}</CardDescription>
                        </div>
                        <div className="flex gap-2">
                          {img.default && (
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="rounded-full hover:bg-red-50 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                              onClick={() => resetToDefault(img.key, img.default)}
                              title="Auf Standard zurücksetzen"
                            >
                              <Trash2 size={16} />
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 pt-2 space-y-4">
                      <div className="aspect-video w-full rounded-2xl bg-slate-100 overflow-hidden relative group/img">
                        <img 
                          src={previews[img.key] || img.default || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80\u0026w=2426\u0026auto=format\u0026fit=crop"} 
                          alt={img.label}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-110"
                        />
                        {isUploading === img.key && (
                          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center">
                            <Loader2 className="animate-spin text-white w-10 h-10" />
                          </div>
                        )}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-3">
                           <Button 
                             variant="secondary" 
                             size="sm" 
                             className="rounded-xl gap-2"
                             onClick={() => fileInputRefs.current[img.key]?.click()}
                             disabled={isUploading === img.key}
                           >
                             <Upload size={14} /> Bild hochladen
                           </Button>
                           <input 
                             type="file" 
                             ref={el => fileInputRefs.current[img.key] = el}
                             className="hidden" 
                             accept="image/*"
                             onChange={(e) => handleFileUpload(img.key, e)}
                           />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor={img.key} className="text-[10px] font-bold uppercase opacity-60 flex items-center gap-2">
                          <LinkIcon size={12} /> Bild-URL
                        </Label>
                        <Input 
                          id={img.key} 
                          value={images[img.key] || ""} 
                          onChange={(e) => handleUrlChange(img.key, e.target.value)}
                          className="h-11 rounded-xl"
                          placeholder={img.default || "Hier URL einfügen..."}
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <Card className="border-none shadow-xl shadow-primary/5 rounded-[2.5rem] bg-emerald-50 overflow-hidden border-l-4 border-emerald-400">
           <CardContent className="p-8 flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                <Upload size={24} />
              </div>
              <div>
                <h4 className="font-bold text-emerald-900 text-lg">Dynamische Erfassung aktiv</h4>
                <p className="text-sm text-emerald-800 opacity-80">
                  Alle Bilder, die in der Datenbank gefunden werden (Präfix `img_`), werden hier automatisch angezeigt – auch wenn sie nicht explizit vorkonfiguriert sind. So behältst du immer die volle Kontrolle.
                </p>
              </div>
           </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
