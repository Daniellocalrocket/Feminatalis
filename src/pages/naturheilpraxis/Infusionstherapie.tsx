import React from "react";
import SEO from "@/components/SEO";
import { ROUTE_PATHS } from "@/lib/index";
import { Link } from "react-router-dom";
import { Droplet, ActivitySquare, ShieldCheck, ArrowRight, FlaskConical, Zap, Sparkles, CheckCircle2 } from "lucide-react";
import SplitScreenHero from "@/components/SplitScreenHero";
import PreisTransparenz from "@/components/PreisTransparenz";
import { motion } from "framer-motion";

export default function Infusionstherapie() {
  const wirkstoffe = [
    "Vitamine (Hochdosis Vitamin C, B-Komplex, B12...)",
    "Aminosäuren (Glutamin, Arginin, Taurin, Lysin...)",
    "Mineralien (Magnesium, Selen, Calcium, Kalium...)",
    "Antioxidantien (Glutathion, Alpha-Liponsäure, Curcumin)",
    "Homöopathische Komplexlösungen & Organpräparate"
  ];

  const anwendungsbereiche = [
    { title: "Abwehr & Immunsystem", desc: "Bei akuter Abwehrschwäche, chronischen Infekten oder zur starken Prävention." },
    { title: "Energie & Psyche", desc: "Hilfe bei Erschöpfungssyndromen, Burnout, Stress und Fatigue (z.B. post-viral)." },
    { title: "Frauengesundheit", desc: "Support bei hormonellen Störungen, Zyklusproblemen und in der Kinderwunschzeit." },
    { title: "Zellulärer Stoffwechsel", desc: "Begleitung bei Diabetes, Metabolischem Syndrom und chronischen Stoffwechselstörungen." },
    { title: "Entgiftung", desc: "Spezifische Ausleitung von Toxinen, Schwermetallbelastung und oxidativer Zellstress." },
    { title: "Darmgesundheit", desc: "Unterstützung bei Darmentzündungen, Resorptionsstörungen und Leaky-Gut-Syndrom." }
  ];

  return (
    <div className="bg-background min-h-screen font-sans">
      <SEO 
        title="Infusionstherapie & Nährstoff-Drips | Naturheilpraxis feminatalis" 
        description="Maximale Bioverfügbarkeit durch intravenöse Nährstoff-Flutung. Behebe Vitalstoffmängel sofort und unterstütze deine Heilungsprozesse." 
      />

      <SplitScreenHero
        badge="Medizinische Nährstoff-Infusionen"
        title={<>Vitalität ohne Umwege: <br /><span className="text-accent italic font-light">Die Infusionstherapie</span></>}
        subtitle="Vergiss den Flaschenhals des Darms. Mit unseren laborbasierten medizinischen Infusionen bringen wir hochdosierte Vitamine, Aminosäuren und Antioxidantien direkt dorthin, wo sie wirken müssen: in deinen systemischen Kreislauf. 100% Bioverfügbarkeit für maximale Regeneration."
        imageSrc="https://images.unsplash.com/photo-1516670428252-df97bba108d1?q=80&w=2070&auto=format&fit=crop"
        imageAlt="Infusionstherapie und Vitalstoffe"
        imageKey="img_hero_infusionstherapie"
      >
        <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-primary text-white px-10 py-5 rounded-2xl font-bold hover:shadow-2xl transition-all shadow-xl active:scale-95 flex items-center gap-2">
          Analyse-Gespräch anfragen <ArrowRight size={20} />
        </Link>
      </SplitScreenHero>

      {/* Philosophy: Medical Precision vs. Lifestyle */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl lg:text-5xl font-serif text-primary mb-10 leading-tight">Kein Lifestyle-Hype, <br /><span className="text-accent italic">sondern medizinische Präzision</span></h2>
          <div className="prose prose-lg mx-auto text-muted-foreground leading-relaxed">
            <p>
              Während „Drip-Bars“ oft standardisierte Mischungen anbieten, folgen wir in unserer Praxis einem streng medizinischen Ansatz. Jede Infusion ist eine individuelle Rezeptur, die auf deinen aktuellen <strong>Laborwerten aus der Vollblut-Analyse</strong> basiert.
            </p>
            <p className="mt-6">
              Stress, chronische Entzündungen oder ein gestörtes Mikrobiom (Leaky Gut) verhindern oft die Aufnahme oraler Präparate. Durch die intravenöse Gabe umgehen wir den Verdauungstrakt und den „First-Pass-Effekt“ der Leber. So erreichen wir Wirkstoffkonzentrationen, die therapeutische Durchbrüche bei Erschöpfung, Infektanfälligkeit und hormonellen Dysbalancen ermöglichen.
            </p>
          </div>
        </div>
      </section>

      {/* Therapeutic Focuses */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
            <div className="space-y-8">
              <h2 className="text-4xl font-serif text-primary leading-tight">Unsere medizinischen Protokolle</h2>
              <div className="grid gap-6 text-left">
                 {[
                   { t: "Hochdosis Vitamin C (Pascorbin®)", d: "Maximale Immunstimulation und Schutz vor oxidativem Stress bei akuten und chronischen Infekten." },
                   { t: "Neurotransmitter-Support", d: "Spezifische Aminosäuren als Vorstufen für Serotonin und Dopamin – für mentale Stärke und erholsamen Schlaf." },
                   { t: "Mitochondrien-Reparatur", d: "Alpha-Liponsäure und Glutathion zur Regeneration der Zellkraftwerke und zur tiefgreifenden Leber-Entgiftung." },
                   { t: "Hormonelle Balance", d: "Zink, Selen und B-Vitamine zur Unterstützung der Schilddrüse und der Eierstockfunktion (Kinderwunsch)." }
                 ].map((item, i) => (
                   <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-border shadow-sm flex items-start gap-6 hover:border-accent transition-all group">
                      <CheckCircle2 className="w-8 h-8 text-accent shrink-0 mt-1" />
                      <div>
                        <span className="font-bold text-primary text-xl block mb-2">{item.t}</span>
                        <span className="text-muted-foreground leading-relaxed font-medium">{item.d}</span>
                      </div>
                   </div>
                 ))}
              </div>
            </div>
            
            <div className="bg-primary text-white p-12 lg:p-20 rounded-[5rem] shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
               <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-accent/20 -mr-64 -mt-64 rounded-full blur-[100px] opacity-20"></div>
               <FlaskConical className="w-16 h-16 text-accent mb-10 relative z-10 animate-bounce" />
               <h3 className="text-3xl font-serif font-bold mb-8 text-white relative z-10 leading-tight">Synergie: <br />Labor & Therapie</h3>
               <p className="text-xl opacity-90 leading-relaxed mb-10 text-white relative z-10 font-medium italic">
                 „Wir messen erst, dann füllen wir auf. Nur so können wir sicherstellen, dass dein Körper genau die Impulse erhält, die er für die Selbstheilung benötigt. Infusionen sind der Turbo, das IHHT-Zelltraining der Motor.“
               </p>
               <div className="flex items-center gap-5 bg-white/10 p-8 rounded-3xl border border-white/20 relative z-10 backdrop-blur-md">
                  <Zap className="text-accent shrink-0 w-8 h-8" />
                  <p className="text-lg font-bold leading-tight">Direkte Zell-Sättigung für spürbare Resultate.</p>
               </div>
            </div>
          </div>

          <div className="bg-accent/5 p-12 lg:p-24 rounded-[5rem] border border-accent/20 text-center shadow-sm relative overflow-hidden mb-24">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.05)_0%,transparent_70%)]" />
             <Sparkles className="w-20 h-20 text-accent mx-auto mb-8 animate-pulse relative z-10" />
             <h2 className="text-4xl lg:text-6xl font-serif mb-10 text-primary font-bold relative z-10 leading-tight">Fülle deine <br /><span className="text-accent italic font-light">Depots nachhaltig auf</span></h2>
             <div className="relative z-10 pt-4">
                <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-primary text-white px-14 py-6 rounded-2xl font-bold hover:scale-105 transition-all shadow-2xl inline-flex items-center gap-4 text-xl">
                  Beratungsgespräch anfragen <ArrowRight size={24} />
                </Link>
             </div>
          </div>
        </div>
      </section>



      <PreisTransparenz 
        preisHint="Infusionen ab 65,- €" 
        hinweis="Zzgl. Medikamentenkosten je nach individueller Rezeptur."
      />
    </div>
  );
}
