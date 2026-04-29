import React from "react";
import SEO from "@/components/SEO";
import { ROUTE_PATHS } from "@/lib/index";
import { Link } from "react-router-dom";
import { Activity, ShieldCheck, ArrowRight, Heart, Droplets, Zap } from "lucide-react";
import SplitScreenHero from "@/components/SplitScreenHero";
import PreisTransparenz from "@/components/PreisTransparenz";
import { motion } from "framer-motion";

export default function Blutegel() {
  const vorteile = [
    { title: "Entzündungshemmung", desc: "Natürliche Enzyme im Speichel des Egels wirken stark gegen Entzündungen und Schwellungen.", icon: Droplets },
    { title: "Schmerzlinderung", desc: "Effektive Hilfe bei Arthrose, Gelenkschmerzen und chronischen Entzündungsprozessen.", icon: Zap },
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
        badge="Hirudotherapie"
        title={<>Blutegel-Therapie <br /><span className="text-accent italic font-light">Die lebende Apotheke</span></>}
        subtitle="Ein jahrtausendealtes Heilverfahren in moderner Anwendung. Die Enzyme im Speichel der Blutegel wirken wie ein hochkomplexes Medikament direkt am Ort des Geschehens."
        imageSrc="https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=2070&auto=format&fit=crop"
        imageAlt="Blutegeltherapie Behandlung"
        imageKey="img_hero_blutegel"
      >
        <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-primary text-white px-10 py-5 rounded-2xl font-bold hover:shadow-2xl transition-all shadow-xl active:scale-95 flex items-center gap-2">
          Kostenfreie Vor-Analyse anfragen <ArrowRight size={20} />
        </Link>
      </SplitScreenHero>

      <section className="py-24 text-left">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
            <div className="space-y-8">
              <h2 className="text-4xl font-serif text-primary leading-tight">Wirkung durch Enzym-Komplexität</h2>
              <div className="prose prose-lg text-muted-foreground leading-relaxed">
                <p>
                  Die Wirksamkeit der Blutegeltherapie basiert nicht primär auf dem Blutverlust, sondern auf den Substanzen, die der Egel während des Saugvorgangs in das Gewebe abgibt. Das bekannteste Enzym ist Hirudin, aber es sind über 100 weitere Wirkstoffe identifiziert.
                </p>
                <p>
                  Diese Kombination wirkt <strong>schmerzstillend, entzündungshemmend und lymphstrombeschleunigend</strong>. Wir setzen medizinische Zuchtegel unter strengsten hygienischen Auflagen ein.
                </p>
              </div>
              <div className="bg-white border border-border/50 p-8 rounded-[2.5rem] shadow-sm flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <ShieldCheck size={24} />
                </div>
                <p className="font-medium text-primary italic leading-relaxed">
                  Blutegel sind als Fertigarzneimittel eingestuft. Wir verwenden ausschließlich Tiere aus zertifizierten medizinischen Zuchtanlagen (z.B. Biebertaler Blutegelzucht).
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {vorteile.map((item, i) => (
                <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-border/50 shadow-sm flex flex-col group hover:border-accent transition-all">
                  <div className="bg-muted/30 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                    <item.icon className="text-accent w-7 h-7" />
                  </div>
                  <h4 className="font-bold text-primary mb-3 font-serif text-xl">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary text-white p-12 lg:p-20 rounded-[4rem] text-center shadow-2xl relative overflow-hidden mb-24">
             <div className="absolute top-0 left-0 w-64 h-64 bg-accent/20 -ml-32 -mt-32 rounded-full blur-3xl opacity-20"></div>
             <Droplets className="w-16 h-16 text-accent mx-auto mb-8 animate-pulse relative z-10" />
             <h2 className="text-3xl lg:text-5xl font-serif mb-8 text-white font-bold relative z-10">Sanfte Hilfe bei Schmerzen</h2>
             <p className="text-xl opacity-90 mb-12 max-w-3xl mx-auto leading-relaxed relative z-10">
               Besonders bei Arthrose (Knie, Daumensattelgelenk) und akuten Entzündungen zeigt die Blutegeltherapie oft erstaunliche Erfolge, wo konventionelle Therapien an ihre Grenzen stoßen.
             </p>
             <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-white text-primary px-12 py-5 rounded-2xl font-bold hover:bg-accent hover:text-white transition-all shadow-xl inline-flex items-center gap-3 relative z-10">
               Beratungstermin anfragen <ArrowRight size={20} />
             </Link>
          </div>
        </div>
      </section>

      <PreisTransparenz />
    </div>
  );
}
