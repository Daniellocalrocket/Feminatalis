import React from "react";
import SEO from "@/components/SEO";
import { ROUTE_PATHS } from "@/lib/index";
import { Link } from "react-router-dom";
import { Activity, Check, ArrowRight, Zap, Target } from "lucide-react";

export default function Lasertherapie() {
  return (
    <div className="bg-background min-h-screen pt-32 pb-20">
      <SEO 
        title="Medizinische Lasertherapie | feminatalis" 
        description="Schmerzlindernde und regenerationsfördernde Behandlung mit medizinischem Laser in Bad Schönborn. Anwendung bei Gelenkschmerzen und Wundheilung." 
      />
      
      <div className="container mx-auto px-4 max-w-4xl">
        <span className="bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 inline-block">Apparative Therapie</span>
        <h1 className="text-4xl md:text-6xl font-serif text-primary mb-8">Lasertherapie</h1>
        
        <div className="prose prose-lg max-w-none text-muted-foreground mb-12">
          <p className="text-xl leading-relaxed mb-8">
            Die medizinische Lasertherapie (Low-Level-Laser) stimuliert die Stoffwechselvorgänge in den Zellen ("Photobiomodulation") und beschleunigt so natürliche Heilungsprozesse – sanft, schmerzfrei und hochwirksam.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 my-12">
            {[
              { icon: <Zap className="text-accent w-8 h-8"/>, title: "Zell-Energie", desc: "Steigerung der ATP-Produktion in den Mitochondrien." },
              { icon: <Activity className="text-accent w-8 h-8"/>, title: "Regeneration", desc: "Beschleunigte Wundheilung & Gewebe-Reparatur." },
              { icon: <Target className="text-accent w-8 h-8"/>, title: "Linderung", desc: "Nachhaltige Hemmung von Entzündungs-Mediator-Botenstoffen." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl border border-border text-center shadow-sm">
                <div className="bg-orange-50/50 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">{item.icon}</div>
                <h4 className="font-bold text-primary mb-2">{item.title}</h4>
                <p className="text-sm opacity-90">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-primary/5 p-10 rounded-[2.5rem] border border-primary/10 mb-16">
            <h2 className="text-primary font-serif text-3xl mb-6">Wichtige Anwendungsgebiete</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-primary text-xl font-bold mb-4">Gelenke & Schmerz</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3"><Check className="text-accent shrink-0"/> Tennisarm & Golferellbogen</li>
                  <li className="flex items-start gap-3"><Check className="text-accent shrink-0"/> Sehnenreizungen (Achillessehne)</li>
                  <li className="flex items-start gap-3"><Check className="text-accent shrink-0"/> Akute & chronische Gelenkschmerzen</li>
                  <li className="flex items-start gap-3"><Check className="text-accent shrink-0"/> Muskelfaserrisse & Prellungen</li>
                </ul>
              </div>
              <div>
                <h3 className="text-primary text-xl font-bold mb-4">Haut & Heilung</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3"><Check className="text-accent shrink-0"/> Herpes-Infektionen</li>
                  <li className="flex items-start gap-3"><Check className="text-accent shrink-0"/> Chronische Wundheilungsstörungen</li>
                  <li className="flex items-start gap-3"><Check className="text-accent shrink-0"/> Narbenentstörung</li>
                  <li className="flex items-start gap-3"><Check className="text-accent shrink-0"/> Wunde Brustwarzen (Stillzeit)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-primary text-white p-10 rounded-[2.5rem] text-center shadow-xl">
          <Zap className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl font-serif mb-4">Aktivieren Sie Ihre Heilkraft.</h2>
          <p className="mb-8 opacity-90 max-w-xl mx-auto">Die Lasertherapie ist eine ideale Ergänzung zu manuellen oder naturheilkundlichen Behandlungen.</p>
          <Link to={ROUTE_PATHS.CONTACT} className="inline-block bg-accent text-white px-8 py-4 rounded-xl font-bold hover:bg-accent/90 transition-all flex items-center justify-center gap-2 mx-auto w-fit">
            Beratungstermin Lasertherapie <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
