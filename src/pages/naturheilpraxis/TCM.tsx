import React from "react";
import SEO from "@/components/SEO";
import { ROUTE_PATHS } from "@/lib/index";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Activity, Sparkles, Wind, Sun, Leaf, Info, ThermometerSun, Layers } from "lucide-react";
import SplitScreenHero from "@/components/SplitScreenHero";
import PreisTransparenz from "@/components/PreisTransparenz";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import tcmData from "@/data/content/tcm.json";

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Activity,
  Sparkles,
  Wind,
  Sun,
  Leaf,
  Info,
  Layers
};

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export default function TCM() {
  const { hero, philosophy, pillars, akupunktur, indikationen, pulsdiagnostik, zungendiagnostik, moxa, ernaehrung, schroepfen, akutaping, cta } = tcmData;

  return (
    <div className="bg-background min-h-screen font-sans">
      <SEO 
        title="Traditionelle Chinesische Medizin (TCM) | Naturheilpraxis feminatalis" 
        description="Ganzheitliche Heilung durch Akupunktur, Schröpfen, Moxa und Aku-Taping. Entdecke die Kraft der TCM in der Frauenheilkunde." 
      />

      <SplitScreenHero
        badge={hero.badge}
        title={<>Wieder im Fluss sein: <br /><span className="text-accent italic font-light">{hero.titleAccent}</span></>}
        subtitle={hero.subtitle}
        imageSrc="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop"
        imageAlt="TCM Behandlung und Akupunktur"
        imageKey="img_hero_tcm"
      >
        <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-primary text-white px-10 py-5 rounded-2xl font-bold hover:shadow-2xl transition-all shadow-xl active:scale-95 flex items-center gap-2">
          Analyse-Gespräch anfragen <ArrowRight size={20} />
        </Link>
      </SplitScreenHero>

      {/* Pillars Grid */}
      <section className="py-24 bg-white border-b border-border">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-serif text-primary mb-4 leading-tight">
              Die Säulen deiner <br /><span className="text-accent italic">ganzheitlichen Begleitung</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {pillars.map((item, i) => {
              const IconComponent = iconMap[item.icon];
              return (
                <div key={i} className="bg-slate-50/50 p-10 lg:p-12 rounded-[3.5rem] border border-border hover:border-accent transition-all hover:shadow-2xl flex flex-col group text-left">
                  <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-sm">
                    {IconComponent && <IconComponent className="w-8 h-8 text-accent" />}
                  </div>
                  <h3 className="text-2xl font-serif text-primary font-bold mb-4 text-left">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed font-medium opacity-80 text-left mb-8">{item.desc}</p>
                  <button 
                    onClick={() => scrollTo(item.target)}
                    className="mt-auto text-accent font-bold flex items-center gap-2 hover:gap-4 transition-all w-fit group/btn"
                  >
                    Mehr erfahren <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl lg:text-5xl font-serif text-primary mb-10 leading-tight">
            {philosophy.headline} <br /><span className="text-accent italic">{philosophy.headlineAccent}</span>
          </h2>
          <div className="prose prose-lg mx-auto text-muted-foreground leading-relaxed">
            {philosophy.paragraphs.map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: p }} className={i > 0 ? "mt-6 text-left" : "text-left"} />
            ))}
          </div>
        </div>
      </section>

      {/* Akupunktur Deep Dive Section */}
      <section id="akupunktur" className="py-24 bg-slate-50/50 overflow-hidden scroll-mt-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-10">
              <div>
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="bg-accent/10 text-accent px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block"
                >
                  {akupunktur.badge}
                </motion.span>
                <h2 className="text-3xl lg:text-5xl font-serif text-primary mb-10 leading-tight">
                  {akupunktur.headline} <br /><span className="text-accent italic">{akupunktur.headlineAccent}</span>
                </h2>
                <div className="prose prose-lg text-muted-foreground leading-relaxed space-y-6 text-left">
                  {akupunktur.paragraphs.map((p, i) => (
                    <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
                  ))}
                </div>

                <div className="grid sm:grid-cols-2 gap-6 mt-12">
                   <div className="rounded-[2.5rem] overflow-hidden border border-border shadow-md">
                      <img 
                        src="/akupunktur-modell.png" 
                        alt="Klassisches Akupunktur-Modell mit Meridian-Punkten" 
                        className="w-full h-48 object-cover hover:scale-110 transition-transform duration-700"
                      />
                   </div>
                   <div className="rounded-[2.5rem] overflow-hidden border border-border shadow-md">
                      <img 
                        src="/akupunktur-behandlung.png" 
                        alt="Sanfte Akupunktur-Behandlung im Gesichtsbereich" 
                        className="w-full h-48 object-cover hover:scale-110 transition-transform duration-700"
                      />
                   </div>
                </div>
              </div>

              <div className="p-10 bg-white rounded-[3.5rem] border border-border shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-[5rem] -mr-16 -mt-16 transition-transform group-hover:scale-110" />
                <h4 className="font-bold text-primary mb-6 flex items-center gap-3 text-xl">
                  <Activity size={24} className="text-accent" /> Behandlung & Dauer
                </h4>
                <p className="text-muted-foreground leading-relaxed mb-8 text-left">
                  {akupunktur.behandlung}
                </p>
                <div className="flex flex-wrap gap-4">
                  {akupunktur.badges.map((badge, i) => (
                    <div key={i} className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-full text-xs font-bold text-primary/70 uppercase tracking-widest">
                      <Check size={16} className="text-accent" /> {badge}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white p-8 lg:p-12 rounded-[4rem] border border-border shadow-2xl">
              <div className="mb-10 text-left">
                <h3 className="text-3xl font-serif text-primary mb-4">Akupunktur kann helfen bei:</h3>
                <p className="text-muted-foreground">Klicke auf die Kategorien, um Details zu sehen.</p>
              </div>
              
              <Accordion type="single" collapsible className="w-full space-y-4">
                {indikationen.map((cat) => (
                  <AccordionItem key={cat.id} value={cat.id} className="bg-slate-50/50 px-6 rounded-3xl border border-transparent hover:border-accent/20 transition-all overflow-hidden data-[state=open]:bg-white data-[state=open]:shadow-lg data-[state=open]:border-accent/10">
                    <AccordionTrigger className="text-primary font-bold hover:no-underline py-6 text-lg text-left">
                      {cat.title}
                    </AccordionTrigger>
                    <AccordionContent className="pb-6">
                      <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-left">
                        {cat.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              
              <div className="mt-12 text-center pt-8 border-t border-border">
                 <p className="text-sm text-muted-foreground italic mb-6">
                   Über seltene Nebenwirkungen werden Sie vor der ersten Sitzung ausführlich aufgeklärt.
                 </p>
                 <Link to={ROUTE_PATHS.KINDERWUNSCH} className="bg-accent/5 text-accent px-8 py-3 rounded-2xl font-bold inline-flex items-center gap-2 hover:bg-accent hover:text-white transition-all">
                  Mehr zum Thema Kinderwunsch <ArrowRight size={18} />
                 </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Diagnostics Section */}
      <section id="diagnostik" className="py-24 bg-white overflow-hidden scroll-mt-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-20">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-primary/5 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block"
            >
              Das A und O der TCM
            </motion.span>
            <h2 className="text-3xl lg:text-5xl font-serif text-primary mb-6">Puls- & Zungendiagnostik</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Sie sind das Fundament für ein individuelles Behandlungskonzept. Während die westliche Medizin nur wenige Parameter erfasst, unterscheidet die TCM 28 verschiedene Pulse und hunderte Zungenbilder.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* Pulsdiagnostik */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-slate-50 p-10 lg:p-16 rounded-[4rem] border border-border flex flex-col"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-accent mb-8 shadow-sm">
                <Activity size={32} />
              </div>
              <h3 className="text-3xl font-serif text-primary mb-6">{pulsdiagnostik.headline}</h3>
              
              <div className="mb-8 rounded-3xl overflow-hidden border border-border shadow-inner bg-white">
                <img 
                  src="/pulsdiagnostik.png" 
                  alt="TCM Pulsdiagnostik - Tasten am Handgelenk" 
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              <p className="text-muted-foreground leading-relaxed mb-10 text-left">
                {pulsdiagnostik.text}
              </p>

              <div className="space-y-6 flex-grow">
                <div className="bg-white p-8 rounded-3xl border border-border shadow-sm">
                  <h4 className="text-sm font-bold text-primary uppercase tracking-widest mb-6 border-b border-border pb-3">Organ-Zuordnung</h4>
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <p className="text-xs font-bold text-accent uppercase">Linke Hand</p>
                      <ul className="text-sm space-y-2 text-primary/80">
                        {pulsdiagnostik.linkeHand.map((item, i) => (
                          <li key={i} className="flex justify-between"><span>{item.organ}</span> <span className="text-muted-foreground font-mono italic text-[10px]">{item.pos}</span></li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-3 border-t sm:border-t-0 sm:border-l border-border pt-6 sm:pt-0 sm:pl-8">
                      <p className="text-xs font-bold text-accent uppercase">Rechte Hand</p>
                      <ul className="text-sm space-y-2 text-primary/80">
                        {pulsdiagnostik.rechteHand.map((item, i) => (
                          <li key={i} className="flex justify-between"><span>{item.organ}</span> <span className="text-muted-foreground font-mono italic text-[10px]">{item.pos}</span></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-primary/5 p-6 rounded-2xl flex items-start gap-4">
                  <Info size={20} className="text-primary mt-1 shrink-0" />
                  <p className="text-xs text-primary/70 leading-relaxed italic">
                    {pulsdiagnostik.hinweis}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Zungendiagnostik */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white p-10 lg:p-16 rounded-[4rem] border border-border shadow-2xl flex flex-col"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-accent mb-8 shadow-sm">
                <Leaf size={32} />
              </div>
              <h3 className="text-3xl font-serif text-primary mb-6">{zungendiagnostik.headline}</h3>

              <div className="mb-8 rounded-3xl overflow-hidden border border-border shadow-inner bg-slate-50">
                <img 
                  src="/zungendiagnostik.png" 
                  alt="TCM Zungendiagnostik - Zungenbilder im Vergleich" 
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              <p className="text-muted-foreground leading-relaxed mb-10 text-left">
                {zungendiagnostik.text}
              </p>

              <div className="space-y-6 flex-grow">
                <div className="bg-slate-50 p-8 rounded-3xl border border-border">
                  <h4 className="text-sm font-bold text-primary uppercase tracking-widest mb-6 border-b border-border pb-3 text-left">Wichtige Vorbereitung</h4>
                  <ul className="space-y-4">
                    {zungendiagnostik.vorbereitung.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-primary/70 font-medium">
                        <span className="text-accent"><Check size={16} /></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 text-left">
                  <div className="bg-white p-6 rounded-3xl border border-border shadow-sm">
                    <h5 className="text-[10px] font-bold text-accent uppercase tracking-widest mb-3">Zungenbild-Beispiele</h5>
                    <ul className="text-[11px] space-y-2 text-muted-foreground">
                      {zungendiagnostik.bilder.map((item, i) => (
                        <li key={i}><strong className="text-primary">{item.label}</strong> {item.desc}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-3xl border border-border shadow-sm">
                    <h5 className="text-[10px] font-bold text-accent uppercase tracking-widest mb-3">Organ-Zonen</h5>
                    <ul className="text-[11px] space-y-2 text-muted-foreground">
                      {zungendiagnostik.zonen.map((item, i) => (
                        <li key={i}><strong className="text-primary">{item.label}</strong> {item.desc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Pricing Info Card Integration */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-20 p-12 lg:p-16 bg-primary text-white rounded-[4rem] shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-bl-[200px] -z-0" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="text-left md:w-2/3">
                <h3 className="text-3xl font-serif mb-6">Deine individuelle TCM-Analyse</h3>
                <p className="text-primary-foreground/80 text-lg leading-relaxed mb-0">
                  {akupunktur.preisHint}
                </p>
              </div>
              <div className="flex flex-col items-center md:items-end gap-6 md:w-1/3">
                <div className="text-center md:text-right">
                  <span className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-1">Honorar</span>
                  <span className="text-4xl font-bold">{akupunktur.preis}</span>
                </div>
                <Link to={ROUTE_PATHS.PREISLISTE} className="bg-white text-primary px-10 py-4 rounded-2xl font-bold hover:bg-accent hover:text-white transition-all flex items-center gap-2">
                  Preise ansehen <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Moxa-Therapie Section */}
      <section id="moxa" className="py-24 bg-amber-50/30 overflow-hidden relative scroll-mt-24">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent" />
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block"
              >
                {moxa.badge}
              </motion.span>
              <h2 className="text-3xl lg:text-5xl font-serif text-primary mb-8 leading-tight">
                {moxa.headline} <br /><span className="text-orange-600 italic">{moxa.headlineAccent}</span>
              </h2>
              <div className="prose prose-lg text-muted-foreground leading-relaxed space-y-6 text-left">
                {moxa.paragraphs.map((p, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
                ))}
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mt-12">
                 <div className="rounded-[2.5rem] overflow-hidden border border-orange-100 shadow-md bg-white">
                    <img 
                      src="/moxa-zigarre.png" 
                      alt="Anwendung einer Moxa-Zigarre zur Erwärmung von Akupunkturpunkten" 
                      className="w-full h-48 object-cover hover:scale-110 transition-transform duration-700"
                    />
                 </div>
                 <div className="rounded-[2.5rem] overflow-hidden border border-border shadow-md bg-white">
                    <img 
                      src="/moxa-box.png" 
                      alt="Klassische Moxa-Box zur großflächigen Wärmebehandlung" 
                      className="w-full h-48 object-cover hover:scale-110 transition-transform duration-700"
                    />
                 </div>
              </div>

              <div className="mt-12 grid sm:grid-cols-2 gap-6">
                 {moxa.methoden.map((m, i) => (
                    <div key={i} className="bg-white p-6 rounded-3xl border border-orange-100 shadow-sm hover:shadow-md transition-shadow text-left">
                      <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                        <Check size={16} className="text-orange-600" /> {m.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                    </div>
                 ))}
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
               {/* Special Application: Breech Baby */}
               <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 className="bg-white p-10 lg:p-12 rounded-[4rem] border border-orange-200 shadow-2xl relative overflow-hidden group"
               >
                 <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-[5rem] -mr-16 -mt-16 group-hover:scale-110 transition-transform" />
                 <h3 className="text-2xl font-serif text-primary mb-6 flex items-center gap-3">
                   <Sun size={28} className="text-orange-600" /> Sanfte Wendung
                 </h3>
                 <p className="text-muted-foreground leading-relaxed mb-8 text-left">
                   <span dangerouslySetInnerHTML={{ __html: moxa.wendung }} />
                 </p>
                 <Link to={ROUTE_PATHS.HEBAMMENSPRECHSTUNDE} className="text-orange-600 font-bold flex items-center gap-2 hover:gap-4 transition-all">
                   Mehr zur Hebammenbegleitung <ArrowRight size={18} />
                 </Link>
               </motion.div>

               {/* Contraindications */}
               <div className="bg-primary text-white p-10 rounded-[3.5rem] shadow-xl">
                 <h4 className="text-accent font-bold uppercase tracking-widest text-xs mb-6">Wann nicht moxen?</h4>
                 <ul className="space-y-4 text-sm text-white/70">
                   {moxa.kontraindikationen.map((item, i) => (
                     <li key={i} className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-accent rounded-full" /> {item}</li>
                   ))}
                 </ul>
               </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-muted-foreground italic text-sm">
              {moxa.preisHint}
            </p>
          </div>
        </div>
      </section>

      {/* 5-Elemente-Ernährung Section */}
      <section id="ernaehrung" className="py-24 bg-white overflow-hidden relative scroll-mt-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-20">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-accent/5 text-accent px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block"
            >
              {ernaehrung.badge}
            </motion.span>
            <h2 className="text-3xl lg:text-5xl font-serif text-primary mb-6 leading-tight">
              {ernaehrung.headline} <br /><span className="text-accent italic">{ernaehrung.headlineAccent}</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {ernaehrung.intro}
            </p>
          </div>

          <div className="flex justify-center mb-20">
             <div className="bg-white p-8 lg:p-12 rounded-[4rem] border border-border shadow-2xl max-w-2xl w-full">
                <img 
                  src="/fuenf-elemente-diagramm.png" 
                  alt="Das Gesetz der 5 Wandlungsphasen - Zyklus von Holz, Feuer, Erde, Metall und Wasser" 
                  className="w-full h-auto object-contain"
                />
                <div className="mt-8 text-center">
                   <p className="text-sm text-muted-foreground italic">
                     Die Wandlungsphasen verdeutlichen das Zusammenspiel der Organe und deren gegenseitige Unterstützung und Kontrolle.
                   </p>
                </div>
             </div>
          </div>

          <div className="grid lg:grid-cols-5 gap-4 mb-20">
            {ernaehrung.elemente.map((e, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 p-8 rounded-[2.5rem] border border-border flex flex-col items-center text-center group hover:-translate-y-2 transition-transform hover:border-accent/20 hover:bg-white hover:shadow-xl"
              >
                <span className="text-2xl font-serif font-bold mb-4 text-primary">{e.element}</span>
                <div className="space-y-2 text-xs font-medium opacity-70">
                  <p><strong>Saison:</strong> {e.season}</p>
                  <p><strong>Geschmack:</strong> {e.taste}</p>
                  <p><strong>Organ:</strong> {e.organ}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
             <div className="bg-slate-50 p-10 lg:p-16 rounded-[4rem] border border-border">
                <h3 className="text-3xl font-serif text-primary mb-8">Thermische Wirkung</h3>
                <p className="text-muted-foreground mb-10 leading-relaxed text-left">
                  Jedes Lebensmittel hat eine thermische Botschaft an deinen Körper. Wir nutzen diese, um Ungleichgewichte (wie Hitze oder Kälte) gezielt auszugleichen.
                </p>
                <div className="space-y-4">
                  {ernaehrung.thermisch.map((t, i) => (
                    <div key={i} className="bg-white p-6 rounded-3xl border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4 group hover:border-accent/20 transition-colors">
                      <div className="text-left">
                        <span className="block text-xs font-bold text-accent uppercase tracking-widest mb-1">{t.label}</span>
                        <p className="text-sm font-medium text-primary">{t.examples}</p>
                      </div>
                      <div className="text-left sm:text-right shrink-0">
                        <span className="text-[10px] text-muted-foreground italic">{t.effect}</span>
                      </div>
                    </div>
                  ))}
                </div>
             </div>

             <div className="space-y-12">
                <div className="prose prose-lg text-muted-foreground leading-relaxed text-left">
                  <h3 className="text-primary font-serif">Individuelle Ernährungsberatung</h3>
                  <p>{ernaehrung.beratung.text1}</p>
                  <p>{ernaehrung.beratung.text2}</p>
                </div>

                <div className="p-10 bg-accent/5 rounded-[3.5rem] border border-accent/10 flex flex-col md:flex-row items-center gap-10">
                   <div className="text-left flex-grow">
                      <h4 className="text-2xl font-serif text-primary mb-2">Deine Beratung</h4>
                      <p className="text-muted-foreground text-sm">Individueller Plan für deine Konstitution.</p>
                   </div>
                   <div className="text-center md:text-right shrink-0">
                      <span className="block text-[10px] font-bold text-accent uppercase tracking-widest mb-1">Honorar</span>
                      <span className="text-3xl font-bold text-primary">{ernaehrung.beratung.preis}</span>
                   </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {ernaehrung.beratung.tags.map((tag, i) => (
                    <div key={i} className="bg-slate-50 p-4 rounded-2xl text-center border border-border">
                      <span className="block text-xs font-bold text-primary mb-1">{tag.split(' ')[0]}</span>
                      <span className="text-[10px] text-muted-foreground">{tag.split(' ').slice(1).join(' ')}</span>
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Schröpf-Therapie Section */}
      <section id="schroepfen" className="py-24 bg-slate-50/50 overflow-hidden relative scroll-mt-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-10">
              <div>
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="bg-accent/10 text-accent px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block"
                >
                  {schroepfen.badge}
                </motion.span>
                <h2 className="text-3xl lg:text-5xl font-serif text-primary mb-10 leading-tight">
                  {schroepfen.headline} <br /><span className="text-accent italic">{schroepfen.headlineAccent}</span>
                </h2>
                <div className="prose prose-lg text-muted-foreground leading-relaxed space-y-6 text-left">
                  {schroepfen.paragraphs.map((p, i) => (
                    <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
                  ))}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                 <div className="rounded-[2.5rem] overflow-hidden border border-border shadow-md bg-white">
                    <img 
                      src="/schroepfen-feuer.png" 
                      alt="Traditionelles Feuerschröpfen zur Vakuumerzeugung" 
                      className="w-full h-48 object-cover hover:scale-110 transition-transform duration-700"
                    />
                 </div>
                 <div className="rounded-[2.5rem] overflow-hidden border border-border shadow-md bg-white">
                    <img 
                      src="/schroepfen-blutig.png" 
                      alt="Hajamat - Blutiges Schröpfen zur Ausleitung" 
                      className="w-full h-48 object-cover hover:scale-110 transition-transform duration-700"
                    />
                 </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                 {schroepfen.methoden.map((s, i) => (
                    <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-border shadow-sm hover:shadow-md transition-all text-left">
                      <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full" /> {s.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                    </div>
                 ))}
              </div>
            </div>

            <div className="space-y-8">
               <div className="bg-white p-10 lg:p-12 rounded-[4rem] border border-border shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-[5rem] -mr-16 -mt-16 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-serif text-primary mb-8">Einsatzmöglichkeiten</h3>
                  <div className="grid sm:grid-cols-2 gap-6 text-left">
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      {schroepfen.einsatz.slice(0, 4).map((item, i) => (
                        <li key={i} className="flex items-center gap-2"><Check size={14} className="text-accent" /> {item}</li>
                      ))}
                    </ul>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      {schroepfen.einsatz.slice(4).map((item, i) => (
                        <li key={i} className="flex items-center gap-2"><Check size={14} className="text-accent" /> {item}</li>
                      ))}
                    </ul>
                  </div>
               </div>

               <div className="bg-primary text-white p-10 rounded-[3.5rem] shadow-xl">
                 <h4 className="text-accent font-bold uppercase tracking-widest text-xs mb-6">Wichtige Gegenanzeigen</h4>
                 <div className="grid sm:grid-cols-2 gap-8 text-xs text-white/70">
                    <div>
                      <p className="font-bold text-white mb-3">Trocken:</p>
                      <ul className="space-y-2">
                        {schroepfen.kontraindikationen.trocken.map((item, i) => (
                          <li key={i}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-bold text-white mb-3">Zusätzlich bei blutigem:</p>
                      <ul className="space-y-2">
                        {schroepfen.kontraindikationen.blutig.map((item, i) => (
                          <li key={i}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                 </div>
               </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-muted-foreground italic text-sm">
              {schroepfen.preisHint}
            </p>
          </div>
        </div>
      </section>

      {/* Aku-Taping Section */}
      <section id="akutaping" className="py-24 bg-white overflow-hidden relative scroll-mt-24">
         <div className="container mx-auto px-4 max-w-7xl">
           <div className="text-center mb-20">
             <motion.span 
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="bg-accent/5 text-accent px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block"
             >
               {akutaping.badge}
             </motion.span>
             <h2 className="text-3xl lg:text-5xl font-serif text-primary mb-6 leading-tight">
               {akutaping.headline} <br /><span className="text-accent italic">{akutaping.headlineAccent}</span>
             </h2>
             <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
               {akutaping.intro}
             </p>

             <div className="grid sm:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
                <div className="rounded-[2.5rem] overflow-hidden border border-border shadow-md bg-white">
                   <img 
                     src="/akutaping-nacken.png" 
                     alt="Aku-Taping Anwendung im Nacken- und Schulterbereich" 
                     className="w-full h-56 object-cover hover:scale-110 transition-transform duration-700"
                   />
                </div>
                <div className="rounded-[2.5rem] overflow-hidden border border-border shadow-md bg-white">
                   <img 
                     src="/akutaping-schwangerschaft.png" 
                     alt="Schwangerschafts-Taping zur Unterstützung des Bauches" 
                     className="w-full h-56 object-cover hover:scale-110 transition-transform duration-700"
                   />
                </div>
             </div>
           </div>

           <div className="grid lg:grid-cols-3 gap-8 mb-20">
             {akutaping.features.map((feature, i) => {
               const IconComponent = iconMap[feature.icon];
               return (
                 <div key={i} className="bg-slate-50 p-10 rounded-[3.5rem] border border-border text-left group hover:border-accent/20 transition-all">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-accent mb-6 shadow-sm group-hover:bg-accent group-hover:text-white transition-colors">
                       {IconComponent && <IconComponent size={24} />}
                    </div>
                    <h4 className="text-xl font-bold text-primary mb-4">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.text}
                    </p>
                 </div>
               );
             })}
           </div>

           <div className="grid lg:grid-cols-2 gap-12 items-stretch">
              <div className="bg-primary text-white p-12 lg:p-16 rounded-[4rem] shadow-2xl flex flex-col justify-between">
                 <div>
                    <h3 className="text-3xl font-serif mb-8">Einsatzgebiete</h3>
                    <ul className="space-y-4 text-primary-foreground/90">
                       {akutaping.einsatz.map((item, i) => (
                         <li key={i} className="flex items-start gap-3"><Check size={18} className="text-accent mt-1 shrink-0" /> {item}</li>
                       ))}
                    </ul>
                 </div>
                 <div className="mt-12 pt-8 border-t border-white/10">
                    <button 
                      onClick={() => scrollTo("akupunktur")}
                      className="text-accent font-bold flex items-center gap-2 hover:gap-4 transition-all"
                    >
                      Kombination mit Akupunktur <ArrowRight size={18} />
                    </button>
                 </div>
              </div>

              <div className="space-y-8">
                 <div className="bg-slate-50 p-10 lg:p-12 rounded-[4rem] border border-border text-left">
                    <h4 className="text-primary font-bold uppercase tracking-widest text-xs mb-6">Wann wir nicht tapen</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {akutaping.kontraText}
                    </p>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                       {akutaping.kontraindikationen.map((item, i) => (
                         <li key={i} className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-accent rounded-full" /> {item}</li>
                       ))}
                    </ul>
                 </div>

                 <div className="p-10 bg-accent/5 rounded-[3.5rem] border border-accent/10 flex items-center justify-between gap-6">
                    <div className="text-left">
                       <h5 className="font-bold text-primary">Behandlungskosten</h5>
                       <p className="text-xs text-muted-foreground">{akutaping.preisHint}</p>
                    </div>
                    <div className="text-right">
                       <span className="text-3xl font-bold text-primary">100,- € <span className="text-sm font-normal text-muted-foreground">/ Std.</span></span>
                       <p className="text-[10px] text-accent font-bold uppercase mt-1">zzgl. Material</p>
                    </div>
                 </div>
              </div>
           </div>
         </div>
      </section>

      {/* Balance Section CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-primary text-white p-12 lg:p-24 rounded-[5rem] shadow-2xl relative overflow-hidden text-left mb-24">
             <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-accent/20 -mr-64 -mt-64 rounded-full blur-[120px] opacity-20 text-left"></div>
             <div className="flex flex-col lg:flex-row gap-16 items-center text-left relative z-10">
                <div className="lg:w-2/3 text-left">
                  <h2 className="text-3xl lg:text-5xl font-serif mb-8 text-white font-bold leading-tight text-left">{cta.headline}</h2>
                  <p className="text-xl opacity-90 mb-10 leading-relaxed font-medium text-left">
                    {cta.quote}
                  </p>
                  <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-white text-primary px-12 py-5 rounded-2xl font-bold hover:bg-accent hover:text-white transition-all shadow-xl inline-flex items-center gap-3">
                    Beratungstermin anfragen <ArrowRight size={20} />
                  </Link>
                </div>
                <div className="lg:w-1/3 bg-white/10 backdrop-blur-md p-12 rounded-[4rem] border border-white/20 text-center">
                   <h4 className="text-accent font-serif font-bold text-2xl mb-6">Qi-Check</h4>
                   <p className="text-lg leading-relaxed text-white font-medium italic text-left">
                     {cta.qiCheck}
                   </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      <PreisTransparenz 
        preisHint="TCM & Akupunktur" 
        hinweis="Abrechnung nach GebüH. Private Kassen übernehmen i.d.R. die Kosten."
      />
    </div>
  );
}