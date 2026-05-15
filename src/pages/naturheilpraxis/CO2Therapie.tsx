import React from "react";
import SEO from "@/components/SEO";
import { ROUTE_PATHS } from "@/lib/index";
import { Link } from "react-router-dom";
import { Wind, Activity, ShieldCheck, ArrowRight, CheckCircle2, Zap, Sparkles, HeartPulse, Droplets, FlaskConical, Target } from "lucide-react";
import SplitScreenHero from "@/components/SplitScreenHero";
import PreisTransparenz from "@/components/PreisTransparenz";
import { motion } from "framer-motion";

export default function CO2Therapie() {
  const anwendungsbereiche = [
    { title: "Mikrozirkulation", desc: "Gezielte Förderung der kleinsten Blutgefäße zur optimalen Nährstoffversorgung des Gewebes.", icon: <Activity className="w-6 h-6" /> },
    { title: "Bohr-Effekt Aktivierung", desc: "Natürliche Optimierung der Sauerstoffabgabe aus dem Blut direkt in deine Zellen.", icon: <Zap className="w-6 h-6" /> },
    { title: "Detox & Lymphe", desc: "Aktivierung des Lymphabflusses und Unterstützung der Entgiftung über die Haut.", icon: <Droplets className="w-6 h-6" /> },
    { title: "Immunsystem", desc: "Steigerung der lokalen Abwehrkraft durch verbesserte Durchblutung und Wärmeentwicklung.", icon: <ShieldCheck className="w-6 h-6" /> }
  ];

  return (
    <div className="bg-background min-h-screen font-sans overflow-x-hidden">
      <SEO 
        title="CO2-Trockenbad & Bohr-Effekt | Naturheilpraxis feminatalis" 
        description="Ganzheitliche Unterstützung der Mikrozirkulation durch CO2-Trockenbäder. Nutzen Sie den Bohr-Effekt für maximale Sauerstoffversorgung Ihrer Zellen." 
      />

      <SplitScreenHero
        badge="Biophysikalische Gefäßtherapie"
        title={<>Innere Atmung: <br /><span className="text-accent italic font-light">Das CO2-Vitalisierungsbad</span></>}
        subtitle="Sauerstoff-Boost ohne Wasser: Das CO2-Trockenbad nutzt die Gesetze der Biophysik, um deine Gefäße zu weiten und deine Zellen mit Sauerstoff zu fluten. Eine Wohltat für Haut, Kapillaren und dein gesamtes Immunsystem."
        imageSrc="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2070&auto=format&fit=crop"
        imageAlt="CO2-Therapie Behandlung"
        imageKey="img_hero_co2_therapie"
      >
        <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-primary text-white px-10 py-5 rounded-2xl font-bold hover:shadow-2xl transition-all shadow-xl active:scale-95 flex items-center gap-2">
          Analyse-Gespräch anfragen <ArrowRight size={20} />
        </Link>
      </SplitScreenHero>

      {/* The Bohr Effect: Scientific Deep Dive */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-serif text-primary mb-8 leading-tight font-bold">Die zelluläre <br /><span className="text-accent italic font-light">Sauerstoffdusche</span></h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="prose prose-lg text-muted-foreground leading-relaxed font-medium space-y-6 text-left">
              <p>
                Während du entspannt in einer speziellen Schutzhülle ruhst, wird hochreines medizinisches CO2 eingeleitet. Über die Haut dringt das Gas in dein Gewebe ein und aktiviert einen faszinierenden biologischen Mechanismus: den <strong>Bohr-Effekt</strong>.
              </p>
              <p>
                Die physikalische Präsenz von CO2 im Gewebe signalisiert deinem Hämoglobin, den gebundenen Sauerstoff schlagartig freizugeben. Der Sauerstoff diffundiert nun dorthin, wo er am dringendsten benötigt wird: <strong>Direkt in deine Zellen.</strong>
              </p>
              <p>
                Das Ergebnis spürst du oft sofort als wohliges Wärmegefühl und sanftes Prickeln. Deine Kapillaren weiten sich, der Blutfluss wird optimiert und die <strong>innere Atmung</strong> läuft auf Hochtouren.
              </p>
            </div>
            <div className="bg-[#fdf8f3] p-12 rounded-[4rem] border border-orange-100 shadow-sm relative overflow-hidden group">
               <FlaskConical className="w-16 h-16 text-accent mb-8 opacity-20 absolute top-8 right-8 group-hover:rotate-12 transition-transform" />
               <h3 className="text-2xl font-serif text-primary mb-6 font-bold">Wissenschaftlicher Fakt</h3>
               <p className="text-primary/80 italic leading-relaxed text-lg">
                 "Ohne CO2 gäbe es keine Sauerstoffabgabe. Die Zufuhr von Kohlendioxid ist paradoxerweise der effektivste Weg, um die Sauerstoffsättigung im Gewebe (nicht nur im Blut) massiv zu erhöhen."
               </p>
               <div className="mt-8 flex items-center gap-4 text-accent font-bold">
                 <Target className="w-6 h-6" />
                 <span>Maximale Bioverfügbarkeit</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-muted/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] -mr-48 -mt-48" />
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left mb-24">
            {anwendungsbereiche.map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-[3.5rem] border border-border hover:border-accent transition-all hover:shadow-2xl group flex flex-col h-full">
                <div className="bg-muted/50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-sm">
                   {item.icon}
                </div>
                <h4 className="font-bold text-primary mb-4 font-serif text-2xl leading-tight">{item.title}</h4>
                <p className="text-base text-muted-foreground leading-relaxed font-medium opacity-80">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-primary text-white p-12 lg:p-24 rounded-[5rem] shadow-2xl relative overflow-hidden text-left">
             <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-accent/20 -mr-64 -mt-64 rounded-full blur-[120px] opacity-20"></div>
             <div className="relative z-10 flex flex-col lg:flex-row gap-20 items-center text-left">
                <div className="lg:w-2/3 text-left">
                  <h2 className="text-4xl lg:text-6xl font-serif mb-10 text-white font-bold leading-tight text-left">Die Synergie <br /><span className="text-accent italic font-light text-3xl lg:text-5xl">der Elemente</span></h2>
                  <p className="text-xl opacity-90 mb-12 leading-relaxed font-medium text-left">
                    In unserer Praxis kombinieren wir das CO2-Trockenbad oft mit dem <strong>IHHT-Zelltraining</strong>. Während das IHHT die Mitochondrien zur Erneuerung zwingt, sorgt das CO2-Bad dafür, dass der verfügbare Sauerstoff auch wirklich in jeder kleinsten Kapillare ankommt.
                  </p>
                  <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-white text-primary px-14 py-6 rounded-2xl font-bold text-xl hover:bg-accent hover:text-white transition-all shadow-2xl inline-flex items-center gap-4">
                    Kombinations-Termin anfragen <ArrowRight size={24} />
                  </Link>
                </div>
                <div className="lg:w-1/3 space-y-8">
                  <div className="bg-white/10 backdrop-blur-md p-10 rounded-[3rem] border border-white/20 text-center">
                    <Zap className="w-16 h-16 text-accent mx-auto mb-6 animate-pulse" />
                    <p className="text-xl font-bold leading-relaxed text-white">
                      Der Express-Weg für deine Mikrozirkulation.
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-10 rounded-[3rem] border border-white/20 text-center">
                    <HeartPulse className="w-16 h-16 text-accent mx-auto mb-6" />
                    <p className="text-xl font-bold leading-relaxed text-white">
                      Prävention & Heilung für deine Gefäße.
                    </p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      <PreisTransparenz 
        preisHint="CO2-Trockenbad: ab 45,– €" 
        hinweis="Zzgl. einmaliger persönlicher Schutzhülle (7,50 €) für maximale Hygiene."
      />

      {/* Final CTA */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Sparkles className="w-16 h-16 text-primary mx-auto mb-10 opacity-20" />
          <h2 className="text-3xl md:text-5xl font-serif text-primary mb-10 leading-tight font-bold text-center">Erlebe die Leichtigkeit <br />durchfluteter Zellen</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed font-medium text-center">
            Ob zur Unterstützung der Wundheilung, zur Entgiftung oder als Vitalitäts-Booster – das CO2-Trockenbad ist eine der sanftesten und effektivsten Methoden der modernen Naturheilkunde.
          </p>
          <div className="flex justify-center">
            <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="inline-flex bg-primary text-white px-12 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-2xl shadow-primary/20 border-none items-center gap-3">
              Jetzt Analyse-Gespräch vereinbaren <ArrowRight size={22} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
