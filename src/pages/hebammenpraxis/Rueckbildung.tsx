import SEO from "@/components/SEO";
import SplitScreenHero from "@/components/SplitScreenHero";
import PreisTransparenz from "@/components/PreisTransparenz";
import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "@/lib/index";
import { ArrowRight, Activity, ShieldCheck, Target, Heart, Users, Clock, CheckCircle2, Baby } from "lucide-react";
import { motion } from "framer-motion";

export default function Rueckbildung() {
  const fokusPoints = [
    { title: "Beckenboden-Fokus", desc: "Gezielte Kräftigung der Beckenbodenmuskulatur für langfristige Stabilität und Kontinenz.", icon: Target },
    { title: "Rectusdiastase", desc: "Spezifisches Muskeltraining, um den Bauchmuskelspalt der Linea Alba aktiv zu schließen.", icon: Activity },
    { title: "Zelluläre Energie", desc: "Neurologische Ansteuerung kleinster Muskelfasern für tiefe, nachhaltige Regeneration.", icon: ShieldCheck }
  ];

  const kursInhalte = [
    { title: "Sanftes Ankommen & Aufwärmen", desc: "Körper schonend auf die Übungen vorbereiten.", icon: Heart },
    { title: "Beckenboden & Körpermitte", desc: "Gezielte Kräftigung von Beckenboden, Bauch und Rücken.", icon: Activity },
    { title: "Haltung & Alltag", desc: "Ergänzende Übungen für bessere Haltung und Alltagsstabilität.", icon: ShieldCheck },
    { title: "Dehnung & Entspannung", desc: "Sanfter Abschluss mit Stretching und Entspannung.", icon: Target }
  ];

  const vorteile = [
    "Kleine, feste Gruppen für persönliche Betreuung",
    "Engagierte, erfahrene Kursleitung",
    "Strukturiertes, wissenschaftlich fundiertes Training",
    "Kurs ohne Baby – volle Konzentration auf deinen Körper",
    "Modern ausgestatteter Trainingsraum",
    "Flexible Abendtermine für berufstätige Mütter"
  ];

  return (
    <div className="bg-background min-h-screen font-sans">
      <SEO 
        title="Rückbildungskurs am Abend | Ohne Baby – Hebammenpraxis feminatalis"
        description="Professionelle Rückbildungsgymnastik in Bad Schönborn: Beckenboden, Bauch und Rücken gezielt kräftigen. Kurse am Abend ohne Baby – für Mütter, die sich eine wirksame und motivierende Rückbildung wünschen."
        keywords="Rückbildungskurs, Rückbildung, Beckenboden, Wochenbett, Rückbildungsgymnastik, Bad Schönborn, Hebamme, après-partum"
      />

      <SplitScreenHero
        badge="Rückbildungskurs am Abend"
        title={<>Dein Körper verdient <br/><span className="text-accent italic font-light">Stärke & Stabilität</span></>}
        subtitle="Die Wochenbettzeit liegt hinter dir – und jetzt darfst du Schritt für Schritt wieder Kraft, Stabilität und ein gutes Körpergefühl aufbauen. In kleinen Gruppen, mit engagierter Leitung und vollem Fokus auf dich."
        imageSrc="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2040&auto=format&fit=crop"
        imageAlt="Rückbildungsgymnastik – gezieltes Training für Beckenboden und Körpermitte"
        imageKey="img_hero_rueckbildung"
      >
        <Link to={`${ROUTE_PATHS.KURS}#kurse-vor-ort`} className="bg-primary text-white px-10 py-5 rounded-2xl font-bold hover:shadow-2xl transition-all shadow-xl active:scale-95 flex items-center gap-2">
          Kurse & Veranstaltungen ansehen <ArrowRight size={20} />
        </Link>
      </SplitScreenHero>

      {/* Kurs-Beschreibung */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="bg-primary/5 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block">
                Rückbildung ohne Baby
              </span>
              <h2 className="text-3xl lg:text-4xl font-serif text-primary mb-8 leading-tight">
                Warum am Abend – <br/><span className="text-accent italic">und ohne Baby?</span>
              </h2>
              <div className="prose prose-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  Rückbildung ist nicht nur Training – sie ist auch ein Moment, in dem du wieder bei dir ankommst. Nach Wochen, in denen sich alles um dein Baby dreht, darfst du hier einmal nur <strong>du</strong> sein.
                </p>
                <p>
                  Der Kurs ist bewusst ohne Baby geplant. So kannst du diese Zeit voll für dich nutzen, in Ruhe üben und dich wirklich auf deinen Körper konzentrieren.
                </p>
                <p className="bg-primary/5 p-6 rounded-2xl border-l-4 border-primary">
                  <strong>Tipp:</strong> Organisiere bitte für die Kurszeit eine Betreuung für dein Baby – so wird die Rückbildung für dich deutlich entspannter und effektiver.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card p-10 lg:p-12 rounded-[3rem] border border-border shadow-xl"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <Clock size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-primary">Flexible Abendtermine</h3>
                  <p className="text-muted-foreground text-sm">Ideal für berufstätige Mütter</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <Users size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-primary">Kleine Gruppen</h3>
                  <p className="text-muted-foreground text-sm">Persönliche Betreuung & intensive Begleitung</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <Heart size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-primary">Ganz bei dir</h3>
                  <p className="text-muted-foreground text-sm">Zeit für dich – ohne Ablenkung</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Kursinhalte */}
      <section id="kursinhalte" className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <span className="bg-accent/10 text-accent px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block">
              Kursaufbau
            </span>
            <h2 className="text-3xl lg:text-5xl font-serif text-primary mb-6">
              Abwechslungsreich & <span className="text-accent italic">effektiv</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Jede Stunde ist sorgfältig strukturiert, um deinen Körper sanft und gezielt zu fordern – ohne dich zu überlasten.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {kursInhalte.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-[2.5rem] border border-border hover:border-accent/30 hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-6">
                  <item.icon size={28} />
                </div>
                <h3 className="text-lg font-serif text-primary mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fokus-Punkte */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <span className="bg-primary/5 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block">
              Medizinkonform & ganzheitlich
            </span>
            <h2 className="text-3xl lg:text-5xl font-serif text-primary mb-6">
              Unser <span className="text-accent italic">Fokus</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {fokusPoints.map((p, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-card p-10 rounded-[2.5rem] border border-border/50 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all group text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-6 mx-auto group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <p.icon size={32} />
                </div>
                <h3 className="text-xl font-serif text-primary mb-4">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vorteile */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-serif mb-8 leading-tight">
                Das macht <span className="text-[#fde4c8] italic">unsere Kurse</span> besonders
              </h2>
              <ul className="space-y-4">
                {vorteile.map((v, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                    <span className="text-lg">{v}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md p-10 lg:p-12 rounded-[3rem] border border-white/20"
            >
              <div className="flex items-center gap-4 mb-6">
                <Baby className="w-12 h-12 text-accent" />
                <h3 className="text-2xl font-serif">Wichtig für dich</h3>
              </div>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                Rückbildung ist in der Regel eine <strong>Kassenleistung</strong> – bis zu 10 Kursstunden werden von den gesetzlichen Krankenkassen übernommen.
              </p>
              <div className="bg-white/10 p-6 rounded-2xl border border-white/10">
                <p className="text-sm font-bold text-accent uppercase tracking-widest mb-3">Voraussetzung</p>
                <p className="text-white/70">
                  Häufig ist Voraussetzung, dass der Kurs <strong>bis spätestens zum Ende des 9. Monats nach der Geburt</strong> abgeschlossen wird.
                </p>
              </div>
              <a 
                href="https://www.gkv-spitzenverband.de/krankenkassen/liste/krankenkassen.jsp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-accent font-bold hover:gap-4 transition-all"
              >
                Kostenübernahme prüfen <ArrowRight size={18} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl lg:text-5xl font-serif text-primary mb-8">
            Starte deine <span className="text-accent italic">Rückbildung</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Melde dich jetzt für eine kostenlose Vor-Analyse an. Wir klären gemeinsam, welcher Kurs am besten zu dir passt – und welche nächsten Schritte sinnvoll sind.
          </p>
          <Link 
            to={ROUTE_PATHS.VORQUALIFIZIERUNG} 
            className="bg-accent text-white px-12 py-5 rounded-2xl text-xl font-bold hover:bg-accent/90 transition-all shadow-xl inline-flex items-center gap-3 hover:-translate-y-1"
          >
            Kostenlose Vor-Analyse anfragen <ArrowRight size={24} />
          </Link>
        </div>
      </section>

      <PreisTransparenz />
    </div>
  );
}