import React from "react";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "@/lib/index";
import { 
  Zap, 
  Target, 
  Brain, 
  Settings2, 
  ShieldCheck, 
  ChevronRight, 
  ArrowRight,
  ClipboardCheck,
  Timer,
  LineChart,
  MessageSquare,
  Sparkles,
  FileText
} from "lucide-react";
import { motion } from "framer-motion";

export default function ZellkraftRoadmap() {
  const usps = [
    {
      icon: Timer,
      title: "Die 90-Tage-Logik",
      subtitle: "Bioenergetisches Zeitfenster",
      desc: "Die Eizellreifung dauert 90 Tage. Deine Maßnahmen von heute bestimmen die Qualität der Eizelle, die in drei Monaten springt. Wir laden deine 'Zell-Batterien' (Mitochondrien) gezielt auf."
    },
    {
      icon: Target,
      title: "Plan A, B und C",
      subtitle: "Entscheidungskompetenz",
      desc: "Schluss mit Handlungsparalyse. Wir definieren Meilensteine für natürliche Wege, medizinische Unterstützung oder kombinierte Ansätze. Souveränität trotz Unsicherheit."
    },
    {
      icon: Settings2,
      title: "5-Systeme-Modell",
      subtitle: "Ganzheitliche Biologie",
      desc: "Fruchtbarkeit ist ein Zusammenspiel von Nervensystem, Stoffwechsel, Zellkraft, Hormonachse und dem Partnerfaktor (50% der Verantwortung)."
    },
    {
      icon: LineChart,
      title: "Daten-Souveränität",
      subtitle: "Das Befund-Board",
      desc: "Teilnehmerinnen lernen, ihre Befunde radikal nach 'entscheidungsrelevant' zu sieben und Optimalwerte statt bloßer Normwerte anzustreben."
    },
    {
      icon: Brain,
      title: "Somatische Regulation",
      subtitle: "Biologische Sicherheit",
      desc: "Kein 'Entspannungs-Druck'. Wir nutzen 10-Minuten-Protokolle zur Regulation des Nervensystems, um dem Körper biologische Sicherheit für eine Schwangerschaft zu signalisieren."
    }
  ];

  return (
    <div className="bg-[#FCFAF8] min-h-screen text-[#2D2D2D] font-sans selection:bg-accent/20">
      <SEO 
        title="Zellkraft-Roadmap | Vom Informationschaos zur Strategin" 
        description="Ein medizinisch fundierter 6-Wochen-Kurs für Frauen, die ihren Kinderwunsch nicht mehr dem Zufall überlassen wollen. Deine 90-Tage-Fertilitäts-Roadmap." 
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden">
        {/* Modern Clinical Serenity Background */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,_rgba(240,125,0,0.05)_0%,_transparent_50%)] -z-10" />
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/3 rounded-full blur-[120px] -z-10" />
        
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-sm text-primary text-[11px] font-bold tracking-[0.2em] uppercase mb-8">
              <Sparkles size={14} className="text-accent" /> Limitiertes Kursprogramm
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-primary mb-8 leading-[1.05] tracking-tight">
              Vom Informationschaos <br />
              <span className="text-accent italic font-light">zur Strategin.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto font-light">
              Hör auf zu suchen, fang an zu steuern. Deine <strong className="text-primary font-semibold">90-Tage-Fertilitäts-Roadmap</strong> – ein medizinisch fundierter 6-Wochen-Kurs für Frauen, die nichts mehr dem Zufall überlassen wollen.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-primary text-white px-12 py-6 rounded-2xl font-bold text-lg hover:bg-primary/95 transition-all shadow-2xl hover:-translate-y-1 flex items-center gap-3 group">
                Strategie-Gespräch anfragen <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <p className="text-sm text-muted-foreground italic">
                *Für Frauen zwischen 30 und 42 Jahren
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Core Problem - Zero to Hero UX */}
      <section className="py-24 bg-white border-y border-border/50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="text-xs font-bold text-accent uppercase tracking-widest bg-accent/5 w-fit px-3 py-1 rounded-md">Der Schmerzpunkt</div>
              <h2 className="text-4xl md:text-5xl font-serif text-primary leading-tight">
                Gefangen in der <br />
                <span className="opacity-40">Über-Zuständigkeit?</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Google-Diagnosen, YouTube-Tipps und der ständige Druck, „sich einfach nur zu entspannen“. Die meisten Frauen mit Kinderwunsch leiden nicht unter mangelndem Wissen, sondern unter massiver <strong className="text-primary">Informationsüberflutung</strong> und einer lähmenden Handlungsparalyse.
              </p>
              <div className="p-8 bg-slate-50 border-l-4 border-accent rounded-r-3xl italic text-primary/80">
                "Wir verkaufen kein Wissen. Wir verkaufen Orientierung und Entscheidungssicherheit."
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-primary p-10 md:p-16 rounded-[4rem] text-white shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10 space-y-6">
                <h3 className="text-3xl font-serif mb-6">Der Paradigmenwechsel</h3>
                <p className="text-white/80 leading-relaxed text-lg">
                  Der Zellkraft-Ansatz beendet das bloße Hoffen. Wir nutzen die <strong>physiologische Logik</strong> deines Körpers, um ihn in einen Zustand der „biologischen Sicherheit“ zu führen.
                </p>
                <ul className="space-y-4 pt-4">
                  {[
                    "Klarheit statt Algorithmus-Chaos",
                    "Strategie statt Zufallsprinzip",
                    "Souveränität statt Hilflosigkeit"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-lg font-medium">
                      <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                        <ChevronRight size={14} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The 5 USPs Grid */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-serif text-primary mb-6 leading-tight">Die Zellkraft-Pfeiler</h2>
            <p className="text-xl text-muted-foreground">Wir kombinieren funktionelle Medizin mit fundierter Hebammenkunst für eine lückenlose Erfolgs-Roadmap.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {usps.map((usp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-10 bg-white rounded-[3rem] border border-border hover:border-accent hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500 h-full flex flex-col"
              >
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                  <usp.icon size={32} strokeWidth={1.5} />
                </div>
                <div className="mb-4">
                  <div className="text-[10px] font-bold text-accent uppercase tracking-widest mb-1">{usp.subtitle}</div>
                  <h3 className="text-2xl font-serif text-primary">{usp.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed flex-grow">
                  {usp.desc}
                </p>
              </motion.div>
            ))}
            
            {/* The Extra Callout Card */}
            <div className="p-10 bg-accent rounded-[3rem] text-white flex flex-col justify-center items-center text-center">
               <ShieldCheck size={64} className="mb-6 opacity-20" />
               <h3 className="text-2xl font-serif mb-4">Medizinisch Fundiert</h3>
               <p className="opacity-80 text-sm italic">
                 Keine Esoterik, keine haltlosen Versprechen. Nur angewandte Biologie und klinische Erfahrung aus 33 Jahren.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Done-For-You Elements (Mental Load reduction) */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,_rgba(255,255,255,0.05)_0%,_transparent_40%)]" />
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-20">
             <h2 className="text-4xl md:text-5xl font-serif mb-6">Senke deinen Mental Load <span className="text-accent italic font-light">sofort.</span></h2>
             <p className="text-lg opacity-70 max-w-2xl mx-auto">
               Der Kurs liefert dir fertige Werkzeuge, damit du nicht länger raten musst, sondern einfach umsetzen kannst.
             </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
             <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 backdrop-blur-md">
                <FileText className="text-accent mb-6 w-12 h-12" />
                <h4 className="text-xl font-bold mb-4">Roadmap-Canvas</h4>
                <p className="text-white/60 text-sm leading-relaxed">Dein roter faden für die nächsten 90 Tage. Alle Schritte grafisch aufbereitet für maximale Übersicht.</p>
             </div>
             <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 backdrop-blur-md">
                <MessageSquare className="text-accent mb-6 w-12 h-12" />
                <h4 className="text-xl font-bold mb-4">Arzt-Leitfaden</h4>
                <p className="text-white/60 text-sm leading-relaxed">10 gezielte Fragen für dein nächstes Gespräch im Kinderwunschzentrum, die Klarheit und Augenhöhe erzwingen.</p>
             </div>
             <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 backdrop-blur-md">
                <ClipboardCheck className="text-accent mb-6 w-12 h-12" />
                <h4 className="text-xl font-bold mb-4">Stoffwechsel-Protokolle</h4>
                <p className="text-white/60 text-sm leading-relaxed">Animal-based & Keto-Logik zur Optimierung deiner Biologie – ohne Rätselraten bei der Ernährung.</p>
             </div>
          </div>
        </div>
      </section>

      {/* No-Gos & Guarantees (Trust) */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 max-w-4xl text-center">
           <h2 className="text-3xl md:text-4xl font-serif text-primary mb-16">Wofür Zellkraft steht (und wofür nicht)</h2>
           <div className="grid md:grid-cols-2 gap-12 text-left">
              <div className="space-y-6">
                 <h4 className="text-accent font-bold uppercase tracking-widest text-sm">Unsere Mission</h4>
                 <ul className="space-y-4">
                    <li className="flex gap-3 text-muted-foreground"><div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" /> Fokus auf messbare biologische Erfolgsfaktoren (Mitochondrien).</li>
                    <li className="flex gap-3 text-muted-foreground"><div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" /> Befähigung zur souveränen Entscheidung (Empowerment).</li>
                    <li className="flex gap-3 text-muted-foreground"><div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" /> Radikale Transparenz über klinische Optimalwerte.</li>
                 </ul>
              </div>
              <div className="space-y-6">
                 <h4 className="text-primary font-bold uppercase tracking-widest text-sm opacity-50">Was du bei uns nicht findest</h4>
                 <ul className="space-y-4">
                    <li className="flex gap-3 text-muted-foreground/60"><div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0" /> Keine esoterischen Heilsversprechen ("In 6 Wochen schwanger").</li>
                    <li className="flex gap-3 text-muted-foreground/60"><div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0" /> Keine Schuldzuweisungen (Es liegt NICHT nur an deinem Stress).</li>
                    <li className="flex gap-3 text-muted-foreground/60"><div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0" /> Keine künstliche Panikmache oder Hype-Marketing.</li>
                 </ul>
              </div>
           </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#fff9f2] text-center border-t border-border/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-serif text-primary mb-8 leading-tight">
            Schluss mit dem <br />
            <span className="text-accent italic font-light">Prinzip Hoffnung.</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Sichere dir jetzt deinen Platz für das nächste Kurs-Fenster. Wir arbeiten in kleinen, exklusiven Gruppen, um die volle Strategie-Abdeckung zu gewährleisten.
          </p>
          <div className="flex flex-col items-center gap-6">
            <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-primary text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-primary/95 transition-all shadow-2xl flex items-center gap-3">
              Kurs-Platzt anfragen <ChevronRight />
            </Link>
            <p className="text-sm font-bold text-primary/40 uppercase tracking-widest">
              Nächster Start: Demnächst
            </p>
          </div>
        </div>
      </section>

      {/* Footer-ish Info */}
      <section className="py-12 border-t border-border opacity-50 text-center">
         <p className="text-xs font-medium uppercase tracking-[0.3em]">
           Feminatalis – Angela Deschner | Modern Clinical Serenity
         </p>
      </section>
    </div>
  );
}
