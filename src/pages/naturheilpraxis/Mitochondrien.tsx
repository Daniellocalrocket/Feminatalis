import React from "react";
import SEO from "@/components/SEO";
import { ROUTE_PATHS } from "@/lib/index";
import { Link } from "react-router-dom";
import PreisTransparenz from "@/components/PreisTransparenz";
import { 
  Zap, 
  BatteryLow, 
  Activity, 
  ArrowRight, 
  ShieldAlert, 
  Microscope, 
  FlaskConical, 
  Dna,
  Check,
  AlertTriangle,
  Sparkles,
  Info,
  CheckCircle2
} from "lucide-react";
import SplitScreenHero from "@/components/SplitScreenHero";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export default function Mitochondrien() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-background min-h-screen font-sans">
      <SEO 
        title="Mitochondrien-Therapie & Zellkraftwerke | Naturheilpraxis feminatalis" 
        description="Optimiere deine Zellenergie (ATP) durch mitochondriale Medizin. Wir behandeln Burnout, chronische Erschöpfung und Stoffwechselstörungen an der Ursache." 
      />

      <SplitScreenHero
        badge="Zentrum für Mitochondriale Medizin"
        title={<>Zellkraft: <br /><span className="text-accent italic font-light">Das Fundament deiner Vitalität</span></>}
        subtitle="Du bist nur so gesund wie deine Zellen. In meiner Praxis blicken wir tief in deine winzigen Kraftwerke – die Mitochondrien – um den Motor deiner Heilung auf zellulärer Ebene neu zu starten."
        imageSrc="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=2070&auto=format&fit=crop"
        imageAlt="Mikroskopische Ansicht von Zellstrukturen und Mitochondrien"
        imageKey="img_hero_mitochondrien"
      >
        <div className="flex flex-wrap gap-4">
          <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:shadow-2xl transition-all shadow-xl active:scale-95 flex items-center gap-2">
            Zellcheck anfragen <ArrowRight size={20} />
          </Link>
          <button 
            onClick={() => scrollTo("bio-fakten")}
            className="bg-white text-primary border border-primary/10 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all flex items-center gap-2"
          >
            Mehr erfahren
          </button>
        </div>
      </SplitScreenHero>

      {/* Bio-Facts Section */}
      <section id="bio-fakten" className="py-24 bg-white overflow-hidden scroll-mt-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-serif text-primary mb-8 leading-tight">
              Mitochondrien: <br /><span className="text-accent italic">Die Kraftwerke deines Lebens</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Dein Körper besteht aus rund 80 Billionen Zellen. In fast jeder von ihnen (außer roten Blutkörperchen) arbeiten 1.500 bis 6.500 Mitochondrien. In der weiblichen Eizelle sind es sogar bis zu 400.000 – ein Rekord für das Leben selbst.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { 
                icon: <Zap className="text-orange-500" />, 
                title: "ATP-Synthese", 
                text: "Sie wandeln Sauerstoff und Nährstoffe in ATP um – den universellen Treibstoff, der jede Sekunde 100.000 Stoffwechselreaktionen steuert." 
              },
              { 
                icon: <BatteryLow className="text-red-500" />, 
                title: "Der Sparmodus", 
                text: "Bei Störungen schaltet die Zelle auf Blutzucker-Vergärung um. Die Folge: Ein massiver Energieabfall und Funktionsverlust aller Organe." 
              },
              { 
                icon: <Sparkles className="text-accent" />, 
                title: "Lichtquanten-Organe", 
                text: "Mitochondrien kommunizieren mit Lichtgeschwindigkeit. Diese Biophotonen-Energie ist die Basis für die Koordination deiner Billionen Zellen." 
              }
            ].map((item, idx) => (
              <motion.div key={idx} variants={itemVariants} className="bg-slate-50 p-10 rounded-[3.5rem] border border-border hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-primary mb-4">{item.title}</h4>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Harmful Factors Grid */}
      <section className="py-24 bg-slate-50 overflow-hidden relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <span className="bg-red-100 text-red-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block">
                Gefahrenquellen
              </span>
              <h2 className="text-3xl lg:text-5xl font-serif text-primary mb-8 leading-tight">Was deine Zellkraft <br /><span className="text-red-600 italic">wirklich schwächt</span></h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                Mitochondrien reagieren hochsensibel auf Umwelteinflüsse. Viele Belastungen führen zu oxidativem und nitrosativem Stress, der die Zell-DNA schädigen kann.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Medikamente (Statine, Antibiotika)",
                  "Chronischer Stress & Trauma",
                  "Toxische Metalle (Blei, Alu)",
                  "Elektrosmog & 5G",
                  "Viren & Parasiten",
                  "Zuckerreiche Ernährung"
                ].map((factor, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-border shadow-sm">
                    <ShieldAlert size={18} className="text-red-500 shrink-0" />
                    <span className="text-sm font-medium text-primary">{factor}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-accent/10 rounded-[5rem] blur-3xl" />
              <div className="bg-white p-12 rounded-[4rem] border border-border shadow-2xl relative z-10">
                <h3 className="text-2xl font-serif text-primary mb-8">Zellulärer Stress-Check</h3>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Oxidativer Stress</span>
                      <span className="text-red-500 font-bold">Gefahr</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "85%" }}
                        className="h-full bg-red-500"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Nitrosativer Stress</span>
                      <span className="text-red-600 font-bold">Kritisch</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "95%" }}
                        className="h-full bg-red-600"
                      />
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-8 leading-relaxed italic">
                    Nitrosativer Stress führt zu einer Kaskade chemischer Reaktionen, die Superradikale produzieren – der größte Feind deiner Mitochondrien.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disease Spectrum */}
      <section className="py-24 bg-white scroll-mt-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6">Wenn die Kraft versiegt</h2>
            <p className="text-muted-foreground text-lg">Ein Energiemangel auf Zellebene kann sich in vielfältigen Krankheitsbildern äußern.</p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              { 
                id: "exhaustion", 
                title: "Erschöpfung & Burnout", 
                content: "CFS (Chronic Fatigue Syndrome) und Burnout sind oft direkte Folgen einer mitochondrialen Dysfunktion. Wenn der Kraftstoff ATP fehlt, streikt der gesamte Organismus." 
              },
              { 
                id: "metabolic", 
                title: "Stoffwechsel & Durchblutung", 
                content: "Diabetes, Bluthochdruck, Schlaganfall und Herzinfarkt hängen eng mit der Energieversorgung der Gefäße und Organe zusammen." 
              },
              { 
                id: "neuro", 
                title: "Neurologische Erkrankungen", 
                content: "Demenz, Alzheimer und Parkinson werden heute oft als energetische Krisen des Gehirns verstanden, bei denen Mitochondrien eine Schlüsselrolle spielen." 
              },
              { 
                id: "immune", 
                title: "Immunsystem & Autoimmun", 
                content: "Allergien, chronische Infektionen und Autoimmunerkrankungen entstehen, wenn die zelluläre Kommunikation durch Energiemangel gestört ist." 
              }
            ].map((item) => (
              <AccordionItem key={item.id} value={item.id} className="border border-border rounded-[2rem] px-8 py-2 hover:bg-slate-50 transition-all data-[state=open]:bg-slate-50/50">
                <AccordionTrigger className="text-xl font-serif text-primary hover:no-underline">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-lg pb-6">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-primary text-white rounded-[4rem] mx-4 lg:mx-10 mb-24 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl" />
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-left">
              <h2 className="text-3xl lg:text-5xl font-serif leading-tight">Dein Weg zurück <br /><span className="text-accent italic">zu voller Zellkraft</span></h2>
              <p className="text-primary-foreground/80 text-lg leading-relaxed">
                In meiner Praxis nutzen wir modernste Speziallabore, um den Grad deiner mitochondrialen Schädigung exakt nachzuweisen. Wir führen Belastungen aus, füllen Mangelzustände gezielt auf und schützen deine Zellen vor weiterem Stress.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Mitochondrien-Diagnostik per Blutprobe",
                  "Gezielte Zufuhr von 45+ essenziellen Nährstoffen",
                  "Ausleitung von Toxinen & Schwermetallen",
                  "Orthomolekulare Schutzschicht (Q10, Glutathion, Vitamine)"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-primary-foreground/90 font-medium">
                    <CheckCircle2 size={20} className="text-accent" /> {item}
                  </li>
                ))}
              </ul>

              <div className="pt-8">
                <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-accent hover:bg-orange-600 text-white px-10 py-5 rounded-2xl font-bold transition-all shadow-xl inline-flex items-center gap-2">
                  Jetzt Zellstatus prüfen <ArrowRight size={20} />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
               <div className="bg-white/10 backdrop-blur-md p-8 rounded-[3rem] border border-white/10 text-center">
                  <div className="text-3xl font-bold text-accent mb-2">45+</div>
                  <div className="text-xs uppercase tracking-widest text-white/60">Essenziellste Nährstoffe</div>
               </div>
               <div className="bg-white/10 backdrop-blur-md p-8 rounded-[3rem] border border-white/10 text-center">
                  <div className="text-3xl font-bold text-accent mb-2">122</div>
                  <div className="text-xs uppercase tracking-widest text-white/60">ATP pro Fettsäure</div>
               </div>
               <div className="bg-white/10 backdrop-blur-md p-8 rounded-[3rem] border border-white/10 text-center">
                  <div className="text-3xl font-bold text-accent mb-2">100%</div>
                  <div className="text-xs uppercase tracking-widest text-white/60">Individuelle Analyse</div>
               </div>
               <div className="bg-white/10 backdrop-blur-md p-8 rounded-[3rem] border border-white/10 text-center">
                  <div className="text-3xl font-bold text-accent mb-2">∞</div>
                  <div className="text-xs uppercase tracking-widest text-white/60">Dein Vital-Potenzial</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <PreisTransparenz 
        preisHint="Zellkraft-Analyse & Basis-Therapie" 
        hinweis="Die Investition in deine zelluläre Gesundheit ist der Grundstein für jede nachhaltige Genesung. Wir berechnen Leistungen transparent nach GebüH."
      />
    </div>
  );
}
