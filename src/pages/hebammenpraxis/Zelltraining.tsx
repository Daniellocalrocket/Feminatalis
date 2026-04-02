import React from "react";
import SEO from "@/components/SEO";
import { Wind, Gauge, Sparkles, Brain } from "lucide-react";

export default function Zelltraining() {
  return (
    <>
      <SEO 
        title="IHHT Zelltraining & Mitochondrien-Therapie | feminatalis" 
        description="Regenerieren Sie Ihre Zellen mit dem IHHT Sauerstoff-Intervalltraining in unserer Naturheilpraxis. Gegen Erschöpfung, Long-Covid und für maximale Energie." 
      />

      <section className="bg-background pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-block bg-card text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            Mitochondriale Spitzenmedizin
          </div>
          <h1 className="text-4xl lg:text-5xl font-serif text-primary mb-6 leading-tight">
            Zelltraining (IHHT)
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Unser Intervall-Hypoxie-Hyperoxie-Training (IHHT) ist wie ein Höhentraining für Ihre Zellen. Es erneuert Ihre Mitochondrien tiefgreifend, während Sie völlig entspannt atmen.
          </p>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-serif text-primary mb-6">Alte Zellen abbauen, frische Energie aufbauen</h2>
              <p className="text-muted-foreground mb-4">
                Unsere Mitochondrien sind die Kraftwerke unserer Zellen. Durch Stress, Umweltgifte oder chronische Erkrankungen (wie Long-Covid) vergrößern sich defekte Mitochondrien und verbrauchen wertvolle Energie, anstatt sie zu produzieren.
              </p>
              <p className="text-muted-foreground mb-6">
                Beim IHHT wechseln sich über eine Atemmaske Phasen mit niedrigem Sauerstoff (Höhenluft) und erhöhtem Sauerstoff ab. Für den Körper ist dies das Signal, alte, beschädigte Mitochondrien zu vernichten und stattdessen neue, leistungsstarke Kraftwerke aufzubauen.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Sparkles className="text-accent shrink-0" />
                  <span className="text-foreground font-medium">Sofortiger Energie-Boost nach den ersten Sitzungen</span>
                </li>
                <li className="flex items-center gap-3">
                  <Wind className="text-accent shrink-0" />
                  <span className="text-foreground font-medium">Sanft, nicht-invasiv und extrem entspannend</span>
                </li>
                <li className="flex items-center gap-3">
                  <Brain className="text-accent shrink-0" />
                  <span className="text-foreground font-medium">Verbessert Konzentration und Schlafqualität drastisch</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-background p-8 rounded-2xl border border-border">
              <h3 className="text-2xl font-serif text-primary mb-6">Für wen ist IHHT geeignet?</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-foreground flex items-center gap-2 mb-2"><Gauge className="w-5 h-5 text-accent" /> Kinderwunsch & Schwangerschaft</h4>
                  <p className="text-sm text-muted-foreground">Steigert die Qualität der weiblichen (und männlichen) Keimzellen massiv und bereitet den Körper auf den Energieakt der Geburt vor.</p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground flex items-center gap-2 mb-2"><Gauge className="w-5 h-5 text-accent" /> Erschöpfungssyndrome & Burnout</h4>
                  <p className="text-sm text-muted-foreground">Der Goldstandard bei Erschöpfung: Wir holen Ihren Körper aus dem Notlauf-Programm, in dem er nur noch überlebt, statt zu leben.</p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground flex items-center gap-2 mb-2"><Gauge className="w-5 h-5 text-accent" /> Post-Virale Erkrankungen (Long-Covid)</h4>
                  <p className="text-sm text-muted-foreground">Löst die zelluläre Sauerstoffblockade, die nach schweren viralen Infekten die Mitochondrien lähmt.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
