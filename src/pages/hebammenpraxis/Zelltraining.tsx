import React from "react";
import SEO from "@/components/SEO";
import { ROUTE_PATHS } from "@/lib/index";
import { Link } from "react-router-dom";
import { Wind, Gauge, Sparkles, Brain, Trophy, Activity, Check, ArrowRight, Zap, Info } from "lucide-react";

export default function Zelltraining() {
  const effects = [
    { title: "Energie & Fettverbrennung", desc: "Aktivierung des Energiestoffwechsels und Unterstützung bei der Gewichtsabnahme." },
    { title: "Performance & Fokus", desc: "Höhere Leistungs- und Konzentrationsfähigkeit durch optimale Mitochondrien-Funktion." },
    { title: "Anti-Aging & Zellschutz", desc: "Dauerhafter Verjüngungseffekt auf zellulärer Ebene und Stärkung des Immunsystems." },
    { title: "Nervensystem", desc: "Ausgleich des vegetativen Nervensystems (VNS) und Stressreduktion." }
  ];

  return (
    <div className="bg-background min-h-screen">
      <SEO 
        title="IHHT Zelltraining (Höhentraining) | Naturheilpraxis feminatalis" 
        description="Molekulare Spitzenmedizin (Nobelpreis 2019): Regeneriere deine Mitochondrien mit IHHT Sauerstoff-Intervalltraining. Ideal bei Burnout, Long-Covid & Kinderwunsch." 
      />

      <section className="pt-32 pb-20 bg-[#F0F4F8] text-center">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6 uppercase tracking-wider">
            Nobelpreis-prämierte Technologie
          </div>
          <h1 className="text-4xl md:text-7xl font-serif text-primary mb-8 leading-[1.1]">
            Zelltraining (IHHT) <br />
            <span className="text-accent italic font-light">Das Höhentraining für deine Zellen</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto italic text-center">
            "Erneuere deine Zellkraftwerke im Liegen – für mehr Energie, die du sofort spürst."
          </p>
        </div>
      </section>

      <section className="py-20 text-left">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20 text-left">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <h2 className="text-3xl font-serif text-primary">Was ist IHHT?</h2>
              <p>
                Die Intervall-Hypoxie-Hyperoxie-Therapie (IHHT) nutzt einen Entdeckungsmechanismus, für den 2019 der <strong>Medizin-Nobelpreis</strong> verliehen wurde. Zellen messen den Sauerstoffgehalt und stoßen bei kurzer Unterversorgung (Hypoxie) hochwirksame Regenerationsprozesse an.
              </p>
              <p>
                Stell es dir wie ein Fitnessstudio für deine <strong>Mitochondrien</strong> (Zellkraftwerke) vor: Beschädigte, vergrößerte Mitochondrien werden abgebaut, während neue, leistungsstarke Mitochondrien neu gebildet werden. Das Ergebnis ist eine Verjüngung auf tiefster Ebene.
              </p>
              <div className="bg-white border border-border p-6 rounded-2xl shadow-sm flex items-start gap-4">
                <Trophy className="text-accent shrink-0" />
                <p className="text-sm font-medium italic text-primary">
                  Besonders effektiv bei chronischer Müdigkeit (CFS), Burnout, Long-Covid-Syndrom und unerfülltem Kinderwunsch.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {effects.map((effect, i) => (
                 <div key={i} className="bg-card border border-border p-8 rounded-[2rem] hover:border-accent transition-all group">
                    <Activity className="text-accent mb-4 group-hover:scale-110 transition-transform" />
                    <h4 className="font-bold text-primary mb-2 line-clamp-1">{effect.title}</h4>
                    <p className="text-xs opacity-80 leading-relaxed">{effect.desc}</p>
                 </div>
               ))}
            </div>
          </div>

          <div className="bg-primary text-white p-12 lg:p-20 rounded-[4rem] mb-24 relative overflow-hidden">
            <h2 className="text-3xl lg:text-4xl font-serif mb-12 text-center text-white font-bold">Der Behandlungsverlauf</h2>
            <div className="grid md:grid-cols-3 gap-12 relative z-10 text-left">
               <div className="space-y-4">
                 <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center font-bold text-xl border border-white/20">1</div>
                 <h4 className="text-xl font-bold font-bold">Diagnostik (BHI)</h4>
                 <p className="text-sm opacity-80 italic">Anhand des Bio-Health-Index (KI-gestützte Blutanalyse) bestimmen wir exakt deine optimale Trainingshöhe und Intensität.</p>
               </div>
               <div className="space-y-4">
                 <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center font-bold text-xl border border-white/20">2</div>
                 <h4 className="text-xl font-bold font-bold">Intensivkur</h4>
                 <p className="text-sm opacity-80 italic">Wir empfehlen eine Basiskur von mindestens 10 Trainingseinheiten für spürbare und nachhaltige Resultate.</p>
               </div>
               <div className="space-y-4">
                 <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center font-bold text-xl border border-white/20">3</div>
                 <h4 className="text-xl font-bold font-bold">Maintenance</h4>
                 <p className="text-sm opacity-80 italic">Um den Therapieerfolg dauerhaft zu bewahren, genügen oft 1 bis 2 Auffrischungs-Sessions pro Monat.</p>
               </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-20 text-left">
            <div className="grid md:grid-cols-2 gap-12 items-center">
               <div className="bg-muted/30 p-10 rounded-[3rem] border border-border text-left">
                 <h3 className="text-2xl font-serif text-primary mb-6">Wirkung im Detail</h3>
                 <ul className="space-y-4 text-left">
                   {[
                     "Zerstörung deformierter Mitochondrien",
                     "Stimulation mitochondrialer Neubildung",
                     "Gefäßneubildung (VEGF Wachstumfaktor)",
                     "Blutdrucksenkung durch Gefäßerweiterung",
                     "Verbesserung der Blutfließeigenschaft",
                     "Optimierung der Stresswiderstandsfähigkeit"
                   ].map((item, i) => (
                     <li key={i} className="flex items-start gap-3">
                       <Check className="text-accent shrink-0 w-5 h-5 mt-0.5" />
                       <span className="text-sm text-muted-foreground font-medium text-left">{item}</span>
                     </li>
                   ))}
                 </ul>
               </div>
               <div className="space-y-6 text-left">
                 <h3 className="text-2xl font-serif text-primary">Bequem & Flexibel</h3>
                 <p className="text-muted-foreground font-medium">
                   Erlebe die Sauerstofftherapie komfortabel im Liegen. Durch intelligentes Biofeedback und angepasste Sauerstoffzufuhr garantieren wir höchste Sicherheit.
                 </p>
                 <div className="p-6 bg-white border border-border rounded-2xl">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-bold text-primary">Behandlungsdauer</span>
                      <span className="text-accent font-medium">ca. 45–50 Min.</span>
                    </div>
                    <Link to={ROUTE_PATHS.CONTACT} className="w-full bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-lg">
                      Termin anfragen <ArrowRight size={20} />
                    </Link>
                 </div>
                 <p className="text-[10px] text-muted-foreground opacity-60 italic">
                   Private Krankenversicherungen übernehmen i.d.R. die Kosten der IH(H)T. Sondertarife für Selbstzahler bei Blockbuchungen möglich. Einmalige Gebühr für die persönliche Atemmaske (10 €).
                 </p>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
