import React from "react";
import SEO from "@/components/SEO";
import { ROUTE_PATHS } from "@/lib/index";
import { Link } from "react-router-dom";
import { Battery, HeartPulse, Zap, ShieldCheck, Microscope, Award, ArrowRight, Activity, Thermometer, UserCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useSiteImages } from "@/hooks/useSiteImages";

export default function Hebammenpraxis() {
  const { getImageUrl } = useSiteImages();

  return (
    <div className="bg-background min-h-screen">
      <SEO 
        title="Geburtskraft optimieren & Hebammenpraxis | Das Zell-Protokoll" 
        description="Interventionsfreie Geburt vorbereiten durch Zell-Energie. Angela, Hebamme & Heilpraktikerin mit 33 Jahren Erfahrung, optimiert Ihre Geburtskraft für maximale Sicherheit."
      />
      
      {/* 1. Hero-Sektion (Der Einstieg) */}
      <section className="relative pt-32 pb-48 text-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={getImageUrl("img_hero_hebammenpraxis", "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=2070&auto=format&fit=crop")} 
            alt="Hebammenpraxis Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/75 backdrop-blur-[1px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-orange-100 text-orange-600 px-5 py-2 rounded-full text-xs font-black mb-8 inline-block uppercase tracking-[0.2em] shadow-sm">
              Das Feminatalis Geburtskraft-Konzept
            </span>
            <h1 className="text-5xl lg:text-7xl font-serif text-primary mb-8 leading-[1.1] [hyphens:auto] [overflow-wrap:anywhere] break-words">
              Maximale <span className="text-orange-600">Geburtskraft</span>: <br />
              Das Zell-Protokoll für Ihre interventionsfreie Entbindung.
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
              Ihr Uterusmuskel ist der Hochleistungsmotor der Geburt. Ich sorge dafür, dass er den entscheidenden Treibstoff hat. Mit 33 Jahren Erfahrung und dem Fokus auf zelluläre Energie-Optimierung bereite ich Ihren Körper auf die größte körperliche Leistung Ihres Lebens vor.
            </p>
            <div className="flex flex-wrap justify-center gap-5">
                <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-primary text-white px-10 py-5 rounded-2xl font-bold hover:bg-primary/95 hover:shadow-2xl hover:-translate-y-0.5 transition-all active:scale-95 shadow-xl flex items-center gap-3">
                  <UserCheck size={20} /> Termin online buchen
                </Link>
               <a href="#saeulen" className="bg-white text-primary border-2 border-primary/20 px-10 py-5 rounded-2xl font-bold hover:bg-muted transition-all flex items-center gap-2">
                 Die 3 Säulen entdecken <ArrowRight size={20} />
               </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Einleitung: Mangel-Verwaltung vs. Ressourcen-Optimierung */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-4xl font-serif text-primary mb-8 leading-tight">
                Mangel-Verwaltung vs. <br />
                <span className="text-orange-600">Ressourcen-Optimierung</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Die klassische Schwangerenvorsorge prüft meist nur, ob „nichts fehlt“. Doch für eine kraftvolle, interventionsfreie Geburt reicht das bloße Fehlen von Mängeln nicht aus. Sie brauchen volle Reserven.
                </p>
                <div className="bg-orange-50 p-8 rounded-3xl border-l-8 border-orange-400 my-10">
                  <h3 className="text-primary font-bold text-xl mb-4 flex items-center gap-3">
                    <Battery className="text-orange-600 w-8 h-8" />
                    Die Zell-Akku-Metapher
                  </h3>
                  <p className="text-primary/80">
                    Stellen Sie sich Ihre Zell-Energie wie einen Akku vor: Wer mit 20 % Ladung in die Geburt geht, riskiert Wehenschwäche, Erschöpfung und unnötige medizinische Eingriffe. Mein Ziel ist die 100-Prozent-Ladung – damit Ihr Körper die Geburt aus eigener Urkraft steuern kann.
                  </p>
                </div>
                <p className="font-medium text-primary">
                  Ich biete KEINE Routine-Vorsorge an. Mein Fokus liegt exklusiv auf der physiologischen Optimierung Ihrer Ressourcen.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="bg-muted aspect-square rounded-[3rem] overflow-hidden shadow-2xl relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center p-12">
                   <div className="text-center">
                      <Zap size={80} className="text-orange-600 mx-auto mb-6 opacity-30" />
                      <p className="text-5xl font-serif text-primary font-bold mb-2">100%</p>
                      <p className="text-sm font-bold uppercase tracking-widest text-primary/60">Zell-Power Target</p>
                   </div>
                </div>
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-xl border border-border max-w-[200px]">
                <p className="text-xs font-bold text-orange-600 uppercase mb-2">The Focus</p>
                <p className="text-sm font-serif italic">„Sicherheit durch physiologische Überlegenheit.“</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Die 3 Säulen der Hebammen-Begleitung */}
      <section id="saeulen" className="py-32 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-serif text-primary mb-6">Strukturiert zum Erfolg</h2>
            <p className="text-xl text-muted-foreground">Drei Ebenen der Begleitung, die ineinandergreifen, um Ihre Geburt sicher und kraftvoll zu machen.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Säule 1 */}
            <div className="bg-white p-12 rounded-[3rem] border border-border hover:shadow-2xl transition-all group hover:-translate-y-2">
              <div className="bg-blue-50 w-20 h-20 rounded-3xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-serif text-primary mb-2">Säule 1: Basis-Begleitung</h3>
              <p className="text-blue-600 font-bold text-sm mb-6 uppercase tracking-wider">Kassenleistung</p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                <strong>„Sicherheit für den Start“</strong>: Fokus auf den Geburtsvorbereitungskurs und die intensive Zeit im Wochenbett. Klassische Expertise für den stabilen Rahmen.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-sm font-medium"><div className="w-1.5 h-1.5 rounded-full bg-blue-600"/> Vorbereitungskurse</li>
                <li className="flex items-center gap-3 text-sm font-medium"><div className="w-1.5 h-1.5 rounded-full bg-blue-600"/> Wochenbettbetreuung</li>
                <li className="flex items-center gap-3 text-sm font-medium"><div className="w-1.5 h-1.5 rounded-full bg-blue-600"/> Hausbesuche</li>
              </ul>
            </div>

            {/* Säule 2 */}
            <div className="bg-white p-12 rounded-[3rem] border border-border hover:shadow-2xl transition-all group hover:-translate-y-2 relative overflow-hidden">
               <div className="bg-[#fdf2f2] w-20 h-20 rounded-3xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                <Thermometer className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-serif text-primary mb-2">Säule 2: Akut-Hilfe</h3>
              <p className="text-primary font-bold text-sm mb-6 uppercase tracking-wider">Kasse + Naturheilkunde</p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                <strong>„Ursachen statt Pflaster“</strong>: Gezielte Behandlung bei Schmerzen, Ödemen oder Erschöpfung. Wir analysieren tiefenphysiologisch, warum Ihr Körper reagiert.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-sm font-medium"><div className="w-1.5 h-1.5 rounded-full bg-primary"/> Schmerzmanagement</li>
                <li className="flex items-center gap-3 text-sm font-medium"><div className="w-1.5 h-1.5 rounded-full bg-primary"/> Ödem-Behandlung</li>
                <li className="flex items-center gap-3 text-sm font-medium"><div className="w-1.5 h-1.5 rounded-full bg-primary"/> Erschöpfungs-Check</li>
              </ul>
            </div>

            {/* Säule 3 */}
            <div className="bg-primary text-white p-12 rounded-[3rem] shadow-2xl relative overflow-hidden group hover:-translate-y-2 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-[100px] -z-0" />
               <div className="bg-white/20 w-20 h-20 rounded-3xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform relative z-10">
                <Microscope className="w-10 h-10 text-orange-200" />
              </div>
              <h3 className="text-2xl font-serif mb-2 relative z-10">Säule 3: Das Zell-Protokoll</h3>
              <p className="text-orange-200 font-bold text-sm mb-6 uppercase tracking-wider relative z-10">Premium / Privat</p>
              <p className="text-white/80 mb-8 leading-relaxed relative z-10">
                <strong>„Maximale Leistung“</strong>: Die exklusive Vorbereitung durch Vollblut-Analyse, IHHT-Zelltraining und Infusionen. Das Ziel: Volle Power für den Endspurt.
              </p>
              <ul className="space-y-4 mb-10 relative z-10">
                <li className="flex items-center gap-3 text-sm font-medium"><div className="w-1.5 h-1.5 rounded-full bg-orange-200"/> Vollblut-Nährstoff-Analyse</li>
                <li className="flex items-center gap-3 text-sm font-medium"><div className="w-1.5 h-1.5 rounded-full bg-orange-200"/> IHHT-Zelltraining (Hypoxie)</li>
                <li className="flex items-center gap-3 text-sm font-medium"><div className="w-1.5 h-1.5 rounded-full bg-orange-200"/> Mitochondriale Infusionen</li>
              </ul>
              <Link to={ROUTE_PATHS.ZELLTRAINING} className="inline-flex items-center gap-2 text-orange-200 font-bold text-sm group-hover:gap-4 transition-all uppercase tracking-widest relative z-10">
                Zum Protokoll <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Autoritäts-Block */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 relative">
               <div className="absolute -top-10 -left-10 w-64 h-64 bg-orange-100 rounded-full blur-[100px] opacity-60 -z-10" />
               <div className="relative border-2 border-border p-4 rounded-[4rem] rotate-2">
                 <div className="bg-muted aspect-[4/5] rounded-[3.5rem] flex items-center justify-center p-12">
                    <UserCheck size={120} className="text-primary/20" />
                 </div>
                 <div className="absolute -bottom-10 -right-10 bg-primary text-white p-10 rounded-3xl shadow-2xl max-w-[280px] -rotate-3">
                    <Award size={48} className="text-orange-400 mb-4" />
                    <p className="text-3xl font-serif font-bold mb-1">33 Jahre</p>
                    <p className="text-sm font-bold uppercase tracking-widest opacity-80">Berufserfahrung</p>
                 </div>
               </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-serif text-primary mb-8 leading-tight">
                33 Jahre Expertise trifft <br />
                <span className="text-orange-600">St. Petersburger Schule</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Angela vereint die klinische Erfahrung aus 10 Jahren Kreißsaal und 22 Jahren Freiberuflichkeit mit der analytischen Tiefe der St. Petersburger Schule. Ihr Arbeitsstil ist geprägt von einer sachlichen, tiefenphysiologischen Klarheit.
                </p>
                <p>
                  Als staatlich geprüfte Heilpraktikerin und Hebamme schaut sie „unter die Haut“. Wo andere Routine-Vorsorge leisten, analysiert Angela die biochemischen Grundlagen, um die Geburt sicher und kraftvoll zu machen. Es geht nicht um Träume, sondern um messbare Leistungsfähigkeit für den wichtigsten Moment Ihres Lebens.
                </p>
                <div className="pt-8 border-t border-border mt-10">
                   <p className="text-primary font-bold text-xl mb-1">Angela Deschner</p>
                   <p className="text-orange-600 font-bold uppercase tracking-widest text-xs">Hebamme & Heilpraktikerin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <HeartPulse className="w-16 h-16 mx-auto mb-8 text-orange-600 opacity-20" />
          <h2 className="text-4xl font-serif text-primary mb-6">Sind Sie bereit für maximale Geburtskraft?</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Investieren Sie in die optimale Vorbereitung Ihrer körperlichen Ressourcen. Für eine Geburt aus eigener Stärke.
          </p>
          <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="inline-block bg-primary text-white px-12 py-6 rounded-2xl font-bold text-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3 w-fit mx-auto">
            <UserCheck size={24} /> Jetzt Termin online buchen
          </Link>
        </div>
      </section>
    </div>
  );
}
