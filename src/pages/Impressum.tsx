import React from "react";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "@/lib/index";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ExternalLink, ShieldCheck, Scale, FileText, Camera, Info } from "lucide-react";

export default function Impressum() {
  return (
    <>
      <SEO title="Impressum | feminatalis" description="Ganzheitliche Gesundheit & Hebammenpraxis Angela Deschner - Rechtliche Hinweise und Impressum." />

      <main className="bg-background min-h-screen pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-serif text-primary mb-6">Impressum</h1>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
          </motion.div>

          <div className="space-y-12">
            {/* Contact Details */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-border/50"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                  <Info className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-serif text-primary">Angaben gemäß § 5 TMG</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <p className="text-xl font-bold text-primary">Frau Angela Deschner</p>
                  <p className="text-muted-foreground font-medium">Hebamme und Heilpraktikerin</p>
                  <div className="flex items-start gap-3 text-muted-foreground">
                    <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
                    <span>Hebelstraße 3a<br />76669 Bad Schönborn</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Phone className="w-5 h-5 text-accent shrink-0" />
                    <div className="space-y-1">
                      <p>Tel: <a href="tel:072538468728" className="hover:text-primary transition-colors">07253-8468728</a></p>
                      <p>Mobil: <a href="tel:01716877854" className="hover:text-primary transition-colors">0171-6877854</a></p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Mail className="w-5 h-5 text-accent shrink-0" />
                    <p>E-Mail: <a href="mailto:kontakt@feminatalis.de" className="hover:text-primary transition-colors">kontakt@feminatalis.de</a></p>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <ExternalLink className="w-5 h-5 text-accent shrink-0" />
                    <p>Website: <a href="https://www.feminatalis.de" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">www.feminatalis.de</a></p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Legal Foundations */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="grid md:grid-cols-2 gap-8"
            >
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-border/50">
                <div className="flex items-center gap-3 mb-6">
                  <Scale className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-serif text-primary">Berufsbezeichnung</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Land der Berufserlaubnis für beide Berufe: <strong>Deutschland</strong>
                </p>
                <div className="space-y-3">
                  <p className="text-sm font-bold text-primary uppercase tracking-wider">Rechtsgrundlagen:</p>
                  <ul className="space-y-2 text-sm text-accent font-medium">
                    <li><a href="http://www.hebammengesetz.de/gesetz.htm" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-2">hebammengesetz.de <ExternalLink size={12}/></a></li>
                    <li><a href="https://www.gesetze-im-internet.de/heilprg/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-2">Heilpraktikergesetz <ExternalLink size={12}/></a></li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-sm border border-border/50">
                <div className="flex items-center gap-3 mb-6">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-serif text-primary">Aufsichtsbehörde</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-muted-foreground">Zuständige Aufsichtsbehörde:</p>
                  <p className="text-xl font-bold text-primary">Gesundheitsamt in Karlsruhe</p>
                  <div className="inline-block bg-primary/5 px-4 py-2 rounded-xl border border-primary/10">
                    <p className="text-sm font-bold text-primary">IK-Nr: 450824493</p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Disclaimer Sections */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-border/50 space-y-10"
            >
              {/* Haftungsausschluss */}
              <div>
                <h2 className="text-2xl font-serif text-primary mb-4 uppercase tracking-wide">Haftungsausschluss</h2>
                <div className="text-muted-foreground leading-relaxed space-y-4 text-sm md:text-base">
                  <p>
                    Die Betreiberin der Webseite www.feminatalis.de Hebamme und Heilpraktikerin Angela Deschner (nachfolgend die Anbieterin genannt) hat redaktionelle Inhalte dieses Webauftritts mit größtmöglicher Sorgfalt erstellt. Die Anbieterin übernimmt jedoch keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Inhalte. Die Nutzung der Inhalte der Webseite erfolgt auf eigene Gefahr des Nutzers. Namentlich gekennzeichnete Beiträge geben die Meinung des jeweiligen Autors und nicht immer die Meinung der Anbieterin wieder. Mit der reinen Nutzung dieser Webseite kommt keinerlei Vertragsverhältnis zwischen dem Nutzer und der Anbieterin zustande.
                  </p>
                </div>
              </div>

              {/* Verlinkungen */}
              <div>
                <h3 className="text-xl font-serif text-primary mb-4">Verlinkungen</h3>
                <div className="text-muted-foreground leading-relaxed space-y-4 text-sm">
                  <p>
                    Das Bestreben der Anbieterin ist es, nur Webseiten zu verlinken, die inhaltlich, rechtlich und ethisch vertretbar sind. Sie hat keinerlei Einfluss auf die aktuelle und zukünftige Gestaltung und auf die Inhalte und Verfügbarkeit der verknüpften Seiten. Ebenso wird keine Haftung für Schäden übernommen, die aus der Nutzung deren Inhalten entstehen.
                  </p>
                  <p>
                    Die von diesem Webauftritt verlinkten Webseiten Dritter ("externe Links") unterliegen nicht der Kontrolle der Anbieterin, daher kann für die Inhalte oder präsentierte Produkte oder Dienstleistungen der verlinkten Seiten ebenso keine Verantwortung bzw. Haftung übernommen werden.
                  </p>
                  <p>
                    Das Setzen von externen Links bedeutet nicht, dass sich die Anbieterin die hinter dem Verweis oder Link liegenden Inhalte zu Eigen macht. Eine ständige Kontrolle der externen Links ist für die Website-Betreiberin ohne konkrete Hinweise auf Rechtsverstöße nicht zumutbar. Bei Kenntnis von Rechtsverstößen werden jedoch derartige externe Links sofort entfernt.
                  </p>
                </div>
              </div>

              {/* Heilversprechen */}
              <div className="bg-orange-50/50 p-6 rounded-2xl border border-orange-100">
                <h3 className="font-bold text-primary mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-accent" />
                  Rechtliche Hinweise bezüglich eines Heilversprechens
                </h3>
                <div className="text-muted-foreground leading-relaxed space-y-4 text-sm">
                  <p>
                    Die Anbieterin in ihrer Funktion als Hebamme und Heilpraktikerin weist ausdrücklich darauf hin, dass mit den beschriebenen Therapien und Methoden in diesem Webauftritt in keinem Fall ein Heilversprechen nach § 3 Heilmittelwerbegesetz ausgedrückt wird, sondern lediglich die mögliche Anwendung dieser Methoden. Hieraus kann nicht abgeleitet werden, dass Linderung oder Verbesserung eines Krankheitszustandes garantiert oder versprochen wird.
                  </p>
                  <p>
                    Bei den hier vorgestellten Behandlungsmethoden handelt es sich um naturheilkundliche bzw. komplementärmedizinische Verfahren, deren Wirksamkeit nicht immer wissenschaftlich oder schulmedizinisch nachgewiesen und anerkannt ist. Die auf dieser Webseite bereitgestellten Informationen können nicht dazu verwendet werden, um Krankheiten oder Leiden selbst zu erkennen und zu behandeln.
                  </p>
                </div>
              </div>

              {/* Urheberrecht */}
              <div className="border-t border-border/50 pt-8">
                <h2 className="text-2xl font-serif text-primary mb-4 uppercase tracking-wide">Urheberrecht</h2>
                <div className="text-muted-foreground leading-relaxed space-y-4 text-sm">
                  <p>
                    Die auf dieser Webseite veröffentlichten Texte und Grafiken sind urheberrechtlich geschützt. Jede vom deutschen Urheber- und Leistungsschutzrecht nicht zugelassene Verwertung bedarf der vorherigen schriftlichen Zustimmung des Anbieters oder jeweiligen Rechteinhabers. Dies gilt insbesondere für Vervielfältigung, Bearbeitung, Übersetzung, Einspeicherung, Verarbeitung bzw. Wiedergabe von Inhalten in Datenbanken oder anderen elektronischen Medien und Systemen. Inhalte und Rechte Dritter sind dabei als solche gekennzeichnet. Die unerlaubte Vervielfältigung oder Weitergabe einzelner Inhalte oder kompletter Seiten ist nicht gestattet und strafbar. Lediglich die Herstellung von Kopien und Downloads für den persönlichen, privaten und nicht kommerziellen Gebrauch ist erlaubt. Die Darstellung dieser Webseite in fremden Frames ist nur mit schriftlicher Erlaubnis zulässig.
                  </p>
                  <p>
                    Für Fehler im Text oder falsche Links wird keine Haftung übernommen.
                  </p>
                </div>
                
                <div className="mt-8 flex flex-wrap gap-4 items-center">
                  <span className="text-xs font-bold text-primary uppercase tracking-widest flex items-center gap-2">
                    <Camera className="w-4 h-4 text-accent" /> Rechte der verwendeten Fotos:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {["Fotolia", "Pixabay", "Canstockphoto", "IStockphoto", "Privat"].map(source => (
                      <span key={source} className="bg-muted px-3 py-1 rounded-full text-[10px] font-medium text-muted-foreground">{source}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Werbeverbot & Diverses */}
            <div className="grid md:grid-cols-2 gap-8">
              <motion.section 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-3xl p-8 shadow-sm border border-border/50"
              >
                <h2 className="text-xl font-serif text-primary mb-4 uppercase tracking-wide">Werbung</h2>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Die Verwendung der Kontaktdaten des Impressums zur gewerblichen Werbung ist ausdrücklich untersagt, es sei denn der Anbieter hatte zuvor seine schriftliche Einwilligung erteilt oder es besteht bereits eine Geschäftsbeziehung. Die Anbieterin widerspricht hiermit jeder kommerziellen Verwendung und Weitergabe ihrer Daten und behält sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.
                </p>
              </motion.section>

              <motion.section 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-3xl p-8 shadow-sm border border-border/50"
              >
                <h2 className="text-xl font-serif text-primary mb-4 uppercase tracking-wide">Produkt- und Markennamen</h2>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Diese Webseite enthält unter Umständen Hinweise auf Produkt- und Markennamen anderer Firmen. Die verwendeten Begriffe sind Warenzeichen und/oder eingetragene Warenzeichen der entsprechenden Firmen.
                </p>
              </motion.section>
            </div>

            {/* Bild- und Tonaufzeichnungen */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-border/50"
            >
              <h2 className="text-xl font-serif text-primary mb-4">Bild- und Tonaufzeichnungen</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Bild- oder Tonaufzeichnungen im Rahmen der Hilfestellung, Betreuung, Kursteilnahme oder Inanspruchnahme der Leistungen der Anbieterin in ihrer Funktion als Hebamme und Heilpraktikerin bedürfen in jedem Fall der vorherigen schriftlichen Zustimmung aller Beteiligten. Gleiches gilt für jede spätere Verwendung von Bild- oder Tonaufzeichnungen, die nicht ausschließlich privaten Zwecken dient.
              </p>
            </motion.section>

            {/* Streitbeilegung */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-primary text-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-primary/10"
            >
              <h2 className="text-2xl font-serif mb-6 uppercase tracking-wide">Streitbeilegung</h2>
              <div className="space-y-4 text-sm text-white/80 leading-relaxed">
                <p>
                  Die Anbieterin dieser Webseite nimmt nicht an einer außergerichtlichen Streitbeilegung gemäß Verbraucherstreitbeilegungsgesetz (VSBG) teil.
                </p>
                <p>
                  Rein vorsorglich, nur für den Fall einer nicht disponiblen gesetzlichen Pflicht zur Teilnahme an einer außergerichtlichen Streitbeilegung im Sinne des Verbraucherstreitbeilegungsgesetz, wird nachfolgend auf die zuständige Schlichtungsstelle verwiesen:
                </p>
                <div className="bg-white/10 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                  <p className="font-bold text-white mb-2">Allgemeine Verbraucherschlichtungsstelle des Zentrums für Schlichtung e. V.</p>
                  <p>Straßburger Str. 8, 77694 Kehl</p>
                  <p>Telefon: +49 7851 79 579 40 | Telefax: +49 7851 79579 41</p>
                  <p>E-Mail: mail@verbraucher-schlichter.de</p>
                  <p>Website: <a href="https://www.verbraucher-schlichter.de" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">www.verbraucher-schlichter.de</a></p>
                </div>
              </div>
            </motion.section>
            
            <div className="text-center pt-8">
              <Link 
                to={ROUTE_PATHS.HOME}
                className="text-primary font-bold hover:text-accent transition-colors flex items-center justify-center gap-2"
              >
                Zurück zur Startseite
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
