import React from "react";
import SEO from "@/components/SEO";
import { ROUTE_PATHS } from "@/lib/index";
import { Link } from "react-router-dom";
import { Stethoscope, Droplet, Wind, Brain, Activity, Flame, Zap, ArrowRight, HeartPulse, Sparkles, Microscope, FlaskConical, Thermometer, ShieldCheck, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import { useSiteImages } from "@/hooks/useSiteImages";

export default function Naturheilpraxis() {
  const { getImageUrl } = useSiteImages();
  
  const diagnostik = [
    { title: "Funktionelle Labordiagnostik", desc: "Vollblut-Analysen, Hormonstatus, Mikrobiom & Stoffwechsel.", path: ROUTE_PATHS.LABOR, icon: <Microscope className="w-8 h-8" /> },
    { title: "Mikrobiom- & Darmanalyse", desc: "Tiefgreifende Stuhldiagnostik zur Analyse von Dysbiosen, Leaky-Gut und Entzündungen.", path: ROUTE_PATHS.DARMANALYSE, icon: <Activity className="w-8 h-8" /> },
    { title: "Schwermetall-Checks", desc: "Ursachenforschung bei chronischen Blockaden durch Toxine.", path: ROUTE_PATHS.LABOR, icon: <FlaskConical className="w-8 h-8" /> }
  ];

  const therapien = [
    { title: "Infusionstherapie", desc: "Direkte Nährstoffflutung für maximale Zell-Energie.", path: ROUTE_PATHS.INFUSIONSTHERAPIE, icon: <Droplet className="w-6 h-6" /> },
    { title: "IHHT Zelltraining", desc: "Simulation von Höhentraining zur Regeneration der Mitochondrien.", path: ROUTE_PATHS.ZELLTRAINING, icon: <Wind className="w-6 h-6" /> },
    { title: "Hämo-Laser-Therapie", desc: "Systemische Blutbestrahlung zur Aktivierung des Stoffwechsels.", path: ROUTE_PATHS.LASERTHERAPIE, icon: <Sparkles className="w-6 h-6" /> },
    { title: "TCM & Akupunktur", desc: "Ganzheitliche Regulation nach der Lehre der 5 Elemente.", path: ROUTE_PATHS.TCM, icon: <Flame className="w-6 h-6" /> },
    { title: "Schwermetallausleitung", desc: "Chelat-Therapie zur Entgiftung bei chronischen Blockaden.", path: ROUTE_PATHS.SCHWERMETALL, icon: <FlaskConical className="w-6 h-6" /> },
    { title: "Blutegeltherapie", desc: "Biochemische Wirkung des Egelspeichels bei Entzündungen.", path: ROUTE_PATHS.BLUTEGEL, icon: <Thermometer className="w-6 h-6" /> }
  ];

  return (
    <div className="bg-background min-h-screen font-sans">
      <SEO 
        title="Naturheilpraxis | Funktionelle Medizin & Diagnostik | feminatalis" 
        description="Ganzheitliche Therapieansätze in Bad Schönborn. Wir finden die Ursache deiner Beschwerden durch tiefgreifende Diagnostik und modernste Naturheilkunde." 
      />

      {/* Hero */}
      <section className="relative pt-32 pb-48 text-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={getImageUrl("img_hero_naturheilpraxis", "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2040&auto=format&fit=crop")} 
            alt="Naturheilpraxis Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/75 backdrop-blur-[1px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6 uppercase tracking-wider">
              Ursachenbasierte Medizin
            </div>
            <h1 className="text-4xl md:text-7xl font-serif text-primary mb-8 leading-[1.1]">
              Nicht nur Symptome lindern.<br />
              <span className="text-accent italic font-light">Die Ursache adressieren.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto italic font-medium mb-12">
              „Wir betrachten deinen Organismus als komplexes mehrschichtiges System und helfen dir mit modernen Untersuchungs- und Therapiemethoden die Balance zwischen Körper, Psyche und Bewusstsein wieder zu erlangen.“
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
               <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="inline-flex bg-primary text-white px-12 py-5 rounded-2xl font-bold hover:scale-105 transition-all shadow-2xl flex items-center justify-center gap-3 border-none text-lg">
                  Jetzt Analyse-Termin buchen <ArrowRight className="w-6 h-6" />
               </Link>
               <Link to={ROUTE_PATHS.LABOR} className="inline-flex bg-white text-primary border border-border px-12 py-5 rounded-2xl font-bold hover:bg-muted transition-all items-center justify-center text-lg shadow-sm">
                  Labor & Diagnostik
               </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Philosophy & 3 Pillars */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-primary p-12 lg:p-16 rounded-[4rem] border border-border shadow-2xl flex flex-col gap-12 relative overflow-hidden">
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent pointer-events-none"></div>
             
             <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
               <div className="bg-white/10 backdrop-blur-sm w-32 h-32 rounded-[2rem] flex items-center justify-center shrink-0 border border-white/20 hidden sm:flex">
                  <Brain className="text-accent w-16 h-16" />
               </div>
               <div className="text-left">
                  <h2 className="text-3xl lg:text-5xl font-serif text-white mb-6 leading-tight">Das Prinzip der kleinsten Einheit</h2>
                  <p className="text-lg text-white/90 leading-relaxed italic font-medium">
                    "Die Zelle ist die kleinste lebende Einheit deines Körpers. Wenn deine Zellen gesund sind und Energie produzieren können, bist auch du gesund und leistungsfähig. Deshalb setzen wir dort an, wo Gesundheit entsteht."
                  </p>
               </div>
             </div>

             <div className="grid md:grid-cols-3 gap-8 relative z-10 pt-12 border-t border-white/10">
                {[
                  { title: "Sanfte Mikro- & Zellimmuntherapie", icon: <ShieldCheck className="w-6 h-6 text-accent" /> },
                  { title: "Homöopathie, Phytotherapie & Akupunktur", icon: <Leaf className="w-6 h-6 text-accent" /> },
                  { title: "Laborgestützte Entschlackung & Ausleitung", icon: <FlaskConical className="w-6 h-6 text-accent" /> }
                ].map((pillar, i) => (
                  <div key={i} className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 flex flex-col items-center text-center">
                    <div className="mb-4">{pillar.icon}</div>
                    <h4 className="text-white font-serif text-lg leading-snug">{pillar.title}</h4>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Diagnostik Grid */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-20 text-center">
            <h2 className="text-4xl lg:text-6xl font-serif text-primary mb-6">Phase 1: Exakte Diagnostik</h2>
            <p className="text-muted-foreground text-xl font-medium max-w-2xl mx-auto italic">Zahlen, Daten und Fakten als absolut notwendiges Fundament jeder tiefgreifenden Therapie.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {diagnostik.map((item, i) => (
              <Link to={item.path} key={i} className="group bg-white p-10 lg:p-12 rounded-[3.5rem] border border-border hover:border-accent transition-all hover:shadow-2xl flex flex-col justify-between">
                <div>
                  <div className="bg-muted/30 w-20 h-20 rounded-2xl flex items-center justify-center mb-10 border border-border group-hover:border-accent/30 transition-colors shadow-sm text-accent">
                     {item.icon}
                  </div>
                  <h3 className="text-2xl font-serif text-primary font-bold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground text-base leading-relaxed mb-8 font-medium">{item.desc}</p>
                </div>
                <div className="flex items-center gap-2 text-accent font-bold group-hover:gap-4 transition-all pb-2">
                   Details untersuchen <ArrowRight size={20} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Therapien Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-20 text-left md:text-center w-full">
            <h2 className="text-4xl lg:text-6xl font-serif text-primary mb-6">Phase 2: Behandlungsmethoden</h2>
            <p className="text-muted-foreground text-xl font-medium max-w-2xl mx-auto italic">Ganzheitliche, hochmoderne Verfahren zur Regulation und Regeneration deiner Zellen.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {therapien.map((item, i) => (
              <Link to={item.path} key={i} className="bg-white p-10 rounded-[3rem] border border-border hover:shadow-xl hover:border-accent group transition-all flex flex-col justify-between items-start h-full">
                <div className="bg-muted/30 w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 mb-6 group-hover:bg-accent/10 transition-colors">
                   <div className="text-primary group-hover:scale-110 transition-transform">{item.icon}</div>
                </div>
                <div className="flex-1">
                   <h4 className="text-xl font-serif font-bold text-primary mb-3 text-left">{item.title}</h4>
                   <p className="text-sm font-medium text-muted-foreground leading-relaxed text-left opacity-90">{item.desc}</p>
                </div>
                <div className="mt-8 text-accent opacity-0 group-hover:opacity-100 transition-all flex items-center gap-2 font-bold text-sm">
                   Mehr erfahren <ArrowRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Sections */}
      <section className="py-24 bg-muted/20 border-y border-border text-left">
        <div className="container mx-auto px-4 max-w-6xl">
           <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-10 text-left">
                <div className="text-left">
                   <h2 className="text-4xl lg:text-5xl font-serif text-primary leading-tight mb-4 text-left">Unsere fokussierten Spezialgebiete</h2>
                   <p className="text-muted-foreground font-medium text-lg text-left italic">Themen, für die wir wirklich brennen.</p>
                </div>
                <div className="flex flex-col gap-5 text-left">
                  {[
                    { title: "Long-Covid & Chronic Fatigue", path: ROUTE_PATHS.LONG_COVID },
                    { title: "Ganzheitlicher Kinderwunsch", path: ROUTE_PATHS.KINDERWUNSCH },
                    { title: "Mitochondrien-Medizin", path: ROUTE_PATHS.MITOCHONDRIEN },
                    { title: "Hormonelle Dysbalancen", path: ROUTE_PATHS.HORMONTHERAPIE }
                  ].map((spec, i) => (
                    <Link key={i} to={spec.path} className="flex items-center justify-between p-6 lg:p-8 bg-white rounded-3xl border border-border hover:border-accent hover:shadow-lg transition-all group shadow-sm text-left">
                       <span className="font-bold text-primary text-xl font-serif">{spec.title}</span>
                       <ArrowRight className="text-accent opacity-0 group-hover:opacity-100 group-hover:translate-x-3 transition-all w-8 h-8" />
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className="bg-primary text-primary-foreground p-12 lg:p-16 rounded-[4rem] shadow-2xl relative overflow-hidden h-full flex flex-col justify-center text-left">
                 <div className="absolute top-0 right-0 p-8">
                   <HeartPulse className="w-48 h-48 text-accent/10 -mr-10 -mt-10" />
                 </div>
                 <h3 className="text-3xl lg:text-4xl font-serif font-bold mb-8 relative z-10 leading-tight">Wann ist die Naturheilkunde <br />für dich richtig?</h3>
                 <p className="text-lg opacity-90 leading-relaxed mb-10 relative z-10 font-medium">
                    Natürliche Ursachenmedizin ist dann besonders wertvoll, wenn du deine Gesundheit proaktiv in die eigenen Hände nehmen möchtest oder die klassische Medizin absolut keine ausreichende Erklärung für dein chronisches Empfinden findet. Wir arbeiten bewusstein komplementär, also streng wissenschaftlich ergänzend zur Schulmedizin.
                 </p>
                 <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="text-accent font-bold flex items-center gap-3 hover:gap-5 transition-all text-xl w-fit relative z-10">
                    Termin für Erstgespräch anfragen <ArrowRight className="w-6 h-6" />
                 </Link>
              </div>
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-background border-t border-border text-center">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Stethoscope className="w-20 h-20 text-primary mx-auto mb-10 opacity-20" />
          <h2 className="text-4xl lg:text-6xl font-serif text-primary mb-10 leading-tight font-bold text-center">Bist du bereit für deinen <br />ersten aktiven Schritt?</h2>
          <p className="text-xl text-muted-foreground mb-16 max-w-3xl mx-auto font-medium leading-relaxed text-center">
            Lass uns gemeinsam detektivisch herausfinden, was dein Körper wirklich vermisst. Buche jetzt dein umfassendes Analysegespräch.
          </p>
          <div className="flex justify-center">
             <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="inline-flex bg-primary text-white px-14 py-6 rounded-2xl font-bold text-xl hover:scale-105 transition-all shadow-2xl border-none">Anamnese-Termin anfragen</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

