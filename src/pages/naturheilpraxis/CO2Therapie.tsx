import React from "react";
import SEO from "@/components/SEO";
import { ROUTE_PATHS } from "@/lib/index";
import { Link } from "react-router-dom";
import { Wind, Activity, ShieldCheck, ArrowRight, CheckCircle2, Zap } from "lucide-react";
import SplitScreenHero from "@/components/SplitScreenHero";
import PreisTransparenz from "@/components/PreisTransparenz";
import { motion } from "framer-motion";

export default function CO2Therapie() {
  const anwendungsbereiche = [
    { title: "Durchblutungsstörungen", desc: "Bei pAVK, kalten Extremitäten, diabetischem Fuß und allgemeiner arterieller Verschlusskrankheit." },
    { title: "Wundheilung", desc: "Unterstützung bei chronischen Wunden, Dekubitus und schlecht heilenden Narben." },
    { title: "Schmerztherapie", desc: "Linderung bei neuropathischen Schmerzen, Fibromyalgie und muskulären Verspannungen." },
    { title: "Hautregeneration", desc: "Verbesserung des Hautbildes bei Neurodermitis, Psoriasis und zur Anti-Aging-Unterstützung." },
    { title: "Sportmedizin", desc: "Beschleunigte Regeneration nach Verletzungen und Steigerung der muskulären Sauerstoffkapazität." },
    { title: "Mikrozirkulation", desc: "Gezielte Förderung der kleinsten Blutgefäße zur besseren Nährstoffversorgung des Gewebes." }
  ];

  return (
    <div className="bg-background min-h-screen font-sans">
      <SEO 
        title="CO2-Therapie & Gastransport | Naturheilpraxis feminatalis" 
        description="Optimierte Sauerstoffversorgung durch transdermale CO2-Therapie. Verbessere deine Durchblutung und Zellregeneration ohne Belastung." 
      />

      <SplitScreenHero
        badge="Regenerative Medizin"
        title={<>Transdermale <br /><span className="text-accent italic font-light">CO2-Therapie</span></>}
        subtitle="Bohr-Effekt für deine Durchblutung. Durch die sanfte Aufnahme von medizinischem CO2 über die Haut optimieren wir die Sauerstoffversorgung deiner Zellen und fördern tiefgreifende Heilungsprozesse."
        imageSrc="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2070&auto=format&fit=crop"
        imageAlt="CO2-Therapie Behandlung"
        imageKey="img_hero_co2_therapie"
      >
        <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-primary text-white px-10 py-5 rounded-2xl font-bold hover:shadow-2xl transition-all shadow-xl active:scale-95 flex items-center gap-2">
          Kostenfreie Vor-Analyse anfragen <ArrowRight size={20} />
        </Link>
      </SplitScreenHero>

      <section className="py-24 text-left">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
            <div className="space-y-8">
              <h2 className="text-4xl font-serif text-primary leading-tight">Der Bohr-Effekt: Sauerstoff für die Zelle</h2>
              <div className="prose prose-lg text-muted-foreground leading-relaxed">
                <p>
                  Das Geheimnis der CO2-Therapie liegt in einem physiologischen Grundgesetz: Steigt der CO2-Gehalt im Gewebe, sinkt die Bindungsaffinität von Hämoglobin zu Sauerstoff. Das Ergebnis: Sauerstoff wird vermehrt ins Gewebe abgegeben.
                </p>
                <p>
                  Wir nutzen diesen Effekt durch ein spezielles transdermales Verfahren, bei dem das medizinische Kohlendioxid sanft über die Haut aufgenommen wird – völlig schmerzfrei und ohne Belastung für das Herz-Kreislauf-System.
                </p>
              </div>
              <div className="bg-white border border-border/50 p-8 rounded-[2.5rem] shadow-sm space-y-4">
                {[
                  "Massive Steigerung der Mikrozirkulation",
                  "Optimierte Sauerstoffabgabe an das Gewebe",
                  "Aktivierung körpereigener Reparaturmechanismen",
                  "Völlig nicht-invasives und entspannendes Verfahren"
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
               <Wind className="w-12 h-12 text-accent mb-8 relative z-10" />
               <h3 className="text-2xl font-serif font-bold mb-6 text-white relative z-10">Warum CO2-Bäder?</h3>
               <p className="text-lg opacity-90 leading-relaxed mb-8 text-white relative z-10">
                 Schon vor Jahrhunderten nutzten Menschen kohlensäurehaltige Heilquellen. Wir bringen dieses Wissen in die moderne Praxis – mit hochreinen medizinischen Gasen für maximale therapeutische Wirkung.
               </p>
               <div className="flex items-center gap-4 bg-white/10 p-6 rounded-2xl border border-white/10 relative z-10">
                  <Activity className="text-accent shrink-0" />
                  <span className="text-sm font-medium">Ideal kombinierbar mit der IHHT-Sauerstofftherapie.</span>
               </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-primary mb-4">Therapeutische Bandbreite</h2>
            <p className="text-muted-foreground text-lg">Wann wir die CO2-Therapie erfolgreich einsetzen.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {anwendungsbereiche.map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-border/50 shadow-sm flex flex-col group hover:border-accent transition-all">
                <div className="bg-muted/30 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                  <Activity className="text-accent w-7 h-7" />
                </div>
                <h4 className="font-bold text-primary mb-3 font-serif text-xl">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-accent/5 p-12 lg:p-20 rounded-[4rem] border border-accent/20 text-center shadow-sm relative overflow-hidden mb-24">
             <Zap className="w-16 h-16 text-accent mx-auto mb-8 animate-pulse" />
             <h2 className="text-3xl lg:text-5xl font-serif mb-8 text-primary font-bold">Durchblutung fördern, <br />Heilung aktivieren.</h2>
             <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-primary text-white px-12 py-5 rounded-2xl font-bold hover:shadow-2xl transition-all shadow-xl inline-flex items-center gap-3">
               Analyse-Gespräch anfragen <ArrowRight size={20} />
             </Link>
          </div>
        </div>
      </section>

      <PreisTransparenz />
    </div>
  );
}
