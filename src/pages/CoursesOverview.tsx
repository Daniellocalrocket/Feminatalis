import React, { useEffect, useState } from "react";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "@/lib/index";
import { 
  Calendar, 
  MapPin, 
  Users, 
  ArrowRight, 
  Sparkles, 
  Zap, 
  Target, 
  Heart,
  Clock,
  CheckCircle2,
  Lock,
  Play
} from "lucide-react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { formatDate } from "@/lib/index";
import { Badge } from "@/components/ui/badge";

export default function CoursesOverview() {
  const [events, setEvents] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const { data: eventsData, error: eventsError } = await supabase
          .from('events')
          .select('*')
          .eq('status', 'published')
          .gte('date', new Date().toISOString().split('T')[0])
          .order('date', { ascending: true });

        if (eventsError) throw eventsError;

        const { data: statsData, error: statsError } = await supabase
          .from('event_stats')
          .select('*');

        if (statsError) {
          console.warn("Could not fetch event stats:", statsError);
        }

        if (eventsData) {
          const transformedData = eventsData.map((event: any) => {
            const stat = statsData?.find((s: any) => s.event_id === event.id);
            return {
              ...event,
              registrations_count: stat?.registrations_count || 0,
              spots_left: stat?.spots_left ?? event.max_participants
            };
          });
          setEvents(transformedData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("Fehler beim Laden der Veranstaltungen.");
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  const premiumCourses = [
    {
      id: "roadmap",
      title: "Fruchtbarkeits-Kompass: Zellenergie-Fahrplan",
      subtitle: "Planungsphase & Kinderwunsch",
      description: "Vom Informationschaos zur Strategie. Deine bioenergetische 90-Tage-Begleitung für maximale Fruchtbarkeit.",
      features: ["Nährstoffdichte Ernährung", "Stoffwechsel-Stabilität", "Immunsystem-Balance", "Zellenergie-Aufbau", "Nervensystem-Regulation"],
      link: `${ROUTE_PATHS.ZELLKRAFT_ROADMAP}?event=${encodeURIComponent("Fruchtbarkeits-Kompass: Zellenergie-Fahrplan")}`,
      badge: "Strategische Wahl",
      icon: Target,
      color: "accent"
    },
    {
      id: "geburtskompass",
      title: "Zellkraft-Geburtskompass",
      subtitle: "Schwangerschaft & Geburtsreife",
      description: "Werde zur Architektin der kindlichen Entwicklung. Tiefe bioenergetische Optimierung für eine sichere Geburt.",
      features: ["Mitochondrien-Shuttle", "Epigenetik-Matrix", "Nervensystem-Regulation", "Interventions-Schutz"],
      link: `${ROUTE_PATHS.PREMIUM_ZELLKRAFT_KURS}?event=${encodeURIComponent("Zellkraft-Geburtskompass")}`,
      badge: "Vollumfängliche Begleitung",
      icon: Sparkles,
      color: "primary"
    }
  ];

  const containers = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-[#fff9f2] min-h-screen font-sans selection:bg-primary/10">
      <SEO 
        title="Kurse & Events | Feminatalis" 
        description="Finde den richtigen Weg für dich. Von exklusiven Online-Programmen bis zu Live-Veranstaltungen in Bad Schönborn." 
      />

      {/* Online Programs - TOP SECTION */}
      <section className="pt-12 pb-20 lg:pt-16 lg:pb-24 bg-white border-b border-border/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-64 bg-accent/5 blur-[100px] -z-10" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 blur-[100px] -z-10" />
        
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-widest uppercase mb-6 border border-accent/20">
              <Play size={14} /> Exklusiv online
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-primary mb-6 leading-[1.1]">
              Premium <span className="text-accent italic font-light">Online-Programme</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12">
              Deine bioenergetische Begleitung für maximale Fruchtbarkeit oder eine sichere Geburt – flexibel von zuhause.
            </p>
          </div>

          <motion.div 
            variants={containers}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-10"
          >
            {premiumCourses.map((course) => (
              <motion.div
                key={course.id}
                variants={item}
                whileHover={{ y: -5 }}
                className="relative group bg-[#fff9f2] p-10 lg:p-12 rounded-[3.5rem] border border-border hover:border-accent/40 shadow-xl shadow-primary/5 transition-all flex flex-col"
              >
                <div className="absolute top-8 right-8">
                  <Badge className={`bg-${course.color} text-white px-4 py-1.5 rounded-full text-[10px] uppercase font-black tracking-widest shadow-lg shadow-${course.color}/20`}>
                    {course.badge}
                  </Badge>
                </div>

                <div className={`w-16 h-16 rounded-3xl bg-${course.color}/10 flex items-center justify-center text-${course.color} mb-8 group-hover:scale-110 transition-transform`}>
                  <course.icon size={32} strokeWidth={1.5} />
                </div>

                <div className="mb-4">
                  <h3 className="text-xs font-bold text-accent uppercase tracking-[0.2em] mb-2">{course.subtitle}</h3>
                  <h4 className="text-3xl lg:text-4xl font-serif text-primary leading-tight">{course.title}</h4>
                </div>

                <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                  {course.description}
                </p>

                <div className="space-y-3 mb-10 flex-grow">
                  {course.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-primary/80 text-base font-medium">
                      <CheckCircle2 size={18} className="text-accent shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <Link 
                  to={course.link} 
                  className={`bg-${course.color} text-white w-full py-6 rounded-2xl font-bold text-center flex items-center justify-center gap-3 hover:translate-x-1 transition-all shadow-xl shadow-${course.color}/10 text-lg`}
                >
                  Jetzt starten <ArrowRight size={20} />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-16 text-center">
            <p className="text-sm text-muted-foreground">
              Beide Programme sind auch als Gutschein erhältlich – perfekt zum Verschenken.
            </p>
          </div>
        </div>
      </section>

      {/* Events Section - NOW SECONDARY */}
      <section className="py-20 lg:py-24 bg-white border-b border-border/50 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-serif text-primary/40 uppercase tracking-widest mb-4">
              Oder live dabei sein
            </h2>
            <p className="text-lg text-muted-foreground">
              Kurse & Veranstaltungen vor Ort in Bad Schönborn
            </p>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center h-40">
              <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
          ) : events.length === 0 ? (
            <div className="text-center p-20 bg-[#fff9f2] rounded-[3rem] border border-dashed border-primary/20">
              <Calendar className="w-16 h-16 mx-auto text-primary/20 mb-6" />
              <p className="text-xl font-serif text-primary/60">Aktuell sind keine weiteren öffentlichen Termine geplant.</p>
              <p className="text-sm text-muted-foreground mt-2">Wir informieren dich gerne über neue Termine.</p>
            </div>
          ) : (
            <motion.div 
              variants={containers}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {events.map((event) => (
                <motion.div 
                  key={event.id}
                  variants={item}
                  className="bg-[#fff9f2] border border-border p-8 rounded-[2.5rem] hover:shadow-2xl transition-all group flex flex-col"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="px-3 py-1 rounded-full bg-white text-[10px] uppercase font-bold text-primary tracking-widest border border-border shadow-sm">
                      {event.category}
                    </div>
                    {event.spots_left <= 0 ? (
                      <Badge className="bg-red-500 text-white border-none px-3 py-1 text-[10px] uppercase font-black tracking-widest">
                        Ausgebucht
                      </Badge>
                    ) : event.spots_left <= 3 ? (
                      <Badge className="bg-orange-500 text-white border-none px-3 py-1 text-[10px] uppercase font-black tracking-widest animate-pulse">
                        Nur noch {event.spots_left} Plätze
                      </Badge>
                    ) : (
                      <div className="text-[10px] font-bold text-accent uppercase tracking-widest">
                        Anmeldung möglich
                      </div>
                    )}
                  </div>

                  <h4 className="text-2xl font-serif text-primary mb-4 leading-tight group-hover:text-accent transition-colors flex-grow">
                    {event.title}
                  </h4>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Calendar size={16} className="text-accent" />
                      {formatDate(event.date)} um {event.time.slice(0, 5)} Uhr
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <MapPin size={16} className="text-accent" />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Users size={16} className="text-accent" />
                      {event.spots_left <= 0 ? (
                        <span className="text-red-500 font-bold">Kurs ist voll belegt</span>
                      ) : (
                        <span>Noch {event.spots_left} von {event.max_participants} Plätzen frei</span>
                      )}
                    </div>
                  </div>

                  {event.spots_left > 0 ? (
                    <Link 
                      to={ROUTE_PATHS.EVENT_BOOKING.replace(':eventId', event.id)}
                      className="w-full py-4 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/10"
                    >
                      Jetzt Platz buchen <ArrowRight size={16} />
                    </Link>
                  ) : (
                    <div 
                      className="w-full py-4 h-auto rounded-xl border border-border text-muted-foreground font-bold bg-[#fff9f2] flex items-center justify-center gap-2 cursor-not-allowed opacity-60"
                    >
                      <Lock size={16} /> Aktuell ausgebucht
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Trust Quote */}
      <section className="py-24 border-t border-border/50 bg-[#fff9f2]">
         <div className="container mx-auto px-4 text-center max-w-4xl">
            <div className="mb-12 relative">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12">
                 <span className="text-8xl font-serif text-accent/10">"</span>
               </div>
               <p className="text-2xl md:text-3xl font-serif italic text-primary leading-relaxed relative z-10">
                 Die beste Zeit, in deine Biologie zu investieren, war vor 90 Tagen. <br className="hidden md:block" />
                 Die zweitbeste Zeit ist <span className="text-accent font-normal underline decoration-accent/30 decoration-4 underline-offset-8">jetzt.</span>
               </p>
            </div>
            <div className="flex flex-col items-center">
               <div className="w-16 h-16 rounded-full bg-orange-50 mb-4 overflow-hidden border-2 border-white shadow-lg">
                 <div className="w-full h-full bg-primary flex items-center justify-center text-white font-serif italic">AD</div>
               </div>
               <p className="font-bold text-primary">Angela Deschner</p>
               <p className="text-xs text-muted-foreground uppercase tracking-widest font-black">Expertin für Zell-Energie & Hebamme</p>
            </div>
         </div>
      </section>
    </div>
  );
}