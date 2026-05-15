import React from "react";
import SEO from "@/components/SEO";
import { ROUTE_PATHS } from "@/lib/index";
import { Link } from "react-router-dom";
import { Wind, Activity, ShieldCheck, ArrowRight, CheckCircle2, Zap, Sparkles, HeartPulse, Baby } from "lucide-react";
import SplitScreenHero from "@/components/SplitScreenHero";
import PreisTransparenz from "@/components/PreisTransparenz";
import { motion } from "framer-motion";

export default function CO2TherapieHebamme() {
  const vorteile = [
    { title: "Plazenta-Durchblutung", desc: "Optimierung der Nährstoff- und Sauerstoffversorgung deines Babys.", icon: <Baby className="w-6 h-6" /> },
    { title: "Blutdruck-Regulation", desc: "Sanfte Senkung des Blutdrucks durch physiologische Gefäßerweiterung.", icon: <Activity className="w-6 h-6" /> },
    { title: "Stoffwechsel-Boost", desc: "Unterstützung der Leber und Entwässerung bei Ödemen.", icon: <Wind className="w-6 h-6" /> },
    { title: "Präventions-Schutz", desc: "Prophylaxe gegen Präeklampsie, HELLP-Syndrom und Gestationsdiabetes.", icon: <ShieldCheck className="w-6 h-6" /> }
  ];

  return (
    <div className="bg-background min-h-screen font-sans overflow-x-hidden">
      <SEO 
        title="CO2-Trockenbad in der Schwangerschaft | Hebammenpraxis feminatalis" 
        description="Schutz und Vitalität für Mutter und Kind. Das CO2-Trockenbad zur Prophylaxe von Schwangerschaftskomplikationen und zur Förderung der Plazentadurchblutung." 
      />

      <SplitScreenHero
        badge="Präventive Hebammenkunde"
        title={<>Sanfter Schutz: <br /><span className="text-accent italic font-light">CO2-Trockenbäder</span></>}
        subtitle="Sicherheit durch bessere Versorgung: Das CO2-Vitalisierungsbad ist eine bewährte Methode, um den Stoffwechsel in der Schwangerschaft sanft zu unterstützen, den Blutdruck zu regulieren und die Versorgung deines Kindes über die Plazenta zu optimieren."
        imageSrc="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2070&auto=format&fit=crop"
        imageAlt="CO2-Therapie in der Schwangerschaft"
        imageKey="img_hero_hebamme_co2"
      >
        <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-primary text-white px-10 py-5 rounded-2xl font-bold hover:shadow-2xl transition-all shadow-xl active:scale-95 flex items-center gap-2">
          Beratungsgespräch anfragen <ArrowRight size={20} />
        </Link>
      </SplitScreenHero>

      {/* Deep Dive: Safety and Health */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-serif text-primary mb-8 leading-tight font-bold text-center">Prävention statt <br /><span className="text-accent italic font-light">Intervention</span></h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="prose prose-lg text-muted-foreground leading-relaxed font-medium space-y-6 text-left">
              <p>
                Ein gestörter Stoffwechsel der Mutter ist oft die Ursache für schwere Schwangerschaftskomplikationen wie Gestationsdiabetes, Bluthochdruck oder die gefürchtete <strong>Präeklampsie</strong>.
              </p>
              <p>
                CO2-Trockenbäder wirken lokal auf die Chemorezeptoren der Haut. Dies führt zu einer sanften Weitung der Kapillaren und einer verbesserten <strong>Mikrozirkulation in der Plazenta</strong>. Dein Kind wird besser mit Nährstoffen versorgt, während dein eigener Körper (insbesondere die Leber) bei der Ausleitung von Stoffwechselprodukten entlastet wird.
              </p>
              <p>
                Besonders für Frauen, die bereits in früheren Schwangerschaften mit Komplikationen zu tun hatten, bietet dieses Verfahren eine wertvolle, völlig schmerzfreie Prophylaxe.
              </p>
            </div>
            <div className="relative">
              <div className="bg-[#fdf8f3] p-12 rounded-[4rem] border border-orange-100 shadow-sm">
                <HeartPulse className="w-16 h-16 text-accent mb-8 animate-pulse" />
                <h3 className="text-2xl font-serif text-primary mb-6 font-bold">Wirkung im Detail</h3>
                <ul className="space-y-4">
                  {[
                    "Verbesserte Durchblutung der Gebärmutter",
                    "Reduktion von Wassereinlagerungen (Ödemen)",
                    "Senkung der Krampfbereitschaft",
                    "Förderung des kindlichen Gedeihens",
                    "Prävention von Thrombosen"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-primary/80 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefit Grid */}
      <section className="py-24 bg-muted/20 relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {vorteile.map((v, i) => (
              <div key={i} className="bg-white p-10 rounded-[3.5rem] border border-border hover:border-accent transition-all hover:shadow-xl group">
                <div className="bg-muted/50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-sm text-accent">
                   {v.icon}
                </div>
                <h4 className="font-bold text-primary mb-4 font-serif text-xl">{v.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed font-medium opacity-80">{v.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-primary text-white p-12 lg:p-20 rounded-[5rem] shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-accent/20 -mr-64 -mt-64 rounded-full blur-[100px] opacity-20"></div>
             <div className="flex flex-col lg:flex-row gap-16 items-center text-left">
                <div className="lg:w-2/3 text-left">
                  <h2 className="text-4xl lg:text-5xl font-serif mb-8 text-white font-bold leading-tight text-left">Die Hebammen-Perspektive</h2>
                  <p className="text-xl opacity-90 mb-10 leading-relaxed font-medium text-left">
                    "In meiner langjährigen Erfahrung als Hebamme habe ich gesehen, wie entscheidend die metabolische Gesundheit für den Verlauf einer Schwangerschaft ist. Die CO2-Therapie ist ein sanfter Weg, um dem Körper die nötige Balance zurückzugeben – für einen entspannten Start ins Leben."
                  </p>
                  <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-white text-primary px-12 py-5 rounded-2xl font-bold hover:bg-accent hover:text-white transition-all shadow-xl inline-flex items-center gap-3">
                    Vorgespräch anfragen <ArrowRight size={20} />
                  </Link>
                </div>
                <div className="lg:w-1/3 bg-white/10 backdrop-blur-md p-10 rounded-[3rem] border border-white/20 text-center">
                   <Sparkles className="w-12 h-12 text-accent mx-auto mb-6" />
                   <p className="text-lg font-bold leading-relaxed text-white">
                     Prävention ist das wertvollste Geschenk für dich und dein Kind.
                   </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      <PreisTransparenz 
        preisHint="CO2-Trockenbad: ab 45,– €" 
        hinweis="Abrechnung erfolgt im Rahmen der Hebammen-Hilfe bei Beschwerden (anteilig möglich)."
      />
    </div>
  );
}
