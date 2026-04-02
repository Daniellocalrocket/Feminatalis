import React from "react";
import SEO from "@/components/SEO";

export default function TCM() {
  const points = [
    { title: "Kräuter & Qi", desc: "Zusammensetzung hochwirksamer Rezepturen, die Energie-Blockaden aufheben." },
    { title: "Kinderwunschunterstützung", desc: "Traditionell erprobte Methoden, um Kälte im Unterleib aufzulösen und die Einnistung zu verbessern." },
    { title: "Zungendiagnostik", desc: "Die Beschaffenheit, der Belag und Risse verraten viel über den organischen Zustand (zB Yin/Yang Mangel)." }
  ];

  return (
    <>
      <SEO title="TCM & Akupunktur | Naturheilpraxis feminatalis" description="Traditionelle Chinesische Medizin, Schröpfen, Moxa und Yin-Yang-Balance für Fruchtbarkeit und innere Ruhe." />
      <section className="bg-background pt-32 pb-16"><div className="container mx-auto px-4 max-w-4xl text-center"><h1 className="text-4xl lg:text-5xl font-serif text-primary mb-6">TCM (Traditionelle Chinesische Medizin)</h1><p className="text-xl text-muted-foreground mx-auto">Tausende von Jahren an Beobachtung und Systematik: Die TCM hilft auf sanft-komplexe Weise, Körper, Qi und Blut wieder ins Fließen zu bringen.</p></div></section>
      <section className="py-16 bg-card"><div className="container mx-auto px-4 max-w-5xl"><div className="grid md:grid-cols-3 gap-8">{points.map((p, idx) => (<div key={idx} className="bg-background p-8 rounded-xl border border-border hover:border-accent"><h3 className="text-xl font-bold mb-2">{p.title}</h3><p className="text-sm text-muted-foreground">{p.desc}</p></div>))}</div></div></section>
    </>
  );
}
