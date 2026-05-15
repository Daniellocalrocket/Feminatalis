import React from "react";
import SEO from "@/components/SEO";
import { ROUTE_PATHS } from "@/lib/index";
import { Link } from "react-router-dom";
import PreisTransparenz from "@/components/PreisTransparenz";
import { ShieldAlert, Activity, HeartPulse, CheckCircle2, ListChecks, TestTube2, AlertTriangle, ShieldCheck, ArrowRight } from "lucide-react";
import SplitScreenHero from "@/components/SplitScreenHero";

export default function LongCovid() {
  const symptome = [
    { cat: "Sehr häufig", items: ["Erschöpfung (Fatigue)", "Eingeschränkte Belastbarkeit", "Atemnot bei Belastung", "Kopfschmerzen", "Muskelschmerzen", "Geruchs- & Geschmacksstörungen"] },
    { cat: "Häufig", items: ["Starker Husten", "Schlafstörungen", "Depressive Verstimmungen", "Angstzustände", "Denkstörungen (Brain Fog)", "Haarausfall", "StressIntoleranz"] },
    { cat: "Selten", items: ["Lähmungserscheinungen", "Kribbeln (Parästhesien)", "Schwindel", "Durchfall", "Übelkeit", "Herzrasen (Tachykardie)"] }
  ];

  const erweiterteDiagnostik = [
    "Neurotransmitter & Hormone (Tryptophan, Serotonin, GABA, Glutamat, Cortisol, DHEA...)",
    "Katecholaminstoffwechsel (Phenylalanin, Tyrosin, Dopamin, Noradrenalin, Adrenalin...)",
    "Metabolite / Enzyme (L-Kynurenin, Quinolinsäure, IDO- und KMO-Aktivität...)",
    "Oxidativer & nitrosativer Stress (Nitrothyrosin, Citrullin, Antioxidative Kapazität...)",
    "Mitochondriendiagnostik (ATP intrazellulär, Laktat/Pyruvat, LDH-Isoenzyme, BHI...)",
    "Diagnostik reaktivierter Viren (EBV, HHV-6, CMV, HSV1+2, Influenza A, Zoster...)",
    "Antikörper-Profile (ANA, Anti-CCP, dsDNA, GPCR-Antikörper usw.)",
    "Freizirkulierende Spikeproteine",
    "Mikronährstoffanalyse (Vit. D, C, B-Vitamine, Q10, Selen, L-Carnitin...)",
    "Darmmikrobiom, Schleimhautimmunität und Entzündungsparameter"
  ];

  return (
    <div className="bg-background min-h-screen font-sans">
      <SEO 
        title="Long-Covid & Post-Vakzin Hilfe | Naturheilpraxis feminatalis" 
        description="Anhaltende Beschwerden nach Infektion oder Impfung? Wir bieten spezialisierte Diagnostik und Therapie bei Post-Covid und Post-Vakzin-Syndrom." 
      />
      <SplitScreenHero
        badge="Post-Virale & Post-Vakzin Medizin"
        title={<>Endlich wieder gehört werden: <br /><span className="text-accent italic font-light">Dein Weg zurück ins Leben</span></>}
        subtitle="Erschöpfung, Brainfog, Atemnot – oft als „psychosomatisch“ abgetan, ist die Ursache meist eine tiefgreifende Störung deiner Zellenergie. Wir validieren dein Leid mit präziser Diagnostik und therapieren die mitochondriale Basis deiner Genesung."
        imageSrc="https://images.unsplash.com/photo-1631549916768-4a9e8902c1e3?q=80&w=2070&auto=format&fit=crop"
        imageAlt="Long-Covid Diagnostik und Behandlung"
        imageKey="img_hero_long_covid"
      >
        <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-primary text-white px-10 py-5 rounded-2xl font-bold hover:shadow-2xl transition-all shadow-xl active:scale-95 flex items-center gap-2">
          Analyse-Gespräch anfragen <ArrowRight size={20} />
        </Link>
      </SplitScreenHero>

      {/* Philosophy: Real Biology vs. Psychosomatics */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl lg:text-5xl font-serif text-primary mb-10 leading-tight">Du bildest dir das nicht ein. <br /><span className="text-accent italic">Deine Biologie hat sich verändert.</span></h2>
          <div className="prose prose-lg mx-auto text-muted-foreground leading-relaxed">
            <p>
              Bei Long-COVID und dem Post-Vakzin-Syndrom sehen wir oft eine Kombination aus <strong>persistierenden Spike-Proteinen</strong>, <strong>Mikrothromben</strong> in den kleinsten Gefäßen und einer massiven <strong>Mitochondriopathie</strong>. Das erklärt, warum du dich erschöpft fühlst, obwohl dein Standard-Blutbild „perfekt“ aussieht.
            </p>
            <p className="mt-6">
              Wir machen das Unsichtbare sichtbar. Über die Messung der intrazellulären ATP-Produktion und spezialisierte Antikörper-Profile (GPCR-AAB) finden wir die biochemischen Beweise für deine Beschwerden und entwickeln einen Regenerationspfad, der dort ansetzt, wo die Energie entsteht: in deinen Mitochondrien.
            </p>
          </div>
        </div>
      </section>

      {/* Symptom Categorization */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8 mb-24 text-left">
            <div className="p-10 bg-white rounded-[3rem] border border-border shadow-sm hover:border-accent transition-all text-left group">
              <h3 className="font-serif text-3xl text-primary mb-4 font-bold text-left group-hover:text-accent transition-colors">Long-COVID</h3>
              <p className="text-base font-medium text-muted-foreground leading-relaxed text-left">Symptome, die über die 4. Woche hinaus bestehen. Oft getrieben durch anhaltende Entzündungsprozesse.</p>
            </div>
            <div className="p-10 bg-white rounded-[3rem] border border-border shadow-sm hover:border-accent transition-all text-left group">
              <h3 className="font-serif text-3xl text-primary mb-4 font-bold text-left group-hover:text-accent transition-colors">Post-COVID</h3>
              <p className="text-base font-medium text-muted-foreground leading-relaxed text-left">Wenn nach 12 Wochen keine Besserung eintritt. Meist liegt hier eine schwere mitochondriale Erschöpfung vor.</p>
            </div>
            <div className="p-10 bg-primary text-white rounded-[3rem] border border-border shadow-2xl transition-all text-left relative overflow-hidden">
               <div className="absolute top-0 right-0 p-6 opacity-10"><ShieldAlert size={80} /></div>
              <h3 className="font-serif text-3xl mb-4 font-bold text-left text-accent">Post-Vakzin</h3>
              <p className="text-base font-medium opacity-90 leading-relaxed text-left">Beschwerden nach der Impfung. Wir analysieren Auto-Antikörper und Spike-Persistenz, um das System zu beruhigen.</p>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-serif text-primary mb-6 leading-tight">Warnsignale der Zell-Erschöpfung</h2>
            <p className="text-muted-foreground font-medium text-center max-w-2xl mx-auto">Wenn die Kraftwerke deiner Zellen (Mitochondrien) streiken, reagiert das gesamte System:</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 mb-24 text-left">
            {[
              { cat: "Neurologisch", items: ["Brain Fog (Gehirnnebel)", "Konzentrationsverlust", "Schlafstörungen", "Sensibilitätsstörungen"], icon: <Activity className="w-8 h-8 text-accent" /> },
              { cat: "Körperlich", items: ["Belastungs-Intoleranz (PEM)", "Extreme Fatigue", "Atemnot (Lunge o.B.)", "Muskelschmerzen"], icon: <HeartPulse className="w-8 h-8 text-accent" /> },
              { cat: "Immunologisch", items: ["Reaktivierte Viren (EBV)", "Nahrungsmittel-Intoleranzen", "Mastzell-Aktivierung", "Haarausfall"], icon: <ShieldCheck className="w-8 h-8 text-accent" /> }
            ].map((cat, i) => (
              <div key={i} className="bg-white p-10 rounded-[3.5rem] border border-border shadow-sm group hover:shadow-xl transition-all text-left">
                <div className="bg-muted/50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                   {cat.icon}
                </div>
                <h4 className="font-bold text-primary uppercase tracking-widest text-sm mb-6 text-left">{cat.cat}</h4>
                <ul className="space-y-4 text-left">
                  {cat.items.map((item, j) => (
                    <li key={j} className="flex gap-4 items-start text-base text-muted-foreground font-bold text-left">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Diagnosis & Synergy Section */}
          <div className="bg-primary text-white rounded-[5rem] p-12 lg:p-24 overflow-hidden relative shadow-2xl text-left">
            <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-accent/20 -mr-64 -mt-64 rounded-full blur-[120px] opacity-20"></div>
            <div className="relative z-10 text-left max-w-5xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-12 leading-tight text-left">
                Molekulare Detektivarbeit <br /><span className="text-accent italic font-light">für deine Freiheit</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-8 mb-16 text-left">
                {[
                  "Zellenergie-Check (Intrazelluläres ATP)",
                  "Spike-Protein-Persistenz & Detox",
                  "Autoantikörper-Screening (GPCR-AAB)",
                  "Mikrothromben- & Gefäß-Diagnostik",
                  "Viren-Reaktivierung (EBV/HHV-6)",
                  "Neurotransmitter- & Stress-Achse"
                ].map((test, i) => (
                  <div key={i} className="flex items-center gap-6 bg-white/5 p-8 rounded-[2.5rem] border border-white/10 hover:bg-white/15 transition-all text-left group">
                    <CheckCircle2 className="w-8 h-8 text-accent shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-xl font-bold text-white text-left">{test}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-white/10 backdrop-blur-md p-12 rounded-[4rem] border border-white/20 text-left mb-16">
                <h4 className="text-3xl font-serif text-accent mb-6 font-bold text-left">Die Synergie der Heilung</h4>
                <p className="text-white opacity-90 text-xl leading-relaxed text-left font-medium">
                  Wir kombinieren das <strong>IHHT-Zelltraining</strong> (um geschädigte Mitochondrien zu ersetzen) mit <strong>hochdosierten Infusionen</strong> (zur Entgiftung & Energiebereitstellung) und dem <strong>CO2-Trockenbad</strong> (zur Öffnung der kleinsten Kapillaren). Dieser kombinierte Ansatz ist unsere Antwort auf die Komplexität von Post-COVID.
                </p>
              </div>

              <div className="text-center">
                <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="inline-flex bg-accent text-white px-14 py-6 rounded-2xl font-bold text-xl hover:scale-105 transition-all shadow-2xl">
                   Diagnostik-Termin anfragen <ArrowRight className="ml-3 w-7 h-7" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PreisTransparenz 
        preisHint="Beratung & Diagnostik" 
        hinweis="Individuelle Abrechnung nach Zeitaufwand und Laborparametern."
      />

      {/* Final CTA */}
      <section className="py-24 bg-background border-t border-border text-center">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <ShieldCheck className="w-16 h-16 text-primary mx-auto mb-8 opacity-20" />
          <h2 className="text-3xl md:text-5xl font-serif text-primary mb-8 leading-tight font-bold text-center">Du musst diesen Weg <br />nicht alleine gehen</h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed font-medium text-center">
            Wir bringen deinen Körper zurück in eine stabile, selbstregulierende Balance. Lass uns gemeinsam den ersten Schritt machen.
          </p>
          <div className="flex justify-center">
            <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="inline-flex bg-primary text-white px-12 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-2xl flex items-center justify-center gap-3 shadow-primary/20 border-none">
              Kostenfreie Vor-Analyse anfragen <ArrowRight className="w-6 h-6 text-white text-center" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
