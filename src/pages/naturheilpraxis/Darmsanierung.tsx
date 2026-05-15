import React from "react";
import SEO from "@/components/SEO";
import { ROUTE_PATHS } from "@/lib/index";
import { Link } from "react-router-dom";
import { Activity, ShieldCheck, ArrowRight, Microscope, Zap, Heart, Sparkles } from "lucide-react";
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
        subtitle="Dein Darm ist weit mehr als ein Verdauungsorgan – er ist das Kraftwerk deines Immunsystems und der Geburtsort deiner mentalen Stärke. Wir bringen dein inneres Ökosystem wieder in die perfekte Balance."
        imageSrc="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=2070&auto=format&fit=crop"
        imageAlt="Darmgesundheit und Mikrobiom"
        imageKey="img_hero_darmanalyse"
      >
        <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-primary text-white px-10 py-5 rounded-2xl font-bold hover:shadow-2xl transition-all shadow-xl active:scale-95 flex items-center gap-2">
          Kostenfreie Vor-Analyse anfragen <ArrowRight size={20} />
        </Link>
      </SplitScreenHero>

      {/* Philosophy: The Core of Vitality */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-serif text-primary mb-8 leading-tight">Alles beginnt im Darm</h2>
            <div className="prose prose-lg mx-auto text-muted-foreground leading-relaxed">
              <p>
                Wusstest du, dass ca. 80 % deiner Immunzellen im Darm beheimatet sind? Oder dass 90 % deines Serotonins – deines Wohlfühlhormons – in der Darmwand produziert werden? Die <strong>Darm-Hirn-Achse</strong> ist keine Theorie, sondern eine biologische Autobahn, die deine Stimmung, deine Energie und deine Gesundheit maßgeblich steuert.
              </p>
              <p className="mt-6">
                Ein gestörter Darm (Dysbiose) oder eine durchlässige Darmwand (<strong>Leaky Gut</strong>) wirken wie ein kaputtes Sieb: Toxine und unvollständig verdaute Partikel gelangen in die Blutbahn und lösen systemische Entzündungen aus. Dies ist oft die versteckte Ursache für Allergien, Autoimmunprozesse und chronische Erschöpfung.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas Grid */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {[
              { title: "Mikrobiomanalyse", desc: "Präzise Bestimmung der Bakterienvielfalt und Entdeckung von Fehlbesiedlungen (SIBO/SIFO).", icon: <Microscope className="w-8 h-8 text-accent" /> },
              { title: "Leaky-Gut-Therapie", desc: "Heilung der Darmbarriere (Zonulin-Check) zur Reduzierung von 'Silent Inflammation'.", icon: <ShieldCheck className="w-8 h-8 text-accent" /> },
              { title: "Das Östrobolom", desc: "Optimierung der Darmflora zur Regulation des Östrogenstoffwechsels bei PMS oder PCOS.", icon: <Activity className="w-8 h-8 text-accent" /> },
              { title: "Immun-Reboot", desc: "Stärkung des darmassoziierten Immunsystems zur Senkung der Infektanfälligkeit.", icon: <Heart className="w-8 h-8 text-accent" /> }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-border hover:border-accent transition-all hover:shadow-xl group">
                <div className="bg-muted/30 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                   {item.icon}
                </div>
                <h4 className="font-bold text-primary mb-3 font-serif text-xl leading-tight">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed font-medium opacity-80">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-24 bg-primary text-white p-12 lg:p-20 rounded-[5rem] shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-accent/20 -mr-48 -mt-48 rounded-full blur-[100px] opacity-20"></div>
             <div className="flex flex-col lg:flex-row gap-16 items-center text-left">
                <div className="lg:w-2/3">
                  <h2 className="text-3xl lg:text-5xl font-serif mb-8 text-white font-bold leading-tight">Keine Standard-Kuren. <br />Sondern Präzision.</h2>
                  <p className="text-xl opacity-90 mb-10 leading-relaxed font-medium">
                    „Einfach nur Joghurt essen reicht meist nicht aus. Basierend auf deiner individuellen Laboranalyse bauen wir deine Darmflora systematisch wieder auf – Schicht für Schicht.“
                  </p>
                  <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-white text-primary px-12 py-5 rounded-2xl font-bold hover:bg-accent hover:text-white transition-all shadow-xl inline-flex items-center gap-3">
                    Darmanalyse anfragen <ArrowRight size={20} />
                  </Link>
                </div>
                <div className="lg:w-1/3 bg-white/10 backdrop-blur-md p-10 rounded-[3rem] border border-white/20">
                   <Sparkles className="w-12 h-12 text-accent mb-6" />
                   <p className="text-lg font-bold leading-relaxed">
                     Hautprobleme, Allergien oder Antriebslosigkeit verschwinden oft, wenn der Darm wieder in Balance ist.
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
