import React from "react";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "@/lib/index";
import { 
  ShieldCheck, 
  BatteryCharging, 
  Brain, 
  ActivitySquare, 
  Network, 
  Map as MapIcon, 
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Zap,
  Target,
  Sparkles,
  HeartPulse,
  Timer,
  LineChart,
  Users
} from "lucide-react";
import { motion } from "framer-motion";

export default function ZellkraftRoadmap() {
  return (
    <div className="bg-background min-h-screen text-foreground font-sans">
      <SEO 
        title="Fruchtbarkeits-Kompass | Zellenergie-Fahrplan" 
        description="Ein medizinisch fundierter 90-Tage-Kurs für Frauen, die ihren Kinderwunsch nicht mehr dem Zufall überlassen wollen." 
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pb-32 overflow-hidden border-b border-border/50 bg-[#fff9f2]">
        {/* Subtle background decoration tailored to brand colors */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[#fde4c8]/50 to-transparent -z-10" />
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#f07d00]/10 blur-[100px]" />
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl pt-8"
          >
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fde4c8] border border-[#e2d2c2] text-primary text-sm font-bold tracking-widest uppercase mb-8 shadow-sm">
               <Zap size={16} className="text-accent" /> Premium Online-Programm
             </div>
            <h1 className="text-5xl md:text-7xl font-serif text-primary mb-6 leading-[1.1]">
              Fruchtbarkeits-Kompass:<br />
              Zellenergie-Fahrplan.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl">
              Vom Informationschaos zur Strategie. Hör auf zu suchen, fang an zu steuern. Dein medizinisch fundierter <strong className="text-primary">90-Tage-Kurs</strong> für Frauen, die ihren Kinderwunsch nicht mehr dem Zufall überlassen wollen – mit radikalem Fokus auf Mitochondrien.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
               <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-accent text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 hover:bg-[#e07500] flex items-center justify-center gap-3 group text-lg">
                 Strategie-Gespräch anfragen <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
               </Link>
               <a href="#module" className="bg-white hover:bg-[#fde4c8]/50 text-primary border border-border px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-3 text-lg">
                 Kursinhalte ansehen
               </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Das Problem & Die Logik (Bedarf Wecken) */}
      <section className="py-24 bg-white relative border-b border-border/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-primary text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
                Der Status Quo
              </div>
              <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6 leading-[1.15]">
                Gefangen in der <br /> Über-Zuständigkeit?
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Google-Diagnosen, YouTube-Tipps und der ständige Druck, „sich einfach nur zu entspannen“. Die meisten Frauen mit Kinderwunsch leiden nicht unter mangelndem Wissen, sondern unter massiver Informationsüberflutung und einer lähmenden Handlungsparalyse.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed font-medium">
                Das Problem: Reine "Hoffnung" und pures "Mindset" reichen oft nicht aus.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Wenn dein Körper auf zellulärer Ebene im energetischen Defizit ist, nützt auch das beste mentale Loslassen nichts. Wenn die Eizellreifung durch einen Mangel an zellulärer Energie (Mitochondrien) gestört wird, bleibt der Erfolg aus. Herkömmliche Tipps kratzen nur an der Oberfläche – sie lassen die <strong>Zellbiologie</strong> völlig außen vor.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#fde4c8] p-10 md:p-12 rounded-[2rem] border border-[#f07d00]/20 shadow-xl relative"
            >
              <div className="absolute -top-6 -left-6 bg-accent text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg rotate-3 border-2 border-white">
                <Brain size={24} />
              </div>
              <h3 className="text-2xl md:text-3xl font-serif mb-6 text-primary">Der Paradigmenwechsel</h3>
              <p className="text-primary/80 mb-8 leading-relaxed">
                Der Zellkraft-Ansatz beendet das bloße Hoffen. Wir nutzen die <strong>physiologische Logik</strong> deines Körpers, um ihn in einen Zustand der „biologischen Sicherheit“ zu führen. Wir verkaufen kein Wissen. Wir verkaufen Orientierung und Entscheidungssicherheit.
              </p>
              <ul className="space-y-4">
                {[
                  "Klarheit statt Algorithmus-Chaos",
                  "Strategie statt Zufallsprinzip",
                  "Souveränität statt Hilflosigkeit",
                  "Fokus auf messbare biologische Faktoren"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 text-primary font-semibold items-center bg-white/50 p-3 rounded-xl border border-white/60">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Module Grid */}
      <section id="module" className="py-24 bg-white relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6">Deine 6 Schritte zur biologischen Exzellenz</h2>
            <p className="text-xl text-muted-foreground">Wir kombinieren funktionelle Medizin mit fundierter Hebammenkunst für eine lückenlose Erfolgs-Roadmap.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Modul 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="bg-[#fff9f2] p-8 rounded-3xl border border-[#e2d2c2] hover:border-accent/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group relative"
            >
              <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm text-primary border border-border">
                  <Timer size={28} />
              </div>
              <h4 className="text-2xl font-serif text-primary mb-1">Modul 1: Die 90-Tage-Logik</h4>
              <div className="text-sm font-bold text-accent tracking-wide mb-6">Bioenergetisches Zeitfenster</div>
              
              <ul className="space-y-3 mb-6 flex-grow">
                <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-accent shrink-0" /> Die Eizellreifung dauert 90 Tage.</li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-accent shrink-0" /> Deine Maßnahmen von heute bestimmen die Qualität der Eizelle, die in drei Monaten springt.</li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-accent shrink-0" /> Wir laden deine 'Zell-Batterien' gezielt auf.</li>
              </ul>
              
              <div className="pt-4 border-t border-border mt-auto">
                <p className="text-sm font-semibold text-primary"><span className="text-accent uppercase text-xs tracking-wider block mb-1">Ziel:</span> Das Fundament für höchste Zellenergie legen.</p>
              </div>
            </motion.div>

            {/* Modul 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="bg-[#fff9f2] p-8 rounded-3xl border border-[#e2d2c2] hover:border-accent/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group relative"
            >
              <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm text-primary border border-border">
                  <Network size={28} />
              </div>
              <h4 className="text-2xl font-serif text-primary mb-1">Modul 2: Das 5-Systeme-Modell</h4>
              <div className="text-sm font-bold text-accent tracking-wide mb-6">Ganzheitliche Biologie</div>
              
              <ul className="space-y-3 mb-6 flex-grow">
                <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-accent shrink-0" /> Das Zusammenspiel von Nervensystem, Stoffwechsel, Zellkraft und Hormonachse.</li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-accent shrink-0" /> Wie chronischer Stress die Blutzufuhr zu Fortpflanzungsorganen kappt.</li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-accent shrink-0" /> Gezielte Ernährung für optimale Hormonbalance.</li>
              </ul>
              
              <div className="pt-4 border-t border-border mt-auto">
                <p className="text-sm font-semibold text-primary"><span className="text-accent uppercase text-xs tracking-wider block mb-1">Ziel:</span> Stabilität auf allen Ebenen der Fruchtbarkeit herstellen.</p>
              </div>
            </motion.div>

            {/* Modul 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="bg-[#fff9f2] p-8 rounded-3xl border border-[#e2d2c2] hover:border-accent/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group relative"
            >
              <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm text-primary border border-border">
                  <LineChart size={28} />
              </div>
              <h4 className="text-2xl font-serif text-primary mb-1">Modul 3: Daten-Souveränität</h4>
              <div className="text-sm font-bold text-accent tracking-wide mb-6">Das Befund-Board</div>
              
              <ul className="space-y-3 mb-6 flex-grow">
                <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-accent shrink-0" /> Lerne, Befunde nach "entscheidungsrelevant" zu sieben.</li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-accent shrink-0" /> Der Unterschied zwischen bloßen Normwerten und klinischen Optimalwerten.</li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-accent shrink-0" /> Klarheit im Dschungel der Laborwerte erlangen.</li>
              </ul>
              
              <div className="pt-4 border-t border-border mt-auto">
                <p className="text-sm font-semibold text-primary"><span className="text-accent uppercase text-xs tracking-wider block mb-1">Ziel:</span> Radikale Transparenz und Augenhöhe bei ärztlichen Gesprächen.</p>
              </div>
            </motion.div>

            {/* Modul 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="bg-[#fff9f2] p-8 rounded-3xl border border-[#e2d2c2] hover:border-accent/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group relative"
            >
              <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm text-primary border border-border">
                  <HeartPulse size={28} />
              </div>
              <h4 className="text-2xl font-serif text-primary mb-1">Modul 4: Somatische Regulation</h4>
              <div className="text-sm font-bold text-accent tracking-wide mb-6">Biologische Sicherheit</div>
              
              <ul className="space-y-3 mb-6 flex-grow">
                <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-accent shrink-0" /> Kein esoterischer "Entspannungs-Druck".</li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-accent shrink-0" /> Nutzung von 10-Minuten-Protokollen zur Regulation des Nervensystems.</li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-accent shrink-0" /> Dem Körper biologische Sicherheit signalisieren für Einnistung und Erhalt.</li>
              </ul>
              
              <div className="pt-4 border-t border-border mt-auto">
                <p className="text-sm font-semibold text-primary"><span className="text-accent uppercase text-xs tracking-wider block mb-1">Ziel:</span> Den Kampfmodus abschalten und Regeneration aktivieren.</p>
              </div>
            </motion.div>

            {/* Modul 5 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
              className="bg-[#fff9f2] p-8 rounded-3xl border border-[#e2d2c2] hover:border-accent/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group relative"
            >
              <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm text-primary border border-border">
                  <Users size={28} />
              </div>
              <h4 className="text-2xl font-serif text-primary mb-1">Modul 5: Der Partnerfaktor</h4>
              <div className="text-sm font-bold text-accent tracking-wide mb-6">Die anderen 50%</div>
              
              <ul className="space-y-3 mb-6 flex-grow">
                <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-accent shrink-0" /> Spermienqualität als massiver Faktor für Embryonenentwicklung.</li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-accent shrink-0" /> Bioenergetische Optimierung auch für den Mann.</li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-accent shrink-0" /> Die Reduktion von DNA-Fragmentierung durch Mikronährstoffe.</li>
              </ul>
              
              <div className="pt-4 border-t border-border mt-auto">
                <p className="text-sm font-semibold text-primary"><span className="text-accent uppercase text-xs tracking-wider block mb-1">Ziel:</span> Gemeinsame Verantwortung und Optimierung beider Seiten.</p>
              </div>
            </motion.div>

            {/* Modul 6 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
              className="bg-[#fff9f2] p-8 rounded-3xl border border-[#e2d2c2] hover:border-accent/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group relative"
            >
              <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm text-primary border border-border">
                  <Target size={28} />
              </div>
              <h4 className="text-2xl font-serif text-primary mb-1">Modul 6: Plan A, B und C</h4>
              <div className="text-sm font-bold text-accent tracking-wide mb-6">Entscheidungskompetenz</div>
              
              <ul className="space-y-3 mb-6 flex-grow">
                <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-accent shrink-0" /> Schluss mit Handlungsparalyse und Ungewissheit.</li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-accent shrink-0" /> Meilensteine definieren für natürliche Wege oder medizinische Hilfe.</li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-accent shrink-0" /> Wann ist eine Kinderwunschklinik wirklich der nächste Schritt?</li>
              </ul>
              
              <div className="pt-4 border-t border-border mt-auto">
                <p className="text-sm font-semibold text-primary"><span className="text-accent uppercase text-xs tracking-wider block mb-1">Ziel:</span> Eine eiserne Roadmap, die absolute Souveränität verleiht.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Done-for-you Workbook Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Abstract background shape */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 h-full bg-[#fde4c8]/5 blur-[120px] rounded-full z-0" />
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
           <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-7">
                 <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 text-[#fde4c8] text-sm font-bold mb-6 uppercase tracking-widest border border-accent/30 shadow-sm border-[#f07d00]">
                   <Sparkles size={16} /> Zusatzmaterial Inklusive
                 </div>
                 <h2 className="text-4xl lg:text-5xl font-serif text-white mb-6">
                   Senke deinen Mental Load <span className="text-[#fde4c8] italic font-light">sofort.</span>
                 </h2>
                 <p className="text-lg text-[#fde4c8] mb-8 leading-relaxed">
                   Der Kurs liefert dir fertige Werkzeuge, damit du nicht länger raten musst, sondern einfach umsetzen kannst. Jede Teilnehmerin erhält zusätzlich das <strong>Done-for-you Workbook</strong> mit präzisen Werkzeugen für den Alltag.
                 </p>
                 
                 <div className="space-y-6">
                   {[
                     { desc: "Das Befund-Board (Deine Laborwerte analysiert)" },
                     { desc: "Der Roadmap-Canvas (Schritt-für-Schritt Strategie für 90 Tage)" },
                     { desc: "Der Arzt-Leitfaden (10 gezielte Fragen für das nächste Arztgespräch)" }
                   ].map((item, idx) => (
                     <div key={idx} className="flex gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                       <div className="bg-accent text-white p-2 rounded-full shrink-0 h-fit text-xl font-bold w-10 h-10 flex items-center justify-center">
                         {idx + 1}
                       </div>
                       <p className="text-white text-lg font-medium self-center">{item.desc}</p>
                     </div>
                   ))}
                 </div>
              </div>
              
              <div className="lg:col-span-5 flex justify-center">
                 <div className="relative">
                    <div className="absolute inset-0 bg-accent rounded-3xl rotate-6 blur-md opacity-20" />
                    <div className="bg-[#fff9f2] p-8 md:p-12 rounded-3xl shadow-2xl rotate-3 border-4 border-[#e2d2c2] relative">
                       <div className="text-center">
                         <BookOpen className="w-20 h-20 text-accent mx-auto mb-6" />
                         <h3 className="text-3xl font-serif text-primary mb-2">Fruchtbarkeits-Kompass</h3>
                         <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Offizielles Workbook</p>
                         <div className="mt-8 border-t border-[#e2d2c2] pt-6 flex gap-4 justify-center">
                           <Target className="w-6 h-6 text-primary/40" />
                           <ActivitySquare className="w-6 h-6 text-primary/40" />
                         </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#fff9f2] text-center border-t border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">
            Schluss mit dem Prinzip Hoffnung.
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Sichere dir jetzt deinen Platz für das nächste Kurs-Fenster. Wir arbeiten in kleinen, exklusiven Gruppen, um die volle Strategie-Abdeckung zu gewährleisten.
          </p>
          <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-accent text-white px-12 py-5 rounded-xl text-xl font-bold hover:bg-[#e07500] transition-all shadow-xl inline-flex items-center gap-3">
            Bewerbung für den Kurs starten <ArrowRight />
          </Link>
          <p className="text-sm font-bold text-primary/40 uppercase tracking-widest mt-6">
            Nächster Start: Demnächst
          </p>
        </div>
      </section>
    </div>
  );
}
