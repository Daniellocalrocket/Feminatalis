import React from "react";
import SEO from "@/components/SEO";
import { ROUTE_PATHS } from "@/lib/index";
import { Link } from "react-router-dom";
import PreisTransparenz from "@/components/PreisTransparenz";
import { Activity, Check, ArrowRight, Zap, Target, Info, Sparkles, Heart } from "lucide-react";
import SplitScreenHero from "@/components/SplitScreenHero";

export default function Mikronaehrstoffe() {
  return (
    <div className="bg-background min-h-screen font-sans">
      <SEO 
        title="Mikronährstoffe in der Schwangerschaft | Hebammenpraxis feminatalis" 
        description="Individuelle Vitalstoff-Analyse für Schwangere. Wir ermitteln deinen präzisen Bedarf an Vitaminen, Mineralstoffen und Spurenelementen." 
      />

      <SplitScreenHero
        badge="Bausteine des Lebens"
        title={<>Mikronährstoffe in der <br /><span className="text-accent italic font-light">Schwangerschaft</span></>}
        subtitle="„Für zwei essen“ bedeutet nicht die doppelte Menge, sondern die doppelte Qualität. Wir stellen sicher, dass du und dein Baby optimal mit allen essenziellen Vitalstoffen versorgt seid – für ein starkes Fundament von Anfang an."
        imageSrc="https://images.unsplash.com/photo-1510733140576-8889e8db0c0d?q=80&w=2070&auto=format&fit=crop"
        imageAlt="Mikronährstoffe in der Schwangerschaft"
        imageKey="img_hero_hebamme_mikronaehrstoffe"
      >
        <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-primary text-white px-10 py-5 rounded-2xl font-bold hover:shadow-2xl transition-all shadow-xl active:scale-95 flex items-center gap-2">
          Vorgespräch vereinbaren <ArrowRight size={20} />
        </Link>
      </SplitScreenHero>

      {/* The Construction Site Metaphor */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-serif text-primary leading-tight">Dein Körper: <br />Die wichtigste Baustelle der Welt</h2>
              <div className="prose prose-lg text-muted-foreground leading-relaxed">
                <p>
                  Stell dir vor, in dir wächst der Körper eines neuen Menschen. In nur neun Monaten entsteht aus einer Zelle ein Wunderwerk. Dein Körper ist in dieser Zeit eine riesige Baustelle.
                </p>
                <p>
                  <strong>Du bist die Bau-Ingenieurin:</strong> Du sorgst dafür, dass die Baustelle alle notwendigen Materialien bekommt und mit Energie versorgt wird. Doch was sind das für Materialien?
                </p>
              </div>
            </div>
            <div className="bg-accent/5 p-12 rounded-[4rem] border-2 border-accent/20 relative">
               <Zap className="text-accent w-12 h-12 mb-6" />
               <h3 className="text-2xl font-serif text-primary mb-4 italic">Qualität vor Quantität</h3>
               <p className="text-muted-foreground leading-relaxed font-medium">
                 Wusstest du, dass dein Kalorienbedarf in der Schwangerschaft nur um etwa <strong>10–15 %</strong> steigt, dein Bedarf an Vitalstoffen aber um <strong>50 bis 300 %</strong>?
               </p>
               <p className="mt-4 text-sm text-muted-foreground italic">
                 „Für zwei essen“ gilt also vor allem für Vitamine, Mineralstoffe, Fettsäuren und Spurenelemente.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Labor Analysis? */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-serif text-primary mb-6">Präzision statt Standard-Supplemente</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium">
              Die meisten Empfehlungen beschränken sich auf Folsäure, Jod und Eisen. Doch jede Frau ist individuell. Ein Mangel an Vitamin D, A, Magnesium oder Selen kann zu Erschöpfung, Schwangerschaftsdiabetes oder Wachstumsproblemen führen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Zellwachstum", desc: "Aminosäuren als Bausteine für den Körper deines Babys.", icon: <Activity className="w-8 h-8" /> },
              { title: "Gehirnentwicklung", desc: "Essenzielle Fettsäuren (Omega 3) für die kognitive Entfaltung.", icon: <Heart className="w-8 h-8" /> },
              { title: "Mütterliche Kraft", desc: "Magnesium und B-Vitamine gegen Erschöpfung und Übelkeit.", icon: <Zap className="w-8 h-8" /> },
              { title: "Immunschutz", desc: "Zink, Vitamin D und Selen für ein starkes Immunsystem beider.", icon: <Sparkles className="w-8 h-8" /> }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-[3rem] border border-border shadow-sm hover:shadow-xl transition-all text-center group">
                 <div className="bg-muted w-14 h-14 rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:bg-accent group-hover:text-white transition-all text-accent">
                   {item.icon}
                 </div>
                 <h4 className="font-bold text-primary mb-4 font-serif text-xl">{item.title}</h4>
                 <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies / Insights */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-serif text-primary mb-12 text-center">Einblicke aus dem Labor</h2>
          <div className="space-y-12">
            <div className="p-10 bg-accent/5 rounded-[3rem] border border-accent/20">
              <h4 className="font-bold text-primary text-xl mb-4 italic">Fallbeispiel 1: 36-jährige Schwangere</h4>
              <p className="text-muted-foreground leading-relaxed">
                Trotz Einnahme von Standard-Präparaten klagte die Patientin über starke Übelkeit und Müdigkeit. Die Analyse zeigte: Ein massiver Mangel an Vitamin A, D und Coenzym Q10. Erst nach dem gezielten Ausgleich dieser Defizite stellte sich eine deutliche Besserung ein.
              </p>
            </div>
            <div className="p-10 bg-muted/20 rounded-[3rem] border border-border">
              <h4 className="font-bold text-primary text-xl mb-4 italic">Fallbeispiel 2: 38-jährige Schwangere</h4>
              <p className="text-muted-foreground leading-relaxed">
                Hier zeigte die Analyse einen heftigen Aminosäuren-Mangel (die Bausteine der Eiweiße fehlten!) sowie Defizite bei Kalium und Magnesium. Nach einer individuellen Therapie und 10 Sessions IHHT ging es ihr kurz vor der Geburt blendend.
              </p>
            </div>
          </div>
          <div className="mt-16 text-center">
             <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="inline-flex items-center justify-center gap-4 bg-accent text-white px-14 py-6 rounded-2xl font-bold text-xl hover:scale-105 transition-all shadow-2xl">
                Deinen individuellen Bedarf ermitteln <ArrowRight size={24} />
             </Link>
          </div>
        </div>
      </section>

      <PreisTransparenz 
        preisHint="Individuelle Beratung ab 90,- € / h" 
        hinweis="Zzgl. Laborkosten je nach Umfang der Analyse."
      />
    </div>
  );
}
