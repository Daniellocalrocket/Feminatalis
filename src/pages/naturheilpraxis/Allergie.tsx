import React from "react";
import SEO from "@/components/SEO";
import { ROUTE_PATHS } from "@/lib/index";
import { Link } from "react-router-dom";
import { Shield, Check, ArrowRight } from "lucide-react";

export default function Allergie() {
  return (
    <div className="bg-background min-h-screen pt-32 pb-20">
      <SEO 
        title="Allergiebehandlung & Immunmodulation | feminatalis" 
        description="Ursächliche Behandlung von Allergien und Unverträglichkeiten durch Desensibilisierung und Immunmodulation in Bad Schönborn." 
      />
      
      <div className="container mx-auto px-4 max-w-4xl">
        <span className="bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 inline-block">Naturheilpraxis</span>
        <h1 className="text-4xl md:text-6xl font-serif text-primary mb-8">Allergiebehandlung</h1>
        
        <div className="prose prose-lg max-w-none text-muted-foreground mb-12">
          <p className="text-xl leading-relaxed mb-8">
            Statt nur Symptome zu unterdrücken, setzen wir am Immunsystem an. Eine nachhaltige Behandlung zielt auf eine echte Toleranzentwicklung ab.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 my-12 bg-white p-8 rounded-3xl shadow-sm border border-border">
            <div>
              <h3 className="text-primary font-serif text-2xl mb-4">Diagnostik</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3"><Check className="text-accent shrink-0"/> Allergietestung (Labor)</li>
                <li className="flex items-start gap-3"><Check className="text-accent shrink-0"/> Unverträglichkeitsanalyse</li>
                <li className="flex items-start gap-3"><Check className="text-accent shrink-0"/> Darm-Immunsystem Check</li>
              </ul>
            </div>
            <div>
              <h3 className="text-primary font-serif text-2xl mb-4">Therapie</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3"><Check className="text-accent shrink-0"/> Desensibilisierung</li>
                <li className="flex items-start gap-3"><Check className="text-accent shrink-0"/> Immunmodulation</li>
                <li className="flex items-start gap-3"><Check className="text-accent shrink-0"/> Darmsanierung (Mikrobiom-Aufbau)</li>
              </ul>
            </div>
          </div>
          
          <h2 className="text-primary font-serif text-3xl mb-6">Typische Anwendungsgebiete</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {["Heuschnupfen", "Nahrungsmittelallergien", "Kontaktekzeme"].map((item, i) => (
              <div key={i} className="bg-orange-50/50 p-4 rounded-xl border border-orange-100 text-center font-medium text-primary">
                {item}
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-primary text-white p-10 rounded-[2.5rem] text-center shadow-xl">
          <Shield className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl font-serif mb-4">Bereit für eine freie Atmung?</h2>
          <p className="mb-8 opacity-90 max-w-xl mx-auto">Lassen Sie uns gemeinsam die Ursachen Ihrer Allergie finden und Ihr Immunsystem stärken.</p>
          <Link to={ROUTE_PATHS.CONTACT} className="inline-block bg-accent text-white px-8 py-4 rounded-xl font-bold hover:bg-accent/90 transition-all flex items-center justify-center gap-2 mx-auto w-fit">
            Beratungsgespräch vereinbaren <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
