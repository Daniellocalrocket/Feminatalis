import React from "react";
import SEO from "@/components/SEO";
import { Home, Baby, HeartPulse, ShieldCheck, Scale } from "lucide-react";

export default function Wochenbettbetreuung() {
  return (
    <>
      <SEO 
        title="Wochenbettbetreuung in Bad Schönborn | Hebamme Angela Deschner" 
        description="Medizinische und emotionale Wochenbettbetreuung zu Hause. Stillberatung, Nabelpflege, Rückbildungskontrolle und Hilfe bei Regulationsstörungen." 
      />

      <section className="bg-background pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-block bg-card text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            Kassenleistung mit Hebammen-Expertise
          </div>
          <h1 className="text-4xl lg:text-5xl font-serif text-primary mb-6 leading-tight">
            Wochenbettbetreuung & Hausbesuche
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Die Zeit nach der Geburt ist eine fundamentale Phase der körperlichen Heilung und der psychischen Anpassung. Wir begleiten Sie mit 33 Jahren Fachwissen direkt bei Ihnen zu Hause.
          </p>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-background p-10 rounded-2xl border border-border">
              <h2 className="text-2xl font-serif text-primary mb-6">Was beinhaltet die Betreuung?</h2>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <HeartPulse className="w-6 h-6 text-accent shrink-0" />
                  <div>
                    <strong className="text-foreground block">Mütterliche Rückbildungskontrolle</strong>
                    <span className="text-sm text-muted-foreground">Medizinische Überwachung der Gebärmutterrückbildung, Heilung von Geburtsverletzungen (Dammriss/Kaiserschnitt) und Vitalparameter-Check.</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Baby className="w-6 h-6 text-accent shrink-0" />
                  <div>
                    <strong className="text-foreground block">Neugeborenen-Überwachung</strong>
                    <span className="text-sm text-muted-foreground">Gewichtskontrolle, Nabelpflege, Überwachung von Neugeborenengelbsucht (Ikterus) und Beurteilung der neurologischen Reflexe.</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Scale className="w-6 h-6 text-accent shrink-0" />
                  <div>
                    <strong className="text-foreground block">Stillberatung & Ernährungsaufbau</strong>
                    <span className="text-sm text-muted-foreground">Professionelle Unterstützung beim Milcheinschuss, Vermeidung von Mastitis (Brustdrüsenentzündung) und Gedeihenskontrolle.</span>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <div className="mb-10">
                <ShieldCheck className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-serif text-primary mb-4">Medizinische Sicherheit zu Hause</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Viele junge Familien fühlen sich in den ersten Tagen zu Hause alleingelassen. Unsere Hausbesuche garantieren, dass Mutter und Kind medizinisch überwacht werden, ohne den Stress eines Praxisaufenthalts auf sich nehmen zu müssen. Wir erkennen Abweichungen von der physiologischen Norm (wie Infektionen oder Entzündungen) sofort und leiten rechtzeitig Gegenmaßnahmen ein.
                </p>
              </div>
              
              <div className="bg-primary text-primary-foreground p-8 rounded-xl">
                <h4 className="font-bold mb-2">Ablauforganisation (Kassenleistung)</h4>
                <p className="text-sm opacity-90 mb-4">Die Kosten für die Wochenbettbetreuung werden regulär von allen gesetzlichen und privaten Krankenkassen übernommen (bis zur 12. Woche nach der Geburt, bei Bedarf länger).</p>
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <Home className="w-4 h-4" /> Hausbesuche im Großraum Bad Schönborn
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
