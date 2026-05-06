import React from "react";
import SEO from "@/components/SEO";
import { ROUTE_PATHS } from "@/lib/index";
import { Link } from "react-router-dom";
import PreisTransparenz from "@/components/PreisTransparenz";
import { Leaf, CheckCircle2, ArrowRight, Sparkles, Scale, BookOpen, AlertCircle, Quote } from "lucide-react";
import SplitScreenHero from "@/components/SplitScreenHero";

export default function Homoeopathie() {
  const anwendungen = [
    "Das humorale Immunsystem aktivieren",
    "Chronische Beschwerden nachhaltig lindern",
    "Tiefe psychische & emotionale Balance",
    "Gravierende hormonelle Umstellungsphasen",
    "Sanfte Unterstützung bei Toxinen & Entgiftung"
  ];

  return (
    <div className="bg-background min-h-screen font-sans">
      <SEO 
        title="Moderne Komplexmittel-Homöopathie | Naturheilpraxis feminatalis" 
        description="Ganzheitliche Heilung durch moderne Komplexmittel-Homöopathie. Wir nutzen synergetische Impulse, um deine Selbstheilungskräfte sanft zu aktivieren." 
      />
      
      <SplitScreenHero
        badge="Informationsmedizin"
        title={<>Moderne <br /><span className="text-accent italic font-light">Komplexmittel-Homöopathie</span></>}
        subtitle="Zeitgemäße Impulse für tiefgreifende Heilung. Ich nutze die Synergie homöopathischer Komplexmittel, um deine körpereigenen Selbstheilungskräfte gezielt zu aktivieren und Organe zu unterstützen."
        imageSrc="https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=2070&auto=format&fit=crop"
        imageAlt="Homöopathische Globuli und Naturheilkunde"
        imageKey="img_hero_homoeopathie"
      >
        <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-primary text-white px-10 py-5 rounded-2xl font-bold hover:shadow-2xl transition-all shadow-xl active:scale-95 flex items-center gap-2">
          Kostenfreie Vor-Analyse anfragen
        </Link>
      </SplitScreenHero>

      {/* Philosophy Section */}
      <section className="py-20 text-left">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-24 text-left">
            <div className="space-y-8 text-left">
              <h2 className="text-3xl lg:text-5xl font-serif text-primary text-left leading-tight">Ganzheitlicher <br />Informations-Impuls</h2>
              <div className="prose prose-lg text-muted-foreground text-left font-medium">
                <p>
                  Ganzheitliche Homöopathie wirkt in der Tiefe nicht durch physikalische, chemische Substanzen, sondern vielmehr als ein absolut feinstofflicher <strong>Informationsreiz</strong>. Die hochmoderne Quantenphysik liefert und diskutiert heute faszinierende wissenschaftliche Erklärungsmodelle für dieses sogenannte „Dynamisierungsverfahren“.
                </p>
                <p>
                  Das übergeordnete Prinzip ist im Kern simpel und doch so kraftvoll: „Ähnliches werde durch Ähnliches geheilt“. Ein Reiz, der bei einem völlig Gesunden temporäre Symptome hervorruft, kann bei einem chronisch Kranken genau den entscheidend fehlenden Anstoß zur endgültigen Heilung setzen.
                </p>
              </div>
              <div className="bg-white p-10 rounded-[3rem] border border-border shadow-sm space-y-6 text-left">
                <div className="flex gap-5 items-start group">
                  <div className="bg-muted/30 p-3 rounded-xl group-hover:bg-accent/10 transition-colors">
                    <Sparkles className="text-accent shrink-0" />
                  </div>
                  <p className="text-sm font-medium text-left leading-relaxed text-muted-foreground mt-2">Bei akuten Krankheiten nutzen wir meist tiefere Potenzen in sehr kurzen, intensiven Abständen.</p>
                </div>
                <div className="flex gap-5 items-start group">
                  <div className="bg-muted/30 p-3 rounded-xl group-hover:bg-accent/10 transition-colors">
                    <BookOpen className="text-accent shrink-0" />
                  </div>
                  <p className="text-sm font-medium text-left leading-relaxed text-muted-foreground mt-2">Hartnäckige emotionale oder geistige Symptome erfordern weitaus höhere Potenzen für den Ausgleich.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-primary text-white p-12 lg:p-16 rounded-[4rem] shadow-2xl relative overflow-hidden text-left h-full">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 -mr-32 -mt-32 rounded-full blur-3xl"></div>
              <div className="relative z-10 text-left">
                <h3 className="text-3xl font-serif font-bold mb-8 text-white text-left leading-tight">Einzel- oder <br />Komplexmittel?</h3>
                <p className="text-base opacity-90 leading-relaxed mb-10 text-left text-white font-medium">
                  In meiner Praxis verwende i.d.R. sehr gerne homöopathische Komplexmittel. Sie kombinieren genial aufeinander abgestimmte Substanzen, die langfristig systematisch tiefe Blockaden lösen und Organe wie Leber, Nieren und Darm signifikant in ihrer Ausscheidungsfunktion unterstützen.
                </p>
                <div className="p-6 rounded-2xl bg-white/10 border border-white/20 text-left">
                  <p className="text-sm font-bold text-accent uppercase tracking-wider mb-3 text-left">Der große Vorteil:</p>
                  <p className="text-sm opacity-90 font-medium text-left text-white leading-relaxed">Gezielte, schonende Reparatur blockierter biochemischer Abläufe in vielen kleinen, für den Organismus hochverträglichen Schritten.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-16 text-center">
            <h2 className="text-3xl lg:text-4xl font-serif text-primary mb-4 text-center">Ganzheitliche Unterstützung</h2>
            <p className="text-muted-foreground font-medium text-center">Wir aktivieren deine immanenten Selbstheilungskräfte auf exakt allen Ebenen.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24 text-left">
            {anwendungen.map((item, i) => (
              <div key={i} className="flex gap-4 items-center bg-white p-8 rounded-3xl border border-border group hover:border-accent transition-all shadow-sm">
                <div className="bg-muted/30 p-2 rounded-lg group-hover:bg-accent/10 transition-colors">
                   <CheckCircle2 className="w-5 h-5 text-accent shrink-0 group-hover:scale-110 transition-transform" />
                </div>
                <span className="font-bold text-primary text-sm leading-snug">{item}</span>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
            <div className="bg-white p-10 lg:p-12 rounded-[3.5rem] border border-border shadow-sm text-left">
              <Scale className="w-12 h-12 text-primary mb-8" />
              <h4 className="text-2xl font-bold text-primary mb-6 font-serif text-left">Transparente Kosten</h4>
              <p className="text-sm text-muted-foreground mb-8 font-medium text-left leading-relaxed">Die ausführliche Erst-Anamnese (oft 1-2 Stunden) und anschließende Beratung wird strikt nach tatsächlichem Zeitaufwand und GebüH berechnet.</p>
              <div className="flex items-end gap-3 text-left">
                 <div className="text-5xl font-serif text-primary font-bold">100 €</div>
                 <div className="text-sm font-sans text-muted-foreground font-bold mb-2">/ Std.</div>
              </div>
              <p className="text-[11px] text-muted-foreground italic mt-6 text-left border-t border-border pt-4">Abrechnung erfolgt formell nach GebüH. Private Kassen übernehmen i.d.R. die anfallenden Kosten.</p>
            </div>
            
            <div className="bg-muted/30 p-10 lg:p-12 rounded-[3.5rem] border border-border shadow-sm text-left">
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                 <AlertCircle className="w-8 h-8 text-destructive" />
              </div>
              <h4 className="text-2xl font-bold text-primary mb-6 font-serif text-left text-left">Wichtiger Hinweis</h4>
              <p className="text-base text-muted-foreground leading-relaxed font-medium text-left">
                Bei lebensbedrohlichen Notfall-Zuständen oder hochgradig schweren, fortgeschrittenen Erkrankungen (z.B. Herzinfarkt, Krebs) wird die Homöopathie von uns strikt und ausschließlich als <strong>komplementäre, unterstützende Methode</strong> zur klassischen evidenzbasierten Schulmedizin angewandt. Wir lehnen ideologischen Radikalismus kategorisch ab und setzen vielmehr auf eine vernünftige, integrative Symbiose beider Welten im Sinne des Patienten.
              </p>
            </div>
          </div>
        </div>
      </section>

      <PreisTransparenz 
        preisHint="Erstanamnese 100 € / Std." 
        hinweis="Ausführliches Gespräch (60-90 Min.) inkl. Erstberatung, Befundanalyse und Untersuchung."
      />

      {/* CTA */}
      <section className="py-24 bg-background border-t border-border text-center">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Leaf className="w-16 h-16 text-primary opacity-20 mx-auto mb-8 animate-pulse text-center" />
          <h2 className="text-3xl md:text-5xl font-serif text-primary mb-12 leading-tight font-bold text-center">
            Bereit, deine körpereigenen Ressourcen zu stärken?
          </h2>
          <div className="flex justify-center">
             <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="inline-flex bg-primary text-white px-12 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-2xl flex items-center justify-center gap-3 shadow-primary/20 border-none">
               Kostenfreie Vor-Analyse anfragen <ArrowRight className="w-6 h-6 text-white text-center" />
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
