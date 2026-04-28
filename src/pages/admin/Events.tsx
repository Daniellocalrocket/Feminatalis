import React, { useEffect, useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { supabase } from "@/integrations/supabase/client";
import { 
  Calendar, 
  MapPin, 
  Users, 
  Euro, 
  Plus, 
  Search, 
  Trash2, 
  Edit3, 
  MoreVertical,
  CheckCircle,
  Archive,
  AlertCircle
} from "lucide-react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
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

export default function AdminEvents() {
  const [events, setEvents] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isParticipantsDialogOpen, setIsParticipantsDialogOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [participants, setParticipants] = useState<any[]>([]);
  const [editingEvent, setEditingEvent] = useState<any>(null);

  const initialEventState = {
    title: "",
    description: "",
    date: "",
    time: "",
    location: "Bad Schönborn, Praxis",
    price: 0,
    max_participants: 12,
    category: "hebamme",
    status: "published"
  };

  const [formData, setFormData] = useState(initialEventState);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    setIsLoading(true);
    try {
      // Fetch events first
      const { data: eventsData, error: eventsError } = await supabase
        .from('events')
        .select('*')
        .order('date', { ascending: true });

      if (eventsError) throw eventsError;

      // Fetch stats separately
      const { data: statsData, error: statsError } = await supabase
        .from('event_stats')
        .select('*');

      if (statsData) {
        const transformedData = eventsData.map((event: any) => {
          const stat = statsData.find((s: any) => s.event_id === event.id);
          return {
            ...event,
            registrations_count: stat?.registrations_count || 0,
            spots_left: stat?.spots_left ?? event.max_participants
          };
        });
        setEvents(transformedData || []);
      } else {
        setEvents(eventsData || []);
      }
    } catch (error) {
      console.error("Fetch events error:", error);
      toast.error("Fehler beim Laden der Events");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchParticipants = async (eventId: string) => {
    const { data, error } = await supabase
      .from('event_registrations')
      .select('*')
      .eq('event_id', eventId)
      .order('created_at', { ascending: false });

    if (error) {
      toast.error("Fehler beim Laden der Teilnehmer");
    } else {
      setParticipants(data || []);
    }
  };

  const openParticipantsDialog = (event: any) => {
    setSelectedEvent(event);
    setParticipants([]);
    fetchParticipants(event.id);
    setIsParticipantsDialogOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create clean payload without virtual properties
    const payload = {
      title: formData.title,
      description: formData.description,
      date: formData.date,
      time: formData.time,
      location: formData.location,
      price: formData.price,
      max_participants: formData.max_participants,
      category: formData.category,
      status: formData.status
    };

    if (editingEvent) {
      const { error } = await supabase
        .from('events')
        .update(payload)
        .eq('id', editingEvent.id);

      if (error) {
        toast.error("Event konnte nicht aktualisiert werden");
      } else {
        toast.success("Event erfolgreich aktualisiert");
        setIsDialogOpen(false);
        fetchEvents();
      }
    } else {
      const { error } = await supabase
        .from('events')
        .insert([payload]);

      if (error) {
        toast.error("Event konnte nicht erstellt werden");
      } else {
        toast.success("Neues Event erfolgreich erstellt");
        setIsDialogOpen(false);
        fetchEvents();
      }
    }
  };

  const deleteEvent = async (id: string) => {
    if (!confirm("Bist du sicher, dass du dieses Event löschen möchtest?")) return;

    const { error } = await supabase
      .from('events')
      .delete()
      .eq('id', id);

    if (error) {
      toast.error("Fehler beim Löschen");
    } else {
      toast.success("Event gelöscht");
      fetchEvents();
    }
  };

  const openEditDialog = (event: any) => {
    setEditingEvent(event);
    setFormData({
      title: event.title,
      description: event.description || "",
      date: event.date,
      time: event.time,
      location: event.location,
      price: event.price,
      max_participants: event.max_participants,
      category: event.category,
      status: event.status
    });
    setIsDialogOpen(true);
  };

  const handleCreateNew = () => {
    setEditingEvent(null);
    setFormData(initialEventState);
    setIsDialogOpen(true);
  };

  return (
    <AdminLayout title="Veranstaltungsverwaltung (Vite CMS)">
      <div className="space-y-8 animate-in fade-in duration-500">
        
        {/* Header Actions */}
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
          <div>
            <h1 className="text-3xl font-serif text-primary">Alle Veranstaltungen</h1>
            <p className="text-muted-foreground">Verwalte deine Kurse, Webinare und Vor-Ort Termine.</p>
          </div>
          <Button 
            onClick={handleCreateNew}
            className="h-14 rounded-2xl bg-accent text-white font-bold px-8 gap-3 hover:shadow-xl transition-all shadow-accent/20"
          >
            <Plus size={22} /> Neues Event anlegen
          </Button>
        </div>

        {/* Content Section */}
        {isLoading ? (
          <div className="h-96 flex flex-col items-center justify-center gap-4 text-muted-foreground bg-white/50 rounded-[3rem] border border-primary/5">
            <Calendar className="w-12 h-12 animate-pulse opacity-20" />
            Wird geladen...
          </div>
        ) : events.length === 0 ? (
          <div className="h-96 flex flex-col items-center justify-center gap-6 text-muted-foreground bg-white/50 rounded-[3rem] border border-2 border-dashed border-primary/10">
            <Calendar className="w-16 h-16 opacity-10" />
            <div className="text-center">
              <p className="text-xl font-serif text-primary mb-2">Keine Events vorhanden</p>
              <p>Lege jetzt deine erste Veranstaltung an.</p>
            </div>
            <Button variant="outline" className="rounded-xl border-primary/20" onClick={handleCreateNew}>Hier klicken zum Starten</Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-20">
            {events.map((event) => (
              <Card key={event.id} className="border-none shadow-xl shadow-primary/5 rounded-[2.5rem] bg-white overflow-hidden group hover:shadow-primary/10 transition-all border-l-4 border-l-accent">
                <CardHeader className="p-8 pb-4">
                  <div className="flex justify-between items-start">
                    <Badge variant="outline" className="bg-primary/5 border-primary/5 text-primary text-[10px] uppercase font-black tracking-[0.1em] px-3 py-1">
                      {event.category}
                    </Badge>
                    <div className="flex gap-2">
                       <Button 
                         variant="ghost" 
                         size="sm" 
                         className="rounded-xl h-10 px-4 text-primary font-bold hover:bg-primary/5"
                         onClick={() => openParticipantsDialog(event)}
                       >
                         <Users size={16} className="mr-2" /> Teilnehmer ({event.registrations_count})
                       </Button>
                       <Button variant="ghost" size="icon" className="h-10 w-10 text-primary/40 hover:text-primary hover:bg-primary/5 rounded-full" onClick={() => openEditDialog(event)}>
                         <Edit3 size={18} />
                       </Button>
                       <Button variant="ghost" size="icon" className="h-10 w-10 text-red-400/40 hover:text-red-500 hover:bg-red-50/80 rounded-full transition-all" onClick={() => deleteEvent(event.id)}>
                         <Trash2 size={18} />
                       </Button>
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-serif text-primary mt-4 group-hover:text-accent transition-colors">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-4 space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 text-sm text-primary/60">
                      <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                        <Calendar size={20} />
                      </div>
                      <div>
                        <p className="font-bold">Datum & Zeit</p>
                        <p>{formatDate(event.date)} | {event.time.slice(0, 5)}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-primary/60">
                      <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <p className="font-bold">Ort</p>
                        <p className="truncate max-w-[120px]">{event.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-primary/60">
                      <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all">
                        <Users size={20} />
                      </div>
                      <div>
                        <p className="font-bold">Belegung</p>
                        <p>{event.registrations_count} / {event.max_participants} Pers.</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-primary/60">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                        <Euro size={20} />
                      </div>
                      <div>
                        <p className="font-bold">Investition</p>
                        <p>{event.price} €</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-primary/40 leading-relaxed line-clamp-2 italic pt-4 border-t border-primary/5">
                    {event.description || "Keine Beschreibung hinterlegt."}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Participants Dialog */}
        <Dialog open={isParticipantsDialogOpen} onOpenChange={setIsParticipantsDialogOpen}>
          <DialogContent className="max-w-4xl rounded-[3rem] bg-white border-primary/5 shadow-2xl p-0 overflow-hidden">
            <div className="p-8 border-b border-primary/5 flex items-center justify-between bg-[#fff9f2]">
              <div>
                <h3 className="text-2xl font-serif text-primary mb-1">Teilnehmerliste</h3>
                <p className="text-sm text-muted-foreground">{selectedEvent?.title}</p>
              </div>
              <Badge variant="outline" className="bg-white px-4 py-2 text-primary font-bold shadow-sm">
                {participants.length} Anmeldungen
              </Badge>
            </div>
            
            <div className="max-h-[60vh] overflow-y-auto p-8">
              {participants.length === 0 ? (
                <div className="text-center py-20 bg-slate-50 rounded-[2rem] border border-dashed border-primary/10">
                  <p className="text-primary/40 font-serif italic text-lg">Noch keine Anmeldungen für dieses Event.</p>
                </div>
              ) : (
                <div className="space-y-4 overflow-x-auto">
                  <table className="w-full min-w-[500px] text-left">
                    <thead>
                      <tr className="text-xs uppercase font-black tracking-widest text-primary/40 border-b border-primary/5">
                        <th className="pb-4 pl-4">Name</th>
                        <th className="pb-4">Kontakt</th>
                        <th className="pb-4">Partner?</th>
                        <th className="pb-4">Anmeldedatum</th>
                      </tr>
                    </thead>
                    <tbody>
                      {participants.map((p) => (
                        <tr key={p.id} className="group hover:bg-slate-50 transition-colors">
                          <td className="py-4 pl-4 font-bold text-primary">{p.first_name} {p.last_name}</td>
                          <td className="py-4">
                            <div className="flex flex-col text-xs">
                              <span className="text-primary/70">{p.email}</span>
                              <span className="text-primary/40">{p.phone}</span>
                            </div>
                          </td>
                          <td className="py-4">
                            {p.has_partner ? (
                              <Badge className="bg-accent text-white border-none">Mit Partner</Badge>
                            ) : (
                              <span className="text-primary/20">—</span>
                            )}
                          </td>
                          <td className="py-4 text-xs text-primary/40">
                            {new Date(p.created_at).toLocaleDateString('de-DE')}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
            
            <DialogFooter className="p-8 bg-white border-t border-primary/5">
              <Button onClick={() => setIsParticipantsDialogOpen(false)} className="rounded-xl h-12 px-8 flex-1 sm:flex-none">Schließen</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Create/Edit Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-2xl rounded-[3rem] bg-white border-primary/5 shadow-[0_32px_64px_-12px_rgba(42,16,6,0.15)] overflow-hidden">
            <DialogHeader className="p-8 pb-0">
              <DialogTitle className="text-3xl font-serif text-primary">
                {editingEvent ? "Event bearbeiten" : "Neues Event erstellen"}
              </DialogTitle>
            </DialogHeader>
            
            <form onSubmit={handleSubmit} className="space-y-6 p-8 overflow-y-auto max-h-[70vh]">
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="title" className="text-sm font-bold uppercase opacity-60">Event Titel *</Label>
                  <Input id="title" required value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} className="h-12 rounded-xl" placeholder="z.B. Rückbildungskurs intensiv" />
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                   <div className="grid gap-2">
                     <Label htmlFor="date" className="text-sm font-bold uppercase opacity-60">Datum *</Label>
                     <Input id="date" type="date" required value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} className="h-12 rounded-xl" />
                   </div>
                   <div className="grid gap-2">
                     <Label htmlFor="time" className="text-sm font-bold uppercase opacity-60">Uhrzeit *</Label>
                     <Input id="time" type="time" required value={formData.time} onChange={(e) => setFormData({...formData, time: e.target.value})} className="h-12 rounded-xl" />
                   </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="location" className="text-sm font-bold uppercase opacity-60">Veranstaltungsort *</Label>
                  <Input id="location" required value={formData.location} onChange={(e) => setFormData({...formData, location: e.target.value})} className="h-12 rounded-xl" placeholder="Ort oder Link bei Online-Events" />
                </div>

                <div className="grid grid-cols-2 gap-6">
                   <div className="grid gap-2">
                     <Label htmlFor="price" className="text-sm font-bold uppercase opacity-60">Preis (€) *</Label>
                     <Input id="price" type="number" step="0.50" required value={formData.price} onChange={(e) => setFormData({...formData, price: parseFloat(e.target.value)})} className="h-12 rounded-xl" />
                   </div>
                   <div className="grid gap-2">
                     <Label htmlFor="max_participants" className="text-sm font-bold uppercase opacity-60">Max. Teilnehmer *</Label>
                     <Input id="max_participants" type="number" required value={formData.max_participants} onChange={(e) => setFormData({...formData, max_participants: parseInt(e.target.value)})} className="h-12 rounded-xl" />
                   </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                   <div className="grid gap-2">
                     <Label className="text-sm font-bold uppercase opacity-60">Kategorie *</Label>
                     <Select value={formData.category} onValueChange={(val) => setFormData({...formData, category: val})}>
                        <SelectTrigger className="h-12 rounded-xl">
                          <SelectValue placeholder="Kategorie wählen" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl">
                          <SelectItem value="hebamme">Hebammenpraxis</SelectItem>
                          <SelectItem value="naturheilkunde">Naturheilpraxis</SelectItem>
                          <SelectItem value="kinderwunsch">Kinderwunsch</SelectItem>
                          <SelectItem value="cosmedea">CosMedea</SelectItem>
                        </SelectContent>
                     </Select>
                   </div>
                   <div className="grid gap-2">
                     <Label className="text-sm font-bold uppercase opacity-60">Status *</Label>
                     <Select value={formData.status} onValueChange={(val) => setFormData({...formData, status: val})}>
                        <SelectTrigger className="h-12 rounded-xl">
                          <SelectValue placeholder="Status wählen" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl">
                          <SelectItem value="published">Öffentlich</SelectItem>
                          <SelectItem value="draft">Entwurf</SelectItem>
                          <SelectItem value="cancelled">Abgesagt</SelectItem>
                          <SelectItem value="full">Ausgebucht</SelectItem>
                        </SelectContent>
                     </Select>
                   </div>
                </div>

                <div className="grid gap-2 pt-2">
                  <Label htmlFor="description" className="text-sm font-bold uppercase opacity-60">Beschreibung</Label>
                  <Textarea id="description" value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} className="min-h-[120px] rounded-2xl p-4" placeholder="Optionale Details zum Kurs..." />
                </div>
              </div>

              <DialogFooter className="pt-6 border-t border-primary/5">
                <Button variant="ghost" type="button" onClick={() => setIsDialogOpen(false)} className="rounded-xl h-12 px-8">Abbrechen</Button>
                <Button type="submit" className="bg-primary text-white font-bold h-12 px-10 rounded-xl hover:shadow-lg transition-all">
                  {editingEvent ? "Speichern" : "Event erstellen"}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>

        {/* Footer Info */}
        <div className="p-8 bg-blue-50/50 rounded-[2rem] flex items-center gap-4 opacity-70 mb-10">
           <AlertCircle className="w-6 h-6 text-blue-600 shrink-0" />
           <p className="text-xs font-medium text-blue-900 leading-relaxed italic">
             „Änderungen an Veranstaltungen werden in Echtzeit übernommen. Stell sicher, dass Preise und Daten korrekt sind, bevor du ein Event auf 'Öffentlich' setzt.“ – System Hinweis
           </p>
        </div>
      </div>
    </AdminLayout>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}
