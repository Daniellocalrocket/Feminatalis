import React from "react";
import SEO from "@/components/SEO";
import { ShieldAlert, Activity, HeartPulse } from "lucide-react";

export default function LongCovid() {
  return (
    <>
      <SEO 
        title="Long-Covid & Erschöpfung Hilfe | Naturheilpraxis feminatalis" 
        description="Fühlen Sie sich noch immer nicht wie Sie selbst? Ganzheitliche Hilfe bei Post-Covid, extremen Erschöpfungssyndromen und Brain-Fog durch gezielte Mitochondrien-Medizin." 
      />

      <section className="bg-background pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-block bg-card text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            Post-Virale Medizin
          </div>
          <h1 className="text-4xl lg:text-5xl font-serif text-primary mb-6 leading-tight">
            Hilfe bei Long-Covid & Erschöpfung
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Wenn das Standardlabor keine Auffälligkeiten zeigt, aber Sie trotzdem keine 10 Minuten spazieren gehen können, ohne zwei Tage völlig entkräftet im Bett zu liegen.
          </p>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-background p-10 rounded-3xl border border-border shadow-sm text-center mb-16">
            <ShieldAlert className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-3xl font-serif text-primary mb-4">Das "Notstrom-Syndrom" durchbrechen</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Bei langanhaltender Erschöpfung nach Infektionen (wie Long-Covid) schalten die zellulären Kraftwerke – die Mitochondrien – in eine Art "Winterschlaf", um sich vor fehlerhaften Reaktionen zu schützen. Das Ergebnis: Sauerstoff kommt nicht mehr auf Zellebene an. Der Energiestoffwechsel (ATP-Produktion) ist lahmgelegt. Unser Ziel in der Naturheilpraxis ist es, diese Reize durch hochdosierte Mikronährstoffe und Zelltraining (IHHT) aufzubrechen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-background border border-border rounded-xl">
              <Activity className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Tiefen-Diagnostik bei Erschöpfung</h3>
              <p className="text-muted-foreground">
                Wir messen nicht nur das reine Eisen, sondern den Ferritin-Speicher und die Transferrin-Sättigung. Wir überprüfen gezielt die Nährstoffe, die für die Bildung zellulärer Energie (ATP) unerlässlich sind: Q10-Status, Vitamin B-Komplex, Magnesium und die antioxidative Kapazität Ihres Blutes.
              </p>
            </div>
            <div className="p-8 bg-background border border-border rounded-xl">
              <HeartPulse className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Ursachenorientierte Therapie</h3>
              <p className="text-muted-foreground">
                Mithilfe von maßgeschneiderten Infusionstherapien, die den Magen-Darm-Trakt absichtlich umgehen, fluten wir Ihren Körper mit den fehlenden Nährwerten an. Über die Blutzirkulation kommen die Nährstoffe im Zelltraining schließlich direkt wieder in Ihren Mitochondrien an.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
