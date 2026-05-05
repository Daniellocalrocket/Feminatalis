import React from "react";
import SEO from "@/components/SEO";
import { ROUTE_PATHS } from "@/lib/index";
import { Link } from "react-router-dom";
import PreisTransparenz from "@/components/PreisTransparenz";
import { Shield, CheckCircle2, ArrowRight, Activity, Info, HeartPulse } from "lucide-react";
import SplitScreenHero from "@/components/SplitScreenHero";

export default function Allergie() {
  const ursachen = [
    { title: "Hygiene-Hypothese", desc: "Unterforderung des Immunsystems im Kindesalter durch übermäßige Sterilität." },
    { title: "Umweltbelastung", desc: "Zunehmende Rußpartikel, Feinstaub, Schadstoffe und gesteigerter Pollenflug." },
    { title: "Darm-Mikrobiom", desc: "Tiefgreifende Veränderungen durch starke Medikamente (Antibiotika) oder Fehlernährung." },
    { title: "Barriere-Störungen", desc: "Pathologische Durchlässigkeit von Haut und Schleimhaut (z.B. Leaky-Gut-Syndrom)." },
    { title: "Chronischer Stress", desc: "Massive Sensibilisierung durch dauerhafte psychische und physische Immunsystem-Irritation." }
  ];

  const behandlungsmethoden = [
    "Umfassender Aufbau der Darmflora (Mikrobiom-Therapie)",
    "Individuelle orthomolekulare Vitalstofftherapie",
    "Gezielte Regulation des Immunsystems durch Milieutherapie",
    "Sanfte Mikro- und Zellimmuntherapie",
    "Homöopathie, Phytotherapie und Körperakupunktur",
    "Laborgestützte Entschlackung & Toxinausleitung"
  ];

  return (
    <div className="bg-background min-h-screen font-sans">
      <SEO 
        title="Allergiebehandlung & Naturheilkunde | Naturheilpraxis feminatalis" 
        description="Ganzheitliche Hilfe bei Allergien, Heuschnupfen und Unverträglichkeiten. Wir suchen die Ursachen im Darm, Gewebemilieu und Immunsystem." 
      />
      
      <SplitScreenHero
        badge="Immunmodulation"
        title={<>Allergie- <br /><span className="text-accent italic font-light">Therapie</span></>}
        subtitle="Verabschiede dich von belastenden Symptomen. Wir analysieren dein Immunsystem tiefgreifend und entwickeln einen individuellen Therapieplan zur nachhaltigen Allergiebehandlung."
        imageSrc="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2070&auto=format&fit=crop"
        imageAlt="Allergiebehandlung und Immunmodulation"
        imageKey="img_hero_allergie"
      >
        <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-primary text-white px-10 py-5 rounded-2xl font-bold hover:shadow-2xl transition-all shadow-xl active:scale-95 flex items-center gap-2">
          Kostenfreie Vor-Analyse anfragen
        </Link>
      </SplitScreenHero>

      {/* Cause Analysis */}
      <section className="py-20 text-left">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16 text-center">
            <h2 className="text-3xl lg:text-4xl font-serif text-primary mb-4 text-center">Warum reagiert das System über?</h2>
            <p className="text-muted-foreground font-medium text-center max-w-2xl mx-auto">Es gibt selten nur den einen Auslöser. Nahezu immer ist es eine hochkomplexe Kombination grundverschiedener pathologischer Faktoren.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24 text-left">
            {ursachen.map((u, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl border border-border shadow-sm group hover:border-accent transition-all text-left">
                <div className="bg-muted/30 w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                  <Info className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-bold text-primary mb-3 text-xl font-serif">{u.title}</h4>
                <p className="text-sm font-medium text-muted-foreground leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diagnosis & Specialization */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start text-left max-w-5xl mx-auto">
            <div className="space-y-8 text-left">
              <h2 className="text-3xl lg:text-4xl font-serif text-primary text-left leading-tight">Spezialisierte <br />Tiefendiagnostik</h2>
              <div className="prose prose-lg text-muted-foreground text-left mb-8">
                <p>
                  Klassische Labor- und Provokationstests zeigen oft lediglich die Sensibilisierung (den momentanen Allergiefokus), legen aber nicht die wahre Wurzel des Problems frei.
                </p>
                <p>
                  Aus diesem Grund nutzen wir eine tiefgehende <strong>funktionelle Labordiagnostik</strong> in Kombination mit einer Mikrobiom-Analyse, um versteckte Entzündungen und systemische Belastungen präzise zu identifizieren.
                </p>
              </div>
              <div className="bg-white p-8 lg:p-10 rounded-[2.5rem] border border-border shadow-sm text-left">
                <h4 className="text-primary font-bold mb-4 font-serif text-2xl text-left">Mein Standpunkt zur <br />Desensibilisierung</h4>
                <p className="text-sm opacity-90 text-muted-foreground mb-6 font-medium leading-relaxed">
                  Einer herkömmlichen Desensibilisierung durch klassische Injektionen stehe ich oft aus Überzeugung kritisch gegenüber. Eine Vielzahl der konventionellen Präparate enthält umstrittene Adjuvantien (wie z.B. Aluminiumhydroxid), die ein ohnehin gereiztes System meist extrem zusätzlich belasten und verwirren können.
                </p>
                <div className="flex items-center gap-3 text-accent font-bold text-sm bg-accent/5 p-4 rounded-xl border border-accent/10">
                  <Activity size={20} className="shrink-0" /> Wir setzen konsequent auf absolut aluminiumfreie, naturheilkundlich sanfte System-Regulation.
                </div>
              </div>
            </div>
            
            <div className="bg-primary text-white p-12 lg:p-16 rounded-[4rem] shadow-2xl relative overflow-hidden text-left h-full">
              <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 -mr-48 -mt-48 rounded-full blur-3xl"></div>
              <div className="relative z-10 text-left">
                <h3 className="text-3xl font-serif font-bold mb-10 text-white leading-tight">Unsere integrativen <br />Behandlungssäulen</h3>
                <ul className="space-y-6 text-left">
                  {behandlungsmethoden.map((method, i) => (
                    <li key={i} className="flex gap-4 items-start bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                      <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                      <span className="font-medium text-white leading-relaxed">{method}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PreisTransparenz 
        preisHint="Immun- & Allergiecheck" 
        hinweis="Analytik von Darm, Gewebemilieu und Immunsystem."
      />

      {/* Final CTA */}
      <section className="py-24 bg-background border-t border-border text-center">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <HeartPulse className="w-16 h-16 text-primary mx-auto mb-8 opacity-20" />
          <h2 className="text-3xl md:text-5xl font-serif text-primary mb-8 leading-tight font-bold text-center">Bist du bereit für mehr <br />Vitalität & Lebensqualität?</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed font-medium text-center">
            Eine nachhaltige tiefe Allergiebehandlung erfordert Geduld und Motivation, aber der Weg lohnt sich maßgeblich. Wir helfen dir intensiv, deinen Körper wieder in die selbstregulierende Balance zu bringen.
          </p>
          <div className="flex justify-center">
            <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="inline-flex bg-primary text-white px-12 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-2xl flex items-center justify-center gap-3 shadow-primary/20 border-none">
              Kostenfreie Vor-Analyse anfragen <ArrowRight className="w-6 h-6 text-white text-center" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
