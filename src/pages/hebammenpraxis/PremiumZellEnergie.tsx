import React from "react";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "@/lib/index";
import { 
  BatteryCharging, 
  MapRoute, 
  Network, 
  ActivitySquare, 
  BrainCircuit, 
  ArrowRight,
  ClipboardList,
  MessageSquareQuoted,
  Beef
} from "lucide-react";

export default function ZellkraftRoadmap() {
  return (
    <div className="bg-[#fcfaf8] min-h-screen text-slate-800 font-sans">
      <SEO 
        title="Zellkraft-Roadmap | 90-Tage-Fertilitäts-Strategie" 
        description="Ein medizinisch fundierter 6-Wochen-Kurs für Frauen, die ihren Kinderwunsch nicht mehr dem Zufall überlassen wollen." 
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-10" />
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-4xl pt-8">
            <span className="bg-slate-100 text-slate-600 px-5 py-2 rounded-full text-xs font-bold mb-8 inline-flex items-center tracking-[0.15em] uppercase border border-slate-200 shadow-sm">
              6-Wochen-Kurs · Medizinisch Fundiert
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-slate-900 mb-6 leading-[1.15]">
              Vom Informationschaos zur Strategin: <br />
              <span className="text-slate-600">Deine 90-Tage-Fertilitäts-Roadmap.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-3xl">
              Hör auf zu suchen, fang an zu steuern. Ein Kurs für analytische Frauen, die ihren Kinderwunsch nicht mehr dem Zufall oder Algorithmen überlassen wollen – für maximale Entscheidungssicherheit und Tragfähigkeit.
            </p>
            <div className="flex flex-wrap gap-5">
               <Link to={ROUTE_PATHS.CONTACT} className="bg-slate-900 text-white px-10 py-5 rounded-xl font-medium hover:bg-slate-800 transition-all shadow-md flex items-center gap-3">
                 Kurszugang anfragen <ArrowRight size={20} />
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem (Zero State) */}
      <section className="py-24 bg-[#fcfaf8]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white p-12 md:p-16 rounded-2xl border border-slate-200 shadow-sm">
             <h2 className="text-3xl font-serif text-slate-900 mb-6">Die Last der "Über-Zuständigkeit"</h2>
             <p className="text-lg text-slate-600 leading-relaxed mb-6">
               Das moderne Netz ist voll von widersprüchlichen Ratschlägen. Das Resultat ist kein Wissen, sondern eine lähmende Handlungsparalyse. Sie sammeln Laborbefunde, googeln Symptome in der Nacht und spüren den ständigen, subtilen Vorwurf: <em>"Du musst dich einfach nur entspannen."</em>
             </p>
             <p className="text-lg text-slate-600 leading-relaxed font-medium">
               Wir räumen damit auf. Es geht nicht um Entspannungs-Druck oder Schuldzuweisungen. Es geht um prozesslogische Einordnung, physiologische Fakten und die systematische Schaffung biologischer Sicherheit im Körper.
             </p>
          </div>
        </div>
      </section>

      {/* Die 5 USPs */}
      <section className="py-24 bg-white border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl lg:text-4xl font-serif text-slate-900 mb-6">Die 5 Säulen Ihrer Selbstwirksamkeit</h2>
            <p className="text-lg text-slate-600">Wir beenden das Rätselraten durch eine klare Systematik.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {[
              { 
                icon: <BatteryCharging className="text-slate-700 w-8 h-8" />, 
                title: "Die 90-Tage-Logik", 
                desc: "Wir nutzen das bioenergetische Zeitfenster. Die Eizellreifung dauert 90 Tage. Die Maßnahmen, die Sie heute für Ihre Mitochondrien (Ihre Zell-Batterien) ergreifen, bestimmen die strukturelle Qualität der Eizelle, die in drei Monaten springt."
              },
              { 
                icon: <MapRoute className="text-slate-700 w-8 h-8" />, 
                title: "Plan A, B und C", 
                desc: "Statt Handlungsparalyse bieten wir einen klaren Entscheidungsbaum. Wir definieren Meilensteine für natürliche Wege, medizinische Unterstützung oder kombinierte Ansätze. So behalten Sie jederzeit die Souveränität." 
              },
              { 
                icon: <Network className="text-slate-700 w-8 h-8" />, 
                title: "Das 5-Systeme-Modell", 
                desc: "Wir ersetzen den reinen Hormon-Fokus durch ganzheitliche Biologie: Ein ausbalanciertes Zusammenspiel von Nervensystem, Stoffwechsel, Zellkraft, Hormonachse und dem oft vergessenen Partnerfaktor (50 % der Verantwortung)." 
              },
              { 
                icon: <ActivitySquare className="text-slate-700 w-8 h-8" />, 
                title: "Das Befund-Board", 
                desc: "Beenden Sie das bloße Sammeln von Laborwerten. Lernen Sie, Ihre Befunde nach tatsächlicher Relevanz zu filtern und medizinische Optimalwerte statt bloßer Durchschnittsnormwerte anzustreben. Maximale Daten-Souveränität." 
              },
              {
                icon: <BrainCircuit className="text-slate-700 w-8 h-8" />,
                title: "Somatische Regulation",
                desc: "Vergessen Sie die toxische Aufforderung zur 'Entspannung'. Wir etablieren stattdessen pragmatische 10-Minuten-Protokolle, die das Nervensystem physiologisch regulieren und dem Körper die 'Tragfähigkeit' für eine Schwangerschaft signalisieren."
              }
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 p-10 rounded-2xl border border-slate-100 hover:border-slate-300 transition-colors">
                <div className="mb-6">{item.icon}</div>
                <h4 className="text-2xl font-serif text-slate-900 mb-4">{item.title}</h4>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Done for you */}
      <section className="py-24 bg-slate-900 text-slate-100">
        <div className="container mx-auto px-4 max-w-6xl">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div className="max-w-xl">
                <h2 className="text-3xl lg:text-4xl font-serif text-white mb-6 leading-tight">Sofortige Entlastung durch klare Werkzeuge</h2>
                <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                  Die Theorie ist wertlos, wenn sie den "Mental Load" im Alltag erhöht. Dieser Kurs beinhaltet praktische Vorlagen, mit denen Sie ab Tag 1 fundierte Entscheidungen treffen.
                </p>
                <Link to={ROUTE_PATHS.CONTACT} className="inline-flex bg-white text-slate-900 px-8 py-4 rounded-xl font-medium hover:bg-slate-200 transition-all items-center gap-2">
                  Roadmap starten <ArrowRight size={18} />
                </Link>
             </div>
             
             <div className="space-y-6">
                {[
                  { icon: <ClipboardList />, title: "Die Roadmap-Canvas", desc: "Ihr visueller, roter Faden für die Strukturierung der nächsten entscheidenden 90 Tage." },
                  { icon: <MessageSquareQuoted />, title: "Der Gesprächsleitfaden", desc: "10 präzise, strategische Fragen für den Arzttermin, die kompetente Antworten erzwingen." },
                  { icon: <Beef />, title: "Animal-based & Keto Protokolle", desc: "Fertige Ernährungslogiken (ohne Ratespiele) zur radikalen Optimierung des Stoffwechsels." }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-5 p-6 bg-slate-800 rounded-xl border border-slate-700">
                    <div className="text-slate-300 shrink-0 mt-1">{feature.icon}</div>
                    <div>
                      <h4 className="font-medium text-white mb-2">{feature.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
             </div>
           </div>
        </div>
      </section>

    </div>
  );
}
