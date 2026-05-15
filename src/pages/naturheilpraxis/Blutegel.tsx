import React from "react";
import SEO from "@/components/SEO";
import { ROUTE_PATHS } from "@/lib/index";
import { Link } from "react-router-dom";
import { Activity, ShieldCheck, ArrowRight, Heart, Droplets, Zap, Sparkles } from "lucide-react";
import SplitScreenHero from "@/components/SplitScreenHero";
import PreisTransparenz from "@/components/PreisTransparenz";
import { motion } from "framer-motion";

export default function Blutegel() {
  const vorteile = [
    { title: "Entzündungshemmung", desc: "Natürliche Enzyme im Speichel des Egels wirken stark gegen Entzündungen und Schwellungen.", icon: Droplets },
    { title: "Schmerzlinderung", desc: "Effektive Hilfe bei Arthrose, Gelenkschmerzen und chronischen Entzündungsprozessen.", icon: Sparkles },
    { title: "Durchblutung", desc: "Sanfte Blutverdünnung und Verbesserung der Mikrozirkulation im behandelten Gewebe.", icon: Activity },
    { title: "Detox-Effekt", desc: "Lokaler Aderlass fördert die Ausscheidung von Stoffwechselendprodukten und Schlacken.", icon: Heart }
  ];

  return (
    <div className="bg-background min-h-screen font-sans">
      <SEO 
        title="Blutegeltherapie & Hirudotherapie | Naturheilpraxis feminatalis" 
        description="Die lebende Apotheke. Blutegeltherapie bei Arthrose, Gelenkschmerzen und Entzündungen. Erfahre die heilende Kraft natürlicher Enzyme." 
      />

      <SplitScreenHero
        badge="Biologische Apotheke"
        title={<>Blutegel-Therapie: <br /><span className="text-accent italic font-light">Die lebende Spritze</span></>}
        subtitle="Ein Wunderwerk der Natur in der modernen Medizin. Der Speichel des Blutegels enthält über 100 bioaktive Wirkstoffe, die entzündungshemmend, schmerzstillend und entstauend wirken – dort, wo Chemie oft versagt."
        imageSrc="https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=2070&auto=format&fit=crop"
        imageAlt="Blutegeltherapie Behandlung"
        imageKey="img_hero_blutegel"
      >
        <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-primary text-white px-10 py-5 rounded-2xl font-bold hover:shadow-2xl transition-all shadow-xl active:scale-95 flex items-center gap-2">
          Analyse-Gespräch anfragen <ArrowRight size={20} />
        </Link>
      </SplitScreenHero>

      {/* Philosophy: More than just a bite */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl lg:text-5xl font-serif text-primary mb-10 leading-tight">Ein enzymatisches <br /><span className="text-accent italic">Meisterwerk</span></h2>
          <div className="prose prose-lg mx-auto text-muted-foreground leading-relaxed">
            <p>
              Die Wirksamkeit der Blutegeltherapie basiert auf dem „Hirudin-Effekt“. Während des Saugvorgangs gibt der Egel ein hochkomplexes Sekret ab, das die Fließeigenschaften des Blutes verbessert und das Lymphsystem aktiviert. Es ist ein sanftes, aber extrem kraftvolles Verfahren, das bei chronischen Schmerzen oft sofortige Erleichterung bringt.
            </p>
            <p className="mt-6 font-medium">
              Wichtig zu wissen: Das anschließende <strong>Nachbluten</strong> über mehrere Stunden ist absolut erwünscht. Es reinigt die Wunde, entlastet das Gewebe von Schlacken und wirkt wie ein lokaler Mini-Aderlass.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left mb-24">
            {[
              { title: "Arthrose-Hilfe", desc: "Signifikante Schmerzreduktion bei Knie-, Daumensattel- und Sprunggelenksarthrose.", icon: <Sparkles className="w-8 h-8 text-accent" /> },
              { title: "Gefäß-Entlastung", desc: "Hervorragend bei Krampfadern, Besenreisern und zur Thromboseprophylaxe.", icon: <Activity className="w-8 h-8 text-accent" /> },
              { title: "Tinnitus-Therapie", desc: "Verbesserung der Mikrozirkulation im Innenohr zur Linderung von Ohrgeräuschen.", icon: <Zap className="w-8 h-8 text-accent" /> },
              { title: "Blutdruck-Balance", desc: "Natürliche Entlastung des Kreislaufsystems bei arteriellem Bluthochdruck.", icon: <Heart className="w-8 h-8 text-accent" /> }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-[3rem] border border-border hover:border-accent transition-all hover:shadow-xl group">
                <div className="bg-muted/30 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                   {item.icon}
                </div>
                <h4 className="font-bold text-primary mb-3 font-serif text-xl leading-tight">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed font-medium opacity-80">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-primary text-white p-12 lg:p-20 rounded-[5rem] shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-accent/20 -mr-64 -mt-64 rounded-full blur-[100px] opacity-20"></div>
             <div className="flex flex-col lg:flex-row gap-16 items-center text-left">
                <div className="lg:w-2/3">
                  <h2 className="text-3xl lg:text-5xl font-serif mb-8 text-white font-bold leading-tight">Natürliche Schmerztherapie</h2>
                  <p className="text-xl opacity-90 mb-10 leading-relaxed font-medium">
                    „Blutegel sind die einzigen Tiere, die in Deutschland als Fertigarzneimittel eingestuft sind. Ihre Wirkung ist biologisch so präzise, dass sie in der modernen Chirurgie und Naturheilkunde gleichermaßen geschätzt werden.“
                  </p>
                  <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-white text-primary px-12 py-5 rounded-2xl font-bold hover:bg-accent hover:text-white transition-all shadow-xl inline-flex items-center gap-3">
                    Beratungstermin anfragen <ArrowRight size={20} />
                  </Link>
                </div>
                <div className="lg:w-1/3 bg-white/10 backdrop-blur-md p-10 rounded-[3rem] border border-white/20">
                   <Droplets className="w-12 h-12 text-accent mb-6 animate-pulse" />
                   <p className="text-lg font-bold leading-relaxed">
                     Erlebe die befreiende Wirkung der biologischen Aderlass-Therapie.
                   </p>
                </div>
             </div>
          </div>
        </div>
      </section>


      <PreisTransparenz />
    </div>
  );
}
