import React from "react";
import SEO from "@/components/SEO";
import { ROUTE_PATHS } from "@/lib/index";
import { Link } from "react-router-dom";
import { Activity, Check, ArrowRight, Zap, Target, Info, Sparkles, Heart } from "lucide-react";

export default function Mikronaehrstoffe() {
  const reasonsForSupplements = [
    { title: "Zellebene", desc: "Sichert einen optimalen Stoffwechsel auf Zellebene und somit die Funktion jedes Organs.", icon: <Zap className="text-accent" /> },
    { title: "Krankheits-Schutz", desc: "Schützende, antioxidative Wirkung vieler Vitamine bewahrt deinen Körper vor Schäden.", icon: <Sparkles className="text-accent" /> },
    { title: "Erhöhter Bedarf", desc: "Stress, Medikamente wie die Pille oder Antibiotika und Umweltgifte rauben deinem Körper wichtige Depots.", icon: <Activity className="text-accent" /> },
    { title: "Nährstoffverlust", desc: "Lange Transportwege, Lagerung und unreife Ernten führen bei modernen Lebensmitteln oft zu Vitalstoffmangel.", icon: <Target className="text-accent" /> }
  ];

  return (
    <div className="bg-background min-h-screen">
      <SEO 
        title="Mikronährstoff-Therapie (Orthomolekulare Medizin) | Naturheilpraxis feminatalis" 
        description="Optimiere deine Vitalstoff-Versorgung mit orthomolekularer Medizin. Wissenschaftlich fundierte Analysen statt blinder Einnahme." 
      />
      
      <section className="pt-32 pb-20 bg-muted/20 text-center">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6 uppercase tracking-wider">
            Orthomolekulare Medizin
          </div>
          <h1 className="text-4xl md:text-7xl font-serif text-primary mb-8 leading-[1.1]">
            Mikronährstoff- <br />
            <span className="text-accent italic font-light">Therapie</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto italic text-center">
            "Orthomolekular bedeutet 'richtig versorgt mit Nährstoffen' – die Basis deiner Gesundheit."
          </p>
        </div>
      </section>

      <section className="py-20 text-left">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-24 text-left">
            <div className="space-y-6">
              <h2 className="text-3xl font-serif text-primary leading-tight text-left">Nebenwirkungsarm und nachhaltig gesund sein.</h2>
              <div className="prose prose-lg text-muted-foreground text-left">
                <p>
                  Das Fachwort „orthomolekular“ wurde 1968 vom Biochemiker Professor Linus Pauling eingeführt. Er betonte vor allem die schützende <strong>antioxidative Wirkung</strong> vieler Vitamine, die den Körper vor zellulären Schäden bewahren können.
                </p>
                <p>
                  Obwohl diese selbst bei hohen Dosierungen nebenwirkungsarme Therapie von gesundheitsbewussten Menschen geschätzt wird, findet die Verwendung von Vitalstoffen zur Vorbeugung erst langsam Einzug in die Schulmedizin. Dabei ist eine gute Versorgung die absolute Grundvoraussetzung für einen reibungslosen Stoffwechsel.
                </p>
              </div>
              <div className="bg-white border border-border p-6 rounded-2xl shadow-sm flex items-start gap-4">
                <Info className="text-accent shrink-0 w-6 h-6" />
                <p className="text-sm font-medium italic text-left">
                  In unserer Praxis setzen wir auf präzise Laboranalysen statt blinder Einnahme von Standard-Präparaten.
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 mt-8 text-left">
              {reasonsForSupplements.map((reason, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl border border-border shadow-sm hover:border-accent transition-all group">
                   <div className="bg-muted/30 w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                     {reason.icon}
                   </div>
                   <h4 className="font-bold text-primary mb-3 text-left">{reason.title}</h4>
                   <p className="text-xs text-muted-foreground leading-relaxed text-left">{reason.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary text-white p-12 lg:p-20 rounded-[4rem] text-center shadow-2xl relative overflow-hidden mb-24">
             <div className="absolute top-0 right-0 p-8 text-white/5">
                <Heart size={150} />
             </div>
             <h2 className="text-3xl lg:text-4xl font-serif mb-8 text-white font-bold">Wurzeln deiner Gesundheit stärken</h2>
             <p className="text-lg opacity-80 mb-12 max-w-2xl mx-auto text-white">
               Wusstest du, dass Stress, chronische Krankheiten und sogar die Einnahme der Anti-Baby-Pille oder von Antibiotika den Bedarf an bestimmten Mineralien und Vitaminen drastisch erhöhen?
             </p>
             <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
               <Link to={ROUTE_PATHS.LABOR} className="bg-accent text-white px-10 py-5 rounded-xl font-bold hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-2">
                 Vitalstoff-Check im Labor <ArrowRight size={20} />
               </Link>
               <Link to={ROUTE_PATHS.CONTACT} className="bg-white/10 text-white border border-white/20 px-10 py-5 rounded-xl font-bold hover:bg-white/20 transition-all backdrop-blur-sm">
                 Vorsorge-Gespräch buchen
               </Link>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
