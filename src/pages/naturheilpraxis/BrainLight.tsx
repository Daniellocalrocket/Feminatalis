import React from "react";
import SEO from "@/components/SEO";
import { ROUTE_PATHS } from "@/lib/index";
import { Link } from "react-router-dom";
import { Brain, Activity, ShieldCheck, ArrowRight, Check, Star, Quote, ArrowUpRight, Sparkles, Zap, Music } from "lucide-react";
import { motion } from "framer-motion";

export default function BrainLight() {
  const features = [
    { title: "Audio-Visuelle Stimulation", desc: "Über spezielle Lichtimpulse und Musik wird dein Gehirn sanft in den entspannten Theta-Zustand geführt.", icon: <Music className="w-6 h-6" /> },
    { title: "Mechanische Shiatsu-Massage", desc: "4D-Sensoren scannen deinen Rücken und lösen Verspannungen punktgenau.", icon: <Activity className="w-6 h-6" /> },
    { title: "Ionisierte Luft", desc: "Die integrierte Negativ-Ionen-Funktion reinigt deine Atemluft und fördert die Vitalität.", icon: <Sparkles className="w-6 h-6" /> },
    { title: "Vagus-Nerv Aktivierung", desc: "Gezielte Entlastung des parasympathischen Nervensystems für nachhaltigen Stressabbau.", icon: <Zap className="w-6 h-6" /> }
  ];

  const programs = [
    "Stress-Prävention & Burnout-Schutz",
    "Konzentrations- & Kreativitäts-Booster",
    "Lernförderung & Mentale Klarheit",
    "Tiefschlaf-Vorbereitung",
    "Angst- & Spannungsabbau",
    "Energetisches Fresh-up (10 Min)"
  ];

  return (
    <div className="bg-background min-h-screen font-sans overflow-x-hidden">
      <SEO 
        title="brainLight® Neuro-Regeneration | Naturheilpraxis feminatalis" 
        description="Erleben Sie brainLight®: Die High-Tech-Symbiose aus Licht, Klang und Massage. Neuro-Regeneration für sofortigen Stressabbau und mentale Klarheit." 
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(139,94,60,0.05)_0%,transparent_70%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-bold tracking-widest uppercase mb-8">
                <Brain className="w-4 h-4" /> Neuro-Technologie
              </div>
              <h1 className="text-5xl md:text-7xl font-serif text-primary mb-8 leading-tight font-bold">
                brainLight® <br />
                <span className="text-accent italic font-light text-3xl md:text-5xl">Reset für dein Nervensystem.</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl font-medium">
                In einer Welt permanenter Reizüberflutung ist echte Stille der wahre Luxus. Das brainLight®-System nutzt audio-visuelle Stimulation, um dein Gehirn in einen Zustand tiefer Neuro-Meditation zu führen – für sofortigen Cortisol-Abbau und zelluläre Regeneration.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-primary text-white px-10 py-5 rounded-2xl font-bold hover:shadow-2xl transition-all shadow-xl flex items-center gap-2">
                  Session anfragen <ArrowRight size={20} />
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-accent/20 rounded-[4rem] blur-3xl opacity-30 animate-pulse" />
              <div className="aspect-[4/3] rounded-[3.5rem] overflow-hidden shadow-2xl border-8 border-white relative z-10">
                <img 
                  src="/brainlight-hero.jpg" 
                  alt="Das Gefühl der Schwerelosigkeit mit brainLight®" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Science Deep Dive */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px]" />
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-20 items-start mb-24 text-left">
            <div className="space-y-10 text-left relative z-10">
              <h2 className="text-4xl lg:text-5xl font-serif text-primary text-left leading-tight font-bold">Neuro-Biologische <br /><span className="text-accent italic font-light">Tiefenwirkung</span></h2>
              <div className="prose prose-lg text-muted-foreground leading-relaxed font-medium text-left space-y-6">
                <p>
                  Dein Gehirn schwingt in verschiedenen Frequenzen. Im Alltag befinden wir uns meist im <strong>Beta-Modus</strong> (Stress, Analyse, Hektik). brainLight® führt dich sanft in den <strong>Theta-Bereich</strong> (4-7 Hz). Dies ist die Zone zwischen Wachen und Schlafen, in der tiefe zelluläre Reparaturprozesse stattfinden und das Unterbewusstsein für positive Impulse empfänglich wird.
                </p>
                <p>
                  Gleichzeitig stimulieren wir über die High-End-Shiatsu-Massage den <strong>Vagus-Nerv</strong> – den "Ruhenerv" und Gegenspieler unseres Stresszentrums. Die Herzrate sinkt, die muskuläre Anspannung löst sich und Endorphine werden ausgeschüttet. Es ist ein "Bio-Reset", der die Basis für echte Heilung schafft.
                </p>
              </div>
              <div className="bg-[#fdf8f3] border border-orange-100 p-12 rounded-[3.5rem] shadow-sm italic text-primary font-serif text-xl leading-relaxed text-left relative group hover:border-accent/30 transition-all">
                <Quote className="w-12 h-12 text-accent/20 absolute -top-4 -left-4" />
                "Die ideale Vorbereitung für eine Infusionskur oder Akupunktur. Wenn der Geist zur Ruhe kommt, kann der Körper die Heilreize viel effektiver verarbeiten und in Gesundheit umwandeln."
              </div>
            </div>

            <div className="relative">
              <div className="bg-white p-6 rounded-[4rem] border border-border relative overflow-hidden shadow-2xl mb-8">
                 <img 
                   src="/brainlight-chair-black.jpg" 
                   alt="brainLight® Shiatsu-Massagesessel Black Edition" 
                   className="w-full rounded-[3rem] hover:scale-105 transition-transform duration-700"
                 />
              </div>
              <div className="bg-white p-12 lg:p-14 rounded-[4rem] border border-border relative overflow-hidden shadow-2xl text-left bg-gradient-to-br from-white to-muted/20">
                <div className="absolute top-0 right-0 p-8 text-primary/5">
                  <Activity size={150} />
                </div>
                <h3 className="text-3xl font-serif font-bold text-primary mb-12 text-left">Die 4 Säulen der Regeneration</h3>
                <div className="space-y-10 text-left">
                  {features.map((f, i) => (
                    <div key={i} className="flex gap-6 text-left items-start group">
                      <div className="bg-primary/5 w-16 h-16 rounded-[1.5rem] flex items-center justify-center shrink-0 border border-primary/10 group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-sm">
                        {f.icon}
                      </div>
                      <div className="text-left">
                        <h4 className="font-bold text-primary mb-2 text-xl">{f.title}</h4>
                        <p className="text-base font-medium text-muted-foreground leading-relaxed opacity-80">{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Card */}
          <div className="bg-primary text-white p-12 lg:p-24 rounded-[5rem] text-left relative overflow-hidden shadow-2xl max-w-6xl mx-auto group">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.08)_0%,transparent_70%)]" />
            <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-accent/20 -mr-64 -mb-64 rounded-full blur-[120px] opacity-20" />
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center text-left">
              <div className="text-left">
                <h2 className="text-4xl lg:text-6xl font-serif mb-10 text-white leading-tight font-bold text-left">Fokus & Balance <br/><span className="text-accent italic font-light">auf Knopfdruck</span></h2>
                <p className="opacity-90 mb-12 text-xl leading-relaxed font-medium text-white text-left">
                  Wähle aus über 40 hochspezialisierten Programmen. In der patentierten <strong>Zero-Gravity-Position</strong> erfährst du das Gefühl absoluter Schwerelosigkeit – die ultimative Entlastung für deine Wirbelsäule und Gelenke.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 text-left">
                  {programs.map((p, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white/10 p-5 rounded-2xl border border-white/10 hover:bg-white/20 transition-all text-left">
                      <div className="w-2 h-2 bg-accent rounded-full shrink-0" />
                      <span className="text-sm font-bold text-white tracking-wide">{p}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-[3.5rem] shadow-2xl">
                   <img 
                     src="/brainlight-chair-beige.jpg" 
                     alt="brainLight® Relax-System Beige" 
                     className="w-full rounded-[2.5rem]"
                   />
                </div>
                <div className="text-center bg-white/10 backdrop-blur-xl p-12 lg:p-16 rounded-[4rem] border border-white/20 shadow-2xl relative">
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-accent rounded-full flex items-center justify-center shadow-2xl rotate-12 group-hover:scale-110 transition-transform">
                  <Star className="w-12 h-12 text-white fill-white" />
                </div>
                <h3 className="text-4xl font-serif mb-6 text-white font-bold text-center">Deine Auszeit</h3>
                <p className="text-lg opacity-90 mb-12 text-white font-medium leading-relaxed text-center">
                  Buche deine störungsfreie Session in unserer Praxis und erlebe, wie moderne Neuro-Technologie deine Gesundheit unterstützt.
                </p>
                <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-white text-primary px-12 py-6 rounded-2xl font-bold text-xl hover:bg-accent hover:text-white transition-all w-full flex items-center justify-center gap-3 border-none shadow-2xl">
                  Termin vereinbaren <ArrowUpRight className="w-6 h-6" />
                </Link>
                <p className="mt-8 text-sm opacity-60 text-white italic text-center font-medium">Ideal auch als Ergänzung zu IHHT oder Infusionen.</p>
              </div>
            </div>
          </div>
        </div>

          {/* Pricing Highlight */}
          <div className="bg-[#fdf8f3] p-10 rounded-[3rem] border border-orange-100 flex flex-col md:flex-row items-center justify-between gap-8 mt-24 max-w-6xl mx-auto shadow-sm">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-primary mb-2 font-serif">Investition in deine Ruhe</h3>
              <p className="text-lg text-muted-foreground font-medium">Einzelsession Tiefenregeneration: <span className="text-primary font-bold">ab 15,– €</span></p>
            </div>
            <Link to={ROUTE_PATHS.PREISLISTE} className="bg-white border border-border text-primary px-10 py-5 rounded-2xl font-bold flex items-center gap-3 hover:bg-primary hover:text-white transition-all shadow-sm">
              Gesamte Preisliste <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
