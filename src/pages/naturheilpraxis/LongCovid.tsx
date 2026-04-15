import React from "react";
import SEO from "@/components/SEO";
import { ROUTE_PATHS } from "@/lib/index";
import { Link } from "react-router-dom";
import { ShieldAlert, Activity, HeartPulse, CheckCircle2, ListChecks, TestTube2, AlertTriangle, ShieldCheck, ArrowRight } from "lucide-react";

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

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-muted/20 text-center">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6 uppercase tracking-wider">
            Post-Virale & Post-Vakzin Medizin
          </div>
          <h1 className="text-4xl md:text-7xl font-serif text-primary mb-8 leading-[1.1]">
            Zurück ins Leben <br />
            <span className="text-accent italic font-light">nach Covid oder Impfung</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto italic text-center">
            "Hast du nach einer Infektion oder Impfung anhaltende Beschwerden? Fühlst du dich schlapp, unkonzentriert oder leidest an rheumatischen Symptomen? Du bildest dir das nicht ein – und man kann vieles für deine Gesundheit tun."
          </p>
        </div>
      </section>

      {/* Definition Section */}
      <section className="py-20 text-left">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 text-left mb-24">
            <div className="p-10 bg-white rounded-3xl border border-border shadow-sm group hover:border-primary transition-all text-left">
              <h3 className="font-serif text-2xl text-primary mb-3 font-bold">Long-COVID</h3>
              <p className="text-sm font-medium text-muted-foreground leading-relaxed text-left">Beschwerden, die nach einer Zeitspanne von 4 Wochen ab der fehlschlagenden Infektion noch anhalten.</p>
            </div>
            <div className="p-10 bg-white rounded-3xl border border-border shadow-sm group hover:border-primary transition-all text-left">
              <h3 className="font-serif text-2xl text-primary mb-3 font-bold">Post-COVID</h3>
              <p className="text-sm font-medium text-muted-foreground leading-relaxed text-left">Bei einer komplexen Symptomatik, die auch 12 Wochen nach der Infektion unverändert besteht.</p>
            </div>
            <div className="p-10 bg-red-50 rounded-3xl border border-red-100 shadow-sm group hover:border-red-300 transition-all text-left">
              <h3 className="font-serif text-2xl text-destructive mb-3 font-bold flex items-center gap-2"><ShieldAlert className="w-6 h-6" /> Post-Vakzin</h3>
              <p className="text-sm font-medium text-red-900/70 leading-relaxed text-left">Schwerwiegende, anhaltende Nebenwirkungen nach einer Corona-Impfung (oft Tage bis Monate später).</p>
            </div>
          </div>

          {/* Symptoms Grid */}
          <div className="text-center mb-16">
            <AlertTriangle className="w-16 h-16 text-accent mx-auto mb-6 opacity-30 animate-pulse" />
            <h2 className="text-3xl lg:text-4xl font-serif text-primary mb-4 text-center">Symptome, die verdächtig sind</h2>
            <p className="text-muted-foreground font-medium text-center">Long-COVID Symptome geordnet nach Häufigkeit (laut S1-Leitlinie)</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 mb-24 text-left">
            {symptome.map((cat, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl border border-border shadow-sm">
                <div className="flex items-center gap-3 border-b border-muted pb-4 mb-6">
                   <div className="w-3 h-3 rounded-full bg-accent"></div>
                   <h4 className="font-bold text-primary uppercase tracking-widest text-sm">{cat.cat}</h4>
                </div>
                <ul className="space-y-4">
                  {cat.items.map((item, j) => (
                    <li key={j} className="flex gap-4 items-start text-sm text-muted-foreground font-medium text-left">
                      <ListChecks className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Diagnosis Section */}
          <div className="bg-primary text-white rounded-[4rem] p-12 lg:p-20 overflow-hidden relative shadow-2xl text-left">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 -mr-48 -mt-48 rounded-full blur-3xl"></div>
            <div className="relative z-10 text-left max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-10 text-left">
                <div className="bg-white/10 p-4 rounded-2xl shrink-0 text-left">
                   <TestTube2 className="w-10 h-10 text-accent text-left" />
                </div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight text-left">
                  Die richtige Diagnostik <br className="hidden md:block" />ist vollkommen entscheidend
                </h2>
              </div>
              <p className="text-lg opacity-80 mb-12 max-w-4xl font-medium leading-relaxed text-white text-left">
                Standard-Laborwerte wie ein kleines Blutbild oder CRP reichen oft nicht aus. In unserer Praxis bieten wir spezialisierte Laborprofile zur tiefgründigen erweiterten Diagnostik an:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-12 text-left">
                {erweiterteDiagnostik.map((test, i) => (
                  <div key={i} className="flex items-start gap-4 bg-white/5 p-5 rounded-2xl border border-white/10 hover:bg-white/15 transition-colors text-left">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm font-medium leading-relaxed text-white text-left">{test}</span>
                  </div>
                ))}
              </div>
              <div className="p-8 bg-accent/20 rounded-3xl border border-accent/30 text-center mx-auto max-w-3xl">
                <p className="text-lg font-serif italic text-white text-center">
                  "Zögere nicht! Es kann dir geholfen werden. Anhand der Ergebnisse erstellen wir deinen persönlichen, ganzheitlichen Therapie-Vorschlag."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-muted/20 border-t border-border text-center">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <ShieldCheck className="w-16 h-16 text-primary mx-auto mb-8 opacity-20" />
          <h2 className="text-3xl md:text-5xl font-serif text-primary mb-8 leading-tight font-bold text-center">Lass uns gemeinsam <br />deinen Heilungsweg starten</h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed font-medium text-center">
            Wir bringen deinen Körper zurück in eine stabile, selbstregulierende Balance.
          </p>
          <div className="flex justify-center">
            <Link to={ROUTE_PATHS.CONTACT} className="inline-flex bg-primary text-white px-12 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-2xl flex items-center justify-center gap-3 shadow-primary/20 border-none">
              Termin anfragen <Activity className="w-6 h-6 text-white text-center" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
