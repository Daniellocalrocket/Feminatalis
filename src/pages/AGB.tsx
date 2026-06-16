import React from "react";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";

export default function AGB() {
  return (
    <div className="bg-background min-h-screen pt-32 pb-24">
      <SEO 
        title="AGB | feminatalis" 
        description="Allgemeine Geschäftsbedingungen für Präsenz- und Online-Veranstaltungen der Hebammen- und Naturheilpraxis feminatalis." 
      />
      
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-5 sm:p-8 md:p-16 rounded-[2rem] sm:rounded-[3rem] md:rounded-[4rem] border border-border shadow-sm"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-16 border-b border-border pb-10">
            <div className="w-20 h-20 rounded-[2rem] bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <FileText size={40} />
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-serif text-primary mb-2">AGB</h1>
              <p className="text-muted-foreground font-medium text-lg italic">Stand: 26.05.2026</p>
            </div>
          </div>

          <div className="prose prose-slate max-w-none space-y-16 text-muted-foreground leading-relaxed">
            
            <section>
              <h2 className="text-xl sm:text-2xl font-serif text-primary mb-8">Allgemeine Geschäftsbedingungen für Präsenz- und Online-Veranstaltungen</h2>
              <p className="text-lg mb-8">
                Veranstalterin: Angela Deschner – Heilpraktikerin & Hebamme<br />
                Hebammen- und Naturheilpraxis feminatalis / cosMedea<br />
                Hebelstr. 3a · 76669 Bad Schönborn<br />
                E-Mail: kontakt@feminatalis.de
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-serif text-primary mb-8">
                § 1 Geltungsbereich, Anbieterin, Begriffe
              </h2>
              <div className="space-y-4">
                <p>Diese AGB gelten für die Buchung und Teilnahme an folgenden Angeboten der Veranstalterin:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Präsenz- und Online-Vorträge</li>
                  <li>Webinare</li>
                  <li>Workshops</li>
                  <li>Seminare</li>
                  <li>Intensiv-Wochenenden</li>
                  <li>digitale Inhalte (z. B. Selbstlernkurse, Aufzeichnungen, PDFs, Downloads)</li>
                  <li>Online-Gruppenbegleitungen oder sonstige Online-Angebote, sofern nicht ausdrücklich anders geregelt</li>
                </ul>
                <p>Veranstalterin ist Angela Deschner, Hebammen- und Naturheilpraxis feminatalis / cosMedea, Bad Schönborn.</p>
                <p>Die Veranstalterin kann Veranstaltungen selbst durchführen oder sich durch qualifizierte Personen vertreten lassen.</p>
                <p>Diese AGB gelten nicht für Veranstaltungen selbstständiger Kooperationspartner, die eigene AGB verwenden.</p>
                <p>Mitteilungen in Textform (z. B. E-Mail) gelten als ausreichend.</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-serif text-primary mb-8">
                § 2 Anmeldung, Vertragsschluss
              </h2>
              <div className="space-y-4">
                <p>Die Anmeldung erfolgt:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>per E-Mail</li>
                  <li>über die Website</li>
                  <li>über Buchungs- oder Bezahlsysteme</li>
                </ul>
                <p>Mit der Anmeldung gibt der Teilnehmer ein verbindliches Angebot zum Vertragsschluss ab.</p>
                <p>Der Vertrag kommt durch Bestätigung in Textform, Freischaltung digitaler Inhalte oder Zahlungseingang zustande.</p>
                <p>Die Teilnehmerzahl kann begrenzt sein. Plätze werden grundsätzlich nach Reihenfolge des Eingangs vergeben.</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-serif text-primary mb-8">
                § 3 Veranstaltungsort, Online-Durchführung, Änderungen
              </h2>
              <div className="space-y-4">
                <p>Präsenzveranstaltungen finden grundsätzlich in den Räumen der Praxis feminatalis / cosMedea in Bad Schönborn statt, sofern nichts anderes angegeben ist.</p>
                <p>Zeiten, Dauer, Inhalte und organisatorische Hinweise ergeben sich aus der jeweiligen Ausschreibung oder Buchungsbestätigung.</p>
                <p>Die Veranstalterin darf aus wichtigen Gründen organisatorische Änderungen vornehmen, sofern der Charakter der Veranstaltung erhalten bleibt und die Änderung zumutbar ist.</p>
                <p>Veranstaltungen können ganz oder teilweise online durchgeführt werden, sofern dies sachlich erforderlich ist.</p>
                <p>Für Online-Angebote sind geeignete technische Voraussetzungen durch die Teilnehmer selbst sicherzustellen.</p>
                <p>Aufzeichnungen, Mitschnitte oder Downloads bedürfen einer gesonderten Vereinbarung.</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-serif text-primary mb-8">
                § 4 Teilnahmegebühren, Zahlungsbedingungen
              </h2>
              <div className="space-y-6">
                <p>Es gelten die zum Zeitpunkt der Buchung veröffentlichten Preise.</p>
                <p>Sofern nichts anderes vereinbart wurde, sind sämtliche Gebühren spätestens 28 Tage vor Veranstaltungsbeginn fällig.</p>
                <p>Nur vollständig und fristgerecht eingegangene Zahlungen berechtigen zur Teilnahme oder Freischaltung digitaler Inhalte.</p>
                <p>Der Zugang zu digitalen Inhalten oder Online-Angeboten erfolgt grundsätzlich erst nach vollständigem Zahlungseingang.</p>
                
                <div className="bg-primary/5 p-5 sm:p-8 rounded-[1.5rem] sm:rounded-3xl border border-border space-y-6">
                  <h4 className="font-bold text-primary">Zahlungsregelungen:</h4>
                  
                  <div className="space-y-2">
                    <p className="font-semibold">a) Kassenfähige Hebammenkurse</p>
                    <p>Kassenfähige Leistungen (z. B. Geburtsvorbereitung oder Rückbildungsgymnastik) werden – soweit die gesetzlichen Voraussetzungen erfüllt sind – direkt mit der gesetzlichen Krankenkasse abgerechnet.</p>
                    <p>Voraussetzung hierfür ist die tatsächliche Teilnahme an den jeweiligen Kurseinheiten. Nicht wahrgenommene Stunden können nicht mit der gesetzlichen Krankenkasse abgerechnet werden und werden der Teilnehmerin privat als Ausfallhonorar gemäß den jeweils geltenden Hebammenregelungen in Rechnung gestellt.</p>
                    <p>Dies gilt auch für kassenfähige Live-Online-Kurse, sofern diese den jeweils geltenden Anforderungen der gesetzlichen Krankenkassen entsprechen.</p>
                    <p>Partnergebühren oder sonstige private Zusatzleistungen sind unabhängig hiervon privat zu zahlen und spätestens 28 Tage vor Kursbeginn fällig.</p>
                  </div>

                  <div className="space-y-2">
                    <p className="font-semibold">b) Selbstzahler-Veranstaltungen</p>
                    <p>Für Webinare, Workshops, Seminare, Intensiv-Wochenenden, Online-Kurse sowie sonstige Selbstzahler-Angebote ist die Teilnahmegebühr spätestens 28 Tage vor Veranstaltungsbeginn fällig, sofern nichts anderes vereinbart wurde.</p>
                  </div>

                  <div className="space-y-2">
                    <p className="font-semibold">c) Kurzfristige Anmeldung</p>
                    <p>Bei kurzfristigen Buchungen weniger als 28 Tage vor Veranstaltungsbeginn ist die Zahlung unmittelbar nach Buchungsbestätigung fällig.</p>
                  </div>
                </div>
                <p>Zusatzkosten entstehen nur nach vorheriger Information und Zustimmung.</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-serif text-primary mb-8">
                § 5 Bankverbindung
              </h2>
              <p>Die Bankverbindung wird im Rahmen der Buchung mitgeteilt.</p>
            </section>

            {/* § 6 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-serif text-primary mb-8">§ 6 Pausen / Verpflegung</h2>
              <p>Bei längeren Veranstaltungen können Pausen vorgesehen sein. Teilnehmer sind selbst für gesundheitliche Besonderheiten oder Lebensmittelunverträglichkeiten verantwortlich.</p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-serif text-primary mb-8">
                § 7 Rücktritt, Stornierung, Umbuchung, Ersatzperson
              </h2>
              <div className="space-y-6">
                <p>Stornierungen müssen in Textform erfolgen.</p>
                <p>Für termingebundene Veranstaltungen gilt grundsätzlich folgende Staffelung:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>bis 28 Tage vor Beginn kostenfrei</li>
                  <li>später als 28 Tage: 25 %</li>
                  <li>später als 21 Tage: 50 %</li>
                  <li>später als 14 Tage: 75 %</li>
                  <li>später als 7 Tage oder Nichterscheinen: 100 %</li>
                </ul>
                
                <p>Dies gilt insbesondere für:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>kassenfähige Hebammenkurse</li>
                  <li>Workshops</li>
                  <li>Webinare</li>
                  <li>Seminare</li>
                  <li>Intensiv-Wochenenden</li>
                  <li>Online-Gruppenangebote</li>
                  <li>sonstige Selbstzahler-Veranstaltungen</li>
                </ul>
                <p>Partnergebühren gelten als private Zusatzleistung und unterliegen derselben Staffelung.</p>
                <p>Der Teilnehmer kann nachweisen, dass kein oder ein wesentlich geringerer Schaden entstanden ist.</p>
                <p>Ersatzpersonen oder Umbuchungen sind nach Absprache möglich, ein Anspruch hierauf besteht jedoch nicht.</p>
              </div>
            </section>

            {/* § 8 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-serif text-primary mb-8">§ 8 Nichtteilnahme / Fehlzeiten</h2>
              <div className="space-y-4">
                <p>Bei Nichterscheinen oder versäumten Terminen besteht grundsätzlich kein Anspruch auf Erstattung.</p>
                <p>Nicht wahrgenommene Kursstunden kassenfähiger Hebammenkurse können nicht über die gesetzliche Krankenkasse abgerechnet werden und werden daher der Teilnehmerin privat als Ausfallhonorar in Rechnung gestellt.</p>
                <p>Die Verpflichtung zur Zahlung entfällt nicht durch eine Abmeldung oder Nichtteilnahme.</p>
                <p>Sofern organisatorisch möglich, kann nach vorheriger Absprache eine Nachholmöglichkeit in einem späteren, vergleichbaren Kurs angeboten werden. Ein Anspruch hierauf besteht nicht.</p>
              </div>
            </section>

            {/* § 9 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-serif text-primary mb-8">§ 9 Absage oder Verlegung durch die Veranstalterin</h2>
              <div className="space-y-4">
                <p>Die Veranstalterin kann Termine aus wichtigem Grund absagen oder verlegen.</p>
                <p>Bereits gezahlte Gebühren werden anteilig oder vollständig erstattet, sofern kein Ersatztermin angeboten wird.</p>
                <p>Weitergehende Ansprüche sind – soweit gesetzlich zulässig – ausgeschlossen.</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-serif text-primary mb-8">
                § 10 Datenschutz, Vertraulichkeit
              </h2>
              <div className="space-y-4">
                <p>Es gelten die Datenschutzhinweise der Website.</p>
                <p>Persönliche Informationen der Teilnehmer werden vertraulich behandelt.</p>
                <p>Teilnehmer verpflichten sich ebenfalls zur Vertraulichkeit innerhalb von Gruppenangeboten.</p>
              </div>
            </section>

            {/* § 11 */}
            <section className="bg-primary/5 p-5 sm:p-10 rounded-[1.5rem] sm:rounded-[3rem] border border-primary/10">
              <h2 className="text-xl sm:text-2xl font-serif text-primary mb-6">
                § 11 Gesundheitlicher Hinweis / Eigenverantwortung
              </h2>
              <div className="space-y-4">
                <p>Die Veranstaltungen dienen der Information, Prävention und Begleitung.</p>
                <p>Sie ersetzen keine individuelle medizinische Diagnostik oder Behandlung.</p>
                <p>Die Teilnahme erfolgt in eigener Verantwortung.</p>
              </div>
            </section>

            {/* § 12 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-serif text-primary mb-8">§ 12 Haftung</h2>
              <div className="space-y-4">
                <p>Die Veranstalterin haftet unbeschränkt bei Vorsatz, grober Fahrlässigkeit sowie bei Schäden an Leben, Körper oder Gesundheit.</p>
                <p>Bei leicht fahrlässiger Verletzung wesentlicher Vertragspflichten haftet die Veranstalterin nur auf den vorhersehbaren vertragstypischen Schaden.</p>
                <p>Für technische Ausfälle außerhalb des Einflussbereichs der Veranstalterin wird keine Haftung übernommen.</p>
                <p>Für mitgebrachte Gegenstände oder Datenverlust wird keine Haftung übernommen, soweit gesetzlich zulässig.</p>
              </div>
            </section>

            {/* § 13 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-serif text-primary mb-8">§ 13 Urheberrecht</h2>
              <p>Alle Unterlagen und Inhalte sind urheberrechtlich geschützt.</p>
              <p>Eine Weitergabe, Veröffentlichung oder Vervielfältigung ist ohne schriftliche Zustimmung unzulässig.</p>
            </section>

            {/* § 14 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-serif text-primary mb-8">§ 14 Bild- und Tonaufnahmen</h2>
              <p>Bild-, Ton- oder Bildschirmaufzeichnungen durch Teilnehmer sind nur mit vorheriger Zustimmung zulässig.</p>
              <p>Gleiches gilt für Veröffentlichungen außerhalb privater Zwecke.</p>
            </section>

            {/* § 15 */}
            <section className="bg-accent/5 p-5 sm:p-10 rounded-[1.5rem] sm:rounded-[3rem] border border-border">
              <h2 className="text-xl sm:text-2xl font-serif text-primary mb-8">
                § 15 Widerrufsrecht, digitale Inhalte und Online-Angebote
              </h2>
              <div className="space-y-4">
                <p>Für termingebundene Veranstaltungen (z. B. Kurse, Workshops, Seminare, Intensiv-Wochenenden oder Live-Webinare mit festem Termin oder Zeitraum) besteht gemäß § 312g Abs. 2 Nr. 9 BGB kein Widerrufsrecht.</p>
                <p>Dies gilt auch für kassenfähige Hebammenkurse sowie privat zu vergütende Zusatzleistungen (z. B. Partnergebühren).</p>
                <p>Für diese Leistungen gelten ausschließlich die jeweiligen Stornierungs- und Ausfallregelungen dieser AGB.</p>
                <p>Bei digitalen Inhalten ohne festen Termin oder Zeitraum (z. B. Aufzeichnungen, Selbstlernkurse, Downloads oder PDFs) besteht grundsätzlich ein gesetzliches Widerrufsrecht von 14 Tagen ab Vertragsschluss.</p>
                <p>Das Widerrufsrecht erlischt vorzeitig, wenn:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>der Teilnehmer ausdrücklich zustimmt, dass vor Ablauf der Widerrufsfrist mit der Ausführung begonnen wird,</li>
                  <li>und gleichzeitig bestätigt, dass ihm bekannt ist, dass dadurch das Widerrufsrecht erlischt.</li>
                </ul>
                <p>Online-Gruppenbegleitungen oder fortlaufende digitale Angebote können – sofern nichts anderes vereinbart wurde – mit einer Frist von 14 Tagen zum Monatsende in Textform gekündigt werden.</p>
              </div>
            </section>

            {/* § 16 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-serif text-primary mb-8">§ 16 Anwendbares Recht, Gerichtsstand</h2>
              <p>Es gilt deutsches Recht.</p>
              <p>Gegenüber Verbrauchern gilt der gesetzliche Gerichtsstand.</p>
              <p>Gegenüber Unternehmern ist – soweit zulässig – Gerichtsstand der Sitz der Veranstalterin.</p>
            </section>

            {/* § 17 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-serif text-primary mb-8">§ 17 Salvatorische Klausel</h2>
              <p>Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.</p>
            </section>

            <div className="pt-10 border-t border-border text-center text-sm italic">
              Bad Schönborn, den 26.05.2026 — Angela Deschner
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
