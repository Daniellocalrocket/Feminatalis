import React from "react";
import SEO from "@/components/SEO";
import { Droplet, FastForward, ActivitySquare, ShieldCheck } from "lucide-react";

export default function Infusionstherapie() {
  const infusions = [
    { title: "Vitamin-C Hochdosis", desc: "Bei akuten oder chronischen Infekten, EBV-Reaktivierung und starkem oxidativen Stress. Baut das Immunsystem aggressiv wieder auf." },
    { title: "Mitochondrien-Mix", desc: "Speziell für Zelltraining (IHHT) und Kinderwunsch: B-Komplex, Q10 und Aminosäuren direkt in die Blutbahn für sofortige ATP-Produktion." },
    { title: "Eisen-Aufbau", desc: "Bei starkem Eisenmangel, Ferritin-Defizit vor der Geburt oder extremen Blutverlusten im Wochenbett (auf individueller Laborbasis)." },
    { title: "Neuro- & Stress-Balance", desc: "Magnesium, B12 und Taurin zur sofortigen Dämpfung des sympathischen Nervensystems bei Stress, Burnout und Schlafstörungen." }
  ];

  return (
    <>
      <SEO 
        title="Infusionstherapie & Vitamin-Infusionen | Naturheilpraxis feminatalis" 
        description="Umgehen Sie den Magen-Darm-Trakt: Hochdosierte Vitamin-, Eisen- und Mitochondrien-Infusionen für maximale Bioverfügbarkeit in Bad Schönborn." 
      />

      <section className="bg-background pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-block bg-card text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            Intravenöse Nährstoff-Flutung
          </div>
          <h1 className="text-4xl lg:text-5xl font-serif text-primary mb-6 leading-tight">
            Infusionstherapie
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            100% Aufnahme ohne Verluste. Wir fluten Ihren Körper über den Blutkreislauf gezielt mit den Nährstoffen, die im Labor als defizitär entlarvt wurden.
          </p>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-serif text-primary mb-4">Warum Infusionen statt Tabletten?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Selbst die besten Nahrungsergänzungsmittel müssen die Magen-Darm-Schranke passieren. Bei Stress, Entzündungen im Darm oder chronischer Erschöpfung (Leaky Gut) kommen oft nur noch 20-30% der Stoffe in der Zelle an. Eine Infusion garantiert 100% Bioverfügbarkeit in Minuten.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {infusions.map((inf, idx) => (
              <div key={idx} className="bg-background p-8 rounded-xl border border-border flex gap-4 hover:border-accent transition-colors">
                <Droplet className="w-8 h-8 text-accent shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{inf.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{inf.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-background p-10 rounded-2xl border border-border">
            <h3 className="text-2xl font-serif text-primary mb-6 flex items-center gap-3">
              <ShieldCheck className="text-accent" /> Laborbasiert & Sicher
            </h3>
            <p className="text-muted-foreground mb-4">
              Wir verabreichen keine standardisierten "Wellness-Drips". Jede Infusionsserie wird exakt auf Ihre vorherigen Vollblut-Laborwerte abgestimmt. Zu viel ist genauso schädlich wie zu wenig.
            </p>
            <ul className="grid md:grid-cols-2 gap-4 mt-6">
              <li className="flex items-center gap-2 text-sm font-semibold"><FastForward className="w-4 h-4 text-accent" /> Umgehung der Verdauung</li>
              <li className="flex items-center gap-2 text-sm font-semibold"><ActivitySquare className="w-4 h-4 text-accent" /> Sofortige Zell-Verfügbarkeit</li>
              <li className="flex items-center gap-2 text-sm font-semibold"><FastForward className="w-4 h-4 text-accent" /> Behebung jahrelanger Defizite</li>
              <li className="flex items-center gap-2 text-sm font-semibold"><ActivitySquare className="w-4 h-4 text-accent" /> Ideale Kombi mit Zelltraining (IHHT)</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
