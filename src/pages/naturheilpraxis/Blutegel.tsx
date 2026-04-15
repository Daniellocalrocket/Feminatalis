import React from "react";
import SEO from "@/components/SEO";
import { ROUTE_PATHS } from "@/lib/index";
import { Link } from "react-router-dom";
import { Activity, CheckCircle2, ArrowRight, Droplets, ShieldAlert, Timer, Plus, Workflow } from "lucide-react";

export default function Blutegel() {
  const wirkstoffe = [
    { name: "Hirudin", effect: "Hemmt die Blutgerinnung & fördert die Mikrodurchblutung drastisch." },
    { name: "Calin", effect: "Bewirkt die wichtige langanhaltende Reinigung der Wunde durch einen sanften Nachblutungs-Effekt." },
    { name: "Hyaluronidase", effect: "Macht enges Gewebe durchlässig und bereitet den Weg für die heilenden Begleitstoffe." },
    { name: "Eglin & Bdellin", effect: "Wirken stark und punktgenau entzündungshemmend sowie intensiv schmerzlindernd." }
  ];

  const indikationen = [
    "Chronische Arthrose (v.a. Knie- & Daumensattelgelenk)",
    "Schwere Venenentzündungen & Krampfadern",
    "Hartnäckige Sehnen- & Schleimbeutelentzündungen (z.B. Tennisarm)",
    "Akuter Hörsturz & Tinnitus",
    "Lokale tiefe Muskelverspannungen & Myogelosen",
    "Chronische Wirbelsäulen-Syndrome & Hexenschuss"
  ];

  return (
    <div className="bg-background min-h-screen font-sans">
      <SEO 
        title="Blutegeltherapie & Naturheilverfahren | Naturheilpraxis feminatalis" 
        description="Die sanfte Kraft der Blutegel. Nutzen Sie die einmalige biochemische Wirkung des Egelspeichels bei schmerzhaften Entzündungen und Gelenkbeschwerden." 
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-muted/20 text-center">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6 uppercase tracking-wider">
            Traditionelle Ausleitungsverfahren
          </div>
          <h1 className="text-4xl md:text-7xl font-serif text-primary mb-8 leading-[1.1]">
            Blutegeltherapie: <br />
            <span className="text-accent italic font-light">Das lebende Labor</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed italic text-center font-medium">
            Schon seit Jahrhunderten enorm geschätzt, wird die Blutegeltherapie heute als absolut moderne Behandlung mit breitem Wirksamkeitsspektrum in der Schmerztherapie eingesetzt. Der hochkomplexe Speichel (Saliva) der Egel enthält einen einzigartigen und bis heute nicht künstlich nachbaubaren Cocktail aus hochpotenten Wirkstoffen und Enzymen.
          </p>
        </div>
      </section>

      {/* Saliva Effects */}
      <section className="py-20 bg-background text-left">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start text-left">
             <div className="space-y-10 text-left">
                <div className="text-left">
                  <h2 className="text-3xl lg:text-5xl font-serif text-primary mb-6 leading-tight">Kleine Helfer, <br />massive Wirkung</h2>
                  <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                    Die Wirkung der Blutegeltherapie geht weit über einen simplen, lokalen Aderlass hinaus. Es ist eine biochemische Intervention.
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-6 text-left">
                  {wirkstoffe.map((w, i) => (
                    <div key={i} className="bg-white p-6 rounded-3xl border border-border shadow-sm group hover:border-accent transition-all text-left">
                      <div className="bg-muted/30 w-10 h-10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                        <Plus className="w-5 h-5 text-accent" />
                      </div>
                      <h4 className="font-bold text-primary mb-2 text-lg">{w.name}</h4>
                      <p className="text-sm font-medium text-muted-foreground leading-relaxed">{w.effect}</p>
                    </div>
                  ))}
                </div>
             </div>
             
             <div className="bg-primary text-white p-12 lg:p-14 rounded-[4rem] shadow-2xl relative overflow-hidden text-left h-full">
               <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 -mr-32 -mt-32 rounded-full blur-3xl"></div>
               <div className="relative z-10 text-left">
                 <Droplets className="w-16 h-16 text-accent mb-8" />
                 <h3 className="text-3xl font-serif font-bold mb-8 text-white">Bewährte <br />Anwendungsgebiete</h3>
                 <ul className="space-y-4 text-left">
                   {indikationen.map((ind, i) => (
                     <li key={i} className="flex gap-4 items-start bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                       <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                       <span className="font-medium text-white leading-relaxed">{ind}</span>
                     </li>
                   ))}
                 </ul>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-white border border-border rounded-[4rem] p-12 lg:p-20 shadow-sm relative overflow-hidden max-w-5xl mx-auto">
            <Workflow className="absolute text-muted/30 w-96 h-96 -right-20 -top-20 pointer-events-none" />
            <h2 className="text-3xl lg:text-5xl font-serif text-primary mb-16 text-center">Wissenswertes <br />zur Behandlung</h2>
            <div className="grid md:grid-cols-3 gap-12 relative z-10 text-left">
              <div className="space-y-6 text-left">
                <div className="bg-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center text-accent font-bold text-2xl font-serif border border-accent/20">1</div>
                <div className="text-left">
                  <h4 className="font-bold text-primary text-xl mb-3">Vorbereitung</h4>
                  <p className="text-sm font-medium text-muted-foreground leading-relaxed">Bitte verzichte unbedingt 2-3 Tage vorab konsequent auf Duftstoffe, Seifen und Duschgels an der betreffenden Stelle. Egel sind extrem geruchssensibel und beissen sonst nicht.</p>
                </div>
              </div>
              <div className="space-y-6 text-left">
                <div className="bg-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center text-accent font-bold text-2xl font-serif border border-accent/20">2</div>
                <div className="text-left">
                  <h4 className="font-bold text-primary text-xl mb-3">Therapie-Ablauf</h4>
                  <p className="text-sm font-medium text-muted-foreground leading-relaxed">Der Egel saugt ca. 30–60 Min. Der feine Biss fühlt sich zunächst wie ein kurzer Brennnessel- oder Nadelstich an, kurz darauf wirkt der Speichel bereits lokal stark schmerzstillend.</p>
                </div>
              </div>
              <div className="space-y-6 text-left">
                <div className="bg-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center text-accent font-bold text-2xl font-serif border border-accent/20">3</div>
                <div className="text-left">
                  <h4 className="font-bold text-primary text-xl mb-3">Ausgiebige Nachsorge</h4>
                  <p className="text-sm font-medium text-muted-foreground leading-relaxed">Die Wunde blutet zwingend ca. 12–24 Std. nach. Dieser Effekt ist therapeutisch höchst gewollt (lokaler Aderlass) und fördert die finale Reinigung des Gewebes. Ein dicker Verband schützt die Stelle.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Constraints & Costs */}
      <section className="py-20 text-left">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 items-stretch text-left">
            <div className="bg-white p-10 rounded-[3rem] border border-border shadow-sm text-left">
              <ShieldAlert className="w-12 h-12 text-red-500/80 mb-8" />
              <h4 className="text-2xl font-serif font-bold text-primary mb-4">Klare Kontraindikationen</h4>
              <p className="text-sm font-medium text-muted-foreground leading-relaxed">
                Bei der ständigen Einnahme von blutverdünnenden Medikamenten (Blutgrinnungshemmern wie z.B. Marcumar, nicht aber leichtes ASP), bei schwerer Blutarmut (Anämie), ausgeprägten Wundheilungsstörungen, starker Immunsuppression oder in der Schwangerschaft dürfen wir diese Behandlung zu deiner Sicherheit <strong>nicht</strong> durchführen.
              </p>
            </div>
            
            <div className="bg-muted/30 p-10 rounded-[3rem] border border-border text-left">
               <Timer className="w-12 h-12 text-primary mb-8" />
               <h4 className="text-2xl font-serif font-bold text-primary mb-4">Deine Investition</h4>
               <p className="text-sm font-medium text-muted-foreground leading-relaxed mb-6">
                 Die Abrechnung dieser sehr zeitintensiven Therapie erfolgt fair nach tatsächlichem Zeitaufwand (entsprechend dem Heilpraktiker-Gebührenverzeichnis). <br/><br/>
                 Hinzu kommen ca. 15-20 € apotheken-übliche Kosten pro medizinischem Blutegel (inkl. Aufbewahrung und rechtlich vorgeschriebener Dokumentation).
               </p>
               <div className="pt-4 border-t border-border/50">
                 <Link to={ROUTE_PATHS.PREISLISTE} className="text-primary font-bold flex items-center gap-2 hover:text-accent transition-colors w-fit">Alle Preise in der Übersicht <ArrowRight size={18}/></Link>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background border-t border-border text-center">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Activity className="w-16 h-16 text-primary mx-auto mb-8 opacity-20" />
          <h2 className="text-3xl md:text-5xl font-serif text-primary mb-12 leading-tight font-bold text-center">Möchtest du die heilende <br />Kraft der Natur direkt nutzen?</h2>
          <div className="flex justify-center">
            <Link to={ROUTE_PATHS.CONTACT} className="inline-flex bg-primary text-white px-12 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-2xl flex items-center justify-center gap-3 shadow-primary/20 border-none">
              Fall anfragen & Termin vereinbaren <ArrowRight className="text-white w-6 h-6 text-center" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
