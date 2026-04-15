import React from "react";
import SEO from "@/components/SEO";
import { ROUTE_PATHS } from "@/lib/index";
import { Link } from "react-router-dom";
import { CheckCircle2, ShieldAlert, ActivitySquare, Dna, Leaf, ShieldCheck, ArrowRight, Bug } from "lucide-react";

export default function Darmsanierung() {
  const indikationen = [
    "Reizdarmsyndrom & SIBO (Blähbauch, Krämpfe, Diarrhoe)",
    "Nahrungsmittelunverträglichkeiten & Histaminintoleranz",
    "Chronische Erschöpfung, Müdigkeit & Burnout-Syndrom",
    "Hartnäckige Hauterkrankungen (Neurodermitis, Akne, Psoriasis)",
    "Schwere Autoimmunerkrankungen (Hashimoto, Rheuma etc.)",
    "Häufige virale / bakterielle Infekte & schwaches Immunsystem",
    "Depressive Verstimmungen, Ängste & starker Brain Fog",
    "Unerfüllter Kinderwunsch & hormonelle Dysbalancen"
  ];

  const therapiePhasen = [
    {
      title: "1. Exakte Diagnostik",
      desc: "Hochspezialisierte Stuhldiagnostik (komplettes Mikrobiom, tiefe Entzündungsmarker, Leaky-Gut Marker wie Zonulin). Kein Raten, wir messen.",
      icon: <ActivitySquare className="w-8 h-8 text-accent" />
    },
    {
      title: "2. Gezieltes Reinigen",
      desc: "Konsequente und sanfte Ausleitung von Toxinen, Abbau von Biofilmen und Reduktion von potenziell pathogenen Erregern (z.B. Candida).",
      icon: <Leaf className="w-8 h-8 text-accent" />
    },
    {
      title: "3. Darmschleimhaut Reparieren",
      desc: "Massiver Wiederaufbau der Darmschleimhaut (schützende Mucin-Schicht) und strikte Versiegelung beim Leaky-Gut-Syndrom.",
      icon: <ShieldCheck className="w-8 h-8 text-accent" />
    },
    {
      title: "4. Nachhaltig Besiedeln",
      desc: "Gezielter, hochdosierter Aufbau der physiologischen, guten Darmflora durch genau passende prä- und probiotische Bakterienstämme exakt nach Laborbefund.",
      icon: <Dna className="w-8 h-8 text-accent" />
    }
  ];

  return (
    <div className="bg-background min-h-screen font-sans">
      <SEO 
        title="Darmsanierung & Mikrobiom-Therapie | Naturheilpraxis feminatalis" 
        description="Der absolute Schlüssel zur Gesundheit liegt in deinem Darm. Wir bieten hochspezialisierte Mikrobiom-Diagnostik und individuelle Therapiekonzepte bei Reizdarm und Leaky-Gut." 
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-muted/20 text-center">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6 uppercase tracking-wider">
            Darmgesundheit & Mikrobiom
          </div>
          <h1 className="text-4xl md:text-7xl font-serif text-primary mb-8 leading-[1.1]">
            Das Zentrum <br />
            <span className="text-accent italic font-light">deiner Gesundheit</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto italic text-center font-medium">
            "Der Tod sitzt im Darm" – das wusste schon Paracelsus. Heute sagt die moderne Wissenschaft ganz klar: Knapp 80% unseres hochentwickelten Immunsystems und unserer mentalen Kraft sind lokal in der Darmschleimhaut angesiedelt.
          </p>
        </div>
      </section>

      {/* Intro & Indikationen Section */}
      <section className="py-20 text-left">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
            <div className="bg-white p-12 lg:p-16 rounded-[4rem] border border-border shadow-2xl relative overflow-hidden text-left h-full">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 -mr-32 -mt-32 rounded-full blur-3xl pointer-events-none"></div>
              <div className="relative z-10 text-left">
                <Bug className="w-16 h-16 text-primary opacity-20 mb-8" />
                <h2 className="text-3xl lg:text-5xl font-serif text-primary mb-8 text-left leading-tight">Warum eine echte <br />Darmsanierung?</h2>
                <div className="prose prose-lg text-muted-foreground leading-relaxed font-medium">
                  <p>
                    Unser hochkomplexes Darmmikrobiom (die Gesamtheit aller unserer Milliarden Darmbakterien) produziert essentielle lebenswichtige Vitamine, extrem wichtige Neurotransmitter (wie z.B. Serotonin, unser "Glückshormon") und moduliert unser gesamtes empfindliches Immunsystem in Sekundenbruchteilen. 
                  </p>
                  <p>
                    Massive Fehlernährung, Dauerstress, akute Umweltgifte und vor allem oft verordnete Medikamente wie <strong>Antibiotika und Magensäureblocker (PPIs)</strong> können diese feine, vitale bakterielle Balance in Kürze grundlegend zerstören. Die folgenschwere Konsequenz sind extrem oft stille chronische Entzündungen (Silent Inflammation) und das sogenannte <strong>"Leaky-Gut-Syndrom"</strong> (der buchstäblich löchrige Darm), bei dem gefährliche Toxine ungehindert direkt in den Blutkreislauf und sogar ins Gehirn gelangen können.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8 text-left h-full">
              <h3 className="text-3xl lg:text-4xl font-serif text-primary font-bold text-left mb-8 leading-tight">Typische Anzeichen <br />einer Dysbiose:</h3>
              <div className="flex flex-col gap-5 mt-2 text-left">
                {indikationen.map((item, i) => (
                  <div key={i} className="flex items-center gap-5 bg-white p-6 rounded-2xl border border-border shadow-sm hover:border-accent transition-colors text-left group">
                    <div className="bg-muted/30 p-2 rounded-xl group-hover:bg-accent/10 transition-colors">
                      <ShieldAlert className="w-6 h-6 text-accent shrink-0" />
                    </div>
                    <span className="text-sm lg:text-base font-bold text-primary leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Therapy Phasen*/}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-20 text-center">
             <h2 className="text-4xl lg:text-6xl font-serif text-white font-bold text-center mb-8 leading-tight">Das feminatalis <br />4-Phasen-Erfolgsmodell</h2>
             <p className="text-white/90 font-medium mt-4 text-center max-w-3xl mx-auto italic text-xl leading-relaxed">
               Eine nachhaltig erfolgreiche Darmsanierung ist definitiv kein "schnelles Probiotikum von der Stange aus der Apotheke", sondern bedarf eines hochstrategischen, engmaschig laborbasierten und individuell angepassten Vorgehens.
             </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
             {therapiePhasen.map((phase, i) => (
               <div key={i} className="bg-white/5 backdrop-blur-md p-10 rounded-[3rem] border border-white/10 text-left hover:bg-white/10 transition-all shadow-2xl relative overflow-hidden group">
                  <div className="absolute -right-10 -top-10 opacity-5 group-hover:opacity-10 transition-opacity">
                     <Bug className="w-48 h-48 text-white" />
                  </div>
                  <div className="mb-8 bg-white/10 w-20 h-20 rounded-2xl flex items-center justify-center border border-white/20 relative z-10">
                    {phase.icon}
                  </div>
                  <h3 className="text-2xl font-serif text-white font-bold mb-6 relative z-10">{phase.title}</h3>
                  <p className="text-white/80 leading-relaxed text-sm font-medium relative z-10 pb-4">{phase.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-background border-t border-border text-center">
        <div className="container mx-auto px-4 max-w-4xl text-center">
           <Dna className="w-20 h-20 text-primary mx-auto mb-10 opacity-20" />
           <h2 className="text-4xl md:text-6xl font-serif text-primary mb-10 leading-tight font-bold text-center">Dein sicherer Weg <br />zur inneren Stärke</h2>
           <p className="text-xl text-muted-foreground leading-relaxed font-medium text-center mb-16 max-w-3xl mx-auto">
             Beginne jetzt vollkommen konsequent mit dem wichtigsten Fundament deiner langfristigen Gesundheit – von innen heraus. Ohne funktionierenden Darm ist alles andere umsonst.
           </p>
           <div className="flex justify-center">
              <Link to={ROUTE_PATHS.CONTACT} className="inline-flex bg-primary text-white px-14 py-6 rounded-2xl font-bold text-xl hover:scale-105 transition-transform shadow-2xl flex items-center justify-center gap-4 shadow-primary/20 border-none">
                Große Labor-Analyse vereinbaren <ArrowRight className="text-white w-7 h-7" />
              </Link>
           </div>
        </div>
      </section>
    </div>
  );
}
