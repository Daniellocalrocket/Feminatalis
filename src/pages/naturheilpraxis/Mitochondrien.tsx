import React from "react";
import SEO from "@/components/SEO";
import { ROUTE_PATHS } from "@/lib/index";
import { Link } from "react-router-dom";
import { Activity, Check, ArrowRight, Zap, Target, Heart } from "lucide-react";

export default function Mitochondrien() {
  return (
    <div className="bg-background min-h-screen pt-32 pb-20">
      <SEO 
        title="Mitochondrien-Therapie (IHHT) & Zellpower | feminatalis" 
        description="Stärken Sie Ihre Zellkraftwerke bei chronischer Erschöpfung, Long-Covid und Leistungsschwäche. Mitochondriale Medizin in Bad Schönborn." 
      />
      
      <div className="container mx-auto px-4 max-w-4xl">
        <span className="bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 inline-block">Mitochondriale Medizin</span>
        <h1 className="text-4xl md:text-6xl font-serif text-primary mb-8 leading-tight">Mitochondrien-Therapie</h1>
        
        <div className="prose prose-lg max-w-none text-muted-foreground mb-12">
          <p className="text-xl leading-relaxed mb-8">
            Die Mitochondrien sind die Kraftwerke Ihrer Zellen – ihre optimale Funktion ist essenziell für Energie und Vitalität. Bei chronischer Erschöpfung oder Long-Covid ist diese Zell-Power oft massiv beeinträchtigt.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 my-12 bg-white/50 p-8 rounded-[2.5rem] border border-border shadow-sm">
            <div>
              <h3 className="text-primary font-serif text-2xl mb-4 flex items-center gap-2"><Zap className="text-accent w-6 h-6"/> Indikationen</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3"><Check className="text-accent shrink-0"/> Chronische Erschöpfung (CFS)</li>
                <li className="flex items-start gap-3"><Check className="text-accent shrink-0"/> Long-Covid / Fatigue</li>
                <li className="flex items-start gap-3"><Check className="text-accent shrink-0"/> Leistungsschwäche & Burnout</li>
                <li className="flex items-start gap-3"><Check className="text-accent shrink-0"/> Herz-Kreislauf-Erkrankungen</li>
              </ul>
            </div>
            <div>
              <h3 className="text-primary font-serif text-2xl mb-4 flex items-center gap-2"><Target className="text-accent w-6 h-6"/> Methoden</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3"><Check className="text-accent shrink-0"/> IHHT (Zelltraining)</li>
                <li className="flex items-start gap-3"><Check className="text-accent shrink-0"/> Spezielle Mikronährstoffe</li>
                <li className="flex items-start gap-3"><Check className="text-accent shrink-0"/> Orthomolekulare Infusionen</li>
                <li className="flex items-start gap-3"><Check className="text-accent shrink-0"/> Ernährung nach Mitochondrien-Protokoll</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10 mb-16">
            <h2 className="text-primary font-serif text-3xl mb-4">Warum Zellkraftwerke stärken?</h2>
            <p className="mb-6">Gesunde Mitochondrien produzieren ATP – die Währung unserer Lebensenergie. Eine gezielte Therapie regeneriert geschädigte Zellen und stimuliert die Neubildung vitaler Kraftwerke.</p>
            <Link to={ROUTE_PATHS.ZELLTRAINING} className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">Mehr zum IHHT-Zelltraining erfahren <ArrowRight size={18}/></Link>
          </div>
        </div>
        
        <div className="bg-primary text-white p-10 rounded-[2.5rem] text-center shadow-xl">
          <Activity className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl font-serif mb-4">Bringen Sie Ihre Energie zurück.</h2>
          <p className="mb-8 opacity-90 max-w-xl mx-auto">Basierend auf 33 Jahren Erfahrung entwickeln wir einen individuellen Therapieplan zur Regeneration Ihrer Zellkraftwerke.</p>
          <Link to={ROUTE_PATHS.CONTACT} className="inline-block bg-accent text-white px-8 py-4 rounded-xl font-bold hover:bg-accent/90 transition-all flex items-center justify-center gap-2 mx-auto w-fit">
            Erstgespräch & Diagnostik <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
