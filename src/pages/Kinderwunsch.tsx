import React from "react";
import SEO from "@/components/SEO";
import { ROUTE_PATHS } from "@/lib/index";
import { Link } from "react-router-dom";
import { ClipboardList, FlaskConical, Target, HeartHandshake, Check, ArrowRight, Activity, Zap, Beaker } from "lucide-react";

export default function Kinderwunsch() {
  const schritte = [
    { num: "01", icon: <ClipboardList className="w-8 h-8 text-accent" />, title: "Ausführliches Erstgespräch", desc: "60-90 Min intensive Anamnese: Vorgeschichte, Lebensstil und Ihre ganz persönlichen Ziele stehen im Mittelpunkt." },
    { num: "02", icon: <FlaskConical className="w-8 h-8 text-accent" />, title: "Umfassende Diagnostik", desc: "Spezialisierte Laboranalysen von Hormonstatus über Nährstoffversorgung bis hin zu versteckten Entzündungsmarkern." },
    { num: "03", icon: <Target className="w-8 h-8 text-accent" />, title: "Individueller Therapieplan", desc: "Maßgeschneiderte Strategien für Mikronährstoffe, Ernährung, Entgiftung und notwendige Lebensstil-Anpassungen." },
    { num: "04", icon: <HeartHandshake className="w-8 h-8 text-accent" />, title: "Kontinuierliche Begleitung", desc: "Wir lassen Sie nicht allein. Regelmäßige Verlaufskontrollen und feine Anpassungen des Therapieplans bis zum Erfolg." }
  ];

  return (
    <div className="bg-background min-h-screen">
      <SEO 
        title="Ganzheitliche Kinderwunschbehandlung & Fruchtbarkeit | feminatalis" 
        description="Natürliche Begleitung auf dem Weg zum Wunschkind. Kombination aus Hebammenwissen und Heilpraktiker-Expertise in Bad Schönborn." 
      />

      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <span className="bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 inline-block uppercase tracking-wider">Kinderwunschbehandlung</span>
          <h1 className="text-4xl lg:text-6xl font-serif text-primary mb-8 leading-tight">
            Ganzheitlicher Weg zum Wunschkind
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Ein unerfüllter Kinderwunsch belastet Körper und Seele tiefgreifend. Wir suchen nach den individuellen Ursachen abseits der reinen Reproduktionsmedizin und schaffen die optimalen Voraussetzungen für eine gesunde Empfängnis.
          </p>
          <Link to={ROUTE_PATHS.CONTACT} className="inline-block bg-accent text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-accent/90 transition-all shadow-lg active:scale-95">
            Beratungsgespräch vereinbaren
          </Link>
        </div>
      </section>

      {/* 4 Schritte */}
      <section className="py-24 bg-card/30 border-y border-border/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-primary mb-4">Unser Behandlungsablauf</h2>
            <p className="text-muted-foreground text-lg">Systematisch und einfühlsam zu Ihrem Ziel.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {schritte.map((step, idx) => (
              <div key={idx} className="relative bg-white p-8 rounded-3xl border border-border/60 hover:shadow-xl transition-all duration-300 group">
                <span className="absolute -top-8 -left-2 text-8xl font-sans font-bold text-muted opacity-10 group-hover:opacity-20 transition-opacity">{step.num}</span>
                <div className="mb-6 relative z-10 bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">{step.icon}</div>
                <h3 className="text-2xl font-serif text-primary mb-3 relative z-10 leading-snug">{step.title}</h3>
                <p className="text-sm text-muted-foreground relative z-10 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methoden Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="flex-1">
              <h2 className="text-4xl font-serif text-primary mb-8">Therapiemethoden im Fokus</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: <Activity className="text-accent w-6 h-6"/>, title: "Hormonanalyse", desc: "Bestimmung von Östrogenen, Progesteron, LH, FSH und Schilddrüse." },
                  { icon: <Zap className="text-accent w-6 h-6"/>, title: "Mikronährstofftherapie", desc: "Ausgleich von Mängeln mit optimierten Vitalstoffen für den Kinderwunsch." },
                  { icon: <Check className="text-accent w-6 h-6"/>, title: "Ernährungsberatung", desc: "Anti-Entzündung, Blutzuckerbalance und antioxidativer Schutz." },
                  { icon: <Beaker className="text-accent w-6 h-6"/>, title: "Stoffwechsel-Optimierung", desc: "Entgiftung bei Belastungen & Regulation der Zellkraftwerke." }
                ].map((m, i) => (
                  <div key={i} className="p-6 bg-background rounded-2xl border border-border hover:border-accent transition-colors">
                    <div className="mb-4">{m.icon}</div>
                    <h4 className="font-bold text-primary mb-2 text-lg">{m.title}</h4>
                    <p className="text-sm text-muted-foreground">{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/3 bg-[#fff9f2] p-10 rounded-[2.5rem] border border-border sticky top-32">
              <h3 className="text-2xl font-serif text-primary mb-6">Diagnostik-Bereiche</h3>
              <ul className="space-y-4 text-primary font-medium">
                <li className="flex items-center gap-3"><Check className="text-green-500 w-5 h-5"/> Vollständiges Hormonprofil</li>
                <li className="flex items-center gap-3"><Check className="text-green-500 w-5 h-5"/> Schilddrüsenfunktion & Antikörper</li>
                <li className="flex items-center gap-3"><Check className="text-green-500 w-5 h-5"/> Nährstoffstatus (Vitamine/Mineralien)</li>
                <li className="flex items-center gap-3"><Check className="text-green-500 w-5 h-5"/> Entzündungsmarker im Blut</li>
                <li className="flex items-center gap-3"><Check className="text-green-500 w-5 h-5"/> Stoffwechselparameter</li>
                <li className="flex items-center gap-3 border-t border-border pt-4 mt-4 text-xs opacity-60 italic font-normal">Optional: Schwermetallbelastung</li>
              </ul>
              <Link to={ROUTE_PATHS.CONTACT} className="bg-primary text-white w-full py-4 rounded-xl mt-10 font-bold hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group">
                 Termin buchen <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <HeartHandshake className="w-20 h-20 mx-auto mb-8 opacity-30" />
          <h2 className="text-4xl font-serif mb-6 leading-tight">Sie sind nicht allein auf diesem Weg</h2>
          <p className="text-xl opacity-80 mb-12 leading-relaxed">
            Wir kombinieren Hebammenwissen mit Heilpraktiker-Expertise, um die funktionellen Parameter in Ihrem Zellstoffwechsel zu optimieren. Oft sind es kleine Korrekturen, die den großen Unterschied machen.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link to={ROUTE_PATHS.CONTACT} className="bg-accent text-white px-10 py-5 rounded-xl font-bold text-xl hover:bg-accent/90 transition-all shadow-xl">Jetzt Erstgespräch buchen</Link>
          </div>
          <p className="mt-8 text-sm opacity-60 italic">Begleitung vor, während und nach IVF-Eingriffen ebenfalls möglich.</p>
        </div>
      </section>
    </div>
  );
}
