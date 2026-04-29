import React from "react";
import SEO from "@/components/SEO";
import { ROUTE_PATHS } from "@/lib/index";
import { Link } from "react-router-dom";
import PreisTransparenz from "@/components/PreisTransparenz";
import { Zap, Target, CheckCircle2, ShieldAlert, BatteryLow, Activity, ArrowRight, Lightbulb } from "lucide-react";
import SplitScreenHero from "@/components/SplitScreenHero";

export default function Mitochondrien() {
  const schadfaktoren = [
    "Medikamente (Antibiotika, Betablocker, Statine, Schmerzmittel...)",
    "Infektionen (Viren, Bakterien, Parasiten)",
    "Psychischer & körperlicher Stress",
    "Toxische Metalle (Blei, Quecksilber, Aluminium...)",
    "Umweltgifte (Pestizide, Herbizide, Holzschutzmittel...)",
    "Elektrosmog & Geopathische Störungen",
    "Kohlenhydratreiche Ernährung & Fehlernährung"
  ];

  const symptome = [
    "Erschöpfungszustände & Burnout (CFS)",
    "Durchblutungsstörungen & Bluthochdruck",
    "Störungen der Verdauungsorgane (Leaky-Gut, M. Crohn...)",
    "Diabetes & Stoffwechselstörungen",
    "Autoimmunerkrankungen & Immunschwäche",
    "Neurologische Erkrankungen (Depression, MS...)"
  ];

  return (
    <div className="bg-background min-h-screen font-sans">
      <SEO 
        title="Mitochondrien-Therapie & Zellkraftwerke | Naturheilpraxis feminatalis" 
        description="Die Basis deiner Energie. Stärke deine Zellkraftwerke bei Erschöpfung, Burnout und chronischen Beschwerden durch mitochondriale Medizin." 
      />
      
      <SplitScreenHero
        badge="Mitochondriale Medizin"
        title={<>Zellkraft- <br /><span className="text-accent italic font-light">Mitochondrien-Therapie</span></>}
        subtitle="Deine Gesundheit beginnt in der Zelle. Mit gezielter IHHT-Höhentraining und Mikronährstoff-Therapie laden wir deine zellulären Kraftwerke wieder auf – für mehr Vitalität und Leistungsfähigkeit."
        imageSrc="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=2070&auto=format&fit=crop"
        imageAlt="Mitochondrien-Therapie und Zellgesundheit"
        imageKey="img_hero_mitochondrien"
      >
        <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-primary text-white px-10 py-5 rounded-2xl font-bold hover:shadow-2xl transition-all shadow-xl active:scale-95 flex items-center gap-2">
          Kostenfreie Vor-Analyse anfragen
        </Link>
      </SplitScreenHero>

      {/* ATP Logic Section */}
      <section className="py-20 text-left">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-24 text-left">
            <div className="space-y-8">
              <div className="bg-white p-10 rounded-[3rem] border border-border shadow-sm text-left">
                <BatteryLow className="w-12 h-12 text-accent mb-6" />
                <h2 className="text-3xl font-serif text-primary mb-6 text-left">Was ist ATP?</h2>
                <p className="text-lg text-muted-foreground leading-relaxed font-medium text-left">
                  ATP (Adenosintriphosphat) ist der Kraftstoff deiner Zellen. Es ist aber mehr als nur Wärmeenergie – es dient gleichzeitig als <strong>Informationsenergie</strong>, die sämtliche Steuerungsprozesse in deinem Körper übernimmt. 
                </p>
                <div className="mt-8 p-6 bg-accent/5 rounded-2xl border border-accent/20 italic text-sm text-primary font-medium text-left">
                  Schon ein partieller Funktionsverlust der Mitochondrien kann zu massiven Kommunikationsproblemen im gesamten Organismus führen (z.B. schwerste hormonelle Dysbalancen).
                </div>
              </div>
            </div>
            <div className="space-y-6 text-left">
              <h3 className="text-2xl font-serif text-primary font-bold text-left mb-6">Was schadet deinen Mitochondrien?</h3>
              <div className="grid gap-4 mt-2">
                {schadfaktoren.map((item, i) => (
                  <div key={i} className="flex gap-4 items-center bg-white p-5 rounded-2xl border border-border shadow-sm group hover:border-red-200 transition-colors">
                    <ShieldAlert className="w-5 h-5 text-destructive shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-bold text-primary">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Consequences Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif text-primary mb-4 text-center">Wenn die Zellkraftwerke streiken</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-medium text-center">Eine dauerhafte Störung der Mitochondrienfunktion (Mitochondriopathie) ist die Basis vieler chronischer Zivilisationskrankheiten.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24 text-left">
            {symptome.map((item, i) => (
              <div key={i} className="p-8 bg-white rounded-3xl border border-border shadow-sm flex flex-col items-start group hover:border-accent transition-all text-left">
                <div className="bg-muted/30 w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                  <Activity className="w-6 h-6 text-accent" />
                </div>
                <span className="font-bold text-primary font-serif text-lg leading-snug">{item}</span>
              </div>
            ))}
          </div>

          {/* Treatment Approach */}
          <div className="bg-primary text-white rounded-[4rem] p-12 lg:p-20 overflow-hidden relative shadow-2xl text-left">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 -mr-48 -mt-48 rounded-full blur-3xl"></div>
            <div className="relative z-10 space-y-8 text-center max-w-4xl mx-auto">
              <Lightbulb className="w-16 h-16 text-accent mx-auto animate-pulse" />
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white text-center leading-tight">
                Mehr Vitalität durch <br />funktionstüchtige Zellen
              </h2>
              <p className="text-xl opacity-80 max-w-3xl mx-auto leading-relaxed text-center font-medium text-white text-center">
                In meiner Praxis messen wir den Grad der Schädigung deiner Zellkraftwerke über spezialisierte Labortestverfahren. 
              </p>
              
              <div className="grid sm:grid-cols-3 gap-6 text-left mt-16">
                {[
                  { title: "Nähren", desc: "Den Zellen alle ca. 45 benötigten essentiellen Nährstoffe zur Verfügung stellen." },
                  { title: "Ausleiten", desc: "Belastungen, Toxine und oxidativen Stress gezielt aus dem System entfernen." },
                  { title: "Schützen", desc: "Neue Schädigungen durch Aufklärung und bewussten Lebensstil fernhalten." }
                ].map((step, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 hover:bg-white/15 transition-colors">
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center mb-6 text-white font-bold text-lg">{i+1}</div>
                    <h4 className="text-white font-serif font-bold mb-3 text-xl">{step.title}</h4>
                    <p className="text-sm opacity-90 leading-relaxed font-medium text-white">{step.desc}</p>
                  </div>
                ))}
              </div>
              
              <div className="pt-16 text-center">
                <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="inline-flex items-center justify-center gap-3 bg-accent text-white px-12 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-xl border-none">
                  Kostenfreie Vor-Analyse anfragen <ArrowRight className="w-6 h-6 text-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PreisTransparenz 
        preisHint="Mitochondrien-Check & Beratung" 
        hinweis="Analytische Tiefe für deine zelluläre Energie."
      />
    </div>
  );
}
