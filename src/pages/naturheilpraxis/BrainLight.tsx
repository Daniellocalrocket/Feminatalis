import React from "react";
import SEO from "@/components/SEO";
import { ROUTE_PATHS } from "@/lib/index";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Activity, Zap, Wind, HeartPulse, Sparkles, Quote, Star, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function BrainLight() {
  const features = [
    { 
      icon: <Wind className="text-accent w-6 h-6"/>, 
      title: "Negativ-Ionen-Funktion", 
      desc: "Reinigt die Luft tiefenwirksam und reichert sie mit gesundheitsfördernden Sauerstoff-Ionen an. Verbessert die zelluläre Schlafqualität und geistige Konzentration erheblich." 
    },
    { 
      icon: <HeartPulse className="text-accent w-6 h-6"/>, 
      title: "Biometrischer Gesundheitscheck", 
      desc: "Misst präzise Herzfrequenz und Sättigung via Sensorik, um die Massage-Intensität exakt und vollautomatisch an deinen aktuellen psycho-physischen Erschöpfungszustand anzupassen." 
    },
    { 
      icon: <Sparkles className="text-accent w-6 h-6"/>, 
      title: "Tiefen-Wärmefunktion", 
      desc: "Verströmt wohltuende Infrarot-Wärme für die beanspruchte Lendenwirbelsäule – besonders regenerierend für innerlich frierende, energetisch erschöpfte Patienten." 
    }
  ];

  const programs = [
    "Heilmeditationen für innere Organe",
    "Stresstoleranz & Achtsamkeit (Dr. U. Ott)",
    "Herz-Verankerung & Ruhe (Dr. Dahlke)",
    "Begleitende Rauchfrei-Programme",
    "Geführtes Autogenes Training",
    "Audiovisuelle Sinfonie des Lichts"
  ];

  return (
    <div className="bg-background min-h-screen font-sans">
      <SEO 
        title="brainLight® Tiefenentspannung & Massagesessel | Naturheilpraxis feminatalis" 
        description="Erlebe das audio-visuelle Gehirntraining mit Shiatsu-Massage. Tiefenentspannung auf neuro-wissenschaftlicher Basis in Bad Schönborn." 
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-border/50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6 uppercase tracking-wider">
                Neurowissenschaft trifft Entspannung
              </div>
              <h1 className="text-4xl lg:text-6xl font-serif text-primary mb-8 leading-[1.1]">
                brainLight® <br />
                <span className="text-accent italic font-light text-3xl md:text-5xl">Licht. Klang. Massage. Synergie.</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl">
                Ein atemberaubendes, sinnliches Resonanz-Erlebnis auf neuro-wissenschaftlicher Basis. Regeneration des Nervensystems in kürzester Zeit.
              </p>
            </motion.div>

            {/* Right Column: Atmospheric Image */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=2070&auto=format&fit=crop" 
                  alt="brainLight Wellness" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro & Features Section */}
      <section className="py-20 text-left">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-24 text-left">
            <div className="space-y-8 text-left">
              <h2 className="text-3xl lg:text-5xl font-serif text-primary text-left leading-tight">Wie funktioniert <br />dieses System?</h2>
              <div className="prose prose-lg text-muted-foreground leading-relaxed font-medium text-left">
                <p>
                  Über eine extrem spezialisierte <strong>Visualisierungs-Brille</strong> werden optische Lichtfrequenzen mit präziser Taktung direkt an dein Gehirn übermittelt, um es in eine biochemisch gewünschte Schwingung zu versetzen – sei es für absolut tiefe Theta-Entspannung oder höchste, fokussierte Konzentration (Beta-Wellen).
                </p>
                <p>
                  Parallel übertragen High-End Kopfhörer binaurale Beats oder professionell geführte Meditationen, während unser <strong>intelligenter High-Tech Shiatsu-Massagesessel</strong> exakte taktile Reize an der Muskulatur setzt. Diese hochkomplexe Kombination aus Sehen, Hören und Fühlen ermöglicht eine fast beispiellose, ultimative Regeneration des vegetativen Nervensystems in kürzester Zeit.
                </p>
              </div>
              <div className="bg-accent/5 border border-accent/20 p-8 rounded-3xl shadow-sm italic text-sm text-primary font-serif font-medium text-left">
                <Quote className="w-8 h-8 text-accent/40 mb-4" />
                „Was Besseres habe ich in meinem gesamten Leben nicht gefühlt... Ich konnte gedanklich vollkommen abschalten.“ <br />
                <span className="not-italic text-muted-foreground text-xs font-sans mt-4 block uppercase tracking-widest">— Eine begeisterte Kundin nach ihrer ersten 30-Minuten Session</span>
              </div>
            </div>

            <div className="bg-white p-10 lg:p-12 rounded-[3.5rem] border border-border relative overflow-hidden shadow-sm text-left">
              <div className="absolute top-0 right-0 p-8 text-primary/5">
                <Activity size={120} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-10 text-left">Exklusive 4D-Sphäre Technik</h3>
              <div className="space-y-8 text-left">
                {features.map((f, i) => (
                  <div key={i} className="flex gap-5 text-left items-start group">
                    <div className="bg-muted/30 w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border border-border shadow-sm group-hover:bg-accent/10 transition-colors">
                      {f.icon}
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold text-primary mb-2 text-lg">{f.title}</h4>
                      <p className="text-sm font-medium text-muted-foreground leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-primary text-white p-12 lg:p-20 rounded-[4rem] text-left relative overflow-hidden shadow-2xl max-w-5xl mx-auto">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.05)_0%,transparent_70%)]" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 -mr-48 -mb-48 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center text-left">
              <div className="text-left">
                <h2 className="text-3xl lg:text-5xl font-serif mb-8 text-white leading-tight font-bold text-left">Wähle dein Programm <br/>für Körper & Geist</h2>
                <p className="opacity-90 mb-10 text-lg leading-relaxed font-medium text-white text-left">
                  Wir bieten dir Zugang zu über 40 hochspezialisierten, therapeutisch aufeinander abgestimmten Programmen inklusive der beliebten Zero-Gravity-Position für das Gefühl der absoluten vollkommenen Schwerelosigkeit im Raum.
                </p>
                <div className="grid gap-4 text-left">
                  {programs.map((p, i) => (
                    <div key={i} className="flex items-center gap-4 bg-white/10 p-4 rounded-xl border border-white/10 hover:bg-white/20 transition-colors text-left">
                      <Check className="w-5 h-5 text-accent shrink-0" />
                      <span className="text-sm font-bold text-white tracking-wide">{p}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-center bg-white/10 backdrop-blur-md p-10 rounded-[3rem] border border-white/20 shadow-xl">
                <Star className="w-16 h-16 text-accent mx-auto mb-6 drop-shadow-[0_0_15px_rgba(234,179,8,0.5)] animate-pulse text-center" />
                <h3 className="text-3xl font-serif mb-4 text-white font-bold text-center">Bereit zum <br />Abtauchen?</h3>
                <p className="text-sm opacity-90 mb-10 text-white font-medium leading-relaxed text-center">
                  Buche deine absolut störungsfreie persönliche Auszeit in unserer Praxis und hebe sprichwörtlich ab. 
                  <br /><br />
                  <strong>Geheimtipp:</strong> Ideal auch als tiefgradig ergänzende Entspannung direkt nach einer anstrengenden medizinischen Behandlung in unserer Praxis.
                </p>
                <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-accent text-white px-8 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all w-full flex items-center justify-center gap-3 border-none shadow-accent/20 shadow-lg">
                  Persönliche Session buchen <ArrowUpRight className="w-5 h-5 text-white" />
                </Link>
                <p className="mt-6 text-xs opacity-60 text-white italic text-center">Zeiten & Konditionen entnehmen Sie bitte unserer aktuellen Preisliste am Empfang.</p>
              </div>
            </div>
          </div>

          <div className="bg-accent/5 p-8 rounded-[2.5rem] border border-accent/20 flex flex-col md:flex-row items-center justify-between gap-6 mt-20 max-w-5xl mx-auto">
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Investition</h3>
              <p className="text-muted-foreground">Tiefenregeneration-Session (20 Min.): 25,- €.</p>
            </div>
            <Link to={ROUTE_PATHS.PREISLISTE} className="text-accent font-bold flex items-center gap-2 hover:underline">
              Zur kompletten Preisliste <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
