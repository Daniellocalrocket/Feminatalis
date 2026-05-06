import React from "react";
import SEO from "@/components/SEO";
import { ROUTE_PATHS } from "@/lib/index";
import { Link } from "react-router-dom";
import { Activity, ShieldCheck, ArrowRight, Heart, Zap, Sparkles } from "lucide-react";
import SplitScreenHero from "@/components/SplitScreenHero";
import PreisTransparenz from "@/components/PreisTransparenz";
import { motion } from "framer-motion";

export default function Hormontherapie() {
  const fokusBereiche = [
    { title: "Speichel-Hormontests", desc: "Präzise Messung der freien, biologisch aktiven Hormone für eine exakte Diagnose.", icon: Activity },
    { title: "Natürliches Progesteron", desc: "Sanfter Ausgleich bei Progesteronmangel und Östrogendominanz mit bioidentischen Stoffen.", icon: Heart },
    { title: "Schilddrüsen-Support", desc: "Ganzheitliche Betrachtung der Schilddrüsenachse (T3, T4, rT3) bei Hashimoto und Müdigkeit.", icon: Zap },
    { title: "Sexualhormon-Balance", desc: "Behandlung von Zyklusstörungen, Beschwerden im Klimakterium und Menopause mit natürlichen Mitteln.", icon: Sparkles },
    { title: "Stress- & Glückshormone", desc: "Diagnostik und Unterstützung bei stressbedingten Symptomen wie depressive Verstimmungen, Schlafmangel & Reizbarkeit.", icon: Activity }
  ];

  return (
    <div className="bg-background min-h-screen font-sans">
      <SEO 
        title="Natürliche Hormontherapie | Naturheilpraxis feminatalis" 
        description="Bringe deine Hormone sanft und natürlich ins Gleichgewicht. Spezialisierte Diagnostik und Therapie bei Kinderwunsch, PMS und Wechseljahren." 
      />

      <SplitScreenHero
        badge="Hormonelle Balance"
        title={<>Natürliche <br /><span className="text-accent italic font-light">Hormontherapie</span></>}
        subtitle="Hormone sind die Dirigenten deines Stoffwechsels. Wenn sie aus dem Takt geraten, leidet das gesamte Wohlbefinden. Wir bringen dein System mit bioidentischen Impulsen wieder in Einklang."
        imageSrc="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2070&auto=format&fit=crop"
        imageAlt="Natürliche Hormontherapie"
        imageKey="img_hero_hormontherapie"
      >
        <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-primary text-white px-10 py-5 rounded-2xl font-bold hover:shadow-2xl transition-all shadow-xl active:scale-95 flex items-center gap-2">
          Kostenfreie Vor-Analyse anfragen <ArrowRight size={20} />
        </Link>
      </SplitScreenHero>

      <section className="py-24 text-left">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
            <div className="space-y-8">
              <h2 className="text-4xl font-serif text-primary leading-tight">Präzision statt Gießkannen-Prinzip</h2>
              <div className="prose prose-lg text-muted-foreground leading-relaxed">
                <p>
                  Ob PMS, unerfüllter Kinderwunsch oder Wechseljahresbeschwerden – Standard-Bluttests zeigen oft nur die halbe Wahrheit. Wir nutzen spezialisierte <strong>Speichel-Diagnostik</strong>, um die tatsächlich verfügbaren Hormone zu messen.
                </p>
                <p>
                  Unsere Therapieansätze basieren auf pflanzlichen Wirkstoffen, homöopathischen Impulsen und – falls notwendig – bioidentischen Hormonen, die exakt deinem körpereigenen Bauplan entsprechen.
                </p>
              </div>
              <div className="bg-white border border-border/50 p-8 rounded-[2.5rem] shadow-sm flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <ShieldCheck size={24} />
                </div>
                <p className="font-medium text-primary italic leading-relaxed">
                  Jede Frau ist einzigartig. Deshalb ist auch jeder Hormon-Fahrplan individuell auf deine aktuelle Lebensphase und deine Symptome zugeschnitten.
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
             <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 -mr-32 -mt-32 rounded-full blur-3xl opacity-20"></div>
             <Sparkles className="w-16 h-16 text-accent mx-auto mb-8 animate-pulse relative z-10" />
             <h2 className="text-3xl lg:text-5xl font-serif mb-8 text-white font-bold relative z-10">Wieder in deiner Mitte sein</h2>
             <p className="text-xl opacity-90 mb-12 max-w-3xl mx-auto leading-relaxed relative z-10">
               Hormonelle Balance bedeutet Lebensqualität. Wenn die Hormone stimmen, kehren Energie, Schlafqualität und Lebensfreude zurück. Lass uns gemeinsam den Taktstock neu schwingen.
             </p>
             <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-white text-primary px-12 py-5 rounded-2xl font-bold hover:bg-accent hover:text-white transition-all shadow-xl inline-flex items-center gap-3 relative z-10">
               Hormon-Check anfragen <ArrowRight size={20} />
             </Link>
          </div>
        </div>
      </section>

      <PreisTransparenz />
    </div>
  );
}
