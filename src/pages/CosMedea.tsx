import React from "react";
import SEO from "@/components/SEO";
import { ROUTE_PATHS } from "@/lib/index";
import { Link } from "react-router-dom";
import { Sparkles, Check, ArrowRight, Heart, Smile, Star } from "lucide-react";

export default function CosMedea() {
  return (
    <div className="bg-background min-h-screen pt-32 pb-20">
      <SEO 
        title="cosMedea – Wellness & Ästhetik | Natürliche Schönheit | feminatalis" 
        description="Natürlich schöne Ergebnisse: Wellness, Anti-Aging und ästhetische Medizin in Bad Schönborn. Unterstreichen Sie Ihre natürliche Schönheit." 
      />
      
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <span className="bg-peach-200 text-[#77252c] px-4 py-1.5 rounded-full text-sm font-semibold mb-6 inline-block uppercase tracking-widest">Zweitpraxis cosMedea</span>
        <h1 className="text-4xl md:text-7xl font-serif text-primary mb-8 leading-tight">Natürlich schöne Ergebnisse</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
          In unserer Zweitpraxis cosMedea dreht sich alles um Ihr Wohlbefinden und Ihre Ausstrahlung. Wir bieten ästhetische Behandlungen an, die Ihre natürliche Schönheit unterstreichen, statt sie zu verfremden.
        </p>
      </div>

      {/* Leistungen Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Smile className="text-accent w-8 h-8"/>, 
                title: "Wellness", 
                desc: "Entspannung und Wohlbefinden für Körper und Seele. Massagesessel (brainLight), Entspannungsbäder und therapeutische Massagen für nachhaltigen Stressabbau.",
                pts: ["brainLight-System", "Tiefenentspannung", "Regeneration"]
              },
              { 
                icon: <Sparkles className="text-accent w-8 h-8"/>, 
                title: "Anti-Aging", 
                desc: "Natürliche Methoden für ein frisches, jugendliches Aussehen – von innen und außen. Ganzheitliche Konzepte, die den Körper unterstützen statt ihn zu belasten.",
                pts: ["Zellverjüngung", "Mikronährstoffe", "Lichttherapie"]
              },
              { 
                icon: <Star className="text-accent w-8 h-8"/>, 
                title: "Ästhetik", 
                desc: "Ästhetische Behandlungen mit sanften Methoden für natürliche Ergebnisse. Wir legen Wert auf Harmonie und Wohlbefinden in Ihrer Haut.",
                pts: ["Hautbild-Optimierung", "Natur-Kosmetik", "Sanfte Korrekturen"]
              }
            ].map((c, i) => (
              <div key={i} className="bg-white p-10 rounded-[3rem] border border-border shadow-sm hover:shadow-xl transition-all group overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-peach-50 -mr-16 -mt-16 rounded-full group-hover:scale-150 transition-transform"/>
                <div className="mb-6 bg-peach-100/50 w-16 h-16 rounded-2xl flex items-center justify-center relative z-10">{c.icon}</div>
                <h3 className="text-2xl font-serif text-primary mb-4 relative z-10">{c.title}</h3>
                <p className="text-muted-foreground text-sm mb-6 relative z-10 leading-relaxed">{c.desc}</p>
                <ul className="space-y-2 mb-8 relative z-10">
                  {c.pts.map((pt, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs font-bold text-primary/70 uppercase tracking-tighter"><Check className="w-4 h-4 text-accent"/> {pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Website Link Section */}
      <section className="py-20 bg-primary text-white rounded-[4rem] mx-4 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[#77252c] opacity-50" />
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
           <Heart className="w-16 h-16 mx-auto mb-8 opacity-30 text-peach-200 fill-peach-200" />
           <h2 className="text-4xl font-serif mb-6 leading-tight">Besuchen Sie cosMedea online</h2>
           <p className="text-xl opacity-80 mb-10 max-w-2xl mx-auto">
             Alle detaillierten Informationen zu unserem wellness-orientierten und ästhetischen Leistungsspektrum finden Sie auf unserer Spezial-Website.
           </p>
           <a href="https://www.cosmedea.de" target="_blank" rel="noopener noreferrer" className="inline-block bg-accent text-white px-10 py-5 rounded-xl font-bold text-xl hover:bg-accent/90 transition-all shadow-xl flex items-center justify-center gap-2 mx-auto w-fit">
             Website cosmedea.de öffnen <ArrowRight className="w-6 h-6" />
           </a>
        </div>
      </section>
    </div>
  );
}
