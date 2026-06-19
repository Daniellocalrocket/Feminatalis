import React, { useState, useEffect } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { Plus, Pencil, Trash2, GripVertical, Activity, Gem, Heart, Sparkles, Zap, AlertCircle } from "lucide-react";

const ICON_OPTIONS = [
  { value: "Activity", label: "Aktivität", icon: <Activity className="w-5 h-5" /> },
  { value: "Gem", label: "Paket", icon: <Gem className="w-5 h-5" /> },
  { value: "Heart", label: "Herz", icon: <Heart className="w-5 h-5" /> },
  { value: "Sparkles", label: "Funkeln", icon: <Sparkles className="w-5 h-5" /> },
  { value: "Zap", label: "Blitz", icon: <Zap className="w-5 h-5" /> },
];

const fallbackCategories: Category[] = [
  {
    id: "1", title: "Naturheilpraxis - Einzelbehandlungen", subtitle: "", icon: "Activity", highlight: false,
    items: [
      { id: "1a", name: "Einzelberatung / Erstanamnese", price: "100,- €", detail: "60 Min. inkl. Untersuchung, Therapieplan, Laborbesprechung", time: "60 min" },
      { id: "1b", name: "Aku-pur (Akupunktur extra)", price: "40,- €", detail: "Behandlung nach Erstanamnese", time: "30 min" },
      { id: "1c", name: "Aku-plus (Akupunktur begleitend)", price: "26,- €", detail: "Begleittherapie (z.B. zu Infusion oder Geburtsvorbereitung)", time: "30 min" },
      { id: "1d", name: "IHHT / Höhentraining", price: "75,- €", detail: "Zelltraining (zzgl. einmalig 10,- € für Maske)", time: "60 min" },
      { id: "1e", name: "Infusionstherapie", price: "65,- €", detail: "Wirkstoff-Drip (zzgl. Medikamente)", time: "45-90 min" },
      { id: "1f", name: "Haemo-Laser", price: "60,- €", detail: "Lichttherapie inkl. Lichtleiter", time: "30 min" },
      { id: "1g", name: "CO2-Vitalisierungsbad", price: "45,- €", detail: "Trockenbad (zzgl. einmalig 7,50 € für Hülle)", time: "45 min" },
      { id: "1h", name: "brainLight-pur", price: "7,50 €", detail: "Nur Brille & Kopfhörer (ohne Massage)", time: "bis 30 min" },
      { id: "1i", name: "brainLight komplett", price: "ab 15,- €", detail: "System & Massage / Mentaltraining", time: "15-60 min" },
      { id: "1j", name: "Massagesessel individuell", price: "40,- €", detail: "Inkl. Gesundheitscheck & Ionen-Funktion", time: "60 min" },
      { id: "1k", name: "Massagesessel pur", price: "ab 10,- €", detail: "Automatik-Massageprogramme", time: "15-60 min" },
      { id: "1l", name: "brainLight Gesundheitscheck", price: "5,- €", detail: "Vor und nach jeder Session empfohlen", time: "1x" },
    ]
  },
  {
    id: "2", title: "Naturheilpraxis - Pakete & Kombis", subtitle: "Günstigere Konditionen (10 zum Preis von 9!)", icon: "Gem", highlight: true,
    items: [
      { id: "2a", name: "Aku-pur 10", price: "405,- €", detail: "10x Akupunktur (Statt 450,- €)" },
      { id: "2b", name: "Air-pur 10 (IHHT)", price: "675,- €", detail: "Statt 750,- € (zzgl. Maske, 2 RZ möglich)" },
      { id: "2c", name: "Drop-pur 5 (Infusionen)", price: "300,- €", detail: "5x Infusion (Statt 325,- €, zzgl. Medikamente)" },
      { id: "2d", name: "Drop-pur 10 (Infusionen)", price: "585,- €", detail: "Statt 650,- € (zzgl. Medikamente, 2 RZ möglich)" },
      { id: "2e", name: "Light-pur 5 (Laser)", price: "285,- €", detail: "5x Haemo-Laser (Statt 300,- €, inkl. Lichtleiter)" },
      { id: "2f", name: "Light-pur 10 (Laser)", price: "540,- €", detail: "Statt 600,- € (2 RZ möglich)" },
      { id: "2g", name: "Carbo-pur 10 (CO2)", price: "405,- €", detail: "Statt 450,- € (zzgl. Hülle)" },
      { id: "2h", name: "brainLight-pur 10", price: "67,50 €", detail: "Statt 75,- € (Nur Brille & Kopfhörer)" },
      { id: "2i", name: "Massagesessel individuell 10", price: "360,- €", detail: "Statt 400,- € (Gesundheitscheck & Ionen-Funktion)" },
      { id: "2j", name: "Massagesessel pur 10 (15 Min.)", price: "90,- €", detail: "10x 15 Min. (Statt 100,- €)" },
      { id: "2k", name: "Massagesessel pur 10 (30 Min.)", price: "135,- €", detail: "10x 30 Min. (Statt 150,- €)" },
      { id: "2l", name: "Massagesessel pur 10 (45 Min.)", price: "225,- €", detail: "10x 45 Min. (Statt 250,- €)" },
      { id: "2m", name: "Massagesessel pur 10 (60 Min.)", price: "270,- €", detail: "10x 60 Min. (Statt 300,- €)" },
      { id: "2n", name: "brainLight komplett 10 (15 Min.)", price: "135,- €", detail: "10x 15 Min. (Statt 150,- €)" },
      { id: "2o", name: "brainLight komplett 10 (30 Min.)", price: "180,- €", detail: "10x 30 Min. (Statt 200,- €)" },
      { id: "2p", name: "brainLight komplett 10 (45 Min.)", price: "225,- €", detail: "10x 45 Min. (Statt 250,- €)" },
      { id: "2q", name: "brainLight komplett 10 (60 Min.)", price: "315,- €", detail: "10x 60 Min. (Statt 350,- €)" },
      { id: "2r", name: "Carbo-Brain (je 10x)", price: "473,- €", detail: "CO₂ + brainLight pur (Statt 525,- €, zzgl. Hülle 7,50 €)" },
      { id: "2s", name: "Kombi AkuLight 10", price: "945,- €", detail: "Akupunktur + Laser (Statt 1.050,- €, 3 RZ möglich)" },
      { id: "2t", name: "Kombi AkuDrop 10", price: "990,- €", detail: "Akupunktur + Infusion (Statt 1.100,- €, 3 RZ möglich)" },
      { id: "2u", name: "Kombi AirDrop", price: "975,- €", detail: "10x IHHT + 5x Infusion (Statt 1.075,- €, 3 RZ möglich)" },
      { id: "2v", name: "Kombi LightDrop 5", price: "551,- €", detail: "5x Laser + 5x Infusion (Statt 580,- €, 2 RZ möglich)" },
      { id: "2w", name: "Kombi LightDrop 10", price: "1.044,- €", detail: "10x Laser + 10x Infusion (Statt 1.160,- €, 3 RZ möglich)" },
      { id: "2x", name: "Super Kombi 10", price: "1.530,- €", detail: "Laser + Akupunktur + Infusion (Statt 1.700,- €, 3 RZ möglich)" },
      { id: "2y", name: "Ultra Kombi 20", price: "2.205,- €", detail: "20 Termine (Statt 2.450,- €, 3 RZ möglich)" },
      { id: "2z", name: "Mega Kombi 30", price: "2.630,- €", detail: "30 Termine (Statt 2.920,- €, 5 RZ möglich)" },
    ]
  },
  {
    id: "3", title: "Hebammenpraxis & Veranstaltungen", subtitle: "", icon: "Heart", highlight: false,
    items: [
      { id: "3a", name: "Geburtsvorbereitung Partnergebühr", price: "160,- €", detail: "Kompletter Kurs (14 Stunden)" },
      { id: "3b", name: "Partnergebühr (pro Stunde)", price: "12,- €", detail: "Bei stundenweiser Teilnahme" },
      { id: "3c", name: "Vorträge (1,5 Std.)", price: "ab 7,50 €", detail: "Auf freiwilliger Spendenbasis möglich" },
      { id: "3d", name: "Wochenend-Seminare", price: "250,- €", detail: "10-12 Std. inkl. Imbiss & Verpflegung" },
    ]
  }
];

