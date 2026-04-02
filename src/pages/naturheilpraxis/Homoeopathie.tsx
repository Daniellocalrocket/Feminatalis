import React from "react";
import SEO from "@/components/SEO";
import { ROUTE_PATHS } from "@/lib/index";
import { Link } from "react-router-dom";
import { Leaf, Check, ArrowRight, Heart, Sparkles } from "lucide-react";

export default function Homoeopathie() {
  return (
    <div className="bg-background min-h-screen pt-32 pb-20">
      <SEO 
        title="Klassische Homöopathie | feminatalis" 
        description="Ganzheitliche Behandlung akuter und chronischer Beschwerden durch klassische Homöopathie in Bad Schönborn. Individuelle Mittelwahl nach ausführlicher Anamnese." 
      />
      
      <div className="container mx-auto px-4 max-w-4xl">
        <span className="bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 inline-block">Naturheilkunde</span>
        <h1 className="text-4xl md:text-6xl font-serif text-primary mb-8 leading-tight">Klassische Homöopathie</h1>
        
        <div className="prose prose-lg max-w-none text-muted-foreground mb-12">
          <p className="text-xl leading-relaxed mb-8">
            Die Homöopathie betrachtet den Menschen in seiner Gesamtheit – Körper, Seele und Geist. Besonders wertvoll ist sie als begleitende Unterstützung in sensiblen Lebensphasen.
          </p>
          
          <div className="bg-white p-10 rounded-[2.5rem] border border-border shadow-sm mb-12">
            <h2 className="text-primary font-serif text-3xl mb-6">Wie wir arbeiten</h2>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1 space-y-4">
                <div className="bg-orange-50/50 p-4 rounded-xl border border-orange-100 flex items-start gap-4">
                  <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-sm"><Sparkles className="text-accent w-5 h-5"/></div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Individuelle Anamnese</h4>
                    <p className="text-sm opacity-90">Wir nehmen uns die Zeit, um das passende Mittel für Ihre ganz persönliche Konstitution zu finden.</p>
                  </div>
                </div>
                <div className="bg-orange-50/50 p-4 rounded-xl border border-orange-100 flex items-start gap-4">
                  <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-sm"><Heart className="text-accent w-5 h-5"/></div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Sanfte Reize</h4>
                    <p className="text-sm opacity-90">Die Homöopathie regt die Selbstheilungskräfte an und unterstützt den Körper bei der Regulation.</p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 aspect-square bg-[#fde4c8]/30 rounded-3xl flex items-center justify-center p-8">
                <Leaf className="w-20 h-20 text-accent/20" />
              </div>
            </div>
          </div>
          
          <h2 className="text-primary font-serif text-3xl mb-6">Anwendungsgebiete</h2>
          <ul className="space-y-3 mb-12 grid md:grid-cols-2 gap-x-12">
            <li className="flex items-start gap-3"><Check className="text-accent shrink-0"/> Chronische Infektanfälligkeit</li>
            <li className="flex items-start gap-3"><Check className="text-accent shrink-0"/> Schlafstörungen & Stressreaktionen</li>
            <li className="flex items-start gap-3"><Check className="text-accent shrink-0"/> Begleitung in Schwangerschaft & Stillzeit</li>
            <li className="flex items-start gap-3"><Check className="text-accent shrink-0"/> Hautbeschwerden & Allergien</li>
            <li className="flex items-start gap-3"><Check className="text-accent shrink-0"/> Zyklusbeschwerden & Klimakterium</li>
            <li className="flex items-start gap-3"><Check className="text-accent shrink-0"/> Akute Erkältungskrankheiten</li>
          </ul>
        </div>
        
        <div className="bg-primary text-white p-10 rounded-[2.5rem] text-center shadow-xl">
          <Leaf className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl font-serif mb-4">Ganzheitlichkeit spüren.</h2>
          <p className="mb-8 opacity-90 max-w-xl mx-auto">Lassen Sie uns in einem persönlichen Gespräch herausfinden, wie die klassische Homöopathie Ihren Heilungsweg unterstützen kann.</p>
          <Link to={ROUTE_PATHS.CONTACT} className="inline-block bg-accent text-white px-8 py-4 rounded-xl font-bold hover:bg-accent/90 transition-all flex items-center justify-center gap-2 mx-auto w-fit">
            Persönlichen Anamnese-Termin buchen <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
