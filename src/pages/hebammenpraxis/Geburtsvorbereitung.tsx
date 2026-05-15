import React from "react";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "@/lib/index";
import { 
  ShieldCheck, 
  ArrowRight, 
  Heart, 
  Brain, 
  UserCheck, 
  BookOpen, 
  Crown, 
  Wind, 
  Users, 
  Hospital, 
  Activity,
  Calendar,
  Clock,
  Sparkles,
  CheckCircle2,
  Coffee,
  Info,
  Layers,
  Baby
} from "lucide-react";
import SplitScreenHero from "@/components/SplitScreenHero";
import PreisTransparenz from "@/components/PreisTransparenz";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Geburtsvorbereitung() {
  const schedule = [
    { day: "Freitag", time: "18:00 – 21:15 Uhr", focus: "Ankommen, Basis-Wissen & Kennenlernen" },
    { day: "Samstag", time: "09:00 – 16:30 Uhr", focus: "Geburtsphasen, Körperarbeit & Partner-Support" },
    { day: "Sonntag", time: "09:00 – 15:30 Uhr", focus: "Wochenbett, Stillen & Leben mit dem Neugeborenen" }
  ];

  const detailModules = [
    {
      title: "Atem, Körper & Fokus",
      icon: <Wind />,
      text: "Wir trainieren spezifische Atemtechniken für Fokus, Kraftdosierung und innere Stabilität. Körperübungen zur Entlastung und Beweglichkeit bereiten dich optimal auf die physischen Anforderungen vor. Du lernst, wie du durch Regulation auch in intensiven Momenten bei dir bleibst."
    },
    {
      title: "Geburt verstehen",
      icon: <Layers />,
      text: "Was passiert wann – und was ist normal? Wir vergleichen die Vaginalgeburt mit dem Kaiserschnitt und erklären die Geburtsphasen sowie Klinikabläufe verständlich. Ein Schwerpunkt liegt auf der Schmerzlinderung: Wir beleuchten sowohl natürliche als auch medizinische Möglichkeiten."
    },
    {
      title: "Das Team-Konzept",
      icon: <Users />,
      text: "Wie kann der Partner wirklich unterstützen? Wir geben klare, umsetzbare Werkzeuge für die Begleitperson an die Hand. Aus Unsicherheit wird Verbindung – damit ihr euch unter der Geburt gegenseitig Halt geben könnt und als Team sicher aufgestellt seid."
    },
    {
      title: "Wochenbett & Stillzeit",
      icon: <Baby />,
      text: "Damit ihr nach der Geburt informiert statt überrumpelt seid: Wir blicken realistisch auf das Wochenbett und den Stillstart. Zudem besprechen wir freiwillige Prophylaxen beim Neugeborenen, damit ihr Entscheidungen auf Basis von Wissen statt Zufall treffen könnt."
    }
  ];

  return (
    <div className="bg-background min-h-screen font-sans">
      <SEO 
        title="Geburtsvorbereitungskurs | Intensiv-Wochenende für Paare" 
        description="Fundierte Geburtsvorbereitung kompakt am Wochenende. Atemtechniken, Partner-Support, Schmerzmanagement und Wochenbett-Fokus. Jetzt Platz anfragen." 
      />

      <SplitScreenHero
        badge="Intensiv-Wochenendkurs für Paare"
        title={<>Bereit für die Geburt: <br /><span className="text-accent italic font-light">Kompakt & Fundiert</span></>}
        subtitle="Ihr seid beruflich eingespannt, wollt aber keine Abstriche bei der Vorbereitung machen? Unser Intensiv-Wochenende bietet euch Orientierung für echte Entscheidungen – medizinisch klar erklärt und alltagsnah geführt."
        imageSrc="https://images.unsplash.com/photo-1559839734-2b71f1e3c7e3?q=80&w=2070&auto=format&fit=crop"
        imageAlt="Paar im Geburtsvorbereitungskurs"
        imageKey="img_hero_geburtsvorbereitung"
      >
        <div className="flex flex-wrap gap-4">
          <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-primary text-white px-10 py-5 rounded-2xl font-bold hover:shadow-2xl transition-all shadow-xl active:scale-95 flex items-center gap-2">
            Kursplatz anfragen <ArrowRight size={20} />
          </Link>
        </div>
      </SplitScreenHero>

      {/* Deep Dive Intro */}
      <section className="py-24 bg-white scroll-mt-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-8 text-left">
              <h2 className="text-3xl lg:text-5xl font-serif text-primary leading-tight">Sicher, verbunden und <br /><span className="text-accent italic">bestens vorbereitet</span></h2>
              <div className="prose prose-lg text-muted-foreground leading-relaxed">
                <p>
                  In diesem Intensiv-Wochenendkurs bekommt ihr mehr als nur Basiswissen. Wir vermitteln euch <strong>Handlungssicherheit</strong> für die Geburt und die Zeit danach. Es geht darum, Klinikabläufe einzuordnen und als Paar eine Einheit zu bilden.
                </p>
                <p>
                  Neben fundierten Informationen zu Geburt, Wochenbett und Stillzeit erhaltet ihr konkrete Werkzeuge, die euch Orientierung geben, wenn es körperlich und emotional intensiver wird.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-sm font-medium text-primary">
                  <CheckCircle2 size={18} className="text-accent" /> Ideal für Berufstätige
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-primary">
                  <CheckCircle2 size={18} className="text-accent" /> Starker Partner-Fokus
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-primary">
                  <CheckCircle2 size={18} className="text-accent" /> Kassenleistung
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 p-10 lg:p-12 rounded-[4rem] border border-border">
              <h3 className="text-2xl font-serif text-primary mb-8">Was euch erwartet</h3>
              <div className="space-y-6">
                {detailModules.map((module, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-accent shadow-sm group-hover:scale-110 transition-transform shrink-0">
                      {module.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-2">{module.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {module.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details & Comparisons */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6">Wissen schafft Vertrauen</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Wir räumen mit Mythen auf und geben euch medizinisch fundierte Einblicke in die Geburtsmedizin.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-[3.5rem] border border-border shadow-sm text-left">
              <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-3">
                <Hospital className="text-accent" /> Geburt verstehen & einordnen
              </h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0" />
                  <span><strong>Geburtsphasen:</strong> Was passiert wann in meinem Körper? Wir erklären die Dynamik von Eröffnung bis Austreibung.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0" />
                  <span><strong>Interventionen:</strong> Schmerzlinderung (PDA, natürliche Methoden) und med. Eingriffe verständlich eingeordnet.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0" />
                  <span><strong>Modus:</strong> Fundierter Vergleich zwischen Vaginalgeburt und Kaiserschnitt.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-10 rounded-[3.5rem] border border-border shadow-sm text-left">
              <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-3">
                <ShieldCheck className="text-accent" /> Nach der Geburt
              </h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0" />
                  <span><strong>Das Wochenbett:</strong> Erwartung vs. Realität. Wir bereiten euch auf die Zeit der Heilung und des Kennenlernens vor.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0" />
                  <span><strong>Stillstart:</strong> Praktische Tipps für eine gelungene Stillbeziehung von Anfang an.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0" />
                  <span><strong>Prophylaxen:</strong> Aufklärung über Vitamin K, Screening & Co. – damit ihr souverän entscheiden könnt.</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 text-left flex items-start gap-6">
             <Info className="text-primary shrink-0 mt-1" />
             <div>
               <h4 className="font-bold text-primary mb-2">Optionale Ergänzungen</h4>
               <p className="text-sm text-muted-foreground leading-relaxed">
                 Auf Wunsch sprechen wir auch über ergänzende geburtsvorbereitende Möglichkeiten wie Akupunktur oder körperorientierte Unterstützung. Dies ist ein Angebot, um eure Vorbereitung individuell abzurunden.
               </p>
             </div>
          </div>
        </div>
      </section>

      {/* Detailed Schedule */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6">Zeitplan & Ablauf</h2>
            <p className="text-muted-foreground text-lg">Ein Wochenende, das euch als Paar wachsen lässt.</p>
          </div>

          <div className="grid gap-6">
            {schedule.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 p-8 lg:p-10 rounded-[3.5rem] border border-border shadow-sm flex flex-col md:flex-row items-center justify-between gap-8 hover:bg-white hover:shadow-xl transition-all group"
              >
                <div className="flex items-center gap-8 text-left w-full md:w-auto">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-accent shadow-sm group-hover:bg-accent group-hover:text-white transition-all">
                    <Clock size={32} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-2xl font-serif">{item.day}</h4>
                    <p className="text-accent font-bold tracking-widest text-xs uppercase">{item.time}</p>
                  </div>
                </div>
                <div className="md:text-right w-full md:w-auto pt-6 md:pt-0 border-t md:border-t-0 border-border">
                  <span className="text-muted-foreground text-lg italic block md:max-w-xs">{item.focus}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Coffee size={16} className="text-accent" /> 15 Min. Kaffeepausen
            </div>
            <div className="flex items-center gap-2">
              <Activity size={16} className="text-accent" /> 1 Std. Mittagspause
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
           <div className="bg-primary text-white p-12 lg:p-20 rounded-[4rem] text-center shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 -mr-32 -mt-32 rounded-full blur-3xl opacity-20"></div>
              <Crown className="w-16 h-16 text-accent mx-auto mb-8 relative z-10" />
              <h2 className="text-3xl lg:text-5xl font-serif mb-8 text-white font-bold relative z-10">Wir schaffen das – gemeinsam.</h2>
              <p className="text-xl opacity-90 mb-12 max-w-3xl mx-auto leading-relaxed relative z-10">
                Die Plätze für unsere Intensiv-Wochenenden sind begrenzt, um eine vertrauensvolle Atmosphäre in der Gruppe zu gewährleisten.
              </p>
              <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-white text-primary px-12 py-5 rounded-2xl font-bold hover:bg-accent hover:text-white transition-all shadow-xl inline-flex items-center gap-3 relative z-10">
                Kursplatz anfragen <ArrowRight size={20} />
              </Link>
           </div>
        </div>
      </section>

      <PreisTransparenz 
        preisHint="Partnergebühr 160,- €" 
        hinweis="Geburtsvorbereitungskurse stellen eine Kassenleistung dar. Die Abrechnung erfolgt für die werdende Mutter direkt über die gesetzliche Krankenkasse. Weitere Infos siehe AGB."
      />
    </div>
  );
}
