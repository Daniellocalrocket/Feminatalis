import React from "react";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, Eye, FileText } from "lucide-react";

export default function Datenschutz() {
  return (
    <div className="bg-background min-h-screen pt-32 pb-24">
      <SEO title="Datenschutzerklärung | feminatalis" description="Informationen zum Schutz Ihrer persönlichen Daten bei der Nutzung unserer Website." />
      
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 md:p-16 rounded-[3rem] border border-border shadow-sm"
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              <ShieldCheck size={32} />
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-serif text-primary">Datenschutz</h1>
              <p className="text-muted-foreground font-medium">Sicherheit und Transparenz</p>
            </div>
          </div>

          <div className="prose prose-slate max-w-none space-y-12 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-2xl font-serif text-primary mb-4 flex items-center gap-3">
                <Lock size={20} className="text-accent" /> 1. Datenschutz auf einen Blick
              </h2>
              <h3 className="text-lg font-bold text-primary mb-2">Allgemeine Hinweise</h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-primary mb-4 flex items-center gap-3">
                <Eye size={20} className="text-accent" /> 2. Datenerfassung auf dieser Website
              </h2>
              <h3 className="text-lg font-bold text-primary mb-2">Wer ist verantwortlich für die Datenerfassung?</h3>
              <p>
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Die Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
              </p>
              <h3 className="text-lg font-bold text-primary mt-6 mb-2">Wie erfassen wir Ihre Daten?</h3>
              <p>
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-primary mb-4 flex items-center gap-3">
                <FileText size={20} className="text-accent" /> 3. Ihre Rechte
              </h2>
              <p>
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen.
              </p>
            </section>

            <div className="bg-slate-50 p-8 rounded-3xl border border-border italic text-sm">
              Hinweis: Dies ist eine vorläufige Struktur. Bitte stellen Sie sicher, dass die finalen Rechtstexte (z.B. von einem spezialisierten Dienstleister wie e-recht24 oder einem Anwalt) eingepflegt werden, sobald alle Drittanbieter-Tools (Analyse-Tools, Cookies etc.) final feststehen.
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
