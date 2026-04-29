import React, { useEffect, useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { supabase } from "@/integrations/supabase/client";
import { 
  Image as ImageIcon, 
  Save, 
  RefreshCw, 
  Upload,
  Link as LinkIcon,
  Trash2,
  Eye
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
      { key: "img_hero_mikronaehrstoffe", label: "Mikronährstoffe Hero", default: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070&auto=format&fit=crop" },
      { key: "img_hero_beschwerden", label: "Beschwerden Hero", default: "https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?q=80&w=2069&auto=format&fit=crop" },
      { key: "img_hero_geburtsvorbereitung", label: "Geburtsvorbereitung Hero", default: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2040&auto=format&fit=crop" },
      { key: "img_hero_zelltraining", label: "Zelltraining Hero", default: "https://images.unsplash.com/photo-1516670428252-df97bba108d1?q=80&w=2070&auto=format&fit=crop" },
      { key: "img_hero_wochenbett", label: "Wochenbett Hero", default: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2040&auto=format&fit=crop" },
      { key: "img_hero_rueckbildung", label: "Rückbildung Hero", default: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2040&auto=format&fit=crop" },
    ]
  },
  {
    id: "global",
    label: "Global & Home",
    images: [
      { key: "img_hero_home", label: "Home Hero", default: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2040&auto=format&fit=crop" },
      { key: "img_hero_ueber_mich", label: "Über Mich Hero", default: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2040&auto=format&fit=crop" },
      { key: "img_hero_kinderwunsch", label: "Kinderwunsch Hero", default: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2040&auto=format&fit=crop" },
    ]
  }
];

export default function AdminImages() {
  const [images, setImages] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [previews, setPreviews] = useState<Record<string, string>>({});

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
      data?.forEach(s => {
        imageMap[s.key] = s.value;
      });
      setImages(imageMap);
      setPreviews(imageMap);
    }
    setIsLoading(false);
  };

  const handleUrlChange = (key: string, url: string) => {
    setImages(prev => ({ ...prev, [key]: url }));
    // Basic URL validation before showing preview
    if (url.startsWith('http') || url.startsWith('/')) {
      setPreviews(prev => ({ ...prev, [key]: url }));
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
    }
    setIsSaving(false);
  };

  const resetToDefault = (key: string, defaultValue: string) => {
    handleUrlChange(key, defaultValue);
    toast.info("Auf Standardwert zurückgesetzt");
  };

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
            <p className="text-muted-foreground">Tausche hier die visuellen Assets der Webseite aus.</p>
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

        <Tabs defaultValue="naturheilpraxis" className="w-full">
          <TabsList className="bg-white/50 backdrop-blur-sm p-1 rounded-2xl border border-primary/5 mb-8 h-auto flex flex-wrap">
            {IMAGE_CONFIG.map(section => (
              <TabsTrigger 
                key={section.id} 
                value={section.id}
                className="rounded-xl px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-white transition-all font-medium"
              >
                {section.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {IMAGE_CONFIG.map(section => (
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
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="rounded-full hover:bg-red-50 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={() => resetToDefault(img.key, img.default)}
                            title="Auf Standard zurücksetzen"
                          >
                            <Trash2 size={16} />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 pt-2 space-y-4">
                      {/* Image Preview */}
                      <div className="aspect-video w-full rounded-2xl bg-slate-100 overflow-hidden relative group/img">
                        <img 
                          src={previews[img.key] || img.default} 
                          alt={img.label}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-110"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop";
                          }}
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-3">
                           <Button variant="secondary" size="sm" className="rounded-xl gap-2">
                             <Eye size={14} /> Vorschau
                           </Button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor={img.key} className="text-[10px] font-bold uppercase opacity-60 flex items-center gap-2">
                          <LinkIcon size={12} /> Bild-URL (Unsplash, CDN oder Local)
                        </Label>
                        <div className="flex gap-2">
                          <Input 
                            id={img.key} 
                            value={images[img.key] || ""} 
                            onChange={(e) => handleUrlChange(img.key, e.target.value)}
                            className="h-11 rounded-xl flex-1"
                            placeholder={img.default}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <Card className="border-none shadow-xl shadow-primary/5 rounded-[2.5rem] bg-amber-50 overflow-hidden border-l-4 border-amber-400">
           <CardContent className="p-8 flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 shrink-0">
                <ImageIcon size={24} />
              </div>
              <div>
                <h4 className="font-bold text-amber-900">Pro-Tipp für beste Performance</h4>
                <p className="text-sm text-amber-800 opacity-80">
                  Nutze vorzugsweise optimierte URLs von Unsplash (mit <code className="bg-amber-200/50 px-1 py-0.5 rounded">&auto=format&fit=crop&w=2000</code> Parameter) oder lade deine eigenen Bilder in ein CDN hoch. Große, unkomprimierte Bilder können die Ladezeit der Webseite negativ beeinflussen.
                </p>
              </div>
           </CardContent>
        </Card>

      </div>
    </AdminLayout>
  );
}
