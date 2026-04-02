import React from "react";
import SEO from "@/components/SEO";
import { ROUTE_PATHS } from "@/lib/index";
import { Link } from "react-router-dom";
import { Star, Check, ArrowRight, Activity, Smile } from "lucide-react";

export default function BrainLight() {
  return (
    <div className="bg-background min-h-screen pt-32 pb-20">
      <SEO 
        title="brainLight Massagesessel & Tiefenentspannung | feminatalis" 
        description="Regenerieren Sie Körper und Geist mit dem brainLight-Entspannungssystem in Bad Schönborn. Shiatsu-Massage, Lichttherapie und binaurale Beats." 
      />
      
      <div className="container mx-auto px-4 max-w-4xl">
        <span className="bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 inline-block">Wellness</span>
        <h1 className="text-4xl md:text-6xl font-serif text-primary mb-8">brainLight Massagesessel</h1>
        
        <div className="prose prose-lg max-w-none text-muted-foreground mb-12 leading-relaxed">
          <p className="text-xl mb-8">
            Ein einzigartiges Entspannungssystem, das Shiatsu-Massage, Lichttherapie und Klangfrequenzen verbindet. Ideal bei Stress, Erschöpfung und Schlafstörungen.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 my-12">
            {[
              { icon: <Activity className="text-accent w-8 h-8"/>, title: "Shiatsu-Massage", desc: "Wohltuende Ganzkörpermassage nach japanischem Vorbild." },
              { icon: <Smile className="text-accent w-8 h-8"/>, title: "Lichttherapie", desc: "Sanftes Farblicht zur Harmonisierung des Nervensystems." },
              { icon: <Activity className="text-accent w-8 h-8"/>, title: "Klangfrequenzen", desc: "Binaurale Beats für tiefe Regeneration von Körper & Geist." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl border border-border flex flex-col items-center text-center shadow-sm">
                <div className="bg-orange-50/50 w-16 h-16 rounded-full flex items-center justify-center mb-4">{item.icon}</div>
                <h3 className="text-primary font-serif text-xl mb-2">{item.title}</h3>
                <p className="text-sm opacity-80">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-border shadow-sm mb-16">
            <h2 className="text-primary font-serif text-3xl mb-6">Wirkung & Vorteile</h2>
            <ul className="space-y-4 grid md:grid-cols-2 gap-x-8">
              {[
                "Sofortiger Stressabbau", "Linderung von Rückenschmerzen", "Verbesserung der Konzentration", 
                "Tiefere Regeneration (CFS/Fatigue)", "Förderung des gesunden Schlafs", "Harmonisierung des vegetativen Nervensystems"
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-3"><Check className="text-green-500 shrink-0"/> <span>{point}</span></li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="bg-primary text-white p-10 rounded-[2.5rem] text-center shadow-xl">
          <Star className="w-16 h-16 mx-auto mb-6 opacity-80 text-accent fill-accent" />
          <h2 className="text-3xl font-serif mb-4">Zeit für Ihre Tiefenentspannung?</h2>
          <p className="mb-8 opacity-90 max-w-xl mx-auto">Gönnen Sie sich einen Moment der absoluten Ruhe – ideal auch als Ergänzung zu anderen Therapien.</p>
          <Link to={ROUTE_PATHS.CONTACT} className="inline-block bg-accent text-white px-8 py-4 rounded-xl font-bold hover:bg-accent/90 transition-all flex items-center justify-center gap-2 mx-auto w-fit">
            Entspannungstermin buchen <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
