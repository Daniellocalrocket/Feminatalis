import React from "react";
import SEO from "@/components/SEO";
import { ROUTE_PATHS } from "@/lib/index";
import { Link } from "react-router-dom";
import { ClipboardList, Target, HeartHandshake, ArrowRight, Zap, Heart, Users, Activity, Droplets, Sparkles } from "lucide-react";
import SplitScreenHero from "@/components/SplitScreenHero";
import PreisTransparenz from "@/components/PreisTransparenz";
import { motion } from "framer-motion";

export default function Kinderwunsch() {
  const bausteine = [
    { title: "Körpercheck & Labor", desc: "Mitochondrien-Funktion, Immunstatus, Hormone, Darmflora und Mikronährstoffe.", icon: ClipboardList },
    { title: "(Ei)Zelltraining IHHT", desc: "Regeneration der Eizellkraftwerke für maximale Energie und optimale Voraussetzungen.", icon: Sparkles },
    { title: "Hormonsystem", desc: "Phytotherapie und naturidentische Hormone, Ausleitung der Pille.", icon: Activity },
    { title: "Entgiftung & Milieu", desc: "Maßnahmen zur Entschlackung durch Homöopathie, Phytotherapie oder Infusionen.", icon: Droplets },
    { title: "Psychische Balance", desc: "Entspannungs-Förderung, Nervensystem-Regulation und Klärung der Blockaden.", icon: Heart },
    { title: "Erfolgs-Mindset", desc: "Mentale Blockaden erkennen und realistische Etappen-Ziele setzen.", icon: Target }
  ];

  return (
    <div className="bg-background min-h-screen font-sans">
      <SEO 
        title="Ganzheitliche Kinderwunschbehandlung | Naturheilpraxis feminatalis" 
        description="Dein Glücksprojekt - das Kinderwunschprogramm. Wir kombinieren Hebammenwissen und funktionelle Medizin für deinen Weg zum Wunschkind." 
      />

      <SplitScreenHero
        badge="Projekt Glückskind"
        title={<>Wunschkind-Reise: <br /><span className="text-accent italic font-light">Den Boden bereiten</span></>}
        subtitle="Ein neues Leben ist ein Wunder, das Kraft braucht. Wir kombinieren tiefes Hebammenwissen mit modernster Zellbiologie, um deinen Körper – und den deines Partners – optimal auf die Empfängnis vorzubereiten."
        imageSrc="https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=2070&auto=format&fit=crop"
        imageAlt="Kinderwunsch Begleitung"
        imageKey="img_hero_kinderwunsch"
      >
        <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-primary text-white px-10 py-5 rounded-2xl font-bold hover:shadow-2xl transition-all shadow-xl active:scale-95 flex items-center gap-2">
          Dein Projekt starten <ArrowRight size={20} />
        </Link>
      </SplitScreenHero>

      {/* The Core: Mitochondria & Life */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl lg:text-5xl font-serif text-primary mb-10 leading-tight">Energie für den <br /><span className="text-accent italic">Beginn des Lebens</span></h2>
          <div className="prose prose-lg mx-auto text-muted-foreground leading-relaxed">
            <p>
              Wusstest du, dass die Eizelle die höchste Konzentration an Mitochondrien im gesamten menschlichen Körper besitzt? Diese winzigen Kraftwerke liefern die Energie für die Befruchtung und die ersten entscheidenden Zellteilungen.
            </p>
            <p className="mt-6">
              In unserem <strong>Projekt Glückskind</strong> fokussieren wir uns darauf, diese „Zell-Batterien“ wieder aufzuladen, hormonelle Blockaden zu lösen und das interne Milieu zu reinigen. Ob als natürliche Vorbereitung oder als begleitende Unterstützung für eine geplante IVF/ICSI – wir bereiten den Boden für dein Wunder.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars Grid */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {[
              { title: "Eizell-Qualität", desc: "Optimierung der mitochondrialen Energie (ATP) für eine bessere Befruchtungsrate.", icon: <Sparkles />, path: ROUTE_PATHS.MITOCHONDRIEN },
              { title: "Hormon-Balance", desc: "Regulierung von Progesteron & Östrogen, Zyklus-Harmonisierung und Pille-Ausleitung.", icon: <Activity />, path: ROUTE_PATHS.HORMONTHERAPIE },
              { title: "Männer-Gesundheit", desc: "Verbesserung der Spermienqualität durch gezielte Mikronährstoffe und Detoxing.", icon: <Users />, path: ROUTE_PATHS.LABOR },
              { title: "Detox & Milieu", desc: "Schwermetallausleitung und Darmsanierung für ein gesundes „Nest“.", icon: <Droplets />, path: ROUTE_PATHS.SCHWERMETALL },
              { title: "Stress-Resilienz", desc: "Nervensystem-Regulation (TCM & Akupunktur), um den Empfängnis-Modus zu aktivieren.", icon: <Heart />, path: ROUTE_PATHS.TCM },
              { title: "Zellkraft-Roadmap", desc: "Dein individueller Fahrplan durch den Dschungel der Möglichkeiten.", icon: <Target />, path: ROUTE_PATHS.ZELLKRAFT_ROADMAP }
            ].map((item, i) => (
              <Link to={item.path} key={i} className="bg-white p-10 rounded-[3rem] border border-border hover:border-accent transition-all hover:shadow-xl group">
                <div className="bg-muted/30 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                   {React.cloneElement(item.icon as React.ReactElement, { className: "w-8 h-8" })}
                </div>
                <h4 className="font-bold text-primary mb-3 font-serif text-xl leading-tight group-hover:text-accent transition-colors">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed font-medium opacity-80">{item.desc}</p>
              </Link>
            ))}
          </div>

          <div className="bg-primary text-white p-12 lg:p-20 rounded-[5rem] shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-accent/20 -mr-64 -mt-64 rounded-full blur-[100px] opacity-20"></div>
             <div className="flex flex-col lg:flex-row gap-16 items-center text-left">
                <div className="lg:w-2/3">
                  <h2 className="text-3xl lg:text-5xl font-serif mb-8 text-white font-bold leading-tight">Ganzheitlicher Support</h2>
                  <p className="text-xl opacity-90 mb-10 leading-relaxed font-medium">
                    „Ein Kinderwunsch ist kein Sprint, sondern eine Reise der Vorbereitung. Wir begleiten euch als Paar mit wissenschaftlicher Präzision und tiefem Vertrauen in die Weisheit der Natur.“
                  </p>
                  <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-white text-primary px-12 py-5 rounded-2xl font-bold hover:bg-accent hover:text-white transition-all shadow-xl inline-flex items-center gap-3">
                    Projekt Glückskind anfragen <ArrowRight size={20} />
                  </Link>
                </div>
                <div className="lg:w-1/3 bg-white/10 backdrop-blur-md p-10 rounded-[3rem] border border-white/20">
                   <Zap className="w-12 h-12 text-accent mb-6 animate-pulse" />
                   <p className="text-lg font-bold leading-relaxed">
                     Maximaler Zell-Support für den besten Start ins Leben.
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

