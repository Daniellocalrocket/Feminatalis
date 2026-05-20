import React from "react";
import SEO from "@/components/SEO";
import { ROUTE_PATHS } from "@/lib/index";
import { Link } from "react-router-dom";
import PreisTransparenz from "@/components/PreisTransparenz";
import { ShieldAlert, Syringe, Droplets, ArrowRight, CheckCircle2, FlaskConical, AlertTriangle, BatteryLow, TestTube } from "lucide-react";
import SplitScreenHero from "@/components/SplitScreenHero";

export default function Schwermetall() {
  const symptome = [
    "Chronische Müdigkeit & Antriebslosigkeit",
    "Konzentrationsstörungen & Brain Fog",
    "Kopfschmerzen & Migräne",
    "Gelenk- und Muskelschmerzen",
    "Immunschwäche & Infektanfälligkeit",
    "Neurologische Symptome (Kribbeln, Zittern)",
    "Hormonelle Dysbalancen",
    "Unerfüllter Kinderwunsch / Fruchtbarkeitsprobleme"
  ];

  const ablaufPhasen = [
    {
      title: "1. Provokationstest (Urin)",
      desc: "Zunächst verabreichen wir einen Chelatbildner (z.B. DMPS/EDTA). Dieser mobilisiert Metalle. Der anschließende Urintest im Speziallabor zeigt exakt, welche Gifte in deinen Geweben gelagert sind.",
      icon: <TestTube className="w-8 h-8 text-accent" />
    },
    {
      title: "2. Chelat-Infusionen",
      desc: "Wir nutzen hochwirksame Infusionen mit Chelatbildnern wie Ca-/Na-EDTA in Kombination mit Alpha-Liponsäure (ALA). Letztere ist extrem wertvoll, da sie sowohl wasser- als auch fettlöslich ist, die Blut-Hirn-Schranke überwindet und zelluläre Toxine mobilisiert.",
      icon: <Syringe className="w-8 h-8 text-accent" />
    },
    {
      title: "3. Ausleitung & Organunterstützung",
      desc: "Die stabil gebundenen Chelat-Komplexe werden sicher über Niere, Leber und Darm ausgeschieden. Um eine Rückvergiftung auszuschließen, müssen diese Ausscheidungswege maximal gestärkt werden.",
      icon: <Droplets className="w-8 h-8 text-accent" />
    },
    {
      title: "4. Mineralstoff-Refill",
      desc: "Da Chelate unspezifisch auch wertvolle Spurenelemente binden, füllen wir deine Speicher in Folgesitzungen mit hochdosiertem Zink, Magnesium und Selen gezielt wieder auf.",
      icon: <FlaskConical className="w-8 h-8 text-accent" />
    }
  ];

  return (
    <div className="bg-background min-h-screen font-sans">
      <SEO 
        title="Schwermetallausleitung & Chelat-Therapie | Naturheilpraxis feminatalis" 
        description="Gezielte Chelat-Therapie bei Quecksilber, Blei oder Aluminium im Körper. Entgifte deine Zellen für mehr Energie und einen klaren Geist." 
      />

      <SplitScreenHero
        badge="Detox & Entgiftung"
        title={<>Schwermetall- <br /><span className="text-accent italic font-light">Ausleitung & Entgiftung</span></>}
        subtitle="Befreie deinen Körper von verborgenen Lasten. Durch gezielte Labordiagnostik und individuelle Ausleitungsverfahren schaffen wir die Basis für einen gesunden Stoffwechsel."
        imageSrc="https://images.unsplash.com/photo-1532187875605-1ef6c237f1f0?q=80&w=2070&auto=format&fit=crop"
        imageAlt="Schwermetallausleitung und Entgiftung"
        imageKey="img_hero_schwermetall"
      >
        <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-primary text-white px-10 py-5 rounded-2xl font-bold hover:shadow-2xl transition-all shadow-xl active:scale-95 flex items-center gap-2">
          Kostenfreie Vor-Analyse anfragen
        </Link>
      </SplitScreenHero>

      {/* Intro & Indikationen Section */}
      <section className="py-20 text-left">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
            <div className="space-y-8">
              <div className="bg-white p-10 rounded-[3rem] border border-border shadow-sm text-left">
                <BatteryLow className="w-12 h-12 text-accent mb-6" />
                <h2 className="text-3xl font-serif text-primary mb-6 text-left">Die Blockade der Kraftwerke</h2>
                <div className="prose prose-lg text-muted-foreground leading-relaxed font-medium">
                  <p>
                    Schwermetalle wie <strong>Blei, Kadmium, Aluminium oder Quecksilber</strong> (z.B. aus alten Amalgamfüllungen) bauen sich über Jahrzehnte im Körper – primär im Fettgewebe und Gehirn – auf.
                  </p>
                  <p>
                    Sie verdrängen an den Rezeptoren lebenswichtige Spurenelemente wie Zink oder Eisen. Infolgedessen blockieren sie in den Zellen unsere Enzymsysteme. Die Folge: Die Zell-Kraftwerke (Mitochondrien) können kein ATP (Energie) mehr produzieren.
                  </p>
                </div>
                <div className="mt-8 p-6 bg-accent/5 rounded-2xl border border-accent/20 italic text-sm text-primary font-medium text-left">
                  Erst wenn diese Schwermetall-Bremsen gelöst sind, kann dein Körper Mikronährstoffe wieder aufnehmen und chronische Blockaden lösen.
                </div>
              </div>
            </div>
            
            <div className="space-y-6 text-left">
              <h3 className="text-2xl font-serif text-primary font-bold text-left mb-6">Mögliche Anzeichen einer Vergiftung:</h3>
              <div className="grid sm:grid-cols-2 gap-4 mt-2">
                {symptome.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-border shadow-sm hover:border-accent transition-colors">
                    <ShieldAlert className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm font-bold text-primary leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16 text-center">
             <AlertTriangle className="w-16 h-16 text-accent mx-auto mb-6 animate-pulse" />
             <h2 className="text-3xl lg:text-5xl font-serif text-white font-bold text-center mb-6">Die Chelat-Therapie</h2>
             <p className="text-white/80 font-medium mt-4 text-center max-w-2xl mx-auto italic text-lg">
               Sicher, evidenzbasiert und laborgeprüft. Wir raten dringend von "Eigenversuchen" mit Algen oder Koriander ab, da ungebundene Gifte im Gehirn zu schweren Umverteilungsschäden führen können.
             </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
             {ablaufPhasen.map((phase, i) => (
               <div key={i} className="bg-white/10 backdrop-blur-sm p-8 rounded-[2.5rem] border border-white/20 text-left hover:bg-white/15 transition-all">
                  <div className="mb-6 bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center">
                    {phase.icon}
                  </div>
                  <h3 className="text-xl font-serif text-white font-bold mb-4">{phase.title}</h3>
                  <p className="text-white/80 leading-relaxed text-sm font-medium">{phase.desc}</p>
               </div>
             ))}
          </div>

          {/* Professional Note: Organ-Drainage */}
          <div className="mt-16 bg-white text-primary p-8 lg:p-12 rounded-[3rem] border border-accent/20 shadow-xl max-w-4xl mx-auto relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-accent/15 rounded-bl-[150px]"></div>
             <div className="flex flex-col md:flex-row gap-8 items-start relative z-10 text-left">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0 mt-1">
                   <ShieldAlert size={28} />
                </div>
                <div className="text-left">
                   <h4 className="font-serif font-bold text-xl mb-3 text-primary text-left">Medizinische Notwendigkeit: Organgestützte Ausleitung</h4>
                   <p className="text-sm text-muted-foreground leading-relaxed font-medium text-left">
                      Eine intravenöse Chelat-Therapie mobilisiert abgelagerte Schwermetalle mit extrem hoher Effektivität. Um eine systemische Rückvergiftung oder die gefährliche Umverteilung von Toxinen im Körper zu verhindern, müssen die primären Ausscheidungsorgane – <strong>Leber, Niere und Darm</strong> – auf Hochtouren laufen. 
                   </p>
                   <p className="text-sm text-muted-foreground leading-relaxed font-medium mt-3 text-left">
                      Daher begleiten wir jede Infusions-Sitzung zwingend mit einer intensiven oralen Drainage-Unterstützung (Phytotherapie für die Leber, spezielle Nierenkräuter sowie Bindemittel wie Zeolith/Chlorella im Darm), damit gelöste Gifte den Körper auch tatsächlich auf direktem Weg verlassen.
                   </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      <PreisTransparenz 
        preisHint="Provokationstest ab 100,- €" 
        hinweis="Zzgl. Laborkosten und Material (Chelatbildner)."
      />

      {/* Final CTA */}
      <section className="py-24 bg-muted/20 border-t border-border text-center">
        <div className="container mx-auto px-4 max-w-4xl text-center">
           <FlaskConical className="w-16 h-16 text-primary mx-auto mb-8 opacity-20" />
           <h2 className="text-3xl md:text-5xl font-serif text-primary mb-8 leading-tight font-bold text-center">Denk klarer, fühl dich leichter</h2>
           <p className="text-xl text-muted-foreground leading-relaxed font-medium text-center mb-12 max-w-2xl mx-auto">
             Beginne mit einem Provokationstest und verschaffe dir Klarheit über deine tatsächliche Belastung.
           </p>
           <div className="flex justify-center">
              <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="inline-flex bg-primary text-white px-12 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-2xl flex items-center justify-center gap-3 shadow-primary/20 border-none">
                Kostenfreie Vor-Analyse anfragen <ArrowRight className="text-white w-6 h-6" />
              </Link>
           </div>
        </div>
      </section>
    </div>
  );
}
