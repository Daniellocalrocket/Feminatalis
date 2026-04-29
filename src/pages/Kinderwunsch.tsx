import React from "react";
import SEO from "@/components/SEO";
import { ROUTE_PATHS } from "@/lib/index";
import { Link } from "react-router-dom";
import { ClipboardList, Target, HeartHandshake, ArrowRight, Zap, Heart, Users, Activity, Droplets } from "lucide-react";
import SplitScreenHero from "@/components/SplitScreenHero";
import PreisTransparenz from "@/components/PreisTransparenz";
import { motion } from "framer-motion";

export default function Kinderwunsch() {
  const bausteine = [
    { title: "Körpercheck & Labor", desc: "Mitochondrien-Funktion, Immunstatus, Hormone, Darmflora und Mikronährstoffe.", icon: ClipboardList },
    { title: "(Ei)Zelltraining IHHT", desc: "Regeneration der Eizellkraftwerke für maximale Energie und optimale Voraussetzungen.", icon: Zap },
    { title: "Hormonsystem", desc: "Phytotherapie und naturidentische Hormone, Ausleitung der Pille.", icon: Activity },
    { title: "Entgiftung & Milieu", desc: "Maßnahmen zur Entschlackung durch Homöopathie, Akupunktur oder Infusionen.", icon: Droplets },
    { title: "Psychische Balance", desc: "Förderung des Loslassens, Entspannung und Klärung von Blockaden.", icon: Heart },
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
        title={<>Ganzheitliche <br /><span className="text-accent italic font-light">Kinderwunsch-Begleitung</span></>}
        subtitle="Dein Weg zum Wunschkind ist so individuell wie du. Wir kombinieren tiefes Hebammenwissen mit modernster funktioneller Medizin, um deinen Körper optimal auf eine Schwangerschaft vorzubereiten."
        imageSrc="https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=2070&auto=format&fit=crop"
        imageAlt="Kinderwunsch Begleitung"
        imageKey="img_hero_kinderwunsch"
      >
        <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-primary text-white px-10 py-5 rounded-2xl font-bold hover:shadow-2xl transition-all shadow-xl active:scale-95 flex items-center gap-2">
          Dein Projekt starten <ArrowRight size={20} />
        </Link>
      </SplitScreenHero>

      <section className="py-24 text-left">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
            <div className="space-y-8">
              <h2 className="text-4xl font-serif text-primary leading-tight">Warum ein Programm?</h2>
              <div className="prose prose-lg text-muted-foreground leading-relaxed">
                <p>
                  Ein Kind zu empfangen ist ein komplexes Zusammenspiel aus biochemischen, hormonellen und emotionalen Faktoren. Wenn es nicht sofort klappt, ist das oft kein Zeichen von Unfruchtbarkeit, sondern von einem System, das gerade nicht in seiner vollen Kraft ist.
                </p>
                <p>
                  In unserem <strong>Projekt Glückskind</strong> betrachten wir dich als Ganzes. Wir optimieren das 'Nest' und stärken die 'Zellkraft', damit Leben entstehen kann.
                </p>
              </div>
              <div className="bg-white border border-border/50 p-8 rounded-[2.5rem] shadow-sm flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <HeartHandshake size={24} />
                </div>
                <p className="font-medium text-primary italic leading-relaxed">
                  Wir begleiten dich mit Herz und Verstand – von der ersten Lab Analyse bis zur positiven Nachricht.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {bausteine.map((item, i) => (
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
             <Users className="w-16 h-16 text-accent mx-auto mb-8 animate-pulse relative z-10" />
             <h2 className="text-3xl lg:text-5xl font-serif mb-8 text-white font-bold relative z-10">Gemeinsam zum Ziel</h2>
             <p className="text-xl opacity-90 mb-12 max-w-3xl mx-auto leading-relaxed relative z-10">
               Unser Team aus Hebammen und Heilpraktikern bündelt alle Kompetenzen für deinen Kinderwunsch. Wir freuen uns darauf, dich auf dieser besonderen Reise zu unterstützen.
             </p>
             <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-white text-primary px-12 py-5 rounded-2xl font-bold hover:bg-accent hover:text-white transition-all shadow-xl inline-flex items-center gap-3 relative z-10">
               Jetzt Vor-Analyse anfragen <ArrowRight size={20} />
             </Link>
          </div>
        </div>
      </section>

      <PreisTransparenz />
    </div>
  );
}

