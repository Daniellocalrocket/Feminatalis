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
  HeartPulse
} from "lucide-react";
import { motion } from "framer-motion";

export default function PremiumZellkraftKurs() {
  return (
    <div className="bg-background min-h-screen text-foreground font-sans">
      <SEO 
        title="Der Zellkraft-Geburtskompass | Premiumkurs" 
        description="Werde von der Informations-Empfängerin zur Architektin der kindlichen Entwicklung. Tiefe bioenergetische Optimierung für eine sichere Geburt." 
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
               <Zap size={16} className="text-accent" /> Premium Kursprogramm
             </div>
            <h1 className="text-5xl md:text-7xl font-serif text-primary mb-6 leading-[1.1]">
              Der Zellkraft- <br />
              Geburtskompass.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl">
              Transformiere dich von der bloßen Informationsempfängerin zur informierten <strong className="text-primary">Architektin der kindlichen Entwicklung</strong>. 
              Wir ersetzen alte Mythen durch biologische Wahrheiten – mit radikalem Fokus auf bioenergetische Optimierung (Mitochondrien) und physiologischer Sicherheit.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
               <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-accent text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 hover:bg-[#e07500] flex items-center justify-center gap-3 group text-lg">
                 Jetzt bewerben <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-600 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
                Der Status Quo
              </div>
              <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6 leading-[1.15]">
                Warum Standard-Vorbereitung oft versagt.
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Die moderne Schwangere ertrinkt in einem Meer aus Widersprüchen. Zwischen Google-Diagnosen, YouTube-Videos und pauschalen Ratschlägen wie „Du musst dich einfach nur entspannen“ entsteht kein Gefühl der Sicherheit – sondern subtiler Druck, Überforderung und Handlungsparalyse.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed font-medium">
                Das Problem: Reine Anatomie und pures „Mindset“ reichen nicht aus.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Wenn dein Körper auf zellulärer Ebene im energetischen „Dispo“ ist, nützt auch das beste mentale Training unter der Geburt nichts. Wenn der zelluläre Akku (die Mitochondrien) über die Schwangerschaft hinweg ausgelaugt wurde, stoppen Wehen und Interventionen werden unausweichlich. Herkömmliche Kurse kratzen nur an der Oberfläche – sie lassen die <strong>Zellbiologie</strong> völlig außen vor.
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
              <h3 className="text-2xl md:text-3xl font-serif text-primary mb-6">Die biologische Lösung</h3>
              <p className="text-primary/80 mb-8 leading-relaxed">
                Dieser Kurs ist anders. Wir rüsten dich mit kompromisslosen biologischen Fakten aus. Du lernst nicht nur Atmen, sondern wie du die <strong>100.000 Mitochondrien in deiner Eizelle</strong> vor Toxinen schützt und die zukünftige hormonelle sowie kognitive Gesundheit deines Kindes durch hochverfügbare Nährstoffe (Epigenetik) aktiv programmierst.
              </p>
              <ul className="space-y-4">
                {[
                  "Biologische Wahrheiten statt veralteter Mythen",
                  "Schutz vor dem metabolischen „Überwinterungsmodus“",
                  "Aktive Signalführung durch das Nervensystem",
                  "Tiefgreifende bioenergetische Optimierung"
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
            <p className="text-xl text-muted-foreground">Wir beenden das Rätselraten und die Handlungsparalyse durch tiefgreifende, anwendbare Physiologie.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Modul 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="bg-[#fff9f2] p-8 rounded-3xl border border-[#e2d2c2] hover:border-accent/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group relative"
            >
              <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm text-primary border border-border">
                  <ShieldCheck size={28} />
              </div>
              <h4 className="text-2xl font-serif text-primary mb-1">Modul 1: Der Paradigmenwechsel</h4>
              <div className="text-sm font-bold text-accent tracking-wide mb-6">Biologische Wahrheit statt Mythen</div>
              
              <ul className="space-y-3 mb-6 flex-grow">
                <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" /> Warum „Guter Hoffnung sein“ eine präzise Strategie erfordert</li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" /> Entlarvung populärer Ernährungsmythen: Die Wahrheit über fötale Baustoffe</li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" /> Wie deine Mahlzeiten die genetische Expression deines Babys manipulieren</li>
              </ul>
              
              <div className="pt-4 border-t border-border mt-auto">
                <p className="text-sm font-semibold text-primary"><span className="text-accent uppercase text-xs tracking-wider block mb-1">Transformation:</span> Von der tiefen Angst vor „falscher“ Ernährung hin zur extremen Wertschätzung hochverfügbarer Medizin.</p>
              </div>
            </motion.div>

            {/* Modul 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="bg-[#fff9f2] p-8 rounded-3xl border border-[#e2d2c2] hover:border-accent/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group relative"
            >
              <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm text-primary border border-border">
                  <BatteryCharging size={28} />
              </div>
              <h4 className="text-2xl font-serif text-primary mb-1">Modul 2: Die Zell-Batterien</h4>
              <div className="text-sm font-bold text-accent tracking-wide mb-6">Mitochondrien & Fötale Energie</div>
              
              <ul className="space-y-3 mb-6 flex-grow">
                <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" /> Das versteckte zelluläre Kraftwerk, das über gesundes Wachstum entscheidet</li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" /> Identifikation tückischer, vermeintlich „gesunder“ Alltagsgifte, die Energie drosseln</li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" /> Gezielte Hebel und Rhythmen zur massiven Steigerung der fötalen Energie</li>
              </ul>
              
              <div className="pt-4 border-t border-border mt-auto">
                <p className="text-sm font-semibold text-primary"><span className="text-accent uppercase text-xs tracking-wider block mb-1">Transformation:</span> Ersetzung von Reizüberflutung und Müdigkeit durch eine Strategie der radikalen Mitochondrien-Biogenese.</p>
              </div>
            </motion.div>

            {/* Modul 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="bg-[#fff9f2] p-8 rounded-3xl border border-[#e2d2c2] hover:border-accent/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group relative"
            >
              <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm text-primary border border-border">
                  <Brain size={28} />
              </div>
              <h4 className="text-2xl font-serif text-primary mb-1">Modul 3: Baustoffe der Exzellenz</h4>
              <div className="text-sm font-bold text-accent tracking-wide mb-6">Gehirn-, Retina- & Organentwicklung</div>
              
              <ul className="space-y-3 mb-6 flex-grow">
                <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" /> Das essentielle Nährstoff-Duo für die ungestörte kognitive Entwicklung deines Kindes</li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" /> Kritische Kofaktoren für robuste Nervenisolierung und fehlerfreien Knochenaufbau</li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" /> Radikale Absicherung gegen versteckte strukturelle Defizite</li>
              </ul>
              
              <div className="pt-4 border-t border-border mt-auto">
                <p className="text-sm font-semibold text-primary"><span className="text-accent uppercase text-xs tracking-wider block mb-1">Transformation:</span> Abkehr von minderwertigen synthetischen Elementen hin zu einer durchdachten „Real Food“-Matrix.</p>
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
              <h4 className="text-2xl font-serif text-primary mb-1">Modul 4: Metabolische Stabilität</h4>
              <div className="text-sm font-bold text-accent tracking-wide mb-6">Das biochemische Gleichgewicht</div>
              
              <ul className="space-y-3 mb-6 flex-grow">
                <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" /> Die verheerenden Effekte hormoneller Achterbahnfahrten auf dein Baby</li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" /> Warum dein Stoffwechsel plötzlich in den entzündlichen „Überwinterungsmodus“ kippt</li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" /> Eine Ernährungssystematik, die hormonelle Stabilität ohne lästigen Verzicht garantiert</li>
              </ul>
              
              <div className="pt-4 border-t border-border mt-auto">
                <p className="text-sm font-semibold text-primary"><span className="text-accent uppercase text-xs tracking-wider block mb-1">Transformation:</span> Ersetzung panischer Hungerattacken durch fundamentale Sättigung und metabolische Dauer-Stabilität.</p>
              </div>
            </motion.div>

            {/* Modul 5 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
              className="bg-[#fff9f2] p-8 rounded-3xl border border-[#e2d2c2] hover:border-accent/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group relative"
            >
              <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm text-primary border border-border">
                  <Network size={28} />
              </div>
              <h4 className="text-2xl font-serif text-primary mb-1">Modul 5: Das Betriebssystem</h4>
              <div className="text-sm font-bold text-accent tracking-wide mb-6">Nervensystem & Geburtsreife</div>
              
              <ul className="space-y-3 mb-6 flex-grow">
                <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" /> Geheime Zusammenhänge: Wie der unbewusste Kampfmodus die Blutzufuhr abdreht</li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" /> Kurz-Protokolle zur blitzschnellen Signal-Umschaltung des zentralen Nervensystems</li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" /> Neurobiologische Hebel für maximale zelluläre Regeneration in der Nacht</li>
              </ul>
              
              <div className="pt-4 border-t border-border mt-auto">
                <p className="text-sm font-semibold text-primary"><span className="text-accent uppercase text-xs tracking-wider block mb-1">Transformation:</span> Weg vom stressgetriebenen Informations-Overload hin zur aktiven, spürbaren Regulierung.</p>
              </div>
            </motion.div>

            {/* Modul 6 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
              className="bg-[#fff9f2] p-8 rounded-3xl border border-[#e2d2c2] hover:border-accent/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group relative"
            >
              <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm text-primary border border-border">
                  <MapIcon size={28} />
              </div>
              <h4 className="text-2xl font-serif text-primary mb-1">Modul 6: Die Roadmap</h4>
              <div className="text-sm font-bold text-accent tracking-wide mb-6">Entscheidungssicherheit & 4. Trimester</div>
              
              <ul className="space-y-3 mb-6 flex-grow">
                <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" /> Dein psychologischer Panzer: Die Struktur-Matrix zur absoluten Souveränität</li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" /> Welche exakten klinischen Werte deine Stillzeit und Heilung definitiv garantieren</li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" /> Ein Fahrplan gegen den "hormonellen Absturz" nach den ersten 90 Tagen</li>
              </ul>
              
              <div className="pt-4 border-t border-border mt-auto">
                <p className="text-sm font-semibold text-primary"><span className="text-accent uppercase text-xs tracking-wider block mb-1">Transformation:</span> Vom Gefühl der Ausgeliefertheit hin zur eisernen Roadmap, die mentale Würde bewahrt.</p>
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
                 <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 text-accent-foreground text-sm font-bold mb-6 uppercase tracking-widest border border-accent/30 shadow-sm border-[#f07d00]">
                   <Sparkles size={16} /> Zusatzmaterial Inklusive
                 </div>
                 <h2 className="text-4xl lg:text-5xl font-serif text-white mb-6">
                   Deine persönliche, <br/> biologische Landkarte.
                 </h2>
                 <p className="text-lg text-[#fde4c8] mb-8 leading-relaxed">
                   Der Kurs lässt dich mit all dem Wissen nicht allein. Jede Teilnehmerin erhält zusätzlich das <strong>Done-for-you Workbook</strong> mit präzisen Werkzeugen für den Alltag.
                 </p>
                 
                 <div className="space-y-6">
                   {[
                     { desc: "Das Befund-Board (Deine Laborwerte analysiert)" },
                     { desc: "Der Roadmap-Canvas (Schritt-für-Schritt Strategie)" },
                     { desc: "Spezifische Animal-Based-Protokolle" }
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
                         <h3 className="text-3xl font-serif text-primary mb-2">Zellkraft-Kompass</h3>
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
            Bereit, echte Verantwortung zu übernehmen?
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Zellulare Energie, neurologische Sicherheit und starke Baustoffe. Werde jetzt zur Gestalterin der Biologie deines Babys.
          </p>
          <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-accent text-white px-12 py-5 rounded-xl text-xl font-bold hover:bg-[#e07500] transition-all shadow-xl inline-flex items-center gap-3">
            Bewerbung für den Zellkraft-Kurs starten <ArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
}
