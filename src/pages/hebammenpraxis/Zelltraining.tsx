import React from "react";
import SEO from "@/components/SEO";
import { ROUTE_PATHS } from "@/lib/index";
import { Link } from "react-router-dom";
import { Activity, ShieldCheck, ArrowRight, Zap, Battery, Wind } from "lucide-react";
import SplitScreenHero from "@/components/SplitScreenHero";
import PreisTransparenz from "@/components/PreisTransparenz";
import { motion } from "framer-motion";

export default function Zelltraining() {
  const vorteile = [
    { title: "Zellregeneration", desc: "Abbau alter, schwacher Mitochondrien und Anregung der Vermehrung neuer, gesunder Energiekraftwerke.", icon: Zap },
    { title: "Stressresistenz", desc: "Stärkung des vegetativen Nervensystems für mehr Gelassenheit und schnellere Erholung im Alltag.", icon: ShieldCheck },
    { title: "Stoffwechsel-Boost", desc: "Optimierung der Fettverbrennung und Verbesserung der Insulinempfindlichkeit deiner Zellen.", icon: Activity },
    { title: "Sauerstoff-Update", desc: "Verbesserung der Sauerstoffverwertung im Blut und in der Muskulatur für mehr Leistung.", icon: Wind }
  ];

  return (
    <div className="bg-background min-h-screen font-sans">
      <SEO 
        title="IHHT Zelltraining & Höhentraining | Hebammenpraxis feminatalis" 
        description="Aktiviere deine Zellkraftwerke mit IHHT Höhentraining. Effektive Unterstützung bei Erschöpfung, Kinderwunsch und zur Leistungssteigerung." 
      />

      <SplitScreenHero
        badge="Intervall-Hypoxie-Hyperoxie"
        title={<>IHHT Zelltraining <br /><span className="text-accent italic font-light">Energie auf Knopfdruck</span></>}
        subtitle="Trainiere deine Zellen, während du entspannt liegst. Das simulierte Höhentraining optimiert deine Mitochondrien und sorgt für tiefgreifende Regeneration und neue Vitalität."
        imageSrc="https://images.unsplash.com/photo-1516670428252-df97bba108d1?q=80&w=2070&auto=format&fit=crop"
        imageAlt="IHHT Zelltraining Behandlung"
        imageKey="img_hero_zelltraining"
      >
        <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-primary text-white px-10 py-5 rounded-2xl font-bold hover:shadow-2xl transition-all shadow-xl active:scale-95 flex items-center gap-2">
          Kostenfreie Vor-Analyse anfragen <ArrowRight size={20} />
        </Link>
      </SplitScreenHero>

      <section className="py-24 text-left">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
            <div className="space-y-8">
              <h2 className="text-4xl font-serif text-primary leading-tight">Wie funktioniert IHHT?</h2>
              <div className="prose prose-lg text-muted-foreground leading-relaxed">
                <p>
                  IHHT (Intervall-Hypoxie-Hyperoxie-Therapie) ist eine wissenschaftlich anerkannte Methode, bei der du im Wechsel sauerstoffarme (Hypoxie) und sauerstoffreiche (Hyperoxie) Luft über eine Maske einatmest.
                </p>
                <p>
                  Dieser milde Reiz simuliert ein Höhentraining und löst in deinen Zellen einen <strong>Regenerationsprozess</strong> aus: Beschädigte Mitochondrien werden abgebaut, während die Bildung neuer, leistungsfähiger Kraftwerke angeregt wird.
                </p>
              </div>
              <div className="bg-white border border-border/50 p-8 rounded-[2.5rem] shadow-sm flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <Battery size={24} />
                </div>
                <p className="font-medium text-primary italic leading-relaxed">
                  Schon nach wenigen Sitzungen berichten viele Patienten von besserem Schlaf, mehr Konzentration und einer deutlich gesteigerten Belastbarkeit.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {vorteile.map((item, i) => (
                <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-border/50 shadow-sm flex flex-col group hover:border-accent transition-all">
                  <div className="bg-muted/30 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                    <item.icon className="text-accent w-7 h-7" />
                  </div>
                  <h4 className="font-bold text-primary mb-3 font-serif text-xl">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary text-white p-12 lg:p-20 rounded-[4rem] text-center shadow-2xl relative overflow-hidden mb-24">
             <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 -mr-32 -mt-32 rounded-full blur-3xl opacity-20"></div>
             <Zap className="w-16 h-16 text-accent mx-auto mb-8 animate-pulse relative z-10" />
             <h2 className="text-3xl lg:text-5xl font-serif mb-8 text-white font-bold relative z-10">Zellkraft für jedes Alter</h2>
             <p className="text-xl opacity-90 mb-12 max-w-3xl mx-auto leading-relaxed relative z-10">
               Ob zur Vorbereitung auf eine Schwangerschaft, bei Post-Viraler Erschöpfung oder einfach für mehr Power im Alltag – IHHT ist der Bio-Hack für dein System.
             </p>
             <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-white text-primary px-12 py-5 rounded-2xl font-bold hover:bg-accent hover:text-white transition-all shadow-xl inline-flex items-center gap-3 relative z-10">
               Probe-Sitzung anfragen <ArrowRight size={20} />
             </Link>
          </div>
        </div>
      </section>

      <PreisTransparenz />
    </div>
  );
}
