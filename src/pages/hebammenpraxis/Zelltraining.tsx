import React from "react";
import SEO from "@/components/SEO";
import { ROUTE_PATHS } from "@/lib/index";
import { Link } from "react-router-dom";
import { Activity, ShieldCheck, ArrowRight, Sparkles, Battery, Wind, Heart, Zap, Brain, Droplets, Scale, Clock, CheckCircle2, AlertCircle, Stethoscope } from "lucide-react";
import SplitScreenHero from "@/components/SplitScreenHero";
import PreisTransparenz from "@/components/PreisTransparenz";
import { motion } from "framer-motion";

export default function Zelltraining() {
  const vorteile = [
    { title: "Zellregeneration", desc: "Abbau alter, schwacher Mitochondrien und Anregung der Vermehrung neuer, gesunder Energiekraftwerke.", icon: Sparkles },
    { title: "Stressresistenz", desc: "Stärkung des vegetativen Nervensystems für mehr Gelassenheit und schnellere Erholung im Alltag.", icon: ShieldCheck },
    { title: "Stoffwechsel-Boost", desc: "Optimierung der Fettverbrennung und Verbesserung der Insulinempfindlichkeit deiner Zellen.", icon: Activity },
    { title: "Sauerstoff-Update", desc: "Verbesserung der Sauerstoffverwertung im Blut und in der Muskulatur für mehr Leistung.", icon: Wind }
  ];

  const anwendungsgebiete = [
    "Erschöpfung, Burnout & chronische Müdigkeit",
    "Long-Covid & Post-Vac-Syndrom",
    "Kinderwunsch & Geburtsvorbereitung",
    "Durchblutungsstörungen",
    "Stoffwechselstörungen (Diabetes)",
    "Allergien & Heuschnupfen",
    "Hormonelle Dysbalancen",
    "Anti-Aging & Vitalitätsverlust",
    "Stress & psychische Belastung",
    " Infektanfälligkeit"
  ];

  const wirkungen = [
    { title: "Mehr Energie", desc: "Verbesserte ATP-Produktion in den Mitochondrien", icon: Zap },
    { title: "Fettverbrennung", desc: "Steigerung des Stoffwechsels & Gewichtsabnahme", icon: Scale },
    { title: "Gefäße & Durchblutung", desc: "Verbesserung der Fließeigenschaft des Blutes", icon: Droplets },
    { title: "Stressresistenz", desc: "Ausgleich des vegetativen Nervensystems", icon: Brain },
    { title: "Konzentration", desc: "Steigerung der geistigen Leistungsfähigkeit", icon: Heart },
    { title: "Anti-Aging", desc: "Verlangsamung des Alterungsprozesses", icon: Sparkles }
  ];

  return (
    <div className="bg-background min-h-screen font-sans">
      <SEO 
        title="IHHT Höhentraining | Zelltraining für mehr Energie | feminatalis" 
        description="Mit IHHT (Intervall-Hypoxie-Hyperoxie-Therapie) zu mehr Energie. Die innovative Sauerstofftherapie für Regeneration, Kinderwunsch und Anti-Aging." 
      />

      <SplitScreenHero
        badge="Wissenschaftlich anerkannte Methode"
        title={<>IHHT Höhentraining <br /><span className="text-accent italic font-light">Energie auf Knopfdruck</span></>}
        subtitle="Trainiere deine Zellen, während du entspannt liegst. Das simulierte Höhentraining optimiert deine Mitochondrien und sorgt für tiefgreifende Regeneration – ganz ohne körperliche Anstrengung."
        imageSrc="https://images.unsplash.com/photo-1516670428252-df97bba108d1?q=80&w=2070&auto=format&fit=crop"
        imageAlt="IHHT Zelltraining Behandlung"
        imageKey="img_hero_zelltraining"
      >
        <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-primary text-white px-10 py-5 rounded-2xl font-bold hover:shadow-2xl transition-all shadow-xl active:scale-95 flex items-center gap-2">
          Kostenfreie Vor-Analyse anfragen <ArrowRight size={20} />
        </Link>
      </SplitScreenHero>

      {/* Was ist IHHT? */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <h2 className="text-4xl font-serif text-primary leading-tight">Was ist IHHT?</h2>
              <div className="prose prose-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  <strong>IHHT</strong> steht für Intervall-Hypoxie-Hyperoxie-Therapie – auch bekannt als Höhentraining. Bei dieser Methode atmest du abwechselnd sauerstoffarme und sauerstoffreiche Luft über eine Maske ein.
                </p>
                <p>
                  Der Clou: Diese Technik macht sich eine Entdeckung zunutze, für die 2019 der <strong>Medizin-Nobelpreis</strong> verliehen wurde. Denn unsere Zellen können den Sauerstoffgehalt messen und bei Sauerstoffmangel körpereigene Regenerationsprozesse aktivieren.
                </p>
              </div>
              <div className="bg-accent/5 border-l-4 border-accent p-6 rounded-r-2xl">
                <p className="font-medium text-primary italic">
                  "IHHT ist ein Zelltraining, das Ihren Körper auf Zellebene verjüngt – ein Schritt hin zu körperlicher und geistiger Höchstleistung."
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {vorteile.map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-[2rem] border border-border/50 shadow-sm flex flex-col group hover:border-accent transition-all">
                  <div className="bg-muted/30 w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                    <item.icon className="text-accent w-7 h-7" />
                  </div>
                  <h4 className="font-bold text-primary mb-2 font-serif text-lg">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Warum dir Energie fehlt */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-primary text-white p-12 lg:p-16 rounded-[4rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 -mr-32 -mt-32 rounded-full blur-3xl opacity-20"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-serif mb-8 font-bold">Warum dir Energie fehlt</h2>
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <p className="text-lg opacity-90 leading-relaxed mb-6">
                    Wenn Kraft fehlt, fehlt auch der Antrieb. Vieles fühlt sich anstrengend an – was es gar nicht sein müsste.
                  </p>
                  <p className="text-lg opacity-90 leading-relaxed">
                    <strong>Stress</strong> und eine ungesunde Lebensweise sorgen dafür, dass uns weniger Energie bleibt. Denn die Energielieferanten in unseren Zellen – die <strong>Mitochondrien</strong> – verlieren durch Stress und Gifte die volle Leistungsfähigkeit bei der Produktion des körpereigenen „Kraftstoffs" ATP (Adenosintriphosphat).
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-[2rem]">
                  <h4 className="font-bold text-accent mb-4 flex items-center gap-2">
                    <Battery size={20} /> Die Folge:
                  </h4>
                  <ul className="space-y-3 opacity-90">
                    <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-accent shrink-0 mt-1"/> Chronische Müdigkeit</li>
                    <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-accent shrink-0 mt-1"/> Erschöpfung</li>
                    <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-accent shrink-0 mt-1"/> Antriebslosigkeit</li>
                    <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-accent shrink-0 mt-1"/> Konzentrationsschwierigkeiten</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wirkung von IHHT */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-primary mb-4">Die Wirkung von IHHT</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Was IHHT in deinem Körper bewirkt – wissenschaftlich fundiert und praktisch spürbar.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wirkungen.map((item, i) => (
              <div key={i} className="bg-background p-8 rounded-[2.5rem] border border-border hover:shadow-lg transition-all">
                <div className="bg-accent/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-4 text-accent">
                  <item.icon className="w-7 h-7" />
                </div>
                <h4 className="font-bold text-primary mb-2 font-serif text-xl">{item.title}</h4>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Anwendungsgebiete */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-primary mb-4">Für wen ist IHHT geeignet?</h2>
            <p className="text-xl text-muted-foreground">
              Die vielseitige Therapie bei diesen Beschwerden:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {anwendungsgebiete.map((gebiet, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-border flex items-center gap-4 hover:border-accent transition-colors">
                <div className="w-3 h-3 bg-accent rounded-full shrink-0"></div>
                <span className="font-medium text-primary">{gebiet}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Behandlungsverlauf */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl font-serif text-primary mb-8">Der Behandlungsverlauf</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-bold text-xl shrink-0">1</div>
                  <div>
                    <h4 className="font-bold text-primary text-xl mb-2">Analyse & Einstellung</h4>
                    <p className="text-muted-foreground">Mithilfe des Bio-Health-Index (BHI) aus dem Blut und KI-Berechnung wird dein personalisiertes Trainingsprogramm erstellt.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-bold text-xl shrink-0">2</div>
                  <div>
                    <h4 className="font-bold text-primary text-xl mb-2">Das Training</h4>
                    <p className="text-muted-foreground">Du liegst komfortabel und entspannt. Über eine Maske atmet du im Wechsel sauerstoffarme und sauerstoffreiche Luft ein. Ein IntelliGent Biofeedback passt die Werte in Echtzeit an.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-bold text-xl shrink-0">3</div>
                  <div>
                    <h4 className="font-bold text-primary text-xl mb-2">Die Ergebnisse</h4>
                    <p className="text-muted-foreground">Bereits nach wenigen Sitzungen bemerken viele eine verbesserte Belastbarkeit, besserer Schlaf und mehr Energie im Alltag.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-accent/5 p-10 rounded-[3rem] border border-accent/20">
              <h4 className="font-bold text-primary text-2xl mb-6 flex items-center gap-3">
                <Stethoscope className="text-accent" /> Empfehlung
              </h4>
              <div className="space-y-6">
                <div>
                  <p className="font-bold text-primary mb-2">Intensivkur: Mindestens 10 Sitzungen</p>
                  <p className="text-muted-foreground">Für spürbare und nachhaltige Ergebnisse.</p>
                </div>
                <div>
                  <p className="font-bold text-primary mb-2">Erhaltung: 1-2x monatlich</p>
                  <p className="text-muted-foreground">Um den Therapieerfolg langfristig zu bewahren.</p>
                </div>
                <div className="pt-4 border-t border-accent/20">
                  <p className="text-sm text-muted-foreground">
                    <strong>Tipp:</strong> Spezielle Mikronährstoff-Infusionen als perfekte Vorbereitung steigern die Wirksamkeit zusätzlich!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beispiel Fortschritt */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white p-10 lg:p-16 rounded-[4rem] shadow-xl">
            <h2 className="text-3xl font-serif text-primary mb-8 text-center">Beispiel: So verändert sich dein Training</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-muted/20 p-8 rounded-[2rem]">
                <p className="text-xs font-bold text-accent uppercase tracking-widest mb-4">Vorher (Sitzung 1)</p>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• 5 Min. Hypoxie bei 13% O₂</li>
                  <li>• 3 Min. Hyperoxie</li>
                  <li>• entspricht 4.073 m Höhe</li>
                  <li>• Herzfrequenz: 89 spm</li>
                </ul>
              </div>
              <div className="bg-accent/10 p-8 rounded-[2rem]">
                <p className="text-xs font-bold text-accent uppercase tracking-widest mb-4">Nachher (Sitzung 14)</p>
                <ul className="space-y-3 text-primary font-medium">
                  <li>• 7 Min. Hypoxie bei 11% O₂</li>
                  <li>• 3 Min. Hyperoxie</li>
                  <li>• entspricht 5.443 m Höhe</li>
                  <li>• Herzfrequenz: 100 spm</li>
                </ul>
              </div>
            </div>
            
            <p className="text-center text-muted-foreground mt-8 italic">
              Die Patientin kann nun mühelos tiefere Hypoxie-Leistungen erbringen – ein Zeichen für deutlich verbesserte Mitochondrien-Funktion.
            </p>
          </div>
        </div>
      </section>

      {/* Kosten & PKV */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-primary text-white p-12 lg:p-16 rounded-[4rem] shadow-2xl text-center">
            <h2 className="text-3xl lg:text-4xl font-serif mb-6">Kostenübernahme</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Private Krankenversicherungen übernehmen in der Regel die Kosten der IHHT-Therapie.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-white text-primary px-10 py-5 rounded-2xl font-bold hover:bg-accent hover:text-white transition-all inline-flex items-center gap-2">
                Kostenfreie Vor-Analyse <ArrowRight size={20} />
              </Link>
              <Link to={ROUTE_PATHS.PREISLISTE} className="border border-white/30 text-white px-10 py-5 rounded-2xl font-bold hover:bg-white/10 transition-all inline-flex items-center gap-2">
                Zur Preisliste
              </Link>
            </div>
          </div>
        </div>
      </section>

      <PreisTransparenz />
    </div>
  );
}