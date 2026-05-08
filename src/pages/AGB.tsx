import React from "react";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { FileText, ShieldCheck, Scale, CreditCard, Calendar, Users, HelpCircle, AlertCircle, Ban } from "lucide-react";

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
          className="bg-white p-8 md:p-16 rounded-[4rem] border border-border shadow-sm"
        >
          <div className="flex items-center gap-6 mb-16 border-b border-border pb-10">
            <div className="w-20 h-20 rounded-[2rem] bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <FileText size={40} />
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-serif text-primary mb-2">AGB</h1>
              <p className="text-muted-foreground font-medium text-lg italic">Stand: 26.01.2026</p>
            </div>
          </div>

          <div className="prose prose-slate max-w-none space-y-16 text-muted-foreground leading-relaxed">
            
            <section>
              <h2 className="text-2xl font-serif text-primary mb-4">Allgemeine Geschäftsbedingungen für Präsenz- und Online-Veranstaltungen</h2>
              <p className="text-lg mb-8">
                Veranstalterin: Angela Deschner – Heilpraktikerin & Hebamme<br />
                Hebammen- und Naturheilpraxis feminatalis/cosMedea · 76669 Bad Schönborn · Hebelstr. 3a<br />
                E-Mail: kontakt@feminatalis.de
              </p>
              <p className="bg-accent/5 p-6 rounded-2xl border border-border italic">
                Diese AGB regeln die Buchung und Teilnahme an den nachfolgend beschriebenen Veranstaltungen. Abweichende Vereinbarungen gelten nur, wenn sie in Textform (z. B. per E-Mail) bestätigt wurden.
              </p>
            </section>

            {/* § 1 */}
            <section>
              <h2 className="text-3xl font-serif text-primary mb-8 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent"><Scale size={20}/></div>
                § 1 Geltungsbereich, Anbieterin, Begriffe
              </h2>
              <div className="space-y-4">
                <p>1. Diese AGB gelten für die Buchung und Teilnahme an folgenden Veranstaltungen (Präsenz und Online):</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>(Online-)Vorträge, Webinare, Workshops, Seminare</li>
                  <li>fortlaufende Gruppenkurse und Treffs</li>
                  <li>sonstige Gruppenangebote (sofern nicht ausdrücklich anders geregelt)</li>
                </ul>
                <p>2. Vertragspartnerin/Veranstalterin ist Angela Deschner (Hebammen- und Naturheilpraxis feminatalis/cosMedea, Bad Schönborn).</p>
                <p>3. Die Veranstalterin kann Veranstaltungen selbst durchführen oder sich dabei durch qualifizierte Personen (z. B. angestellte oder beauftragte Dozenten/Referenten) vertreten lassen.</p>
                <p>4. Diese AGB gelten nicht für Veranstaltungen anderer Anbieter, die als selbstständige Kooperationspartner in den Räumen der Praxis stattfinden und eigene AGB verwenden.</p>
                <p>5. Mitteilungen in Textform (z. B. per E-Mail) sind zulässig. Die Veranstalterin darf vertragsbezogene Informationen an die vom Kunden angegebene E-Mail-Adresse senden.</p>
              </div>
            </section>

            {/* § 2 */}
            <section>
              <h2 className="text-3xl font-serif text-primary mb-8 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent"><Calendar size={20}/></div>
                § 2 Anmeldung, Vertragsschluss
              </h2>
              <div className="space-y-4">
                <p>1. Die Anmeldung erfolgt in Textform:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>per E-Mail an kontakt@feminatalis.de</li>
                  <li>über www.feminatalis.de</li>
                </ul>
                <p>2. Mit der Anmeldung gibt der Teilnehmer ein verbindliches Angebot zum Vertragsschluss ab.</p>
                <p>3. Der Vertrag kommt zustande durch Anmeldebestätigung in Textform oder spätestens durch Platzvergabe/Zahlungseingang.</p>
                <p>4. Die Teilnehmerzahl kann begrenzt sein. Plätze werden nach Reihenfolge des Eingangs vergeben.</p>
              </div>
            </section>

            {/* § 3 */}
            <section>
              <h2 className="text-3xl font-serif text-primary mb-8 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent"><Users size={20}/></div>
                § 3 Veranstaltungsort, Online-Durchführung, Änderungen
              </h2>
              <div className="space-y-4">
                <p>1. Präsenz-Veranstaltungen finden grundsätzlich in den Räumen der Naturheilpraxen feminatalis / cosMedea, 76669 Bad Schönborn, Hebelstr. 3a statt, sofern kein anderer Ort angegeben ist.</p>
                <p>2. Zeiten, Dauer, Inhalte und organisatorische Hinweise ergeben sich aus der Ausschreibung bzw. der Anmeldebestätigung.</p>
                <p>3. Die Veranstalterin darf aus wichtigen Gründen organisatorische Änderungen vornehmen (z. B. Raumwechsel, Zeitverschiebung, Referentenwechsel), sofern der Charakter der Veranstaltung erhalten bleibt und die Änderung zumutbar ist.</p>
                <p>4. Die Veranstalterin kann Veranstaltungen ganz oder teilweise online (z. B. via Zoom oder vergleichbares Tool) durchführen, wenn dies sachlich erforderlich ist (z. B. behördliche Vorgaben, Überbuchung, höhere Gewalt, Krankheit, organisatorische Notwendigkeit).</p>
                <p>5. Für Online-Teilnahme sind eine stabile Internetverbindung, ein geeignetes Endgerät und grundlegende Bedienfähigkeit Voraussetzung. Technische Probleme auf Seiten der Teilnehmern liegen grundsätzlich in deren Verantwortungsbereich.</p>
              </div>
            </section>

            {/* § 4 */}
            <section>
              <h2 className="text-3xl font-serif text-primary mb-8 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent"><CreditCard size={20}/></div>
                § 4 Teilnahmegebühren, Zahlungsbedingungen
              </h2>
              <div className="space-y-6">
                <p>1. Es gelten die zum Buchungszeitpunkt veröffentlichten Preise (Website/Shop/Ausschreibung).</p>
                <p>2. Sofern nichts anderes vereinbart ist, sind Entgelte vor Veranstaltungsbeginn fällig. Nur rechtzeitig eingegangene Zahlungen berechtigen zur Teilnahme.</p>
                <div className="bg-primary/5 p-8 rounded-3xl border border-border space-y-6">
                  <h4 className="font-bold text-primary">3. Zahlungsregelungen nach Veranstaltungsart:</h4>
                  
                  <div className="space-y-2">
                    <p className="font-semibold">a) Kassenfähige Hebammenkurse (z. B. Geburtsvorbereitung, Rückbildung):</p>
                    <p>Für kassenfähige Hebammenkurse, die von der gesetzlichen Krankenkasse erstattet werden können, ist für die Schwangere bzw. Kursteilnehmerin keine Vorauszahlung der Kursgebühr erforderlich. Die Abrechnung kassenfähiger Kursleistungen erfolgt – je nach Kassenregelung – direkt über die gesetzliche Krankenkasse oder wird der Kursteilnehmerin zur Einreichung bei der Krankenkasse zur Verfügung gestellt.</p>
                    <p>Davon unberührt bleibt eine ggf. anfallende Partnergebühr (z. B. Teilnahme des Partners an der Geburtsvorbereitung). Die Partnergebühr ist in voller Höhe spätestens 28 Tage vor Kursbeginn zur Zahlung fällig. Bei fehlendem Zahlungseingang besteht kein Anspruch auf Teilnahme des Partners.</p>
                  </div>

                  <div className="space-y-2">
                    <p className="font-semibold">b) Webinare, Workshops, Seminare und sonstige Selbstzahler-Angebote:</p>
                    <p>spätestens 14 Tage vor Veranstaltungsbeginn.</p>
                  </div>

                  <div className="space-y-2">
                    <p className="font-semibold">c) Fortlaufende Gruppenkurse und Treffs:</p>
                    <p>ab der zweiten Teilnahmestunde monatlich, spätestens am 3. Bankarbeitstag des Monats. Nur regelmäßig eingehende Zahlungen berechtigen zur Dauerteilnahme.</p>
                  </div>

                  <div className="space-y-2">
                    <p className="font-semibold">d) Kostenpflichtige Vorträge:</p>
                    <p>spätestens 3 Tage vor der Veranstaltung; bei späterer Anmeldung unverzüglich, jedoch vor Beginn.</p>
                  </div>

                  <div className="space-y-2">
                    <p className="font-semibold">e) Kurzfristige Anmeldung:</p>
                    <p>Bei Anmeldungen weniger als 14 Tage vor Beginn ist eine ggf. anfallende Partnergebühr sofort nach Buchungsbestätigung fällig, spätestens jedoch vor Veranstaltungsbeginn.</p>
                  </div>
                </div>
                <p>4. Zusatzkosten (z. B. Materialien, externe Auslagen) entstehen nur nach vorheriger Information und Zustimmung.</p>
              </div>
            </section>

            {/* § 5 */}
            <section>
              <h2 className="text-3xl font-serif text-primary mb-8 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent"><CreditCard size={20}/></div>
                § 5 Bankverbindung
              </h2>
              <p>Die Bankverbindung wird im Rahmen der Buchung/Bestätigung mitgeteilt. Verwendungszweck: Name + Veranstaltung + Datum/Start.</p>
            </section>

            {/* § 6 */}
            <section>
              <h2 className="text-3xl font-serif text-primary mb-8">§ 6 Pausen / Verpflegung</h2>
              <p>Bei Veranstaltungen über 3 Stunden sind Pausen vorgesehen. Getränke/Verpflegung werden je nach Veranstaltung ausgeschrieben bzw. vor Ort abgestimmt. Teilnehmer sind für eigene Lebensmittelunverträglichkeiten selbst verantwortlich.</p>
            </section>

            {/* § 7 */}
            <section>
              <h2 className="text-3xl font-serif text-primary mb-8 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent"><Ban size={20}/></div>
                § 7 Rücktritt/Stornierung, Umbuchung, Ersatzperson
              </h2>
              <div className="space-y-6">
                <p>1. Stornierungen müssen in Textform erfolgen (E-Mail genügt). Maßgeblich ist der Zugang bei der Veranstalterin.</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-primary/5 p-6 rounded-2xl border border-border">
                    <h4 className="font-bold text-primary mb-4">2. Kassenfähige Hebammenkurse:</h4>
                    <p className="text-sm mb-4">a) Kostenfrei bis 28 Tage vor Kursbeginn.</p>
                    <p className="text-sm mb-2">b) Ab 28 Tage vor Kursbeginn oder bei Nichterscheinen wird eine Ausfallgebühr als Privatrechnung fällig:</p>
                    <ul className="text-sm list-disc pl-4 space-y-1">
                      <li>später als 28 Tage: 25 %</li>
                      <li>später als 21 Tage: 50 %</li>
                      <li>später als 14 Tage: 75 %</li>
                      <li>später als 7 Tage oder Nichterscheinen: 100 %</li>
                    </ul>
                  </div>

                  <div className="bg-primary/5 p-6 rounded-2xl border border-border">
                    <h4 className="font-bold text-primary mb-4">3. Partnergebühr:</h4>
                    <p className="text-sm mb-4">a) Die Partnergebühr ist unabhängig von einer Kostenübernahme der Krankenkasse privat zu zahlen. Bei Stornierung der Gesamtkurs-Teilnahme später als 28 Tage vor Kursbeginn oder Nichterscheinen wird die Partnergebühr als Ausfallgebühr in gleicher Staffelung fällig bzw. einbehalten (25/50/75/100 %).</p>
                    <p className="text-sm">b) Bei stundenweiser Teilnahme des Partners wird die Partnergebühr nach Kursende entsprechend der tatsächlich in Anspruch genommenen Stunden per Rechnung gestellt.</p>
                  </div>
                </div>

                <div className="bg-accent/5 p-8 rounded-3xl border border-border">
                  <h4 className="font-bold text-primary mb-4">4. Selbstzahler-Veranstaltungen (Webinare/Workshops/Seminare/Vorträge):</h4>
                  <p className="mb-4">Kostenfreie Stornierung bis 14 Tage vor Beginn. Danach gelten folgende Stornopauschalen:</p>
                  <ul className="grid grid-cols-2 gap-4">
                    <li className="bg-white p-3 rounded-xl border border-border text-center text-sm font-medium">später als 14 Tage: 25 %</li>
                    <li className="bg-white p-3 rounded-xl border border-border text-center text-sm font-medium">später als 10 Tage: 50 %</li>
                    <li className="bg-white p-3 rounded-xl border border-border text-center text-sm font-medium">später als 7 Tage: 75 %</li>
                    <li className="bg-white p-3 rounded-xl border border-border text-center text-sm font-medium">später als 3 Tage: 100 %</li>
                  </ul>
                </div>

                <p>5. Der Kunde kann nachweisen, dass kein oder ein wesentlich geringerer Schaden entstanden ist. In diesem Fall wird die Pauschale entsprechend reduziert.</p>
                <p>6. Ersatzperson / Umbuchung: Eine Ersatzperson kann nach Absprache benannt werden, sofern dies organisatorisch möglich ist. Umbuchungen sind nach Verfügbarkeit möglich; ein Anspruch besteht nicht.</p>
              </div>
            </section>

            {/* § 8 */}
            <section>
              <h2 className="text-3xl font-serif text-primary mb-8">§ 8 Nichtteilnahme / Fehlzeiten</h2>
              <div className="space-y-4">
                <p>1. Bei Nichterscheinen oder versäumten Terminen besteht grundsätzlich kein Anspruch auf Erstattung.</p>
                <p>2. Kassenfähige Hebammenkurse: Nicht in Anspruch genommene Kursstunden können nicht über die gesetzliche Krankenkasse abgerechnet werden. Versäumte Stunden werden daher als Privatrechnung (Ausfallhonorar) in angemessener Höhe berechnet.</p>
                <p>3. Partnergebühr: Bei versäumter Teilnahme des Partners besteht grundsätzlich kein Anspruch auf Erstattung. Es gelten die Regelungen zur Ausfallgebühr gemäß § 7.</p>
              </div>
            </section>

            {/* § 9 */}
            <section>
              <h2 className="text-3xl font-serif text-primary mb-8">§ 9 Absage, Verlegung, Ausfall durch die Veranstalterin</h2>
              <div className="space-y-4">
                <p>1. Die Veranstalterin kann einzelne Termine aus wichtigen Gründen verlegen oder durch qualifizierte Vertretung durchführen lassen (z. B. Krankheit, Fortbildung, organisatorische Gründe).</p>
                <p>2. Bei Absage der gesamten Veranstaltung oder einzelner Stunden durch die Veranstalterin wird die Gebühr anteilig erstattet, sofern kein Ersatztermin angeboten wird und keine Einigung erzielt wird.</p>
                <p>3. Wird eine Mindestteilnehmerzahl nicht erreicht, kann die Veranstaltung abgesagt werden. Bereits gezahlte Gebühren werden vollständig zurückerstattet.</p>
                <p>4. Weitergehende Ansprüche (z. B. Reise-/Übernachtungskosten, Verdienstausfall) sind ausgeschlossen, soweit gesetzlich zulässig.</p>
              </div>
            </section>

            {/* § 10 */}
            <section>
              <h2 className="text-3xl font-serif text-primary mb-8 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent"><ShieldCheck size={20}/></div>
                § 10 Datenschutz, Schweigepflicht, Vertraulichkeit im Kurs
              </h2>
              <div className="space-y-4">
                <p>1. Es gelten die Datenschutzhinweise der Website („Datenschutz“).</p>
                <p>2. Die Veranstalterin und ihre Vertreter behandeln alle kursbezogenen Informationen vertraulich.</p>
                <p>3. Teilnehmer verpflichten sich zu einem respektvollen Umgang und zur Vertraulichkeit hinsichtlich persönlicher Inhalte anderer Teilnehmer.</p>
              </div>
            </section>

            {/* § 11 */}
            <section className="bg-primary/5 p-10 rounded-[3rem] border border-primary/10">
              <h2 className="text-3xl font-serif text-primary mb-6 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary"><HelpCircle size={20}/></div>
                § 11 Gesundheitlicher Hinweis / Eigenverantwortung
              </h2>
              <div className="space-y-4">
                <p>1. Die Veranstaltungen dienen der Information, Prävention und Begleitung und ersetzen keine individuelle medizinische Diagnostik oder Behandlung.</p>
                <p>2. Jede Teilnahme erfolgt in eigener Verantwortung. Bei akuten Beschwerden oder Unsicherheiten ist ärztlicher Rat einzuholen.</p>
                <p>3. Relevante gesundheitliche Einschränkungen sind vor Teilnahme mitzuteilen.</p>
              </div>
            </section>

            {/* § 12 */}
            <section>
              <h2 className="text-3xl font-serif text-primary mb-8">§ 12 Haftung</h2>
              <div className="space-y-4">
                <p>1. Die Veranstalterin haftet unbeschränkt bei Vorsatz und grober Fahrlässigkeit sowie bei Schäden aus der Verletzung von Leben, Körper oder Gesundheit.</p>
                <p>2. Bei leicht fahrlässiger Verletzung wesentlicher Vertragspflichten haftet die Veranstalterin nur für den vertragstypischen, vorhersehbaren Schaden.</p>
                <p>3. Für mitgebrachte Gegenstände, Datenverlust, Reise- oder Folgekosten haftet die Veranstalterin nicht, soweit gesetzlich zulässig.</p>
                <p>4. Für Schäden aus dem Verzehr selbst mitgebrachter Speisen haftet die Veranstalterin nicht.</p>
              </div>
            </section>

            {/* § 13 */}
            <section>
              <h2 className="text-3xl font-serif text-primary mb-8">§ 13 Urheberrecht, Unterlagen, Weitergabe</h2>
              <p>1. Skripte, Arbeitsblätter, Präsentationen und Inhalte sind urheberrechtlich geschützt.</p>
              <p>2. Eine Vervielfältigung, Weitergabe oder Veröffentlichung (auch auszugsweise) ist ohne schriftliche Zustimmung untersagt.</p>
            </section>

            {/* § 14 */}
            <section>
              <h2 className="text-3xl font-serif text-primary mb-8">§ 14 Bild- und Tonaufnahmen</h2>
              <p>1. Bild- oder Tonaufzeichnungen durch Teilnehmer (insbesondere in Online-Formaten) sind nur mit vorheriger schriftlicher Zustimmung der Veranstalterin und ggf. betroffener Teilnehmer zulässig.</p>
              <p>2. Gleiches gilt für jede Veröffentlichung oder Nutzung außerhalb rein privater Zwecke.</p>
            </section>

            {/* § 15 */}
            <section className="bg-accent/5 p-10 rounded-[3rem] border border-border">
              <h2 className="text-3xl font-serif text-primary mb-8 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent"><AlertCircle size={20}/></div>
                § 15 Widerrufsrecht (Verbraucher)
              </h2>
              <div className="space-y-4">
                <p>1. Bei der Buchung von termingebundenen Veranstaltungen (z. B. Kurse, Workshops, Webinare mit festem Termin oder Zeitraum) besteht kein Widerrufsrecht nach § 312g Abs. 2 Nr. 9 BGB.</p>
                <p>2. Dies gilt insbesondere auch für kassenfähige Hebammenkurse sowie für private Zusatzleistungen (z. B. Partnergebühr).</p>
                <p>3. Für diese Veranstaltungen gelten stattdessen die Stornierungs- und Ausfallgebührenregelungen in § 7 dieser AGB.</p>
                <p>4. Sofern im Einzelfall digitale Inhalte ohne festen Termin bereitgestellt werden, wird ein ggf. bestehendes Widerrufsrecht im Bestellprozess gesondert ausgewiesen.</p>
              </div>
            </section>

            {/* § 16 */}
            <section>
              <h2 className="text-3xl font-serif text-primary mb-8">§ 16 Gerichtsstand, anwendbares Recht</h2>
              <p>1. Es gilt deutsches Recht. 2. Gegenüber Verbraucher gilt der gesetzliche Gerichtsstand. 3. Gegenüber Unternehmer/Kaufleuten ist – soweit zulässig – Gerichtsstand der Sitz der Veranstalterin.</p>
            </section>

            {/* § 17 */}
            <section>
              <h2 className="text-3xl font-serif text-primary mb-8">§ 17 Salvatorische Klausel</h2>
              <p>Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. Anstelle der unwirksamen Regelung gilt die gesetzliche Regelung.</p>
            </section>

            <div className="pt-10 border-t border-border text-center text-sm italic">
              Bad Schönborn, 26.01.2026 — Angela Deschner
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
