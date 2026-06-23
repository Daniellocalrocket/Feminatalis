import React from "react";
import SEO from "@/components/SEO";
import { ROUTE_PATHS } from "@/lib/index";
import { Link } from "react-router-dom";
import PreisTransparenz from "@/components/PreisTransparenz";
import { 
  Zap, 
  Dna, 
  Sparkles, 
  Activity, 
  BatteryLow,
  HeartPulse,
  Layers,
  Brain,
  ShieldCheck,
  AlertTriangle,
  ArrowRight,
  ShieldAlert,
  Microscope,
  Info,
  CheckCircle2,
  Flame,
  Play,
  Sun
} from "lucide-react";
import SplitScreenHero from "@/components/SplitScreenHero";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import mitochondrienData from "@/data/content/mitochondrien.json";

const iconMap: Record<string, React.FC<{ className?: string, size?: number }>> = {
  Zap,
  Dna,
  Sparkles,
  Activity,
  BatteryLow,
  HeartPulse,
  Layers,
  Brain,
  ShieldCheck,
  AlertTriangle
};

export default function Mitochondrien() {
  const { seo, hero, bioFacts, stressors, diagnostics, diseaseSpectrum, treatment, educational } = mitochondrienData;

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#fff9f2] min-h-screen font-sans">
      <SEO 
        title={seo.title} 
        description={seo.description} 
      />

      <SplitScreenHero
        badge={hero.badge}
        title={<>Mitochondrien-Therapie: <br /><span className="text-accent italic font-light">{hero.titleAccent}</span></>}
        subtitle={hero.subtitle}
        imageSrc="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=2070&auto=format&fit=crop"
        imageAlt="Mikroskopische Ansicht von lebenden Zellstrukturen und Mitochondrien"
        imageKey="img_hero_mitochondrien"
      >
        <div className="flex flex-wrap gap-4">
          <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:shadow-2xl transition-all shadow-xl active:scale-95 flex items-center gap-2">
            Zellcheck anfragen <ArrowRight size={20} />
          </Link>
          <button 
            onClick={() => scrollTo("bio-fakten")}
            className="bg-white text-primary border border-primary/10 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all flex items-center gap-2"
          >
            Zur Zell-Biologie
          </button>
        </div>
      </SplitScreenHero>

      {/* Bio-Facts Section: Die faszinierende Welt der Zellkraftwerke */}
      <section id="bio-fakten" className="py-24 bg-white overflow-hidden scroll-mt-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-20">
            <span className="bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 inline-block">{bioFacts.badge}</span>
            <h2 className="text-3xl md:text-5xl font-serif text-primary mb-8 leading-tight">
              Kraftwerke des Lebens: <br /><span className="text-accent italic">{bioFacts.headlineAccent}</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed" dangerouslySetInnerHTML={{ __html: bioFacts.intro }} />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl font-serif text-primary">{bioFacts.subHeadline}</h3>
              {bioFacts.paragraphs.map((p, idx) => (
                <p key={idx} className="text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: p }} />
              ))}
              <div className="bg-[#fff9f2] p-6 rounded-3xl border border-border flex items-start gap-4">
                <Info className="text-accent shrink-0 mt-1" size={20} />
                <p className="text-xs text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: bioFacts.info }} />
              </div>
              <img 
                src="/assets/Mitochiondrien 3.jpg" 
                alt="Mitochondrien 3D – Die Kraftwerke der Zelle" 
                className="w-full rounded-[2.5rem] shadow-lg border border-border object-cover h-64 md:h-80"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {bioFacts.cards.map((item, idx) => {
                const IconComponent = iconMap[item.icon];
                return (
                  <div key={idx} className="bg-[#fff9f2] p-8 rounded-[2.5rem] border border-border shadow-sm flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-border">
                      {IconComponent && <IconComponent className="text-accent" size={24} />}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-primary mb-2 leading-tight">{item.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Die 3 Goldenen Regeln der mitochondrialen Gesundheit */}
          <div className="bg-[#fde4c8]/20 rounded-[3rem] p-8 lg:p-12 border border-[#fde4c8]/50">
            <h3 className="text-2xl md:text-3xl font-serif text-primary text-center mb-10">{bioFacts.threePillarsTitle}</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {bioFacts.threePillars.map((s, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-border relative overflow-hidden">
                  <div className="absolute -right-4 -bottom-6 text-7xl font-serif font-bold text-[#fde4c8]/30 select-none">{s.step}</div>
                  <h4 className="text-lg font-bold text-primary mb-3 relative z-10">{s.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed relative z-10">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <img 
              src="/assets/Atmungskette.jpg" 
              alt="Atmungskette – Elektronentransport in den Mitochondrien" 
              className="w-full max-w-5xl mx-auto rounded-[2.5rem] shadow-lg border border-border object-cover h-64 md:h-80"
            />
          </div>
        </div>
      </section>

      {/* Stressors Section: Was schadet den Mitochondrien? */}
      <section className="py-24 bg-slate-50 overflow-hidden relative border-t border-b border-border">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <span className="bg-red-100 text-red-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 inline-block uppercase tracking-wider">{stressors.badge}</span>
            <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6">{stressors.headline}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">{stressors.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {stressors.categories.map((cat, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-border shadow-sm flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-bold text-primary mb-4 pb-2 border-b border-border flex items-center gap-2">
                    <ShieldAlert size={18} className="text-red-500 shrink-0" />
                    {cat.category}
                  </h4>
                  <ul className="space-y-3">
                    {cat.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                        <span className="text-red-400 mt-1 shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
            
            {/* CTA Box inside Grid */}
            <div className="bg-primary text-white p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden shadow-lg">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10 blur-xl" />
              <div>
                <h4 className="text-xl font-serif text-accent mb-4">{stressors.ctaBox.headline}</h4>
                <p className="text-sm text-primary-foreground/80 leading-relaxed">{stressors.ctaBox.text}</p>
              </div>
              <button 
                onClick={() => scrollTo("befund-section")} 
                className="mt-6 bg-accent hover:bg-accent/90 text-white py-3 px-6 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-md w-full"
              >
                {stressors.ctaBox.btnText} <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Oxidativer vs. Nitrosativer Stress */}
          <div className="grid lg:grid-cols-2 gap-12 mt-16 items-stretch">
            <div className="bg-[#fff9f2] p-10 rounded-[3rem] border border-border flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-border text-orange-500">
                  <Flame size={24} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{stressors.oxidativ.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{stressors.oxidativ.text}</p>
                <div className="bg-white p-5 rounded-2xl border border-border">
                  <h5 className="text-xs font-bold text-primary uppercase tracking-wider mb-3">{stressors.oxidativ.badgeHeadline}</h5>
                  <div className="flex flex-wrap gap-2">
                    {stressors.oxidativ.antioxidants.map((antiox, idx) => (
                      <span key={idx} className="bg-orange-50 text-accent text-xs font-semibold px-3 py-1 rounded-full border border-orange-100">
                        {antiox}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#fff9f2] p-10 rounded-[3rem] border border-border flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-border text-red-600">
                  <AlertTriangle size={24} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{stressors.nitrosativ.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: stressors.nitrosativ.text }} />
                <div className="bg-red-50/50 p-5 rounded-2xl border border-red-100 flex items-start gap-3">
                  <Info size={16} className="text-red-500 shrink-0 mt-0.5" />
                  <p className="text-xs text-red-800 leading-relaxed" dangerouslySetInnerHTML={{ __html: stressors.nitrosativ.info }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lab Diagnostics Section: Visualisierung eines echten Befundes */}
      <section id="befund-section" className="py-24 bg-white scroll-mt-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <span className="bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 inline-block">{diagnostics.badge}</span>
            <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6">{diagnostics.headline}</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">{diagnostics.subtitle}</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Visual Lab Report Card */}
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-[#fff9f2] p-4 lg:p-6 rounded-[3rem] border border-border shadow-lg relative overflow-hidden">
                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-sm flex items-center gap-1.5">
                  <Microscope size={12} />
                  {diagnostics.reportTitle}
                </div>
                <div className="space-y-4 mt-4">
                  <img 
                    src="/assets/BHI Manovska IHT.JPG" 
                    alt="BHI Manovska IHT – Mitochondrien-Diagnostik Befund" 
                    className="w-full h-auto rounded-2xl shadow-sm border border-border object-cover hover:scale-[1.01] transition-transform duration-300"
                  />
                  <img 
                    src="/assets/mitochondrien-befund, laktat.jpg" 
                    alt="Mitochondrien-Befund und Laktat-Diagnostik" 
                    className="w-full h-auto rounded-2xl shadow-sm border border-border object-cover hover:scale-[1.01] transition-transform duration-300"
                  />
                </div>
                <div className="mt-4 flex flex-wrap gap-2 justify-center text-xs text-muted-foreground">
                  <span>{diagnostics.reportFootnote}</span>
                </div>
              </div>
            </div>

            {/* Scientific Explanation of the Biomarkers */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <h3 className="text-2xl font-serif text-primary">{diagnostics.explanationTitle}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {diagnostics.explanationText}
              </p>

              <div className="space-y-4">
                {diagnostics.biomarkers.map((marker, idx) => (
                  <div key={idx} className={`p-5 rounded-2xl border transition-all hover:shadow-sm ${marker.crit ? 'bg-red-50/40 border-red-100' : 'bg-slate-50 border-slate-200'}`}>
                    <div className="flex items-start gap-3">
                      {marker.crit ? (
                        <AlertTriangle className="text-red-500 shrink-0 mt-1" size={16} />
                      ) : (
                        <CheckCircle2 className="text-primary shrink-0 mt-1" size={16} />
                      )}
                      <div>
                        <h4 className="text-sm font-bold text-primary leading-tight mb-1">{marker.title}</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">{marker.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disease Spectrum Section */}
      <section className="py-24 bg-slate-50 border-t border-b border-border scroll-mt-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <span className="bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 inline-block">{diseaseSpectrum.badge}</span>
            <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6">{diseaseSpectrum.headline}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">{diseaseSpectrum.subtitle}</p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {diseaseSpectrum.accordion.map((item) => {
              const IconComponent = iconMap[item.icon];
              return (
                <AccordionItem key={item.id} value={item.id} className="border border-border bg-white rounded-[2rem] px-8 py-2 hover:bg-slate-50 transition-all data-[state=open]:bg-white data-[state=open]:shadow-md">
                  <AccordionTrigger className="text-lg md:text-xl font-serif text-primary hover:no-underline flex items-center justify-between gap-4 py-4">
                    <div className="flex items-center gap-3 text-left">
                      <span className="p-2 bg-slate-100 rounded-xl shrink-0">
                        {IconComponent && <IconComponent size={20} className="text-red-500" />}
                      </span>
                      <span>{item.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-sm md:text-base pb-6 pl-14">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </section>

      {/* Angela's Treatment Pathway Sektion */}
      <section className="py-24 bg-primary text-white rounded-[4rem] mx-4 lg:mx-10 mb-24 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl" />
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-left">
              <span className="bg-accent/20 text-accent font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider">{treatment.badge}</span>
              <h2 className="text-3xl lg:text-5xl font-serif leading-tight">{treatment.headline} <br /><span className="text-accent italic">{treatment.headlineAccent}</span></h2>
              <p className="text-primary-foreground/80 text-base lg:text-lg leading-relaxed">{treatment.description}</p>
              
              <ul className="space-y-4">
                {treatment.list.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-primary-foreground/90 font-medium text-sm lg:text-base">
                    <CheckCircle2 size={20} className="text-accent shrink-0 mt-0.5" /> 
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-8 flex flex-wrap gap-4">
                <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-accent hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-xl inline-flex items-center gap-2">
                  Zellstatus anfragen <ArrowRight size={20} />
                </Link>
                <Link to={ROUTE_PATHS.CONTACT} className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-2xl font-bold transition-all inline-flex items-center gap-2">
                  Termin vereinbaren
                </Link>
              </div>
            </div>

            {/* Scientific Yield Statistics Grid */}
            <div className="grid grid-cols-2 gap-4">
              {treatment.stats.map((s, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md p-8 rounded-[3rem] border border-white/10 text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">{s.val}</div>
                  <div className="text-xs uppercase tracking-widest text-white/60 leading-tight">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Educational Videos Accordion / Tabs: Für ganz Neugierige */}
      <section className="py-24 bg-white border-t border-border scroll-mt-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <span className="bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 inline-block">{educational.badge}</span>
            <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6">{educational.headline}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">{educational.subtitle}</p>
          </div>

          <div className="bg-[#fff9f2] p-8 lg:p-12 rounded-[3.5rem] border border-border shadow-sm">
            <h3 className="text-xl md:text-2xl font-serif text-primary mb-8 text-center flex items-center justify-center gap-2">
              <Play size={20} className="text-accent fill-accent" />
              {educational.boxTitle}
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {educational.films.map((film, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-border shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div>
                    <span className="text-xs font-bold text-accent uppercase tracking-wider block mb-2">{film.duration}</span>
                    <h4 className="text-base font-bold text-primary mb-3">{film.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-6">{film.desc}</p>
                  </div>
                  <a 
                    href={film.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:text-orange-600 transition-colors mt-auto"
                  >
                    Auf Studyflix ansehen <ArrowRight size={12} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PreisTransparenz 
        preisHint="Mitochondrien-Diagnostik & Zelltherapie-Protokoll" 
        hinweis="Die Investition in deine zelluläre Gesundheit ist der wertvollste Grundstein für eine nachhaltige Genesung. Die Abrechnung erfolgt transparent und individuell nach der Gebührenordnung für Heilpraktiker (GebüH)."
      />
    </div>
  );
}
