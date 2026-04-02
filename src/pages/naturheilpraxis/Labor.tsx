import React from "react";
import SEO from "@/components/SEO";
import { Microscope, ActivitySquare, TestTube2, AlertTriangle } from "lucide-react";

export default function Labor() {
  return (
    <>
      <SEO 
        title="Tiefgehende Labor Diagnostik & Vollblutanalyse | feminatalis" 
        description="Faktenbasierte Labor- und Blutanalysen in Bad Schönborn. Wir untersuchen Hormone, Vollblutwerte und den Mikrobiom-Status für zielgerichtete Therapien." 
      />

      <section className="bg-background pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-block bg-card text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            Naturheilkunde trifft Wissenschaft
          </div>
          <h1 className="text-4xl lg:text-5xl font-serif text-primary mb-6 leading-tight">
            Labor & Diagnostik abseits des Standards
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Gute Diagnostik ist der Grundstein jeder erfolgreichen Therapie. Ein einfaches "Kleines Blutbild" der Krankenkasse genügt selten, um Zellschwäche oder chronische Entzündungen zu identifizieren.
          </p>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 max-w-6xl">
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-background p-8 rounded-xl shadow-sm border border-border">
              <Microscope className="w-10 h-10 text-accent mb-6" />
              <h3 className="text-xl font-serif text-primary mb-4">Vollblut-Mineralstoffanalyse</h3>
              <p className="text-sm text-muted-foreground">Standard-Labore messen Mineralstoffe oft nur im Blutserum (der klaren Flüssigkeit). Dort sind aber viele Mineralstoffe gar nicht gebunden. Wir messen das Zell-Innere (das Vollblut), um den wahren Mangel im Körper aufzudecken.</p>
            </div>
            <div className="bg-background p-8 rounded-xl shadow-sm border border-border">
              <TestTube2 className="w-10 h-10 text-accent mb-6" />
              <h3 className="text-xl font-serif text-primary mb-4">Ganzheitlicher Hormonstatus</h3>
              <p className="text-sm text-muted-foreground">Abstimmung der Geschlechtshormone (Östrogendominanz, Progesteronmangel), der Schilddrüsenwerte (nicht nur der TSH-Wert, sondern auch fT3/fT4) und des Stresshormons Cortisol im Tagesprofil.</p>
            </div>
            <div className="bg-background p-8 rounded-xl shadow-sm border border-border">
              <ActivitySquare className="w-10 h-10 text-accent mb-6" />
              <h3 className="text-xl font-serif text-primary mb-4">Mikrobiom Diagnostik</h3>
              <p className="text-sm text-muted-foreground">Ein gesunder Darm ist extrem wichtig für das Immunsystem und die Nährstoffaufnahme. Eine umfassende Untersuchung gibt Aufschluss über Entzündungsmarker oder Pilzbefall.</p>
            </div>
          </div>

          <div className="bg-primary text-primary-foreground p-10 rounded-2xl flex flex-col md:flex-row items-center gap-8 shadow-xl">
            <div className="bg-white/10 p-4 rounded-full shrink-0">
              <AlertTriangle className="w-12 h-12 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-serif mb-2">Warum Kassenmedizin hier oft stoppt</h2>
              <p className="opacity-90 leading-relaxed font-sans">
                Kassenärztliche Labore scannen meist nur auf pathologisch "kranke" Werte mit weiten Referenzbereichen. Wir suchen nicht nach Krankheit, wir suchen nach der <span className="font-bold border-b border-accent pb-0.5">optimalen Gesundheit</span>. Auch wenn Sie "im Normbereich" liegen, kann es sein, dass Ihnen 30% Leistung für volle Zell-Energie fehlen.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
