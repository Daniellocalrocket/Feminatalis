import React from "react";
import SEO from "@/components/SEO";
import { ROUTE_PATHS } from "@/lib/index";
import { Link } from "react-router-dom";
import { Activity, ArrowRight, Sparkles, Battery, Wind, Heart, Zap, Baby, Clock, CheckCircle2, Stethoscope, Gem, Shield } from "lucide-react";
import SplitScreenHero from "@/components/SplitScreenHero";
import PreisTransparenz from "@/components/PreisTransparenz";

export default function ZelltrainingSchwangerschaft() {
  const vorteile = [
    { title: "Mehr Energie", desc: "Sanfter physiologischer Trainingsreiz für verbesserte ATP-Produktion.", icon: Zap },
    { title: "Optimale Sauerstoffversorgung", desc: "Individuell abgestimmtes Protokoll für bessere Durchblutung.", icon: Wind },
    { title: "Stressresistenz", desc: "Komplementäre Vitalisierung des Nervensystems.", icon: Shield },
    { title: "Geburtsvorbereitung", desc: "Kräftigung der Mitochondrien aus der Hebammenperspektive.", icon: Baby }
  ];

const anwendungen = [
    "Unterstützung einer gesunden Stoffwechselleistung",
    "Übelkeit & Erschöpfung",
    "Förderung der Durchblutung",
    "Ödeme & Wassereinlagerungen",
    "Geburtsvorbereitung"
  ];

  return (
    <div className="bg-background min-h-screen font-sans">
      <SEO 
        title="IHHT in der Schwangerschaft | Zelltraining für werdende Mütter | feminatalis" 
        description="IHHT Höhentraining für mehr Energie während der Schwangerschaft. Sanfte Unterstützung für dich und dein Baby – von Hebamme & Heilpraktikerin Angela Deschner." 
      />

      <SplitScreenHero
        badge="Sanfter physiologischer Trainingsreiz"
        title={<>Zell-Energie in der <br /><span className="text-accent italic font-light">Schwangerschaft</span></>}
        subtitle="Komplementäre Vitalisierung für werdende Mütter. Unterstütze deine zellulären Kraftwerke sanft während du entspannt liegst – für mehr Energie und Wohlbefinden in dieser besonderen Zeit."
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
            <Stethoscope className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-serif text-primary mb-6">Individuell geprüfte Anwendung ab dem 2. Trimester</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Die IHHT-Parameter werden für Schwangere <strong>signifikant milder</strong> eingestellt als im normalen Modus. Wir arbeiten nach dem Schon-Prinzip: Der physiologische Trainingsreiz ist sanft, aber effektiv. Vor der ersten Anwendung klären wir in einem persönlichen Vorgespräch ab, ob IHHT für dich geeignet ist und passen das Protokoll individuell an.
            </p>
          </div>
        </div>
      </section>

      {/* Warum IHHT in der Schwangerschaft? - Ama Taucherinnen & Wissenschaft */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <h2 className="text-4xl font-serif text-primary mb-8 leading-tight">Von den Ama-Taucherinnen lernen</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Hast du schon von den japanischen <strong>Ama-Taucherinnen</strong> gehört? Diese Frauen tauchen ohne Atemgerät bis zu 20 Meter tief. Faszinierend ist: Bei ihren Kindern kommt es unter der Geburt so gut wie nie zu Sauerstoffmangel. Sie haben leichtere Geburten und ihre Kinder sind durchschnittlich fitter. 
                </p>
                <p>
                  Der Grund liegt in den <strong>Mitochondrien</strong>. Diese Zellkraftwerke haben gelernt, auf kurze Phasen geringerer Sauerstoffzufuhr (Hypoxie) optimal zu reagieren. 
                </p>
                <div className="bg-white p-8 rounded-[2rem] border border-accent/20 shadow-sm">
                  <h4 className="font-bold text-primary text-xl mb-4 flex items-center gap-2">
                    <Baby className="text-accent" /> Mitochondriale Auslese unter Wehen
                  </h4>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Während einer Wehe zieht sich die Gebärmutter zusammen, was die Sauerstoffversorgung kurzzeitig reduziert. Ein gezieltes IHHT-Training wirkt wie eine <strong>„Generalprobe“</strong>: Es hilft der Zelle, schwache Mitochondrien auszusortieren und neue, leistungsstarke Kraftwerke aufzubauen. So starten kindliche Zellen nach der Geburt mit maximaler Energie ins Leben.
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

      {/* Fallbeispiel & Therapieerfolg */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-primary text-white rounded-[4rem] p-10 lg:p-20 relative shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 -mr-48 -mt-48 rounded-full blur-3xl"></div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-serif mb-8">Erfolg, der messbar ist: Das Beispiel von Patientin „N.“</h3>
                <div className="space-y-6 opacity-90 text-lg leading-relaxed font-medium">
                  <p>
                    Eine 38-jährige Schwangere kam in der 15. Woche zu uns – geplagt von starker Müdigkeit und Erschöpfung. Ihr <strong>Bio-Health-Index (BHI)</strong> war deutlich erniedrigt. Es fehlte ihr und ihrem Baby schlichtweg an Zellenergie.
                  </p>
                  <p>
                    Nach 4 Monaten gezielter Mikronährstoff-Therapie und 12 IHHT-Sessions erreichte sie im letzten Drittel eine Zell-Leistung, die dem Niveau auf dem Gipfel des Kilimandscharo entsprach (10% Sauerstoff für 7 Minuten).
                  </p>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-10 rounded-[3rem] border border-white/20 italic italic text-white shadow-inner relative">
                <blockquote className="text-xl leading-relaxed">
                  „Ich merke, dass ich vor der Geburt viel gemacht habe, weil ich wirklich sehr fit bin. Unsere Tochter kam Sonntagmorgen zur Welt... es ging alles recht zügig. Ich fühle mich gestärkt!“
                </blockquote>
                <cite className="block mt-8 font-bold not-italic text-accent">— Patientin N. (per E-Mail)</cite>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent rounded-full flex items-center justify-center shadow-lg -rotate-12">
                   <Heart className="w-10 h-10 text-white fill-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Anwendung in der Schwangerschaft */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-primary mb-4">Einsatzbereiche der IHHT</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Zelltraining kann dich in der Schwangerschaft bei vielfältigen Herausforderungen unterstützen:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {anwendungen.map((gebiet, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-border flex items-center gap-4 hover:border-accent transition-all hover:shadow-md">
                <div className="w-3 h-3 bg-accent rounded-full shrink-0"></div>
                <span className="font-bold text-primary">{gebiet}</span>
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
                <p className="text-sm text-muted-foreground">Ab 28. SSW zur Unterstützung</p>
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