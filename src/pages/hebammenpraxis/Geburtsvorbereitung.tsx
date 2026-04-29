import React from "react";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "@/lib/index";
import { ShieldCheck, ArrowRight, Heart, Brain, UserCheck, BookOpen, Crown, Wind, Users, Hospital, Activity } from "lucide-react";
import SplitScreenHero from "@/components/SplitScreenHero";
import PreisTransparenz from "@/components/PreisTransparenz";
import { motion } from "framer-motion";

export default function Geburtsvorbereitung() {
  const modules = [
    { title: "Physische Vorbereitung", desc: "Atemtechniken, Gebärpositionen und Körperarbeit für eine aktive Geburt.", icon: Wind },
    { title: "Mentale Stärke", desc: "Angstabbau durch fundiertes Wissen und positive Visualisierungen.", icon: Brain },
    { title: "Partner-Einbindung", desc: "Wie der Partner effektiv unterstützen kann und was seine Rolle im Kreißsaal ist.", icon: Users },
    { title: "Klinik-Check", desc: "Abläufe im Krankenhaus, Interventionen und selbstbestimmte Entscheidungen.", icon: Hospital }
  ];

  return (
    <div className="bg-background min-h-screen font-sans">
      <SEO 
        title="Geburtsvorbereitung | Klassisches Hebammenwissen" 
        description="Ihre solide Basis für die Geburt. Klassisches Hebammenwissen, Atemtechniken und fundierte Aufklärung, um Ängste abzubauen." 
      />

      <SplitScreenHero
        badge="Säule 1: Basis-Wissen"
        title={<>Klassisches Hebammenwissen trifft <br /><span className="text-accent italic font-light">Sicherheit</span></>}
        subtitle="Wir bereiten dich auf das Wunder der Geburt vor. Mit bewährtem Wissen als starkem Fundament, um Ängste abzubauen und den Kopf auf die bevorstehende Aufgabe einzustellen."
        imageSrc="https://images.unsplash.com/photo-1559839734-2b71f1e3c7e3?q=80&w=2070&auto=format&fit=crop"
        imageAlt="Geburtsvorbereitungskurs"
        imageKey="img_hero_geburtsvorbereitung"
      >
        <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-primary text-white px-10 py-5 rounded-2xl font-bold hover:shadow-2xl transition-all shadow-xl active:scale-95 flex items-center gap-2">
          Kursplatz anfragen <ArrowRight size={20} />
        </Link>
      </SplitScreenHero>

      <section className="py-24 text-left">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
            <div className="space-y-8">
              <h2 className="text-4xl font-serif text-primary leading-tight">Wissen nimmt den Schmerz die Macht</h2>
              <div className="prose prose-lg text-muted-foreground leading-relaxed">
                <p>
                  Angst entsteht oft aus Ungewissheit. In unseren Kursen beleuchten wir die physiologischen Vorgänge der Geburt so präzise, dass du verstehst, was dein Körper leistet und warum jeder Schmerzimpuls einen Sinn hat.
                </p>
                <p>
                  Wir kombinieren <strong>traditionelles Hebammenhandwerk</strong> mit modernen medizinischen Erkenntnissen, um dir eine realistische und kraftspendende Perspektive auf deine Geburt zu geben.
                </p>
              </div>
              <div className="bg-white border border-border/50 p-8 rounded-[2.5rem] shadow-sm flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <UserCheck size={24} />
                </div>
                <p className="font-medium text-primary italic leading-relaxed">
                  Unser Ziel ist es, dass du informierte Entscheidungen treffen kannst – egal ob im Geburtshaus oder in der Uniklinik.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {modules.map((item, i) => (
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
             <Crown className="w-16 h-16 text-accent mx-auto mb-8 animate-pulse relative z-10" />
             <h2 className="text-3xl lg:text-5xl font-serif mb-8 text-white font-bold relative z-10">Bereit für den Start?</h2>
             <p className="text-xl opacity-90 mb-12 max-w-3xl mx-auto leading-relaxed relative z-10">
               Die Plätze in unseren Geburtsvorbereitungskursen sind begrenzt, um eine persönliche Atmosphäre zu gewährleisten. Melde dich frühzeitig an.
             </p>
             <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-white text-primary px-12 py-5 rounded-2xl font-bold hover:bg-accent hover:text-white transition-all shadow-xl inline-flex items-center gap-3 relative z-10">
               Platz anfragen <ArrowRight size={20} />
             </Link>
          </div>
        </div>
      </section>

      <PreisTransparenz />
    </div>
  );
}
