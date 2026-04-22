import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { ROUTE_PATHS, formatDate } from "@/lib/index";
import { motion } from "framer-motion";
import { 
  Calendar, 
  MapPin, 
  Clock, 
  ArrowLeft, 
  CheckCircle2, 
  ChevronRight, 
  AlertCircle,
  Users,
  CreditCard,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import SEO from "@/components/SEO";

export default function EventBooking() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState<any>(null);
  const [stats, setStats] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    hasPartner: false,
    dataConsent: false
  });

  useEffect(() => {
    async function fetchData() {
      if (!eventId) return;

      const [eventRes, statsRes] = await Promise.all([
        supabase.from('events').select('*').eq('id', eventId).single(),
        supabase.from('event_stats').select('*').eq('event_id', eventId).single()
      ]);

      if (eventRes.error || !eventRes.data) {
        toast.error("Event nicht gefunden.");
        navigate(ROUTE_PATHS.COURSES_OVERVIEW);
        return;
      }

      setEvent(eventRes.data);
      setStats(statsRes.data);
      setIsLoading(false);
    }
    fetchData();
  }, [eventId, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.dataConsent) {
      toast.error("Bitte akzeptiere die Datenschutzbestimmungen.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Re-check capacity before submitting
      const { data: latestStats } = await supabase
        .from('event_stats')
        .select('spots_left')
        .eq('event_id', eventId)
        .single();

      if (latestStats && latestStats.spots_left <= 0) {
        toast.error("Leider ist dieser Kurs gerade eben ausgebucht worden.");
        setIsSubmitting(false);
        return;
      }

      const { error } = await supabase.from('event_registrations').insert([{
        event_id: eventId,
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        has_partner: formData.hasPartner,
        status: 'confirmed'
      }]);

      if (error) throw error;

      setIsSuccess(true);
      toast.success("Anmeldung erfolgreich!");
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
    } catch (error) {
      console.error("Booking error:", error);
      toast.error("Fehler bei der Anmeldung. Bitte versuche es später erneut.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#fff9f2] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-[#fff9f2] pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-12 md:p-16 rounded-[4rem] shadow-2xl border border-white relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-green-500/20" />
            <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-4xl font-serif text-primary mb-6">Platz reserviert!</h1>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Vielen Dank für deine Anmeldung zum Kurs <br />
              <span className="text-primary font-bold">"{event.title}"</span>.
            </p>
            <div className="bg-primary/5 p-8 rounded-3xl mb-10 text-left space-y-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-primary/70">
                  Du erhältst in Kürze eine Bestätigungs-E-Mail mit allen weiteren Details. 
                  Die Rechnung wird dir separat zugestellt.
                </p>
              </div>
            </div>
            <Button asChild className="h-14 rounded-2xl px-10 font-bold bg-primary text-white hover:bg-primary/95">
              <Link to="/">Zurück zur Startseite</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    );
  }

  const isFull = stats?.spots_left <= 0;

  return (
    <div className="min-h-screen bg-[#fff9f2] pt-24 lg:pt-32 pb-24">
      <SEO 
        title={`Anmeldung: ${event.title} | Feminatalis`}
        description={`Sichere dir deinen Platz für ${event.title} am ${formatDate(event.date)}.`}
      />

      <div className="container mx-auto px-4 max-w-6xl">
        <Link 
          to={ROUTE_PATHS.COURSES_OVERVIEW}
          className="inline-flex items-center gap-2 text-primary/40 hover:text-primary transition-colors mb-12 font-bold uppercase tracking-widest text-xs group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Zurück zur Übersicht
        </Link>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Event Details Card */}
          <div className="lg:col-span-5 space-y-8">
             <motion.div
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               className="bg-white p-8 md:p-10 rounded-[3rem] shadow-xl border border-white"
             >
                <div className="mb-8">
                  <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-widest mb-4">
                    {event.category}
                  </span>
                  <h1 className="text-3xl md:text-4xl font-serif text-primary leading-tight mb-4">
                    {event.title}
                  </h1>
                </div>

                <div className="space-y-6 mb-10">
                  <div className="flex items-center gap-4 text-primary/70">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider opacity-40">Datum & Zeit</p>
                      <p className="font-medium text-primary">{formatDate(event.date)} um {event.time.slice(0, 5)} Uhr</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-primary/70">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider opacity-40">Ort</p>
                      <p className="font-medium text-primary">{event.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-primary/70">
                    <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-green-600">
                      <CreditCard size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider opacity-40">Investition</p>
                      <p className="font-medium text-primary">
                        {event.price > 0 ? `${event.price} €` : "Kassenleistung"}
                        {event.title.toLowerCase().includes("geburtsvorbereitung") && " (zzgl. Partnergebühr)"}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-primary/5">
                   <p className="text-sm text-muted-foreground leading-relaxed italic">
                     {event.description}
                   </p>
                </div>
             </motion.div>

             <div className="p-6 bg-accent/5 rounded-[2rem] border border-accent/10 flex items-center gap-4">
               <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-accent shadow-sm">
                 <Users size={24} />
               </div>
               <div>
                  <p className="text-xs font-bold text-accent uppercase tracking-widest">Verfügbarkeit</p>
                  <p className="text-primary font-serif">
                    {isFull ? "Leider ausgebucht" : `Nur noch ${stats.spots_left} von ${stats.max_participants} Plätzen frei`}
                  </p>
               </div>
             </div>
          </div>

          {/* Right: Booking Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 md:p-12 rounded-[3.5rem] shadow-2xl border border-white"
            >
              <div className="mb-10">
                <h2 className="text-3xl font-serif text-primary mb-2">Deinen Platz sichern</h2>
                <p className="text-muted-foreground">Fülle das Formular aus, um dich verbindlich anzumelden.</p>
              </div>

              {isFull ? (
                <div className="p-10 text-center bg-slate-50 rounded-[2.5rem] border border-dashed border-slate-200">
                  <AlertCircle className="w-12 h-12 mx-auto text-slate-300 mb-6" />
                  <h3 className="text-xl font-serif text-primary mb-2">Dieser Kurs ist leider voll</h3>
                  <p className="text-muted-foreground mb-8">Schau gerne bei unseren anderen Terminen vorbei oder kontaktiere uns für die Warteliste.</p>
                  <Button asChild variant="outline" className="rounded-xl px-8 border-primary text-primary hover:bg-primary hover:text-white">
                    <Link to={ROUTE_PATHS.COURSES_OVERVIEW}>Andere Termine ansehen</Link>
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <Label htmlFor="firstName" className="text-xs font-bold uppercase tracking-widest text-primary/60">Vorname *</Label>
                       <Input 
                        id="firstName" 
                        required 
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        className="h-14 rounded-2xl bg-slate-50/50 border-primary/5 focus:bg-white" 
                        placeholder="Dein Vorname" 
                       />
                    </div>
                    <div className="space-y-2">
                       <Label htmlFor="lastName" className="text-xs font-bold uppercase tracking-widest text-primary/60">Nachname *</Label>
                       <Input 
                        id="lastName" 
                        required 
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        className="h-14 rounded-2xl bg-slate-50/50 border-primary/5 focus:bg-white" 
                        placeholder="Dein Nachname" 
                       />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <Label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-primary/60">E-Mail Adresse *</Label>
                       <Input 
                        id="email" 
                        type="email" 
                        required 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="h-14 rounded-2xl bg-slate-50/50 border-primary/5 focus:bg-white" 
                        placeholder="beispiel@mail.de" 
                       />
                    </div>
                    <div className="space-y-2">
                       <Label htmlFor="phone" className="text-xs font-bold uppercase tracking-widest text-primary/60">Telefonnummer *</Label>
                       <Input 
                        id="phone" 
                        required 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="h-14 rounded-2xl bg-slate-50/50 border-primary/5 focus:bg-white" 
                        placeholder="Für Rückfragen" 
                       />
                    </div>
                  </div>

                  {event.title.toLowerCase().includes("geburtsvorbereitung") && (
                    <div className="p-6 rounded-3xl bg-[#fff9f2] border border-orange-100 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-accent shadow-sm">
                          <Users size={18} />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-primary">Ich nehme mit Partner teil</p>
                          <p className="text-xs text-muted-foreground">Partnergebühr wird separat berechnet.</p>
                        </div>
                      </div>
                      <Checkbox 
                        checked={formData.hasPartner} 
                        onCheckedChange={(checked) => setFormData({...formData, hasPartner: !!checked})} 
                        className="w-6 h-6 rounded-lg border-primary/20 data-[state=checked]:bg-accent data-[state=checked]:border-accent"
                      />
                    </div>
                  )}

                  <div className="space-y-6 pt-4">
                    <div className="p-6 rounded-3xl bg-primary/5 border border-primary/10">
                      <div className="flex items-start gap-4 mb-4">
                        <CreditCard size={20} className="text-primary mt-1" />
                        <div>
                          <p className="text-sm font-bold text-primary">Zahlungsinformation</p>
                          <p className="text-xs text-primary/60 leading-relaxed">
                            Die Kursgebühr (sofern keine Kassenleistung) wird dir nach der Buchung per E-Mail in Rechnung gestellt. 
                            Wir bereiten aktuell die Integration von Online-Zahlungen (Stripe) vor, um dir diesen Prozess in Zukunft noch einfacher zu machen.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Checkbox 
                        id="consent" 
                        checked={formData.dataConsent}
                        onCheckedChange={(checked) => setFormData({...formData, dataConsent: !!checked})}
                        className="mt-1" 
                      />
                      <Label htmlFor="consent" className="text-xs text-muted-foreground leading-relaxed cursor-pointer selection:bg-transparent">
                        Ich stimme zu, dass meine Daten zum Zweck der Anmeldung und Kursorganisation verarbeitet werden dürfen. 
                        Meine Daten werden nicht an Dritte weitergegeben.
                      </Label>
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full h-16 rounded-2xl bg-primary text-white font-bold text-lg hover:bg-primary/95 shadow-xl shadow-primary/10 transition-all hover:-translate-y-0.5 active:scale-95 disabled:opacity-50 disabled:translate-y-0"
                    >
                      {isSubmitting ? "Wird verarbeitet..." : (
                        <span className="flex items-center gap-2">
                          Jetzt verbindlich anmelden <ChevronRight size={20} />
                        </span>
                      )}
                    </Button>
                    
                    <div className="flex items-center justify-center gap-6 opacity-30 pt-4">
                      <Sparkles size={16} />
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em]">Sichere SSL-Verschlüsselung</p>
                      <Sparkles size={16} />
                    </div>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
