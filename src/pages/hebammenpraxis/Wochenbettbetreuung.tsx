import React from "react";
import SEO from "@/components/SEO";
import { ROUTE_PATHS } from "@/lib/index";
import { Link } from "react-router-dom";
import { ArrowRight, HeartPulse, Baby, Scale, ShieldCheck, Home } from "lucide-react";
import { motion } from "framer-motion";
import SplitScreenHero from "@/components/SplitScreenHero";
import PreisTransparenz from "@/components/PreisTransparenz";

export default function Wochenbettbetreuung() {
  return (
    <div className="bg-background min-h-screen font-sans">
      <SEO 
        title="Wochenbettbetreuung in Bad Schönborn | Hebamme Angela Deschner" 
        description="Medizinische und emotionale Wochenbettbetreuung zu Hause. Stillberatung, Nabelpflege, Rückbildungskontrolle und Hilfe bei Regulationsstörungen." 
      />

      <SplitScreenHero
        badge="Postnatale Begleitung"
        title={<>Wochenbettbetreuung <br/><span className="text-accent italic font-light">& Hausbesuche</span></>}
        subtitle="Die Zeit nach der Geburt ist eine fundamentale Phase der körperlichen Heilung und der psychischen Anpassung. Wir begleiten Sie mit 33 Jahren Fachwissen direkt bei Ihnen zu Hause."
        imageSrc="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2040&auto=format&fit=crop"
        imageAlt="Wochenbettbetreuung"
        imageKey="img_hero_wochenbett"
      >
        <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-primary text-white px-10 py-5 rounded-2xl font-bold hover:shadow-2xl transition-all shadow-xl active:scale-95 flex items-center gap-2">
          Betreuungs-Anfrage stellen <ArrowRight size={20} />
        </Link>
      </SplitScreenHero>

      <section className="py-24 bg-card relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-background p-12 rounded-[3rem] border border-border/50 shadow-sm"
            >
              <h2 className="text-3xl font-serif text-primary mb-8">Umfassende Versorgung</h2>
              <ul className="space-y-8">
                <li className="flex gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <HeartPulse size={24} />
                  </div>
                  <div>
                    <strong className="text-foreground text-lg block mb-1">Mütterliche Rückbildungskontrolle</strong>
                    <span className="text-muted-foreground leading-relaxed">Medizinische Überwachung der Gebärmutterrückbildung, Heilung von Geburtsverletzungen und Vitalparameter-Check.</span>
                  </div>
                </li>
                <li className="flex gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <Baby size={24} />
                  </div>
                  <div>
                    <strong className="text-foreground text-lg block mb-1">Neugeborenen-Überwachung</strong>
                    <span className="text-muted-foreground leading-relaxed">Gewichtskontrolle, Nabelpflege, Überwachung von Neugeborenengelbsucht und Beurteilung der Reflexe.</span>
                  </div>
                </li>
                <li className="flex gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <Scale size={24} />
                  </div>
                  <div>
                    <strong className="text-foreground text-lg block mb-1">Stillberatung & Ernährung</strong>
                    <span className="text-muted-foreground leading-relaxed">Professionelle Unterstützung beim Milcheinschuss und Vermeidung von Mastitis.</span>
                  </div>
                </li>
              </ul>
            </motion.div>

            <div className="space-y-10">
              <div className="bg-primary/5 p-10 rounded-[2.5rem]">
                <ShieldCheck className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-2xl font-serif text-primary mb-4">Medizinische Sicherheit zu Hause</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Unsere Hausbesuche garantieren, dass Mutter und Kind medizinisch überwacht werden, ohne den Stress eines Praxisaufenthalts auf sich nehmen zu müssen. Wir erkennen Abweichungen sofort und leiten rechtzeitig Gegenmaßnahmen ein.
                </p>
              </div>
              
              <div className="bg-primary text-primary-foreground p-10 rounded-[2.5rem] shadow-xl shadow-primary/20">
                <h4 className="text-xl font-bold mb-4">Ablauforganisation</h4>
                <p className="opacity-90 mb-8 leading-relaxed">Die Kosten für die Wochenbettbetreuung werden regulär von allen gesetzlichen und privaten Krankenkassen übernommen.</p>
                <div className="flex items-center gap-3 bg-white/10 p-4 rounded-2xl border border-white/10">
                  <Home className="w-5 h-5 text-accent" /> 
                  <span className="font-medium">Hausbesuche im Großraum Bad Schönborn</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PreisTransparenz />
    </div>
  );
}
