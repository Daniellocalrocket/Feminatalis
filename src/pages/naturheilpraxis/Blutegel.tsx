import React from "react";
import SEO from "@/components/SEO";
import { ROUTE_PATHS } from "@/lib/index";
import { Link } from "react-router-dom";
import { Activity, Check, ArrowRight, Heart } from "lucide-react";

export default function Blutegel() {
  return (
    <div className="bg-background min-h-screen pt-32 pb-20">
      <SEO 
        title="Blutegeltherapie & Entgiftung | feminatalis" 
        description="Traditionelle Behandlungsmethode bei Entzündungen, Durchblutungsstörungen und venösen Problemen in Bad Schönborn. Der Blutegel als natürliches Labor." 
      />
      
      <div className="container mx-auto px-4 max-w-4xl">
        <span className="bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 inline-block">Heilpraxis</span>
        <h1 className="text-4xl md:text-6xl font-serif text-primary mb-8">Blutegeltherapie</h1>
        
        <div className="prose prose-lg max-w-none text-muted-foreground mb-12">
          <p className="text-xl mb-8 leading-relaxed">
            Eine der ältesten und effektivsten Behandlungsmethoden der Naturheilkunde. Der Blutegel setzt während der Behandlung über 100 bioaktive Substanzen frei – ein echtes "lebendes Labor" für Ihre Gesundheit.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 my-12 bg-white/50 p-8 rounded-[2.5rem] border border-border shadow-sm">
            <div>
              <h3 className="text-primary font-serif text-2xl mb-4">Wirkungsweise</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3"><Check className="text-accent shrink-0"/> Entzündungshemmend (anti-phlogistisch)</li>
                <li className="flex items-start gap-3"><Check className="text-accent shrink-0"/> Gerinnungshemmend (anti-thrombotisch)</li>
                <li className="flex items-start gap-3"><Check className="text-accent shrink-0"/> Lymphstrombeschleunigend</li>
                <li className="flex items-start gap-3"><Check className="text-accent shrink-0"/> Schmerzstillend</li>
              </ul>
            </div>
            <div>
              <h3 className="text-primary font-serif text-2xl mb-4">Bewährte Indikationen</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3"><Check className="text-accent shrink-0"/> Arthrose (v.a. Knie- und Daumensattelgelenk)</li>
                <li className="flex items-start gap-3"><Check className="text-accent shrink-0"/> Krampfadern & Venenentzündungen</li>
                <li className="flex items-start gap-3"><Check className="text-accent shrink-0"/> Sehnen- & Schleimbeutelentzündungen</li>
                <li className="flex items-start gap-3"><Check className="text-accent shrink-0"/> Tinnitus & Kopfschmerzen</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-orange-50/50 p-8 rounded-3xl border border-orange-200/50 mb-12">
            <h2 className="text-primary font-serif text-3xl mb-4">Wichtige Infos zur Behandlung</h2>
            <p className="mb-4">Die Behandlung dauert ca. 60–90 Minuten. Die kleinen Bissstellen bluten ca. 12–24 Stunden nach – dieser Effekt ist ein wesentlicher Bestandteil der Therapie zur sanften Entstauung und Entgiftung.</p>
          </div>
        </div>
        
        <div className="bg-primary text-white p-10 rounded-[2.5rem] text-center shadow-xl">
          <Activity className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl font-serif mb-4">Sanfte Heilung aus der Natur.</h2>
          <p className="mb-8 opacity-90 max-w-xl mx-auto">Lassen Sie uns klären, ob die Blutegeltherapie der richtige Weg für Ihr individuelles Beschwerdebild ist.</p>
          <Link to={ROUTE_PATHS.CONTACT} className="inline-block bg-accent text-white px-8 py-4 rounded-xl font-bold hover:bg-accent/90 transition-all flex items-center justify-center gap-2 mx-auto w-fit">
            Therapiegespräch vereinbaren <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
