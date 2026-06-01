import React from "react";
import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "@/lib/index";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ExternalLink, Calendar, Users, HeartPulse, ChevronRight, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { IMAGES } from "@/assets/images";
import SEO from "@/components/SEO";

const springPresets = {
  gentle: { type: "spring", stiffness: 300, damping: 35 },
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#fff9f2]">
      <SEO 
        title="Kontakt & Terminbuchung | Feminatalis"
        description="Wähle deinen Weg zu uns. Buche ein kostenfreies Eignungs-Telefonat für die Naturheilpraxis oder frage dein Hebammenvorgespräch an."
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/5 to-transparent -z-10" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={springPresets.gentle}
            className="max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest mb-6">
              Persönlicher Kontakt
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-primary mb-6">
              Lass uns den ersten <br /> Schritt gemeinsam gehen.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Egal ob du eine medizinische Behandlung in der Naturheilpraxis suchst oder eine empathische Begleitung durch deine Schwangerschaft wünschst – ich bin für dich da.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gateway Section */}
      <section className="pb-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            
            {/* Option A: Naturheilpraxis */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={springPresets.gentle}
            >
              <Card className="group h-full border-none shadow-2xl rounded-[3rem] overflow-hidden bg-white hover:shadow-primary/5 transition-all duration-500">
                <div className="h-32 bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary">
                    <Phone size={32} />
                  </div>
                </div>
                <CardContent className="p-8 md:p-12">
                  <h3 className="text-2xl md:text-3xl font-serif text-primary mb-4 text-center">Naturheilpraxis</h3>
                  <p className="text-muted-foreground text-center mb-10 leading-relaxed min-h-[3rem]">
                    Termine für kostenfreie 20-minütige Eignungs-Telefonate kannst du bequem direkt online buchen.
                  </p>
                  
                  <div className="space-y-4">
                    <Link 
                      to={`${ROUTE_PATHS.VORQUALIFIZIERUNG}?type=naturheilpraxis`}
                      className="w-full bg-primary text-white h-16 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-lg hover:bg-primary/95 hover:-translate-y-1 transition-all group/btn"
                    >
                      <Calendar size={20} /> Termin online buchen
                      <ChevronRight size={16} className="opacity-50 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                    <p className="text-[11px] text-center text-muted-foreground uppercase tracking-widest font-medium opacity-60">
                      Kennenlernen & Eignungs-Check
                    </p>
                  </div>
                  
                  <ul className="mt-12 space-y-4 border-t border-border pt-8">
                     {[
                       "Kostenfreies Erst-Telefonat",
                       "Individuelle Eignungsprüfung",
                       "Zentrale Terminverwaltung"
                     ].map((item, i) => (
                       <li key={i} className="flex items-center gap-3 text-sm text-primary/70">
                         <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                         {item}
                       </li>
                     ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Option B: Hebammenpraxis */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={springPresets.gentle}
            >
              <Card className="group h-full border-none shadow-2xl rounded-[3rem] overflow-hidden bg-white border border-accent/10 hover:shadow-accent/5 transition-all duration-500">
                <div className="h-32 bg-accent/5 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-accent">
                    <Users size={32} />
                  </div>
                </div>
                <CardContent className="p-8 md:p-12">
                  <h3 className="text-2xl md:text-3xl font-serif text-primary mb-4 text-center">Hebammenpraxis</h3>
                  <p className="text-muted-foreground text-center mb-10 leading-relaxed min-h-[3rem]">
                    Für die Betreuung in der Schwangerschaft ist ein kurzes Kennenlernen wichtig, um zu prüfen, ob wir zueinander passen.
                  </p>
                  
                  <div className="space-y-4">
                    <Link 
                      to={`${ROUTE_PATHS.VORQUALIFIZIERUNG}?type=hebamme`}
                      className="w-full bg-accent text-white h-16 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-lg hover:bg-accent/90 hover:-translate-y-1 transition-all group/btn"
                    >
                      <Users size={20} /> Vorgespräch anfragen
                      <ChevronRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                    <p className="text-[11px] text-center text-accent uppercase tracking-widest font-bold">
                      Kennenlernen & Verfügbarkeit
                    </p>
                  </div>

                  <ul className="mt-12 space-y-4 border-t border-border pt-8">
                     {[
                       "Persönliches Vorgespräch",
                       "Kapazitätsprüfung Hebamme",
                       "Match-Making Garantie"
                     ].map((item, i) => (
                       <li key={i} className="flex items-center gap-3 text-sm text-primary/70">
                         <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                         {item}
                       </li>
                     ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

          </div>
        </div>
      </section>

      {/* NEW: Procedure / Selection Process Section */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">Unser Prozedere</h2>
            <p className="text-muted-foreground font-medium italic">Qualität erfordert Zeit und die richtige Entscheidung auf beiden Seiten.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Steps line for desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-primary/10 -translate-y-1/2 -z-0" />
            
            {[
              { 
                step: "01", 
                title: "Kostenloses telefonisches Vorgespräch (ca. 15 Min.)", 
                desc: "Erster gegenseitiger Austausch, um eine Übersicht über deine Situation zu erhalten und offene Fragen zu klären." 
              },
              { 
                step: "02", 
                title: "Kostenloses Erstgespräch in der Praxis (ca. 30–45 Min.)", 
                desc: "Orientierungsgespräch vor Ort. Wir lernen uns persönlich kennen, bauen Vertrauen auf und schließen den Behandlungsvertrag." 
              },
              { 
                step: "03", 
                title: "Anamnesetermin", 
                desc: "Tiefgründiges Faktensammeln, Analyse von Befunden und Erfassung aller gesundheitlichen Meilensteine als Fundament für den Behandlungsplan." 
              },
              { 
                step: "04", 
                title: "Individueller Therapievorschlag & transparentes Angebot", 
                desc: "Konkrete Ausarbeitung der Begleitung und Behandlung. Hier besprechen wir den maßgeschneiderten Therapieplan sowie alle anfallenden finanziellen Details absolut transparent." 
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-border relative z-10 text-center flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold mx-auto mb-6 shadow-lg shadow-primary/20">
                    {item.step}
                  </div>
                  <h4 className="text-lg font-bold text-primary mb-4 font-serif min-h-[3rem] flex items-center justify-center">{item.title}</h4>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 bg-white p-8 rounded-[2rem] border border-accent/20 flex items-center gap-6 text-left shadow-sm">
             <div className="bg-accent/10 p-4 rounded-2xl shrink-0">
                <HeartPulse className="text-accent w-8 h-8" />
             </div>
             <p className="text-sm text-muted-foreground leading-relaxed font-medium">
               <strong>Wichtiger Hinweis:</strong> Aufgrund der individuellen Dauer und Raumplanung für medizinische Behandlungen ist eine direkte Online-Buchung für Erstanamnesen und Therapien nicht möglich. Dieser Weg stellt sicher, dass ich mir für jeden Patienten exakt die Zeit nehmen kann, die benötigt wird.
             </p>
          </div>
        </div>
      </section>

      {/* Info Blocks */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="flex flex-col items-center text-center p-10 rounded-[3rem] bg-orange-50 border border-orange-100 transition-all hover:bg-orange-100/50">
               <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-orange-600 mb-6">
                 <Phone size={24} />
               </div>
               <h4 className="text-lg font-serif text-primary mb-2 font-bold">Direkter Draht</h4>
               <p className="text-muted-foreground text-sm uppercase tracking-wider font-medium mb-4">Für Rückfragen & Notfälle</p>
               <div className="flex flex-col gap-1">
                 <a href="tel:01716877854" className="text-primary text-xl font-bold hover:text-orange-600 transition-colors">
                   0171-6877854
                 </a>
                 <a href="tel:072538468728" className="text-primary/60 text-sm hover:text-orange-600 transition-colors mt-1 block font-medium">
                   Festnetz: 07253-8468728
                 </a>
               </div>
            </div>

            <div className="flex flex-col items-center text-center p-10 rounded-[3rem] bg-primary/5 border border-primary/10 transition-all hover:bg-primary/10">
               <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary mb-6">
                 <Mail size={24} />
               </div>
               <h4 className="text-lg font-serif text-primary mb-2 font-bold">E-Mail</h4>
               <p className="text-muted-foreground text-sm uppercase tracking-wider font-medium mb-4">Schriftliche Anfragen</p>
               <a href="mailto:kontakt@feminatalis.de" className="text-primary font-bold hover:text-accent transition-colors">
                 kontakt@feminatalis.de
               </a>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-[500px] relative overflow-hidden border-t border-border bg-orange-50/30">
        <iframe
          title="Feminatalis Praxis Hebelstr. 3A Bad Schönborn"
          src="https://maps.google.com/maps?q=Hebelstr.%203A,%2076669%20Bad%20Sch%C3%B6nborn&t=&z=15&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full border-0 absolute inset-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
}
