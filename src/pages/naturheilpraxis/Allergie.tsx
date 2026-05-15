import React from "react";
import SEO from "@/components/SEO";
import { ROUTE_PATHS } from "@/lib/index";
import { Link } from "react-router-dom";
import PreisTransparenz from "@/components/PreisTransparenz";
import { Shield, CheckCircle2, ArrowRight, Activity, Info, HeartPulse } from "lucide-react";
import SplitScreenHero from "@/components/SplitScreenHero";

export default function Allergie() {
  const ursachen = [
    { title: "Hygiene-Hypothese", desc: "Unterforderung des Immunsystems im Kindesalter durch übermäßige Sterilität." },
    { title: "Umweltbelastung", desc: "Zunehmende Rußpartikel, Feinstaub, Schadstoffe und gesteigerter Pollenflug." },
    { title: "Darm-Mikrobiom", desc: "Tiefgreifende Veränderungen durch starke Medikamente (Antibiotika) oder Fehlernährung." },
    { title: "Barriere-Störungen", desc: "Pathologische Durchlässigkeit von Haut und Schleimhaut (z.B. Leaky-Gut-Syndrom)." },
    { title: "Chronischer Stress", desc: "Massive Sensibilisierung durch dauerhafte psychische und physische Immunsystem-Irritation." }
  ];

  const behandlungsmethoden = [
    "Umfassender Aufbau der Darmflora (Mikrobiom-Therapie)",
    "Individuelle orthomolekulare Vitalstofftherapie",
    "Gezielte Regulation des Immunsystems durch Milieutherapie",
    "Sanfte Mikro- und Zellimmuntherapie",
    "Homöopathie, Phytotherapie und Körperakupunktur",
    "Laborgestützte Entschlackung & Toxinausleitung"
  ];

  return (
    <div className="bg-background min-h-screen font-sans">
      <SEO 
        title="Allergiebehandlung & Naturheilkunde | Naturheilpraxis feminatalis" 
        description="Ganzheitliche Hilfe bei Allergien, Heuschnupfen und Unverträglichkeiten. Wir suchen die Ursachen im Darm, Gewebemilieu und Immunsystem." 
      />
      
      <SplitScreenHero
        badge="Immunmodulation & Regulation"
        title={<>Endlich wieder frei atmen: <br /><span className="text-accent italic font-light">Die Allergie-Therapie</span></>}
        subtitle="Dein Immunsystem ist nicht dein Feind – es ist nur „verwirrt“. Wir helfen deinem Körper, die verlorene Hygiene-Konstante zurückzugewinnen und wieder angemessen auf seine Umwelt zu reagieren. Für ein Leben ohne ständige Abwehr und Symptomunterdrückung."
        imageSrc="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2070&auto=format&fit=crop"
        imageAlt="Allergiebehandlung und Immunmodulation"
        imageKey="img_hero_allergie"
      >
        <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-primary text-white px-10 py-5 rounded-2xl font-bold hover:shadow-2xl transition-all shadow-xl active:scale-95 flex items-center gap-2">
          Analyse-Gespräch anfragen <ArrowRight size={20} />
        </Link>
      </SplitScreenHero>

      {/* Philosophy: The Hygiene Hypothesis */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl lg:text-5xl font-serif text-primary mb-10 leading-tight">Die „verlorene Hygiene“ <br /><span className="text-accent italic">und das verwirrte System</span></h2>
          <div className="prose prose-lg mx-auto text-muted-foreground leading-relaxed">
            <p>
              In unserer modernen Welt ist der „natürliche Trainingspartner“ unseres Immunsystems – der Kontakt zu Erde, Keimen und Parasiten – verloren gegangen. Die Folge: Das System langweilt sich und beginnt, harmlose Partikel wie Pollen, Hausstaub oder Nahrungsmittel als Bedrohung einzustufen. 
            </p>
            <p className="mt-6">
              Oft kommt eine <strong>Histamin-Intoleranz</strong> oder eine <strong>Mastzell-Überreaktion</strong> hinzu, die klassische Allergietests nicht erfassen. In meiner Praxis arbeiten wir nicht gegen das Symptom, sondern stellen die Ordnung im System wieder her – ohne den Einsatz von Aluminiumhydroxid oder chemischen Blockern.
            </p>
          </div>
        </div>
      </section>

      {/* Causes Grid */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-accent font-bold tracking-widest uppercase text-sm">Hintergründe</span>
            <h2 className="text-3xl lg:text-5xl font-serif text-primary mt-4 mb-6 text-center leading-tight">Warum dein Körper <br />auf „Alarm“ schaltet</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 text-left">
            {[
              { title: "Darm-Immunität", desc: "80% deines Immunsystems sitzen im Darm. Ein 'Leaky Gut' lässt Allergene unkontrolliert passieren.", icon: <Shield className="w-8 h-8 text-accent" /> },
              { title: "Mastzell-Stress", desc: "Wenn Mastzellen zu sensibel reagieren, schütten sie bei kleinsten Reizen massiv Histamin aus.", icon: <Activity className="w-8 h-8 text-accent" /> },
              { title: "Kreuz-Reaktionen", desc: "Oft reagiert der Körper auf Pollen und bestimmte Nahrungsmittel gleichzeitig (z.B. Birke & Apfel).", icon: <CheckCircle2 className="w-8 h-8 text-accent" /> },
              { title: "Umwelt-Toxine", desc: "Schwermetalle und Pestizide können das Immunsystem chronisch irritieren und sensibilisieren.", icon: <Info className="w-8 h-8 text-accent" /> },
              { title: "Nährstoff-Mangel", desc: "Ohne ausreichend Zink, Vitamin C und Vitamin D fehlt dem Immunsystem die Bremse.", icon: <HeartPulse className="w-8 h-8 text-accent" /> },
              { title: "Chronischer Stress", desc: "Dauerstress senkt die Toleranzschwelle deines Immunsystems massiv ab.", icon: <Activity className="w-8 h-8 text-accent" /> }
            ].map((u, i) => (
              <div key={i} className="bg-white p-10 rounded-[3.5rem] border border-border shadow-sm group hover:border-accent transition-all hover:shadow-2xl text-left">
                <div className="bg-muted/50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                  {u.icon}
                </div>
                <h4 className="font-bold text-primary mb-4 font-serif text-2xl leading-tight">{u.title}</h4>
                <p className="text-base font-medium text-muted-foreground leading-relaxed opacity-80">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diagnosis & Therapy */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center text-left">
            <div className="space-y-8 text-left">
              <h2 className="text-3xl lg:text-5xl font-serif text-primary text-left leading-tight">Diagnostik <br /><span className="text-accent italic">mit Detektivsinn</span></h2>
              <div className="prose prose-lg text-muted-foreground text-left mb-8 font-medium">
                <p>
                  Ein einfacher Prick-Test reicht oft nicht aus. Wir nutzen den <strong>Metavital Human-Scan</strong> und fundierte <strong>Stuhl-Analysen</strong>, um energetische Belastungen und Mikrobiom-Störungen sichtbar zu machen.
                </p>
                <p>
                  Unser Ziel ist die natürliche Immunmodulation. Dabei setzen wir auf absolut <strong>aluminiumfreie Verfahren</strong>. Wir unterstützen deinen Körper dabei, Mastzellen zu stabilisieren und die Histamin-Toleranz nachhaltig zu erhöhen.
                </p>
              </div>
              <div className="bg-accent/5 p-10 rounded-[3rem] border border-accent/20 text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Shield size={100} />
                </div>
                <h4 className="text-primary font-bold mb-4 font-serif text-2xl text-left leading-tight">Weg von der <br />Symptomunterdrückung</h4>
                <p className="text-sm opacity-90 text-muted-foreground font-medium leading-relaxed italic mb-0">
                  „Eine Desensibilisierung mit Aluminium-Trägerstoffen kann das Fass oft erst zum Überlaufen bringen. Wir wählen den Weg der sanften, aber konsequenten Regulation.“
                </p>
              </div>
            </div>
            
            <div className="bg-primary text-white p-12 lg:p-20 rounded-[5rem] shadow-2xl relative overflow-hidden text-left h-full">
              <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-accent/20 -mr-64 -mt-64 rounded-full blur-[100px] opacity-20"></div>
              <div className="relative z-10 text-left">
                <h3 className="text-3xl font-serif font-bold mb-12 text-white leading-tight text-left">Ganzheitliche <br />Heilungsimpulse</h3>
                <ul className="space-y-6 text-left">
                  {[
                    "Mikrobiom-Therapie (Darmsanierung)",
                    "Mastzell-Stabilisierung (Naturnah)",
                    "Akupunktur zur Immunregulation",
                    "Orthomolekulare Nährstoff-Infusionen",
                    "NLS-gestützte Ursachenfindung",
                    "Histamin-Management & Beratung"
                  ].map((method, i) => (
                    <li key={i} className="flex gap-5 items-start bg-white/10 p-6 rounded-[2.5rem] border border-white/10 hover:bg-white/20 transition-all group text-left">
                      <CheckCircle2 className="w-8 h-8 text-accent shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span className="font-bold text-white text-xl leading-relaxed text-left">{method}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PreisTransparenz 
        preisHint="Immun- & Allergiecheck" 
        hinweis="Analytik von Darm, Gewebemilieu und Immunsystem."
      />

      {/* Final CTA */}
      <section className="py-24 bg-background border-t border-border text-center">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <HeartPulse className="w-16 h-16 text-primary mx-auto mb-8 opacity-20" />
          <h2 className="text-3xl md:text-5xl font-serif text-primary mb-8 leading-tight font-bold text-center">Bist du bereit für <br />Atemfreiheit?</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed font-medium text-center">
            Der Weg zur allergiefreien Lebensqualität erfordert Geduld, aber die Ergebnisse sind lebensverändernd. Wir begleiten dich intensiv dabei, dein Immunsystem wieder zu beruhigen.
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
