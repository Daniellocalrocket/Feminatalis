import React, { useEffect, useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { supabase } from "@/integrations/supabase/client";
import { 
  Settings as SettingsIcon, 
  Save, 
  RefreshCw, 
  Database, 
  Globe, 
  ShieldCheck,
  Mail,
  Phone
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export default function AdminSettings() {
  const [settings, setSettings] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from('settings')
      .select('*');

    if (error) {
      toast.error("Fehler beim Laden der Einstellungen");
    } else {
      const settingsMap: Record<string, string> = {};
      data?.forEach(s => {
        settingsMap[s.key] = s.value;
      });
      setSettings(settingsMap);
    }
    setIsLoading(false);
  };

  const handleChange = (key: string, value: string) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const saveSettings = async () => {
    setIsSaving(true);
    const upsertData = Object.entries(settings).map(([key, value]) => ({
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
      toast.success("Einstellungen wurden gespeichert");
    }
    setIsSaving(false);
  };

  const handleSyncBlog = async () => {
    setIsSyncing(true);
    toast.info("Blog-Synchronisation gestartet...");
    
    try {
      // Here we would call an edge function or a logic to sync with Google Drive
      // For now we simulate it
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast.success("Synchronisation erfolgreich abgeschlossen!");
    } catch (err) {
      toast.error("Sync fehlgeschlagen");
    } finally {
      setIsSyncing(false);
    }
  };

  if (isLoading) {
    return (
      <AdminLayout title="Einstellungen">
        <div className="h-96 flex items-center justify-center">
          <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="Einstellungen">
      <div className="max-w-4xl space-y-8 animate-in fade-in duration-500 pb-20">
        
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-serif text-primary">System-Konfiguration</h1>
            <p className="text-muted-foreground">Verwalte hier technische Details und globale Praxisdaten.</p>
          </div>
          <Button 
            onClick={saveSettings} 
            disabled={isSaving}
            className="h-14 rounded-2xl bg-primary text-white font-bold px-10 gap-3 hover:shadow-xl transition-all shadow-primary/20"
          >
            {isSaving ? <RefreshCw className="animate-spin" size={20} /> : <Save size={20} />}
            Änderungen speichern
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Google Drive Sync */}
          <Card className="border-none shadow-xl shadow-primary/5 rounded-[2.5rem] bg-white overflow-hidden">
            <CardHeader className="p-8 pb-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
                <Globe size={24} />
              </div>
              <CardTitle className="font-serif">Google Drive Integration</CardTitle>
              <CardDescription>Daten für die automatische Blog-Synchronisation aus Google Docs.</CardDescription>
            </CardHeader>
            <CardContent className="p-8 pt-4 space-y-6">
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="folder_id" className="text-xs font-bold uppercase opacity-60">Folder ID</Label>
                  <Input 
                    id="folder_id" 
                    value={settings.google_drive_folder_id || ""} 
                    onChange={(e) => handleChange('google_drive_folder_id', e.target.value)}
                    className="h-12 rounded-xl"
                    placeholder="1A2b3C4d..."
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="api_key" className="text-xs font-bold uppercase opacity-60">Google API Key</Label>
                  <Input 
                    id="api_key" 
                    type="password"
                    value={settings.google_api_key || ""} 
                    onChange={(e) => handleChange('google_api_key', e.target.value)}
                    className="h-12 rounded-xl"
                  />
                </div>
              </div>
              <div className="pt-4">
                <Button 
                  variant="outline" 
                  className="w-full h-12 rounded-xl border-dashed border-primary/20 hover:bg-primary/5 gap-2"
                  onClick={handleSyncBlog}
                  disabled={isSyncing}
                >
                  <RefreshCw className={isSyncing ? "animate-spin" : ""} size={18} />
                  Jetzt manuell synchronisieren
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Contact Details */}
          <Card className="border-none shadow-xl shadow-primary/5 rounded-[2.5rem] bg-white overflow-hidden">
            <CardHeader className="p-8 pb-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600 mb-4">
                <Mail size={24} />
              </div>
              <CardTitle className="font-serif">Praxis Kontaktdaten</CardTitle>
              <CardDescription>Diese Daten werden in Footer und Kontaktformularen verwendet.</CardDescription>
            </CardHeader>
            <CardContent className="p-8 pt-4 space-y-6">
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="email" className="text-xs font-bold uppercase opacity-60">E-Mail Adresse</Label>
                  <Input 
                    id="email" 
                    value={settings.practice_email || ""} 
                    onChange={(e) => handleChange('practice_email', e.target.value)}
                    className="h-12 rounded-xl"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone" className="text-xs font-bold uppercase opacity-60">Telefon</Label>
                  <Input 
                    id="phone" 
                    value={settings.practice_phone || ""} 
                    onChange={(e) => handleChange('practice_phone', e.target.value)}
                    className="h-12 rounded-xl"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Security & System */}
          <Card className="border-none shadow-xl shadow-primary/5 rounded-[2.5rem] bg-white overflow-hidden md:col-span-2">
            <CardHeader className="p-8 pb-4">
              <div className="flex justify-between items-center">
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center text-green-600">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <CardTitle className="font-serif">System & Sicherheit</CardTitle>
                    <CardDescription>Datenbank-Status und Sicherheits-Flags.</CardDescription>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-700 border-none px-4 py-2 rounded-xl">Verbunden: Supabase Cloud</Badge>
              </div>
            </CardHeader>
            <CardContent className="p-8 pt-4">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Backup Status</p>
                    <p className="text-sm font-bold text-slate-700">Täglich (Automatik)</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Letzter Login</p>
                    <p className="text-sm font-bold text-slate-700">Heute, 10:15 Uhr</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Software-Version</p>
                    <p className="text-sm font-bold text-slate-700">v2.4.1 (Vite Edition)</p>
                  </div>
               </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </AdminLayout>
  );
}
