import React from "react";
import SEO from "@/components/SEO";
import { ROUTE_PATHS } from "@/lib/index";
import { Link } from "react-router-dom";
import { Droplet, ActivitySquare, ShieldCheck, ArrowRight, FlaskConical, Zap, Sparkles } from "lucide-react";
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
        badge="Systemische Vitalisierung"
        title={<>Zellkraft- <br /><span className="text-accent italic font-light">Infusionstherapie</span></>}
        subtitle="Maximale Bioverfügbarkeit ohne Umwege. Wir schleusen hochdosierte Vitamine, Mineralstoffe und Aminosäuren direkt in deine Blutbahn – für sofortige Energie und Immunregeneration."
        imageSrc="https://images.unsplash.com/photo-1516670428252-df97bba108d1?q=80&w=2070&auto=format&fit=crop"
        imageAlt="Infusionstherapie und Vitalstoffe"
        imageKey="img_hero_infusionstherapie"
      >
        <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-primary text-white px-10 py-5 rounded-2xl font-bold hover:shadow-2xl transition-all shadow-xl active:scale-95 flex items-center gap-2">
          Kostenfreie Vor-Analyse anfragen <ArrowRight size={20} />
        </Link>
      </SplitScreenHero>

      <section className="py-24 text-left">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
            <div className="space-y-8">
              <h2 className="text-4xl font-serif text-primary leading-tight">Tabletten oder Infusion?</h2>
              <div className="prose prose-lg text-muted-foreground leading-relaxed">
                <p>
                  Bioverfügbarkeit beschreibt, welcher Anteil eines Wirkstoffs tatsächlich im Blutkreislauf ankommt. Werden Kapseln oder Tabletten geschluckt, bremsen Faktoren wie ein ungünstiger Magen-pH-Wert oder ein gestörtes Mikrobiom die Aufnahme drastisch.
                </p>
                <p>
                  Bei einer Infusion umgehen wir das Verdauungssystem komplett. Die Mikronährstoffe stehen dem Gewebe und den Organen augenblicklich in <strong>therapeutisch hochrelevanten Dosen</strong> zur Verfügung.
                </p>
              </div>
              <div className="bg-white border border-border/50 p-8 rounded-[2.5rem] shadow-sm space-y-4">
                {[
                  "100% Sofort-Verfügbarkeit im systemischen Kreislauf",
                  "Umgehung von Aufnahmestörungen im kranken Darm",
                  "Typische Magen-Darm-Nebenwirkungen entfallen komplett",
                  "Möglichkeit der Hochdosis-Gabe in Akutphasen"
                ].map((text, i) => (
                  <div key={i} className="flex gap-4 items-center">
                    <ShieldCheck className="w-5 h-5 text-accent shrink-0" />
                    <span className="font-medium text-primary">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-primary text-white p-12 lg:p-16 rounded-[4rem] shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 -mr-32 -mt-32 rounded-full blur-3xl opacity-20"></div>
               <FlaskConical className="w-12 h-12 text-accent mb-8 relative z-10" />
               <h3 className="text-2xl font-serif font-bold mb-6 text-white relative z-10">Kern-Wirkstoffe</h3>
               <ul className="space-y-4 relative z-10">
                 {wirkstoffe.map((w, i) => (
                   <li key={i} className="flex gap-4 items-center opacity-90 border-b border-white/5 pb-3">
                     <span className="text-accent font-bold"><Droplet size={18} /></span>
                     <span className="text-lg font-medium">{w}</span>
                   </li>
                 ))}
               </ul>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-primary mb-4">Einsatzbereiche</h2>
            <p className="text-muted-foreground text-lg">Der gezielte Einsatz bei komplexen Krankheitsbildern.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {anwendungsbereiche.map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-border/50 shadow-sm flex flex-col group hover:border-accent transition-all">
                <div className="bg-muted/30 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                  <ActivitySquare className="text-accent w-7 h-7" />
                </div>
                <h4 className="font-bold text-primary mb-3 font-serif text-xl">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-accent/5 p-12 lg:p-20 rounded-[4rem] border border-accent/20 text-center shadow-sm relative overflow-hidden mb-24">
             <Sparkles className="w-16 h-16 text-accent mx-auto mb-8 animate-pulse" />
             <h2 className="text-3xl lg:text-5xl font-serif mb-8 text-primary font-bold">Möchtest du deine Vitalität <br />sofort spürbar machen?</h2>
             <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-primary text-white px-12 py-5 rounded-2xl font-bold hover:shadow-2xl transition-all shadow-xl inline-flex items-center gap-3">
               Jetzt Vor-Analyse anfragen <ArrowRight size={20} />
             </Link>
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
