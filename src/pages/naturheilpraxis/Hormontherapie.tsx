import React from "react";
import SEO from "@/components/SEO";
import { ROUTE_PATHS } from "@/lib/index";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Activity, Zap, Heart, Info, Beaker, Scale } from "lucide-react";

export default function Hormontherapie() {
  const symptomsWomen = [
    "Zyklusbeschwerden (unregelmäßig, zu stark/schwach)",
    "Prämenstruelles Syndrom (PMS)",
    "Wechseljahresbeschwerden (Hitzewallungen, Schlafstörungen)",
    "Zysten und Myome",
    "Stimmungsschwankungen & Reizbarkeit"
  ];

  const symptomsMen = [
    "Bauchfettleibigkeit / 'Männerbusen'",
    "Erektionsstörungen & Libidoverlust",
    "Pathologisches Spermiogramm",
    "Prägnanter Verlust der Muskelmasse"
  ];

  const symptomsGeneral = [
    "Hartnäckige Akne & Hautprobleme",
    "Chronische Erschöpfung & Burnout",
    "Schilddrüsen-Funktionsstörungen",
    "Extreme Heißhungerattacken (Süßes)",
    "Diffuse Haarausfall-Schübe",
    "Beschleunigter Alterungsprozess"
  ];

  return (
    <div className="bg-background min-h-screen font-sans">
      <SEO 
        title="Bioidentische Hormontherapie | Naturheilpraxis feminatalis" 
        description="Bringe deine Hormone sanft und natürlich ins Gleichgewicht. Wir nutzen bioidentische Hormone & spezialisierte Speichel-Hormondiagnostik." 
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-muted/20 text-center">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6 uppercase tracking-wider">
            Natürliche Endokrinologie
          </div>
          <h1 className="text-4xl md:text-7xl font-serif text-primary mb-8 leading-[1.1]">
            Hormonelle Balance <br />
            <span className="text-accent italic font-light">statt chemischer Irritation</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto italic text-center font-medium">
            "Wenn der hochkomplexe Hormonhaushalt kippt, hilft keine symptomatische Einheits-Pille. Wir setzen auf absolute molekulare Identität."
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 text-left">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-white border border-border p-12 lg:p-20 rounded-[4rem] shadow-sm mb-24 max-w-5xl mx-auto text-left">
            <h2 className="text-3xl lg:text-5xl font-serif text-primary mb-12 text-left leading-tight">Was sind eigentlich <br />bioidentische Hormone?</h2>
            <div className="grid lg:grid-cols-2 gap-16 items-start text-left">
              <div className="space-y-6 text-muted-foreground leading-relaxed font-medium text-left">
                <p>
                  Bei bioidentischen Hormonen handelt es sich um pflanzlich basierte „Hormonkopien“ (meist aus der Yams-Wurzel), deren Wirkstoffmoleküle zu <strong>100 % mit der Molekülstruktur deiner eigenen, menschlichen Hormone identisch</strong> sind.
                </p>
                <p>
                  Im großen Unterschied zu synthetischen, chemischen Hormonderivaten (wie in der klassischen Anti-Baby-Pille) werden sie von deinem Körper kompromisslos als „eigen“ und natürlich erkannt. Das ermöglicht identische physiologische Effekte, ohne deine hochsensiblen hormonellen Regelkreisläufe im Gehirn zu irritieren.
                </p>
                <div className="flex gap-4 items-start bg-accent/5 p-6 rounded-2xl border border-accent/20 mt-8">
                  <Zap className="text-accent shrink-0 mt-1" />
                  <p className="text-sm font-serif italic text-primary leading-relaxed text-left">
                    Ein moderner systemischer Behandlungsansatz nutzt zudem oft homöopathisch potenzierte Hormonglobuli oder transdermale (Haut-) Cremes, um die verlustreiche Leber- und Darmpassage (First-Pass-Effekt) gänzlich zu umgehen – so genügen oft absolut minimale Dosierungen.
                  </p>
                </div>
              </div>
              
              <div className="bg-primary text-white p-10 rounded-[3rem] shadow-lg text-left">
                <Scale className="text-accent w-10 h-10 mb-6" />
                <h3 className="text-2xl font-serif font-bold text-white mb-8 text-left">Wann ist die Therapie sinnvoll?</h3>
                <div className="space-y-5 text-left">
                  {[
                    "Zyklus- & massive Wechseljahresbeschwerden",
                    "Cortisol-Imbalancen",
                    "Latente Schilddrüsen-Funktionsstörungen",
                    "Unerfüllter Kinderwunsch in jedem Stadium",
                    "Burnout-Symptomatik & Schlafstörungen"
                  ].map((text, i) => (
                    <div key={i} className="flex gap-4 items-start bg-white/5 p-4 rounded-xl border border-white/10 text-left">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                      <span className="text-sm font-medium leading-relaxed font-medium text-white">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-16 text-center">
            <h2 className="text-3xl lg:text-4xl font-serif text-primary mb-4 text-center">Beschwerdebilder im Fokus</h2>
            <p className="text-muted-foreground font-medium text-center">Hormonelle Imbalancen äußern sich bei Frauen und Männern extrem unterschiedlich.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-24 text-left">
             {[
               { title: "Speziell für Frauen", icon: <Heart className="w-6 h-6 text-pink-500" />, items: symptomsWomen, color: "bg-pink-50/50 hover:border-pink-200 border-pink-100" },
               { title: "Speziell für Männer", icon: <Activity className="w-6 h-6 text-blue-500" />, items: symptomsMen, color: "bg-blue-50/50 hover:border-blue-200 border-blue-100" },
               { title: "Allgemeine Symptome", icon: <Beaker className="w-6 h-6 text-accent" />, items: symptomsGeneral, color: "bg-muted/30 hover:border-accent border-border" }
             ].map((group, i) => (
               <div key={i} className={`${group.color} p-10 rounded-[3rem] border transition-colors shadow-sm text-left`}>
                 <div className="flex items-center gap-3 mb-6">
                   {group.icon}
                   <h4 className="text-2xl font-serif text-primary font-bold text-left">{group.title}</h4>
                 </div>
                 <ul className="space-y-4">
                    {group.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <Check className="text-accent shrink-0 w-5 h-5 mt-0.5" />
                        <span className="text-sm text-muted-foreground font-medium leading-snug text-left">{item}</span>
                      </li>
                    ))}
                 </ul>
               </div>
             ))}
          </div>

          <div className="bg-primary text-white border border-border p-12 lg:p-20 rounded-[4rem] text-center max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 -mr-48 -mt-48 rounded-full blur-3xl"></div>
            <div className="relative z-10 text-center mx-auto max-w-3xl">
               <Activity className="w-16 h-16 text-accent mx-auto mb-8 animate-pulse text-center" />
               <h2 className="text-3xl md:text-5xl font-serif text-white mb-8 leading-tight font-bold text-center">Ganzheitliche Diagnose <br />ist absolute Pflicht</h2>
               <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-medium text-center mb-12">
                 Jeder erfolgreichen Hormon-Regulation geht eine ausführliche Anamnese und eine hochpräzise <strong>Speichel- oder Blutdiagnostik</strong> voraus. Wir betrachten dabei untrennbar auch deine Leber- und Darmgesundheit sowie deinen zellulären Mikronährstoffstatus.
               </p>
               <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <Link to={ROUTE_PATHS.LABOR} className="inline-flex bg-accent text-white px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-3 border-none shadow-accent/20">
                    Infos zur Labordiagnostik <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link to={ROUTE_PATHS.CONTACT} className="inline-flex bg-white/10 backdrop-blur-sm text-white border border-white/20 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center">
                    Beratung anfragen
                  </Link>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Disclosure */}
      <section className="py-20 bg-muted/20 border-t border-border">
        <div className="container mx-auto px-4 max-w-5xl">
           <div className="bg-white border border-border p-10 rounded-[2.5rem] flex flex-col md:flex-row gap-8 items-start shadow-sm">
              <div className="bg-muted/50 p-4 rounded-full shrink-0">
                 <Info className="text-primary opacity-50 w-8 h-8" />
              </div>
              <div className="text-sm text-muted-foreground leading-relaxed italic text-left font-medium">
                <p className="mb-2 text-primary font-bold not-italic">Wichtiger rechtlicher Hinweis:</p>
                <p>
                  Die spezifische Hormontherapie mit naturidentischen Hormonen erfolgt in unserer Praxis unter Einbezug homöopathisch aufbereiteter Wirkstoffe (Globuli, Spagyrik oder Cremes) und pflanzlicher Phytotherapeutika gemäß § 38 Abs. 1 AMG. Diese feinstoffliche Form der ganzheitlichen Therapie ist wissenschaftlich in Teilen umstritten und wird von der klassischen quantitativen Schulmedizin nicht vollumfänglich anerkannt. Die hervorragenden Ergebnisse beruhen auf vielerlei Studien, Erkenntnissen der funktionellen Medizin und langjähriger Praxiserfahrung in der modernen Naturheilkunde.
                </p>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
