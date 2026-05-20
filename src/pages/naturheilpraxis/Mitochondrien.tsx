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
  CheckCircle2,
  FileText,
  Flame,
  ShieldCheck,
  Play,
  HeartPulse,
  Brain,
  Layers
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
    <div className="bg-[#fff9f2] min-h-screen font-sans">
      <SEO 
        title="Mitochondrien-Therapie & Zellmedizin Bad Schönborn | feminatalis" 
        description="Chronische Erschöpfung, Burnout & CFS an der Wurzel packen. Mitochondriale Medizin & zellulärer Nährstoffaufbau bei Angela Deschner. Jetzt informieren!" 
      />

      <SplitScreenHero
        badge="Therapeutischer Schwerpunkt von Angela Deschner"
        title={<>Mitochondrien-Therapie: <br /><span className="text-accent italic font-light">Die Urkraft deiner Zellen reaktivieren</span></>}
        subtitle="Mitochondriale Medizin ist der Schlüssel zur nachhaltigen Genesung. Als mein absoluter Herzens- und Praxisschwerpunkt helfe ich dir, die Energieproduktion deines Körpers auf zellulärer Ebene tiefgehend zu analysieren, zu reinigen und systematisch wieder aufzubauen."
        imageSrc="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=2070&auto=format&fit=crop"
        imageAlt="Mikroskopische Ansicht von lebenden Zellstrukturen und Mitochondrien"
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
            Zur Zell-Biologie
          </button>
        </div>
      </SplitScreenHero>

      {/* Bio-Facts Section: Die faszinierende Welt der Zellkraftwerke */}
      <section id="bio-fakten" className="py-24 bg-white overflow-hidden scroll-mt-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-20">
            <span className="bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 inline-block">Wissenschaftliche Grundlagen</span>
            <h2 className="text-3xl md:text-5xl font-serif text-primary mb-8 leading-tight">
              Kraftwerke des Lebens: <br /><span className="text-accent italic">Die Biologie deiner Mitochondrien</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Unser Körper ist ein biologisches Meisterwerk: Er besteht aus rund <strong>70 bis 80 Billionen Körperzellen</strong>, in denen jeweils ca. 100.000 perfekt koordinierte Stoffwechselreaktionen pro Sekunde ablaufen. Gesteuert und angetrieben wird dieses gewaltige System von winzigen, faszinierenden Zellorganellen – den <strong>Mitochondrien</strong>. 
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl font-serif text-primary">Lebendige Symbionten mit eigener DNA</h3>
              <p className="text-muted-foreground leading-relaxed">
                Mitochondrien sind evolutionär betrachtet lebende Zellorganellen, die sich vor Jahrmillionen aus aeroben Bakterien heraus entwickelt haben (die sogenannte Endosymbiontentheorie). Sie besitzen bis heute ihre ganz eigene, mütterlicherseits vererbte DNA (mtDNA) und teilen sich unabhängig von unserer Zelle.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                In nahezu jeder menschlichen Zelle leben <strong>1.500 bis 6.500 Mitochondrien</strong> (ausgenommen rote Blutkörperchen). Den absoluten Rekord hält übrigens die <strong>weibliche Eizelle mit bis zu 400.000 Mitochondrien</strong> – ein deutliches Zeichen dafür, wie essenziell zelluläre Energie für die Entstehung von neuem Leben ist.
              </p>
              <div className="bg-[#fff9f2] p-6 rounded-3xl border border-border flex items-start gap-4">
                <Info className="text-accent shrink-0 mt-1" size={20} />
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <strong>Der zelluläre Sparmodus (Gärung):</strong> Bei mitochondrialen Störungen wird die Energie (ATP) nicht mehr mit Hilfe von Sauerstoff (aerobe Endoxidation) synthetisiert. Die Zelle schaltet gezwungenermaßen auf einen ineffizienten <strong>Vergärungsprozess von Blutzucker außerhalb der Mitochondrien (anaerobe Gärung)</strong> um. Dadurch sinkt die Zellleistung dramatisch, Organe geraten in Energiemangel und ein unerwünschter Zellteilungszyklus (Gärungsstoffwechsel nach Warburg) kann aktiviert werden.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: <Zap className="text-accent" size={24} />,
                  title: "70-80 Billionen Zellen",
                  text: "Jede Sekunde laufen in jeder Zelle rund 100.000 koordinierte biochemische Reaktionen ab."
                },
                {
                  icon: <Dna className="text-primary" size={24} />,
                  title: "Eigene bakterielle DNA",
                  text: "Hochgradig empfindlich gegenüber Toxinen, da sie keinen schützenden Histon-Mantel besitzt."
                },
                {
                  icon: <Sparkles className="text-orange-500" size={24} />,
                  title: "Lichtquanten-Organe",
                  text: "Mitochondrien absorbieren und senden Photonen. Unsere Zellkommunikation läuft mit Lichtgeschwindigkeit."
                },
                {
                  icon: <Activity className="text-emerald-500" size={24} />,
                  title: "Bis zu 400.000 / Eizelle",
                  text: "Die Eizelle benötigt astronomische Mengen an Energie zur Steuerung der frühen Zellteilung."
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-[#fff9f2] p-8 rounded-[2.5rem] border border-border shadow-sm flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-border">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-primary mb-2 leading-tight">{item.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Die 3 Goldenen Regeln der mitochondrialen Gesundheit */}
          <div className="bg-[#fde4c8]/20 rounded-[3rem] p-8 lg:p-12 border border-[#fde4c8]/50">
            <h3 className="text-2xl md:text-3xl font-serif text-primary text-center mb-10">Die drei goldenen Säulen gesunder Zellen</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Mikronährstoff-Fülle",
                  desc: "Mitochondrien benötigen für ihre Atmungskette rund 45 essenzielle Vitalstoffe (Coenzym Q10, Vitamine, Spurenelemente), um ATP reibungslos zu synthetisieren."
                },
                {
                  step: "02",
                  title: "Toxin-Ausleitung",
                  desc: "Blockierende Umweltgifte, Schwermetalle und zelluläre Ablagerungen müssen systematisch ausgeleitet werden, damit die Transportkomplexe wieder frei arbeiten können."
                },
                {
                  step: "03",
                  title: "Zellulärer Schutz",
                  desc: "Schädigende Faktoren (Elektrosmog, chronischer Stress, Entzündungen) müssen minimiert werden, um die empfindliche Zell-DNA dauerhaft zu schützen."
                }
              ].map((s, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-border relative overflow-hidden">
                  <div className="absolute -right-4 -bottom-6 text-7xl font-serif font-bold text-[#fde4c8]/30 select-none">{s.step}</div>
                  <h4 className="text-lg font-bold text-primary mb-3 relative z-10">{s.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed relative z-10">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stressors Section: Was schadet den Mitochondrien? */}
      <section className="py-24 bg-slate-50 overflow-hidden relative border-t border-b border-border">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <span className="bg-red-100 text-red-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 inline-block uppercase tracking-wider">Gefahrenanalyse</span>
            <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6">Was schadet unseren Kraftwerken?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Mitochondrien besitzen keinen schützenden Eiweißmantel (Histone) um ihre DNA. Dadurch sind sie schädigenden Umwelteinflüssen und zellulärem Stress schutzlos ausgeliefert.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              {
                category: "Medikamente & Blockaden",
                items: ["Antibiotika & Chemotherapeutika", "Statine (blockieren die körpereigene Q10-Synthese)", "Säureblocker (Protonenpumpeninhibitoren)", "Schmerzmittel & Entzündungshemmer", "Betablocker & Antidiabetika"]
              },
              {
                category: "Umweltgifte & Toxine",
                items: ["Toxische Metalle (Blei, Quecksilber, Cadmium, Aluminium)", "Pestizide, Herbizide (z.B. Glyphosat) & Fungizide", "Holzschutzmittel & Tenside in Waschmitteln", "Genussmittel wie Alkohol und Nicotin"]
              },
              {
                category: "Biologische & Physische Belastungen",
                items: ["Chronische Viren (EBV, CMV), Bakterien & Parasiten", "Schwere Traumata der Halswirbelsäule (Kuklinski-Effekt)", "Extremer Leistungssport (ohne Nährstoff-Ausgleich)", "Kohlenhydratreiche Ernährung & Mangelernährung"]
              },
              {
                category: "Physikalische Felder",
                items: ["Elektrosmog (Mikrowellen, Induktionsherde)", "Mobilfunkstrahlung (WLAN, Handys, LTE, 5G)", "Geopathische Störungen (Wasseradern, Erdverwerfungen)", "Magnetische Wechselfelder & künstliche Strahlungen"]
              },
              {
                category: "Psychischer Stress",
                items: ["Chronischer Zeitdruck & emotionaler Stress", "Dauerhafte Aktivierung der Stressachse (Nebenniere)", "Lichtmangel (Mitochondrien benötigen Biophotonen)", "Schlafstörungen & blockierte nächtliche Regeneration"]
              }
            ].map((cat, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-border shadow-sm flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-bold text-primary mb-4 pb-2 border-b border-border flex items-center gap-2">
                    <ShieldAlert size={18} className="text-red-500 shrink-0" />
                    {cat.category}
                  </h4>
                  <ul className="space-y-3">
                    {cat.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                        <span className="text-red-400 mt-1 shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
            
            {/* CTA Box inside Grid */}
            <div className="bg-primary text-white p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden shadow-lg">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10 blur-xl" />
              <div>
                <h4 className="text-xl font-serif text-accent mb-4">Erkennst du dich wieder?</h4>
                <p className="text-sm text-primary-foreground/80 leading-relaxed">
                  Viele Patienten leiden unter einer schleichenden Zerstörung ihrer Mitochondrien, ohne es zu wissen. Der Körper schaltet in den Sparmodus, was zu chronischer Erschöpfung führt.
                </p>
              </div>
              <button 
                onClick={() => scrollTo("befund-section")} 
                className="mt-6 bg-accent hover:bg-accent/90 text-white py-3 px-6 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-md w-full"
              >
                Labordiagnostik ansehen <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Oxidativer vs. Nitrosativer Stress */}
          <div className="grid lg:grid-cols-2 gap-12 mt-16 items-stretch">
            <div className="bg-[#fff9f2] p-10 rounded-[3rem] border border-border flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-border text-orange-500">
                  <Flame size={24} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Oxidativer Stress: Das Rostproblem der Zelle</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  Als oxidativer Stress wird ein zelluläres Ungleichgewicht zwischen freien Radikalen (reaktiven Sauerstoffspezies, ROS) und körpereigenen Antioxidantien bezeichnet. Freie Radikale greifen Zellwände und Enzyme an – der Körper „rostet“ von innen.
                </p>
                <div className="bg-white p-5 rounded-2xl border border-border">
                  <h5 className="text-xs font-bold text-primary uppercase tracking-wider mb-3">Die wichtigsten zellulären Antioxidantien:</h5>
                  <div className="flex flex-wrap gap-2">
                    {["Coenzym Q10", "Glutathion", "Vitamin C", "Vitamin D3", "Vitamin E", "L-Carnitin", "Alpha-Liponsäure"].map((antiox, idx) => (
                      <span key={idx} className="bg-orange-50 text-accent text-xs font-semibold px-3 py-1 rounded-full border border-orange-100">
                        {antiox}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#fff9f2] p-10 rounded-[3rem] border border-border flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-border text-red-600">
                  <AlertTriangle size={24} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Nitrosativer Stress: Der Supergau für die DNA</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  Nitrosativer Stress entsteht durch eine Überproduktion von Stickstoffmonoxid (NO) und dessen Reaktion mit Superoxid zu <strong>Peroxynitrit</strong>. Dieses Superradikal besitzt ein verheerendes Zerstörungspotenzial: Es blockiert enzymatisch die Proteinkomplexe der Atmungskette und schädigt direkt die mitochondriale DNA.
                </p>
                <div className="bg-red-50/50 p-5 rounded-2xl border border-red-100 flex items-start gap-3">
                  <Info size={16} className="text-red-500 shrink-0 mt-0.5" />
                  <p className="text-xs text-red-800 leading-relaxed">
                    <strong>HWS-Instabilität als Auslöser:</strong> Nach Unfällen oder Schleudertraumata der Halswirbelsäule kann eine dauerhafte mechanische Reizung der HWS-Nerven zu chronischem nitrosativem Stress führen, was oft die biochemische Ursache für schwerstes CFS darstellt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lab Diagnostics Section: Visualisierung eines echten Befundes */}
      <section id="befund-section" className="py-24 bg-white scroll-mt-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <span className="bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 inline-block">Präzisionsmedizin im Speziallabor</span>
            <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6">Mitochondriale Fehlfunktion sichtbar machen</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Mitochondriale Schäden und zellulärer Stress sind kein vages Bauchgefühl – wir können sie mit modernster Spezial-Labordiagnostik anhand einer einfachen Blutprobe schwarz auf weiß belegen. Nur so können wir deine Therapie exakt auf deine biochemischen Bedürfnisse zuschneiden.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Visual Lab Report Card */}
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-[#fff9f2] p-4 lg:p-6 rounded-[3rem] border border-border shadow-lg relative overflow-hidden">
                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-sm flex items-center gap-1.5">
                  <Microscope size={12} />
                  Laborbefund: Mitochondriale Aktivität (BHI)
                </div>
                <img 
                  src="/mitochondrien-befund.jpg" 
                  alt="Echter Laborbefund eines Bio-Health-Index (BHI) und nitrosativen Stresses" 
                  className="w-full h-auto rounded-2xl shadow-sm border border-border object-cover mt-4 hover:scale-[1.01] transition-transform duration-300"
                />
                <div className="mt-4 flex flex-wrap gap-2 justify-center text-xs text-muted-foreground">
                  <span>* Echter Befund aus unserer Partner-Labordiagnostik (Biovis)</span>
                </div>
              </div>
            </div>

            {/* Scientific Explanation of the Biomarkers */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <h3 className="text-2xl font-serif text-primary">Diagnostische Biomarker im Fokus</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Der oben dargestellte Befund verdeutlicht eindrucksvoll die biochemischen Verschiebungen bei einer ausgeprägten mitochondrialen Dysfunktion:
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "Bio-Health-Index (BHI Plus) von 1,47",
                    desc: "Der BHI ist der globale Indikator für deine bioenergetische Zellgesundheit. Normalwerte liegen über 2,20. Ein Wert von 1,47 (Zone D, tiefblau) signalisiert eine hochgradig kritische Einschränkung der zellulären Regenerationsfähigkeit.",
                    crit: true
                  },
                  {
                    title: "Massiv erhöhtes Lactat (2570 µmol/l)",
                    desc: "Normalwerte liegen unter 1528. Ein so drastisch erhöhter Lactatwert im Blut beweist, dass die Zelle gezwungen ist, Energie durch unvollständige Zuckervergärung außerhalb der Mitochondrien zu gewinnen – der aerobe Stoffwechselweg ist blockiert.",
                    crit: true
                  },
                  {
                    title: "Lactat/Pyruvat-Quotient von 27,5",
                    desc: "Ein Wert weit über der Norm (< 12,9) ist der absolute biochemische Beleg für ein Sauerstoffdefizit auf Zellebene (Blockierung der Elektronentransportkette).",
                    crit: true
                  },
                  {
                    title: "Erhöhtes Protonenleck (2,03 pmol/min)",
                    desc: "Normal ist < 1,6. Dies zeigt, dass die innere Mitochondrienmembran beschädigt und 'undicht' ist. Die Protonen fließen ungenutzt zurück, wodurch wertvoller Sauerstoff ohne ATP-Erzeugung verpufft.",
                    crit: false
                  },
                  {
                    title: "Massiv reduzierte Reserveatmung (37,63)",
                    desc: "Sollte über 78 liegen. Die zelluläre Kapazität, unter Stress oder körperlicher Belastung zusätzliche Energie bereitzustellen, ist um mehr als die Hälfte eingebrochen. Betroffene klagen über sofortige Erschöpfung bei kleinster Anstrengung (Crash / PEM).",
                    crit: true
                  }
                ].map((marker, idx) => (
                  <div key={idx} className={`p-5 rounded-2xl border transition-all hover:shadow-sm ${marker.crit ? 'bg-red-50/40 border-red-100' : 'bg-slate-50 border-slate-200'}`}>
                    <div className="flex items-start gap-3">
                      {marker.crit ? (
                        <AlertTriangle className="text-red-500 shrink-0 mt-1" size={16} />
                      ) : (
                        <CheckCircle2 className="text-primary shrink-0 mt-1" size={16} />
                      )}
                      <div>
                        <h4 className="text-sm font-bold text-primary leading-tight mb-1">{marker.title}</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">{marker.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disease Spectrum Section */}
      <section className="py-24 bg-slate-50 border-t border-b border-border scroll-mt-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <span className="bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 inline-block">Mitochondriale Systemerkrankung</span>
            <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6">Mitochondrial bedingte Gesundheitsstörungen</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Da Mitochondrien in fast jeder Zelle unseres Körpers leben, zieht ein Energiemangel (ATP-Defizit) das gesamte System in Mitleidenschaft. Eine dauerhafte Funktionsstörung kann schwerwiegende klinische Krankheitsbilder begünstigen:
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              { 
                id: "exhaustion", 
                title: "Chronische Erschöpfung & Burnout (CFS)", 
                icon: <BatteryLow size={20} className="text-red-500" />,
                content: "Das Chronic Fatigue Syndrome (CFS) und Burnout-Zustände sind das Leitsymptom eines zellulären Energiemangels. Wenn die biologische ATP-Synthese blockiert ist, verliert der gesamte Organismus seine Vitalität, Regenerationsfähigkeit und mentale Belastbarkeit." 
              },
              { 
                id: "cardio", 
                title: "Herz-Kreislauf & Durchblutungsstörungen", 
                icon: <HeartPulse size={20} className="text-accent" />,
                content: "Der Herzmuskel besitzt mit ca. 40 % Gewichtsanteil die höchste Mitochondriendichte. Ein mitochondrialer Energiemangel führt direkt zu Kontraktionsschwäche, erhöhtem Blutdruck, Herzrhythmusstörungen (Antiarrhythmika schädigen oft Mitochondrien weiter), Schlaganfällen oder pAVK." 
              },
              { 
                id: "digestive", 
                title: "Erkrankungen der Verdauungsorgane", 
                icon: <Layers size={20} className="text-emerald-600" />,
                content: "Die Darmschleimhaut erneuert sich alle 3 bis 5 Tage und benötigt dafür enorme Mengen ATP. Energiemangel führt zu chronischen Darmentzündungen (Colitis ulcerosa, Morbus Crohn), Reizdarmsyndrom, Leaky-Gut-Syndrom (durchlässige Darmwand), Bauchspeicheldrüsenentzündungen (Pankreatitis) und Fettleber." 
              },
              { 
                id: "neuro", 
                title: "Neurologische & neurodegenerative Erkrankungen", 
                icon: <Brain size={20} className="text-primary" />,
                content: "Unser Gehirn verbraucht rund 20 % unserer gesamten Stoffwechselenergie. Mitochondriale Dysfunktionen begünstigen Erkrankungen der Nerven wie Depressionen, Multiple Sklerose (MS), ALS sowie Alterserkrankungen wie Demenz, Alzheimer und Parkinson." 
              },
              { 
                id: "immune", 
                title: "Immunsystem & Autoimmunerkrankungen", 
                icon: <ShieldCheck size={20} className="text-blue-500" />,
                content: "Abwehrzellen benötigen zur Abwehr von Viren, Bakterien und Pilzen blitzschnell astronomische Mengen ATP. Fehlt diese Energie, kommt es zu rezidivierenden Infekten, Allergien oder Fehlsteuerungen des Immunsystems, die in Autoimmunerkrankungen münden." 
              },
              { 
                id: "tumor", 
                title: "Tumorerkrankungen & Krebswachstum", 
                icon: <AlertTriangle size={20} className="text-purple-600" />,
                content: "Bereits 1924 wies Nobelpreisträger Otto Warburg nach, dass Krebszellen ihren Stoffwechsel von der sauerstoffabhängigen Atmung in den Mitochondrien auf eine sauerstoffunabhängige Vergärung von Zucker im Zytoplasma umstellen. Mitochondriale Gesundheit ist somit eine der wichtigsten Säulen der Krebsprävention und biologischen Krebstherapie." 
              }
            ].map((item) => (
              <AccordionItem key={item.id} value={item.id} className="border border-border bg-white rounded-[2rem] px-8 py-2 hover:bg-slate-50 transition-all data-[state=open]:bg-white data-[state=open]:shadow-md">
                <AccordionTrigger className="text-lg md:text-xl font-serif text-primary hover:no-underline flex items-center justify-between gap-4 py-4">
                  <div className="flex items-center gap-3 text-left">
                    <span className="p-2 bg-slate-100 rounded-xl shrink-0">{item.icon}</span>
                    <span>{item.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-sm md:text-base pb-6 pl-14">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Angela's Treatment Pathway Sektion */}
      <section className="py-24 bg-primary text-white rounded-[4rem] mx-4 lg:mx-10 mb-24 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl" />
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-left">
              <span className="bg-accent/20 text-accent font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider">Dein Weg zu neuer Kraft</span>
              <h2 className="text-3xl lg:text-5xl font-serif leading-tight">Ursächliche Zelltherapie <br /><span className="text-accent italic">in meiner Naturheilpraxis</span></h2>
              <p className="text-primary-foreground/80 text-base lg:text-lg leading-relaxed">
                In meiner Praxis betrachten wir dich nicht als Summe von Symptomen, sondern blicken tief auf die zelluläre Ebene deines Stoffwechsels. Auf Basis einer präzisen Spezial-Labordiagnostik erstellen wir deinen maßgeschneiderten Therapieplan, um die mitochondriale Funktion nachhaltig zu regenerieren.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Präzise Mitochondrien- & nitrosativer Stress-Diagnostik per Blutprobe",
                  "Gezielte, laborbasierte Zufuhr der ca. 45 essenziellen Mikronährstoffe",
                  "Schwermetallausleitung & Entgiftung blockierter Enzymkomplexe",
                  "Mitochondriale Membrantherapie zum Schutz der Mitochondrien-DNA",
                  "Individuelle Ernährungsberatung zur Umstellung auf Fettverbrennung"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-primary-foreground/90 font-medium text-sm lg:text-base">
                    <CheckCircle2 size={20} className="text-accent shrink-0 mt-0.5" /> 
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-8 flex flex-wrap gap-4">
                <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-accent hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-xl inline-flex items-center gap-2">
                  Zellstatus anfragen <ArrowRight size={20} />
                </Link>
                <Link to={ROUTE_PATHS.CONTACT} className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-2xl font-bold transition-all inline-flex items-center gap-2">
                  Termin vereinbaren
                </Link>
              </div>
            </div>

            {/* Scientific Yield Statistics Grid */}
            <div className="grid grid-cols-2 gap-4">
               <div className="bg-white/10 backdrop-blur-md p-8 rounded-[3rem] border border-white/10 text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">45+</div>
                  <div className="text-xs uppercase tracking-widest text-white/60 leading-tight">Essenziellste Nährstoffe für die Atmungskette</div>
               </div>
               <div className="bg-white/10 backdrop-blur-md p-8 rounded-[3rem] border border-white/10 text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">122 ATP</div>
                  <div className="text-xs uppercase tracking-widest text-white/60 leading-tight">pro Fettsäure-Molekül (Vergleich: nur 28 pro Glucose)</div>
               </div>
               <div className="bg-white/10 backdrop-blur-md p-8 rounded-[3rem] border border-white/10 text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">1,47 BHI</div>
                  <div className="text-xs uppercase tracking-widest text-white/60 leading-tight">Ab diesem kritischen Index leidet der gesamte Körper</div>
               </div>
               <div className="bg-white/10 backdrop-blur-md p-8 rounded-[3rem] border border-white/10 text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">100%</div>
                  <div className="text-xs uppercase tracking-widest text-white/60 leading-tight">Ursächliche & individuelle Nährstofftherapie</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Videos Accordion / Tabs: Für ganz Neugierige */}
      <section className="py-24 bg-white border-t border-border scroll-mt-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <span className="bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 inline-block">Wissensdatenbank</span>
            <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6">Für ganz Neugierige</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Möchtest du die faszinierenden biochemischen Vorgänge in deinen Zellen noch besser verstehen? Wir haben vier hervorragende kurze Lehrfilme zusammengestellt, die dir das Fundament unserer Arbeit anschaulich erklären.
            </p>
          </div>

          <div className="bg-[#fff9f2] p-8 lg:p-12 rounded-[3.5rem] border border-border shadow-sm">
            <h3 className="text-xl md:text-2xl font-serif text-primary mb-8 text-center flex items-center justify-center gap-2">
              <Play size={20} className="text-accent fill-accent" />
              Empfohlene biochemische Lehrfilme
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "1. Was sind Mitochondrien?",
                  desc: "Verstehe den Aufbau der lebenden Zellorganellen, ihre bakterielle Herkunft, die Doppelmembran und wie sie als biologische Kraftwerke all unsere Lebensfunktionen steuern.",
                  link: "https://www.youtube.com/results?search_query=was+sind+mitochondrien+lehrfilm",
                  duration: "ca. 5 Minuten"
                },
                {
                  title: "2. Was ist ATP?",
                  desc: "Adenosintriphosphat ist die absolute Universalwährung unseres Körpers. Lerne, wie ATP Energie speichert, biochemische Befehle transportiert und wieso wir ohne ATP in Sekundenschnelle handlungsunfähig wären.",
                  link: "https://www.youtube.com/results?search_query=was+ist+atp+lehrfilm",
                  duration: "ca. 4 Minuten"
                },
                {
                  title: "3. Was ist der Citratzyklus?",
                  desc: "Der Krebs-Zyklus ist das biochemische Drehkreuz unseres Stoffwechsels. Erfahre, wie Kohlenhydrate, Fette und Proteine schrittweise zerlegt werden, um Wasserstoffatome für die Energiegewinnung zu ernten.",
                  link: "https://www.youtube.com/results?search_query=was+ist+citratzyklus+lehrfilm",
                  duration: "ca. 6 Minuten"
                },
                {
                  title: "4. Was ist die Atmungskette?",
                  desc: "Auf der inneren Mitochondrienmembran läuft die Endoxidation ab. Siehe, wie 5 Proteinkomplexe Elektronen kontrolliert auf Sauerstoff übertragen, um eine Knallgasreaktion zu verhindern und massenhaft ATP zu generieren.",
                  link: "https://www.youtube.com/results?search_query=was+ist+atmungskette+lehrfilm",
                  duration: "ca. 7 Minuten"
                }
              ].map((film, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-border shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div>
                    <span className="text-xs font-bold text-accent uppercase tracking-wider block mb-2">{film.duration}</span>
                    <h4 className="text-base font-bold text-primary mb-3">{film.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-6">{film.desc}</p>
                  </div>
                  <a 
                    href={film.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:text-orange-600 transition-colors mt-auto"
                  >
                    Lehrfilm auf YouTube suchen <ArrowRight size={12} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PreisTransparenz 
        preisHint="Mitochondrien-Diagnostik & Zelltherapie-Protokoll" 
        hinweis="Die Investition in deine zelluläre Gesundheit ist der wertvollste Grundstein für eine nachhaltige Genesung. Die Abrechnung erfolgt transparent und individuell nach der Gebührenordnung für Heilpraktiker (GebüH)."
      />
    </div>
  );
}
