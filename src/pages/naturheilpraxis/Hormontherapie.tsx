import React from "react";
import SEO from "@/components/SEO";

export default function Hormontherapie() {
  const points = [
    { title: "Speichel- statt nur Bluttests", desc: "Freie Hormone, die der Zelle aktuell zur Verfügung stehen, messen wir optimalerweise im Speichel." },
    { title: "Bioidentische Hormonersatztherapie", desc: "Natürliche Hormone statt synthetischer Produkte – der Körper erkennt diese Verbindungen exakt wieder." },
    { title: "Nebennierenschwäche", desc: "Cortisol-Tagesprofil zur Analyse von Burnout und Stress-Parametern, mit gezieltem Pflanzen-Einsatz." }
  ];

  return (
    <>
      <SEO title="Bioidentische Hormontherapie | Naturheilpraxis feminatalis" description="Diagnostik von Hormonmangel via Speicheltest. Regulierung durch naturidentische Hormone für Frauen und Männer." />
      <section className="bg-background pt-32 pb-16"><div className="container mx-auto px-4 max-w-4xl text-center"><h1 className="text-4xl lg:text-5xl font-serif text-primary mb-6">Bioidentische Hormontherapie</h1><p className="text-xl text-muted-foreground mx-auto">Wenn der Hormonhaushalt kippt, hilft keine Einheits-Pille. Wir gleichen Progesteron, Testosteron und Östrogen-Dominanzen mit molekular identischen Hormonen aus pflanzlichen Grundstoffen sanft aus.</p></div></section>
      <section className="py-16 bg-card"><div className="container mx-auto px-4 max-w-5xl"><div className="grid md:grid-cols-3 gap-8">{points.map((p, idx) => (<div key={idx} className="bg-background p-8 rounded-xl border border-border hover:border-accent"><h3 className="text-xl font-bold mb-2">{p.title}</h3><p className="text-sm text-muted-foreground">{p.desc}</p></div>))}</div></div></section>
    </>
  );
}
