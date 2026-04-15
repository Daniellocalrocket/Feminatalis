import React from "react";
import SEO from "@/components/SEO";
import { ROUTE_PATHS } from "@/lib/index";
import { Link } from "react-router-dom";
import { Microscope, ActivitySquare, TestTube2, AlertTriangle, ArrowRight, CheckCircle2, FlaskConical, Dna } from "lucide-react";

export default function Labor() {
  const laborBereiche = [
    {
      title: "Vollblut-Mineralstoffanalyse",
      desc: "Standard-Labore messen oft nur im Serum. Wir testen das Zell-Innere (K-Mg-Cu-Fe-Se-Zn etc.), um echte intra-zelluläre Versorgungsdefizite aufzudecken.",
      icon: <Microscope className="w-6 h-6 text-accent" />
    },
    {
      title: "Hormonprofil (Speichel/Blut)",
      desc: "Analyse der freien Hormone: Östrogendominanz, Progesteronmangel, Testosteron, DHEA, Cortisol-Tagesprofil und essentielle Schilddrüsenwerte (T3/T4).",
      icon: <Dna className="w-6 h-6 text-accent" />
    },
    {
      title: "Mitochondrien-Diagnostik",
      desc: "Spezialtests auf ATP-Produktion, nitrosativen & oxidativen Stress (MDA-LDL, Nitrotyrosin), L-Lactat & Pyruvat für die Zellenergie.",
      icon: <FlaskConical className="w-6 h-6 text-accent" />
    },
    {
      title: "Darm- & Mikrobiomanalyse",
      desc: "Detaillierte Stuhldiagnostik bei Leaky-Gut, Dysbiose, Entzündungsmarkern, SIBO (Fehlbesiedlung) und Malabsorption.",
      icon: <ActivitySquare className="w-6 h-6 text-accent" />
    }
  ];

  return (
    <div className="bg-background min-h-screen font-sans">
      <SEO 
        title="Labor & Diagnostik | Naturheilpraxis feminatalis" 
        description="Ursachenforschung statt Symptombehandlung. Wir nutzen spezialisierte Labordiagnostik (Vollblut, Speichel, Stuhl) für deine Gesundheit." 
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-muted/20 text-center">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6 uppercase tracking-wider">
            Zahlen, Daten, Fakten
          </div>
          <h1 className="text-4xl md:text-7xl font-serif text-primary mb-8 leading-[1.1]">
            Diagnostik <br />
            <span className="text-accent italic font-light">Das Fundament deiner Therapie</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto italic text-center">
            "Wer misst, misst Mist – gilt nur bei falscher Methodik. Wir messen dort, wo das Leben stattfindet: In deinen Zellen."
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 text-left">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-primary text-white p-12 lg:p-20 rounded-[4rem] shadow-2xl relative overflow-hidden text-left mb-24 max-w-5xl mx-auto">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 -mr-48 -mt-48 rounded-full blur-3xl"></div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-start text-left">
              <div className="text-left">
                <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-8 text-white leading-tight">Warum Standard-Blutbilder <br />oft trügen</h2>
                <div className="prose prose-lg text-white/90 text-left mb-8">
                  <p>
                    Klassische Bluttests im Serum messen oft nur den Transportweg. Doch ob Nährstoffe wirklich in der Zelle ankommen, zeigt <strong>nur die Vollblutanalyse</strong>. 
                  </p>
                  <p>
                    Wir suchen zudem nicht nach "gerade nicht krank" innerhalb viel zu weiter Referenzbereiche, sondern nach deiner <strong>optimalen Performance</strong>.
                  </p>
                </div>
                <div className="space-y-4 text-left">
                  {[
                    "Vollblutanalyse statt reiner Serum-Messung",
                    "Freie, biologisch aktive Hormone (Speichel)",
                    "Ausschluss stiller Entzündungen (Silent Inflammation)",
                    "Erkennung von Umwelt- & Toxikologischen Belastungen"
                  ].map((text, i) => (
                    <div key={i} className="flex gap-4 items-start text-left">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm font-medium leading-relaxed text-white">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 lg:p-10 rounded-[2.5rem] border border-white/20 text-left">
                <AlertTriangle className="text-accent w-10 h-10 mb-6" />
                <h4 className="text-xl font-serif font-bold mb-4 text-white text-left">Wichtig zu wissen</h4>
                <p className="text-sm opacity-90 leading-relaxed italic text-white text-left">
                  Spezialisierte, präventionsmedizinische Laborleistungen werden von gesetzlichen Krankenkassen in der Regel nicht übernommen. Private Krankenversicherungen erstatten diese oft ganz oder teilweise nach der GebüH. <br /><br />
                  Die Investition lohnt sich: Du erhältst absolute Klarheit über die wahren Ursachen deiner langjährigen Beschwerden.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mb-16 text-center">
             <h2 className="text-3xl lg:text-4xl font-serif text-primary font-bold text-center">Unsere Diagnostik-Schwerpunkte</h2>
             <p className="text-muted-foreground font-medium mt-4 text-center">Präzise Analysen für eine maßgeschneiderte, evidenzbasierte Therapie.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-24 text-left">
             {laborBereiche.map((bereich, i) => (
               <div key={i} className="bg-white p-10 rounded-[3rem] border border-border shadow-sm group hover:border-accent transition-all text-left flex flex-col justify-between">
                  <div>
                    <div className="bg-muted/30 w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors text-left">
                      {bereich.icon}
                    </div>
                    <h3 className="text-2xl font-serif text-primary font-bold mb-4 text-left">{bereich.title}</h3>
                    <p className="text-muted-foreground leading-relaxed font-medium text-left">{bereich.desc}</p>
                  </div>
               </div>
             ))}
          </div>

          {/* Environmental & Toxins */}
          <div className="bg-muted/20 p-12 lg:p-20 rounded-[4rem] border border-border text-center max-w-5xl mx-auto shadow-inner">
             <h2 className="text-3xl font-serif text-primary mb-6 text-center">Umweltmedizin & Erregerdiagnostik</h2>
             <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium mb-12 text-center">
               Neben Mikronährstoffen testen wir intensiv auf Belastungen, die dein Immunsystem massiv blockieren können: Schwermetalle, Reaktivierungen von Viren (EBV), Borreliose oder hochentwickelte Panels für tiefgreifende Post-Covid-Syndrome.
             </p>
             <div className="flex flex-wrap justify-center gap-4 text-center">
               {["Schwermetalle", "Epstein-Barr-Virus (EBV)", "Borreliose / Co-Infektionen", "Post-Covid Panels", "Parasiten & Pilze", "Umwelttoxine / Weichmacher"].map((tag, i) => (
                 <span key={i} className="px-6 py-3 bg-white border border-border rounded-full text-sm font-bold text-primary shadow-sm hover:border-accent transition-colors">
                   {tag}
                 </span>
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-white border-t border-border text-center">
        <div className="container mx-auto px-4 max-w-4xl text-center">
           <TestTube2 className="w-16 h-16 text-accent mx-auto mb-8 animate-pulse text-center" />
           <h2 className="text-3xl md:text-6xl font-serif text-white mb-10 leading-tight font-bold text-center underline decoration-accent/30 underline-offset-8 decoration-4">
             Möchtest du Fakten <br />statt Vermutungen?
           </h2>
           <Link to={ROUTE_PATHS.CONTACT} className="inline-flex bg-accent text-white px-12 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-2xl flex items-center gap-3 border-none shadow-accent/20 mx-auto">
             Diagnostik-Termin anfragen <ArrowRight className="text-white w-6 h-6" />
           </Link>
           <p className="text-xs text-white/50 mt-10 italic font-medium max-w-md mx-auto text-center">
             Externe Laborrechnungen (z.B. Ganzimmun, Biovis, IMD) erfolgen transparent direkt durch die beauftragten Fachlabore an dich persönlich.
           </p>
        </div>
      </section>
    </div>
  );
}
