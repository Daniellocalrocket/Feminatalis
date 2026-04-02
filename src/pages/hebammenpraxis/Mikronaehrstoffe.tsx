import React from "react";
import SEO from "@/components/SEO";
import { ROUTE_PATHS } from "@/lib/index";
import { Link } from "react-router-dom";
import { Activity, Check, ArrowRight, Zap, Target } from "lucide-react";

export default function Mikronaehrstoffe() {
  return (
    <div className="bg-background min-h-screen pt-32 pb-20">
      <SEO 
        title="Mikronährstoff-Beratung & Labor | feminatalis" 
        description="Optimale Versorgung mit Vitalstoffen in Schwangerschaft und Stillzeit für Mutter und Kind. Mikronährstoff-Beratung in Bad Schönborn." 
      />
      
      <div className="container mx-auto px-4 max-w-4xl">
        <span className="bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 inline-block">Vitalstoff-Fokus</span>
        <h1 className="text-4xl md:text-6xl font-serif text-primary mb-8 leading-tight">Mikronährstoff-Beratung</h1>
        
        <div className="prose prose-lg max-w-none text-muted-foreground mb-12">
          <p className="text-xl leading-relaxed mb-8">
            Wussten Sie, dass der Bedarf an bestimmten Mikronährstoffen in der Schwangerschaft um bis zu 100% steigt? Ein Mangel kann nicht nur Ihre eigene Energie schwächen, sondern auch die Entwicklung Ihres Kindes massiv beeinflussen.
          </p>
          
          <div className="bg-[#fff08a]/20 p-10 rounded-[2.5rem] border border-yellow-200/50 mb-12 text-center shadow-sm">
            <h2 className="text-primary font-serif text-3xl mb-6">Präzise Analysen statt Vermutungen</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Vitamine", desc: "D3, B12, Folsäure, etc.", icon: <Zap className="text-accent w-6 h-6 mx-auto mb-2"/> },
                { title: "Mineralien", desc: "Magnesium, Calcium, etc.", icon: <Activity className="text-accent w-6 h-6 mx-auto mb-2"/> },
                { title: "Spurenelemente", desc: "Eisen, Zink, Selen, Jod.", icon: <Target className="text-accent w-6 h-6 mx-auto mb-2"/> },
                { title: "Spezial-Labor", desc: "Individuelle Vollblut-Analyse.", icon: <Zap className="text-accent w-6 h-6 mx-auto mb-2"/> }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                  {item.icon}
                  <h4 className="font-bold text-primary mb-1 text-sm">{item.title}</h4>
                  <p className="text-xs opacity-90">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <h2 className="text-primary font-serif text-3xl mb-6">Wann ist eine Beratung sinnvoll?</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
              <h4 className="font-bold text-primary mb-3">Im Hebammen-Bereich</h4>
              <ul className="space-y-2 text-sm leading-relaxed">
                <li className="flex items-start gap-3"><Check className="text-accent shrink-0"/> Optimale Vorbereitung auf die Geburt.</li>
                <li className="flex items-start gap-3"><Check className="text-accent shrink-0"/> Unterstützung der Entwicklung des Babys.</li>
                <li className="flex items-start gap-3"><Check className="text-accent shrink-0"/> Vermeidung von Fatigue-Zuständen im Wochenbett.</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
              <h4 className="font-bold text-primary mb-3">Im Heilpraktiker-Bereich</h4>
              <ul className="space-y-2 text-sm leading-relaxed">
                <li className="flex items-start gap-3"><Check className="text-accent shrink-0"/> Ausgleich chronischer Mangelzustände.</li>
                <li className="flex items-start gap-3"><Check className="text-accent shrink-0"/> Regeneration bei Erschöpfung / Long-Covid.</li>
                <li className="flex items-start gap-3"><Check className="text-accent shrink-0"/> Behandlung von immunologischen Defiziten.</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-primary text-white p-10 rounded-[2.5rem] text-center shadow-xl">
          <Activity className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl font-serif mb-4">Gezielte Nährstoff-Strategie.</h2>
          <p className="mb-8 opacity-90 max-w-xl mx-auto">Verlassen Sie sich nicht auf Standard-Präparate aus der Drogerie – setzen Sie auf medizinisch fundierte Analysen und Beratung.</p>
          <Link to={ROUTE_PATHS.CONTACT} className="inline-block bg-accent text-white px-8 py-4 rounded-xl font-bold hover:bg-accent/90 transition-all flex items-center justify-center gap-2 mx-auto w-fit">
            Analyse-Termin vereinbaren <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
