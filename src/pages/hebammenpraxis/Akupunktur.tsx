import React from "react";
import SEO from "@/components/SEO";

export default function Akupunktur() {
  const points = [
    { title: "Geburtsvorbereitende Akupunktur", desc: "Zertifiziert nach Röhmer ab der 36. SSW für eine leichtere, oft kürzere Geburt durch Muttermundsreifung." },
    { title: "Schwangerschaftsbeschwerden", desc: "Sichere Nadelung gegen Sodbrennen, Ischiasschmerzen oder Übelkeit." },
    { title: "Wochenbett & Stillzeit", desc: "Milchbildungsfördernd oder rückbildungsunterstützend, absolut kindersicher." }
  ];

  return (
    <>
      <SEO title="Akupunktur | Hebammenpraxis feminatalis" description="Gezielte, schonende Akupunktur bei Schwangerschaftsbeschwerden sowie klassische geburtsvorbereitende Akupunktur nach Röhmer." />
      <section className="bg-background pt-32 pb-16"><div className="container mx-auto px-4 max-w-4xl text-center"><h1 className="text-4xl lg:text-5xl font-serif text-primary mb-6">Hebammen-Akupunktur</h1><p className="text-xl text-muted-foreground mx-auto">Feinste Nadeln - Große Wirkung. Die Akupunktur (TCM) in der Hebammenbetreuung ist nicht mehr wegzudenken und verkürzt nachweislich die Eröffnungsphase.</p></div></section>
      <section className="py-16 bg-card"><div className="container mx-auto px-4 max-w-5xl"><div className="grid md:grid-cols-3 gap-8">{points.map((p, idx) => (<div key={idx} className="bg-background p-8 rounded-xl border border-border hover:border-accent"><h3 className="text-xl font-bold mb-2">{p.title}</h3><p className="text-sm text-muted-foreground">{p.desc}</p></div>))}</div></div></section>
    </>
  );
}
