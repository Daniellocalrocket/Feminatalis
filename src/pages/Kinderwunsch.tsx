import React from "react";
import SEO from "@/components/SEO";
import { ROUTE_PATHS } from "@/lib/index";
import { Link } from "react-router-dom";
import { ClipboardList, Target, HeartHandshake, CheckCircle2, ArrowRight, Zap, Heart, Users, Instagram } from "lucide-react";

export default function Kinderwunsch() {
  const bausteine = [
    { title: "Körpercheck & Labor", desc: "Mitochondrien-Funktion, Immunstatus, Hormone, Darmflora und Mikronährstoffe (Vit. D, A, Selen...)." },
    { title: "(Ei)Zelltraining IHHT", desc: "Regeneration der Eizellkraftwerke für maximale Energie und optimale Voraussetzungen." },
    { title: "Regulation Hormonsystem", desc: "Phytotherapie und naturidentische Hormone (homöopathisch), Ausleitung der Pille." },
    { title: "Entgiftung & Milieu", desc: "Maßnahmen zur Entschlackung durch Homöopathie, Akupunktur oder Infusionen." },
    { title: "Psychische Balance", desc: "Förderung des Loslassens, Entspannung und Klärung von Blockaden." },
    { title: "Positive Erfolgsausrichtung", desc: "Mentale Blockaden erkennen und realistische Etappen-Ziele setzen." }
  ];

  return (
    <div className="bg-background min-h-screen">
      <SEO 
        title="Ganzheitliche Kinderwunschbehandlung | Naturheilpraxis feminatalis" 
        description="Dein Glücksprojekt - das Kinderwunschprogramm. Wir kombinieren Hebammenwissen und funktionelle Medizin für deinen Weg zum Wunschkind." 
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 overflow-hidden relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-accent/5 rounded-full blur-3xl -z-10 opacity-60"></div>
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <span className="bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-bold mb-6 inline-block uppercase tracking-wider">Dein Glücksprojekt</span>
          <h1 className="text-4xl lg:text-7xl font-serif text-primary mb-8 leading-tight">
            Dein Weg zum <br />
            <span className="text-accent italic font-light">Wunschkind</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Wünschst du dir ein Baby und es klappt einfach nicht? Jeden Monat die Hoffnung, der Druck der Zeit... Du bist nicht allein. Wir suchen nach den Ursachen abseits der Standardmedizin und optimieren deine Fruchtbarkeit ganzheitlich.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to={ROUTE_PATHS.CONTACT} className="bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">
              Beratungstermin vereinbaren
            </Link>
          </div>
        </div>
      </section>

      {/* Principle Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-serif text-primary font-bold">Hebammenkunst trifft auf funktionelle Medizin</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Das Herzstück meiner Arbeit als Heilpraktikerin und Hebamme ist die Unterstützung von Paaren mit Kinderwunsch. Wir schaffen die optimale Basis für eine gesunde Empfängnis – ganz ohne die oft belastenden Praktiken großer Kinderwunschzentren.
              </p>
              <div className="bg-white p-8 rounded-3xl border border-border shadow-sm italic">
                "Ich unterstütze dich mit wirkungsvollen Methoden, kreativen Ideen und bewährten Tipps auf dem Weg zu deinem Wunschkind."
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Wissen", icon: <ClipboardList /> },
                { label: "Wärme", icon: <Heart /> },
                { label: "Orientierung", icon: <Zap /> },
                { label: "Erfolg", icon: <Target /> }
              ].map((item, i) => (
                <div key={i} className="bg-card p-8 rounded-3xl border border-border flex flex-col items-center justify-center text-center">
                  <div className="text-accent mb-4">{item.icon}</div>
                  <span className="font-bold text-primary">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Program Blocks */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-primary mb-4">Bausteine des Programms</h2>
            <p className="text-muted-foreground text-lg">Ein individuell abgestimmtes Therapie- und Beratungs-Konzept.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bausteine.map((block, i) => (
              <div key={i} className="p-8 bg-card rounded-[2.5rem] border border-border hover:border-accent transition-colors group">
                <CheckCircle2 className="w-8 h-8 text-accent mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-primary mb-4">{block.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{block.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners & Success */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <Users className="w-16 h-16 mx-auto mb-6 opacity-30" />
            <h2 className="text-4xl font-serif font-bold mb-8">Gemeinsam zum Elternglück</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 bg-white/5 p-10 rounded-[3rem] border border-white/10">
              <h3 className="text-2xl font-serif font-bold text-accent">Erfolgsfaktoren</h3>
              <ul className="space-y-4">
                <li className="flex gap-4 items-start">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-1 shrink-0" />
                  <span>Aktive Teilnahme deines Partners am Programm</span>
                </li>
                <li className="flex gap-4 items-start">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-1 shrink-0" />
                  <span>Bereitschaft, neue Wege eigenverantwortlich zu gehen</span>
                </li>
                <li className="flex gap-4 items-start">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-1 shrink-0" />
                  <span>Offene Kommunikation und wertschätzende Zusammenarbeit</span>
                </li>
              </ul>
            </div>
            <div className="space-y-8">
              <div className="flex gap-6 items-center bg-white/5 p-8 rounded-3xl border border-white/10">
                <Instagram className="w-12 h-12 text-accent" />
                <div>
                  <h4 className="font-bold text-xl">Fruchtbarkeits-Kompass</h4>
                  <p className="text-sm opacity-70">Folge @fruchtbarkeits_kompass für wöchentliche Impulse und Rituale.</p>
                </div>
              </div>
              <p className="text-lg opacity-80 leading-relaxed italic">
                "Dein Weg zum Wunschkind darf leichter werden. Wir bringen Wissen, Wärme und Orientierung in dein Glücksprojekt."
              </p>
              <div className="pt-4">
                <Link to={ROUTE_PATHS.CONTACT} className="bg-accent text-white px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-3">
                  Jetzt unverbindlich anfragen <ArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
