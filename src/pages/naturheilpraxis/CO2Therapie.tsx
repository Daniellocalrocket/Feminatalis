import React from "react";
import SEO from "@/components/SEO";
import { ROUTE_PATHS } from "@/lib/index";
import { Link } from "react-router-dom";
import { Wind, Thermometer, Zap, HeartPulse, CheckCircle2, AlertTriangle, ArrowRight, Droplet } from "lucide-react";

export default function CO2Therapie() {
  const applications = [
    { title: "Gefäß- & Herzsystem", desc: "Nachhaltige Stabilisierung des Blutdrucks durch allgemeine Gefäßerweiterung und aktive Thromboseprophylaxe." },
    { title: "Metabolismus & Stoffwechsel", desc: "Senkung und Harmonisierung des Blutzuckers, Entlastung der Leber und massive Anregung der Entschlackung." },
    { title: "Frauengesundheit in der Schwangerschaft", desc: "Prophylaxe von schwereren Schwangerschaftskomplikationen (Präeklampsie/HELLP) und Förderung des fötalen Gedeihens." },
    { title: "Haut & komplexe Gelenkerkrankungen", desc: "Hochwirksam bei chronischer Neurodermitis, entzündlicher Schuppenflechte sowie rheumatischen Erkrankungen." }
  ];

  return (
    <div className="bg-background min-h-screen font-sans">
      <SEO 
        title="CO2-Vitalisierungsbad (Trockenbad) | Naturheilpraxis feminatalis" 
        description="Schonende Reiztherapie mit reinem Kohlendioxid: Das CO2-Trockenbad fördert intensiv die Mikrozirkulation, senkt den Blutdruck und unterstützt die Wundheilung." 
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-muted/20 text-center">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6 uppercase tracking-wider">
            Reine Naturkraft
          </div>
          <h1 className="text-4xl md:text-7xl font-serif text-primary mb-8 leading-[1.1]">
            CO2-Vitalisierungs- <br />
            <span className="text-accent italic font-light">Trockenbad</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto italic text-center font-medium">
            "Wir atmen Sauerstoff ein und CO2 aus. Pflanzen nehmen wiederum CO2 auf und geben uns Sauerstoff ab. Es ist der fortwährende Kreislauf des Lebens."
          </p>
        </div>
      </section>

      {/* Intro & Features Section */}
      <section className="py-20 text-left">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-24 text-left">
            <div className="space-y-8 text-left">
              <h2 className="text-3xl lg:text-4xl font-serif text-primary mb-6 text-left leading-tight">Wie funktioniert <br />das CO2-Trockenbad?</h2>
              <div className="prose prose-lg text-muted-foreground font-medium text-left">
                <p>
                  Im großen Unterschied zum klassischen, oft belastenden Wasserbad wird beim <strong>CO2-Trockenbad</strong> eine spezielle, absolut dichte Kunststoffhülle um deinen Körper fixiert. Diese wird anschließend behutsam mit 100% reinem medizinischem Kohlendioxid gefüllt.
                </p>
                <p>
                  Das Gas wirkt als aktive, hochgradig regulative Reiztherapie direkt tief auf die zahlreichen Chemorezeptoren deiner Haut. Es triggert in Rekordzeit eine lebenswichtige Kaskade an Prozessen: Die Gefäße weiten sich massiv (sog. Bohr-Effekt), die feine Mikrozirkulation in den Kapillaren verbessert sich extrem und die Sauerstoffversorgung deines Gewebes steigt spürbar an – un das ganz ohne jegliche physische Anstrengung oder Herz-Kreislauf-Belastung.
                </p>
              </div>
              <div className="flex gap-5 items-center bg-accent/5 p-8 rounded-3xl border border-accent/20">
                <Thermometer className="text-accent w-10 h-10 shrink-0" />
                <p className="text-sm font-serif italic text-primary leading-relaxed">
                  Die Therapie findet stets leicht bekleidet in einer außerordentlich angenehmen, warmen und ruhigen Wohlfühl-Atmosphäre für exakt 30–45 Minuten statt.
                </p>
              </div>
            </div>

            <div className="bg-primary p-12 lg:p-14 rounded-[4rem] border border-border shadow-2xl relative overflow-hidden text-left">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 -mr-32 -mt-32 rounded-full blur-3xl"></div>
              <h3 className="text-3xl font-serif font-bold text-white mb-10 flex items-center gap-4 relative z-10 text-left">
                <Wind className="text-accent w-10 h-10" /> Wirkungsweise
              </h3>
              <ul className="space-y-5 relative z-10 text-left">
                {[
                  "Rasante Gefäßerweiterung & signifikante Blutdrucksenkung",
                  "Massive Anregung des zellulären Sauerstoff-Stoffwechsels",
                  "Gezielte Entzündungshemmung & tiefe Schmerzlinderung",
                  "Nachhaltige Stärkung des humoralen Immunsystems",
                  "Schnellere, beschleunigte Unterstützung der Wundheilung",
                  "Extreme Optimierung der neuronalen Stress-Resilienz"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 text-left">
                    <CheckCircle2 className="text-accent w-6 h-6 shrink-0 mt-0.5" />
                    <span className="text-sm text-white font-medium leading-relaxed font-bold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center mb-16 text-center">
            <h2 className="text-3xl lg:text-4xl font-serif text-primary mb-4 text-center">Breite Anwendungsgebiete</h2>
            <p className="text-muted-foreground font-medium text-center">Die systemische Wirkung manifestiert sich in einer Vielzahl von Indikationen.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24 text-left">
            {applications.map((app, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-border hover:border-accent transition-all group shadow-sm text-left">
                <div className="bg-muted/30 w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                   <Droplet className="w-6 h-6 text-accent" />
                </div>
                <h4 className="text-xl font-bold font-serif text-primary mb-4 group-hover:text-accent transition-colors">{app.title}</h4>
                <p className="text-sm font-medium text-muted-foreground leading-relaxed">{app.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white border border-border p-12 lg:p-20 rounded-[4rem] text-center max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8">
               <Zap className="text-accent/10 w-48 h-48 -mr-10 -mt-10" />
             </div>
             <div className="relative z-10 text-left max-w-3xl mx-auto">
               <HeartPulse className="w-16 h-16 text-primary mx-auto mb-8 animate-pulse text-center" />
               <h2 className="text-3xl lg:text-5xl font-serif text-primary mb-8 font-bold text-center leading-tight">Diagnostik-gestützte <br />Präzisionstherapie</h2>
               <p className="text-lg font-medium text-muted-foreground mb-12 text-center leading-relaxed">
                 Wir entscheiden uns niemals blind. Über den hochgradig individuellen Einsatz des CO2-Bads urteilen wir basierend auf deinem aktuellen <strong>BHI (Bio-Health-Index)</strong>. Dieses laborgeprüfte Verfahren zeigt ganz exakt im Vorfeld, ob dein System jetzt gerade tiefgreifender von CO2 oder vielleicht von anderen, komplementären Sauerstoff-Therapien (z.B. der IHHT) profitiert.
               </p>
               <div className="flex flex-col sm:flex-row justify-center gap-6">
                 <Link to={ROUTE_PATHS.CONTACT} className="inline-flex bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-2xl flex items-center justify-center gap-3 shadow-primary/20 border-none">
                   Beratungstermin buchen <ArrowRight className="text-white w-6 h-6 text-center" />
                 </Link>
                 <Link to={ROUTE_PATHS.LABOR} className="inline-flex bg-white text-primary border border-border px-10 py-5 rounded-2xl font-bold text-lg hover:bg-muted transition-all flex items-center justify-center">
                   Infos zum BHI-Labor
                 </Link>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Constraints */}
      <section className="py-20 bg-muted/20 border-t border-border">
        <div className="container mx-auto px-4 max-w-5xl">
           <div className="bg-white border border-red-100 p-10 lg:p-12 rounded-[3.5rem] flex flex-col md:flex-row gap-10 items-start shadow-sm text-left">
              <div className="flex flex-col items-start gap-4 min-w-[200px]">
                <div className="bg-red-50 w-16 h-16 rounded-2xl border border-red-100 flex items-center justify-center">
                  <AlertTriangle className="text-red-500 w-8 h-8" />
                </div>
                <h3 className="font-serif font-bold text-2xl text-primary text-left">Strikte <br />Gegenanzeigen</h3>
              </div>
              <div className="text-sm font-medium text-muted-foreground leading-relaxed w-full">
                <p className="mb-6 italic text-primary/80">Zu deiner absoluten Sicherheit weisen wir darauf hin, dass eine durchblutungssteigernde CO2-Therapie in den folgenden Fällen bei uns <u>strikt nicht</u> zur Anwendung kommt:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-muted/30 p-6 rounded-3xl border border-border">
                  <div className="flex gap-3 items-center text-left bg-white p-3 rounded-xl shadow-sm border border-border/50"><span className="text-red-500 font-bold">•</span> Schwere instabile Herz-Kreislauf-Erkrankungen</div>
                  <div className="flex gap-3 items-center text-left bg-white p-3 rounded-xl shadow-sm border border-border/50"><span className="text-red-500 font-bold">•</span> Akute tiefe Entzündungen & stark fieberhafte Infekte</div>
                  <div className="flex gap-3 items-center text-left bg-white p-3 rounded-xl shadow-sm border border-border/50"><span className="text-red-500 font-bold">•</span> Akute schwere Lungen- oder unklare Krebserkrankungen</div>
                  <div className="flex gap-3 items-center text-left bg-white p-3 rounded-xl shadow-sm border border-border/50"><span className="text-red-500 font-bold">•</span> Akut instabile Lungenerkrankungen</div>
                </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
