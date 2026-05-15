import React from "react";
import SEO from "@/components/SEO";
import { ROUTE_PATHS } from "@/lib/index";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Activity, Sparkles, Wind, Sun, Leaf, Info, ThermometerSun, Layers } from "lucide-react";
import SplitScreenHero from "@/components/SplitScreenHero";
import PreisTransparenz from "@/components/PreisTransparenz";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

export default function TCM() {
  const categories = [
    {
      id: "schmerz",
      title: "Schmerztherapie",
      items: ["Alle Schmerzarten & Schmerzzustände", "Kopfschmerzen & Migräne", "Rücken- & Gelenkschmerzen (z.B. chronische Knieschmerzen, M. Bechterew)", "Fibromyalgie", "Menstruationsschmerzen", "Postoperativer & posttraumatischer Schmerz", "Tumorschmerzen"]
    },
    {
      id: "allergie",
      title: "Allergien & Atemwege",
      items: ["Heuschnupfen, Neurodermitis, allergisches Asthma", "Nahrungsmittelunverträglichkeiten", "Akute Bronchitiden, Sinusitis, Rhinitis", "Hyperreagibles Bronchialsystem", "COPD (z.B. chron. Bronchitis), Asthma"]
    },
    {
      id: "hno-augen",
      title: "HNO & Augen",
      items: ["Allergischer Schnupfen", "(Chron.) Entzündungen der Nebenhöhlen & Mandeln", "Innen- & Mittelohrentzündung", "Hörsturz, Tinnitus, Schwindel", "Entzündungen des Auges", "Abnehmende Sehkraft, Glaukom, Makuladegeneration"]
    },
    {
      id: "herz-magen",
      title: "Herz, Kreislauf & Verdauung",
      items: ["Herzrhythmusstörungen", "Hyper-/Hypotonie (Blutdruck)", "Durchblutungsstörungen", "Funktionelle Magen-Darm-Störungen (Reizdarm, Reflux)", "Verstopfung/Durchfall", "Gastritis, Geschwüre, M. Crohn, Colitis ulcerosa"]
    },
    {
      id: "psyche",
      title: "Psyche, Nerven & Neurologie",
      items: ["Schlaflosigkeit", "Innere Unruhe & Reizbarkeit", "Erschöpfungszustände (Burn-Out)", "Spannungskopfschmerz / Migräne", "Trigeminus- & Zoster-Neuralgie", "Polyneuropathie", "Depressive Verstimmungen", "Angstzustände"]
    },
    {
      id: "gynaekologie",
      title: "Gynäkologie & Urogenital",
      items: ["Zyklusstörungen & Wechseljahrsbeschwerden", "Entzündungen der weiblichen Organe", "Blasen- & Nierenentzündung", "Beckenbodenschwäche (Inkontinenz)", "Prostataprobleme", "Impotenz / Frigidität"]
    },
    {
      id: "haut",
      title: "Hauterkrankungen",
      items: ["Neurodermitis, atopisches Ekzem", "Entzündliche Hauterkrankungen", "Akne vulgaris, Furunkulose", "Herpes-Infektionen", "Psoriasis (Schuppenflechte)", "Nesselsucht"]
    },
    {
      id: "kinderwunsch",
      title: "Rund ums Kinderkriegen",
      items: ["Kinderwunschbehandlung (Mann & Frau)", "Schwangerschaftsbeschwerden", "Geburtsvorbereitung", "Erschöpfung nach der Geburt (z.B. Blutverlust)", "Stillprobleme (Milchstau oder Milchmangel)"]
    },
    {
      id: "bewegung",
      title: "Stütz- & Bewegungsapparat",
      items: ["HWS-, BWS-, LWS-Syndrom", "Rheuma, Fibromyalgie", "Arthritis, Arthrose", "Bandscheibenvorfall", "Tennisellbogen & Golfer-Arm", "Karpaltunnel-Syndrom"]
    },
    {
      id: "begleit",
      title: "Begleittherapie",
      items: ["Linderung von Chemotherapie-Nebenwirkungen", "Allgemeine Immunschwäche", "Stoffwechselstörungen (Diabetes, Übergewicht)", "Hormonstörungen (Schilddrüse)", "Regeneration nach Operationen"]
    }
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-background min-h-screen font-sans">
      <SEO 
        title="Traditionelle Chinesische Medizin (TCM) | Naturheilpraxis feminatalis" 
        description="Ganzheitliche Heilung durch Akupunktur, Schröpfen, Moxa und Aku-Taping. Entdecke die Kraft der TCM in der Frauenheilkunde." 
      />

      <SplitScreenHero
        badge="Traditionelle Chinesische Medizin"
        title={<>Wieder im Fluss sein: <br /><span className="text-accent italic font-light">TCM & Frauenheilkunde</span></>}
        subtitle="Wenn das Qi frei fließt, ist der Mensch gesund. Wir nutzen jahrtausendealte Weisheit, um Blockaden zu lösen, deine Selbstheilungskräfte zu wecken und Yin und Yang wieder in Einklang zu bringen. Sanft, ganzheitlich und tief wirksam."
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
            <h2 className="text-3xl lg:text-5xl font-serif text-primary mb-4 leading-tight">Die Säulen deiner <br /><span className="text-accent italic">ganzheitlichen Begleitung</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {[
              { title: "Zungen- & Pulsdiagnostik", desc: "Die Landkarte deines Körpers. Wir lesen an Puls und Zunge ab, wo deine Energie stagniert oder ein Mangel besteht.", icon: <Activity className="w-8 h-8 text-accent" />, target: "diagnostik" },
              { title: "5-Elemente-Ernährung", desc: "Nahrung als Medizin. Wir erstellen einen Plan, der exakt zu deinem Konstitutionstyp passt – für eine starke Mitte.", icon: <Leaf className="w-8 h-8 text-accent" />, target: "ernaehrung" },
              { title: "Moxa & Wärme", desc: "Das Verglimmen von Beifuß bringt tief gehende Wärme bei Erschöpfung, Kältegefühl und Kinderwunsch.", icon: <Sun className="w-8 h-8 text-accent" />, target: "moxa" },
              { title: "Schröpf-Therapie (Hajamat)", desc: "Lösen von tiefen muskulären Stagnationen, Ausleitung pathogener Faktoren und Aktivierung des Lymphflusses.", icon: <Wind className="w-8 h-8 text-accent" />, target: "schroepfen" },
              { title: "Akupunktur & De-Qi", desc: "Durch präzise Nadelungen regulieren wir das Nervensystem und lösen Blockaden für einen freien Energiefluss.", icon: <Sparkles className="w-8 h-8 text-accent" />, target: "akupunktur" },
              { title: "Aku-Taping", desc: "Elastische Tapes entlang der Meridiane stimulieren Akupunkturpunkte sanft über die Hautverschiebung.", icon: <Layers className="w-8 h-8 text-accent" />, target: "akutaping" }
            ].map((item, i) => (
              <div key={i} className="bg-slate-50/50 p-10 lg:p-12 rounded-[3.5rem] border border-border hover:border-accent transition-all hover:shadow-2xl flex flex-col group text-left">
                <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-sm">
                   {item.icon}
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
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl lg:text-5xl font-serif text-primary mb-10 leading-tight">Dein innerer Rhythmus <br /><span className="text-accent italic">im Spiegel der Natur</span></h2>
          <div className="prose prose-lg mx-auto text-muted-foreground leading-relaxed">
            <p>
              In der TCM betrachten wir dich als dynamisches System. Die 5 Wandlungsphasen – <strong>Holz, Feuer, Erde, Metall und Wasser</strong> – spiegeln sich in deinen Organen und Emotionen wider. Unsere Diagnostik durch <strong>Puls- und Zungenschau</strong> ermöglicht uns einen tiefen Blick in diesen energetischen Status, lange bevor sich Symptome im Labor zeigen.
            </p>
            <p className="mt-6 text-left">
              Besonders bei Frauenthemen wie <strong>Endometriose, PCOS, schmerzhaften Zyklen oder Wechseljahresbeschwerden</strong> bietet die TCM Lösungen, die über die rein hormonelle Betrachtung hinausgehen. Wir regulieren das Blut (Xue) und besänftigen den Geist (Shen).
            </p>
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
                  Regulationstherapie
                </motion.span>
                <h2 className="text-3xl lg:text-5xl font-serif text-primary mb-10 leading-tight">Akupunktur: <br /><span className="text-accent italic">Heilung durch Information</span></h2>
                <div className="prose prose-lg text-muted-foreground leading-relaxed space-y-6 text-left">
                  <p>
                    Akupunktur ist ein wesentlicher Teil der TCM und wird weltweit angewandt. Obwohl die evidenzbasierte Schulmedizin die TCM oft kritisch betrachtet, veröffentlichte die WHO bereits 2002 eine Indikationsliste für Akupunktur, auf der diese bei 28 Krankheitsbildern explizit empfohlen wird.
                  </p>
                  <p>
                    Als sogenannte <strong>Regulationstherapie</strong> wirkt sie durch die Reizung genau definierter Punkte am Körper. So können Störungen im gesamten Organismus gelindert oder gänzlich beseitigt werden. Wichtig zu wissen: Akupunktur kann das „Gestörte“ harmonisieren, jedoch nicht das „Zerstörte“.
                  </p>
                  <p>
                    Alle Reize gelangen über das Zwischenhirn zu den zugeordneten Körperteilen und Organen. Aufgrund kurzer Reflexwege zwischen der Ohrmuschel und den Schmerzzentren im Gehirn ist z. B. die <strong>Ohrakupunktur</strong> besonders gut zur Schmerzlinderung geeignet.
                  </p>
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
                  Die Therapiedauer richtet sich nach dem aktuellen Beschwerdebild und der Bestehungszeit der Erkrankung. Meist tritt nach 4-5 Sitzungen eine spürbare Besserung ein. Oft sind insgesamt ca. 10 Sitzungen notwendig, um eine beständige Wirkung zu erzielen.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-full text-xs font-bold text-primary/70 uppercase tracking-widest">
                    <Check size={16} className="text-accent" /> Individuelles Konzept
                  </div>
                  <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-full text-xs font-bold text-primary/70 uppercase tracking-widest">
                    <Check size={16} className="text-accent" /> Punkt-Präzision
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 lg:p-12 rounded-[4rem] border border-border shadow-2xl">
              <div className="mb-10 text-left">
                <h3 className="text-3xl font-serif text-primary mb-4">Akupunktur kann helfen bei:</h3>
                <p className="text-muted-foreground">Klicke auf die Kategorien, um Details zu sehen.</p>
              </div>
              
              <Accordion type="single" collapsible className="w-full space-y-4">
                {categories.map((cat) => (
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
              <h3 className="text-3xl font-serif text-primary mb-6">Pulsdiagnostik</h3>
              
              <div className="mb-8 rounded-3xl overflow-hidden border border-border shadow-inner bg-white">
                <img 
                  src="/pulsdiagnostik.png" 
                  alt="TCM Pulsdiagnostik - Tasten am Handgelenk" 
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              <p className="text-muted-foreground leading-relaxed mb-10 text-left">
                Der Puls wird an drei Stellen und in drei Tiefen (Oberfläche, Mitte, Tiefe) an beiden Handgelenken gleichzeitig getastet. Wir erfassen Frequenz, Volumen, Rhythmus und Form, um Fülle- oder Leere-Zustände der Organe zu ermitteln.
              </p>

              <div className="space-y-6 flex-grow">
                <div className="bg-white p-8 rounded-3xl border border-border shadow-sm">
                  <h4 className="text-sm font-bold text-primary uppercase tracking-widest mb-6 border-b border-border pb-3">Organ-Zuordnung</h4>
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <p className="text-xs font-bold text-accent uppercase">Linke Hand</p>
                      <ul className="text-sm space-y-2 text-primary/80">
                        <li className="flex justify-between"><span>Herz / Dünndarm</span> <span className="text-muted-foreground font-mono italic text-[10px]">Pos. 1</span></li>
                        <li className="flex justify-between"><span>Leber / Galle</span> <span className="text-muted-foreground font-mono italic text-[10px]">Pos. 2</span></li>
                        <li className="flex justify-between"><span>Nieren-Yin / Blase</span> <span className="text-muted-foreground font-mono italic text-[10px]">Pos. 3</span></li>
                      </ul>
                    </div>
                    <div className="space-y-3 border-t sm:border-t-0 sm:border-l border-border pt-6 sm:pt-0 sm:pl-8">
                      <p className="text-xs font-bold text-accent uppercase">Rechte Hand</p>
                      <ul className="text-sm space-y-2 text-primary/80">
                        <li className="flex justify-between"><span>Lunge / Dickdarm</span> <span className="text-muted-foreground font-mono italic text-[10px]">Pos. 1</span></li>
                        <li className="flex justify-between"><span>Milz / Magen</span> <span className="text-muted-foreground font-mono italic text-[10px]">Pos. 2</span></li>
                        <li className="flex justify-between"><span>Nieren-Yang / Ming-Men</span> <span className="text-muted-foreground font-mono italic text-[10px]">Pos. 3</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-primary/5 p-6 rounded-2xl flex items-start gap-4">
                  <Info size={20} className="text-primary mt-1 shrink-0" />
                  <p className="text-xs text-primary/70 leading-relaxed italic">
                    Ein „normaler“ Puls ist gleichmäßig, ruhig und kräftig (ca. 72-80 Schläge pro Minute). Morgens ist die beste Zeit für die Messung.
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
              <h3 className="text-3xl font-serif text-primary mb-6">Zungendiagnostik</h3>

              <div className="mb-8 rounded-3xl overflow-hidden border border-border shadow-inner bg-slate-50">
                <img 
                  src="/zungendiagnostik.png" 
                  alt="TCM Zungendiagnostik - Zungenbilder im Vergleich" 
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              <p className="text-muted-foreground leading-relaxed mb-10 text-left">
                Die Zunge ist ein Somatothop – eine Abbildung des gesamten Körpers und ein „Spiegel der Seele“. Veränderungen in Farbe, Form, Belag und Unterzungenvenen geben direkte Hinweise auf Störungen im Organismus.
              </p>

              <div className="space-y-6 flex-grow">
                <div className="bg-slate-50 p-8 rounded-3xl border border-border">
                  <h4 className="text-sm font-bold text-primary uppercase tracking-widest mb-6 border-b border-border pb-3 text-left">Wichtige Vorbereitung</h4>
                  <ul className="space-y-4">
                    {[
                      { icon: <Check size={16} />, text: "1 Woche vorher kein Zungenbürsten" },
                      { icon: <Check size={16} />, text: "Kein Kaffee oder färbende Lebensmittel (Rote Beete, Tee) am Untersuchungstag" },
                      { icon: <Check size={16} />, text: "Unmittelbar vorher nicht rauchen" }
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-primary/70 font-medium">
                        <span className="text-accent">{item.icon}</span>
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 text-left">
                  <div className="bg-white p-6 rounded-3xl border border-border shadow-sm">
                    <h5 className="text-[10px] font-bold text-accent uppercase tracking-widest mb-3">Zungenbild-Beispiele</h5>
                    <ul className="text-[11px] space-y-2 text-muted-foreground">
                      <li><strong className="text-primary">Braunfärbung:</strong> Verdauungsstörungen / Darm</li>
                      <li><strong className="text-primary">Zahneindrücke:</strong> Leber (rechts), Milz (links)</li>
                      <li><strong className="text-primary">Gelber Belag:</strong> Stau in Leber/Galle oder Hitze</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-3xl border border-border shadow-sm">
                    <h5 className="text-[10px] font-bold text-accent uppercase tracking-widest mb-3">Organ-Zonen</h5>
                    <ul className="text-[11px] space-y-2 text-muted-foreground">
                      <li><strong className="text-primary">Spitze:</strong> Herz</li>
                      <li><strong className="text-primary">Mitte:</strong> Lunge, Milz, Magen</li>
                      <li><strong className="text-primary">Wurzel:</strong> Niere, Blase</li>
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
                  Die Erstanamnese inklusive Puls- und Zungendiagnose dauert ca. 60 Minuten. Dies ist die notwendige Basis für einen nachhaltigen Behandlungserfolg.
                </p>
              </div>
              <div className="flex flex-col items-center md:items-end gap-6 md:w-1/3">
                <div className="text-center md:text-right">
                  <span className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-1">Honorar</span>
                  <span className="text-4xl font-bold">100,- €</span>
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
                Lebensenergie durch Wärme
              </motion.span>
              <h2 className="text-3xl lg:text-5xl font-serif text-primary mb-8 leading-tight">Moxa-Therapie: <br /><span className="text-orange-600 italic">Die Kraft der Artemisia</span></h2>
              <div className="prose prose-lg text-muted-foreground leading-relaxed space-y-6 text-left">
                <p>
                  Die Moxa-Therapie (Moxibustion) nutzt den gezielten Wärmereiz von glimmendem Beifuß-Kraut (Artemisia vulgaris), um den Fluss deines <strong>Qi zu regulieren und das Yang zu aktivieren</strong>. 
                </p>
                <p>
                  Besonders bei chronischen Beschwerden, Kältegefühlen oder Erschöpfungszuständen entfaltet diese Methode ihre tiefgehende Wirkung. Die Wärme reizt die Akupunkturpunkte sanft, regt die Durchblutung an und mobilisiert deine Selbstheilungskräfte.
                </p>
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
                 {[
                   { title: "Moxa-Zigarre", desc: "Kontaktlose Erwärmung ca. 5mm über der Haut." },
                   { title: "Moxa-Nadel", desc: "Die „heiße Nadel“ leitet Wärme direkt ins Zentrum." },
                   { title: "Indirektes Moxen", desc: "Schutzbarrieren aus Ingwer, Salz oder Heilerde." },
                   { title: "TDP-Minerallampe", desc: "Mineral-Infrarot für großflächige Energie." }
                 ].map((m, i) => (
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
                   In der Schwangerschaft ist das Moxen zur <strong>sanften Wendung des Kindes aus der Beckenendlage</strong> bekannt. Durch Stimulation des Punktes Bl 67 wird die Gebärmuttermuskulatur angeregt, was das Baby ab der 34. Woche oft dazu bewegt, sich in die Schädellage zu drehen.
                 </p>
                 <Link to={ROUTE_PATHS.HEBAMMENSPRECHSTUNDE} className="text-orange-600 font-bold flex items-center gap-2 hover:gap-4 transition-all">
                   Mehr zur Hebammenbegleitung <ArrowRight size={18} />
                 </Link>
               </motion.div>

               {/* Contraindications */}
               <div className="bg-primary text-white p-10 rounded-[3.5rem] shadow-xl">
                 <h4 className="text-accent font-bold uppercase tracking-widest text-xs mb-6">Wann nicht moxen?</h4>
                 <ul className="space-y-4 text-sm text-white/70">
                   <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-accent rounded-full" /> Akute Infektionen & Fieber</li>
                   <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-accent rounded-full" /> Bluthochdruck</li>
                   <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-accent rounded-full" /> Starke Nervosität / Hyperaktivität</li>
                   <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-accent rounded-full" /> Bereich von Gesicht & Schleimhäuten</li>
                 </ul>
               </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-muted-foreground italic text-sm">
              Materialkosten werden zusätzlich zum Honorar (100 €/Std.) berechnet. Eine Sitzung dauert ca. 20-30 Min.
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
              Nahrung als Medizin
            </motion.span>
            <h2 className="text-3xl lg:text-5xl font-serif text-primary mb-6 leading-tight">Ernährung nach den <br /><span className="text-accent italic">5 Elementen</span></h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              In der TCM betrachten wir Lebensmittel nicht nach Kalorien, sondern nach ihrer energetischen Qualität, ihrem Geschmack und ihrer thermischen Wirkung. So kräftigen wir deine Grundkonstitution (Qi) nachhaltig.
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
            {[
              { element: "Holz", season: "Frühling", taste: "Sauer", organ: "Leber", emotion: "Ärger" },
              { element: "Feuer", season: "Sommer", taste: "Bitter", organ: "Herz", emotion: "Freude" },
              { element: "Erde", season: "Spätsommer", taste: "Süß", organ: "Milz", emotion: "Mitgefühl" },
              { element: "Metall", season: "Herbst", taste: "Scharf", organ: "Lunge", emotion: "Trauer" },
              { element: "Wasser", season: "Winter", taste: "Salzig", organ: "Niere", emotion: "Angst" }
            ].map((e, i) => (
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
                  {[
                    { label: "Heiß", examples: "Lamm, Grillfleisch, Zimt, Curry, Knoblauch", effect: "Wärmt stark, vertreibt Kälte" },
                    { label: "Warm", examples: "Fenchel, Kürbis, Huhn, Dinkel, Kirschen", effect: "Unterstützt das Yang" },
                    { label: "Neutral", examples: "Hirse, Karotten, Rindfleisch, Ei, Linsen", effect: "Baut Qi auf, harmonisiert" },
                    { label: "Erfrischend", examples: "Brokkoli, Apfel, Sellerie, Reis, Tofu", effect: "Nährt Säfte & Blut" },
                    { label: "Kühlend", examples: "Gurke, Tomate, Joghurt, Algen, Melone", effect: "Klärt Hitze, beruhigt" }
                  ].map((t, i) => (
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
                  <p>
                    Ein Kind hat andere Bedürfnisse als ein Greis. Eine Frau in den Wechseljahren befindet sich in einer anderen energetischen Phase als eine Schwangere. 
                  </p>
                  <p>
                    Nach einer ausführlichen Anamnese (Puls- & Zungendiagnose) helfe ich dir, deine Essgewohnheiten auf deine individuelle Konstitution abzustimmen. Ernährungsumstellung ist ein langfristiges Projekt, das tiefgehende Einsichten für körperliche und seelische Zusammenhänge ermöglicht.
                  </p>
                </div>

                <div className="p-10 bg-accent/5 rounded-[3.5rem] border border-accent/10 flex flex-col md:flex-row items-center gap-10">
                   <div className="text-left flex-grow">
                      <h4 className="text-2xl font-serif text-primary mb-2">Deine Beratung</h4>
                      <p className="text-muted-foreground text-sm">Individueller Plan für deine Konstitution.</p>
                   </div>
                   <div className="text-center md:text-right shrink-0">
                      <span className="block text-[10px] font-bold text-accent uppercase tracking-widest mb-1">Honorar</span>
                      <span className="text-3xl font-bold text-primary">100,- € / Std.</span>
                   </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-slate-50 p-4 rounded-2xl text-center border border-border">
                    <span className="block text-xs font-bold text-primary mb-1">Basis</span>
                    <span className="text-[10px] text-muted-foreground">Regional & Saisonal</span>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-2xl text-center border border-border">
                    <span className="block text-xs font-bold text-primary mb-1">Stil</span>
                    <span className="text-[10px] text-muted-foreground">International</span>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-2xl text-center border border-border">
                    <span className="block text-xs font-bold text-primary mb-1">Fokus</span>
                    <span className="text-[10px] text-muted-foreground">Qi & Säfte</span>
                  </div>
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
                  Hajamat / Ausleitverfahren
                </motion.span>
                <h2 className="text-3xl lg:text-5xl font-serif text-primary mb-10 leading-tight">Schröpf-Therapie: <br /><span className="text-accent italic">Befreiung von Stagnationen</span></h2>
                <div className="prose prose-lg text-muted-foreground leading-relaxed space-y-6 text-left">
                  <p>
                    Schröpfen zählt zu den klassischen Ausleitverfahren und wird seit über 5000 Jahren angewandt. Wir nutzen den gezielten Unterdruck auf der Haut, um <strong>lokale Stagnationen von Qi und Blut</strong> (z. B. tiefe Verspannungen) zu lösen.
                  </p>
                  <p>
                    Über die sogenannten Head-Zonen der Haut erreichen wir reflektorisch auch die inneren Organe. So kann ein gezielter Reiz auf der Hautoberfläche die Regeneration deiner inneren Vitalfunktionen unterstützen.
                  </p>
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
                 {[
                   { title: "Feuer-Schröpfen", desc: "Traditionelle Erwärmung der Luft im Glas für sanften Sog." },
                   { title: "Blutiges Schröpfen", desc: "Gezielte Entschlackung & Hitze-Ausleitung (Hajamat)." },
                   { title: "Trockenes Schröpfen", desc: "Starke Durchblutung unversehrter Hautstellen." },
                   { title: "Schröpfkopfmassage", desc: "Dynamisches Verschieben für fasziale Freiheit." }
                 ].map((s, i) => (
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
                      <li className="flex items-center gap-2"><Check size={14} className="text-accent" /> Migräne & Kopfschmerz</li>
                      <li className="flex items-center gap-2"><Check size={14} className="text-accent" /> Bandscheibenvorfall</li>
                      <li className="flex items-center gap-2"><Check size={14} className="text-accent" /> Karpaltunnelsyndrom</li>
                      <li className="flex items-center gap-2"><Check size={14} className="text-accent" /> Bluthochdruck</li>
                    </ul>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2"><Check size={14} className="text-accent" /> Bronchitis & Asthma</li>
                      <li className="flex items-center gap-2"><Check size={14} className="text-accent" /> Müdigkeit & Burn-Out</li>
                      <li className="flex items-center gap-2"><Check size={14} className="text-accent" /> Hormonstörungen</li>
                      <li className="flex items-center gap-2"><Check size={14} className="text-accent" /> Verdauungsprobleme</li>
                    </ul>
                  </div>
               </div>

               <div className="bg-primary text-white p-10 rounded-[3.5rem] shadow-xl">
                 <h4 className="text-accent font-bold uppercase tracking-widest text-xs mb-6">Wichtige Gegenanzeigen</h4>
                 <div className="grid sm:grid-cols-2 gap-8 text-xs text-white/70">
                    <div>
                      <p className="font-bold text-white mb-3">Trocken:</p>
                      <ul className="space-y-2">
                        <li>• Schwangerschaft (bis 4. Monat)</li>
                        <li>• Tumore & Tuberkulose</li>
                        <li>• Frische Brandwunden</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-bold text-white mb-3">Zusätzlich bei blutigem:</p>
                      <ul className="space-y-2">
                        <li>• Menstruation & Wochenbett</li>
                        <li>• Gerinnungsstörungen</li>
                        <li>• Starke Erschöpfung</li>
                      </ul>
                    </div>
                 </div>
               </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-muted-foreground italic text-sm">
              Honorar: 100 €/Std. Eine Sitzung dauert ca. 30 Min. Die Häufigkeit richtet sich nach deinem Befund.
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
               Sanfte Meridian-Stimulation
             </motion.span>
             <h2 className="text-3xl lg:text-5xl font-serif text-primary mb-6 leading-tight">Aku-Taping: <br /><span className="text-accent italic">Impulse für die Selbstheilung</span></h2>
             <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
               Aku-Taping vereint die Regeln der TCM und Akupunktur mit moderner manueller Medizin. Anders als beim klassischen Kinesio-Taping folgen wir hier den Meridianen, um Energieflüsse gezielt zu lenken.
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
              <div className="bg-slate-50 p-10 rounded-[3.5rem] border border-border text-left group hover:border-accent/20 transition-all">
                 <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-accent mb-6 shadow-sm group-hover:bg-accent group-hover:text-white transition-colors">
                    <Sparkles size={24} />
                 </div>
                 <h4 className="text-xl font-bold text-primary mb-4">Wirkweise</h4>
                 <p className="text-sm text-muted-foreground leading-relaxed">
                   Der Reiz wird nicht durch Nadeln, sondern durch die kontinuierliche Verschiebung der Hautareale unter dem elastischen Band ausgelöst. Dies stimuliert Mechanorezeptoren und fördert den Lymphabfluss.
                 </p>
              </div>

              <div className="bg-slate-50 p-10 rounded-[3.5rem] border border-border text-left group hover:border-accent/20 transition-all">
                 <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-accent mb-6 shadow-sm group-hover:bg-accent group-hover:text-white transition-colors">
                    <Activity size={24} />
                 </div>
                 <h4 className="text-xl font-bold text-primary mb-4">Anwendung</h4>
                 <p className="text-sm text-muted-foreground leading-relaxed">
                   Ideal bei Schmerzen am Bewegungsapparat, zur Regulation des Muskeltonus und zur Immunmodulation. Besonders wertvoll in der Rehabilitation und rund um die Geburt.
                 </p>
              </div>

              <div className="bg-slate-50 p-10 rounded-[3.5rem] border border-border text-left group hover:border-accent/20 transition-all">
                 <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-accent mb-6 shadow-sm group-hover:bg-accent group-hover:text-white transition-colors">
                    <Info size={24} />
                 </div>
                 <h4 className="text-xl font-bold text-primary mb-4">Ablauf</h4>
                 <p className="text-sm text-muted-foreground leading-relaxed">
                   Nach der Anamnese dauert die Behandlung ca. 10-15 Min. Das Tape bleibt bis zu 5 Tage auf der Haut und entfaltet dort seine dauerhafte Wirkung.
                 </p>
              </div>
           </div>

           <div className="grid lg:grid-cols-2 gap-12 items-stretch">
              <div className="bg-primary text-white p-12 lg:p-16 rounded-[4rem] shadow-2xl flex flex-col justify-between">
                 <div>
                    <h3 className="text-3xl font-serif mb-8">Einsatzgebiete</h3>
                    <ul className="space-y-4 text-primary-foreground/90">
                       <li className="flex items-start gap-3"><Check size={18} className="text-accent mt-1 shrink-0" /> Linderung chronischer Schmerzen</li>
                       <li className="flex items-start gap-3"><Check size={18} className="text-accent mt-1 shrink-0" /> Regulation des Muskeltonus</li>
                       <li className="flex items-start gap-3"><Check size={18} className="text-accent mt-1 shrink-0" /> Psychovegetative Störungen</li>
                       <li className="flex items-start gap-3"><Check size={18} className="text-accent mt-1 shrink-0" /> Abschwellung & Lymphdrainage</li>
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
                      Obwohl Aku-Taping sehr sicher ist, gibt es klare Grenzen für den Einsatz:
                    </p>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                       <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-accent rounded-full" /> Schwere Gerinnungsstörungen</li>
                       <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-accent rounded-full" /> Akute psychiatrische Erkrankungen</li>
                       <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-accent rounded-full" /> Notfälle, die schulmedizinische Hilfe erfordern</li>
                       <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-accent rounded-full" /> Bekannte schwere Acryl-Allergien</li>
                    </ul>
                 </div>

                 <div className="p-10 bg-accent/5 rounded-[3.5rem] border border-accent/10 flex items-center justify-between gap-6">
                    <div className="text-left">
                       <h5 className="font-bold text-primary">Behandlungskosten</h5>
                       <p className="text-xs text-muted-foreground">Pro Sitzung (10-15 Min.)</p>
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
                  <h2 className="text-3xl lg:text-5xl font-serif mb-8 text-white font-bold leading-tight text-left">Balance für die Frau</h2>
                  <p className="text-xl opacity-90 mb-10 leading-relaxed font-medium text-left">
                    „In der TCM wird die Frau oft mit dem Element Wasser und dem Blut assoziiert. Wir nutzen Akupunktur und die Lehren der 5-Elemente-Ernährung, um den Zyklus sanft zu regulieren, Entzündungen zu beruhigen und den Körper optimal vorzubereiten.“
                  </p>
                  <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-white text-primary px-12 py-5 rounded-2xl font-bold hover:bg-accent hover:text-white transition-all shadow-xl inline-flex items-center gap-3">
                    Beratungstermin anfragen <ArrowRight size={20} />
                  </Link>
                </div>
                <div className="lg:w-1/3 bg-white/10 backdrop-blur-md p-12 rounded-[4rem] border border-white/20 text-center">
                   <h4 className="text-accent font-serif font-bold text-2xl mb-6">Qi-Check</h4>
                   <p className="text-lg leading-relaxed text-white font-medium italic text-left">
                     Löse Stagnationen, fülle deine Reserven auf und finde zurück zu deiner natürlichen Lebenskraft.
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
