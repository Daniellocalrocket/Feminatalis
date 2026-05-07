import React from "react";
import SEO from "@/components/SEO";
import { ROUTE_PATHS } from "@/lib/index";
import { Link } from "react-router-dom";
import { Activity, ArrowRight, Sparkles, Battery, Wind, Heart, Zap, Baby, Clock, CheckCircle2, Stethoscope, Gem, Shield } from "lucide-react";
import SplitScreenHero from "@/components/SplitScreenHero";
import PreisTransparenz from "@/components/PreisTransparenz";

export default function ZelltrainingSchwangerschaft() {
  const vorteile = [
    { title: "Mehr Energie", desc: "Verbesserte ATP-Produktion für weniger Erschöpfung in der Schwangerschaft.", icon: Zap },
    { title: "Optimale Sauerstoffversorgung", desc: "Bessere Versorgung deines Babys durch verbesserte Durchblutung.", icon: Wind },
    { title: "Stressresistenz", desc: "Stärkung des Nervensystems für mehr Gelassenheit.", icon: Shield },
    { title: "Geburtsvorbereitung", desc: "Kräftigung der Mitochondrien für eine kraftvolle Geburt.", icon: Baby }
  ];

  const anwendungen = [
    "Schwangerschaftsdiabetes-Prävention",
    "Übelkeit & Erschöpfung",
    "Durchblutungsstörungen",
    "Ödeme & Wassereinlagerungen",
    "Vorzeitige Wehen",
    "Beckenendlage (optimal bei 28-34. SSW)",
    "Geburtsvorbereitung",
    "Plazenta-Funktion"
  ];

  return (
    <div className="bg-background min-h-screen font-sans">
      <SEO 
        title="IHHT in der Schwangerschaft | Zelltraining für werdende Mütter | feminatalis" 
        description="IHHT Höhentraining für mehr Energie während der Schwangerschaft. Sanfte Unterstützung für dich und dein Baby – von Hebamme & Heilpraktikerin Angela Deschner." 
      />

      <SplitScreenHero
        badge="Sicher für Mutter & Baby"
        title={<>IHHT in der <br /><span className="text-accent italic font-light">Schwangerschaft</span></>}
        subtitle="Sichere komplementäre Begleitung für werdende Mütter. Trainiere deine Zellen sanft während du entspannt liegst und gib deinem Baby die beste Startbedingung für eine kraftvolle Geburt."
        imageSrc="https://images.unsplash.com/photo-1559757175-5700dde67bc8?q=80&w=2070&auto=format&fit=crop"
        imageAlt="IHHT Schwangerschaft"
        imageKey="img_hero_ihht_schwangerschaft"
      >
        <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-primary text-white px-10 py-5 rounded-2xl font-bold hover:shadow-2xl transition-all shadow-xl active:scale-95 flex items-center gap-2">
          Vorgespräch vereinbaren <ArrowRight size={20} />
        </Link>
      </SplitScreenHero>

      {/* Sicherheit */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-accent/5 border-2 border-accent/20 p-10 lg:p-16 rounded-[4rem] text-center">
            <Shield className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-serif text-primary mb-6">Sichere Anwendung in der Schwangerschaft</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              IHHT ist eine <strong>nicht-invasive</strong>, sanfte Methode, die sich besonders für die Schwangerschaft eignet. Der Sauerstoffgehalt wird individuell angepasst – immer im sicheren Bereich für dich und dein Baby. Vor der ersten Anwendung klären wir in einem persönlichen Gespräch ab, ob IHHT für dich geeignet ist.
            </p>
          </div>
        </div>
      </section>

      {/* Warum IHHT in der Schwangerschaft? */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl font-serif text-primary mb-8">Warum IHHT in der Schwangerschaft?</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Während der Schwangerschaft steigt dein Energiebedarf erheblich. Dein Körper muss nicht nur dich versorgen, sondern auch dein wachsendes Baby. Die Mitochondrien – die Kraftwerke deiner Zellen – arbeiten auf Hochtouren.
                </p>
                <p>
                  Durch Stress, Ernährung und Umweltgifte können diese Kraftwerke jedoch an Leistung verlieren. Das kann zu <strong>Erschöpfung</strong>, Übelkeit oder einem erhöhten Risiko für Komplikationen führen.
                </p>
                <div className="bg-white p-8 rounded-[2rem] border border-accent/20">
                  <h4 className="font-bold text-primary text-xl mb-3 flex items-center gap-2">
                    <Battery className="text-accent" /> Die Zell-Akku-Metapher
                  </h4>
                  <p className="text-muted-foreground">
                    Stelle dir deinen Körper wie einen Akku vor: Mit 20% Ladung in die Geburt zu gehen, bedeutet höhere Wahrscheinlichkeit für Erschöpfung und medizinische Interventionen. <strong>Mit voller Akku-Ladung</strong> kannst du die Geburt aus eigener Kraft meistern.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {vorteile.map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-[2rem] border border-border/50 shadow-sm flex flex-col group hover:border-accent transition-all">
                  <div className="bg-muted/30 w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                    <item.icon className="text-accent w-7 h-7" />
                  </div>
                  <h4 className="font-bold text-primary mb-2 font-serif text-lg">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Anwendung in der Schwangerschaft */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-primary mb-4">Einsatzbereiche</h2>
            <p className="text-xl text-muted-foreground">
              IHHT kann dich in der Schwangerschaft auf vielfältige Weise unterstützen:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {anwendungen.map((gebiet, i) => (
              <div key={i} className="bg-muted/20 p-6 rounded-2xl border border-border flex items-center gap-4 hover:border-accent transition-colors">
                <div className="w-3 h-3 bg-accent rounded-full shrink-0"></div>
                <span className="font-medium text-primary">{gebiet}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zeitpunkt */}
      <section className="py-24 bg-accent/5">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white p-10 lg:p-16 rounded-[4rem] shadow-xl">
            <h2 className="text-3xl font-serif text-primary mb-8 text-center">Wann ist der beste Zeitpunkt?</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-8 rounded-[2rem] bg-muted/20">
                <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-bold text-xl mx-auto mb-4">1</div>
                <h4 className="font-bold text-primary mb-2">Ab 2. Trimester</h4>
                <p className="text-sm text-muted-foreground">Ab der 12. SSW möglich, nach Absprache</p>
              </div>
              <div className="text-center p-8 rounded-[2rem] bg-accent/10">
                <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-bold text-xl mx-auto mb-4">2</div>
                <h4 className="font-bold text-primary mb-2">Optimale Vorbereitung</h4>
                <p className="text-sm text-muted-foreground">28.-34. SSW fürBeckenendlage</p>
              </div>
              <div className="text-center p-8 rounded-[2rem] bg-muted/20">
                <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-bold text-xl mx-auto mb-4">3</div>
                <h4 className="font-bold text-primary mb-2">Kurz vor der Geburt</h4>
                <p className="text-sm text-muted-foreground">Ab 36. SSW zur Geburtsvorbereitung</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kosten & Kombination */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-primary text-white p-12 lg:p-16 rounded-[4rem] shadow-2xl text-center">
            <Gem className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-serif mb-6">Kombination mit Mikronährstoffen</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Für maximalen Effekt empfehle ich eine <strong>Kombination aus IHHT und Infusionen</strong>. Die Infusionen bereiten deine Zellen optimal vor, das IHHT aktiviert sie.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-white text-primary px-10 py-5 rounded-2xl font-bold hover:bg-accent hover:text-white transition-all inline-flex items-center gap-2">
                Vorgespräch vereinbaren <ArrowRight size={20} />
              </Link>
              <Link to={ROUTE_PATHS.PREISLISTE} className="border border-white/30 text-white px-10 py-5 rounded-2xl font-bold hover:bg-white/10 transition-all inline-flex items-center gap-2">
                Zur Preisliste
              </Link>
            </div>
          </div>
        </div>
      </section>

      <PreisTransparenz />
    </div>
  );
}