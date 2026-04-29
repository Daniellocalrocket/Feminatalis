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
        badge="Ursachendiagnostik"
        title={<>Labor- <br /><span className="text-accent italic font-light">Analytik & Diagnostik</span></>}
        subtitle="Wir raten nicht – wir wissen. Mit hochspezialisierter Labordiagnostik blicken wir tief in dein inneres Milieu, um die wahren Ursachen deiner Beschwerden zu finden."
        imageSrc="https://images.unsplash.com/photo-1579152276503-3406322316e6?q=80&w=2070&auto=format&fit=crop"
        imageAlt="Labordiagnostik und Analysen"
        imageKey="img_hero_labor"
      >
        <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-primary text-white px-10 py-5 rounded-2xl font-bold hover:shadow-2xl transition-all shadow-xl active:scale-95 flex items-center gap-2">
          Kostenfreie Vor-Analyse anfragen <ArrowRight size={20} />
        </Link>
      </SplitScreenHero>

      <section className="py-24 text-left">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
            <div className="space-y-8">
              <h2 className="text-4xl font-serif text-primary leading-tight">Präzisionsmedizin statt Vermutung</h2>
              <div className="prose prose-lg text-muted-foreground leading-relaxed">
                <p>
                  Im klassischen Medizinsystem werden oft nur Standardwerte erhoben, die erst dann "auffällig" sind, wenn bereits eine manifeste Erkrankung vorliegt. Unsere funktionelle Labordiagnostik geht einen entscheidenden Schritt weiter.
                </p>
                <p>
                  Wir suchen nach <strong>subklinischen Störungen</strong> und Ungleichgewichten, bevor daraus eine Krankheit entsteht. Wir blicken in die Zelle, in den Darm und auf die hormonellen Regelkreise.
                </p>
              </div>
              <div className="bg-white border border-border/50 p-8 rounded-[2.5rem] shadow-sm flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <ShieldCheck size={24} />
                </div>
                <p className="font-medium text-primary italic leading-relaxed">
                  Wir arbeiten mit führenden Fachlaboren für funktionelle Medizin in ganz Europa zusammen, um Ihnen die präzisesten Ergebnisse zu liefern.
                </p>
              </div>
            </div>

            <div className="grid gap-6">
              {diagnosticItems.map((item, i) => (
                <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-border/50 shadow-sm flex items-start gap-6 group hover:border-accent transition-all">
                  <div className="bg-muted/30 w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-accent/10 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-3 font-serif text-xl">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary text-white p-12 lg:p-20 rounded-[4rem] text-center shadow-2xl relative overflow-hidden mb-24">
             <div className="absolute top-0 left-0 w-64 h-64 bg-accent/20 -ml-32 -mt-32 rounded-full blur-3xl opacity-20"></div>
             <FlaskConical className="w-16 h-16 text-accent mx-auto mb-8 relative z-10" />
             <h2 className="text-3xl lg:text-5xl font-serif mb-8 text-white font-bold relative z-10">Molekulare Detektivarbeit</h2>
             <p className="text-xl opacity-90 mb-12 max-w-3xl mx-auto leading-relaxed relative z-10">
               Jedes Symptom hat eine biochemische Entsprechung. Ob Vitamin-Mangel im Vollblut, Dysbiose im Stuhl oder Burnout-Profile im Speichel – wir finden die fehlenden Puzzleteile deiner Gesundheit.
             </p>
             <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-white text-primary px-12 py-5 rounded-2xl font-bold hover:bg-accent hover:text-white transition-all shadow-xl inline-flex items-center gap-3 relative z-10">
               Diagnostik-Termin anfragen <ArrowRight size={20} />
             </Link>
          </div>
        </div>
      </section>

      <PreisTransparenz />
    </div>
  );
}
