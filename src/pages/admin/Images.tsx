import React, { useEffect, useState, useRef, useMemo } from "react";
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
  Loader2,
  ScanSearch,
  PlusCircle
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import assetImages from "@/data/assetImages";

const IMAGE_CONFIG = [
  {
    id: "startseite",
    label: "Startseite",
    images: [
      { key: "img_hero_home", label: "Hero-Bereich", default: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2040&auto=format&fit=crop" },
      { key: "img_hebammen_section_home", label: "Sektion Hebammenpraxis", default: "/hebammen_section.png" },
      { key: "img_kinderwunsch_section_home", label: "Sektion Kinderwunsch", default: "/kinderwunsch_section.png" },
      { key: "img_portrait_angela", label: "Porträt Angela (Expertin)", default: "/angela_portrait.png" },
      { key: "img_instagram_portrait", label: "Instagram Porträt", default: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2000&auto=format&fit=crop" },
      { key: "img_mitochondrien_3", label: "Mitochondrien-Teaser", default: "/assets/Mitochiondrien 3.jpg" },
      { key: "img_praxis_hauseinhang", label: "Praxis Hauseingang", default: "/assets/Praxisbilder/Hauseinhang-min.jpg" },
    ]
  },
  {
    id: "naturheilpraxis",
    label: "Naturheilpraxis",
    images: [
      { key: "img_hero_naturheilpraxis", label: "Übersicht – Hero", page: "Übersicht", default: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2040&auto=format&fit=crop" },
      { key: "img_hero_labor", label: "Labor – Hero", page: "Labordiagnostik", default: "https://images.unsplash.com/photo-1579152276503-3406322316e6?q=80&w=2070&auto=format&fit=crop" },
      { key: "img_bluttest_labor", label: "Labor – Bluttest", page: "Labordiagnostik", default: "/assets/blood-test-21.jpg" },
      { key: "img_hero_infusionstherapie", label: "Infusionstherapie – Hero", page: "Infusionstherapie", default: "/assets/iv-drip-vitamin-infusion-therapy.jpg" },
      { key: "img_infusion_image9", label: "Infusionstherapie – Inhaltsstoffe", page: "Infusionstherapie", default: "/assets/image (9).jpg" },
      { key: "img_hero_mitochondrien", label: "Mitochondrien – Hero", page: "Mitochondrien", default: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=2070&auto=format&fit=crop" },
      { key: "img_atmungskette", label: "Mitochondrien – Atmungskette", page: "Mitochondrien", default: "/assets/Atmungskette.jpg" },
      { key: "img_bhi_ihht", label: "Mitochondrien – BHI Gerät", page: "Mitochondrien", default: "/assets/BHI Manovska IHT.JPG" },
      { key: "img_mito_befund", label: "Mitochondrien – Befund Laktat", page: "Mitochondrien", default: "/assets/mitochondrien-befund, laktat.jpg" },
      { key: "img_brainlight_hero", label: "BrainLight – Hero", page: "BrainLight", default: "/brainlight-hero.jpg" },
      { key: "img_brainlight_black", label: "BrainLight – Sessel Black", page: "BrainLight", default: "/brainlight-chair-black.jpg" },
      { key: "img_brainlight_beige", label: "BrainLight – Sessel Beige", page: "BrainLight", default: "/brainlight-chair-beige.jpg" },
      { key: "img_hero_tcm", label: "TCM – Hero", page: "TCM", default: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop" },
      { key: "img_schroepfen_header", label: "TCM – Schröpfen (Header)", page: "TCM", default: "/suction-cups-therapy-session-close-up.jpg" },
      { key: "img_akupunktur_modell", label: "TCM – Akupunktur Modell", page: "TCM", default: "/akupunktur-modell.png" },
      { key: "img_akupunktur_behandlung", label: "TCM – Akupunktur Behandlung", page: "TCM", default: "/akupunktur-behandlung.png" },
      { key: "img_pulsdiagnostik", label: "TCM – Pulsdiagnostik", page: "TCM", default: "/pulsdiagnostik.png" },
      { key: "img_zungendiagnostik", label: "TCM – Zungendiagnostik", page: "TCM", default: "/zungendiagnostik.png" },
      { key: "img_moxa_zigarre", label: "TCM – Moxa Zigarre", page: "TCM", default: "/moxa-zigarre.png" },
      { key: "img_moxa_box", label: "TCM – Moxa Box", page: "TCM", default: "/moxa-box.png" },
      { key: "img_fuenf_elemente", label: "TCM – 5-Elemente", page: "TCM", default: "/fuenf-elemente-diagramm.png" },
      { key: "img_schroepfen_feuer", label: "TCM – Schröpfen Feuer", page: "TCM", default: "/schroepfen-feuer.png" },
      { key: "img_schroepfen_blutig", label: "TCM – Schröpfen Blutig", page: "TCM", default: "/schroepfen-blutig.png" },
      { key: "img_akutaping_nacken", label: "TCM – Aku-Taping Nacken", page: "TCM", default: "/akutaping-nacken.png" },
      { key: "img_akutaping_schwangerschaft", label: "TCM – Aku-Taping Schwangerschaft", page: "TCM", default: "/akutaping-schwangerschaft.png" },
      { key: "img_hero_darmanalyse", label: "Darmanalyse – Hero", page: "Darmanalyse", default: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=2070&auto=format&fit=crop" },
      { key: "img_hero_hormontherapie", label: "Hormontherapie – Hero", page: "Hormontherapie", default: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2070&auto=format&fit=crop" },
      { key: "img_hero_co2_therapie", label: "CO2-Trockenbad – Hero", page: "CO₂-Trockenbad", default: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2070&auto=format&fit=crop" },
      { key: "img_hero_long_covid", label: "Long-Covid – Hero", page: "Long Covid", default: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop" },
      { key: "img_hero_schwermetall", label: "Schwermetall – Hero", page: "Schwermetall", default: "https://images.unsplash.com/photo-1532187875605-1ef6c237f1f0?q=80&w=2070&auto=format&fit=crop" },
      { key: "img_hero_lasertherapie", label: "Lasertherapie – Hero", page: "Lasertherapie", default: "https://images.unsplash.com/photo-1579152276503-3406322316e6?q=80&w=2070&auto=format&fit=crop" },
      { key: "img_hero_homoeopathie", label: "Homöopathie – Hero", page: "Homöopathie", default: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=2070&auto=format&fit=crop" },
      { key: "img_hero_allergie", label: "Allergie – Hero", page: "Allergie", default: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2070&auto=format&fit=crop" },
      { key: "img_hero_blutegel", label: "Blutegel – Hero", page: "Blutegel", default: "https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=2070&auto=format&fit=crop" },
    ]
  },
  {
    id: "hebammenpraxis",
    label: "Hebammenpraxis",
    images: [
      { key: "img_hero_hebammenpraxis", label: "Übersicht – Hero", page: "Übersicht", default: "/hebammenpraxis_hero.png" },
      { key: "img_portrait_angela_hebamme", label: "Übersicht – Porträt Angela", page: "Übersicht", default: "/angela_deschner.png" },
      { key: "img_yoga_pilates", label: "Übersicht – Yoga/Pilates", page: "Übersicht", default: "/assets/person-doing-yoga-pilates.jpg" },
      { key: "img_hero_beschwerden", label: "Schwangerschaftsbeschwerden – Hero", page: "Schwangerschaftsbeschwerden", default: "https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?q=80&w=2069&auto=format&fit=crop" },
      { key: "img_hero_mikronaehrstoffe", label: "Mikronährstoffe – Hero", page: "Mikronährstoffe", default: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070&auto=format&fit=crop" },
      { key: "img_hero_geburtsvorbereitung", label: "Geburtsvorbereitung – Hero", page: "Geburtsvorbereitung", default: "/assets/loving-husband-hugging-pregnant-wifes-belly-male-hands-big-tummy-love-parenthood-pregnancy-concept.jpg" },
      { key: "img_geburtsvorbereitung_paare", label: "Geburtsvorbereitung – Paare", page: "Geburtsvorbereitung", default: "/assets/top-view-pregnant-woman-bed-preparing-baby-clothes-home-writing-list-things-notebook-pregnancy-birth-concept.jpg" },
      { key: "img_liebespaar_bauch", label: "Geburtsvorbereitung – Liebespaar", page: "Geburtsvorbereitung", default: "/assets/loving-husband-hugging-pregnant-wifes-belly-male-hands-big-tummy-love-parenthood-pregnancy-concept.jpg" },
      { key: "img_hero_zelltraining", label: "Zelltraining – Hero", page: "Zelltraining", default: "https://images.unsplash.com/photo-1516670428252-df97bba108d1?q=80&w=2070&auto=format&fit=crop" },
      { key: "img_ihht_schwangere_1", label: "Zelltraining – IHHT 1", page: "Zelltraining", default: "/assets/IHHT 1 Schwangere.png" },
      { key: "img_ihht_schwangere_2", label: "Zelltraining – IHHT 2", page: "Zelltraining", default: "/assets/IHHT 2 Schwangere.png" },
      { key: "img_hero_ihht_schwangerschaft", label: "IHHT Schwangerschaft – Hero", page: "IHHT Schwangerschaft", default: "https://images.unsplash.com/photo-1559757175-5700dde67bc8?q=80&w=2070&auto=format&fit=crop" },
      { key: "img_ama_divers", label: "IHHT Schwangerschaft – Ama-Taucherinnen", page: "IHHT Schwangerschaft", default: "/ama-divers.jpg" },
      { key: "img_hero_wochenbett", label: "Wochenbett – Hero", page: "Wochenbett", default: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2040&auto=format&fit=crop" },
      { key: "img_hero_rueckbildung", label: "Rückbildung – Hero", page: "Rückbildung", default: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2040&auto=format&fit=crop" },
      { key: "img_hero_akupunktur", label: "Akupunktur – Hero", page: "Akupunktur", default: "/akupunktur_hero.png" },
      { key: "img_hero_hebamme_co2", label: "CO2-Trockenbad – Hero (Hebamme)", page: "CO₂-Trockenbad", default: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2070&auto=format&fit=crop" },
    ]
  },
  {
    id: "kinderwunsch",
    label: "Kinderwunsch",
    images: [
      { key: "img_hero_kinderwunsch", label: "Kinderwunsch – Hero", page: "Übersicht", default: "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=2070&auto=format&fit=crop" },
      { key: "img_zellkraft_paare", label: "Zellkraft-Roadmap – Paar", page: "Zellkraft-Roadmap", default: "/assets/pregnant-woman-her-husband-hand-showing-heart-shape.jpg" },
    ]
  },
  {
    id: "global",
    label: "Allgemein",
    images: [
      { key: "img_hero_ueber_mich", label: "Über Mich – Hero", default: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2040&auto=format&fit=crop" },
      { key: "img_portrait_romy", label: "Porträt Romy", default: "" },
      { key: "img_logo", label: "Logo feminatalis", default: "/logo.png" },
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
  const [isRegistering, setIsRegistering] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("");
  const [activeSubPage, setActiveSubPage] = useState<string>("all");
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
      fetchImages();
    }
    setIsSaving(false);
  };

  const resetToDefault = (key: string, defaultValue: string) => {
    handleUrlChange(key, defaultValue);
    toast.info("Auf Standardwert zurückgesetzt");
  };

  // Identify images in DB that are not in IMAGE_CONFIG
  const configuredKeys = new Set(IMAGE_CONFIG.flatMap(s => s.images.map(img => img.key)));
  const unconfiguredDbKeys = dbKeys.filter(key => !configuredKeys.has(key));

  // Build map: filePath → IMAGE_CONFIG key for all configured defaults
  const defaultPathToKey = useMemo(() => {
    const map: Record<string, string> = {};
    IMAGE_CONFIG.forEach(s => {
      s.images.forEach(img => {
        if (img.default && (img.default.startsWith('/') || img.default.startsWith('/assets/'))) {
          map[img.default] = img.key;
        }
      });
    });
    return map;
  }, []);

  // Find scanned project files not yet registered in DB and not referenced by any IMAGE_CONFIG default
  const unregisteredFiles = useMemo(() => {
    const dbValueSet = new Set(Object.values(images).filter(v => v.startsWith('/')));
    return assetImages.images.filter(img => {
      const isDefault = defaultPathToKey[img.filePath] !== undefined;
      const alreadyInDb = dbValueSet.has(img.filePath);
      return !isDefault && !alreadyInDb;
    });
  }, [images, defaultPathToKey]);

  // Auto-register all unregistered scanned files
  const registerAllScanned = async () => {
    setIsRegistering(true);
    const upsertData = unregisteredFiles.map(img => {
      const keyName = img.filePath
        .replace(/^\/assets\//, '')
        .replace(/^\//, '')
        .replace(/[^a-zA-Z0-9]/g, '_')
        .replace(/_+/g, '_')
        .replace(/^_|_$/g, '')
        .toLowerCase();
      return {
        key: `img_scan_${keyName}`,
        value: img.filePath,
        updated_at: new Date().toISOString(),
      };
    });

    const { error } = await supabase
      .from('settings')
      .upsert(upsertData);

    if (error) {
      toast.error("Fehler beim Registrieren: " + error.message);
    } else {
      toast.success(`${upsertData.length} neue Bilder registriert`);
      fetchImages();
    }
    setIsRegistering(false);
  };

  const allTabs = [
    ...IMAGE_CONFIG,
    ...(unconfiguredDbKeys.length > 0 ? [{
      id: "uncategorized",
      label: "Weitere Bilder",
      images: unconfiguredDbKeys.map(key => ({
        key,
        label: key.replace("img_", "").replace(/_/g, " "),
        default: ""
      }))
    }] : [])
  ];

  // Get unique sub-pages for a section (in first-occurrence order)
  const getSubPages = (section: typeof IMAGE_CONFIG[number] | typeof allTabs[number]) => {
    const pages: string[] = [];
    const seen = new Set<string>();
    section.images.forEach(img => {
      if ((img as any).page && !seen.has((img as any).page)) {
        seen.add((img as any).page);
        pages.push((img as any).page);
      }
    });
    return pages;
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setActiveSubPage("all");
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

        {/* Scan Results Panel */}
        {unregisteredFiles.length > 0 && (
          <Card className="border-none shadow-xl shadow-primary/5 rounded-[2.5rem] bg-amber-50 overflow-hidden border-l-4 border-amber-400">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 shrink-0">
                  <ScanSearch size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-amber-900 text-lg">{unregisteredFiles.length} neue Projekt-Bilder entdeckt</h4>
                  <p className="text-sm text-amber-800 opacity-80">
                    Diese Bilder wurden im Projekt gefunden, sind aber noch nicht in der Datenbank registriert.
                  </p>
                </div>
                <Button 
                  onClick={registerAllScanned} 
                  disabled={isRegistering}
                  className="h-12 rounded-xl bg-amber-600 text-white font-bold px-6 gap-2 hover:bg-amber-700 transition-all shrink-0"
                >
                  {isRegistering ? <Loader2 className="animate-spin" size={18} /> : <PlusCircle size={18} />}
                  Alle registrieren
                </Button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {unregisteredFiles.map(img => (
                  <div key={img.filePath} className="bg-white rounded-xl p-2 border border-amber-200 text-center">
                    <div className="aspect-square rounded-lg bg-slate-100 overflow-hidden mb-2">
                      <img src={img.filePath} alt={img.fileName} className="w-full h-full object-cover" />
                    </div>
                    <p className="text-[10px] font-mono text-muted-foreground truncate">{img.fileName}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        <Tabs defaultValue={allTabs[0].id} className="w-full" onValueChange={handleTabChange}>
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

          {allTabs.map(section => {
            const subPages = getSubPages(section);
            const displayImages = activeSubPage === "all" || !activeSubPage
              ? section.images
              : section.images.filter(img => (img as any).page === activeSubPage);

            return (
              <TabsContent key={section.id} value={section.id} className="space-y-6">
                {/* Sub-page navigation */}
                {subPages.length > 1 && (
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setActiveSubPage("all")}
                      className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                        activeSubPage === "all"
                          ? "bg-primary text-white shadow-md shadow-primary/20"
                          : "bg-white text-muted-foreground hover:text-foreground border border-primary/10 hover:border-primary/30"
                      }`}
                    >
                      Alle ({section.images.length})
                    </button>
                    {subPages.map(page => {
                      const count = section.images.filter(img => (img as any).page === page).length;
                      return (
                        <button
                          key={page}
                          onClick={() => setActiveSubPage(page)}
                          className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                            activeSubPage === page
                              ? "bg-primary text-white shadow-md shadow-primary/20"
                              : "bg-white text-muted-foreground hover:text-foreground border border-primary/10 hover:border-primary/30"
                          }`}
                        >
                          {page} ({count})
                        </button>
                      );
                    })}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {displayImages.map(img => (
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
            );
          })}
        </Tabs>

        <Card className="border-none shadow-xl shadow-primary/5 rounded-[2.5rem] bg-emerald-50 overflow-hidden border-l-4 border-emerald-400">
           <CardContent className="p-8 flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                <ScanSearch size={24} />
              </div>
              <div>
                <h4 className="font-bold text-emerald-900 text-lg">Automatische Bild-Erkennung aktiv</h4>
                <p className="text-sm text-emerald-800 opacity-80">
                  Beim Build (oder via <code className="bg-emerald-200 px-1.5 py-0.5 rounded text-xs">npm run scan:images</code>) werden alle Projekt-Bilder in <code className="bg-emerald-200 px-1.5 py-0.5 rounded text-xs">public/</code> gescannt. Unregistrierte Bilder erscheinen im gelben Panel oben und können mit einem Klick in die Datenbank übernommen werden.
                </p>
              </div>
           </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
