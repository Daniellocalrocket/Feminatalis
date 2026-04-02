import React from "react";
import SEO from "@/components/SEO";
import { Gauge, Shield, BicepsFlexed } from "lucide-react";

export default function OzonTherapie() {
  const points = [
    { title: "Sauerstoff Plus Haut & Blut", desc: "Sauerstoff-Ozon-Gemisch reichert das Blut enorm mit Sauerstoff an." },
    { title: "Viren, Bakterien, Pilze", desc: "Ozon ist sterilisierend und stark antiviral/antibakteriell wirksam." },
    { title: "Zellulierung & Mitochondrien", desc: "Stimuliert die Mitochondrien zur Zellatmung und Reparatur." }
  ];

  return (
    <>
      <SEO title="Ozon-Sauerstoff-Therapie | Naturheilpraxis feminatalis" description="Grosse Eigenblutbehandlung mit Ozon. Steigert die Abwehr, reduziert Entzündungen und hilft bei chronischen Viruserkrankungen." />
      <section className="bg-background pt-32 pb-16"><div className="container mx-auto px-4 max-w-4xl text-center"><h1 className="text-4xl lg:text-5xl font-serif text-primary mb-6">Ozon-Sauerstoff-Therapie</h1><p className="text-xl text-muted-foreground mx-auto">Die Große Eigenblutbehandlung reichert ihr Blut mit aggressivem Sauerstoff (Ozon) an, welches Keime abtötet und die Immunabwehr stark anregt.</p></div></section>
      <section className="py-16 bg-card"><div className="container mx-auto px-4 max-w-5xl"><div className="grid md:grid-cols-3 gap-8">{points.map((p, idx) => (<div key={idx} className="bg-background p-8 rounded-xl border border-border"><h3 className="text-xl font-bold mb-2">{p.title}</h3><p className="text-sm text-muted-foreground">{p.desc}</p></div>))}</div></div></section>
    </>
  );
}
