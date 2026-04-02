import React from "react";
import SEO from "@/components/SEO";
import { ROUTE_PATHS } from "@/lib/index";
import { Link } from "react-router-dom";
import { Heart, Check, ArrowRight, ShieldCheck, Thermometer, Smile } from "lucide-react";

export default function Beschwerden() {
  return (
    <div className="bg-background min-h-screen pt-32 pb-20">
      <SEO 
        title="Hilfe bei Schwangerschaftsbeschwerden | feminatalis" 
        description="Natürliche Linderung bei Übelkeit, Rückenschmerzen, Schlafstörungen und weiteren Beschwerden in Bad Schönborn. Ganzheitlich und ursachenorientiert." 
      />
      
      <div className="container mx-auto px-4 max-w-4xl">
        <span className="bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 inline-block">Hebammenpraxis</span>
        <h1 className="text-4xl md:text-6xl font-serif text-primary mb-8 leading-tight">Hilfe bei Schwangerschaftsbeschwerden</h1>
        
        <div className="prose prose-lg max-w-none text-muted-foreground mb-12">
          <p className="text-xl mb-8 leading-relaxed">
            Eine Schwangerschaft ist eine Höchstleistung des Körpers. Dass es dabei zu Beschwerden kommt, ist oft normal – dass man sie ertragen muss, jedoch nicht. Wir lindern Ihre Beschwerden ganzheitlich und ursachenorientiert.
          </p>
          
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-border shadow-sm mb-16">
            <h3 className="text-primary font-serif text-3xl mb-8">Häufige Behandlungsfelder</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: <Thermometer className="text-accent w-6 h-6"/>, title: "Übelkeit & Erbrechen", desc: "Unterstützung bei morgendlicher Übelkeit." },
                { icon: <Heart className="text-accent w-6 h-6"/>, title: "Rückenschmerzen", desc: "Entlastung für Becken und Wirbelsäule." },
                { icon: <Smile className="text-accent w-6 h-6"/>, title: "Schlafstörungen", desc: "Sanfte Hilfen für bessere Erholung." },
                { icon: <ShieldCheck className="text-accent w-6 h-6"/>, title: "Sodbrennen", desc: "Natürliche Regulation der Magensäure." },
                { icon: <Heart className="text-accent w-6 h-6"/>, title: "Wassereinlagerungen", desc: "Unterstützung des Lymphsystems." },
                { icon: <ShieldCheck className="text-accent w-6 h-6"/>, title: "Carpaltunnelsyndrom", desc: "Lindern von Taubheitsgefühlen." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="bg-[#fde4c8]/30 w-12 h-12 rounded-full flex items-center justify-center mb-3">{item.icon}</div>
                  <h4 className="font-bold text-primary mb-1 text-base">{item.title}</h4>
                  <p className="text-xs opacity-90">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <h2 className="text-primary font-serif text-3xl mb-6">Unser therapeutisches Spektrum</h2>
          <p className="mb-4 text-lg">Wir behandeln nicht nur symptomatisch, sondern suchen nach der Ursache. Dabei nutzen wir eine Kombination aus klassischen Hebammenleistungen und naturheilkundlicher Heilpraktiker-Expertise:</p>
          <ul className="space-y-4 mb-16">
            <li className="flex items-start gap-4"><Check className="text-accent shrink-0 mt-1"/> <div><span className="font-bold text-primary">Klassische Hebammenarbeit:</span> Taping, Beratungsgespräche, sanfte Übungen. (Kassenleistung)</div></li>
            <li className="flex items-start gap-4"><Check className="text-accent shrink-0 mt-1"/> <div><span className="font-bold text-primary">Naturheilkundliche Add-ons:</span> Akupunktur, CO2-Therapie, Mikronährstoffe nach Blutbild, IHHT (Zelltraining). (Heilpraktiker-Leistung)</div></li>
          </ul>
        </div>
        
        <div className="bg-primary text-white p-10 rounded-[2.5rem] text-center shadow-xl">
          <Heart className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl font-serif mb-4">Wohlbefinden in der Schwangerschaft.</h2>
          <p className="mb-8 opacity-90 max-w-xl mx-auto">Zögern Sie nicht – viele Beschwerden lassen sich sehr gut und sanft lindern. Oft ist es eine Kassenleistung oder wird teilweise übernommen.</p>
          <Link to={ROUTE_PATHS.CONTACT} className="inline-block bg-accent text-white px-8 py-4 rounded-xl font-bold hover:bg-accent/90 transition-all flex items-center justify-center gap-2 mx-auto w-fit">
            Sprechstunde vereinbaren <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
