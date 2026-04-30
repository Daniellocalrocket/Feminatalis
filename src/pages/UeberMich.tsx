import React from "react";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "@/lib/index";
import { 
  CheckCircle2, 
  GraduationCap, 
  Clock, 
  Award, 
  Heart, 
  Leaf, 
  Microscope, 
  Globe, 
  ArrowRight,
  BookOpen,
  CalendarDays,
  ShieldCheck,
  Star
} from "lucide-react";
import { motion } from "framer-motion";
import { useSiteImages } from "@/hooks/useSiteImages";

export default function UeberMich() {
  const { getImageUrl } = useSiteImages();
  const portraitAngela = getImageUrl("img_portrait_angela", "");
  const portraitRomy = getImageUrl("img_portrait_romy", "");
  const timeline = [
    { year: "1989-1992", title: "Hebammenausbildung & Examen", desc: "Grundstein meiner medizinischen Laufbahn." },
    { year: "1992-1995", title: "St. Petersburg (Russland)", desc: "Wochenstation eines großen Geburtshauses." },
    { year: "1996-2004", title: "Klinik & Belegsystem", desc: "Städtisches Klinikum Pforzheim, Kreiskrankenhaus Calw & Rechbergklinik Bretten." },
    { year: "2001-2013", title: "Eigene Haus-Praxis", desc: "Freiberufliche Hebammentätigkeit in Wiesental." },
    { year: "2013", title: "Master of Acupuncture", desc: "Prüfung und Spezialisierung im Bereich TCM." },
    { year: "2015", title: "Gründung feminatalis", desc: "Eröffnung der Hebammen-Praxis in Kirrlach." },
    { year: "2016", title: "Heilpraktikerin", desc: "Amtsärztliche Prüfung und Gründung der kombinierten Hebammen- & Naturheilpraxis in Bad Schönborn." },
    { year: "2019-2020", title: "Vitalstoffe & Metavital", desc: "Prüfung zur Vitalstoffberaterin und Ausbildung in Metavital-Diagnostik." },
    { year: "2021-2022", title: "Mitochondriale Medizin & Post-Covid", desc: "Spezialisierung auf Mikrobiom, IHHT und Long-Covid-Syndrome." },
    { year: "2023", title: "Chelat-Therapie & Hormone", desc: "Ausbildung zur Chelat-Therapeutin (DACT), Fortbildungen zur Labordiagnostik." },
    { year: "2024", title: "Ästhetik & Drip-Spa", desc: "Fachfortbildung zur Ästhetik-Therapeutin, Spezialisierung auf Infusionen und IHHT (IGAF e.V.)." },

  ];

  return (
    <>
      <SEO 
        title="Angela Deschner | Heilpraktikerin & Hebamme Bad Schönborn" 
        description="Lernen Sie Angela Deschner kennen: Über 33 Jahre Erfahrung als Hebamme & Heilpraktikerin in Bad Schönborn. Expertin für funktionelle Medizin und Kinderwunsch." 
        schema={{
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Angela Deschner",
          "jobTitle": ["Heilpraktikerin", "Hebamme"],
          "description": "Angela Deschner ist eine erfahrene Hebamme und staatlich geprüfte Heilpraktikerin, spezialisiert auf funktionelle Medizin, mitochondriale Therapie und ganzheitliche Frauengesundheit.",
          "image": portraitAngela,
          "url": "https://feminatalis.de/ueber-mich",
          "knowsAbout": [
            "Funktionelle Medizin",
            "Mitochondriale Medizin",
            "Hebammenkunst",
            "Kinderwunschbegleitung",
            "Hormontherapie",
            "TCM & Akupunktur",
            "Chelat-Therapie"
          ],
          "knowsLanguage": ["German", "Russian"],
          "memberOf": [
            { "@type": "Organization", "name": "Lachesis - Berufsverband für Heilpraktikerinnen" },
            { "@type": "Organization", "name": "Deutscher Hebammenverband" }
          ]
        }}
      />

      {/* Hero Section */}
      <section className="bg-background pt-32 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40%] h-full bg-orange-100/30 rounded-bl-[200px] -z-0" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                Expertise aus 33 Jahren
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary mb-6 leading-tight [hyphens:auto] [overflow-wrap:anywhere] break-words">
                Angela Deschner
              </h1>
              <p className="text-xl md:text-2xl font-serif text-accent italic mb-8 leading-relaxed">
                "Ich bin ein geistiges schöpferisches Wesen, das eine menschliche Erfahrung macht – so wie Sie auch!"
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Als Gründerin der feminatalis Praxis vereine ich die intuitive, tief verwurzelte Hebammenkunst mit der messbaren, biochemischen Ursachenforschung der modernen funktionellen Medizin. 
              </p>
            </div>
            
            <div className="bg-white rounded-[3rem] p-4 shadow-xl border border-primary/5 aspect-[4/5] relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {portraitAngela ? (
                <img 
                  src={portraitAngela} 
                  alt="Angela Deschner" 
                  className="w-full h-full object-cover rounded-[2.5rem]" 
                />
              ) : (
                <div className="w-full h-full bg-slate-50 rounded-[2.5rem] flex items-center justify-center border-2 border-dashed border-primary/10 text-muted-foreground flex-col gap-3 relative z-10">
                  <Heart className="w-12 h-12 text-primary/20" />
                  <span className="font-serif text-lg text-primary/60">Porträt Angela Deschner</span>
                  <span className="text-xs uppercase tracking-widest opacity-50">(Bild im Admin-Bereich hochladen)</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Persönliche Philosophie */}
      <section className="py-24 bg-white border-y border-border/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/3">
              <h2 className="text-3xl font-serif text-primary mb-6 sticky top-32">Wer bin ich?</h2>
              <div className="hidden md:flex flex-col gap-4">
                <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center text-accent">
                  <Leaf className="w-8 h-8" />
                </div>
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                  <Globe className="w-8 h-8" />
                </div>
              </div>
            </div>
            <div className="md:w-2/3 space-y-8 text-lg text-muted-foreground leading-relaxed">
              <p>
                Als Mensch Angela begann meine Reise auf der Erde 1972 in der ehemaligen UdSSR. 1995 übersiedelte ich als Spätaussiedlerin deutscher Abstammung nach Deutschland (Sternzeichen Zwilling).
              </p>
              <p>
                Schon früh wurde mir die Verbundenheit zur Natur in die Wiege gelegt. Eine meiner Großmütter war eine Kräuterkundige, und auch von meiner Mutter durfte ich tiefgreifendes Wissen über die Heilkraft der Pflanzen lernen. Zu meinen Sprachkenntnissen gehören heute Deutsch und Russisch.
              </p>
              <p>
                Meinen Sohn Eduard habe ich 1992 und meine Tochter 2004 aus eigener Kraft geboren. Ich lebe in einer festen langjährigen Beziehung und achte konsequent auf eine gesunde Ernährung und Lebensweise. In meinem großen Garten baue ich viel Gemüse, Kräuter und Obst selbst an. Ich lese gerne, bilde mich unermüdlich fort, tanze, koche und male.
              </p>
              <div className="bg-primary/5 p-8 rounded-[2rem] border border-primary/10 mt-8 text-primary">
                <p className="font-serif text-xl italic mb-4">
                  "Ich lebe im Bewusstsein der allumfassenden intelligenten göttlichen Kraft und Weisheit der Natur."
                </p>
                <p className="text-base text-primary/80">
                  Ich glaube an die Zukunft einer „neuen bewussten Menschheit“, die in <strong>Eigenverantwortung</strong> auf allen Ebenen des Seins kreativ und schöpferisch im Einklang mit den Naturgesetzen handelt. Als wissensdurstige Forscherin meiner Selbst bin ich hier unterwegs, um jede Erfahrung reicher und für jede Erfahrung dankbar zu sein.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifikationen Grid */}
      <section className="py-24 bg-[#fff9f2]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <span className="bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 inline-block">Fachliche Tiefe</span>
            <h2 className="text-4xl font-serif text-primary">Medizinische Kernqualifikationen</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <ShieldCheck className="text-accent w-8 h-8"/>, title: "Staatl. geprüfte Hebamme", desc: "Seit 1992. 10 Jahre Kreißsaalarbeit, über 500 begleitete Geburten. Fachliche Schulung in St. Petersburg." },
              { icon: <Award className="text-primary w-8 h-8"/>, title: "Heilpraktikerin", desc: "Amtsärztlich geprüft (2016). Ganzheitliche Ursachenforschung und funktionelle Medizin." },
              { icon: <Microscope className="text-blue-600 w-8 h-8"/>, title: "Mitochondriale Medizin", desc: "Zertifizierte IHHT-Therapeutin (IGAF e.V.) und geprüfte Vitalstoffberaterin." },
              { icon: <Star className="text-yellow-600 w-8 h-8"/>, title: "Master of Acupuncture", desc: "Fundierte Ausbildung (2013), speziell für Frauenheilkunde und Kinderwunsch." },
              { icon: <CheckCircle2 className="text-green-600 w-8 h-8"/>, title: "Chelat-Therapeutin", desc: "Ausbildung bei der DACT (2023). Spezialisiert auf Schwermetallausleitung und Entgiftung." },
              { icon: <Heart className="text-rose-500 w-8 h-8"/>, title: "Ästhetik & Anti-Aging", desc: "Fachfortbildung zur Ästhetik-Therapeutin (2024). Natürliche Konzepte für Ausstrahlung und Wellness." },
            ].map((q, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm border border-border hover:border-accent/30 transition-all group">
                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {q.icon}
                </div>
                <h3 className="font-bold text-primary text-xl mb-3">{q.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{q.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Werdegang */}
      <section className="py-24 bg-white border-y border-border/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-primary">Mein beruflicher Weg</h2>
            <p className="text-muted-foreground mt-4">Ein Leben im Zeichen des ständigen Lernens und Wachsens.</p>
          </div>

          <div className="relative border-l-2 border-primary/10 ml-4 md:ml-8 space-y-12">
            {timeline.map((item, i) => (
              <div key={i} className="relative pl-8 md:pl-12">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-accent shadow-sm" />
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-2">
                  <span className="text-accent font-black tracking-widest text-sm shrink-0 w-28">{item.year}</span>
                  <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                </div>
                <p className="text-muted-foreground md:ml-[136px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Netzwerke & Mitgliedschaften */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl font-serif text-primary mb-12">Mitgliedschaften & Therapeuten-Netzwerke</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Berufsverband für Heilpraktikerinnen (Lachesis)",
              "Deutscher Hebammenverband",
              "Greenpeace",
              "Florian Schilling-Netzwerk (Post-Covid)",
              "MWGFD e.V. (Impfschadenhilfe)",
              "Corih Impfschadenhilfe",
              "Bürgerinitiative-Bergstraße (Gegen 5G)"
            ].map((network, i) => (
              <div key={i} className="bg-white border border-primary/10 px-6 py-3 rounded-xl font-medium text-primary shadow-sm hover:border-primary/30 transition-colors">
                {network}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-[#fff08a]/20 border-t border-yellow-200/50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl border border-yellow-200 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#fff08a]/20 rounded-bl-[200px] -z-0" />
            <div className="w-full md:w-1/3 relative z-10">
              {portraitRomy ? (
                <img 
                  src={portraitRomy} 
                  alt="Romy Greulich" 
                  className="w-full aspect-square object-cover rounded-[2.5rem] border border-primary/10" 
                />
              ) : (
                <div className="aspect-square bg-slate-50 rounded-[2.5rem] border border-primary/10 flex items-center justify-center flex-col text-muted-foreground p-6 text-center">
                  <Heart className="w-12 h-12 text-primary/20 mb-3" />
                  <span className="font-serif">Porträt Romy</span>
                  <span className="text-xs uppercase tracking-widest opacity-50">(Bild im Admin-Bereich hochladen)</span>
                </div>
              )}
            </div>
            <div className="flex-1 relative z-10">
              <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Praxisteam</span>
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">Mein Büroengel</h2>
              <h3 className="text-xl font-bold text-primary mb-4">Romy Greulich</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Romy ist meine sehr wertgeschätzte Büroassistentin und unterstützt mich seit 2018 bei allen Büroaufgaben, bei der Abrechnung und der gesamten Patientenkommunikation.
              </p>
              <div className="bg-[#fff9f2] p-6 rounded-2xl border border-orange-100 flex items-center gap-4">
                <CalendarDays className="w-8 h-8 text-orange-400 shrink-0" />
                <p className="text-sm font-medium text-primary">
                  Sie ist meist <strong className="text-accent">Montag vormittags</strong> und <strong className="text-accent">Mittwoch nachmittags</strong> da – am Telefon, persönlich vor Ort oder online für Sie erreichbar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-primary mb-6">Möchten Sie den Weg mit mir gehen?</h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Ich arbeite mit Frauen, die Eigenverantwortung für ihre Gesundheit übernehmen wollen. Wenn diese Philosophie zu Ihnen passt, freue ich mich auf Ihre Anfrage.
          </p>
          <Link 
            to={ROUTE_PATHS.VORQUALIFIZIERUNG} 
            className="inline-flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 hover:-translate-y-1"
          >
            Zum Vorab-Check <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}

