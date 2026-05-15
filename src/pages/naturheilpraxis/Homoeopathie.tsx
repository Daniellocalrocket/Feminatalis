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
        badge="Ganzheitliche Informationsmedizin"
        title={<>Sanfte Kraft: <br /><span className="text-accent italic font-light">Klassische & Komplex-Homöopathie</span></>}
        subtitle="Heilung von innen nach außen. Wir nutzen homöopathische Impulse, um deine Lebenskraft zu harmonisieren und deine Selbstheilung auf körperlicher, emotionaler und geistiger Ebene zu aktivieren."
        imageSrc="https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=2070&auto=format&fit=crop"
        imageAlt="Homöopathische Globuli und Naturheilkunde"
        imageKey="img_hero_homoeopathie"
      >
        <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-primary text-white px-10 py-5 rounded-2xl font-bold hover:shadow-2xl transition-all shadow-xl active:scale-95 flex items-center gap-2">
          Analyse-Gespräch anfragen <ArrowRight size={20} />
        </Link>
      </SplitScreenHero>

      {/* Philosophy Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl lg:text-5xl font-serif text-primary mb-10 leading-tight">Ähnliches werde durch <br /><span className="text-accent italic">Ähnliches geheilt</span></h2>
          <div className="prose prose-lg mx-auto text-muted-foreground leading-relaxed">
            <p>
              Das Herzstück der Homöopathie ist das Prinzip <strong>„Similia similibus curentur“</strong>. Ein Stoff, der bei einem Gesunden bestimmte Symptome hervorruft, kann genau diese Symptome bei einem Kranken heilen, indem er dem Körper den entscheidenden energetischen Spiegel vorhält.
            </p>
            <p className="mt-6">
              Wir nutzen sowohl die <strong>Klassische Homöopathie</strong> (Einzelmittel) für tiefe konstitutionelle Veränderungen als auch die moderne <strong>Komplexmittel-Homöopathie</strong> zur gezielten Unterstützung von Organfunktionen (z.B. Leber-Galle-System oder Nieren-Entgiftung).
            </p>
          </div>
        </div>
      </section>

      {/* The Anamnesis Depth */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-8 text-left">
              <h2 className="text-3xl lg:text-4xl font-serif text-primary leading-tight">Die Erstanamnese: <br />Deine Biografie im Fokus</h2>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                In der Homöopathie behandeln wir nicht die Krankheit, sondern den <strong>Menschen mit dieser Krankheit</strong>. Deshalb nehmen wir uns für das erste Gespräch besonders viel Zeit (ca. 60 bis 90 Minuten).
              </p>
              <div className="grid gap-4">
                {[
                  { title: "Körperliche Ebene", desc: "Präzise Analyse aller aktuellen Symptome und deiner körperlichen Konstitution." },
                  { title: "Emotionale Ebene", desc: "Berücksichtigung von Gemütszuständen, Ängsten, Träumen und Temperament." },
                  { title: "Biografische Ebene", desc: "Blick auf familiäre Belastungen, prägende Lebensereignisse und Verhaltensmuster." }
                ].map((level, i) => (
                  <div key={i} className="flex gap-5 items-start bg-white p-6 rounded-3xl border border-border shadow-sm">
                    <div className="bg-accent/10 p-3 rounded-2xl shrink-0">
                       <CheckCircle2 className="text-accent w-6 h-6" />
                    </div>
                    <div>
                       <h4 className="font-bold text-primary mb-1">{level.title}</h4>
                       <p className="text-sm opacity-80">{level.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-primary text-white p-12 lg:p-16 rounded-[4rem] shadow-2xl relative overflow-hidden text-left h-full">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 -mr-32 -mt-32 rounded-full blur-3xl opacity-20"></div>
              <div className="relative z-10">
                <Quote className="text-accent w-16 h-16 mb-8 opacity-50" />
                <h3 className="text-3xl font-serif font-bold mb-8 text-white leading-tight text-left">Die Kraft der <br />Potenzierung</h3>
                <p className="text-lg opacity-90 leading-relaxed mb-10 font-medium italic">
                  „Homöopathie ist Informationsmedizin. Durch das stufenweise Verdünnen und Verschütteln (Dynamisieren) wird die rein materielle Substanz in einen energetischen Impuls umgewandelt, der direkt auf die Lebenskraft wirkt.“
                </p>
                <div className="grid grid-cols-3 gap-4 border-t border-white/20 pt-8">
                   <div className="text-center">
                      <span className="block text-2xl font-bold text-accent">D</span>
                      <span className="text-xs opacity-70 uppercase tracking-widest">Körperlich</span>
                   </div>
                   <div className="text-center">
                      <span className="block text-2xl font-bold text-accent">C</span>
                      <span className="text-xs opacity-70 uppercase tracking-widest">Ganzheitlich</span>
                   </div>
                   <div className="text-center">
                      <span className="block text-2xl font-bold text-accent">LM/Q</span>
                      <span className="text-xs opacity-70 uppercase tracking-widest">Feinstofflich</span>
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* Applications Grid */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif text-primary mb-4">Wann Homöopathie hilft</h2>
            <p className="text-muted-foreground font-medium">Individuelle Lösungen für komplexe Lebensphasen.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {[
              "Chronische Erschöpfung & Burnout",
              "Hormonelle Dysbalancen & PMS",
              "Schlafstörungen & Stress-Symptome",
              "Allergien & Hautbeschwerden",
              "Häufig wiederkehrende Infekte",
              "Psychosomatische Beschwerden"
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-center bg-white p-8 rounded-3xl border border-border group hover:border-accent transition-all shadow-sm">
                 <div className="bg-muted/30 p-2 rounded-lg group-hover:bg-accent group-hover:text-white transition-all duration-500">
                    <Sparkles className="w-5 h-5 text-accent group-hover:text-white" />
                 </div>
                 <span className="font-bold text-primary text-sm leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Costs & Note Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
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
                 <AlertCircle className="w-8 h-8 text-accent" />
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
