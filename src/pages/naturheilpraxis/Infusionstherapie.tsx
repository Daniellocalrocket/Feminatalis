import React from "react";
import SEO from "@/components/SEO";
import { ROUTE_PATHS } from "@/lib/index";
import { Link } from "react-router-dom";
import { Droplet, ActivitySquare, ShieldCheck, ArrowRight, CheckCircle2, FlaskConical, Zap, Info } from "lucide-react";

export default function Infusionstherapie() {
  const wirkstoffe = [
    "Vitamine (Hochdosis Vitamin C, B-Komplex, B12...)",
    "Aminosäuren (Glutamin, Arginin, Taurin, Lysin...)",
    "Mineralien (Magnesium, Selen, Calcium, Kalium...)",
    "Antioxidantien (Glutathion, Alpha-Liponsäure, Curcumin)",
    "Homöopathische Komplexlösungen & Organpräparate"
  ];

  const anwendungsbereiche = [
    { title: "Abwehr & Immunsystem", desc: "Bei akuter Abwehrschwäche, chronischen Infekten oder zur starken Prävention." },
    { title: "Energie & Psyche", desc: "Hilfe bei Erschöpfungssyndromen, Burnout, Stress und Fatigue (z.B. post-viral)." },
    { title: "Frauengesundheit", desc: "Support bei hormonellen Störungen, Zyklusproblemen und in der Kinderwunschzeit." },
    { title: "Zellulärer Stoffwechsel", desc: "Begleitung bei Diabetes, Metabolischem Syndrom und chronischen Stoffwechselstörungen." },
    { title: "Entgiftung", desc: "Spezifische Ausleitung von Toxinen, Schwermetallbelastung und oxidativer Zellstress." },
    { title: "Darmgesundheit", desc: "Unterstützung bei Darmentzündungen, Resorptionsstörungen und Leaky-Gut-Syndrom." }
  ];

  return (
    <div className="bg-background min-h-screen font-sans">
      <SEO 
        title="Infusionstherapie & Nährstoff-Drips | Naturheilpraxis feminatalis" 
        description="Maximale Bioverfügbarkeit durch intravenöse Nährstoff-Flutung. Behebe Vitalstoffmängel sofort und unterstütze deine Heilungsprozesse." 
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-muted/20 text-center">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6 uppercase tracking-wider">
            100% Bioverfügbarkeit
          </div>
          <h1 className="text-4xl md:text-7xl font-serif text-primary mb-8 leading-[1.1]">
            Infusionstherapie <br />
            <span className="text-accent italic font-light">Der direkte Weg</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto italic text-center">
            "Nährstoffe exakt dort ankommen lassen, wo sie gebraucht werden – direkt in deiner Zelle."
          </p>
        </div>
      </section>

      {/* Bioavailability Logic */}
      <section className="py-20 text-left">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-24 text-left">
            <div className="space-y-6">
              <h2 className="text-3xl font-serif text-primary leading-tight text-left">Tabletten oder Infusion?</h2>
              <div className="prose prose-lg text-muted-foreground text-left text-left">
                <p>
                  Bioverfügbarkeit beschreibt, welcher Anteil eines Wirkstoffs tatsächlich im Blutkreislauf ankommt. Werden Kapseln oder Tabletten geschluckt, bremsen Faktoren wie ein ungünstiger Magen-pH-Wert, ein gestörtes Mikrobiom (Leaky Gut) oder der sogenannte "First-Pass-Effekt" der Leber die Aufnahme drastisch.
                </p>
                <p>
                  Bei einer Infusion umgehen wir das Verdauungssystem komplett. Die Mikronährstoffe stehen dem Gewebe und den Organen augenblicklich in <strong>therapeutisch hochrelevanten Dosen</strong> zur Verfügung.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mt-8 pt-4 border-t border-border text-left">
                {[
                  "100% Sofort-Verfügbarkeit im systemischen Kreislauf",
                  "Umgehung von Aufnahmestörungen im kranken Darm",
                  "Typische Magen-Darm-Nebenwirkungen entfallen komplett",
                  "Möglichkeit der Hochdosis-Gabe in Akutphasen"
                ].map((text, i) => (
                  <div key={i} className="flex gap-4 items-start bg-white p-6 rounded-2xl border border-border shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm font-medium leading-relaxed font-semibold text-primary">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-primary text-white p-12 lg:p-14 rounded-[4rem] shadow-2xl relative overflow-hidden text-left">
               <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 -mr-32 -mt-32 rounded-full blur-3xl"></div>
               <FlaskConical className="w-12 h-12 text-accent mb-8 relative z-10" />
               <h3 className="text-2xl font-serif font-bold mb-6 text-white text-left relative z-10">Kern-Wirkstoffe</h3>
               <p className="text-sm opacity-80 leading-relaxed mb-8 text-left text-white relative z-10">
                 Wir stellen jede Infusion individuell zusammen, idealerweise basierend auf einer vorangegangenen Laboranalyse deines Blutes.
               </p>
               <ul className="space-y-4 relative z-10">
                 {wirkstoffe.map((w, i) => (
                   <li key={i} className="flex gap-4 items-center opacity-90 border-b border-white/5 pb-3">
                     <span className="text-accent font-bold"><Droplet size={16} /></span>
                     <span className="text-sm lg:text-base font-medium">{w}</span>
                   </li>
                 ))}
               </ul>
            </div>
          </div>

          {/* Application Grid */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif text-primary mb-4 text-center">Wann ist eine Infusion sinnvoll?</h2>
            <p className="text-muted-foreground font-medium text-center">Der gezielte Einsatz bei komplexen Krankheitsbildern und zur schnellen Regeneration.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24 text-left">
            {anwendungsbereiche.map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-border shadow-sm flex flex-col group hover:border-accent transition-all text-left">
                <div className="bg-muted/30 w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                  <ActivitySquare className="text-accent w-6 h-6" />
                </div>
                <h4 className="font-bold text-primary mb-3 text-left font-serif text-lg">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed text-left">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Therapy Details */}
          <div className="bg-white p-12 lg:p-16 rounded-[4rem] border border-border shadow-2xl relative overflow-hidden text-left mb-20 max-w-5xl mx-auto">
             <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                  <h3 className="text-3xl font-serif text-primary mb-6 text-left">Der Behandlungsverlauf</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed font-medium text-left">
                    Eine Infusionsserie umfasst üblicherweise <strong>5 bis 15 Behandlungen</strong>, abhängig von deinem Laborbefund und deinem Beschwerdebild. Während der Infusion (Dauer ca. 30-60 Minuten) ruhst du entspannt in unserer Praxis.
                  </p>
                  <div className="bg-accent/5 p-6 rounded-2xl border border-accent/20 flex gap-4 items-start">
                    <Info className="text-accent shrink-0 mt-1" />
                    <p className="text-sm italic text-primary leading-relaxed font-medium text-left">
                      <strong>Synergie-Tipp:</strong> Besonders effektiv ist die Kombination mit der <Link to={ROUTE_PATHS.LASERTHERAPIE} className="underline text-accent">Hämolaser-Therapie</Link>, um die Aufnahme der zirkulierenden Nährstoffe in die Zellen zusätzlich zu potenzieren.
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-muted/40 p-8 rounded-3xl border border-border text-left">
                    <h4 className="font-bold text-primary mb-3 flex items-center gap-3 font-serif">
                       <ShieldCheck className="text-accent w-5 h-5" /> Kostentransparenz
                    </h4>
                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed font-medium text-left">
                      Die ärztliche bzw. heilpraktische Leistung wird nach Zeitaufwand (100 €/Std.) abgerechnet. Hinzu kommen die Materialkosten für die pharmazentral hergestellten Infusionslösungen.
                    </p>
                    <Link to={ROUTE_PATHS.PREISLISTE} className="text-accent font-bold flex items-center gap-2 hover:gap-3 transition-all text-sm">
                      Zur Preisliste <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-muted/20 border-t border-border text-center">
        <div className="container mx-auto px-4 max-w-4xl text-center">
           <Zap className="w-16 h-16 text-accent mx-auto mb-8 animate-pulse text-center" />
           <h2 className="text-3xl md:text-5xl font-serif text-primary mb-10 leading-tight font-bold text-center">
             Möchtest du Energie & Vitalität <br />sofort spürbar machen?
           </h2>
           <Link to={ROUTE_PATHS.CONTACT} className="inline-flex bg-primary text-white px-12 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-2xl flex items-center gap-3 border-none mx-auto">
             Termin anfragen <ArrowRight className="w-6 h-6 text-white text-center" />
           </Link>
        </div>
      </section>
    </div>
  );
}
