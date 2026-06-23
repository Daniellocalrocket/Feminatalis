import React from "react";
import SEO from "@/components/SEO";
import { ROUTE_PATHS } from "@/lib/index";
import { Link } from "react-router-dom";
import { Droplet, ActivitySquare, ShieldCheck, ArrowRight, FlaskConical, Zap, Sparkles, CheckCircle2, AlertOctagon } from "lucide-react";
import SplitScreenHero from "@/components/SplitScreenHero";
import PreisTransparenz from "@/components/PreisTransparenz";
import { motion } from "framer-motion";

export default function Infusionstherapie() {
  return (
    <div className="bg-background min-h-screen font-sans">
      <SEO 
        title="Infusionstherapie & Nährstoff-Drips | Naturheilpraxis feminatalis" 
        description="Maximale Bioverfügbarkeit durch intravenöse Nährstoff-Flutung. Behebe Vitalstoffmängel sofort, umgehe den Magen-Darm-Trakt und unterstütze deine Heilungsprozesse." 
      />

      <SplitScreenHero
        badge="Medizinische Nährstoff-Infusionen"
        title={<>Vitalität ohne Umwege: <br /><span className="text-accent italic font-light">Die Infusionstherapie</span></>}
        subtitle="Eine Infusionstherapie ist sinnvoll, wenn der Körper Vitalstoffe nicht mehr ausreichend über die Nahrung oder den Darm aufnehmen kann – sei es durch chronische Darmerkrankungen, hohen oxidativen Stress oder erhöhten Bedarf in besonderen Lebensphasen. Die direkte Zufuhr in die Blutbahn umgeht Engpässe im Stoffwechsel und versorgt deine Zellen sofort mit der benötigten Energie und den wichtigsten Aufbaustoffen."
        imageSrc="/assets/iv-drip-vitamin-infusion-therapy.jpg"
        imageAlt="Infusionstherapie und Vitalstoffe"
      >
        <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-primary text-white px-10 py-5 rounded-2xl font-bold hover:shadow-2xl transition-all shadow-xl active:scale-95 flex items-center gap-2">
          Analyse-Gespräch anfragen <ArrowRight size={20} />
        </Link>
      </SplitScreenHero>

      {/* Philosophy & Bioavailability */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-left">
              <span className="bg-primary/5 text-primary text-xs font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full inline-block">
                Pharmakologischer Vorteil
              </span>
              <h2 className="text-3xl lg:text-5xl font-serif text-primary leading-tight text-left">
                100% Bioverfügbarkeit: <br /><span className="text-accent italic font-light">Intravenös vs. Oral</span>
              </h2>
              <div className="prose prose-lg text-muted-foreground leading-relaxed space-y-6 text-left">
                <p>
                  Bei der oralen Einnahme von Nahrungsergänzungsmitteln (NEM) geht ein großer Teil der Wirkstoffe verloren. Sie müssen den sauren Magen, die Schleimhautbarrieren des Darms und die Entgiftungsfilter der Leber (den sogenannten First-Pass-Effekt) passieren. Bei chronischen Darmentzündungen, Leaky Gut, Enzymdefiziten oder oxidativem Stress ist eine ausreichende zelluläre Sättigung über den Darm oft vollkommen unmöglich.
                </p>
                <p>
                  Die <strong>Infusionstherapie</strong> umgeht diesen biologischen Flaschenhals vollständig. Da die Nährstofflösung direkt in den Blutkreislauf geleitet wird, steht sie dem Gewebe und den Zellen sofort zu <strong>100% unverändert zur Verfügung</strong>. Dies ermöglicht therapeutisch wirksame Blutkonzentrationen, die oral niemals erreicht werden können.
                </p>
              </div>

              <div className="bg-muted/30 p-8 rounded-[2.5rem] border border-border/50 text-left space-y-3">
                <h4 className="font-bold text-primary">Die Vorteile auf einen Blick:</h4>
                <ul className="space-y-2 list-none p-0 text-sm font-medium text-muted-foreground">
                  <li className="flex items-center gap-2 text-left"><div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" /> Keine Magen-Darm-spezifischen Nebenwirkungen (z.B. Durchfall bei hochdosiertem Vitamin C).</li>
                  <li className="flex items-center gap-2 text-left"><div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" /> Extrem schnelle Wirkung – ideal in Akutsituationen oder bei Erschöpfung.</li>
                  <li className="flex items-center gap-2 text-left"><div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" /> Punktgenaue Anpassung an deine Vollblut-Laborwerte.</li>
                </ul>
              </div>
            </div>

            {/* Stunning Bioavailability Graph */}
            <div className="bg-primary text-white p-10 lg:p-12 rounded-[4rem] shadow-2xl relative overflow-hidden flex flex-col justify-between h-full border border-white/10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/15 rounded-bl-[200px] -z-0" />
              <div className="relative z-10 mb-8 text-left">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#fde4c8] bg-white/10 px-3 py-1 rounded-full">Pharmakokinetischer Vergleich</span>
                <h3 className="text-2xl font-serif font-bold text-white mt-4">Blutkonzentration über Zeit</h3>
                <p className="text-sm opacity-80 mt-2 font-medium">Die absolute Überlegenheit der intravenösen Flutung visualisiert.</p>
              </div>

              {/* Bioavailability Curve SVG Diagram */}
              <div className="relative z-10 w-full aspect-[4/3] bg-white/5 border border-white/10 rounded-3xl p-6 mb-8 flex items-center justify-center">
                <svg viewBox="0 0 400 240" className="w-full h-full overflow-visible">
                  {/* Grid Lines */}
                  <line x1="40" y1="20" x2="40" y2="200" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                  <line x1="40" y1="200" x2="380" y2="200" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                  <line x1="40" y1="110" x2="380" y2="110" stroke="rgba(255,255,255,0.05)" strokeDasharray="4" strokeWidth="1" />
                  <line x1="40" y1="20" x2="380" y2="20" stroke="rgba(255,255,255,0.05)" strokeDasharray="4" strokeWidth="1" />

                  {/* Labels */}
                  <text x="35" y="205" fill="rgba(255,255,255,0.6)" fontSize="10" textAnchor="end">0%</text>
                  <text x="35" y="114" fill="rgba(255,255,255,0.6)" fontSize="10" textAnchor="end">50%</text>
                  <text x="35" y="24" fill="rgba(255,255,255,0.6)" fontSize="10" textAnchor="end">100%</text>

                  <text x="210" y="225" fill="rgba(255,255,255,0.6)" fontSize="10" textAnchor="middle">Zeitverlauf (Stunden)</text>
                  <text x="20" y="110" fill="rgba(255,255,255,0.6)" fontSize="10" textAnchor="middle" transform="rotate(-90 20 110)">Wirkstoffspiegel</text>

                  {/* Oral Curve Path */}
                  <path 
                    d="M 40 200 Q 120 160 180 170 T 380 195" 
                    fill="none" 
                    stroke="rgba(255,255,255,0.4)" 
                    strokeWidth="3" 
                    strokeDasharray="2"
                  />
                  {/* Oral Point */}
                  <circle cx="180" cy="170" r="4" fill="white" />
                  <text x="185" y="160" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="bold">Oral (max. 15-20%)</text>

                  {/* Intravenous Curve Path */}
                  <path 
                    d="M 40 20 Q 80 25 150 70 T 380 160" 
                    fill="none" 
                    stroke="#f07d00" 
                    strokeWidth="4" 
                    className="drop-shadow-[0_0_8px_rgba(240,125,0,0.5)]"
                  />
                  {/* IV Point */}
                  <circle cx="40" cy="20" r="5" fill="#f07d00" />
                  <text x="50" y="35" fill="#fde4c8" fontSize="11" fontWeight="bold">Intravenös (100% Start)</text>
                </svg>
              </div>

              <div className="relative z-10 bg-white/5 border border-white/10 p-6 rounded-2xl">
                <p className="text-sm opacity-90 leading-relaxed italic text-left">
                  „Über den Darm verpufft der Großteil hocheffektiver Nährstoffe. Erst die intravenöse Infusion flutet das biologische System schlagartig und weckt die Selbstheilungskräfte der Zelle.“
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Indications / Krankheitsbilder */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-accent font-bold tracking-widest uppercase text-sm">Therapeutische Bandbreite</span>
            <h2 className="text-3xl lg:text-5xl font-serif text-primary mt-4 mb-6 leading-tight text-center">Gezielter Einsatz & Indikationen</h2>
            <p className="text-muted-foreground font-medium max-w-2xl mx-auto text-center leading-relaxed">
              In unserer Praxis füllen wir Depots nicht nach dem Zufallsprinzip auf. Jedes Infusionsprotokoll wird auf dein spezifisches Beschwerdebild und deine molekulare Stoffwechsellage abgestimmt.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24 text-left">
            {[
              {
                title: "Energie & Nervensystem",
                items: [
                  "Chronisches Fatigue-Syndrom (CFS)",
                  "Burnout & Erschöpfung",
                  "Mitochondriopathie (Zellschwäche)",
                  "Depressive Verstimmungen & Stress",
                  "Konzentrationsstörungen & Brain Fog"
                ],
                icon: <Zap className="w-6 h-6 text-accent" />
              },
              {
                title: "Abwehr & Immunmodulation",
                items: [
                  "Chronische Infektanfälligkeit",
                  "Reaktivierung von Viren & Bakterien (Epstein-Barr, Herpes, Borrelien...)",
                  "Allergien, Heuschnupfen & Asthma",
                  "Chronisch-stille Entzündungen",
                  "Postoperative Wundheilung"
                ],
                icon: <ShieldCheck className="w-6 h-6 text-accent" />
              },
              {
                title: "Stoffwechsel & Organe",
                items: [
                  "Leaky Gut & Darmentzündungen",
                  "Metabolisches Syndrom",
                  "Unterstützender Diabetes-Support",
                  "Hormonelle Dysbalancen",
                  "Unerfüllter Kinderwunsch"
                ],
                icon: <ActivitySquare className="w-6 h-6 text-accent" />
              },
              {
                title: "Detox & Zellschutz",
                items: [
                  "Schwermetallbelastungen",
                  "Pestizid- & Umwelttoxin-Belastung",
                  "Extremer oxidativer Zellstress",
                  "Unterstützung der Leberentgiftung",
                  "Anti-Aging & Drip Spa"
                ],
                icon: <FlaskConical className="w-6 h-6 text-accent" />
              }
            ].map((box, i) => (
              <div key={i} className="bg-white p-8 rounded-[3.5rem] border border-border shadow-sm hover:border-accent hover:shadow-xl transition-all duration-300 flex flex-col group text-left">
                <div className="bg-muted/50 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  {box.icon}
                </div>
                <h4 className="text-xl font-serif text-primary font-bold mb-6 text-left">{box.title}</h4>
                <ul className="space-y-3 mt-auto list-none p-0 text-left">
                  {box.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-xs text-muted-foreground leading-relaxed font-semibold text-left">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Active Compounds */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 text-left">
              <h3 className="text-3xl font-serif text-primary font-bold text-left leading-tight">Wirkstoffe der Infusionslösungen</h3>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium text-left">
                Je nach individuellem Laborbefund und Therapieziel kombinieren wir bewährte und hochspezifische Substanzen.
              </p>
              <div className="space-y-4 pt-4">
                {[
                  { title: "Vitamin-Hochdosis", desc: "Unter anderem Pascorbin® (Hochdosis Vitamin C für das Immunsystem) sowie der gesamte Vitamin-B-Komplex (B1, B2, B3, B5, B6, Folsäure, hochreines B12) als Katalysatoren der Energiegewinnung." },
                  { title: "Gezielte Aminosäuren-Protokolle", desc: "Cystein, Arginin, Lysin, Glutamin, Glycin und Taurin – als direkte enzymatische Bausteine für Muskeln, Leber, Hormone und Gehirn-Neurotransmitter." },
                  { title: "Antioxidantien-Turbo", desc: "Hochreines Glutathion (das stärkste körpereigene Antioxidans) und Alpha-Liponsäure (ALA) zur Mitochondrienregeneration und Schwermetallentgiftung." },
                  { title: "Mineralstoff-Sättigung", desc: "Magnesium, Kalium, Selen und Calcium – essentielle Elektrolyte zur Regulation des Zellmilieus und des vegetativen Nervensystems." },
                  { title: "Homöopathische Lösungen & Organpräparate", desc: "Als eigenständige parenterale Therapie und zur Wirksamkeitssteigerung der orthomolekularen Therapie – individuell abgestimmt auf deine Konstitution." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start text-left">
                    <CheckCircle2 className="w-6 h-6 text-accent mt-1 shrink-0" />
                    <div>
                      <h5 className="font-bold text-primary text-lg text-left">{item.title}</h5>
                      <p className="text-sm text-muted-foreground leading-relaxed font-medium text-left">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary text-white p-12 lg:p-20 rounded-[5rem] shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-accent/20 -mr-64 -mt-64 rounded-full blur-[100px] opacity-20"></div>
              <FlaskConical className="w-16 h-16 text-accent mb-10 relative z-10 animate-bounce" />
              <h3 className="text-3xl font-serif font-bold mb-8 text-white relative z-10 leading-tight">Synergie: <br />Labor & Therapie</h3>
              <p className="text-xl opacity-90 leading-relaxed mb-10 text-white relative z-10 font-medium italic">
                „Wir messen erst, dann füllen wir auf. Nur so können wir sicherstellen, dass dein Körper genau die Impulse erhält, die er für die Selbstheilung benötigt. Infusionen sind der Turbo, das IHHT-Zelltraining der Motor.“
              </p>
              <div className="flex items-center gap-5 bg-white/10 p-8 rounded-3xl border border-white/20 relative z-10 backdrop-blur-md">
                <Zap className="text-accent shrink-0 w-8 h-8" />
                <p className="text-lg font-bold leading-tight">Direkte Zell-Sättigung für spürbare Resultate.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course of Treatment */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl lg:text-5xl font-serif text-primary mb-8 leading-tight">Der Behandlungsverlauf</h2>
          <div className="prose prose-lg mx-auto text-muted-foreground leading-relaxed max-w-3xl space-y-6">
            <p>
              Die genaue Anzahl und Zusammensetzung der Infusionen richtet sich ganz nach deinen Beschwerden und Laborwerten. Üblicherweise umfasst ein Therapiezyklus <strong>5 bis 15 Sitzungen</strong>. 
            </p>
            <p>
              Während der Infusion kannst du in entspannter Atmosphäre im Liegen oder Sitzen ausruhen. Um den Behandlungseffekt maximal zu potenzieren, kombinieren wir die Infusionstherapie in unserer Praxis sehr häufig mit einer systemischen <strong>Hämolaser-Behandlung (rotes Licht)</strong>, welche direkt die Zellatmung der vorbeifließenden Erythrozyten triggert.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <img 
            src="/assets/image (9).jpg" 
            alt="Infusionstherapie Behandlung" 
            className="w-full max-w-4xl mx-auto rounded-[2.5rem] shadow-lg border border-border object-cover h-64 md:h-80"
          />
        </div>
      </section>

      <PreisTransparenz 
        priceItemId="1e" 
        hinweis="Zzgl. Medikamenten- und Materialkosten je nach individueller Labor-Rezeptur."
      />
    </div>
  );
}
