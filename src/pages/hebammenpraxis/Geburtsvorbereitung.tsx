import React from "react";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "@/lib/index";
import { ShieldCheck, ArrowRight, Heart, Brain, UserCheck, BookOpen, Crown, AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Geburtsvorbereitung() {
  return (
    <div className="bg-background min-h-screen">
      <SEO 
        title="Geburtsvorbereitung | Klassisches Hebammenwissen" 
        description="Ihre solide Basis für die Geburt. Klassisches Hebammenwissen, Atemtechniken und fundierte Aufklärung, um Ängste abzubauen." 
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-border/50">
        <div className="absolute top-0 left-0 w-1/4 h-full bg-primary/5 -z-10 rounded-r-[100px]" />
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-4xl">
            <span className="bg-primary/10 text-primary px-5 py-2 rounded-full text-xs font-black mb-8 inline-block uppercase tracking-[0.2em] shadow-sm">
              Säule 1: Basis-Wissen
            </span>
            <h1 className="text-5xl lg:text-7xl font-serif text-primary mb-8 leading-[1.1]">
              Klassisches Hebammenwissen trifft auf <br />
              <span className="text-orange-600">Sicherheit.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl">
              Wir bereiten Sie auf das Wunder der Geburt vor. Mit bewährtem Hebammenwissen als starkem Fundament, um Ängste abzubauen und den Kopf auf die bevorstehende Aufgabe einzustellen.
            </p>
            <div className="flex flex-wrap gap-5">
               <Link to={ROUTE_PATHS.CONTACT} className="bg-primary text-white px-10 py-5 rounded-2xl font-bold hover:shadow-2xl transition-all shadow-xl active:scale-95 flex items-center gap-2">
                 Basis-Kurs buchen
               </Link>
               <a href="#premium-upsell" className="bg-orange-50 text-orange-700 border border-orange-200 px-10 py-5 rounded-2xl font-bold hover:bg-orange-100 transition-all flex items-center gap-2 group">
                 Zum Premium-Modul <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
               </a>
            </div>
          </div>
        </div>
      </section>

      {/* Das Basis-Fundament */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-4xl font-serif text-primary mb-6">Das Fundament der klassischen Vorbereitung</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Der klassische Geburtsvorbereitungskurs (oft eine Kassenleistung) legt das intellektuelle Fundament. Sie lernen den Prozess verstehen, was Ihnen Sicherheit und innere Ruhe gibt.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <BookOpen className="text-blue-600" />, title: "Die Phasen der Geburt", desc: "Verstehen Sie genau, was in Ihrem Körper während der Eröffnungs-, Übergangs- und Austrittsphase vor sich geht." },
              { icon: <Brain className="text-primary" />, title: "Schmerz & Angst", desc: "Demystifizierung des Geburtsschmerzes. Wissen baut Ängste ab und hilft, Verkrampfungen im Vorfeld mental zu adressieren." },
              { icon: <Heart className="text-red-500" />, title: "Stillen & Wochenbett", desc: "Die allerersten Tage mit dem Baby. Wie Sie das Bonding optimal gestalten und sich auf das Wochenbett vorbereiten." }
            ].map((col, i) => (
               <div key={i} className="bg-primary/5 p-10 rounded-[2.5rem] border border-primary/10">
                 <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                   {col.icon}
                 </div>
                 <h3 className="text-xl font-serif text-primary mb-3">{col.title}</h3>
                 <p className="text-muted-foreground leading-relaxed">{col.desc}</p>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bedarf Wecken / Pain Point */}
      <section className="py-24 bg-gray-50 border-y border-border/50 relative overflow-hidden">
        <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-96 h-96 bg-red-100 rounded-full blur-[100px] opacity-40 mix-blend-multiply" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-red-100">
                <AlertTriangle size={16} /> Wichtig zu wissen
              </div>
              <h2 className="text-4xl font-serif text-primary leading-tight mb-8">
                Warum Wissen allein für den Geburtsmarathon nicht ausreicht.
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Stellen Sie sich vor, Sie laufen einen Marathon. Sie haben Bücher darüber gelesen, wie man atmet und wohin die Strecke führt. Sie fühlen sich mental gut vorbereitet.
                </p>
                <p>
                  Wenn Ihr <strong className="text-primary">innerer Zell-Akku</strong> aber leer ist, werden Sie nach 10 Kilometern erschöpft zusammenbrechen. Alles theoretische Wissen nützt nichts, wenn der Muskel keine Kraft mehr hat.
                </p>
                <p className="p-6 bg-white rounded-2xl border border-primary/10 italic text-primary/80 shadow-sm">
                  Die Gebärmutter ist ein reiner Muskel, der über Stunden auf Hochtouren arbeitet. Wenn die körpereigenen Energiedepots (ATP) leer sind, kommt es zu einem Wehen-Stopp. <strong>Die Folge: Fast immer unaufhaltsame medizinische Interventionen.</strong>
                </p>
              </div>
            </div>
            
            <div className="relative" id="premium-upsell">
              <div className="bg-white p-12 lg:p-14 rounded-[3rem] shadow-2xl border-4 border-orange-100 relative z-10 text-center flex flex-col items-center">
                 <div className="absolute -top-6 bg-orange-500 text-white px-6 py-2 rounded-full font-bold uppercase tracking-widest text-sm flex items-center gap-2 shadow-lg">
                    <Crown size={16} /> Die Lösung
                 </div>
                 <h3 className="text-3xl font-serif text-primary mt-4 mb-4">
                   Premium-Modul:<br/>
                   <span className="text-orange-600">Zell-Energie</span>
                 </h3>
                 <p className="text-muted-foreground mb-8">
                   Sichern Sie sich nicht nur das Wissen, sondern die physische <strong>Urkraft</strong>. Laden Sie Ihre Zell-Batterie mit ATP und Mineralien tiefenphysiologisch voll auf – für eine Intervention-freie Geburt.
                 </p>
                 <Link to={ROUTE_PATHS.PREMIUM_ZELL_ENERGIE} className="w-full bg-orange-600 text-white px-8 py-5 rounded-xl font-bold hover:bg-orange-700 transition-all flex items-center justify-center gap-2 mb-4">
                   Details zum Premium-Modul <ArrowRight size={18} />
                 </Link>
                 <p className="text-xs text-muted-foreground uppercase tracking-widest">Die St. Petersburger Schule</p>
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-orange-200 rounded-full blur-[80px] opacity-60 -z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action for Standard */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <UserCheck className="w-16 h-16 mx-auto mb-8 text-primary opacity-20" />
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">Sie möchten sich für die Basis anmelden?</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Falls Sie ausschließlich den klassischen Geburtsvorbereitungskurs (Wissen & Theorie) buchen möchten, können Sie uns hier schnell kontaktieren.
          </p>
          <div className="flex justify-center">
            <Link to={ROUTE_PATHS.CONTACT} className="inline-block bg-primary text-white border-2 border-primary px-12 py-6 rounded-2xl font-bold text-xl hover:bg-primary/90 transition-all active:scale-95">
              Nur Basis-Kurs anfragen
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
