import React from "react";
import SEO from "@/components/SEO";
import { ROUTE_PATHS } from "@/lib/index";
import { Link } from "react-router-dom";
import PreisTransparenz from "@/components/PreisTransparenz";
import { Heart, Check, ArrowRight, ShieldCheck, Thermometer, Smile, Clock, Droplets, Activity, Dna, AlertTriangle, Baby, Moon } from "lucide-react";
import SplitScreenHero from "@/components/SplitScreenHero";

export default function Beschwerden() {
  return (
    <div className="bg-background min-h-screen">
      <SEO 
        title="Hilfe bei Schwangerschaftsbeschwerden | feminatalis" 
        description="Natürliche Linderung bei Übelkeit, Rückenschmerzen, Präeklampsie-Vorsorge und weiteren Beschwerden in Bad Schönborn. Ganzheitlich und ursachenorientiert." 
      />
      
      <SplitScreenHero
        badge="Hebammenpraxis"
        title="Schwangerschaftsbeschwerden lindern"
        subtitle='Eine Schwangerschaft ist eine Höchstleistung des Körpers. Dass es dabei zu Beschwerden kommt, ist oft normal – dass man sie ertragen muss, jedoch nicht. Wir lindern deine Beschwerden ganzheitlich und ursachenorientiert.'
        imageSrc="https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?q=80&w=2069&auto=format&fit=crop"
        imageAlt="Schwangere Frau bei der Hebamme"
        imageKey="img_hero_beschwerden"
      >
        <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-primary text-white px-10 py-5 rounded-2xl font-bold hover:shadow-2xl transition-all shadow-xl active:scale-95 flex items-center gap-2">
          Kostenfreie Vor-Analyse anfragen <ArrowRight className="w-5 h-5" />
        </Link>
      </SplitScreenHero>

      <div className="container mx-auto px-4 max-w-5xl py-16">
        
        <div className="prose prose-lg max-w-none text-muted-foreground mb-12">
          <p className="text-xl mb-8 leading-relaxed">
            Eine Schwangerschaft ist eine Höchstleistung des Körpers. Dass es dabei zu Beschwerden kommt, ist oft normal – dass man sie ertragen muss, jedoch nicht. Wir lindern deine Beschwerden ganzheitlich und ursachenorientiert.
          </p>
          
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-border shadow-sm mb-16">
            <h3 className="text-primary font-serif text-3xl mb-8">Häufige Behandlungsfelder</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8">
              {[
                { icon: <Thermometer className="text-accent w-6 h-6"/>, title: "Übelkeit & Erbrechen", desc: "Hilfe durch Infusionen, Akupunktur & Homöopathie." },
                { icon: <Heart className="text-accent w-6 h-6"/>, title: "Rücken- & Beckenschmerz", desc: "Support durch Akupunktur, Taping & Beckengurte." },
                { icon: <Clock className="text-accent w-6 h-6"/>, title: "Vorzeitige Wehen", desc: "Begleitung bei drohender Frühgeburt & Wehentätigkeit." },
                { icon: <Droplets className="text-accent w-6 h-6"/>, title: "Ödeme", desc: "Gezielte Hilfe bei Wassereinlagerungen." },
                { icon: <Activity className="text-accent w-6 h-6"/>, title: "Hoher Blutdruck", desc: "Monitoring & Regulation bei Hypertonie." },
                { icon: <Dna className="text-accent w-6 h-6"/>, title: "Insulinresistenz", desc: "Unterstützung bei Schwangerschaftsdiabetes." },
                { icon: <AlertTriangle className="text-accent w-6 h-6"/>, title: "Präeklampsie-Vorsorge", desc: "Begleitung bei beginnender Schwangerschaftsvergiftung." },
                { icon: <Baby className="text-accent w-6 h-6"/>, title: "Wachstumsstörungen", desc: "Support bei IUGR & fötalen Entwicklungsverzögerungen." },
                { icon: <Moon className="text-accent w-6 h-6"/>, title: "Erschöpfung", desc: "Vitalisierung der mütterlichen Ressourcen & Müdigkeit." },
                { icon: <Heart className="text-accent w-6 h-6"/>, title: "Brustentzündungen", desc: "Akute Hilfe in der Stillzeit & Prävention." },
                { icon: <ShieldCheck className="text-accent w-6 h-6"/>, title: "Hämorrhoiden", desc: "Sanfte Linderung & funktionelle Unterstützung." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center group">
                  <div className="bg-[#fde4c8]/30 w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h4 className="font-bold text-primary mb-2 text-sm leading-tight">{item.title}</h4>
                  <p className="text-[11px] leading-snug opacity-90">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <h2 className="text-primary font-serif text-3xl mb-6">Unser therapeutisches Spektrum</h2>
          <p className="mb-4 text-lg">Wir behandeln nicht nur symptomatisch, sondern suchen nach der Ursache. Dabei nutzen wir eine Kombination aus klassischen Hebammenleistungen und naturheilkundlicher Heilpraktiker-Expertise:</p>
          <ul className="space-y-4 mb-16">
            <li className="flex items-start gap-4"><Check className="text-accent shrink-0 mt-1"/> <div><span className="font-bold text-primary">Klassische Hebammenarbeit:</span> Beratung zu verschiedenen Themen (z.B. Ernährung), Hilfe bei Beschwerden vor und nach der Geburt (z.B. Übelkeit & Brustentzündung), sanfte Übungen zur Geburtsvorbereitung auf körperlicher, mentaler und psychologischer Ebene, Wochenbettbetreuung und Unterstützung des Stillens. (Kassenleistung)</div></li>
            <li className="flex items-start gap-4"><Check className="text-accent shrink-0 mt-1"/> <div><span className="font-bold text-primary">Naturheilkundliche Add-ons:</span> Akupunktur, CO2-Therapie, Mikronährstoffe nach Blutbild, IHHT (Zelltraining), Darm- und Vaginal-Mikrobiom-Sanierung, Lasertherapie. (Heilpraktiker-Leistung)</div></li>
          </ul>
        </div>
        
        <div className="bg-primary text-white p-10 rounded-[2.5rem] text-center shadow-xl">
          <Heart className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl font-serif mb-4">Wohlbefinden in der Schwangerschaft.</h2>
          <p className="mb-8 opacity-90 max-w-xl mx-auto">Zögere nicht – viele Beschwerden lassen sich sehr gut und sanft lindern. Oft ist es eine Kassenleistung oder wird teilweise übernommen.</p>
          <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="inline-block bg-accent text-white px-8 py-4 rounded-xl font-bold hover:bg-accent/90 transition-all flex items-center justify-center gap-2 mx-auto w-fit">
            Kostenfreie Vor-Analyse anfragen <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      <PreisTransparenz 
        preisHint="Kassenleistung & Selbstzahler" 
        hinweis="Hebammenleistungen werden i.d.R. übernommen. Naturheilkunde nach Preisliste."
      />
    </div>
  );
}
