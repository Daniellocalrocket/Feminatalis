import React from "react";
import SEO from "@/components/SEO";
import { ROUTE_PATHS } from "@/lib/index";
import { Link } from "react-router-dom";
import { Stethoscope, Droplet, Wind, Brain, Activity, ShieldCheck, Flame, Zap, ArrowRight, HeartPulse, Sparkles } from "lucide-react";

export default function Naturheilpraxis() {
  const leistungen = [
    { icon: <Activity className="w-6 h-6 text-primary" />, title: "Labor & Diagnostik", desc: "Tiefgehende Blutanalyse (30+ Parameter), Hormonstatus und Nährstoff-Screening.", path: ROUTE_PATHS.LABOR },
    { icon: <Droplet className="w-6 h-6 text-primary" />, title: "Infusionstherapie", desc: "Hochdosierte Vitamine, Mineralien und Energie-Boost - direkt dorthin, wo es fehlt.", path: ROUTE_PATHS.INFUSIONSTHERAPIE },
    { icon: <ShieldCheck className="w-6 h-6 text-primary" />, title: "Allergiebehandlung", desc: "Ursächliche Behandlung durch Desensibilisierung und nachhaltige Immunmodulation.", path: ROUTE_PATHS.ALLERGIE },
    { icon: <Flame className="w-6 h-6 text-primary" />, title: "TCM & Akupunktur", desc: "Traditionelle Chinesische Medizin, Kräuterheilkunde und Moxibustion.", path: ROUTE_PATHS.TCM },
    { icon: <Brain className="w-6 h-6 text-primary" />, title: "brainLight Massage", desc: "Tiefenentspannung durch Shiatsu-Massage, Lichttherapie und Klangfrequenzen.", path: ROUTE_PATHS.BRAINLIGHT },
    { icon: <Wind className="w-6 h-6 text-primary" />, title: "Mitochondrien-Therapie", desc: "IHHT-Sauerstofftherapie und Regeneration der zellulären Kraftwerke.", path: ROUTE_PATHS.MITOCHONDRIEN },
    { icon: <Stethoscope className="w-6 h-6 text-primary" />, title: "Long-Covid Hilfe", desc: "Strukturierter Aufbau bei post-viraler Erschöpfung und Konzentrationsstörungen.", path: ROUTE_PATHS.LONG_COVID },
    { icon: <Zap className="w-6 h-6 text-primary" />, title: "Zelltraining (IHHT)", desc: "Innovatives Training zur Verbesserung der Zellfunktion und ATP-Produktion.", path: ROUTE_PATHS.ZELLTRAINING }
  ];

  const weitereLeistungen = [
    { title: "Klassische Homöopathie", desc: "Ganzheitliche Behandlung akuter und chronischer Beschwerden.", path: ROUTE_PATHS.HOMOEOPATHIE },
    { title: "Blutegeltherapie", desc: "Bei Entzündungen, Durchblutungsstörungen und venösen Problemen.", path: ROUTE_PATHS.BLUTEGEL },
    { title: "Medizinische Lasertherapie", desc: "Schmerzlinderung und Regeneration mit Licht.", path: ROUTE_PATHS.LASERTHERAPIE },
    { title: "Hormontherapie", desc: "Ausgleich hormoneller Dysbalancen durch natürliche Methoden.", path: ROUTE_PATHS.HORMONTHERAPIE }
  ];

  return (
    <div className="bg-background min-h-screen">
      <SEO 
        title="Ganzheitliche Naturheilpraxis | Ursachenforschung & Therapie | feminatalis" 
        description="Ihre Naturheilpraxis für Labor & Diagnostik, Infusionstherapie und mitochondriale Medizin in Bad Schönborn. Wir finden die wahre Ursache Ihrer Beschwerden." 
      />

      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <span className="bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 inline-block uppercase tracking-wider">Ursachenbasierte Naturheilkunde</span>
          <h1 className="text-4xl lg:text-6xl font-serif text-primary mb-8 leading-tight">
            Wir behandeln nicht nur Symptome.<br /> Wir finden die Ursache.
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-10">
            Die klassische Medizin stößt oft an ihre Grenzen, wenn Laborwerte "noch im Rahmen" sind, Sie sich aber trotzdem erschöpft fühlen. In der Naturheilpraxis feminatalis setzen wir auf tiefgreifende Diagnostik und ressourcenorientierte Behandlungen.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
             <Link to={ROUTE_PATHS.CONTACT} className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg active:scale-95 flex items-center gap-2">Termin online buchen</Link>
             <Link to={ROUTE_PATHS.LABOR} className="bg-white text-primary border border-primary px-8 py-4 rounded-xl font-bold hover:bg-muted transition-all">Labor & Diagnostik</Link>
          </div>
        </div>
      </section>

      {/* Leistungen Grid */}
      <section className="py-24 bg-card/30 border-y border-border/50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-primary mb-4 leading-tight">Das medizinische Leistungsspektrum</h2>
            <p className="text-muted-foreground text-lg">Moderne Diagnostik trifft auf traditionelle Heilmethoden.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leistungen.map((leistung, idx) => (
              <Link to={leistung.path} key={idx} className="bg-white p-8 rounded-3xl border border-border/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="mb-6 bg-muted/50 w-12 h-12 rounded-full flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                  {leistung.icon}
                </div>
                <h3 className="text-xl font-serif text-primary font-bold mb-3 leading-snug">{leistung.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{leistung.desc}</p>
                <span className="text-accent text-xs font-bold uppercase tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all">Mehr erfahren <ArrowRight size={14}/></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Weitere Leistungen */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div>
               <h2 className="text-3xl font-serif text-primary mb-6 leading-tight">Weitere spezialisierte Leistungen</h2>
               <p className="text-muted-foreground mb-8">Ergänzend zu unseren Schwerpunkten bieten wir bewährte Naturheilverfahren für eine ganzheitliche Genesung an.</p>
               <div className="space-y-4">
                 {weitereLeistungen.map((l, i) => (
                   <Link key={i} to={l.path} className="flex items-center justify-between p-4 bg-background rounded-xl border border-border border-l-4 border-l-accent hover:shadow-md transition-all group">
                     <div>
                       <h4 className="font-bold text-primary text-sm mb-0.5">{l.title}</h4>
                       <p className="text-xs text-muted-foreground">{l.desc}</p>
                     </div>
                     <ArrowRight size={16} className="text-accent/40 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                   </Link>
                 ))}
               </div>
             </div>
             <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#fde4c8]/20 p-8 rounded-3xl flex flex-col items-center text-center">
                  <HeartPulse className="text-accent w-10 h-10 mb-4 opacity-50"/>
                  <h4 className="font-bold text-primary text-sm mb-2">Präzision</h4>
                  <p className="text-[10px] opacity-70 italic whitespace-pre-line">"Wir messen, statt nur zu raten."</p>
                </div>
                <div className="bg-[#77252c]/5 p-8 rounded-3xl flex flex-col items-center text-center mt-8">
                  <Sparkles className="text-primary w-10 h-10 mb-4 opacity-50"/>
                  <h4 className="font-bold text-primary text-sm mb-2">Ganzheitlichkeit</h4>
                  <p className="text-[10px] opacity-70 italic whitespace-pre-line">"Körper & Geist als System."</p>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-serif mb-6 leading-tight">Gemeinsam zur tiefen Ursache Ihres Wohlbefindens</h2>
          <p className="text-xl opacity-80 mb-12 leading-relaxed">
            Ob chronische Erschöpfung, hormonelle Dysbalancen oder akute Allergien – wir nehmen uns Zeit für Ihre Geschichte und entwickeln einen faktenbasierten Behandlungsplan.
          </p>
          <Link to={ROUTE_PATHS.CONTACT} className="inline-block bg-accent text-white px-10 py-5 rounded-xl font-bold text-xl hover:bg-accent/90 transition-all shadow-xl active:scale-95">Jetzt Termin online buchen</Link>
        </div>
      </section>
    </div>
  );
}
