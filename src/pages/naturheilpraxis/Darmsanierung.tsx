import React from "react";
import SEO from "@/components/SEO";
import { ROUTE_PATHS } from "@/lib/index";
import { Link } from "react-router-dom";
import { Activity, ShieldCheck, ArrowRight, Microscope, Zap, Heart } from "lucide-react";
import SplitScreenHero from "@/components/SplitScreenHero";
import PreisTransparenz from "@/components/PreisTransparenz";
import { motion } from "framer-motion";

export default function Darmsanierung() {
  const fokusBereiche = [
    { title: "Mikrobiomanalyse", desc: "Präzise Stuhldiagnostik zur Bestimmung der Bakterienzusammensetzung und Entzündungsmarker.", icon: Microscope },
    { title: "Leaky-Gut-Therapie", desc: "Heilung der löchrigen Darmbarriere zur Reduzierung systemischer Entzündungen.", icon: ShieldCheck },
    { title: "Dysbiose-Ausgleich", desc: "Gezielte Zufuhr von Prä- und Probiotika basierend auf deinen Laborergebnissen.", icon: Activity },
    { title: "Immunmodulation", desc: "Stärkung des darmassoziierten Immunsystems (GALT) für deine gesamte Gesundheit.", icon: Heart }
  ];

  return (
    <div className="bg-background min-h-screen font-sans">
      <SEO 
        title="Darmsanierung & Mikrobiom | Naturheilpraxis feminatalis" 
        description="Gesundheit beginnt im Darm. Mit ganzheitlicher Mikrobiomanalyse und Darmsanierung stärken wir deine Abwehr und dein Wohlbefinden." 
      />

      <SplitScreenHero
        badge="Zentrum der Gesundheit"
        title={<>Darmanalyse & <br /><span className="text-accent italic font-light">Mikrobiom-Therapie</span></>}
        subtitle="Dein Darm ist weit mehr als ein Verdauungsorgan – er ist das Zentrum deines Immunsystems und deiner psychischen Stabilität. Wir bringen deine innere Welt wieder ins Gleichgewicht."
        imageSrc="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=2070&auto=format&fit=crop"
        imageAlt="Darmgesundheit und Mikrobiom"
        imageKey="img_hero_darmanalyse"
      >
        <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-primary text-white px-10 py-5 rounded-2xl font-bold hover:shadow-2xl transition-all shadow-xl active:scale-95 flex items-center gap-2">
          Kostenfreie Vor-Analyse anfragen <ArrowRight size={20} />
        </Link>
      </SplitScreenHero>

      <section className="py-24 text-left">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
            <div className="space-y-8">
              <h2 className="text-4xl font-serif text-primary leading-tight">Der Darm: Spiegel deines Wohlbefindens</h2>
              <div className="prose prose-lg text-muted-foreground leading-relaxed">
                <p>
                  Ob Allergien, Hautprobleme, chronische Müdigkeit oder Autoimmunerkrankungen – die Ursache liegt erstaunlich oft in einem gestörten Darmmilieu. Eine oberflächliche Kur reicht hier meist nicht aus.
                </p>
                <p>
                  Wir setzen auf eine <strong>fundierte Stuhldiagnostik</strong> in spezialisierten Laboren, um Schleimhautimmunität, Entzündungsgrade und die Vielfalt deines Mikrobioms schwarz auf weiß zu sehen. Erst dann entwickeln wir deinen individuellen Sanierungsplan.
                </p>
              </div>
              <div className="bg-white border border-border/50 p-8 rounded-[2.5rem] shadow-sm flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <Microscope size={24} />
                </div>
                <p className="font-medium text-primary italic leading-relaxed">
                  Basierend auf deinen Laborwerten erstellen wir einen präzisen Fahrplan aus Ernährung, Supplementierung und Schleimhautschutz.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {fokusBereiche.map((item, i) => (
                <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-border/50 shadow-sm flex flex-col group hover:border-accent transition-all">
                  <div className="bg-muted/30 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                    <item.icon className="text-accent w-7 h-7" />
                  </div>
                  <h4 className="font-bold text-primary mb-3 font-serif text-xl">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary text-white p-12 lg:p-20 rounded-[4rem] text-center shadow-2xl relative overflow-hidden mb-24">
             <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/20 -mr-32 -mb-32 rounded-full blur-3xl opacity-20"></div>
             <Zap className="w-16 h-16 text-accent mx-auto mb-8 animate-pulse relative z-10" />
             <h2 className="text-3xl lg:text-5xl font-serif mb-8 text-white font-bold relative z-10">Vitalität durch Balance</h2>
             <p className="text-xl opacity-90 mb-12 max-w-3xl mx-auto leading-relaxed relative z-10">
               Ein gesunder Darm bedeutet weniger Entzündungen, eine bessere Nährstoffaufnahme und eine stabilere Psyche. Lass uns gemeinsam den Grundstein für deine langfristige Gesundheit legen.
             </p>
             <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-white text-primary px-12 py-5 rounded-2xl font-bold hover:bg-accent hover:text-white transition-all shadow-xl inline-flex items-center gap-3 relative z-10">
               Darmanalyse anfragen <ArrowRight size={20} />
             </Link>
          </div>
        </div>
      </section>

      <PreisTransparenz />
    </div>
  );
}
