import React from "react";
import SEO from "@/components/SEO";
import { ROUTE_PATHS } from "@/lib/index";
import { Link } from "react-router-dom";
import { FlaskConical, ArrowRight } from "lucide-react";
import SplitScreenHero from "@/components/SplitScreenHero";
import PreisTransparenz from "@/components/PreisTransparenz";

export default function Labor() {
  return (
    <div className="bg-background min-h-screen font-sans">
      <SEO 
        title="Labor & Diagnostik | Naturheilpraxis feminatalis" 
        description="Ursachenforschung statt Symptombehandlung. Wir nutzen spezialisierte Labordiagnostik (Vollblut, Speichel, Stuhl) für deine Gesundheit." 
      />
      <SplitScreenHero
        badge="Funktionelle Medizindiagnostik"
        title={<>Labordiagnostik: <br /><span className="text-accent italic font-light">Wir raten nicht – wir wissen</span></>}
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
              Wir nutzen die <strong>Vollblut-Diagnostik</strong>, um die tatsächliche Sättigung deiner Zellen zu messen. Nur so finden wir heraus, warum deine Mitochondrien nicht genug Energie produzieren oder warum dein Nervensystem nicht zur Ruhe kommt. Ergänzend analysieren wir gezielt deinen <strong>Immunstatus und Nahrungsmittelintoleranzen</strong>, um chronische Entzündungsprozesse und autoimmune Überreaktionen an der Wurzel zu packen.
            </p>
          </div>
        </div>
      </section>

      {/* Diagnostic Capabilities Grid */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left mb-24">
            {[
              { title: "Vollblut-Analyse", desc: "Mineralien und Spurenelemente, bioaktive Vitamine und Co-Faktoren: Mg, Zn, Se, Jod, Cu, Vit. D3-Gesamtstoffwechsel, Vit. A, E, C, K2, B-Vitamine, Coenzym Q10.", icon: <FlaskConical className="w-8 h-8 text-accent" /> },
              { title: "Immunstatus & Intoleranzen", desc: "Umfassende Diagnostik von TH1/TH2-Balance, Allergenen (IgE, IgG, LTT), Fructose-/Laktoseintoleranz, MCAS & Lymphozytentypisierung.", icon: <FlaskConical className="w-8 h-8 text-accent" /> },
              { title: "KyberStatus & Darm", desc: "Tiefenanalyse des Mikrobioms, Entzündungsmarker (Zonulin, Calprotectin) und SIBO-Diagnostik.", icon: <FlaskConical className="w-8 h-8 text-accent" /> },
              { title: "Amino- & Fettsäuren-Status", desc: "Organische Säuren im Citratzyklus (Zellenergie), Vorstufen der Neurotransmitter und Hormone (Tryptophan), Entzündungsbalance (Omega-3/6-Index).", icon: <FlaskConical className="w-8 h-8 text-accent" /> },
              { title: "Hormon-Mapping", desc: "Speichel-Diagnostik für freie Sexualhormone und Cortisol-Tagesprofil, Melatonin, Schilddrüsen-Full-Screening, Männer- und Frauenprofile.", icon: <FlaskConical className="w-8 h-8 text-accent" /> },
              { title: "Silent Inflammation", desc: "Entzündungsparameter: hs-CRP, TNF-alpha, Interleukine, Calprotectin, LPS-AK, PSA-AK, IDO-Aktivität, Kynurenin.", icon: <FlaskConical className="w-8 h-8 text-accent" /> },
              { title: "Metabolic-Profil", desc: "HbA1c, HOMA-Index, Blutfettwerte, Lipoprotein(a), Leber- und Nierenwerte, Adiponectin.", icon: <FlaskConical className="w-8 h-8 text-accent" /> },
              { title: "Mitochondrien & Zellulärer Stress", desc: "Oxidativer & nitrosativer Stress: Lipidperoxidation, oxidiertes LDL, Nitrotyrosin, Citrullin, Lactat/Pyruvat, intrazelluläres ATP, BHI.", icon: <FlaskConical className="w-8 h-8 text-accent" /> },
              { title: "Schwermetalle", desc: "Haaranalyse, Blut- & Urintests nach Chelattherapie auf Quecksilber, Blei, Cadmium, Arsen, Aluminium u. a.", icon: <FlaskConical className="w-8 h-8 text-accent" /> },
              { title: "Standard-Check-up", desc: "Kleines und großes Differenzialblutbild, Leber- & Nierenwerte, Blutfett- und Blutzuckerwerte, Gesamteiweiß, Entzündungsparameter.", icon: <FlaskConical className="w-8 h-8 text-accent" /> }
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
                     Wir arbeiten mit führenden europäischen Speziallaboren wie Biovis, IMD Berlin, Enterosan und Ganzimmun zusammen, um modernste Testverfahren zu garantieren.
                   </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Häufige Laboruntersuchungen */}
      <section className="py-24 bg-white border-t border-border/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <span className="bg-primary/5 text-primary text-xs font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full inline-block mb-6">
              Unser Leistungsspektrum
            </span>
            <h2 className="text-3xl lg:text-5xl font-serif text-primary mb-6 leading-tight">
              Häufige Untersuchungen <br /><span className="text-accent italic font-light">in unserer Praxis</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
               Wir arbeiten mit 5 Laboren zusammen, die sich auf die Untersuchungen des Stoffwechsels, des Mikrobioms und der Mitochondrien-Funktion spezialisiert haben. Diese Untersuchungen liefern wertvolle Informationen über den tatsächlichen Zustand der körperlichen Funktionen und eignen sich sehr gut für eine frühe Prophylaxe vieler lebensstilbedingter Krankheiten.
            </p>
            <p className="text-muted-foreground text-base max-w-3xl mx-auto mt-4 leading-relaxed bg-amber-50 border border-amber-200 rounded-2xl px-6 py-4">
              <strong>Hinweis:</strong> Die meisten dieser Untersuchungen sind sogenannte IGeL (Individuelle Gesundheits-Leistungen) und werden fast nur von privaten Krankenversicherungsanbietern bezahlt.
            </p>
          </div>

          <div className="space-y-10">
            {[
              {
                category: "Gynäkologie & Schwangerschaft",
                items: [
                  "Schwangerschaftstests",
                  "Hormonpanel für Fruchtbarkeit (FSH, LH, AMH, Östradiol, Progesteron)",
                  "Schilddrüsenwerte (TSH, fT3, fT4, Anti-TPO) – besonders wichtig in der Schwangerschaft",
                  "TORCH-Serologie (Toxoplasmose, Röteln, CMV, Herpes)",
                  "Blutgruppe & Rhesus-Faktor",
                  "Gestationsdiabetes-Screening (oGTT)"
                ]
              },
              {
                category: "Gastroenterologie & Darmgesundheit",
                items: [
                  "Mikrobiomanalyse (KyberStatus, Enterosan u. a.)",
                  "Calprotectin (Entzündungsmarker im Darm)",
                  "Zonulin & Alpha-1-Antitrypsin (Leaky-Gut-Diagnostik)",
                  "H2-Atemtest auf SIBO (Dünndarmfehlbesiedlung) & Laktose-/Fruktoseintoleranz",
                  "Helicobacter-pylori-Test (Stuhl oder Atemtest)",
                  "Parasitologie & Mykologie (Pilzdiagnostik)",
                  "Okkultes Blut im Stuhl"
                ]
              }
            ].map((group, idx) => (
              <div key={idx} className="bg-slate-50 rounded-[2.5rem] border border-border p-8 lg:p-10">
                <h3 className="text-xl font-serif text-primary font-bold mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center text-sm font-bold shrink-0">{idx + 1}</span>
                  {group.category}
                </h3>
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                  {group.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground text-base mb-6 italic">
              Diese Liste zeigt häufig angeforderte Untersuchungen – das individuelle Diagnostikprogramm wird stets gemeinsam im Gespräch festgelegt.
            </p>
            <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-primary text-white px-10 py-4 rounded-2xl font-bold hover:shadow-2xl transition-all shadow-md active:scale-95 inline-flex items-center gap-2">
              Diagnostik-Gespräch anfragen <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Mikrobiom- & Darmanalyse Tiefenbereich */}
      <section className="py-24 bg-white border-t border-border/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-left">
              <span className="bg-primary/5 text-primary text-xs font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full inline-block">
                Zentrum der Gesundheit
              </span>
              <h2 className="text-3xl lg:text-5xl font-serif text-primary leading-tight text-left">
                Darmanalyse & <br /><span className="text-accent italic font-light">Mikrobiom-Therapie</span>
              </h2>
              <div className="prose prose-lg text-muted-foreground leading-relaxed space-y-6 text-left">
                <p>
                  Dein Darm ist weit mehr als ein Verdauungsorgan – er ist das Kraftwerk deines Immunsystems (ca. 80 % der Immunzellen sind hier beheimatet) und der Geburtsort deiner mentalen Stärke (90 % des Serotonins werden hier gebildet). Die <strong>Darm-Hirn-Achse</strong> steuert deine Energie, Stimmung und chronische Entzündungsprozesse maßgeblich.
                </p>
                <p>
                  Eine durchlässige Darmwand (<strong>Leaky Gut</strong>) oder eine bakterielle Fehlbesiedlung (Dysbiose, SIBO/SIFO) lassen Toxine ungehindert in die Blutbahn gelangen. Dies triggert systemische „stille“ Entzündungen (Silent Inflammation), welche oft die versteckte Ursache für Allergien, Autoimmunerkrankungen, Hautprobleme und chronische Erschöpfung sind.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 p-10 lg:p-12 rounded-[4rem] border border-border text-left space-y-8">
              <h3 className="text-2xl font-serif text-primary font-bold">Diagnostische Schwerpunkte:</h3>
              <div className="space-y-6">
                {[
                  { title: "Präzise Mikrobiomanalyse", desc: "Laborbasierte Stuhldiagnostik zur Bestimmung von Bakterienzusammensetzung, Diversität und eventuellen Fehlbesiedlungen." },
                  { title: "Leaky-Gut-Diagnostik", desc: "Zonulin- und Alpha-1-Antitrypsin-Messung zur objektiven Beurteilung der Barrierefunktion der Darmwand." },
                  { title: "Das Östrobolom", desc: "Bedeutung der Darmflora für die Ausscheidung und Regulation des Östrogenstoffwechsels (wichtig bei Zyklusstörungen, PMS & PCOS)." },
                  { title: "Gezielter Schleimhautaufbau", desc: "Keine Standard-Kuren – sondern präzise, auf deinen Befund abgestimmte Mikronährstoff-, Prä- und Probiotika-Therapie." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start text-left">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <div>
                      <h5 className="font-bold text-primary text-base leading-tight">{item.title}</h5>
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <PreisTransparenz />
    </div>
  );
}
