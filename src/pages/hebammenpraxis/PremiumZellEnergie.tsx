import React from "react";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "@/lib/index";
import { BatteryCharging, Zap, ShieldCheck, Microscope, ArrowRight, Activity, Thermometer, UserCheck, CheckCircle2, Crown, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function PremiumZellEnergie() {
  return (
    <div className="bg-background min-h-screen">
      <SEO 
        title="Premium-Modul: Zell-Energie | Tiefenphysiologische Geburtsvorbereitung" 
        description="Das exklusive Premium-Zusatzmodul zur Geburtsvorbereitung. Laden Sie Ihren zellulären Akku auf für eine interventionfreie, kraftvolle Geburt." 
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-border/50 bg-[#fffdfa]">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-orange-50 -z-10 rounded-br-[150px]" />
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-4xl pt-8">
            <Link to={ROUTE_PATHS.GEBURTSVORBEREITUNG} className="inline-flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-widest hover:text-primary transition-colors mb-6">
              <ChevronRight size={14} className="rotate-180" /> Zurück zur Basis-Geburtsvorbereitung
            </Link>
            <br/>
            <span className="bg-orange-100 text-orange-700 px-5 py-2 rounded-full text-xs font-black mb-8 inline-flex items-center gap-2 uppercase tracking-[0.2em] shadow-sm">
              <Crown size={14} /> Das Premium-Zusatzmodul
            </span>
            <h1 className="text-5xl lg:text-7xl font-serif text-primary mb-8 leading-[1.1]">
              Die Biochemie Ihrer <br />
              <span className="text-orange-600">Urkraft.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl">
              Wenn das Wissen des Basis-Kurses auf das Limit Ihres Körpers trifft, entscheidet Ihr Zell-Akku über den Ausgang der Geburt. Dieses Premium-Modul fokussiert sich exklusiv auf die maximale Energiebereitstellung unter den Wehen.
            </p>
            <div className="flex flex-wrap gap-5">
               <Link to={ROUTE_PATHS.CONTACT} className="bg-orange-600 text-white px-10 py-5 rounded-2xl font-bold hover:shadow-2xl hover:bg-orange-700 transition-all shadow-xl active:scale-95 flex items-center gap-3">
                 <Zap size={20} /> Platz im Premium-Modul sichern
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Das Problem / Der Ansatz */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-orange-50/50 p-12 md:p-20 rounded-[3rem] md:rounded-[4rem] border border-orange-100 relative group overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-[80px] opacity-60 -z-0" />
             <div className="relative z-10 max-w-3xl">
                <h2 className="text-3xl md:text-5xl font-serif text-primary mb-8">Ein Gebärmutter-Muskel kennt kein theoretisches Wissen.</h2>
                <p className="text-lg md:text-xl text-primary/80 leading-relaxed mb-6">
                  Wir können Atemtechniken perfektionieren und Geburtspositionen auswendig lernen – aber am Ende ist eine Wehe nichts anderes als hochintensive Muskelarbeit. 
                </p>
                <p className="text-lg md:text-xl text-primary/80 leading-relaxed italic">
                  Wenn Ihrem größten Muskel (der Gebärmutter) das <strong className="text-orange-600">ATP</strong> (die zelluläre Energie) oder das <strong className="text-orange-600">Magnesium</strong> für die Entspannungsphase zwischen den Wehen fehlt, führt dies fast zwangsläufig zur Wehenschwäche. Und eine Wehenschwäche ist Türöffner für jede medizinische Intervention.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* The 4 Pillars of Energetic Prep */}
      <section className="py-24 bg-gray-50 border-y border-border/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-serif text-primary mb-6">Inhalte des Premium-Moduls</h2>
            <p className="text-xl text-muted-foreground">Basierend auf der tiefenphysiologischen Klarheit der St. Petersburger Schule analysieren und optimieren wir die 4 Säulen Ihrer körperlichen Geburts-Ressourcen.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { 
                icon: <Zap className="text-orange-600 w-8 h-8" />, 
                title: "ATP-Produktion (Zell-Energie)", 
                desc: "Wir fokussieren uns darauf, Ihre Mitochondrien zu trainieren, damit diese unter der extremen Dauerbelastung der Geburt nicht versagen. Mehr ATP bedeutet kräftigere, effektivere Wehen."
              },
              { 
                icon: <Activity className="text-primary w-8 h-8" />, 
                title: "Mineral-Management", 
                desc: "Wehenschmerz entsteht häufig durch muskuläre Verkrampfung (Laktat-Bildung). Wie Sie durch gezieltes Elektrolyt- und Magnesiummanagement die essentiellen Pausen zwischen den Wehen erzwingen." 
              },
              { 
                icon: <CheckCircle2 className="text-green-600 w-8 h-8" />, 
                title: "Sauerstoffreserve & Durchblutung", 
                desc: "Während einer Kontraktion wird die Gebärmutterkompression enorm hoch. Wir besprechen, wie Ihre Sauerstoffsättigung (O2 & Eisenstatus) die Herztöne des Kindes stabilisiert." 
              },
              { 
                icon: <Microscope className="text-blue-600 w-8 h-8" />, 
                title: "Anatomische Beweglichkeit", 
                desc: "Es nützt nichts, wenn die Zellen Energie haben, aber der Beckenring starr bleibt. Wir verbinden die Biochemie mit der gezielten, nährstoffgestützten Flexibilität der Beckenbänder." 
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-primary/5 hover:border-primary/20 hover:shadow-xl transition-all group">
                <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-serif text-primary mb-4">{item.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div>
                <Badge variant="outline" className="text-orange-600 border-orange-200 mb-6 px-4 py-1">Experten-Wissen</Badge>
                <h2 className="text-4xl font-serif text-primary mb-6 leading-tight">33 Jahre Erfahrung im Kreißsaal & die St. Petersburger Schule</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Dieses Zusatzmodul entspringt nicht aus Lehrbüchern, sondern aus jahrzehntelanger Beobachtung. Warum können manche Erstgebärende nach 12 Stunden noch kraftvoll mitarbeiten, während andere nach 3 Stunden körperlich einbrechen?
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Die Antwort ist fast immer die zelluläre Energie. Wir decken die Lücke auf, die klassische Kurse hinterlassen und transformieren Ihren Körper von einer Notstrom-Situation hin zu einer prall gefüllten Batterie.
                </p>
             </div>
             <div className="relative">
                <div className="bg-primary/5 p-12 rounded-[4rem] border border-primary/10">
                   <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white font-bold">33</div>
                      <p className="text-primary font-bold uppercase tracking-widest text-sm">Jahre Expertise</p>
                   </div>
                   <p className="text-2xl font-serif text-primary italic mb-8 leading-relaxed">
                     „Ich bereite Sie nicht nur auf die Phasen der Geburt vor, sondern auf die volle Entfaltung Ihrer physiologischen und muskulären Einsatzkraft.“
                   </p>
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white rounded-full overflow-hidden flex items-center justify-center shadow-sm">
                         <UserCheck size={24} className="text-primary" />
                      </div>
                      <div>
                         <p className="font-bold text-primary">Angela Deschner</p>
                         <p className="text-xs text-orange-600 font-black uppercase">Hebamme & NHK Spezialistin</p>
                      </div>
                   </div>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-orange-500/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <Thermometer className="w-16 h-16 mx-auto mb-8 text-white/50" />
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Sind Ihre Geburts-Akkus noch leer?</h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Das Premium-Modul "Zell-Energie" ist der entscheidende Baustein für alle Mütter, die sich nicht auf Glück verlassen, sondern ihren Körper wie einen Spitzensportler auf den Kreißsaal vorbereiten möchten.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to={ROUTE_PATHS.CONTACT} className="inline-flex items-center justify-center gap-2 bg-white text-primary px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all shadow-xl active:scale-95 group">
              Jetzt zum Premium-Modul anmelden <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to={ROUTE_PATHS.GEBURTSVORBEREITUNG} className="inline-flex items-center justify-center gap-2 bg-primary-foreground/10 text-white border border-white/20 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all">
              Zurück zum Basis-Kurs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
