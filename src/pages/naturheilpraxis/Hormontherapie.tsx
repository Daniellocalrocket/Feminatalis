import React from "react";
import SEO from "@/components/SEO";
import { ROUTE_PATHS } from "@/lib/index";
import { Link } from "react-router-dom";
import { Activity, ShieldCheck, ArrowRight, Heart, Zap, Sparkles } from "lucide-react";
import SplitScreenHero from "@/components/SplitScreenHero";
import PreisTransparenz from "@/components/PreisTransparenz";
import { motion } from "framer-motion";

export default function Hormontherapie() {
  const fokusBereiche = [
    { title: "Speichel-Hormontests", desc: "Präzise Messung der freien, biologisch aktiven Hormone für eine exakte Diagnose.", icon: Activity },
    { title: "Natürliches Progesteron", desc: "Sanfter Ausgleich bei Progesteronmangel und Östrogendominanz mit bioidentischen Stoffen.", icon: Heart },
    { title: "Schilddrüsen-Support", desc: "Ganzheitliche Betrachtung der Schilddrüsenachse (T3, T4, rT3) bei Hashimoto und Müdigkeit.", icon: Sparkles },
    { title: "Sexualhormon-Balance", desc: "Behandlung von Zyklusstörungen, Beschwerden im Klimakterium und Menopause mit natürlichen Mitteln.", icon: Sparkles },
    { title: "Stress- & Glückshormone", desc: "Diagnostik und Unterstützung bei stressbedingten Symptomen wie depressive Verstimmungen, Schlafmangel & Reizbarkeit.", icon: Activity }
  ];

  return (
    <div className="bg-background min-h-screen font-sans">
      <SEO 
        title="Natürliche Hormontherapie | Naturheilpraxis feminatalis" 
        description="Bringe deine Hormone sanft und natürlich ins Gleichgewicht. Spezialisierte Diagnostik und Therapie bei Kinderwunsch, PMS und Wechseljahren." 
      />

      <SplitScreenHero
        badge="Bioidentische Hormon-Balance"
        title={<>Wieder du selbst sein: <br /><span className="text-accent italic font-light">Die Kraft bioidentischer Hormone</span></>}
        subtitle="Hormone sind die Dirigenten deines Stoffwechsels. Wenn sie aus dem Takt geraten, leidet das gesamte Lebensgefühl. Wir bringen dein System mit bioidentischen Impulsen – exakten Kopien deiner körpereigenen Moleküle – sanft und präzise wieder in Einklang."
        imageSrc="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2070&auto=format&fit=crop"
        imageAlt="Natürliche Hormontherapie"
        imageKey="img_hero_hormontherapie"
      >
        <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-primary text-white px-10 py-5 rounded-2xl font-bold hover:shadow-2xl transition-all shadow-xl active:scale-95 flex items-center gap-2">
          Analyse-Gespräch anfragen <ArrowRight size={20} />
        </Link>
      </SplitScreenHero>

      {/* Philosophy: Identity vs Imitation */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl lg:text-5xl font-serif text-primary mb-10 leading-tight">Molekulare Identität <br /><span className="text-accent italic">statt synthetischer Kopie</span></h2>
          <div className="prose prose-lg mx-auto text-muted-foreground leading-relaxed">
            <p>
              In meiner Praxis setzen wir konsequent auf <strong>bioidentische Hormone</strong>. Im Gegensatz zu synthetischen Gestagenen oder Östrogenen entsprechen diese in ihrer molekularen Struktur zu 100% den Hormonen, die dein Körper selbst produziert. Dein Körper erkennt sie als „eigen“ an, wodurch sie ihre regulierende Wirkung entfalten können, ohne die Leber oder das Gefäßsystem unnötig zu belasten.
            </p>
            <p className="mt-6">
              Dabei betrachten wir nicht nur die Sexualhormone, sondern das gesamte Orchester: von der <strong>Schilddrüse</strong> über die <strong>Nebennieren (Stressachse)</strong> bis hin zum <strong>Vitamin D</strong>, das faktisch ein Schlüsselhormon für deine gesamte hormonelle Rezeptorempfindlichkeit ist.
            </p>
          </div>
        </div>
      </section>

      {/* Focus Areas & Symptoms */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
            <div className="space-y-8">
              <h2 className="text-4xl font-serif text-primary leading-tight">Wenn das System aus der Balance gerät</h2>
              <div className="prose prose-lg text-muted-foreground leading-relaxed">
                <p>
                  Hormonelle Dysbalancen sind oft die wahre Ursache für Symptome, die sonst als „normal“ oder „psychosomatisch“ abgestempelt werden. Wir suchen die Ursache:
                </p>
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mt-8 list-none p-0 text-left">
                  {[
                    "Schlafstörungen & nächtliches Grübeln",
                    "PMS & schmerzhafte Zyklen",
                    "Hitzewallungen & Schweißausbrüche",
                    "Unerklärliche Gewichtszunahme",
                    "Antriebslosigkeit & Brain Fog",
                    "Nebennierenschwäche (Burnout-Vorstufe)",
                    "Haarausfall & Hautprobleme",
                    "Libidoverlust & Stimmungsschwankungen"
                  ].map((s, i) => (
                    <li key={i} className="flex items-start gap-3 text-base font-bold text-primary text-left">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0"></div> {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white border border-border/50 p-10 rounded-[3rem] shadow-sm flex flex-col sm:flex-row items-start gap-8">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <Activity size={32} />
                </div>
                <div>
                   <h4 className="font-bold text-primary mb-3 text-xl leading-tight">Der Speichel-Vorteil</h4>
                   <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                     Wir nutzen spezialisierte <strong>Speicheltests</strong>, um nur die freien, biologisch aktiven Hormone zu messen. Ein Bluttest zeigt oft „normale“ Werte, obwohl du dich erschöpft fühlst – der Speicheltest deckt das wahre Defizit auf.
                   </p>
                </div>
              </div>
            </div>

            <div className="grid gap-6 text-left">
              {[
                { title: "Individuelle Rezeptur", desc: "Wir arbeiten mit spezialisierten Apotheken zusammen, die deine bioidentischen Hormone individuell als Creme oder Kapsel anfertigen.", icon: Sparkles },
                { title: "Die Stressachse (DHEA/Cortisol)", desc: "Ohne stabile Nebennieren keine Hormonbalance. Wir stärken deine Basis für mehr Belastbarkeit.", icon: Activity },
                { title: "Progesteron-Regulierung", desc: "Sanfter Ausgleich bei Östrogendominanz – für ruhigen Schlaf und innere Gelassenheit.", icon: Heart },
                { title: "Schilddrüsen-Optimierung", desc: "Ganzheitliche Einstellung bei Hashimoto und Unterfunktion über die Standard-Werte hinaus.", icon: Zap }
              ].map((item, i) => (
                <div key={i} className="bg-white p-10 rounded-[3rem] border border-border/50 shadow-sm flex gap-8 group hover:border-accent transition-all hover:shadow-xl text-left">
                  <div className="bg-muted/30 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-500 shrink-0">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-3 font-serif text-2xl leading-tight">{item.title}</h4>
                    <p className="text-base text-muted-foreground leading-relaxed font-medium opacity-80">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary text-white p-12 lg:p-24 rounded-[5rem] text-center shadow-2xl relative overflow-hidden mb-24">
             <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-accent/20 -mr-64 -mt-64 rounded-full blur-[100px] opacity-20"></div>
             <Sparkles className="w-20 h-20 text-accent mx-auto mb-8 animate-pulse relative z-10" />
             <h2 className="text-4xl lg:text-6xl font-serif mb-8 text-white font-bold relative z-10 leading-tight">Wieder in deiner <br /><span className="text-accent italic font-light">eigenen Mitte sein</span></h2>
             <p className="text-xl opacity-90 mb-12 max-w-3xl mx-auto leading-relaxed relative z-10 font-medium">
               Hormonelle Balance bedeutet Lebensqualität. Wenn die „Dirigenten deines Körpers“ wieder im Einklang sind, kehren Energie, Schlafqualität und Lebensfreude zurück. 
             </p>
             <div className="relative z-10 pt-4 text-center">
                <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-accent text-white px-14 py-6 rounded-2xl font-bold hover:scale-105 transition-all shadow-2xl inline-flex items-center gap-4 text-xl">
                  Hormon-Analyse anfragen <ArrowRight size={24} />
                </Link>
             </div>
          </div>
        </div>
      </section>



      <PreisTransparenz />
    </div>
  );
}
