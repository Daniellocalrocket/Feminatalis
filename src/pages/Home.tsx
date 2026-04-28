import React, { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { ROUTE_PATHS } from "@/lib/index";
import { motion } from "framer-motion";
import { Leaf, Heart, Baby, Check, Phone, Mail, Clock, MapPin, Award, ArrowRight, ChevronRight, Activity, Smile, Star, CheckCircle, Syringe, Sparkles, Microscope, Zap, ShieldCheck, Instagram, Youtube } from "lucide-react";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", topic: "", message: "", agree: false });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // form submission placeholder
  };

  return (
    <>
      <SEO title="Ganzheitliche Gesundheit | feminatalis" description="Praxis für Funktionelle Medizin & Hebammenpraxis in Bad Schönborn." />

      {/* Hero Section */}
      <section className="bg-background pt-32 pb-48 text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            Ganzheitliche Gesundheit
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif text-primary mb-6 leading-tight tracking-tight">
            Praxis für Funktionelle <br className="hidden sm:block"/>Medizin <br className="sm:hidden"/>
            <span className="text-accent">& Hebammenpraxis</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Wir kombinieren modernste Labordiagnostik mit tiefem naturheilkundlichen und geburtshilflichen Wissen. Für Ihre Gesundheit auf allen Lebenswegen.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={ROUTE_PATHS.CONTACT} className="bg-accent text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-accent/90 transition-all shadow-lg shadow-accent/20 flex items-center justify-center gap-2 w-full sm:w-fit">
              <CheckCircle className="w-5 h-5" /> Jetzt Termin online buchen
            </Link>
            <Link to={ROUTE_PATHS.COURSES} className="bg-white text-primary border-2 border-primary/10 px-8 py-4 rounded-xl font-bold text-lg hover:border-primary/30 transition-all flex items-center justify-center gap-2 w-full sm:w-fit">
              Kurse & Events
            </Link>
          </div>
        </div>
      </section>

      {/* 3 Main Service Cards (overlapping hero) */}
      <section className="relative z-20 -mt-24 mb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Leaf className="w-8 h-8 text-green-600"/>, title: "Naturheilpraxis", desc: "Ursachen finden, statt nur Symptome behandeln. Für ganzheitliche Vitalität.", link: ROUTE_PATHS.NATURHEILPRAXIS },
              { icon: <Heart className="w-8 h-8 text-primary"/>, title: "Hebammenpraxis", desc: "Sichere Begleitung in Schwangerschaft, Wochenbett & Rückbildung.", link: ROUTE_PATHS.HEBAMMENPRAXIS },
              { icon: <Baby className="w-8 h-8 text-blue-500"/>, title: "Kinderwunsch", desc: "Natürliche Unterstützung auf dem Weg zu Ihrem Wunschkind.", link: ROUTE_PATHS.KINDERWUNSCH }
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-black/5 text-center flex flex-col items-center border border-border/50">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#fde4c8]/30 border border-border flex items-center justify-center mb-6">{s.icon}</div>
                <h3 className="text-xl sm:text-2xl font-serif text-primary mb-3">{s.title}</h3>
                <p className="text-muted-foreground mb-6 flex-grow">{s.desc}</p>
                <Link to={s.link} className="text-accent font-bold inline-flex items-center gap-2 hover:gap-3 transition-all">Mehr erfahren <ArrowRight className="w-4 h-4"/></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-10 border-y border-border/30 bg-white/50 mb-24">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-8 text-center sm:text-left text-primary font-medium">
            <div className="flex items-center gap-3"><Award className="w-6 h-6 text-accent"/> 33 Jahre Hebammen-Erfahrung</div>
            <div className="flex items-center gap-3"><Heart className="w-6 h-6 text-accent"/> 4500+ Begleitete Mütter</div>
            <div className="flex items-center gap-3"><CheckCircle className="w-6 h-6 text-accent"/> 100% Sicher & Evidenzbasiert</div>
            <div className="flex items-center gap-3"><Activity className="w-6 h-6 text-accent"/> Prävention & Ganzheitlichkeit</div>
          </div>
        </div>
      </section>



      {/* Hebammenpraxis Sektion */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <span className="bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 inline-block tracking-widest uppercase">Das Zell-Protokoll</span>
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">Maximale Geburtskraft</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ihr Uterusmuskel ist der Hochleistungsmotor der Geburt. Ich sorge dafür, dass er den entscheidenden Treibstoff hat. Mit 33 Jahren Erfahrung optimiere ich Ihre Ressourcen für eine kraftvolle Entbindung.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { 
                title: "Säule 3:\nDas Zell-Protokoll", 
                pts: ["Vollblut-Nährstoff-Analyse", "IHHT-Zelltraining", "Mitochondriale Infusionen"], 
                icon: <Microscope className="text-accent w-8 h-8"/>, 
                link: ROUTE_PATHS.ZELLTRAINING,
                badge: "Premium / Privat"
              },
              { 
                title: "Säule 2:\nAkut-Hilfe", 
                pts: ["Schmerzmanagement", "Ödem-Behandlung", "Erschöpfungs-Check"], 
                icon: <Zap className="text-primary w-8 h-8"/>, 
                link: ROUTE_PATHS.HEBAMMENPRAXIS,
                badge: "Kasse + Naturheilkunde"
              },
              { 
                title: "Säule 1:\nBasis-Begleitung", 
                pts: ["Vorbereitungskurse", "Wochenbettbetreuung", "Hausbesuche"], 
                icon: <ShieldCheck className="text-blue-600 w-8 h-8"/>, 
                link: ROUTE_PATHS.HEBAMMENPRAXIS,
                badge: "Kassenleistung"
              }
            ].map((c, i) => (
              <div key={i} className="bg-white rounded-[2.5rem] p-10 border border-primary/5 shadow-xl shadow-primary/[0.02] relative overflow-hidden group hover:shadow-2xl transition-all hover:-translate-y-1">
                <div className="flex justify-between items-start mb-10">
                  <div className="w-16 h-16 rounded-2xl bg-muted/30 flex items-center justify-center group-hover:scale-110 transition-transform">{c.icon}</div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary/40 bg-muted/40 px-3 py-1 rounded-full">{c.badge}</span>
                </div>
                <h3 className="text-2xl font-serif text-primary mb-8 whitespace-pre-line leading-[1.1]">{c.title}</h3>
                <ul className="space-y-4 mb-10">
                  {c.pts.map((pt, j) => (
                    <li key={j} className="flex items-start gap-3 text-muted-foreground text-sm font-medium"><Check className="w-5 h-5 text-accent shrink-0"/> {pt}</li>
                  ))}
                </ul>
                <Link to={c.link} className="bg-primary text-white font-bold w-full py-4 rounded-xl hover:bg-primary/90 transition-all flex justify-center items-center gap-2 shadow-lg shadow-primary/20">
                  Details ansehen <ArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>

          <div className="bg-[#fff08a]/30 rounded-[3rem] p-8 md:p-16 mb-16 flex flex-col md:flex-row items-center gap-16 border border-yellow-200/50 shadow-inner relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#fff08a]/20 rounded-bl-[200px] -z-0" />
            <div className="flex-1 relative z-10">
              <h3 className="text-3xl md:text-4xl font-serif text-primary mb-6">Warum Kassenleistungen niemals ausreichen</h3>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed font-medium">
                Das Standard-Kassensystem deckt nur das absolute Minimum ab. Wer jedoch eine wirklich selbstbestimmte, kraftvolle Geburt und eine schnelle Regeneration im Wochenbett erleben möchte, braucht mehr als nur "Routine-Vorsorge".
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Ich arbeite primär mit Frauen, die verstanden haben, dass sie selbst aktiv Verantwortung übernehmen müssen. Mein Fokus liegt auf Premium-Begleitung und fundiertem Wissen. Wer mit 20 % Ladung in die Geburt geht, riskiert Wehenschwäche und medizinische Eingriffe. Mein Ziel ist die 100-Prozent-Ladung Ihres „Zell-Akkus“.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                <div><div className="text-3xl font-bold text-accent">33 J.</div><div className="text-xs font-black uppercase tracking-widest text-primary/60">Expertise</div></div>
                <div><div className="text-3xl font-bold text-accent">100%</div><div className="text-xs font-black uppercase tracking-widest text-primary/60">Zell-Power</div></div>
                <div><div className="text-3xl font-bold text-accent">Sicher</div><div className="text-xs font-black uppercase tracking-widest text-primary/60">Evidenz</div></div>
              </div>
            </div>
            <div className="w-full md:w-1/3 aspect-[4/5] bg-green-100 rounded-3xl border-2 border-green-200 flex items-center justify-center p-6 text-center text-green-700 font-medium opacity-60">
              Platz für Bild
            </div>
          </div>

          <div className="mb-12">
            <h4 className="text-2xl font-serif text-primary text-center mb-8">Weitere Hebammenleistungen</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                  { name: 'Geburtsvorbereitung', link: ROUTE_PATHS.GEBURTSVORBEREITUNG },
                  { name: 'Wochenbettbetreuung', link: ROUTE_PATHS.WOCHENBETTBETREUUNG },
                  { name: 'Rückbildungsgymnastik', link: ROUTE_PATHS.RUECKBILDUNG },
                  { name: 'Schwangerschaftsbeschwerden', link: ROUTE_PATHS.BESCHWERDEN },
                  { name: 'Akupunktur', link: ROUTE_PATHS.AKUPUNKTUR },
                  { name: 'Mikronährstoff-Beratung', link: ROUTE_PATHS.MIKRONAEHRSTOFFE }
              ].map((srv, i) => (
                <Link to={srv.link} key={i} className="bg-[#fff9f2] border border-border rounded-xl p-4 flex items-center gap-3 font-medium text-primary hover:border-accent transition-colors">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0"><Check className="w-4 h-4 text-accent"/></div>
                  <span>{srv.name}</span>
                </Link>
              ))}
            </div>
          </div>
          
          <div className="text-center px-4">
            <Link 
              to={ROUTE_PATHS.HEBAMMENPRAXIS} 
              className="inline-flex w-full sm:w-auto justify-center bg-accent text-white px-6 sm:px-8 py-3.5 rounded-xl font-bold hover:bg-accent/90 transition-all shadow-md text-sm sm:text-base"
            >
              Hebammenpraxis ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* Naturheilpraxis Sektion */}
      <section className="py-24 bg-[#fde4c8]/20 relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <span className="bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 inline-block">Naturheilpraxis</span>
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">Ursachenbasierte Naturheilkunde</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Als Heilpraktikerin betrachte ich den Menschen in seiner Gesamtheit. Mit spezialisierter Labordiagnostik und orthomolekularer Therapie finden wir die wahren Ursachen Ihrer Beschwerden.
            </p>
          </div>

          <h4 className="text-2xl font-serif text-primary text-center mb-8">Unsere Leistungspfeiler</h4>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { title: "Zelluläre Ursachenforschung", desc: "Tiefgreifende Blut- und Mitochondrien-Analysen (IHHT) für absolute Klarheit.", icon: <Activity className="w-6 h-6"/> },
              { title: "Regulierung des Stoffwechsels", desc: "Wir bauen Nährstoffdefizite systematisch und individuell auf.", icon: <Leaf className="w-6 h-6"/> },
              { title: "Ganzheitliche Infusionen", desc: "Direkte und schnelle Nährstoffversorgung unter Umgehung des Magen-Darm-Traktes.", icon: <Syringe className="w-6 h-6"/> }
            ].map((c, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 shadow-sm flex flex-col items-center text-center border border-border">
                <div className="w-16 h-16 rounded-2xl bg-orange-50 text-accent flex items-center justify-center mb-6 shadow-sm">{c.icon}</div>
                <h3 className="text-xl font-serif text-primary mb-3 leading-tight">{c.title}</h3>
                <p className="text-muted-foreground text-sm">{c.desc}</p>
              </div>
            ))}
          </div>

          <h4 className="text-2xl font-serif text-primary text-center mb-8">Weitere Leistungen</h4>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { title: "Long-Covid Hilfe", desc: "Vitale Hilfe bei Erschöpfung und Long-Covid. Vitalität wieder zurückgewinnen.", link: ROUTE_PATHS.LONG_COVID },
              { title: "Labor-Diagnostik", desc: "Exakte Blutanalysen und Vollblut-Untersuchungen.", link: ROUTE_PATHS.LABOR },
              { title: "Allergiebehandlung", desc: "Ursächliche Behandlung durch Desensibilisierung & Immunmodulation.", link: ROUTE_PATHS.ALLERGIE },
              { title: "CO2-Therapie", desc: "Lokale Injektionen und CO2-Quellgasbehandlungen zur Schmerzlinderung.", link: ROUTE_PATHS.CO2_THERAPIE },
              { title: "Hormon-Balance", desc: "Natürliche Regulation von Zyklusbeschwerden, Wechseljahren & Schilddrüse.", link: ROUTE_PATHS.HORMONTHERAPIE },
              { title: "Darmsanierung", desc: "Aufbau eines gesunden Mikrobioms als Fundament für Ihr Immunsystem.", link: ROUTE_PATHS.DARMANALYSE }
            ].map((srv, i) => (
              <div key={i} className="bg-white border border-border text-left p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <h5 className="font-bold text-primary mb-2 text-lg">{srv.title}</h5>
                <p className="text-sm text-muted-foreground mb-4">{srv.desc}</p>
                <Link to={srv.link} className="text-accent text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">Leistungen ansehen <ChevronRight className="w-4 h-4"/></Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to={ROUTE_PATHS.NATURHEILPRAXIS} className="inline-block bg-accent text-white px-8 py-3 rounded-xl font-bold hover:bg-accent/90 transition-all shadow-md">Praxis für Funktionelle Medizin ansehen</Link>
          </div>
        </div>
      </section>

      {/* Kinderwunsch */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
             <span className="bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 inline-block">Kinderwunsch</span>
             <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">Hilfe bei unerfülltem Kinderwunsch</h2>
             <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Ein unerfüllter Kinderwunsch oder hormonelle Dysbalance belasten oft Körper und Seele tiefgreifend. Wir nehmen uns die Zeit, um die optimale Lösung zu finden und Ihrem Wunschkind näher zu kommen.
             </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <h3 className="text-3xl font-serif text-primary mb-6">Unser ganzheitlicher Ansatz</h3>
               <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3 text-muted-foreground"><Check className="w-5 h-5 text-accent shrink-0"/> Detaillierte Hormon- und Zyklusanalyse im Spezial-Labor</li>
                  <li className="flex items-start gap-3 text-muted-foreground"><Check className="w-5 h-5 text-accent shrink-0"/> Biochemischer Aufbau der Gebärmutterschleimhaut & gezielte Durchblutung</li>
                  <li className="flex items-start gap-3 text-muted-foreground"><Check className="w-5 h-5 text-accent shrink-0"/> Wissenschaftlich fundierter Ausgleich von Mikronährstoffdefiziten</li>
                  <li className="flex items-start gap-3 text-muted-foreground"><Check className="w-5 h-5 text-accent shrink-0"/> Stressreduktion, Entgiftung und Darmsanierung als Vorbereitung</li>
                  <li className="flex items-start gap-3 text-muted-foreground"><Check className="w-5 h-5 text-accent shrink-0"/> Stabilisierende Begleitung vor und nach IVF-Eingriffen</li>
                </ul>
                <div className="bg-[#fff08a]/40 rounded-2xl p-6 border border-yellow-200/50 mt-8">
                  <h4 className="font-bold text-primary mb-2">Sie sind nicht allein</h4>
                  <p className="text-sm text-muted-foreground mb-4">Gemeinsam optimieren wir die funktionellen Parameter in Ihrem Zellstoffwechsel.</p>
                  <Link to={ROUTE_PATHS.CONTACT} className="inline-flex bg-accent text-white px-6 py-2.5 rounded-lg font-bold hover:bg-accent/90 transition-all text-sm items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Jetzt Termin online buchen
                  </Link>
                </div>
            </div>
            <div className="w-full lg:w-5/12 aspect-[4/3] bg-orange-50 rounded-[2.5rem] border border-border flex items-center justify-center text-amber-700 font-medium relative opacity-80">
              Platz für Kinderwunsch Bild
            </div>
          </div>
        </div>
      </section>

      {/* cosMedea Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="bg-[#fde4c8]/20 rounded-[3rem] p-10 md:p-16 border border-border flex flex-col md:flex-row items-center gap-16 shadow-sm">
            <div className="flex-1 order-2 md:order-1">
              <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Zweitpraxis cosMedea</span>
              <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6 leading-tight">Wellness & Ästhetik:<br/>Natürlich schöne Ergebnisse</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                In unserer Zweitpraxis cosMedea setzen wir auf Behandlungen, die Ihre natürliche Ausstrahlung unterstreichen. Von Tiefenentspannung im brainLight-Sessel bis hin zu ganzheitlichen Anti-Aging-Konzepten – wir unterstützen Ihre Schönheit von innen und außen.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {["Wellness & Massage", "Natürliches Anti-Aging", "Ästhetik"].map((tag, i) => (
                  <span key={i} className="bg-white border border-border px-4 py-1.5 rounded-full text-sm font-medium text-primary">{tag}</span>
                ))}
              </div>
              <Link to={ROUTE_PATHS.COSMEDEA} className="text-primary font-bold inline-flex items-center gap-2 group">
                Zu cosMedea wechseln <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
              </Link>
            </div>
            <div className="w-full md:w-5/12 aspect-square bg-orange-100/30 rounded-[2.5rem] border border-orange-200 flex items-center justify-center text-orange-800 font-medium order-1 md:order-2 opacity-60">
              Platz für CosMedea Bild
            </div>
          </div>
        </div>
      </section>

      {/* Über Mich */}
      <section className="py-24 bg-[#fff9ed] border-t border-border/40">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-5/12">
              <div className="aspect-[3/4] bg-white rounded-[2.5rem] p-4 shadow-sm relative border border-border/50">
                <div className="w-full h-full bg-slate-100 rounded-[2rem] border-2 border-dashed border-slate-300 flex flex-col items-center justify-center text-slate-400">
                  <Smile className="w-16 h-16 mb-4"/>
                  <span>Portrait Angela Deschner</span>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <span className="bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 inline-block">Expertin</span>
              <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6 leading-tight">Ihre Expertin für ganzheitliche Frauengesundheit</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Ich kombiniere meine Expertise aus drei Fachbereichen: Dem biochemischen Verständnis einer Heilpraktikerin, der Intuition einer erfahrenen Hebamme und modernster Präventivmedizin wie der IHHT-Mitochondrientherapie. Für einen Therapieansatz, der so einzigartig ist wie Sie selbst.
              </p>
              
              <div className="mb-8">
                <h4 className="font-bold text-primary text-xl mb-4">Qualifikationen</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-muted-foreground font-medium"><div className="w-2 h-2 bg-accent rounded-full"/> Staatlich geprüfte & examinierte Hebamme</li>
                  <li className="flex items-center gap-3 text-muted-foreground font-medium"><div className="w-2 h-2 bg-accent rounded-full"/> Geprüfte und zugelassene Heilpraktikerin</li>
                  <li className="flex items-center gap-3 text-muted-foreground font-medium"><div className="w-2 h-2 bg-accent rounded-full"/> Therapeutin für Mitochondriale Medizin (IHHT)</li>
                  <li className="flex items-center gap-3 text-muted-foreground font-medium"><div className="w-2 h-2 bg-accent rounded-full"/> Zertifizierte Infusions- und Injektionstherapeutin</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-primary text-xl mb-3">Sprachen</h4>
                <div className="flex gap-3 mb-8">
                  <span className="bg-white border border-border px-4 py-1.5 rounded-full text-sm font-medium text-primary shadow-sm">Deutsch</span>
                  <span className="bg-white border border-border px-4 py-1.5 rounded-full text-sm font-medium text-primary shadow-sm">Russisch</span>
                </div>
                <Link to={ROUTE_PATHS.UEBER_MICH} className="inline-flex bg-white border border-primary/20 text-primary px-8 py-3 rounded-xl font-bold hover:bg-primary/5 transition-all shadow-sm items-center gap-2">
                  Mehr über mich erfahren <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vorqualifizierungs-Sektion (moved here) */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#fde4c8]/20 rounded-[3rem] p-8 md:p-16 border border-primary/5 shadow-sm flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden"
          >
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100/30 rounded-bl-[200px] -z-0" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-tr-[100px] -z-0" />

            <div className="flex-1 relative z-10">
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                Der erste Schritt
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6 leading-tight">
                Lernen wir <span className="text-accent underline decoration-accent/20 underline-offset-8">uns kennen</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Meine Programme erfordern Ihre aktive Mitarbeit und die Bereitschaft, Verantwortung für Ihre Gesundheit zu übernehmen. Damit wir herausfinden, ob meine Philosophie und Ihre Ziele zusammenpassen, hilft mir ein kurzer Vorab-Check.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm"><Clock className="w-5 h-5 text-accent" /></div>
                  <span className="text-sm font-medium text-primary/80">Nur 2 Minuten Zeitaufwand</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm"><Heart className="w-5 h-5 text-accent" /></div>
                  <span className="text-sm font-medium text-primary/80">Passt unser Konzept zu Ihnen?</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm"><Activity className="w-5 h-5 text-accent" /></div>
                  <span className="text-sm font-medium text-primary/80">Direktes Feedback & Klarheit</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm"><Sparkles className="w-5 h-5 text-accent" /></div>
                  <span className="text-sm font-medium text-primary/80">Völlig unverbindlich</span>
                </div>
              </div>

              <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="inline-flex bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-primary/95 transition-all shadow-xl shadow-primary/10 items-center gap-3 group">
                Jetzt Vorab-Check starten <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="w-full lg:w-5/12 relative z-10">
              <div className="aspect-[4/3] bg-white rounded-[2.5rem] border border-orange-100 flex items-center justify-center p-8 text-center bg-[url('/src/assets/images/pattern-dot.svg')] bg-repeat shadow-sm">
                <div className="space-y-4">
                  <p className="text-4xl font-serif text-primary italic">„Ich freue mich <br /> auf Sie!“</p>
                  <p className="text-sm font-bold text-accent uppercase tracking-widest italic">— Angela Deschner</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Kontaktbereich */}
      <section className="py-24 bg-white relative border-t border-border/40">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <span className="bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 inline-block">Kontakt</span>
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">Schreiben Sie mir.</h2>
            <p className="text-lg text-muted-foreground">Nutzen Sie bequem das Formular oder kontaktieren Sie die Praxis direkt.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-10">
            <div className="flex-1 bg-background rounded-[2.5rem] p-8 md:p-12 border border-border shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2">Name</label>
                    <input type="text" className="w-full bg-white border border-border/70 rounded-xl px-4 py-3.5 focus:ring-accent focus:border-accent" required/>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2">E-Mail</label>
                    <input type="email" className="w-full bg-white border border-border/70 rounded-xl px-4 py-3.5 focus:ring-accent focus:border-accent" required/>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2">Ihre Telefonnummer</label>
                    <input type="tel" className="w-full bg-white border border-border/70 rounded-xl px-4 py-3.5 focus:ring-accent focus:border-accent"/>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2">Thema</label>
                    <select className="w-full bg-white border border-border/70 rounded-xl px-4 py-3.5 focus:ring-accent focus:border-accent">
                      <option>Erstberatung & Diagnostik</option>
                      <option>Hebammenbetreuung</option>
                      <option>Kinderwunsch Thematik</option>
                      <option>Zelltraining (IHHT)</option>
                      <option>Sonstiges</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">Ihre Nachricht</label>
                  <textarea rows={5} className="w-full bg-white border border-border/70 rounded-xl px-4 py-3.5 focus:ring-accent focus:border-accent resize-none" required></textarea>
                </div>
                <div className="flex items-start gap-4 bg-white/50 p-4 rounded-xl border border-border/50">
                  <input type="checkbox" id="dsgvo" className="mt-1 w-5 h-5 rounded border-gray-300 text-accent focus:ring-accent" required/>
                  <label htmlFor="dsgvo" className="text-sm text-primary font-medium">Ich willige ein, dass meine Daten zur Kontaktaufnahme verarbeitet werden. Weitere Infos dazu in der Datenschutzerklärung.</label>
                </div>
                <button type="submit" className="bg-accent text-white px-8 py-4 rounded-xl font-bold w-full md:w-auto hover:bg-accent/90 transition-all text-lg shadow-md">Nachricht absenden</button>
              </form>
            </div>

            <div className="lg:w-[420px] bg-[#fff08a]/30 rounded-[2.5rem] p-8 md:p-10 border border-yellow-200/50 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-serif text-primary mb-8">Kontakt Details</h3>
                
                <div className="space-y-8 mb-10">
                  <div className="flex gap-5">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-accent shrink-0 shadow-sm border border-border/30"><Phone className="w-6 h-6"/></div>
                    <div>
                      <div className="font-bold text-primary text-lg mb-1">Telefon / Fax</div>
                      <a href="tel:+4972538468728" className="text-muted-foreground hover:text-accent font-medium text-lg block">07253 - 84 68 72 8</a>
                      <span className="text-muted-foreground opacity-60 text-sm">Fax: 07253 - 84 68 72 9</span>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-accent shrink-0 shadow-sm border border-border/30"><Mail className="w-6 h-6"/></div>
                    <div>
                      <div className="font-bold text-primary text-lg mb-1">E-Mail</div>
                      <a href="mailto:info@feminatalis.de" className="text-muted-foreground hover:text-accent font-medium text-lg">info@feminatalis.de</a>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-accent shrink-0 shadow-sm border border-border/30"><MapPin className="w-6 h-6"/></div>
                    <div>
                      <div className="font-bold text-primary text-lg mb-1">Adresse</div>
                      <div className="text-muted-foreground font-medium text-lg leading-relaxed">Hebelstr. 3A<br/>76669 Bad Schönborn</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-border/50">
                <div className="flex items-center gap-3 mb-3 font-bold text-primary text-lg"><Clock className="w-6 h-6 text-accent"/> Sprechzeiten</div>
                <ul className="text-xs text-muted-foreground font-medium space-y-1">
                  <li className="flex justify-between"><span>Mo/Mi:</span> <span>08:00 – 12:30, 14:00 – 17:30</span></li>
                  <li className="flex justify-between"><span>Dienstag:</span> <span>14:00 – 17:30</span></li>
                  <li className="flex justify-between"><span>Donnerstag:</span> <span>08:30 – 12:30, 14:00 – 17:00</span></li>
                  <li className="flex justify-between"><span>Freitag:</span> <span>11:00 – 14:00</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patientenstimmen */}
      <section className="py-24 bg-background border-t border-border/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <span className="bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 inline-block">Feedbacks</span>
            <h2 className="text-4xl md:text-5xl font-serif text-primary">Aktuelle Patientenstimmen</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Müller", title: "Energie im Wochenbett", text: "Die IHHT Behandlung nach Corona hat Wunder gewirkt! Dank Angela bin ich wieder voll in meiner Kraft und konnte mein Wochenbett sehr entspannt und gesund genießen." },
              { name: "Maria & Thomas H.", title: "Unser kleines Wunder", text: "Nach Jahren der Frustration im Kinderwunschzentrum hat uns Angelas ganzheitlicher Ansatz und die Laborauswertung endlich geholfen. Unser kleines Wunder ist nun hier!" },
              { name: "Stefanie K.", title: "Ganzheitlich & Gewissenhaft", text: "Eine so extrem detaillierte Blutuntersuchung habe ich noch bei keinem Arzt gesehen. Alle meine biochemischen Mängel wurden erkannt und direkt ausbalanciert. Fühle mich wie neu." }
            ].map((r, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm border border-border relative">
                <div className="flex gap-1 mb-6 text-yellow-400">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-current"/>)}
                </div>
                <h4 className="font-bold text-primary mb-3 text-xl">{r.title}</h4>
                <p className="text-muted-foreground leading-relaxed mb-6 italic font-medium">"{r.text}"</p>
                <div className="font-bold text-primary bg-background inline-block px-4 py-1.5 rounded-full text-sm border border-border/50">– {r.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media CTA Section */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        {/* Background blobs for premium look */}
        <div className="absolute top-0 right-0 w-[40%] h-full bg-accent/10 rounded-l-[200px] -z-0" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/5 rounded-full blur-3xl -z-0" />

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
              <div className="inline-flex items-center gap-2 bg-white/10 text-orange-200 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                Täglich Zell-Power & Inspiration
              </div>
              <h2 className="text-4xl md:text-6xl font-serif leading-tight">
                Bleiben wir <span className="text-orange-300">verbunden</span>. <br />
                Über die Praxis hinaus.
              </h2>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
                Wusstest du, dass ich fast täglich Wissen aus 33 Jahren Hebammenkunst und funktioneller Medizin auf Instagram teile? Folge mir für echte Tipps, Q&As und einen Blick hinter die Kulissen.
              </p>
              
              <ul className="grid sm:grid-cols-2 gap-4">
                {[
                  "Exklusive Tipps zu Hormonen",
                  "Vorbereitung auf die Geburt",
                  "Wissen zu Mikronährstoffen",
                  "Live Q&A Sessions"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium">
                    <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-white" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-6 pt-4">
                <a 
                  href="https://instagram.com/feminatalis" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-accent text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:bg-accent/90 transition-all hover:-translate-y-1 shadow-lg shadow-black/20"
                >
                  <Instagram size={24} /> Angela auf Instagram folgen
                </a>
                <a 
                  href="https://youtube.com/@feminatalis" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:bg-white/20 transition-all"
                >
                  <Youtube size={24} /> YouTube Kanal
                </a>
              </div>
            </div>

            <div className="w-full lg:w-1/3">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-tr from-accent to-orange-400 rounded-[3rem] opacity-30 blur-2xl group-hover:opacity-50 transition-opacity" />
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[3rem] relative shadow-2xl">
                  <div className="aspect-square bg-muted rounded-2xl mb-6 flex items-center justify-center overflow-hidden border border-white/5">
                    {/* Placeholder for Instagram-like preview */}
                    <div className="text-center px-6">
                      <Instagram size={48} className="text-white/20 mx-auto mb-4" />
                      <p className="text-sm font-serif italic text-white/40 leading-relaxed">
                        Besuche mein Profil für tägliche Einblicke in Frauengesundheit & Zell-Energie.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-primary font-bold shadow-inner">AD</div>
                    <div>
                      <p className="font-bold text-white">feminatalis</p>
                      <p className="text-xs text-white/50">Angela Deschner</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}