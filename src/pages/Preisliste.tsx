import React from "react";
import SEO from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { 
  CheckCircle2, 
  Info, 
  CreditCard, 
  Wallet, 
  ShieldCheck, 
  ChevronRight,
  Zap,
  Heart,
  Activity,
  ArrowRight,
  Gem
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
        { name: "Erstanamnese & Ganzheitliche Analyse", price: "100,- € / Std.", detail: "ca. 60-90 Min. inkl. Erstberatung, Befundanalyse und Untersuchung" },
        { name: "Folgeberatung / Therapieanpassung", price: "ab 65,- €", detail: "ca. 30-45 Min." },
        { name: "Akupunktur (TCM)", price: "65,- €", detail: "Pro Sitzung" },
        { name: "IHHT / Zelltraining (Sauerstoff)", price: "85,- €", detail: "Pro Sitzung (45 Min.)" },
        { name: "Infusionstherapie (Drip-Spa)", price: "ab 65,- €", detail: "Zzgl. Material/Labor je nach Wirkstoffen" },
        { name: "CO2-Therapie (Carboxy)", price: "45,- €", detail: "Pro Behandlung" },
        { name: "Low-Level-Lasertherapie", price: "45,- €", detail: "Pro Behandlung" },
        { name: "brainLight-Tiefenregeneration", price: "25,- €", detail: "20 Min. Entspannungssitzung" },
      ]
    },
    {
      title: "Naturheilpraxis - Pakete & Kombis",
      icon: <Gem className="w-6 h-6 text-accent" />,
      highlight: true,
      items: [
        { name: "10er Paket (Alle Einzelbehandlungen)", price: "-10%", detail: "Zahle 9, erhalte 10 Behandlungen" },
        { name: "5er Paket (Alle Einzelbehandlungen)", price: "-5%", detail: "Zahle 4,5, erhalte 5 Behandlungen" },
        { name: "Ultra Kombi (IHHT + Infusion)", price: "ab 140,- €", detail: "Maximale Zellregeneration" },
        { name: "Mega Kombi (IHHT + Infusion + brainLight)", price: "ab 160,- €", detail: "Das Komplettpaket für deine Energie" },
        { name: "Ratenzahlung (RZ)", price: "Möglich", detail: "Bei Paketen ab 500,- € Gesamtwert" },
      ]
    },
    {
      title: "Hebammenpraxis & Kurse",
      icon: <Heart className="w-6 h-6 text-rose-500" />,
      items: [
        { name: "Geburtsvorbereitungskurs", price: "Kasse / Partnergebühr", detail: "Abrechnung Hebammen-Gebührenverordnung" },
        { name: "Partnergebühr Geburtsvorbereitung", price: "120,- €", detail: "Inkl. Kursmaterialien & Verpflegung" },
        { name: "Vorträge & Seminare", price: "ab 25,- €", detail: "Themenabende laut Veranstaltungskalender" },
        { name: "Rückbildungskurs", price: "Kassenleistung", detail: "Laut gesetzlicher Regelung" },
      ]
    }
  ];

  return (
    <>
      <SEO 
        title="Preisliste & Konditionen | Feminatalis" 
        description="Transparente Preisstruktur für Naturheilkunde, Hebammenleistungen und Wellness-Pakete. Erfahren Sie mehr über Abrechnungsmöglichkeiten und Paketpreise." 
      />

      <div className="bg-background pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-5xl">
          
          {/* Header */}
          <div className="text-center mb-16">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-primary/5 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block"
            >
              Transparenz & Fairness
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
              Qualität und Zeit haben ihren Wert. Ich nehme mir die Zeit, die du brauchst, um die Ursachen deiner Beschwerden wirklich zu verstehen.
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
                  <span><strong>Privatversicherte:</strong> Die Abrechnung erfolgt nach der Gebührenordnung für Heilpraktiker (GeBüH).</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span><strong>Zusatzversicherungen:</strong> Erstattungen sind je nach Tarif möglich. Bitte prüfe dies vorab.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span><strong>Selbstzahler:</strong> Du erhältst eine Rechnung für deine Unterlagen. Heilpraktikerleistungen sind gem. § 4 Nr. 14 UStG umsatzsteuerfrei.</span>
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
                  <span><strong>Terminabsagen:</strong> Bis 24 Std. vorher kostenfrei möglich. Spätere Absagen werden in Rechnung gestellt.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                  <span><strong>cosMedea Leistungen:</strong> Wellness- & Ästhetik-Leistungen verstehen sich zzgl. der gesetzlichen MwSt. (19%).</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                  <span><strong>Vorbereitung:</strong> Bring bitte vorhandene Laborwerte oder Arztberichte zum Erstgespräch mit.</span>
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
                <div className="p-8 md:p-10 border-b border-border flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "w-12 h-12 rounded-2xl flex items-center justify-center",
                      cat.highlight ? "bg-accent/10" : "bg-primary/5"
                    )}>
                      {cat.icon}
                    </div>
                    <h2 className="text-2xl font-serif text-primary">{cat.title}</h2>
                  </div>
                  {cat.highlight && (
                    <span className="hidden md:block bg-accent text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full">
                      Empfehlung
                    </span>
                  )}
                </div>
                <div className="divide-y divide-border">
                  {cat.items.map((item, i) => (
                    <div key={i} className="p-6 md:px-10 flex flex-col md:flex-row md:items-center justify-between hover:bg-slate-50/50 transition-colors gap-4">
                      <div className="space-y-1">
                        <div className="font-bold text-primary flex items-center gap-2 text-lg">
                          {item.name}
                          {item.name.includes("Kombi") && <Zap className="w-4 h-4 text-accent fill-accent" />}
                        </div>
                        <div className="text-sm text-muted-foreground">{item.detail}</div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className={cn(
                          "text-xl font-serif",
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
    </>
  );
}

// Helper for class names (since I can't import cn from @/lib/utils if it doesn't exist, but usually it does in this project)
function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}