function generateId() {
  return crypto.randomUUID?.() || Math.random().toString(36).substring(2, 15);
}

type Item = { id: string; name: string; price: string; detail: string; time?: string };
type Category = { id: string; title: string; subtitle: string; icon: string; highlight: boolean; items: Item[] };

const emptyCategory = (): Category => ({
  id: generateId(), title: "", subtitle: "", icon: "Activity", highlight: false, items: [],
});

const emptyItem = (): Item => ({
  id: generateId(), name: "", price: "", detail: "", time: "",
});

export default function AdminPriceList() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [catDialogOpen, setCatDialogOpen] = useState(false);
  const [editingCat, setEditingCat] = useState<Category | null>(null);
  const [catForm, setCatForm] = useState<Category>(emptyCategory());

  const [itemDialogOpen, setItemDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Item | null>(null);
  const [itemForm, setItemForm] = useState<Item>(emptyItem());
  const [activeCatId, setActiveCatId] = useState<string | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from("settings")
        .select("value")
        .eq("key", "price_list_data")
        .single();
      if (error && error.code !== "PGRST116") throw error;
      if (data?.value) {
        setCategories(JSON.parse(data.value as string));
      } else {
        const { error: upsertError } = await supabase
          .from("settings")
          .upsert({ key: "price_list_data", value: JSON.stringify(fallbackCategories) }, { onConflict: "key" });
        if (!upsertError) {
          setCategories(fallbackCategories);
        }
      }
    } catch (err) {
      console.error("Fehler beim Laden der Preisliste:", err);
      toast.error("Fehler beim Laden der Preisliste");
    } finally {
      setIsLoading(false);
    }
  }

  async function saveData(newCategories: Category[]) {
    try {
      const { error } = await supabase
        .from("settings")
        .upsert({ key: "price_list_data", value: JSON.stringify(newCategories) }, { onConflict: "key" });
      if (error) throw error;
      setCategories(newCategories);
      toast.success("Preisliste gespeichert");
    } catch (err) {
      console.error("Fehler beim Speichern:", err);
      toast.error("Fehler beim Speichern");
    }
  }

  function openNewCat() {
    setEditingCat(null);
    setCatForm(emptyCategory());
    setCatDialogOpen(true);
  }

  function openEditCat(cat: Category) {
    setEditingCat(cat);
    setCatForm({ ...cat, items: [...cat.items] });
    setCatDialogOpen(true);
  }

  function saveCat(e: React.FormEvent) {
    e.preventDefault();
    if (!catForm.title.trim()) { toast.error("Titel ist erforderlich"); return; }
    let newCats: Category[];
    if (editingCat) {
      newCats = categories.map((c) => (c.id === editingCat.id ? { ...catForm } : c));
    } else {
      newCats = [...categories, { ...catForm }];
    }
    saveData(newCats);
    setCatDialogOpen(false);
  }

  function deleteCat(id: string) {
    if (!confirm("Kategorie wirklich löschen?")) return;
    saveData(categories.filter((c) => c.id !== id));
  }

  function openNewItem(catId: string) {
    setActiveCatId(catId);
    setEditingItem(null);
    setItemForm(emptyItem());
    setItemDialogOpen(true);
  }

  function openEditItem(catId: string, item: Item) {
    setActiveCatId(catId);
    setEditingItem(item);
    setItemForm({ ...item });
    setItemDialogOpen(true);
  }

  function saveItem(e: React.FormEvent) {
    e.preventDefault();
    if (!itemForm.name.trim()) { toast.error("Name ist erforderlich"); return; }
    const newCats = categories.map((cat) => {
      if (cat.id !== activeCatId) return cat;
      let newItems: Item[];
      if (editingItem) {
        newItems = cat.items.map((it) => (it.id === editingItem.id ? { ...itemForm } : it));
      } else {
        newItems = [...cat.items, { ...itemForm }];
      }
      return { ...cat, items: newItems };
    });
    saveData(newCats);
    setItemDialogOpen(false);
  }

  function deleteItem(catId: string, itemId: string) {
    if (!confirm("Position wirklich löschen?")) return;
    const newCats = categories.map((cat) =>
      cat.id === catId ? { ...cat, items: cat.items.filter((it) => it.id !== itemId) } : cat
    );
    saveData(newCats);
  }

  return (
    <AdminLayout title="Preislisten-Verwaltung">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-serif text-primary">Preisliste bearbeiten</h3>
            <p className="text-sm text-muted-foreground">Kategorien und Preise verwalten – Änderungen erscheinen sofort auf der öffentlichen Seite.</p>
          </div>
          <Button onClick={openNewCat} className="h-12 rounded-xl bg-primary text-white font-bold gap-2 px-6">
            <Plus size={18} /> Kategorie hinzufügen
          </Button>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
          </div>
        ) : categories.length === 0 ? (
          <Card className="border-dashed border-2 border-border p-16 text-center rounded-[2.5rem]">
            <AlertCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h4 className="text-xl font-serif text-primary mb-2">Noch keine Preisliste vorhanden</h4>
            <p className="text-muted-foreground mb-6">Erstelle die erste Kategorie und füge Positionen hinzu.</p>
            <Button onClick={openNewCat} className="rounded-xl bg-primary text-white font-bold gap-2" variant="outline">
              <Plus size={18} /> Erste Kategorie anlegen
            </Button>
          </Card>
        ) : (
          <div className="space-y-6">
            {categories.map((cat) => (
              <Card key={cat.id} className={`rounded-[2rem] overflow-hidden border ${cat.highlight ? "border-accent/30 bg-accent/[0.02]" : "border-border"}`}>
                <div className="p-6 md:p-8 border-b border-border flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                      {ICON_OPTIONS.find((o) => o.value === cat.icon)?.icon || <Activity className="w-5 h-5 text-primary" />}
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-bold text-primary truncate">{cat.title}</h4>
                      {cat.subtitle && <p className="text-xs text-accent font-bold uppercase tracking-wider">{cat.subtitle}</p>}
                    </div>
                    {cat.highlight && (
                      <span className="bg-accent text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full shrink-0">
                        Top
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Button variant="outline" size="icon" className="rounded-xl" onClick={() => openEditCat(cat)}>
                      <Pencil size={16} />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-xl text-red-500 border-red-200 hover:bg-red-50" onClick={() => deleteCat(cat.id)}>
                      <Trash2 size={16} />
                    </Button>
                  </div>
                </div>
                <div className="divide-y divide-border">
                  {cat.items.map((item) => (
                    <div key={item.id} className="p-4 md:px-8 flex items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors">
                      <div className="min-w-0 flex-1">
                        <div className="font-bold text-primary flex items-center gap-2">
                          {item.name}
                          {item.name.includes("Kombi") && <Zap className="w-4 h-4 text-accent fill-accent" />}
                        </div>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                          {item.time && (
                            <span className="bg-slate-100 px-2 py-0.5 rounded text-[12px] font-medium">{item.time}</span>
                          )}
                          <span>{item.detail}</span>
                        </div>
                      </div>
                      <div className="text-xl font-serif text-primary whitespace-nowrap">{item.price}</div>
                      <div className="flex items-center gap-1 shrink-0">
                        <Button variant="ghost" size="icon" className="w-8 h-8" onClick={() => openEditItem(cat.id, item)}>
                          <Pencil size={14} />
                        </Button>
                        <Button variant="ghost" size="icon" className="w-8 h-8 text-red-500" onClick={() => deleteItem(cat.id, item.id)}>
                          <Trash2 size={14} />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4 border-t border-border">
                  <Button variant="ghost" className="text-accent gap-2 rounded-xl" onClick={() => openNewItem(cat.id)}>
                    <Plus size={16} /> Position hinzufügen
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>

      <Dialog open={catDialogOpen} onOpenChange={setCatDialogOpen}>
        <DialogContent className="max-w-lg rounded-[2rem] bg-white">
          <DialogHeader>
            <DialogTitle className="font-serif text-primary">
              {editingCat ? "Kategorie bearbeiten" : "Neue Kategorie"}
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={saveCat} className="space-y-5 py-4">
            <div className="space-y-2">
              <Label>Titel *</Label>
              <Input required value={catForm.title} onChange={(e) => setCatForm({ ...catForm, title: e.target.value })} className="h-12 rounded-xl" placeholder="z.B. Naturheilpraxis - Einzelbehandlungen" />
            </div>
            <div className="space-y-2">
              <Label>Untertitel (optional)</Label>
              <Input value={catForm.subtitle} onChange={(e) => setCatForm({ ...catForm, subtitle: e.target.value })} className="h-12 rounded-xl" placeholder="z.B. Günstigere Konditionen (10 zum Preis von 9!)" />
            </div>
            <div className="space-y-2">
              <Label>Icon</Label>
              <Select value={catForm.icon} onValueChange={(v) => setCatForm({ ...catForm, icon: v })}>
                <SelectTrigger className="h-12 rounded-xl">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {ICON_OPTIONS.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                      <span className="flex items-center gap-3">{opt.icon} {opt.label}</span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-3">
              <Switch checked={catForm.highlight} onCheckedChange={(v) => setCatForm({ ...catForm, highlight: v })} />
              <Label className="cursor-pointer">Als Highlight markieren (Top-Konditionen)</Label>
            </div>
            <DialogFooter className="pt-4">
              <Button type="button" variant="ghost" onClick={() => setCatDialogOpen(false)}>Abbrechen</Button>
              <Button type="submit" className="rounded-xl bg-primary text-white font-bold px-8">
                {editingCat ? "Änderungen speichern" : "Kategorie anlegen"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog open={itemDialogOpen} onOpenChange={setItemDialogOpen}>
        <DialogContent className="max-w-lg rounded-[2rem] bg-white">
          <DialogHeader>
            <DialogTitle className="font-serif text-primary">
              {editingItem ? "Position bearbeiten" : "Neue Position"}
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={saveItem} className="space-y-5 py-4">
            <div className="space-y-2">
              <Label>Name *</Label>
              <Input required value={itemForm.name} onChange={(e) => setItemForm({ ...itemForm, name: e.target.value })} className="h-12 rounded-xl" placeholder="z.B. Einzelberatung / Erstanamnese" />
            </div>
            <div className="space-y-2">
              <Label>Preis *</Label>
              <Input required value={itemForm.price} onChange={(e) => setItemForm({ ...itemForm, price: e.target.value })} className="h-12 rounded-xl" placeholder="z.B. 100,- €" />
            </div>
            <div className="space-y-2">
              <Label>Beschreibung</Label>
              <Input value={itemForm.detail} onChange={(e) => setItemForm({ ...itemForm, detail: e.target.value })} className="h-12 rounded-xl" placeholder="z.B. 60 Min. inkl. Untersuchung" />
            </div>
            <div className="space-y-2">
              <Label>Zeit (optional)</Label>
              <Input value={itemForm.time || ""} onChange={(e) => setItemForm({ ...itemForm, time: e.target.value })} className="h-12 rounded-xl" placeholder="z.B. 60 min" />
            </div>
            <DialogFooter className="pt-4">
              <Button type="button" variant="ghost" onClick={() => setItemDialogOpen(false)}>Abbrechen</Button>
              <Button type="submit" className="rounded-xl bg-primary text-white font-bold px-8">
                {editingItem ? "Änderungen speichern" : "Position anlegen"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
}
