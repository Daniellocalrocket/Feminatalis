import React from "react";
import SEO from "@/components/SEO";
import { ROUTE_PATHS } from "@/lib/index";
import { Link } from "react-router-dom";
import { Compass, Check, ArrowRight, Activity, Zap, Wind, Moon, Sun, Leaf } from "lucide-react";
import SplitScreenHero from "@/components/SplitScreenHero";
import PreisTransparenz from "@/components/PreisTransparenz";

export default function TCM() {
  const pillars = [
    { title: "Akupunktur", desc: "Regulation des Qi-Flusses durch hochpräzise Reize an Energie-Meridianpunkten.", icon: <Zap className="text-accent w-8 h-8" /> },
    { title: "Ernährung (5 Elemente)", desc: "Natürliche Lebensmittel als Heilmittel – exakt angepasst an deinen Konstitutionstyp.", icon: <Leaf className="text-accent w-8 h-8" /> },
    { title: "Schröpfen & Moxa", desc: "Tiefes Lösen von massiven Blockaden und intensives Wärmen bei Kältesymptomen.", icon: <Sun className="text-accent w-8 h-8" /> }
  ];

  return (
    <div className="bg-background min-h-screen font-sans">
      <SEO 
        title="Traditionelle Chinesische Medizin (TCM) | Naturheilpraxis feminatalis" 
        description="Bringe Yin und Yang ins harmonische Gleichgewicht. Wir nutzen Akupunktur und Zungendiagnostik für deine ganzheitliche Heilung." 
      />


      <SplitScreenHero
        badge="Traditionelle Chinesische Medizin"
        title={<>Sanfte Heilung durch <br /><span className="text-accent italic font-light">TCM & Akupunktur</span></>}
        subtitle="Erlebe die tiefe Balance von Körper und Geist. Wir verbinden jahrtausendealtes Wissen mit modernen diagnostischen Ansätzen für deine nachhaltige Gesundheit."
        imageSrc="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop"
        imageAlt="TCM Behandlung und Akupunktur"
        imageKey="img_hero_tcm"
      >
        <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-primary text-white px-10 py-5 rounded-2xl font-bold hover:shadow-2xl transition-all shadow-xl active:scale-95 flex items-center gap-2">
          Kostenfreie Vor-Analyse anfragen
        </Link>
      </SplitScreenHero>

      {/* Intro Section */}
      <section className="py-20 text-left">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-24 text-left">
            <div className="space-y-8 text-left">
              <h2 className="text-3xl lg:text-4xl font-serif text-primary leading-tight text-left">Ganzheitliche Diagnose <br />durch Puls & Zunge</h2>
              <div className="prose prose-lg text-muted-foreground text-left font-medium">
                <p>
                  In der faszinierenden philosophischen Sicht der TCM betrachten wir den Menschen immer als ein offenes, vernetztes System, in dem die Lebensenergie <strong>(Qi)</strong> stets vollkommen frei fließen muss. Schwere Krankheiten entstehen dann, wenn dieser natürliche Fluss durch äußere klimatische Einflüsse, tiefsitzende Emotionen oder eine einseitige Lebensweise blockiert wird.
                </p>
                <p>
                  Durch die hochdifferenzierte <strong>Zungen- und Pulsdiagnostik</strong> erhalten wir einen sehr tiefen, unbestechlichen Einblick in den Zustand deiner inneren Organe, noch lange bevor sich erste klinische Symptome im Labor-Blutbild zeigen. Wir finden die echte Wurzel deines Ungleichgewichts, anstatt nur das oberflächliche Symptom zu unterdrücken.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-6 pt-6 text-left">
                  <div className="flex items-center gap-4 p-5 bg-white border border-border shadow-sm rounded-[2rem]">
                    <div className="bg-muted/30 p-3 rounded-xl">
                       <Sun className="text-accent w-6 h-6 shrink-0" />
                    </div>
                    <div>
                      <span className="text-lg font-bold text-primary text-left font-serif block">Yang</span>
                      <span className="text-sm font-medium text-muted-foreground leading-snug block">Funktion, Aktivität & Wärme</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-5 bg-white border border-border shadow-sm rounded-[2rem]">
                    <div className="bg-muted/30 p-3 rounded-xl">
                       <Moon className="text-primary w-6 h-6 shrink-0" />
                    </div>
                    <div>
                      <span className="text-lg font-bold text-primary text-left font-serif block">Yin</span>
                      <span className="text-sm font-medium text-muted-foreground leading-snug block">Substanz, Ruhe & Kälte</span>
                    </div>
                  </div>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6 text-left mt-8 lg:mt-0">
              {pillars.map((pillar, i) => (
                <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-border shadow-sm hover:border-accent transition-all group">
                   <div className="mb-6 group-hover:drop-shadow-md transition-all bg-muted/20 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-accent/10">{pillar.icon}</div>
                   <h4 className="text-xl font-bold text-primary mb-4 text-left font-serif">{pillar.title}</h4>
                   <p className="text-sm text-muted-foreground leading-relaxed text-left font-medium">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary text-white p-12 lg:p-24 rounded-[4rem] text-center shadow-2xl relative overflow-hidden mb-24 max-w-5xl mx-auto">
             <div className="absolute top-0 right-0 p-8 text-white/5 pointer-events-none">
                <Compass size={300} className="-mr-10 -mt-10" />
             </div>
             <h2 className="text-3xl lg:text-5xl font-serif mb-12 text-white font-bold relative z-10 leading-tight">TCM-Anwendungsgebiete</h2>
             <div className="grid md:grid-cols-3 gap-8 relative z-10 text-left">
                {[
                  { title: "Hormonelle Störungen", desc: "Zyklus- & Wechseljahr-Beschwerden, Unterstützung von Kinderwunsch-Behandlung (z.B. IVF)." },
                  { title: "Ausbalanciertes Immunsystem", desc: "Hartnäckige Allergien & Heuschnupfen, chronische Sinusitis, häufige langwierige Infekte." },
                  { title: "Innere Ruhe & Kraft", desc: "Massive Schlafstörungen, Burnout, Erschöpfung, undefinierte psychosomatische Beschwerden." }
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 backdrop-blur-sm p-8 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-colors">
                    <h4 className="text-lg font-bold mb-4 text-white font-serif">{item.title}</h4>
                    <p className="text-sm font-medium text-white/80 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
             </div>
             <div className="mt-16 flex flex-col sm:flex-row justify-center gap-6 relative z-10">
               <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-white text-primary px-12 py-5 rounded-2xl font-bold hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-3 border-none text-lg">
                 Puls- & Zungendiagnose anfragen <ArrowRight size={24} className="text-primary" />
               </Link>
             </div>
          </div>
        </div>
      </section>

      <PreisTransparenz 
        preisHint="Akupunktur ab 26,- €" 
        hinweis="Abrechnung nach GebüH. Private Kassen übernehmen i.d.R. die Kosten."
      />
    </div>
  );
}
