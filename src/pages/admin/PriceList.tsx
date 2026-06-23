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
import { fallbackCategories, PricePriceCategory, PriceItem } from "@/data/priceListFallback";

const ICON_OPTIONS = [
  { value: "Activity", label: "Aktivität", icon: <Activity className="w-5 h-5" /> },
  { value: "Gem", label: "Paket", icon: <Gem className="w-5 h-5" /> },
  { value: "Heart", label: "Herz", icon: <Heart className="w-5 h-5" /> },
  { value: "Sparkles", label: "Funkeln", icon: <Sparkles className="w-5 h-5" /> },
  { value: "Zap", label: "Blitz", icon: <Zap className="w-5 h-5" /> },
];

function generateId() {
  return crypto.randomUUID?.() || Math.random().toString(36).substring(2, 15);
}

const emptyPriceCategory = (): PricePriceCategory => ({
  id: generateId(), title: "", subtitle: "", icon: "Activity", highlight: false, items: [],
});

const emptyItem = (): PriceItem => ({
  id: generateId(), name: "", price: "", detail: "", time: "",
});

export default function AdminPriceList() {
  const [categories, setCategories] = useState<PriceCategory[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [catDialogOpen, setCatDialogOpen] = useState(false);
  const [editingCat, setEditingCat] = useState<PriceCategory | null>(null);
  const [catForm, setCatForm] = useState<PriceCategory>(emptyPriceCategory());

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

  async function saveData(newCategories: PriceCategory[]) {
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
    setCatForm(emptyPriceCategory());
    setCatDialogOpen(true);
  }

  function openEditCat(cat: PriceCategory) {
    setEditingCat(cat);
    setCatForm({ ...cat, items: [...cat.items] });
    setCatDialogOpen(true);
  }

  function saveCat(e: React.FormEvent) {
    e.preventDefault();
    if (!catForm.title.trim()) { toast.error("Titel ist erforderlich"); return; }
    let newCats: PriceCategory[];
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

  function openEditItem(catId: string, item: PriceItem) {
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
      let newItems: PriceItem[];
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
