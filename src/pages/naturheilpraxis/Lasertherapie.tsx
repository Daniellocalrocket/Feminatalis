import React from "react";
import SEO from "@/components/SEO";
import { ROUTE_PATHS } from "@/lib/index";
import { Link } from "react-router-dom";
import PreisTransparenz from "@/components/PreisTransparenz";
import { Zap, CheckCircle2, ArrowRight, FlaskConical, HeartPulse, Sun, ShieldCheck, Sparkles } from "lucide-react";
import SplitScreenHero from "@/components/SplitScreenHero";

export default function Lasertherapie() {
  const laserEffekte = [
    { title: "Zellenergetik", desc: "Zunahme der ATP-Synthese in den Mitochondrien um bis zu 150% für direkte Zellenergie." },
    { title: "Heilungsbeschleunigung", desc: "Verstärkt die Eiweiß- und Kollagensynthese – ideal für Haut, Sehnen und Bänder." },
    { title: "Mikrozirkulation", desc: "Optimiert die Durchblutung bis in die feinsten Kapillaren für bessere Nährstoffzufuhr." },
    { title: "Entzündungshemmung", desc: "Natürliche Schmerzlinderung durch die Freisetzung von Beta-Endorphinen." }
  ];

  return (
    <div className="bg-background min-h-screen font-sans">
      <SEO 
        title="Lasertherapie & Hämo-Laser | Naturheilpraxis feminatalis" 
        description="Medizinische Lasertherapie zur Zellregeneration und Hämo-Laser zur systemischen Blutaktivierung. Sanfte Heilung durch Lichtenergie." 
      />
      
      <SplitScreenHero
        badge="Biophotonen & Energie"
        title={<>Photon- <br /><span className="text-accent italic font-light">Lasertherapie</span></>}
        subtitle="Wir bringen Licht in deine Zellen. Die Low-Level-Lasertherapie nutzt die Kraft der Photonen, um Entzündungen zu hemmen, die Wundheilung zu beschleunigen und die mitochondriale Energieproduktion sanft zu stimulieren."
        imageSrc="https://images.unsplash.com/photo-1579152276503-3406322316e6?q=80&w=2070&auto=format&fit=crop"
        imageAlt="Lasertherapie Behandlung"
        imageKey="img_hero_lasertherapie"
      >
        <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-primary text-white px-10 py-5 rounded-2xl font-bold hover:shadow-2xl transition-all shadow-xl active:scale-95 flex items-center gap-2">
          Kostenfreie Vor-Analyse anfragen
        </Link>
      </SplitScreenHero>

      {/* Basic Effects */}
      <section className="py-20 text-left">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-24 text-left">
            <div className="space-y-6">
              <h2 className="text-3xl font-serif text-primary leading-tight text-left">Licht als biologischer Treibstoff</h2>
              <div className="prose prose-lg text-muted-foreground text-left text-left">
                <p>
                  Laserlicht (Low-Level-Laser) ist hochreine Energie. Wenn diese Photonen auf die Mitochondrien deiner Zellen treffen, reagieren diese wie eine Solarzelle: Sie produzieren sofort mehr ATP – den universellen Kraftstoff deiner Zellen.
                </p>
                <p>
                  Dies führt zu einer Kaskade von positiven Effekten: Wunden schließen sich schneller, Entzündungen klingen ab und Schmerzen werden gelindert, ohne dass der Körper mit Chemie belastet wird.
                </p>
              </div>
              <div className="bg-white border border-border p-6 rounded-2xl shadow-sm flex items-start gap-4 text-left">
                <Sun className="text-accent shrink-0 w-6 h-6" />
                <p className="text-sm font-medium italic text-left">
                  Laser: Begleitend zur Förderung von Mikrozirkulation und Geweberegeneration – besonders bei belasteten Heilungsverläufen & Polyneuropathie
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 mt-4 text-left">
              {laserEffekte.map((eff, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl border border-border shadow-sm hover:border-accent transition-all group">
                   <div className="bg-accent/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors text-left">
                      <Sparkles className="text-accent w-6 h-6 text-left" />
                   </div>
                   <h4 className="font-bold text-primary mb-3 text-left font-serif">{eff.title}</h4>
                   <p className="text-xs text-muted-foreground leading-relaxed text-left">{eff.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hämulaser Section */}
          <div className="bg-primary text-white p-12 lg:p-20 rounded-[4rem] text-left shadow-2xl relative overflow-hidden mb-24">
             <div className="absolute top-0 right-0 p-8 text-white/5 -rotate-12 translate-x-12 -translate-y-12">
                <FlaskConical size={300} />
             </div>
             <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10 text-left">
                <div className="space-y-8 text-left">
                   <h2 className="text-3xl lg:text-5xl font-serif font-bold text-white text-left">Hämo-Laser: <br />Blutaktivierung von innen</h2>
                   <p className="text-lg opacity-80 leading-relaxed text-white text-left">
                     Die intravasale Blutbestrahlung führt Laserlicht direkt in den Blutkreislauf. Hierbei wird das durchfließende Blut direkt bestrahlt und somit der Stoffwechsel der Blutzellen positiv beeinflusst.
                   </p>
                   <div className="bg-white/10 p-8 rounded-3xl border border-white/10 text-left">
                      <h4 className="font-bold mb-4 text-accent uppercase tracking-widest text-sm text-left">Kerngebiete</h4>
                      <ul className="grid sm:grid-cols-2 gap-3 text-sm text-left">
                        {[
                          "Immun-Modulation",
                          "Durchblutung",
                          "Burnout-Support",
                          "Long-Covid-Hilfe",
                          "Diabetes-Begleitung",
                          "Gefäß-Stärkung"
                        ].map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-left text-white">
                            <CheckCircle2 className="w-4 h-4 text-accent shrink-0" /> {item}
                          </li>
                        ))}
                      </ul>
                   </div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-10 lg:p-12 rounded-[3.5rem] border border-white/10 text-center">
                   <HeartPulse className="text-accent w-16 h-16 mx-auto mb-8 animate-pulse" />
                   <h3 className="text-2xl font-serif font-bold mb-6 text-white text-center">Synergie-Effekt</h3>
                   <p className="text-sm opacity-80 mb-10 text-white text-center">
                      In unserer Praxis kombinieren wir den Hämo-Laser oft mit unseren <strong>Kur-Infusionen</strong>. Das Licht sensibilisiert die Zellen, sodass Nährstoffe und Vitamine effizienter aufgenommen werden können.
                   </p>
                   <Link to={ROUTE_PATHS.INFUSIONSTHERAPIE} className="inline-flex bg-white text-primary px-10 py-5 rounded-xl font-bold hover:scale-105 transition-all shadow-xl border-none">
                      Infusionen entdecken
                   </Link>
                </div>
             </div>
          </div>

          <div className="text-center mb-16 text-center">
            <h2 className="text-3xl lg:text-4xl font-serif text-primary font-bold text-center">Lokale Laser-Anwendung</h2>
            <p className="text-muted-foreground font-medium mt-4 text-center">Präzise Bestrahlung für schnelle Resultate.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24 text-center">
            {[
              "Tennisarm",
              "Narbenentstörung",
              "Wunde Brustwarzen",
              "Sportverletzungen",
              "Triggerpunkte",
              "Gelenkschmerzen",
              "Hautinfekte",
              "Sehnenreizung"
            ].map((app, i) => (
              <div key={i} className="p-6 bg-white border border-border rounded-3xl text-center shadow-sm hover:border-accent transition-all text-center">
                <span className="font-bold text-primary text-sm font-serif text-center">{app}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PreisTransparenz 
        preisHint="Lasertherapie ab 45,- €" 
        hinweis="Gezielte Zellregeneration durch hochreine Lichtenergie."
      />

      {/* CTA */}
      <section className="py-24 bg-muted/20 border-t border-border text-center">
        <div className="container mx-auto px-4 max-w-4xl text-center">
           <ShieldCheck className="w-16 h-16 text-accent mx-auto mb-8 opacity-20" />
           <h2 className="text-3xl md:text-5xl font-serif text-primary mb-10 leading-tight font-bold text-center">Bereit für deine <br />Licht-Regeneration?</h2>
           <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="inline-flex bg-primary text-white px-12 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-2xl flex items-center gap-3 shadow-primary/20 border-none">
             Kostenfreie Vor-Analyse anfragen <ArrowRight className="w-6 h-6 text-white text-center" />
           </Link>
           <p className="text-xs text-muted-foreground mt-8 italic font-medium text-center">Abrechnung erfolgt nach Zeitaufwand (ca. 100 € / Std.) zzgl. evtl. Materialkosten.</p>
        </div>
      </section>
    </div>
  );
}
