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
  Compass,
  CheckCircle2,
  Lock
} from "lucide-react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { formatDate } from "@/lib/index";
import { Badge } from "@/components/ui/badge";

export default function CoursesOverview() {
  const [events, setEvents] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchEvents() {
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .eq('status', 'published')
        .gte('date', new Date().toISOString().split('T')[0])
        .order('date', { ascending: true });

      if (!error && data) {
        setEvents(data);
      }
      setIsLoading(false);
    }
    fetchEvents();
  }, []);

  const premiumCourses = [
    {
      id: "roadmap",
      title: "Zellkraft-Roadmap",
      subtitle: "Planungsphase & Kinderwunsch",
      description: "Vom Informationschaos zur Strategin. Deine bioenergetische 90-Tage-Begleitung für maximale Fruchtbarkeit.",
      features: ["90-Tage-Zell-Logik", "Arzt-Leitfaden", "Befund-Board", "Animal-Based Fokus"],
      link: ROUTE_PATHS.ZELLKRAFT_ROADMAP,
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
      link: ROUTE_PATHS.PREMIUM_ZELLKRAFT_KURS,
      badge: "Vollumfängliche Begleitung",
      icon: Zap,
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

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-white border-b border-border/50">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 blur-[100px] -z-10" />
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase mb-8 border border-primary/10">
              <Compass size={14} /> Dein Wegbegleiter
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-primary mb-8 leading-[1.1]">
              Wähle deine <br /> 
              <span className="text-accent italic font-light">Evolutionsstufe.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Vom ersten Impuls bis zur tiefgreifenden Zell-Strategie. Entdecke unsere Formate, die dich von der reinen Informationsempfängerin zur aktiven Gestalterin deiner Biologie machen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Online Programs - The Premium Path */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center justify-between mb-16">
            <div>
              <h2 className="text-3xl lg:text-4xl font-serif text-primary mb-2">Premium Online-Programme</h2>
              <p className="text-muted-foreground underline decoration-accent/30 underline-offset-4">Maximale Flexibilität & biologische Tiefe</p>
            </div>
            <div className="hidden md:block">
               <Sparkles className="text-accent w-12 h-12 opacity-20" />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {premiumCourses.map((course) => (
              <motion.div
                key={course.id}
                whileHover={{ y: -5 }}
                className="relative group bg-white p-10 lg:p-14 rounded-[3.5rem] border border-border hover:border-accent/40 shadow-xl shadow-primary/5 transition-all flex flex-col h-full"
              >
                <div className="absolute top-8 right-8">
                  <Badge className={`bg-${course.color} text-white px-4 py-1.5 rounded-full text-[10px] uppercase font-black tracking-widest shadow-lg shadow-${course.color}/20`}>
                    {course.badge}
                  </Badge>
                </div>

                <div className={`w-16 h-16 rounded-2xl bg-${course.color}/5 flex items-center justify-center text-${course.color} mb-10 group-hover:scale-110 transition-transform`}>
                  <course.icon size={32} strokeWidth={1.5} />
                </div>

                <div className="mb-4">
                  <h3 className="text-sm font-bold text-accent uppercase tracking-[0.2em] mb-2">{course.subtitle}</h3>
                  <h4 className="text-3xl lg:text-4xl font-serif text-primary leading-tight">{course.title}</h4>
                </div>

                <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                  {course.description}
                </p>

                <div className="space-y-4 mb-12 flex-grow">
                  {course.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-primary/80 font-medium whitespace-nowrap overflow-hidden text-ellipsis">
                      <CheckCircle2 size={18} className="text-accent shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <Link 
                  to={course.link} 
                  className={`bg-${course.color} text-white w-full py-6 rounded-2xl font-bold text-center flex items-center justify-center gap-3 hover:translate-x-1 transition-all shadow-xl shadow-${course.color}/10`}
                >
                  Zum Programm <ArrowRight size={20} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Psychology Teaser / Strategic Guide */}
      <section className="py-20 bg-primary text-white overflow-hidden relative">
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,_rgba(255,255,255,0.05)_0%,_transparent_50%)]" />
         <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
            <Heart className="w-16 h-16 mx-auto mb-8 text-accent animate-pulse" />
            <h2 className="text-4xl font-serif mb-8 text-white">Welcher Weg passt zu <span className="text-accent italic">deiner</span> Situation?</h2>
            <div className="grid md:grid-cols-2 gap-8 text-left bg-white/5 p-10 rounded-[3rem] border border-white/10 backdrop-blur-md">
               <div className="space-y-4">
                  <h4 className="font-bold text-accent uppercase tracking-widest text-xs">Der erste Schritt</h4>
                  <p className="text-sm opacity-70">„Ich möchte die Praxis kennenlernen, Fragen stellen und einen Überblick über ein bestimmtes Thema bekommen.“</p>
                  <p className="font-serif text-lg">→ Besuche ein Live-Event</p>
               </div>
               <div className="space-y-4 md:border-l md:border-white/10 md:pl-8">
                  <h4 className="font-bold text-[#fde4c8] uppercase tracking-widest text-xs">Die Komplett-Lösung</h4>
                  <p className="text-sm opacity-70">„Ich möchte volle Souveränität, einen strategischen 90-Tage Plan und tiefgreifende biologische Optimierung ohne Zeitverlust.“</p>
                  <p className="font-serif text-lg text-[#fde4c8]">→ Wähle ein Online-Programm</p>
               </div>
            </div>
         </div>
      </section>

      {/* Events Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-20">
             <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">Veranstaltungen & Termine</h2>
             <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
               Persönlicher Austausch und gezielte Workshops in Bad Schönborn. Ergänze dein Wissen durch unsere Live-Formate.
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
              <p className="text-sm text-muted-foreground mt-2">Tritt unserem Newsletter bei, um über neue Termine informiert zu werden.</p>
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
                      Maximale Teilnehmer: {event.max_participants}
                    </div>
                  </div>

                  <Link 
                    to={ROUTE_PATHS.CONTACT} 
                    className="w-full py-4 rounded-xl border border-primary/20 text-primary font-bold hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2 group-inner"
                  >
                    Platz anfragen <ArrowRight size={16} className="group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Trust Quote */}
      <section className="py-24 border-t border-border/50">
         <div className="container mx-auto px-4 text-center max-w-4xl">
            <div className="mb-12 relative">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12">
                  <span className="text-8xl font-serif text-accent/10">“</span>
               </div>
               <p className="text-2xl md:text-3xl font-serif italic text-primary leading-relaxed relative z-10">
                 Die beste Zeit, in deine Biologie zu investieren, war vor 90 Tagen. <br className="hidden md:block" />
                 Die zweitbeste Zeit ist <span className="text-accent font-normal underline decoration-accent/30 decoration-4 underline-offset-8">jetzt.</span>
               </p>
            </div>
            <div className="flex flex-col items-center">
               <div className="w-16 h-16 rounded-full bg-slate-200 mb-4 overflow-hidden border-2 border-white shadow-lg">
                  {/* Avatar fallback */}
                  <div className="w-full h-full bg-primary flex items-center justify-center text-white font-serif italic">AD</div>
               </div>
               <p className="font-bold text-primary">Angela Deschner</p>
               <p className="text-xs text-muted-foreground uppercase tracking-widest font-black">Expertin für Zell-Energie & Hebamme</p>
            </div>
         </div>
      </section>

      {/* Footer-ish Info */}
      <section className="py-12 border-t border-border opacity-50 text-center bg-white">
         <p className="text-xs font-medium uppercase tracking-[0.3em]">
           Feminatalis – Angela Deschner | Modern Clinical Serenity
         </p>
      </section>
    </div>
  );
}
