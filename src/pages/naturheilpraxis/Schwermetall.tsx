import React from "react";
import SEO from "@/components/SEO";

export default function Schwermetall() {
  const points = [
    { title: "Chelat-Therapie", desc: "Chelatbildner wie DMSA, EDTA verbinden sich im Körper mit giftigen Schwermetallen und spülen sie aus." },
    { title: "Quecksilber & Amalgam", desc: "Besonderheit bei neurologischen Beschwerden, die auf Jahrzehnte alte Zahnfüllungen zurückführen." },
    { title: "Mitochondrien-Bremse lösen", desc: "Schwermetalle blockieren Enzyme. Nur ohne sie können die Kraftwerke wieder ATP produzieren." }
  ];

  return (
    <>
      <SEO title="Schwermetallausleitung | Naturheilpraxis feminatalis" description="Gezielte Chelat-Therapie bei Quecksilber, Blei oder Aluminium im Körper." />
      <section className="bg-background pt-32 pb-16"><div className="container mx-auto px-4 max-w-4xl text-center"><h1 className="text-4xl lg:text-5xl font-serif text-primary mb-6">Schwermetallausleitung</h1><p className="text-xl text-muted-foreground mx-auto">Tiefsitzende Umweltgifte verdrängen wichtige Vitalstoffe und lähmen den Stoffwechsel und die Mitochondrien. Mit Infusionstherapien und dem Urintest spüren wir diese auf und entfernen sie aktiv (Chelatierung).</p></div></section>
      <section className="py-16 bg-card"><div className="container mx-auto px-4 max-w-5xl"><div className="grid md:grid-cols-3 gap-8">{points.map((p, idx) => (<div key={idx} className="bg-background p-8 rounded-xl border border-border hover:border-accent"><h3 className="text-xl font-bold mb-2">{p.title}</h3><p className="text-sm text-muted-foreground">{p.desc}</p></div>))}</div></div></section>
    </>
  );
}
