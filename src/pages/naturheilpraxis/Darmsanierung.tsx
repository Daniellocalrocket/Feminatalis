import React from "react";
import SEO from "@/components/SEO";

export default function Darmsanierung() {
  const points = [
    { title: "Mikrobiom-Analyse", desc: "Zusammensetzung von Flora, Leaky-Gut und Entzündungsmarkern im Stuhl." },
    { title: "Schleimhaut-Regeneration", desc: "Speziell abgestimmtes Schema, um eine durchlässige Schleimhaut zu verschließen (L-Glutamin, Probiotika)." },
    { title: "Immun-Zentrum Darm", desc: "Zirka 80% des Immunsystems sind im Darm lokalisiert." }
  ];

  return (
    <>
      <SEO title="Darmanalyse & Mikrobiom | Naturheilpraxis feminatalis" description="Mikrobiom und Leaky-Gut Stuhldiagnostik gepaart mit individueller Darmsanierung. Immunsystemstärkung von innen." />
      <section className="bg-background pt-32 pb-16"><div className="container mx-auto px-4 max-w-4xl text-center"><h1 className="text-4xl lg:text-5xl font-serif text-primary mb-6">Darmanalyse & Mikrobiom</h1><p className="text-xl text-muted-foreground mx-auto">Die Wurzel des Immunsystems und der Gesundheit. Wir betrachten die Besiedlung im tiefen Detail und justieren die Flora neu, als wichtigste Grundlage für Zellgesundheit und Fruchtbarkeit.</p></div></section>
      <section className="py-16 bg-card"><div className="container mx-auto px-4 max-w-5xl"><div className="grid md:grid-cols-3 gap-8">{points.map((p, idx) => (<div key={idx} className="bg-background p-8 rounded-xl border border-border hover:border-accent"><h3 className="text-xl font-bold mb-2">{p.title}</h3><p className="text-sm text-muted-foreground">{p.desc}</p></div>))}</div></div></section>
    </>
  );
}
