import React from "react";
import SEO from "@/components/SEO";
import { ROUTE_PATHS } from "@/lib/index";
import { Link } from "react-router-dom";
import { FlaskConical, Dna, ActivitySquare, ShieldCheck, ArrowRight } from "lucide-react";
import SplitScreenHero from "@/components/SplitScreenHero";
import PreisTransparenz from "@/components/PreisTransparenz";

export default function Labor() {
  const diagnosticItems = [
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
      <SplitScreenHero
        badge="Funktionelle Medizindiagnostik"
        title={<>Metabolic Mapping: <br /><span className="text-accent italic font-light">Wir raten nicht – wir wissen</span></>}
        subtitle="Symptome sind nur die Sprache deines Körpers. Mit hochspezialisierter Labordiagnostik (Vollblut, Speichel, Stuhl) blicken wir tief in deine Biochemie, um die wahren Ursachen deiner Beschwerden sichtbar zu machen. Präzise, wissenschaftlich und kompromisslos."
        imageSrc="https://images.unsplash.com/photo-1579152276503-3406322316e6?q=80&w=2070&auto=format&fit=crop"
        imageAlt="Labordiagnostik und Analysen"
        imageKey="img_hero_labor"
      >
        <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-primary text-white px-10 py-5 rounded-2xl font-bold hover:shadow-2xl transition-all shadow-xl active:scale-95 flex items-center gap-2">
          Analyse-Gespräch anfragen <ArrowRight size={20} />
        </Link>
      </SplitScreenHero>

      {/* The Difference: Serum vs. Vollblut */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl lg:text-5xl font-serif text-primary mb-10 leading-tight">Warum Standard-Laborwerte <br /><span className="text-accent italic">oft nur die halbe Wahrheit sagen</span></h2>
          <div className="prose prose-lg mx-auto text-muted-foreground leading-relaxed">
            <p>
              In der klassischen Medizin wird meist das Serum gemessen. Doch der Körper hält die Serumwerte (z.B. bei Magnesium oder Kalium) um jeden Preis stabil, indem er die Reserven aus den Zellen abzieht. Ein „normaler“ Serumwert kann also einen massiven zellulären Mangel maskieren.
            </p>
            <p className="mt-6">
              Wir nutzen die <strong>Vollblut-Diagnostik</strong>, um die tatsächliche Sättigung deiner Zellen zu messen. Nur so finden wir heraus, warum deine Mitochondrien nicht genug Energie produzieren oder warum dein Nervensystem nicht zur Ruhe kommt. Ergänzend messen wir die <strong>Herzratenvariabilität (HRV)</strong>, um den Funktionszustand deines Vagus-Nervs objektiv sichtbar zu machen.
            </p>
          </div>
        </div>
      </section>

      {/* Diagnostic Capabilities Grid */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left mb-24">
            {[
              { title: "Vollblut-Analyse", desc: "Präzise Messung der zellulären Sättigung von Zink, Magnesium, Selen und weiteren Co-Faktoren.", icon: <ActivitySquare className="w-8 h-8 text-accent" /> },
              { title: "HRV & Vagus-Check", desc: "Objektive Messung deines Stresslevels und der Regulationsfähigkeit deines Nervensystems.", icon: <FlaskConical className="w-8 h-8 text-accent" /> },
              { title: "KyberStatus & Darm", desc: "Tiefenanalyse des Mikrobioms, Entzündungsmarker (Zonulin, Calprotectin) und SIBO-Diagnostik.", icon: <Dna className="w-8 h-8 text-accent" /> },
              { title: "Hormon-Mapping", desc: "Speichel-Diagnostik für freie Hormone (Östrogen, Progesteron, Cortisol) und Schilddrüsen-Full-Screening.", icon: <ShieldCheck className="w-8 h-8 text-accent" /> },
              { title: "OAT-Stoffwechseltest", desc: "Organische Säuren im Urin zeigen Blockaden im Citratzyklus (Zellenergie) und Neurotransmitter-Mängel.", icon: <ActivitySquare className="w-8 h-8 text-accent" /> },
              { title: "Silent Inflammation", desc: "Frühzeitiges Erkennen von stillen Entzündungen (hs-CRP, TNF-alpha), bevor Krankheiten entstehen.", icon: <FlaskConical className="w-8 h-8 text-accent" /> }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 lg:p-12 rounded-[3.5rem] border border-border hover:border-accent transition-all hover:shadow-2xl flex flex-col group">
                <div className="bg-muted/30 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                   {item.icon}
                </div>
                <h3 className="text-2xl font-serif text-primary font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-medium mb-8 opacity-80">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-primary text-white p-12 lg:p-20 rounded-[5rem] shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-accent/20 -mr-64 -mt-64 rounded-full blur-[100px] opacity-20"></div>
             <div className="flex flex-col lg:flex-row gap-16 items-center text-left">
                <div className="lg:w-2/3 text-left">
                  <h2 className="text-3xl lg:text-5xl font-serif mb-8 text-white font-bold leading-tight text-left">Molekulare Detektivarbeit</h2>
                  <p className="text-xl opacity-90 mb-10 leading-relaxed font-medium text-left">
                    „Wir warten nicht, bis ein Wert außerhalb der Norm liegt. Wir optimieren Werte für ein Leben voller Energie. Ob Kinderwunsch, Long-Covid oder chronische Erschöpfung – wir finden das fehlende Puzzleteil.“
                  </p>
                  <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-white text-primary px-12 py-5 rounded-2xl font-bold hover:bg-accent hover:text-white transition-all shadow-xl inline-flex items-center gap-3">
                    Diagnostik-Termin anfragen <ArrowRight size={20} />
                  </Link>
                </div>
                <div className="lg:w-1/3 bg-white/10 backdrop-blur-md p-10 rounded-[3rem] border border-white/20 text-center">
                   <h4 className="text-accent font-bold text-2xl mb-6">Partnerlabore</h4>
                   <p className="text-sm opacity-90 leading-relaxed italic text-white">
                     Wir arbeiten mit führenden europäischen Speziallaboren wie Ganzimmun, Biovis und ImuPro zusammen, um modernste Testverfahren zu garantieren.
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
