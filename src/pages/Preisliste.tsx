import React from "react";
import SEO from "@/components/SEO";
import { 
  CheckCircle2, 
  Info, 
  ShieldCheck, 
  ChevronRight,
  Zap,
  Heart,
  Activity,
  ArrowRight,
  Gem,
  Clock,
  Euro
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "@/lib/index";

export default function Preisliste() {
  const categories = [
    {
      title: "Naturheilpraxis - Einzelbehandlungen",
      icon: <Activity className="w-6 h-6 text-primary" />,
      items: [
        { name: "Einzelberatung / Erstanamnese", price: "100,- €", detail: "60 Min. inkl. Untersuchung, Therapieplan, Laborbesprechung", time: "60 min" },
        { name: "Aku-pur (Akupunktur extra)", price: "40,- €", detail: "Behandlung nach Erstanamnese", time: "30 min" },
        { name: "Aku-plus (Akupunktur begleitend)", price: "26,- €", detail: "Begleittherapie (z.B. zu Infusion oder Geburtsvorbereitung)", time: "30 min" },
        { name: "IHHT / Höhentraining", price: "75,- €", detail: "Zelltraining (zzgl. einmalig 10,- € für Maske)", time: "60 min" },
        { name: "Infusionstherapie", price: "65,- €", detail: "Wirkstoff-Drip (zzgl. Medikamente)", time: "45-90 min" },
        { name: "Haemo-Laser", price: "60,- €", detail: "Lichttherapie inkl. Lichtleiter", time: "30 min" },
        { name: "CO2-Vitalisierungsbad", price: "45,- €", detail: "Trockenbad (zzgl. einmalig 7,50 € für Hülle)", time: "45 min" },
        { name: "brainLight-pur", price: "7,50 €", detail: "Nur Brille & Kopfhörer (ohne Massage)", time: "bis 30 min" },
        { name: "brainLight komplett", price: "ab 15,- €", detail: "System & Massage / Mentaltraining", time: "15-60 min" },
        { name: "Massagesessel individuell", price: "40,- €", detail: "Inkl. Gesundheitscheck & Ionen-Funktion", time: "60 min" },
        { name: "Massagesessel pur", price: "ab 10,- €", detail: "Automatik-Massageprogramme", time: "15-60 min" },
      ]
    },
    {
      title: "Naturheilpraxis - Pakete & Kombis",
      subtitle: "Günstigere Konditionen (10 zum Preis von 9!)",
      icon: <Gem className="w-6 h-6 text-accent" />,
      highlight: true,
      items: [
        { name: "Air-pur 10 (IHHT)", price: "675,- €", detail: "Statt 750,- € (zzgl. Maske, 2 RZ möglich)" },
        { name: "Drop-pur 10 (Infusionen)", price: "585,- €", detail: "Statt 650,- € (zzgl. Medikamente, 2 RZ möglich)" },
        { name: "Light-pur 10 (Laser)", price: "540,- €", detail: "Statt 600,- € (2 RZ möglich)" },
        { name: "Carbo-pur 10 (CO2)", price: "405,- €", detail: "Statt 450,- € (zzgl. Hülle)" },
        { name: "Kombi AkuLight 10", price: "945,- €", detail: "Akupunktur + Laser (Statt 1.050,- €, 3 RZ möglich)" },
        { name: "Kombi AkuDrop 10", price: "990,- €", detail: "Akupunktur + Infusion (Statt 1.100,- €, 3 RZ möglich)" },
        { name: "Kombi AirDrop", price: "975,- €", detail: "10x IHHT + 5x Infusion (Statt 1.075,- €, 3 RZ möglich)" },
        { name: "Ultra Kombi 20", price: "2.205,- €", detail: "20 Termine (Mix-Therapie, 4 RZ möglich)" },
        { name: "Mega Kombi 30", price: "2.630,- €", detail: "30 Termine (Das Rundum-Paket, 5 RZ möglich)" },
      ]
    },
    {
      title: "Hebammenpraxis & Veranstaltungen",
      icon: <Heart className="w-6 h-6 text-rose-500" />,
      items: [
        { name: "Geburtsvorbereitung Partnergebühr", price: "160,- €", detail: "Kompletter Kurs (14 Stunden)" },
        { name: "Partnergebühr (pro Stunde)", price: "12,- €", detail: "Bei stundenweiser Teilnahme" },
        { name: "Vorträge (1,5 Std.)", price: "ab 7,50 €", detail: "Auf freiwilliger Spendenbasis möglich" },
        { name: "Wochenend-Seminare", price: "250,- €", detail: "10-12 Std. inkl. Imbiss & Verpflegung" },
      ]
    }
  ];

  return (
    <div className="bg-background min-h-screen">
      <SEO 
        title="Preisliste & Konditionen | Feminatalis" 
        description="Transparente Preisstruktur für Naturheilkunde, Hebammenleistungen und Wellness-Pakete." 
      />

      <div className="pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-5xl">
          
          {/* Header */}
          <div className="text-center mb-16">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-primary/5 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block"
            >
              Preise & Konditionen
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif text-primary mb-6"
            >
              Investition in deine Gesundheit
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              Transparente Preisgestaltung für Selbstzahler und Privatversicherte. Qualität und Zeit für deine individuelle Begleitung.
            </motion.p>
          </div>

          {/* Konditionen / Info Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-[2.5rem] border border-border shadow-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-primary">Abrechnung</h3>
              </div>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span><strong>Privatversicherte/Beihilfe:</strong> Rechnung nach GeBüH (ohne Garantie auf volle Übernahme).</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span><strong>Gesetzlich Versicherte:</strong> Die genannten Preise gelten für Selbstzahler.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span><strong>Paket-Anrechnung:</strong> Bei nachträglicher Paketbuchung werden Einzelbehandlungen angerechnet.</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-[2.5rem] border border-border shadow-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-accent">
                  <Info className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-primary">Wichtige Hinweise</h3>
              </div>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                  <span><strong>cosMedea Leistungen:</strong> Wellness- & Ästhetik-Leistungen verstehen sich zzgl. 19% MwSt.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                  <span><strong>Ratenzahlung (RZ):</strong> Bei Paketen sind bis zu 5 Raten möglich (siehe Details).</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                  <span><strong>Nachweis:</strong> Preise gelten für Selbstzahler, die nachweislich einer Therapie bedürfen.</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Price Categories */}
          <div className="space-y-12">
            {categories.map((cat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={cn(
                  "rounded-[3rem] overflow-hidden border",
                  cat.highlight ? "border-accent/30 bg-accent/[0.02] shadow-xl shadow-accent/5" : "border-border bg-white"
                )}
              >
                <div className="p-8 md:p-10 border-b border-border flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "w-12 h-12 rounded-2xl flex items-center justify-center",
                      cat.highlight ? "bg-accent/10" : "bg-primary/5"
                    )}>
                      {cat.icon}
                    </div>
                    <div>
                      <h2 className="text-2xl font-serif text-primary">{cat.title}</h2>
                      {cat.subtitle && <p className="text-xs text-accent font-bold uppercase tracking-wider mt-1">{cat.subtitle}</p>}
                    </div>
                  </div>
                  {cat.highlight && (
                    <span className="bg-accent text-white text-[10px] uppercase font-bold tracking-widest px-4 py-1.5 rounded-full self-start md:self-center shadow-lg shadow-accent/20">
                      Top Konditionen
                    </span>
                  )}
                </div>
                <div className="divide-y divide-border">
                  {cat.items.map((item, i) => (
                    <div key={i} className="p-6 md:px-10 flex flex-col md:flex-row md:items-center justify-between hover:bg-slate-50/50 transition-colors gap-4">
                      <div className="space-y-1.5 flex-grow">
                        <div className="font-bold text-primary flex items-center gap-2 text-lg">
                          {item.name}
                          {item.name.includes("Kombi") && <Zap className="w-4 h-4 text-accent fill-accent animate-pulse" />}
                        </div>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                          {(item as any).time && (
                            <span className="flex items-center gap-1 bg-slate-100 px-2 py-0.5 rounded text-[12px] font-medium">
                              <Clock size={12} /> {(item as any).time}
                            </span>
                          )}
                          <span>{item.detail}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between md:justify-end gap-6 min-w-[120px]">
                        <div className={cn(
                          "text-2xl font-serif flex items-center gap-1",
                          cat.highlight ? "text-accent" : "text-primary"
                        )}>
                          {item.price}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 p-10 md:p-16 rounded-[3rem] bg-primary text-white text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-bl-[200px] -z-0" />
            <div className="relative z-10">
              <h2 className="text-3xl font-serif mb-6">Hast du Fragen zur Abrechnung?</h2>
              <p className="text-primary-foreground/80 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
                Ich berate dich gerne individuell, welcher Weg für deine Situation am sinnvollsten ist. Kontaktiere mich einfach für ein kurzes Telefonat.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  to={ROUTE_PATHS.CONTACT} 
                  className="bg-white text-primary px-10 py-4 rounded-2xl font-bold hover:bg-accent hover:text-white transition-all shadow-xl shadow-black/10 flex items-center justify-center gap-2"
                >
                  Jetzt Kontakt aufnehmen <ArrowRight size={20} />
                </Link>
                <Link 
                  to={ROUTE_PATHS.VORQUALIFIZIERUNG} 
                  className="bg-white/10 border border-white/20 text-white px-10 py-4 rounded-2xl font-bold hover:bg-white/20 transition-all flex items-center justify-center gap-2"
                >
                  Zum Vorab-Check <ChevronRight size={20} />
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}

