import React from "react";
import SEO from "@/components/SEO";

export default function Rueckbildung() {
  const points = [
    { title: "Beckenboden-Fokus", desc: "Zerstörte oder gestörte Strukturen rund um Uterus und Harnleiter systematisch schließen." },
    { title: "Rectusdiastase", desc: "Spezifisches Muskeltraining, um den Bauchmuskelspalt der Linea Alba aktiv zu schließen." },
    { title: "Zelluläre Energie", desc: "Kein klassisches 'Schwitzen', sondern neurologische Ansteuerung kleinster Muskelfasern." }
  ];

  return (
    <>
      <SEO title="Rückbildungskurse | Hebammenpraxis feminatalis" description="Professionelle Rückbildung in Bad Schönborn. Fokustraining für den Beckenboden, Rectusdiastase und tiefgreifende Stabilität." />
      <section className="bg-background pt-32 pb-16"><div className="container mx-auto px-4 max-w-4xl text-center"><h1 className="text-4xl lg:text-5xl font-serif text-primary mb-6">Rückbildung & Beckenboden</h1><p className="text-xl text-muted-foreground mx-auto">Die Monate nach der Geburt fordern den Beckenboden maximal. Ich korrigiere aktiv und medizinkonform Fehlhaltungen, Schmerzen und Haltungsschwäche.</p></div></section>
      <section className="py-16 bg-card"><div className="container mx-auto px-4 max-w-5xl"><div className="grid md:grid-cols-3 gap-8">{points.map((p, idx) => (<div key={idx} className="bg-background p-8 rounded-xl border border-border hover:border-accent"><h3 className="text-xl font-bold mb-2">{p.title}</h3><p className="text-sm text-muted-foreground">{p.desc}</p></div>))}</div></div></section>
    </>
  );
}
