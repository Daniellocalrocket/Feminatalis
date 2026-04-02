import React from "react";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "@/lib/index";
import { BatteryCharging, Zap, ShieldCheck, Microscope, ArrowRight, Activity, Thermometer, UserCheck, CheckCircle2 } from "lucide-react";

export default function Geburtsvorbereitung() {
  return (
    <div className="bg-background min-h-screen">
      <SEO 
        title="Biochemische Geburtsvorbereitung | Geburtskraft optimieren" 
        description="Ihre Vorbereitung auf eine interventionsfreie Geburt. Optimale ATP-Produktion, Sauerstoffversorgung und Zell-Energie statt klassischer Mangel-Verwaltung." 
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-border/50">
        <div className="absolute top-0 left-0 w-1/4 h-full bg-primary/5 -z-10 rounded-r-[100px]" />
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-4xl">
            <span className="bg-primary/10 text-primary px-5 py-2 rounded-full text-xs font-black mb-8 inline-block uppercase tracking-[0.2em] shadow-sm">
              Säule 1: Basis-Begleitung
            </span>
            <h1 className="text-5xl lg:text-7xl font-serif text-primary mb-8 leading-[1.1]">
              Geburtsvorbereitung als <br />
              <span className="text-orange-600">Ressourcen-Management</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl">
              Vergessen Sie klassische Geburtsvorbereitung, die nur das „Wie“ erklärt. Bei Feminatalis konzentrieren wir uns auf das „Womit“ – die physische Energie, die Ihr Körper braucht, um die Geburt aus eigener Kraft zu meistern.
            </p>
            <div className="flex flex-wrap gap-5">
               <Link to={ROUTE_PATHS.CONTACT} className="bg-primary text-white px-10 py-5 rounded-2xl font-bold hover:shadow-2xl transition-all shadow-xl active:scale-95">
                 Platz im Kurs anfragen
               </Link>
               <Link to={ROUTE_PATHS.ZELLTRAINING} className="bg-white text-primary border-2 border-primary/20 px-10 py-5 rounded-2xl font-bold hover:bg-muted transition-all flex items-center gap-2 group">
                 Upgrade: Das Zell-Protokoll <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content: Beyond Breathing */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-serif text-primary mb-6">Mehr als nur Hecheln und Theorie</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Jede Wehe ist eine Hochleistungssport-Einheit für Ihre Gebärmutter. In meinen Kursen verbinden wir klassisches Hebammenwissen mit der tiefenphysiologischen Klarheit der St. Petersburger Schule. 
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-orange-50 p-12 rounded-[3rem] border border-orange-100 relative group">
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:rotate-6 transition-transform">
                <BatteryCharging className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-serif text-primary mb-4">Das Energetische Fundament</h3>
              <p className="text-muted-foreground leading-relaxed italic">
                „Eine Wehenschwäche ist oft kein Schicksal, sondern ein leeres Energie-Depot.“
              </p>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                Wir besprechen nicht nur den Geburtsablauf, sondern wie Sie Ihren Körper (und Ihren Zell-Akku) auf den Endspurt vorbereiten. Nur ein gut versorgter Muskel kann über Stunden hinweg kraftvolle Arbeit leisten.
              </p>
            </div>

            <div className="bg-primary/5 p-12 rounded-[3rem] border border-primary/10 relative group text-primary">
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:-rotate-6 transition-transform">
                <ShieldCheck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-serif mb-4">Sicherheit durch Wissen</h3>
              <p className="text-primary/70 leading-relaxed italic">
                „Angst entsteht dort, wo Verständnis für die Physiologie fehlt.“
              </p>
              <p className="text-primary/80 mt-4 leading-relaxed">
                Mit 33 Jahren Erfahrung in Kreißsaal und Freiberuflichkeit vermittle ich Ihnen eine sachliche, hochexpertenhafte Sicht auf den Geburtsprozess. Wir optimieren Ihre Ressourcen, damit Sie sicher und fokussiert in die Geburt gehen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Pillars of Energetic Prep */}
      <section className="py-24 bg-gray-50 border-y border-border/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-serif text-primary leading-tight">
                Die Biochemie Ihrer <br />
                <span className="text-orange-600">Urkraft</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Echte Geburtsvorbereitung schaut unter die Haut. Wir analysieren, welche biochemischen Weichen gestellt werden müssen, um eine interventionsfreie Geburt zu begünstigen.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: <Zap className="text-orange-600" />, title: "ATP-Produktion (Zell-Energie)", desc: "Maximale Mitochondrien-Power für dauerhafte Wehentätigkeit." },
                  { icon: <Activity className="text-primary" />, title: "Mineral-Management", desc: "Effektive Entspannungsphasen zwischen den Wehen durch optimalen Magnesiumstatus." },
                  { icon: <CheckCircle2 className="text-green-600" />, title: "Sauerstoffreserve", desc: "Stabilere Herztöne des Kindes durch optimierte Eisen- und O2-Sättigung." },
                  { icon: <Microscope className="text-blue-600" />, title: "Anatomische Beweglichkeit", desc: "Nährstoffgestützte Flexibilität von Bandstrukturen und Beckenring." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 hover:bg-white rounded-2xl transition-colors border border-transparent hover:border-border">
                    <div className="shrink-0 mt-1">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-primary">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white p-12 rounded-[4rem] shadow-2xl border border-border relative z-10">
                 <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white font-bold">33</div>
                    <p className="text-primary font-bold uppercase tracking-widest text-sm">Jahre Erfahrung in jeder Stunde</p>
                 </div>
                 <p className="text-2xl font-serif text-primary italic mb-8 leading-relaxed">
                   „Ich bereite Sie nicht nur auf eine Geburt vor, sondern auf die volle Entfaltung Ihrer physiologischen Möglichkeiten.“
                 </p>
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-muted rounded-full overflow-hidden flex items-center justify-center">
                       <UserCheck size={20} className="text-primary" />
                    </div>
                    <div>
                       <p className="font-bold text-primary">Angela Deschner</p>
                       <p className="text-xs text-orange-600 font-black uppercase">St. Petersburger Schule</p>
                    </div>
                 </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-orange-100 rounded-full blur-[100px] opacity-60 -z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Thermometer className="w-16 h-16 mx-auto mb-8 text-primary opacity-20" />
          <h2 className="text-4xl font-serif text-primary mb-6">Investieren Sie in Ihre Geburtskraft</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Ob im Einzelsetting oder in der Kleingruppe: Wir laden Ihren Akku auf, damit Sie interventionsfrei und sicher entbinden können.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to={ROUTE_PATHS.CONTACT} className="inline-block bg-primary text-white px-12 py-6 rounded-2xl font-bold text-xl hover:shadow-2xl transition-all active:scale-95">
              Anfrage Geburtsvorbereitung
            </Link>
            <Link to={ROUTE_PATHS.ZELLTRAINING} className="inline-block bg-white text-primary border-2 border-primary/20 px-12 py-6 rounded-2xl font-bold text-xl hover:bg-muted transition-all">
              Zell-Protokoll ansehen
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
