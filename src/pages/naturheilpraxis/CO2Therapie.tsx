import React from "react";
import SEO from "@/components/SEO";
import { Activity, Wind, Zap, HeartPulse } from "lucide-react";

export default function CO2Therapie() {
  const benefits = [
    { title: "Bessere Durchblutung", desc: "CO2 (Quellgas) weitet die Blutgefäße sofort und stark, wodurch das Gewebe vermehrt mit Sauerstoff versorgt wird (Bohr-Effekt)." },
    { title: "Schmerzlinderung", desc: "Zelluläre Entzündungsstoffe werden abtransportiert. Ideal bei Verspannungen, Migräne und Gelenkschmerzen." },
    { title: "Gewebe-Regeneration", desc: "Fördert die Bildung neuer feiner Blutgefäße (Neovaskularisation) für verbesserte Heilung." },
    { title: "Kinderwunsch & Unterleib", desc: "Spezielle Anwendung zur Förderung der Durchblutung im Beckenbereich zur Vorbereitung einer Schwangerschaft." }
  ];

  return (
    <>
      <SEO 
        title="CO2-Therapie (Carboxytherapie) | Naturheilpraxis feminatalis" 
        description="Die CO2-Therapie nutzt medizinisches Kohlendioxid (Quellgas), um die Durchblutung und Sauerstoffversorgung extrem zu steigern. Ideal bei Schmerzen und Durchblutungsstörungen." 
      />

      <section className="bg-background pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-block bg-card text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            Gezielte Heilung durch Quellgas
          </div>
          <h1 className="text-4xl lg:text-5xl font-serif text-primary mb-6 leading-tight">
            CO2-Therapie (Carboxytherapie)
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Nutzen Sie den physiologischen Bohr-Effekt: Durch kleine Injektionen von medizinischem Quellgas unter die Haut zwingen wir den Körper, das Gewebe massiv mit Sauerstoff zu fluten.
          </p>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-serif text-primary mb-4">Wie funktioniert die Carboxytherapie?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Das medizinische CO2-Gas wird mit feinsten Nadeln in das Unterhautfettgewebe oder an Schmerzpunkte injiziert. Der Körper registriert diesen lokalen "Sauerstoffmangel" und reagiert sofort: Gefäße weiten sich, frisches, sauerstoffreiches Blut schießt ein, und Schlackenstoffe werden abtransportiert. Ein extrem potenter Heilungsreiz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-background p-8 rounded-xl border border-border flex gap-4 hover:border-accent transition-colors">
                <Wind className="w-8 h-8 text-accent shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
