import SEO from "@/components/SEO";
import SplitScreenHero from "@/components/SplitScreenHero";
import PreisTransparenz from "@/components/PreisTransparenz";
import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "@/lib/index";
import { ArrowRight, Activity, ShieldCheck, Target } from "lucide-react";

export default function Rueckbildung() {
  const points = [
    { title: "Beckenboden-Fokus", desc: "Zerstörte oder gestörte Strukturen rund um Uterus und Harnleiter systematisch schließen.", icon: Target },
    { title: "Rectusdiastase", desc: "Spezifisches Muskeltraining, um den Bauchmuskelspalt der Linea Alba aktiv zu schließen.", icon: Activity },
    { title: "Zelluläre Energie", desc: "Kein klassisches 'Schwitzen', sondern neurologische Ansteuerung kleinster Muskelfasern.", icon: ShieldCheck }
  ];

  return (
    <div className="bg-background min-h-screen font-sans">
      <SEO 
        title="Rückbildungskurse | Hebammenpraxis feminatalis" 
        description="Professionelle Rückbildung in Bad Schönborn. Fokustraining für den Beckenboden, Rectusdiastase und tiefgreifende Stabilität." 
      />

      <SplitScreenHero
        badge="Postnatale Rehabilitation"
        title={<>Rückbildung & <br/><span className="text-accent italic font-light">Beckenboden-Stabilität</span></>}
        subtitle="Die Monate nach der Geburt fordern den Beckenboden maximal. Wir korrigieren aktiv und medizinkonform Fehlhaltungen, Schmerzen und Haltungsschwäche für deine langfristige Gesundheit."
        imageSrc="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2040&auto=format&fit=crop"
        imageAlt="Rückbildungsgymnastik"
        imageKey="img_hero_rueckbildung"
      >
        <Link to={ROUTE_PATHS.VORQUALIFIZIERUNG} className="bg-primary text-white px-10 py-5 rounded-2xl font-bold hover:shadow-2xl transition-all shadow-xl active:scale-95 flex items-center gap-2">
          Kostenfreie Vor-Analyse anfragen <ArrowRight size={20} />
        </Link>
      </SplitScreenHero>

      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {points.map((p, idx) => (
              <div key={idx} className="bg-background p-10 rounded-[2.5rem] border border-border/50 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <p.icon size={24} />
                </div>
                <h3 className="text-xl font-serif text-primary mb-4">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PreisTransparenz />
    </div>
  );
}
