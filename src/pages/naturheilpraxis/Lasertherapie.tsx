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
        badge="Medizin des Lichts"
        title={<>Photon-Energie: <br /><span className="text-accent italic font-light">Lasertherapie der Zukunft</span></>}
        subtitle="Licht ist Energie, Information und Heilung. Mit hochmodernen Low-Level-Lasern stimulieren wir direkt die Kraftwerke deiner Zellen, um Entzündungen zu löschen und die Regeneration auf Lichtgeschwindigkeit zu bringen."
        imageSrc="https://images.unsplash.com/photo-1579152276503-3406322316e6?q=80&w=2070&auto=format&fit=crop"
        imageAlt="Lasertherapie Behandlung"
        imageKey="img_hero_lasertherapie"
      >
        <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-primary text-white px-10 py-5 rounded-2xl font-bold hover:shadow-2xl transition-all shadow-xl active:scale-95 flex items-center gap-2">
          Analyse-Gespräch anfragen <ArrowRight size={20} />
        </Link>
      </SplitScreenHero>

      {/* Science: Cytochrom-c-Oxidase */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl lg:text-5xl font-serif text-primary mb-10 leading-tight">Wie Licht deine <br /><span className="text-accent italic">Zellen aktiviert</span></h2>
          <div className="prose prose-lg mx-auto text-muted-foreground leading-relaxed">
            <p>
              In deinen Mitochondrien sitzt ein ganz spezieller „Lichtfänger“: das Enzym <strong>Cytochrom-c-Oxidase</strong>. Wenn das Laserlicht auf dieses Enzym trifft, wird es sofort aktiviert und kurbelt die Produktion von ATP (Zellenergie) massiv an. Das Gewebe erhält einen energetischen Reboot, Schwellungen klingen ab und die Selbstheilung wird radikal beschleunigt.
            </p>
            <p className="mt-6">
              In unserer Praxis nutzen wir sowohl die lokale Lasertherapie für gezielte Schmerzpunkte als auch den innovativen <strong>Haemo-Laser</strong> für eine systemische Wirkung über die Blutbahn.
            </p>
          </div>
        </div>
      </section>

      {/* Effects Grid */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left mb-24">
            {[
              { title: "Zell-Turbo", desc: "Steigerung der ATP-Synthese um bis zu 150% für sofortige Vitalität.", icon: <Zap className="w-8 h-8 text-accent" /> },
              { title: "Mikro-Zirkulation", desc: "Verbesserung der fließfähigen Eigenschaften des Blutes bis in die kleinsten Kapillaren.", icon: <HeartPulse className="w-8 h-8 text-accent" /> },
              { title: "Anti-Inflammatorisch", desc: "Schnelle Reduktion von Schwellungen und Entzündungsprozessen ohne Chemie.", icon: <ShieldCheck className="w-8 h-8 text-accent" /> },
              { title: "Wundheilung", desc: "Beschleunigte Kollagensynthese für Haut, Sehnen und Bänder.", icon: <Sparkles className="w-8 h-8 text-accent" /> }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-[3rem] border border-border hover:border-accent transition-all hover:shadow-xl group">
                <div className="bg-muted/30 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                   {item.icon}
                </div>
                <h4 className="font-bold text-primary mb-3 font-serif text-xl leading-tight">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed font-medium opacity-80">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Haemo-Laser Spectral Section */}
          <div className="bg-primary text-white p-12 lg:p-20 rounded-[5rem] shadow-2xl relative overflow-hidden mb-24">
             <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-accent/20 -mr-64 -mt-64 rounded-full blur-[100px] opacity-20"></div>
             <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10 text-left">
                <div className="space-y-8">
                   <h2 className="text-3xl lg:text-5xl font-serif font-bold text-white leading-tight">Haemo-Laser: <br />Das Farbspektrum der Heilung</h2>
                   <p className="text-lg opacity-90 leading-relaxed font-medium">
                     Durch die intravenöse Bestrahlung des Blutes erreichen wir jede Zelle deines Körpers. Je nach Indikation nutzen wir unterschiedliche Frequenzen:
                   </p>
                   <div className="grid gap-4">
                      {[
                        { color: "Rot", effect: "Maximum an Zellenergie, Durchblutung & Herz-Kreislauf-Support.", bg: "bg-red-500" },
                        { color: "Blau", effect: "Starke Entzündungshemmung, Keimbekämpfung & Stickoxid-Freisetzung.", bg: "bg-blue-500" },
                        { color: "Gelb", effect: "Stoffwechsel-Aktivierung, Entgiftung & antidepressive Wirkung.", bg: "bg-yellow-400" },
                        { color: "Grün", effect: "Optimierte Sauerstoffbindung & Regeneration der roten Blutkörperchen.", bg: "bg-green-500" }
                      ].map((spec, i) => (
                        <div key={i} className="flex items-center gap-6 bg-white/10 p-5 rounded-2xl border border-white/10 backdrop-blur-sm">
                           <div className={`w-12 h-12 rounded-full ${spec.bg} shadow-lg shrink-0 border-2 border-white/20`}></div>
                           <div>
                              <span className="font-bold text-white block">{spec.color}-Laser</span>
                              <span className="text-sm opacity-80">{spec.effect}</span>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-12 rounded-[4rem] border border-white/20 text-center">
                   <Sun className="text-accent w-20 h-20 mx-auto mb-8 animate-pulse" />
                   <h3 className="text-2xl font-serif font-bold mb-6 text-white">Systemisches Biohacking</h3>
                   <p className="text-lg opacity-80 mb-10 leading-relaxed italic">
                      „Der Haemo-Laser ist wie eine interne Lichtdusche. Er macht das Blut fließfähiger, verbessert die Sauerstoffaufnahme und weckt die Lebensgeister – besonders effektiv bei Burnout und Long-Covid.“
                   </p>
                   <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="inline-flex bg-white text-primary px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-all shadow-xl">
                      Therapie anfragen
                   </Link>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Lokale Laser-Anwendung */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif text-primary font-bold">Lokale Laser-Anwendung</h2>
            <p className="text-muted-foreground font-medium mt-4">Präzise Bestrahlung für schnelle Resultate.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
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
              <div key={i} className="p-6 bg-white border border-border rounded-3xl text-center shadow-sm hover:border-accent transition-all">
                <span className="font-bold text-primary text-sm font-serif">{app}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PreisTransparenz 
        preisHint="Lasertherapie ab 60,- €" 
        hinweis="Gezielte Zellregeneration durch hochreine Lichtenergie."
      />

      {/* CTA */}
      <section className="py-24 bg-muted/20 border-t border-border text-center">
        <div className="container mx-auto px-4 max-w-4xl text-center">
           <ShieldCheck className="w-16 h-16 text-accent mx-auto mb-8 opacity-20" />
           <h2 className="text-3xl md:text-5xl font-serif text-primary mb-10 leading-tight font-bold">Bereit für deine <br />Licht-Regeneration?</h2>
           <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="inline-flex bg-primary text-white px-12 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-2xl flex items-center gap-3">
             Kostenfreie Vor-Analyse anfragen <ArrowRight className="w-6 h-6" />
           </Link>
           <p className="text-xs text-muted-foreground mt-8 italic font-medium">Abrechnung erfolgt nach Zeitaufwand (ca. 100 € / Std.) zzgl. evtl. Materialkosten.</p>
        </div>
      </section>
    </div>
  );
}
