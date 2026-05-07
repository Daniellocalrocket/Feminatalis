import React from "react";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, Eye, FileText, Heart, CheckCircle2 } from "lucide-react";

export default function Datenschutz() {
  return (
    <div className="bg-background min-h-screen pt-32 pb-24">
      <SEO 
        title="Datenschutzerklärung | feminatalis" 
        description="Ausführliche Informationen zum Schutz Ihrer persönlichen Daten bei der Hebammen- und Naturheilpraxis feminatalis." 
      />
      
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 md:p-16 rounded-[4rem] border border-border shadow-sm"
        >
          <div className="flex items-center gap-6 mb-16 border-b border-border pb-10">
            <div className="w-20 h-20 rounded-[2rem] bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <ShieldCheck size={40} />
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-serif text-primary mb-2">Datenschutzerklärung</h1>
              <p className="text-muted-foreground font-medium text-lg italic">Stand: April 2026</p>
            </div>
          </div>

          <div className="prose prose-slate max-w-none space-y-16 text-muted-foreground leading-relaxed">
            
            {/* 1. Einleitung */}
            <section>
              <p className="text-lg mb-8">
                Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung von personenbezogenen Daten (nachfolgend kurz „Daten“) innerhalb unseres Onlineangebotes und der mit ihm verbundenen Webseiten, Funktionen und Inhalte sowie externen Onlinepräsenzen, wie z.B. unser Social Media Profile auf (nachfolgend gemeinsam bezeichnet als „Onlineangebot“). Im Hinblick auf die verwendeten Begrifflichkeiten, wie z.B. „Verarbeitung“ oder „Verantwortlicher“ verweisen wir auf die Definitionen im Art. 4 der Datenschutzgrundverordnung (DSGVO).
              </p>
              
              <div className="bg-accent/5 p-10 rounded-[2.5rem] border border-border">
                <h3 className="text-primary font-bold text-xl mb-6">Verantwortlicher</h3>
                <p className="font-medium text-primary mb-1">Hebammen- und Naturheilpraxis feminatalis</p>
                <p className="mb-1">Hebelstraße 3a</p>
                <p className="mb-6">76669 Bad Schönborn</p>
                
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <p><strong>Tel.:</strong> 07253 / 84 68 72 8</p>
                  <p><strong>E-Mail:</strong> info@feminatalis.de</p>
                  <p><strong>Inhaber:</strong> Angela Deschner</p>
                </div>
              </div>
            </section>

            {/* 2. Datenarten */}
            <section>
              <h2 className="text-3xl font-serif text-primary mb-8 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent"><FileText size={20}/></div>
                Arten der verarbeiteten Daten
              </h2>
              <ul className="grid sm:grid-cols-2 gap-4 list-none p-0">
                <li className="bg-primary/5 p-6 rounded-2xl border border-border flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent" /> Bestandsdaten (z.B. Namen, Adressen)
                </li>
                <li className="bg-primary/5 p-6 rounded-2xl border border-border flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent" /> Kontaktdaten (z.B. E-Mail, Telefonnummern)
                </li>
                <li className="bg-primary/5 p-6 rounded-2xl border border-border flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent" /> Inhaltsdaten (z.B. Texteingaben, Fotos)
                </li>
                <li className="bg-primary/5 p-6 rounded-2xl border border-border flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent" /> Nutzungsdaten (z.B. besuchte Webseiten)
                </li>
              </ul>
            </section>

            {/* 3. Gesundheitsvorsorge */}
            <section className="bg-primary/5 p-10 rounded-[3rem] border border-primary/10">
              <h2 className="text-3xl font-serif text-primary mb-6 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary"><Heart size={20}/></div>
                Der Gesundheitsvorsorge dienende Leistungen
              </h2>
              <p className="mb-6">
                Wir verarbeiten die Daten unserer Patienten entsprechend Art. 6 Abs. 1 lit. b) DSGVO, um Ihnen gegenüber unsere vertraglichen Leistungen zu erbringen. 
              </p>
              <p className="font-bold text-primary mb-4">Besondere Kategorien von Daten (Art. 9 Abs. 1 DSGVO):</p>
              <p className="mb-6">
                Im Rahmen unserer Leistungen verarbeiten wir insbesondere Angaben zur Gesundheit der Patienten. Hierzu holen wir, sofern erforderlich, gem. Art. 9 Abs. 2 lit. a. DSGVO eine ausdrückliche Einwilligung ein oder verarbeiten diese Daten auf Grundlage des Art. 9 Abs. 2 lit. h. DSGVO (Gesundheitsvorsorge).
              </p>
              <p className="text-sm italic">
                Sofern erforderlich, übermitteln wir Daten an medizinische Fachkräfte, Labore oder Abrechnungsstellen, sofern dies der Erbringung unserer Leistungen dient oder gesetzlich vorgeschrieben ist.
              </p>
            </section>

            {/* 4. Hosting & Backend */}
            <section>
              <h2 className="text-3xl font-serif text-primary mb-8 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent"><Lock size={20}/></div>
                Hosting und technisches Backend
              </h2>
              <p className="mb-8">
                Um unser Onlineangebot sicher und effizient bereitzustellen, nutzen wir die Dienste von spezialisierten Cloud- und Hosting-Anbietern.
              </p>
              <div className="space-y-6">
                <div className="p-8 bg-accent/5 rounded-3xl border border-border">
                  <h4 className="font-bold text-primary mb-3">Vercel (Hosting)</h4>
                  <p className="text-sm leading-relaxed">
                    Unsere Website wird auf der Plattform Vercel gehostet (Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA). Hierbei werden Zugriffsdaten und Server-Logfiles verarbeitet. Die Übermittlung in die USA erfolgt auf Grundlage des EU-US Data Privacy Frameworks.
                  </p>
                </div>
                <div className="p-8 bg-accent/5 rounded-3xl border border-border">
                  <h4 className="font-bold text-primary mb-3">Supabase (Datenbank & Formulare)</h4>
                  <p className="text-sm leading-relaxed">
                    Die Speicherung Ihrer Eingaben in Kontaktformularen (z.B. Vorqualifizierung) und die Verwaltung von Kursdaten erfolgt über Supabase (Supabase Inc.). Die Daten werden in verschlüsselten Datenbanken innerhalb der EU verarbeitet, um maximale Sicherheit und Vertraulichkeit zu gewährleisten.
                  </p>
                </div>
              </div>
            </section>

            {/* 5. Google Analytics 4 */}
            <section>
              <h2 className="text-3xl font-serif text-primary mb-8">Webseitenanalyse & Google Analytics 4</h2>
              <p className="mb-6">
                Diese Website nutzt Google Analytics 4 (GA4). Zuständig ist Google Ireland Limited, Gordon House, Barrow St, Dublin 4, Irland. 
              </p>
              <p className="mb-6">
                GA4 praktiziert standardmäßig die IP-Anonymisierung. Ihre IP-Adresse wird sofort gekürzt und nicht mit anderen Google-Daten kombiniert. Die Erfassung erfolgt nur mit Ihrer ausdrücklichen Zustimmung über das Cookie-Banner (Art. 6 Abs. 1 lit. a DSGVO).
              </p>
              <p className="text-sm border-l-4 border-accent pl-6 py-2">
                Die Speicherdauer der Daten ist auf 14 Monate begrenzt, sofern sie mit Cookies oder Nutzer-IDs verknüpft sind.
              </p>
            </section>

            {/* 6. Rechte & Widerruf */}
            <section className="bg-primary/5 p-10 rounded-[3rem] border border-border">
              <h2 className="text-2xl font-serif text-primary mb-6">Ihre Rechte als betroffene Person</h2>
              <p className="mb-8">Sie haben jederzeit das Recht auf:</p>
              <ul className="grid md:grid-cols-2 gap-6 list-none p-0">
                <li className="flex gap-4 items-start">
                  <CheckCircle2 className="text-primary shrink-0 mt-1" size={18}/>
                  <span><strong>Auskunft:</strong> Über Ihre bei uns gespeicherten Daten (Art. 15 DSGVO).</span>
                </li>
                <li className="flex gap-4 items-start">
                  <CheckCircle2 className="text-primary shrink-0 mt-1" size={18}/>
                  <span><strong>Berichtigung:</strong> Korrektur unrichtiger Daten (Art. 16 DSGVO).</span>
                </li>
                <li className="flex gap-4 items-start">
                  <CheckCircle2 className="text-primary shrink-0 mt-1" size={18}/>
                  <span><strong>Löschung:</strong> Entfernung Ihrer Daten (Art. 17 DSGVO).</span>
                </li>
                <li className="flex gap-4 items-start">
                  <CheckCircle2 className="text-primary shrink-0 mt-1" size={18}/>
                  <span><strong>Widerruf:</strong> Jede Einwilligung kann für die Zukunft widerrufen werden.</span>
                </li>
              </ul>
            </section>

            <div className="pt-10 border-t border-border text-center text-sm italic">
              Erstellt mit Unterstützung des Datenschutz-Generators von RA Dr. Thomas Schwenke und angepasst an die individuelle Infrastruktur von feminatalis.
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
