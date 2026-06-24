import React, { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { ROUTE_PATHS } from "@/lib/index";
import { motion } from "framer-motion";
import { Leaf, Heart, Baby, Check, Phone, Mail, Clock, MapPin, Award, ArrowRight, ChevronRight, Activity, Star, CheckCircle, Syringe, Sparkles, Microscope, Zap, ShieldCheck, Instagram, Youtube, Facebook, UserCheck, HeartPulse } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useSiteImages } from "@/hooks/useSiteImages";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", topic: "", otherTopic: "", message: "", agree: false });
  const { getImageUrl } = useSiteImages();

  const heroImage = getImageUrl("img_hero_home", "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2040&auto=format&fit=crop");

  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agree) {
      alert('Bitte akzeptiere die Datenschutzbedingungen.');
      return;
    }
    setStatus('loading');
    try {
      // Simulate API call – replace with real endpoint as needed
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Form submitted:', formData);
      setStatus('success');
      // Reset form
      setFormData({ name: '', email: '', phone: '', topic: '', otherTopic: '', message: '', agree: false });
} catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <>
      <SEO 
        title="Praxis für funktionelle Medizin und Naturheilkunde & Hebammenpraxis" 
        description="Feminatalis: Deine Praxis für funktionelle Medizin, Naturheilkunde & Hebammenbegleitung in Bad Schönborn. Spezialisiert auf Kinderwunsch, Hormone & Mitochondrien-Therapie. Jetzt Termin anfragen!"
        ogType="business.medical"
        schema={{
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          "name": "feminatalis – Angela Deschner",
          "alternateName": "Praxis für funktionelle Medizin und Naturheilkunde & Hebammenpraxis",
          "description": "Spezialisierte Praxis für funktionelle Medizin, Naturheilkunde und Hebammenbegleitung in Bad Schönborn. Fokus auf Kinderwunsch, hormonelle Balance und zelluläre Gesundheit.",
          "image": "https://feminatalis.de/logo.png",
          "@id": "https://feminatalis.de",
          "url": "https://feminatalis.de",
          "telephone": "+4972538468728",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Hebelstr. 3A",
            "addressLocality": "Bad Schönborn",
            "postalCode": "76669",
            "addressCountry": "DE"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 49.2023,
            "longitude": 8.6534
          },
          "openingHoursSpecification": [
            { "@type": "OpeningHoursSpecification", "dayOfWeek": "Monday", "opens": "08:00", "closes": "17:30" },
            { "@type": "OpeningHoursSpecification", "dayOfWeek": "Tuesday", "opens": "14:00", "closes": "17:30" },
            { "@type": "OpeningHoursSpecification", "dayOfWeek": "Wednesday", "opens": "08:00", "closes": "17:30" },
            { "@type": "OpeningHoursSpecification", "dayOfWeek": "Thursday", "opens": "08:30", "closes": "17:00" },
            { "@type": "OpeningHoursSpecification", "dayOfWeek": "Friday", "opens": "11:00", "closes": "14:00" }
          ],
          "sameAs": [
            "https://www.instagram.com/feminatalis_praxis/",
            "https://www.facebook.com/NaturheilpraxisFeminatalis"
          ],
          "founder": {
            "@type": "Person",
            "name": "Angela Deschner",
            "jobTitle": "Heilpraktikerin & Hebamme"
          }
        }}
      />

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-48 text-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Feminatalis Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/75 backdrop-blur-[1px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column: Message */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                Ganzheitliche Gesundheit
              </div>
              <p className="text-accent font-bold tracking-widest uppercase text-xs mb-4">
                Hebammenbegleitung im Wandel – bewusst · vertieft · individuell
              </p>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-serif text-primary mb-6 leading-tight tracking-tight">
                Praxis für funktionelle Medizin und Naturheilkunde<br className="hidden sm:block"/>
                <span className="text-accent"> & Hebammenpraxis</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
                Wir kombinieren modernste Labordiagnostik mit tiefem naturheilkundlichen und geburtshilflichen Wissen. Für deine Gesundheit auf allen Lebenswegen.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-accent/10 overflow-hidden">
                      <img src={`https://i.pravatar.cc/150?u=${i+10}`} alt="Patient" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div className="text-sm font-medium text-primary/70">
                  <span className="font-bold text-primary">4500+</span> begleitete Patientinnen
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                 <div className="flex items-center gap-2 text-sm font-bold text-primary/60 uppercase tracking-widest bg-white/40 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/50">
                    <Award className="w-4 h-4 text-accent"/> 33 J. Hebammen-Erfahrung
                 </div>
                 <div className="flex items-center gap-2 text-sm font-bold text-primary/60 uppercase tracking-widest bg-white/40 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/50">
                    <Leaf className="w-4 h-4 text-accent"/> 10 J. Heilpraktiker-Erfahrung
                 </div>
              </div>
            </motion.div>

            {/* Right Column: Hero Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-tr from-accent/20 to-primary/10 rounded-[2.5rem] blur-2xl" />
              <div className="bg-white/80 backdrop-blur-xl border border-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl relative">
                <h3 className="text-2xl font-serif text-primary mb-2">Termin-Anfrage</h3>
                <p className="text-sm text-muted-foreground mb-8 font-medium">Schildere kurz dein Anliegen – wir melden uns bei dir.</p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input 
                      type="text" 
                      placeholder="Name" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/50 border border-border/50 rounded-xl px-4 py-3 text-sm focus:ring-accent focus:border-accent transition-all" 
                      required
                    />
                    <input 
                      type="email" 
                      placeholder="E-Mail" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/50 border border-border/50 rounded-xl px-4 py-3 text-sm focus:ring-accent focus:border-accent transition-all" 
                      required
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input 
                      type="tel" 
                      placeholder="Telefon (optional)" 
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white/50 border border-border/50 rounded-xl px-4 py-3 text-sm focus:ring-accent focus:border-accent transition-all" 
                    />
                    <select 
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full bg-white/50 border border-border/50 rounded-xl px-4 py-3 text-sm focus:ring-accent focus:border-accent transition-all"
                      required
                    >
                      <option value="" disabled>Thema wählen</option>
                      <option value="Hebammenbetreuung">Hebammenbetreuung</option>
                      <option value="Naturheilkunde">Naturheilkunde</option>
                      <option value="Kinderwunsch">Kinderwunsch</option>
                      <option value="Sonstiges">Sonstiges</option>
                    </select>
                  </div>

                  {formData.topic === "Sonstiges" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="overflow-hidden"
                    >
                      <input 
                        type="text" 
                        placeholder="Dein Anliegen (bitte spezifizieren)" 
                        value={formData.otherTopic}
                        onChange={(e) => setFormData({ ...formData, otherTopic: e.target.value })}
                        className="w-full bg-white/50 border border-accent/30 rounded-xl px-4 py-3 text-sm focus:ring-accent focus:border-accent transition-all mb-1" 
                        required
                      />
                    </motion.div>
                  )}

                  <textarea 
                    placeholder="Deine Nachricht..." 
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={3} 
                    className="w-full bg-white/50 border border-border/50 rounded-xl px-4 py-3 text-sm focus:ring-accent focus:border-accent transition-all resize-none" 
                    required
                  ></textarea>
                  
                  <div className="flex items-start gap-3 py-2">
                    <input 
                      type="checkbox" 
                      id="hero-dsgvo" 
                      checked={formData.agree}
                      onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                      className="mt-1 w-4 h-4 rounded border-gray-300 text-accent focus:ring-accent" 
                      required
                    />
                    <label htmlFor="hero-dsgvo" className="text-[10px] text-muted-foreground leading-tight font-medium">
                      Ich willige ein, dass meine Daten zur Kontaktaufnahme verarbeitet werden.
                    </label>
                  </div>
                  
                  <button type="submit" className="bg-primary text-white px-8 py-4 rounded-xl font-bold w-full hover:bg-primary/95 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group">
                    Jetzt Nachricht senden <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3 Main Service Cards (overlapping hero) */}
      <section className="relative z-20 -mt-24 mb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Leaf className="w-8 h-8 text-accent"/>, title: "Naturheilpraxis", desc: "Ursachen finden, statt nur Symptome behandeln. Für ganzheitliche Vitalität.", link: ROUTE_PATHS.NATURHEILPRAXIS },
              { icon: <Heart className="text-primary w-8 h-8"/>, title: "Hebammenpraxis", desc: "Sichere Begleitung in Schwangerschaft, Wochenbett, Stillzeit & Kurse.", link: ROUTE_PATHS.HEBAMMENPRAXIS },
              { icon: <Baby className="w-8 h-8 text-accent"/>, title: "Kinderwunsch", desc: "Natürliche Unterstützung auf dem Weg zu deinem Wunschkind.", link: ROUTE_PATHS.KINDERWUNSCH }
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
            <div className="flex items-center gap-3"><Award className="w-6 h-6 text-accent"/> 33 J. Hebammenexpertise</div>
            <div className="flex items-center gap-3"><Heart className="w-6 h-6 text-accent"/> 4500 Mütter</div>
            <div className="flex items-center gap-3"><Leaf className="w-6 h-6 text-accent"/> 10 J. Heilpraktikererfahrung</div>
            <div className="flex items-center gap-3"><UserCheck className="w-6 h-6 text-accent"/> über 2000 Patienten</div>
            <div className="flex items-center gap-3"><Activity className="w-6 h-6 text-accent"/> Prävention & Ganzheitlichkeit</div>
          </div>
        </div>
      </section>

      {/* Praxis-Slider */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <span className="bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 inline-block">Einblicke</span>
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">Willkommen in unserer Praxis</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Lass dich von unserer Praxisatmosphäre inspirieren.</p>
          </div>
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[Autoplay({ delay: 4000, stopOnInteraction: false })]}
            className="w-full max-w-5xl mx-auto px-10 sm:px-12"
          >
            <CarouselContent>
              {[
                "Büro mit Menschen-min.jpg",
                "cosMedea Fensteransicht-min.jpg",
                "cosMedea Flur-min.jpg",
                "cosMedea Türansicht-min.jpg",
                "feminatalis-Raum Fensteransicht-min.jpg",
                "Hauseinhang-min.jpg",
                "Kursraum Ansicht aus dem Flur-min.jpg",
                "Kurstraum Matten Abendstimmung-min.jpg",
                "Labor-min.jpg",
                "Seminarraum mit Leinwand-min.jpg",
                "Seminarraum mit Tischen -min.jpg",
              ].map((img, i) => (
                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-border/50">
                      <img
                        src={`/assets/Praxisbilder/${img}`}
                        alt={`Praxisansicht ${i + 1}`}
                        loading="lazy"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="flex bg-white/90 shadow-md border border-border/50 hover:bg-white left-1 md:-left-12" />
            <CarouselNext className="flex bg-white/90 shadow-md border border-border/50 hover:bg-white right-1 md:-right-12" />
          </Carousel>
        </div>
      </section>

      {/* Ablauf-Sektion */}
      <section className="py-24 bg-[#fff9f2] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent" />
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-20">
            <span className="bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 inline-block">Der Weg zu deiner Gesundheit</span>
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">Dein strukturierter Ablauf</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Klarheit und Transparenz von Anfang an. So begleiten wir dich Schritt für Schritt zurück in deine Kraft.
            </p>
          </div>

          <div className="relative">
            {/* Vertical Line for Desktop */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary/10 hidden lg:block" />

            <div className="space-y-16">
              {[
                {
                  step: "1",
                  title: "Telefonisches Vorgespräch",
                  time: "15 Min. (Kostenlos)",
                   desc: "Wir besprechen kurz dein Anliegen – Symptome, Wünsche und Erwartungen. So können wir einschätzen, ob wir dich sinnvoll unterstützen können.",
                  icon: <Phone className="w-6 h-6" />
                },
                {
                  step: "2",
                  title: "Orientierungs-Gespräch",
                  time: "30-45 Min. (Kostenlos)",
                  desc: "Persönliches Kennenlernen vor Ort. Wir klären allgemeine Fragen, eruieren deine genauen Ziele und stecken den finanziellen Rahmen ab. Fühlt sich alles stimmig an, schließen wir einen Behandlungsvertrag.",
                  icon: <UserCheck className="w-6 h-6" />
                },
                {
                  step: "3",
                  title: "Anamnesetermin",
                  time: "Faktensammeln",
                  desc: "Wir beleuchten ganzheitlich deine Beschwerden, analysieren vorhandene Befunde und klären, welche Diagnostik sinnvoll ist, um einen maßgeschneiderten Therapievorschlag zu erstellen.",
                  icon: <Microscope className="w-6 h-6" />
                },
                {
                  step: "4",
                  title: "Therapievorschlag & Angebot",
                  time: "Planung & Investment",
                  desc: "Du erhältst einen auf deine Ziele abgestimmten Therapievorschlag sowie einen klaren Kostenplan. Das schafft eine stabile Basis für deinen persönlichen Heilungsweg.",
                  icon: <CheckCircle className="w-6 h-6" />
                },
                {
                  step: "5",
                  title: "Behandlung & Umsetzung",
                  time: "Regelmäßige Sitzungen",
                  desc: "Wir setzen deinen Plan konsequent um. In regelmäßigen Sitzungen arbeiten wir genau an dem, was dich jetzt am stärksten voranbringt – von akuter Linderung bis hin zur Ursachenbehandlung.",
                  icon: <Activity className="w-6 h-6" />
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className="lg:w-1/2 flex justify-end">
                    <div className={`w-full lg:max-w-md bg-white p-8 rounded-[2.5rem] shadow-sm border border-border/50 relative hover:shadow-xl transition-all duration-500 group ${i % 2 !== 0 ? 'lg:text-left' : 'lg:text-right'}`}>
                      <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-primary/10 rounded-full hidden lg:block ${i % 2 !== 0 ? '-left-10' : '-right-10'}`} />
                      <div className="text-accent font-bold text-sm mb-2 uppercase tracking-widest">{item.time}</div>
                      <h3 className="text-2xl font-serif text-primary mb-4">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm font-medium">{item.desc}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg transform rotate-3 group-hover:rotate-0 transition-transform">
                      {item.icon}
                    </div>
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-xs shadow-md">
                      {item.step}
                    </div>
                  </div>

                  <div className="lg:w-1/2">
                    {/* Empty div for layout balance on desktop */}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="mt-24 bg-primary text-white p-12 rounded-[3rem] text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/src/assets/images/pattern-dot.svg')] opacity-10" />
            <h3 className="text-2xl md:text-3xl font-serif mb-6 relative z-10">Bereit für den ersten Schritt?</h3>
            <p className="text-white/80 mb-10 max-w-xl mx-auto relative z-10">Wir bringen deinen Körper zurück in eine stabile, selbstregulierende Balance.</p>
            <a href="#hero" className="inline-flex bg-white text-primary px-8 md:px-10 py-4 md:py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all relative z-10 group items-center gap-3">
              Zum Anfrage-Formular <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Hebammenpraxis Sektion */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <span className="bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 inline-block tracking-widest uppercase">Qualität vor Quantität</span>
            <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6">
              Hebammenbegleitung im Wandel – <span className="text-accent italic">bewusst · vertieft · individuell</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
               Nach 33 Jahren Erfahrung fokussieren wir uns auf eine exklusive, tiefgreifende Begleitung. Wir nehmen eine begrenzte Anzahl an Frauen auf, die über die Standard-Versorgung hinaus in ihre Gesundheit und Geburtskraft investieren möchten.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { 
                title: "Säule 1:\nBasis-Begleitung", 
                pts: ["Schwangerschaftsbegleitung", "Kurse (Geburtsvorbereitung & Rückbildung)", "Wochenbettbetreuung & Stillberatung"], 
                icon: <HeartPulse className="text-primary w-8 h-8"/>, 
                link: ROUTE_PATHS.HEBAMMENPRAXIS,
                badge: "Kasse + Privat"
              },
              { 
                title: "Säule 2:\nAkut-Hilfe", 
                pts: ["Schmerzmanagement", "Schwangerschaftsübelkeit", "Erschöpfungs-Check"], 
                icon: <Activity className="text-accent w-8 h-8"/>, 
                link: ROUTE_PATHS.HEBAMMENPRAXIS,
                badge: "Kasse + Naturheilkunde"
              },
              { 
                title: "Säule 3:\nDas Zell-Protokoll", 
                pts: ["Vollblut-Nährstoff-Analyse", "IHHT-Zelltraining", "Mitochondriale Infusionen"], 
                icon: <Sparkles className="text-primary w-8 h-8"/>, 
                link: ROUTE_PATHS.ZELLTRAINING,
                badge: "Premium / Privat"
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

          <div className="bg-[#fde4c8]/30 rounded-[3rem] p-8 md:p-16 mb-16 flex flex-col md:flex-row items-center gap-16 border border-[#fde4c8] shadow-inner relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#fde4c8]/20 rounded-bl-[200px] -z-0" />
            <div className="flex-1 relative z-10">
              <h3 className="text-3xl md:text-4xl font-serif text-primary mb-6">Warum Kassenleistungen niemals ausreichen</h3>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed font-medium">
                Das Standard-Kassensystem deckt nur das absolute Minimum ab. Wer jedoch eine wirklich selbstbestimmte, kraftvolle Geburt und eine schnelle Regeneration im Wochenbett erleben möchte, braucht mehr als nur "Routine-Vorsorge".
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Wir arbeiten mit Frauen, die bereit sind, in Eigenverantwortung für ihre eigene und die Gesundheit ihrer Kinder zu handeln. Unser Fokus liegt auf Premium-Begleitung und fundiertem Wissen. Wer mit 20 % Ladung in die Geburt geht, riskiert Wehenschwäche und medizinische Eingriffe. Unser Ziel ist die 100-Prozent-Ladung deines „Zell-Akkus“.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                <div><div className="text-3xl font-bold text-accent">33 J.</div><div className="text-xs font-black uppercase tracking-widest text-primary/60">Expertise</div></div>
                <div><div className="text-3xl font-bold text-accent">100%</div><div className="text-xs font-black uppercase tracking-widest text-primary/60">Zell-Power</div></div>
                <div><div className="text-3xl font-bold text-accent">Sicher</div><div className="text-xs font-black uppercase tracking-widest text-primary/60">Evidenz</div></div>
              </div>
            </div>
            <div className="w-full md:w-1/3 aspect-[4/5] rounded-3xl overflow-hidden shadow-lg bg-orange-50/50">
              <img 
                src={getImageUrl("img_hebammen_section_home", "/hebammen_section.png")} 
                alt="Schwangere Frau in der Hebammenpraxis" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>

          <div className="mb-12">
            <h4 className="text-2xl font-serif text-primary text-center mb-8">Weitere Hebammenleistungen</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                  { name: 'Schwangerschaftsbeschwerden', link: ROUTE_PATHS.BESCHWERDEN },
                  { name: 'Mikronährstoff-Beratung', link: ROUTE_PATHS.MIKRONAEHRSTOFFE },
                  { name: 'Geburtsvorbereitung', link: ROUTE_PATHS.GEBURTSVORBEREITUNG },
                  { name: 'Akupunktur', link: ROUTE_PATHS.AKUPUNKTUR },
                  { name: 'Wochenbettbetreuung', link: ROUTE_PATHS.WOCHENBETTBETREUUNG },
                  { name: 'Rückbildungsgymnastik', link: ROUTE_PATHS.RUECKBILDUNG }
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
              Durch eine ausführliche Anamnese, körperliche Untersuchung & spezialisierte Labordiagnostik finden wir die wahren Ursachen deiner Beschwerden.
            </p>
          </div>

          <h4 className="text-2xl font-serif text-primary text-center mb-8">Unsere Leistungspfeiler</h4>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { title: "Zelluläre Ursachenforschung", desc: "Umfangreiche Stoffwechsel- und Mitochondrien-Analyse für absolute Klarheit.", icon: <Activity className="w-6 h-6"/> },
              { title: "Regulierung des Stoffwechsels", desc: "Wir füllen Nährstoffspeicher systematisch und individuell auf.", icon: <Leaf className="w-6 h-6"/> },
              { title: "Vitalisierende Infusionen", desc: "Direkte und schnelle Nährstoffversorgung unter Umgehung des Magen-Darm-Traktes.", icon: <Syringe className="w-6 h-6"/> }
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
              { title: "Labor-Diagnostik", desc: "Exakte Vollblut-, Stuhl-, Speichel- und Urinanalysen.", link: ROUTE_PATHS.LABOR },
              { title: "Allergiebehandlung", desc: "Ursächliche Behandlung durch Immunmodulation und Darmsanierung.", link: ROUTE_PATHS.ALLERGIE },
              { title: "CO2-Trockenbäder", desc: "Steigerung der Mikrozirkulation durch CO2-Trockenbäder bei Wundheilungsstörungen & zur Schmerzlinderung.", link: ROUTE_PATHS.CO2_THERAPIE },
              { title: "Long-Covid Hilfe", desc: "Effektive Hilfe bei postviraler Erschöpfung, Long-Covid & Post-Vac-Syndrom.", link: ROUTE_PATHS.LONG_COVID },
              { title: "Hormon-Balance", desc: "Regulation der Sexualhormone, Schilddrüse und Stressachse z.B. bei Zyklusstörungen, Hashimoto oder Depression.", link: ROUTE_PATHS.HORMONTHERAPIE },
              { title: "Darmsanierung", desc: "Aufbau eines gesunden Mikrobioms als Fundament für dein Immunsystem.", link: ROUTE_PATHS.DARMANALYSE },
              { title: "TCM", desc: "Traditionelle Puls- & Zungen-Diagnostik für Energiefluss, Wohlbefinden und Schmerzlinderung. (Wir bieten keine chinesische Kräuterkunde an.)", link: ROUTE_PATHS.TCM },
              { title: "Zelltraining (IHHT)", desc: "Intervallhypoxie für mehr Kraft, bessere Belastbarkeit und Anti-Aging.", link: ROUTE_PATHS.ZELLTRAINING },
              { title: "BrainLight", desc: "Licht- und Farbimpuls-System für Tiefenentspannung, Regeneration und mentale Klarheit.", link: ROUTE_PATHS.BRAINLIGHT }
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

      {/* Schwerpunkt: Mitochondriale Zellmedizin */}
      <section className="py-24 bg-[#fff9f2] overflow-hidden relative border-t border-b border-border/60">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="flex-1 space-y-6 text-left">
              <span className="bg-[#fde4c8] text-orange-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 inline-block">
                Angelas absoluter Therapie-Schwerpunkt
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-primary leading-tight">
                Zellmedizin & <br /><span className="text-accent italic">Mitochondrien-Therapie</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Du bist nur so gesund wie deine Zellen. Chronische Erschöpfung, Burnout (CFS), hormonelle Dysbalancen und chronische Entzündungen haben ihre Ursache oft tief in den zellulären Kraftwerken – den <strong>Mitochondrien</strong>. 
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Als unser absoluter Praxisschwerpunkt untersuchen wir deine zelluläre Leistungsfähigkeit mittels modernster Spezial-Labordiagnostik. Wir machen Störungen sichtbar und bauen deine Energieproduktion (ATP) durch gezielten Nährstoffaufbau systematisch wieder auf.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-muted-foreground">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" /> 
                  <span><strong>Präzise Ursachenforschung:</strong> Nachweis von mitochondrialen Schäden und zellulärem Stress im Speziallabor.</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" /> 
                  <span><strong>Zellulärer Nährstoffaufbau:</strong> Gezielte Zufuhr der ca. 45 essenziellen Mikronährstoffe für die Atmungskette.</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" /> 
                  <span><strong>Ganzheitliche Regeneration:</strong> Ausleitung blockierender Schwermetalle und Umweltgifte.</span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link 
                  to={ROUTE_PATHS.MITOCHONDRIEN} 
                  className="inline-flex bg-accent text-white px-8 py-3.5 rounded-xl font-bold hover:bg-accent/90 transition-all shadow-md items-center gap-2"
                >
                  Schwerpunkt-Therapie ansehen <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  to={ROUTE_PATHS.VORQUALIFIZIERUNG} 
                  className="inline-flex bg-white text-primary border border-primary/10 px-8 py-3.5 rounded-xl font-bold hover:bg-slate-50 transition-all shadow-sm items-center gap-2"
                >
                  Zellcheck anfragen
                </Link>
              </div>
            </div>

            {/* Right Teaser Column: Mitochondrien Image */}
            <div className="w-full lg:w-5/12">
              <div className="bg-white p-6 rounded-[2.5rem] border border-border shadow-xl relative overflow-hidden">
                <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full z-10 shadow-sm flex items-center gap-1">
                  <Zap size={10} />
                  Mitochondrien-Therapie & Zellmedizin
                </div>
                
                {/* Image Preview */}
                <div className="rounded-2xl overflow-hidden border border-border mt-4 aspect-[4/3] relative group">
                  <img 
                    src="/assets/Mitochiondrien 3.jpg" 
                    alt="Mitochondrien Therapie - Zellmedizin" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex items-end p-6">
                    <div className="text-white text-left">
                      <span className="text-xs text-accent font-bold uppercase tracking-wider block mb-1">Deine Zellkraftwerke</span>
                      <p className="text-sm font-semibold leading-tight">Mitochondrien – die Energiequellen deines Körpers.</p>
                    </div>
                  </div>
                </div>

                {/* Key mitochondria facts */}
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div className="p-3 bg-orange-50/50 rounded-xl border border-orange-100/50 text-left">
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground block">Nährstoffe</span>
                    <span className="text-base font-bold text-accent block">45+ <span className="text-xs font-normal text-muted-foreground">Essenziell</span></span>
                  </div>
                  <div className="p-3 bg-orange-50/50 rounded-xl border border-orange-100/50 text-left">
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground block">ATP pro Fettsäure</span>
                    <span className="text-base font-bold text-accent block">122 <span className="text-xs font-normal text-muted-foreground">vs. 28 Glucose</span></span>
                  </div>
                </div>
                
                <p className="text-[11px] text-muted-foreground leading-relaxed mt-4 italic text-left">
                  Deine Zellen sind der Schlüssel zu neuer Vitalität. Mit gezielter Mitochondrien-Diagnostik und Nährstoffaufbau bringen wir deine Energieproduktion wieder in Schwung.
                </p>
              </div>
            </div>

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
                Ein unerfüllter Kinderwunsch oder hormonelle Dysbalance belasten oft Körper und Seele tiefgreifend. Wir nehmen uns die Zeit, um die optimale Lösung zu finden und deinem Wunschkind näher zu kommen.
             </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <h3 className="text-3xl font-serif text-primary mb-6">Unser ganzheitlicher Ansatz</h3>
               <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3 text-muted-foreground"><Check className="w-5 h-5 text-accent shrink-0"/> Detaillierte Stoffwechsel-, Hormon- & Zell-Analyse im Spezial-Labor sowie Zyklusbeobachtung</li>
                  <li className="flex items-start gap-3 text-muted-foreground"><Check className="w-5 h-5 text-accent shrink-0"/> Gezielte Durchblutungssteigerung</li>
                  <li className="flex items-start gap-3 text-muted-foreground"><Check className="w-5 h-5 text-accent shrink-0"/> Laborbasierter individueller Therapieplan zur Optimierung der Mikronährstoffversorgung</li>
                  <li className="flex items-start gap-3 text-muted-foreground"><Check className="w-5 h-5 text-accent shrink-0"/> Stressreduktion, Entgiftung und Darmsanierung als Vorbereitung</li>
                  <li className="flex items-start gap-3 text-muted-foreground"><Check className="w-5 h-5 text-accent shrink-0"/> Stabilisierende Begleitung vor und nach IVF-Eingriffen</li>
                </ul>
                <div className="bg-[#fde4c8]/40 rounded-2xl p-6 border border-[#fde4c8] mt-8">
                  <h4 className="font-bold text-primary mb-2">Du bist nicht allein</h4>
                  <p className="text-sm text-muted-foreground mb-4">Gemeinsam optimieren wir die funktionellen Parameter in deinem Zellstoffwechsel.</p>
                  <Link to={ROUTE_PATHS.CONTACT} className="inline-flex bg-accent text-white px-6 py-2.5 rounded-lg font-bold hover:bg-accent/90 transition-all text-sm items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Beratungs-Termin anfragen
                  </Link>
                </div>
            </div>
            <div className="w-full lg:w-5/12 aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-lg bg-orange-50/50">
              <img 
                src={getImageUrl("img_kinderwunsch_section_home", "/kinderwunsch_section.png")} 
                alt="Kinderwunsch – Hoffnung und Geborgenheit" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </section>


      {/* Über Mich */}
      <section className="py-24 bg-[#fff9ed] border-t border-border/40">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-5/12">
              <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-xl border border-border/50 bg-orange-50/50">
                <img 
                  src={getImageUrl("img_portrait_angela", "/angela_portrait.png")} 
                  alt="Angela Deschner – Hebamme und Heilpraktikerin" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
            <div className="flex-1">
              <span className="bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 inline-block">Expertin</span>
              <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6 leading-tight">Deine Expertin für ganzheitliche Gesundheit & Ursachenmedizin</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Wir kombinieren unsere Expertise aus drei Fachbereichen: Dem biochemischen Verständnis einer Heilpraktikerin, der Intuition einer erfahrenen Hebamme und modernster Präventivmedizin wie der IHHT-Mitochondrientherapie. Für einen Therapieansatz, der so einzigartig ist wie du selbst.
              </p>
              
              <div className="mb-8">
                <h4 className="font-bold text-primary text-xl mb-4">Qualifikationen</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-muted-foreground font-medium"><div className="w-2 h-2 bg-accent rounded-full"/> Staatlich geprüfte & examinierte Hebamme</li>
                  <li className="flex items-center gap-3 text-muted-foreground font-medium"><div className="w-2 h-2 bg-accent rounded-full"/> Geprüfte und zugelassene Heilpraktikerin</li>
                  <li className="flex items-center gap-3 text-muted-foreground font-medium"><div className="w-2 h-2 bg-accent rounded-full"/> Zertifizierter Master of Acupuncture</li>
                  <li className="flex items-center gap-3 text-muted-foreground font-medium"><div className="w-2 h-2 bg-accent rounded-full"/> Zertifizierte Mikrobiom-Spezialistin</li>
                  <li className="flex items-center gap-3 text-muted-foreground font-medium"><div className="w-2 h-2 bg-accent rounded-full"/> Zertifizierte Chelat-Therapeutin</li>
                  <li className="flex items-center gap-3 text-muted-foreground font-medium"><div className="w-2 h-2 bg-accent rounded-full"/> Zertifizierte Ästhetik-Therapeutin</li>
                  <li className="flex items-center gap-3 text-muted-foreground font-medium"><div className="w-2 h-2 bg-accent rounded-full"/> Therapeutin für Mitochondriale Medizin (IHHT)</li>
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
                Unsere Programme erfordern deine aktive Mitarbeit und die Bereitschaft, Verantwortung für deine Gesundheit zu übernehmen. Damit wir herausfinden, ob unsere Philosophie und deine Ziele zusammenpassen, hilft uns ein kurzer Vorab-Check.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm"><Check className="w-5 h-5 text-accent" /></div>
                  <span className="text-sm font-medium text-primary/80">Nur 2 Minuten Zeitaufwand</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm"><Check className="w-5 h-5 text-accent" /></div>
                  <span className="text-sm font-medium text-primary/80">Passt unser Konzept zu dir?</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm"><Check className="w-5 h-5 text-accent" /></div>
                  <span className="text-sm font-medium text-primary/80">Direktes Feedback & Klarheit</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm"><Check className="w-5 h-5 text-accent" /></div>
                  <span className="text-sm font-medium text-primary/80">Völlig unverbindlich</span>
                </div>
              </div>

              <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="inline-flex bg-primary text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl font-bold text-lg hover:bg-primary/95 transition-all shadow-xl shadow-primary/10 items-center gap-3 group">
                Jetzt Vorab-Check starten <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="w-full lg:w-5/12 relative z-10">
              <div className="aspect-[4/3] bg-white rounded-[2.5rem] border border-orange-100 flex items-center justify-center p-8 text-center bg-[url('/src/assets/images/pattern-dot.svg')] bg-repeat shadow-sm">
                <div className="space-y-4">
                  <p className="text-4xl font-serif text-primary italic">„Lass deine Gesundheit zu deiner wichtigsten Priorität aufsteigen“</p>
                  <p className="text-sm font-bold text-accent uppercase tracking-widest italic">— A. Deschner</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Kontaktbereich - Jetzt reduziert auf Details, da Formular im Header ist */}
      <section className="py-24 bg-white relative border-t border-border/40">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 inline-block">Kontakt</span>
              <h2 className="text-4xl md:text-5xl font-serif text-primary mb-8">Direkter Draht zur Praxis.</h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Hast du Fragen oder möchtest du uns persönlich erreichen? Wir sind für dich da. Unsere Praxis befindet sich in zentraler Lage in Bad Schönborn.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-accent shrink-0 border border-orange-100"><Phone className="w-5 h-5"/></div>
                  <div>
                    <div className="font-bold text-primary mb-1 text-sm">Telefon</div>
                    <a href="tel:+4972538468728" className="text-muted-foreground hover:text-accent font-medium text-sm">07253 - 84 68 72 8</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-accent shrink-0 border border-orange-100"><Mail className="w-5 h-5"/></div>
                  <div>
                    <div className="font-bold text-primary mb-1 text-sm">E-Mail</div>
                    <a href="mailto:kontakt@feminatalis.de" className="text-muted-foreground hover:text-accent font-medium text-sm">kontakt@feminatalis.de</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#fde4c8]/30 rounded-[2.5rem] p-8 md:p-12 border border-[#fde4c8]">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-accent shrink-0 shadow-sm border border-border/30"><MapPin className="w-6 h-6"/></div>
                <div>
                   <h3 className="text-2xl font-serif text-primary mb-1">Anfahrt</h3>
                   <p className="text-muted-foreground font-medium">Hebelstr. 3A, 76669 Bad Schönborn</p>
                </div>
              </div>
              
              <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-white shadow-sm">
                <div className="flex items-center gap-3 mb-4 font-bold text-primary"><Clock className="w-5 h-5 text-accent"/> Sprechzeiten</div>
                <ul className="text-xs text-muted-foreground font-medium space-y-2">
                  <li className="flex justify-between border-b border-border/30 pb-2"><span>Mo / Mi:</span> <span className="text-primary">08:00 – 12:30, 14:00 – 17:30</span></li>
                  <li className="flex justify-between border-b border-border/30 pb-2"><span>Dienstag:</span> <span className="text-primary">14:00 – 17:30</span></li>
                  <li className="flex justify-between border-b border-border/30 pb-2"><span>Donnerstag:</span> <span className="text-primary">08:30 – 12:30, 14:00 – 17:00</span></li>
                  <li className="flex justify-between"><span>Freitag:</span> <span className="text-primary">11:00 – 14:00</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Patientenstimmen & Google Reviews */}
      <section className="py-24 bg-background border-t border-border/30 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-orange-100/20 rounded-full blur-3xl -z-0" />
        <div className="absolute top-10 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-0" />

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 inline-block tracking-wider uppercase">Bewertungen</span>
              <h2 className="text-4xl md:text-5xl font-serif text-primary leading-tight">Echte Stimmen unserer Patienten</h2>
            </div>
            
            {/* Google Rating Overview Badge */}
            <div className="bg-white px-6 py-4 rounded-2xl border border-border/60 shadow-sm flex items-center gap-4 shrink-0 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-muted/40 rounded-xl flex items-center justify-center">
                <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="font-bold text-primary text-xl leading-none">5.0</span>
                  <div className="flex text-yellow-400">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-3.5 h-3.5 fill-current"/>)}
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Exzellent basierend auf Google Reviews</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                name: "Tina H.", 
                initials: "TH",
                title: "Liebevolle & kompetente Hebammenbetreuung", 
                text: "Als ich 2016 mit unserer zweiten Tochter schwanger war, habe ich Frau Angela Schäfer-Deschner als betreuende Hebamme ausgewählt. Sie hat mich in meiner Schwangerschaft begleitet und mich im Wechsel mit meiner Frauenärztin betreut. Frau Schäfer-Deschner war eine kompetente und herzliche Ansprechpartnerin, die mir in jeder Hinsicht gut zur Seite stand und mich unterstützt hat. Nach der Geburt hat sie sich dann im Wochenbett um unsere Tochter und mich gekümmert. Dabei hat sie auch unsere große Tochter immer sehr liebevoll mit eingebunden und ihr und uns ein gutes Gefühl gegeben. Auch die Rückbildung habe ich in der Hebammenpraxis gemacht und war sehr zufrieden. Genau die richtige Mischung aus Anstrengung und Entspannung. Ich kann die Hebammenpraxis uneingeschränkt weiterempfehlen und würde selbst jederzeit wieder hingehen." 
              },
              { 
                name: "Melanie Dogaru", 
                initials: "MD",
                title: "Umfangreiches Wissen & maßgeschneiderte Therapie", 
                text: "Diese Praxis ist eine absolute Empfehlung.. Frau Deschner hat umfangreiches Wissen das stets auch noch erweitert wird und geht den Symptomen auf den Grund. Sie nimmt sich Zeit um einen maßgeschneiderten Therapieplan zu erstellen und man fühlt sich ernst genommen und sehr gut betreut." 
              },
              { 
                name: "Re Ha", 
                initials: "RH",
                title: "Betreuung bei 3 Schwangerschaften mit Herz", 
                text: "Wir können Angela und Sabrina nur empfehlen und ein ganz dickes Dankeschön! Mehr als DANKE zu sagen für die Betreuungen meiner 3 Schwangerschaften und Rückbildungskurse sind aussagekräftig genug!!! Weiter so, sagen wir 2 mit 3 gesunden Kindern! Angela unseren dritten Spatz habe ich bis Juni 2020 gestillt!!! Egal was war - die Hebammen sind immer mit Rat und Tat für uns da gewesen! Alles Gute für Euch & Praxisteam. Ganz liebe Grüße Antje 😘" 
              },
              { 
                name: "Cornelia Wirth", 
                initials: "CW",
                title: "Hervorragende Hebamme & Heilpraktikerin", 
                text: "Ich habe Frau Deschner sowohl als Hebamme, als auch als Heilpraktikerin kennengelernt. Sie überzeugt mich immer wieder erneut durch ihre liebevolle, einfühlsame Art und durch ihr umfangreiches Fachwissen. Bei meiner Mikronährstoffanalyse und auch während der Schwangerschaft/Wochenbettbetreuung habe ich mich sehr gut beraten und versorgt gefühlt." 
              },
              { 
                name: "Ayse Duman", 
                initials: "AD",
                title: "Die perfekte Hebamme mit Herz", 
                text: "Ich habe lange nach der perfekten Hebamme gesucht und wurde dann durch Zufall fündig. Frau Deschner war immer erreichbar und hatte immer ein offenes Ohr. Sie nahm mir immer die Ängste. Nachdem ich den Geburtsvorbereitungskurs bei ihr gemacht hatte hatte ich überhaupt keine Angst mehr vor der Geburt. Ihre Art macht sie zu etwas besonderem. Sie ist super lieb und sagt auch direkt ihre Meinung, wenn etwas nicht passt. Auch die Wochenbettbetreuung verlief problemlos auch war der Rückbildungskurs sehr interessant und zugleich anstrengend. Falls irgendwann das zweite Kind kommt, dann wird Frau Deschner auf jeden Fall die Hebamme. Dankeschön für alles!!!" 
              }
            ].map((r, i) => (
              <div 
                key={i} 
                className={`bg-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 border border-border/60 relative flex flex-col justify-between group ${i >= 3 ? 'lg:col-span-1 md:col-span-1' : ''}`}
              >
                {/* Accent Top Color Line */}
                <div className="absolute top-0 left-10 right-10 h-[3px] bg-gradient-to-r from-accent/30 to-orange-400/40 rounded-b-full group-hover:from-accent group-hover:to-orange-400 transition-all duration-300" />
                
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex gap-1 text-yellow-400">
                      {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-current"/>)}
                    </div>
                    {/* Google Small Icon */}
                    <div className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center shadow-sm border border-slate-100">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                      </svg>
                    </div>
                  </div>
                  
                  <h4 className="font-bold text-primary mb-3 text-lg leading-snug">{r.title}</h4>
                  <p className="text-muted-foreground text-[14px] leading-relaxed mb-8 italic">
                    "{r.text}"
                  </p>
                </div>

                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-100 to-[#fde4c8] text-primary flex items-center justify-center font-bold text-sm shadow-inner shrink-0">
                    {r.initials}
                  </div>
                  <div>
                    <div className="font-bold text-primary text-sm leading-tight">{r.name}</div>
                    <div className="text-[11px] text-muted-foreground/80 flex items-center gap-1 mt-0.5">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500" />
                      Verifizierter Patient
                    </div>
                  </div>
                </div>
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
                Wusstest du, dass wir fast täglich Wissen aus 33 Jahren Hebammenkunst und funktioneller Medizin auf Instagram teilen? Folge uns für echte Tipps, Q&As und einen Blick hinter die Kulissen.
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
                  href="https://instagram.com/fruchtbarkeits_kompass" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-primary border border-white/20 px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:bg-white hover:text-accent transition-all hover:-translate-y-1 shadow-lg"
                >
                  <Instagram size={24} /> Fruchtbarkeits-Kompass auf Instagram
                </a>
                <a 
                  href="https://instagram.com/feminatalis_praxis" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-accent text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:bg-accent/90 transition-all hover:-translate-y-1 shadow-lg shadow-black/20"
                >
                  <Instagram size={24} /> Angela auf Instagram folgen
                </a>
                <a 
                  href="https://facebook.com/NaturheilpraxisFeminatalis" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:bg-white/20 transition-all"
                >
                  <Facebook size={24} /> Naturheilpraxis feminatalis
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
                  <div className="aspect-square bg-muted rounded-2xl mb-6 flex items-center justify-center overflow-hidden border border-white/5 shadow-inner">
                    <img 
                      src={getImageUrl("img_instagram_portrait", "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2000&auto=format&fit=crop")} 
                      alt="Angela Deschner Instagram" 
                      className="w-full h-full object-cover object-top"
                    />
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