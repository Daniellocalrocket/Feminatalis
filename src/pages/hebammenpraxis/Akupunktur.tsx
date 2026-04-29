import React from "react";
import SEO from "@/components/SEO";
import { ROUTE_PATHS } from "@/lib/index";
import { Link } from "react-router-dom";
import { Zap, ArrowRight, Activity, Target, Heart, Shield } from "lucide-react";
import SplitScreenHero from "@/components/SplitScreenHero";
import PreisTransparenz from "@/components/PreisTransparenz";

export default function Akupunktur() {
  const treatments = [
    { title: "Geburtsvorbereitung", desc: "Ab der 36. SSW zur Muttermundsreifung. Kann die Geburtsdauer nachweislich verkürzen.", icon: <Heart className="text-primary" /> },
    { title: "Schwangerschaftsbeschwerden", desc: "Effektiv bei Übelkeit (Hyperemesis), Ödemen, Sodbrennen und Rückenschmerzen.", icon: <Activity className="text-accent" /> },
    { title: "NADA-Protokoll", desc: "Spezielle Ohrakupunktur zur Stressreduktion, bei Schlafstörungen oder Erschöpfung.", icon: <Zap className="text-accent" /> },
    { title: "Orthopädie & Schmerz", desc: "Linderung bei Gelenkschmerzen, Migräne und muskulären Verspannungen.", icon: <Target className="text-primary" /> }
  ];

  return (
    <div className="bg-background min-h-screen font-sans">
      <SEO 
        title="Akupunktur & NADA-Protokoll | feminatalis" 
        description="Gezielte Akupunktur für Schwangerschaft und allgemeine Gesundheit. Entdecke das NADA-Protokoll zur Entspannung und Schmerzlinderung." 
      />

      <SplitScreenHero
        badge="Heilung durch feine Impulse"
        title={<>Akupunktur <br /><span className="text-accent italic font-light">Tradition trifft Moderne</span></>}
        subtitle="Kleine Nadeln, große Wirkung – schmerzfrei, steril und wissenschaftlich anerkannt. Gezielte Regulation deines Körpers für Schwangerschaft und allgemeine Gesundheit."
        imageSrc="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop"
        imageAlt="Akupunktur Behandlung"
        imageKey="img_hero_tcm"
      >
        <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-primary text-white px-10 py-5 rounded-2xl font-bold hover:shadow-2xl transition-all shadow-xl active:scale-95 flex items-center gap-2">
          Kostenfreie Vor-Analyse anfragen <ArrowRight size={20} />
        </Link>
      </SplitScreenHero>

      <section className="py-20 text-left">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24 text-left">
            <div className="space-y-6">
              <h2 className="text-3xl font-serif text-primary leading-tight text-left">Gezielte Regulation deines Körpers</h2>
              <div className="prose prose-lg text-muted-foreground text-left">
                <p>
                  Akupunktur ist weit mehr als nur das Setzen von Nadeln. Es ist eine präzise Regulationstherapie, die das Nervensystem anspricht, die Durchblutung fördert und die Ausschüttung von körpereigenen Botenstoffen aktiviert.
                </p>
                <p>
                  In der Geburtshilfe ist die <strong>geburtsvorbereitende Akupunktur</strong> (nach dem Mannheimer Schema) der Goldstandard. Sie verkürzt die Eröffnungsphase der ersten Geburt nachweislich um durchschnittlich zwei Stunden.
                </p>
              </div>
              <div className="bg-white border border-border p-6 rounded-2xl shadow-sm flex items-start gap-4 text-left">
                <Shield className="text-accent shrink-0 w-6 h-6" />
                <p className="text-sm font-medium italic text-left">
                  Wir verwenden ausschließlich sterile Einmalnadeln aus hochwertigem Edelstahl für höchste Sicherheit und Komfort.
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 text-left">
              {treatments.map((t, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl border border-border shadow-sm hover:border-accent transition-all group">
                   <div className="mb-4 group-hover:scale-110 transition-transform">{t.icon}</div>
                   <h4 className="font-bold text-primary mb-3 text-left font-serif">{t.title}</h4>
                   <p className="text-xs text-muted-foreground leading-relaxed text-left">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary text-white p-12 lg:p-20 rounded-[4rem] text-center shadow-2xl relative overflow-hidden mb-24">
             <div className="absolute bottom-0 right-0 p-8 text-white/5 rotate-12">
                <Zap size={250} />
             </div>
             <h2 className="text-3xl lg:text-4xl font-serif mb-8 text-white font-bold">Das NADA-Protokoll</h2>
             <p className="text-lg opacity-80 mb-12 max-w-2xl mx-auto text-white">
               Ein spezielles Ohrakupunktur-Verfahren zur Stabilisierung bei Stress, Erschöpfung und emotionalen Belastungen. Es fördert die innere Ruhe, verbessert den Schlaf und reduziert Suchtdruck.
             </p>
             <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
               <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-accent text-white px-10 py-5 rounded-xl font-bold hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-2 border-none">
                 Termin für NADA vereinbaren <ArrowRight size={20} />
               </Link>
             </div>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-serif text-primary mb-6">Wissenswertes zur Behandlung</h3>
            <div className="grid sm:grid-cols-2 gap-8 text-left">
               <div className="p-6 bg-muted/30 rounded-2xl border border-border text-left">
                 <h4 className="font-bold text-primary mb-2 text-sm italic text-left">Übernahme der Kosten</h4>
                 <p className="text-xs text-muted-foreground leading-relaxed text-left">
                   Private Krankenversicherungen und Beihilfen übernehmen Akupunkturbehandlungen in der Regel zu 100%. Gesetzlich Versicherte können die Kosten als IGeL-Leistung oder über Zusatzversicherungen abrechnen.
                 </p>
               </div>
               <div className="p-6 bg-muted/30 rounded-2xl border border-border text-left">
                 <h4 className="font-bold text-primary mb-2 text-sm italic text-left">Behandlungszyklus</h4>
                 <p className="text-xs text-muted-foreground leading-relaxed text-left">
                   Für eine nachhaltige Wirkung empfehlen wir meist Serien von 10 Sitzungen. In der Geburtsvorbereitung beginnen wir ab der 36+0 SSW wöchentlich.
                 </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      <PreisTransparenz />
    </div>
  );
}
