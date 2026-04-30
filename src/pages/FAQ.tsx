import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ROUTE_PATHS } from "@/lib/index";
import {
  HelpCircle,
  MessageCircle,
  Calendar,
  ShieldCheck,
  Heart,
  Sparkles,
  Clock,
  CreditCard,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const FAQ_DATA = [
  {
    category: "Der Onlinekurs",
    icon: <Sparkles className="w-5 h-5 text-primary" />,
    items: [
      {
        question: "Was genau lerne ich im Feminatalis Onlinekurs?",
        answer:
          "Der Kurs bietet eine ganzheitliche Begleitung bei Kinderwunsch. Du lernst die biologischen Grundlagen des Zyklus, vertiefst dein Wissen über fruchtbarkeitsfördernde Ernährung, erfährst sinnvolle naturheilkundliche Unterstützung und arbeitest intensiv an deinem emotionalen Mindset.",
      },
      {
        question: "Wie lange habe ich Zugriff auf die Inhalte?",
        answer:
          "Sobald du den Kurs erworben hast, hast du unbegrenzten Zugriff auf alle Video-Lektionen, Worksheets und Materialien. Du lernst in deinem eigenen Tempo und kannst die Inhalte so oft wiederholen, wie du möchtest.",
      },
      {
        question: "Gibt es eine persönliche Betreuung durch Angela?",
        answer:
          "Ja, je nach gewähltem Paket sind regelmäßige Live-Q&A-Sessions enthalten, in denen du deine persönlichen Fragen stellen kannst. Zudem gibt es eine exklusive Community-Gruppe für den Austausch mit Gleichgesinnten.",
      },
    ],
  },
  {
    category: "Fruchtbarkeit & Gesundheit",
    icon: <Heart className="w-5 h-5 text-primary" />,
    items: [
      {
        question: "Ersetzt der Kurs einen Besuch beim Arzt?",
        answer:
          "Nein, der Kurs ist als begleitende Unterstützung und Bildungsangebot konzipiert. Er ersetzt keine medizinische Diagnose oder Behandlung durch einen Arzt oder Heilpraktiker. Ich empfehle dir immer, medizinische Themen parallel fachärztlich abzuklären.",
      },
      {
        question: "Ist der Kurs auch für Paare geeignet?",
        answer:
          "Absolut. Fruchtbarkeit ist ein gemeinsames Thema. Viele Module, insbesondere zu Ernährung und Stressmanagement, sind explizit darauf ausgelegt, dass Paare sie gemeinsam durchlaufen können.",
      },
      {
        question: "Kann ich den Kurs auch während einer IVF/ICSI-Behandlung machen?",
        answer:
          "Ja, der Kurs bietet wertvolle Unterstützung, um deinen Körper und deine Seele optimal auf die Belastungen einer Kinderwunschbehandlung vorzubereiten und diese sanft zu begleiten.",
      },
    ],
  },
  {
    category: "Buchung & Technik",
    icon: <ShieldCheck className="w-5 h-5 text-primary" />,
    items: [
      {
        question: "Welche Zahlungsmöglichkeiten gibt es?",
        answer:
          "Du kannst bequem per PayPal, Kreditkarte oder Lastschrift bezahlen. Auch eine Ratenzahlung ist über unseren Zahlungsdienstleister möglich.",
      },
      {
        question: "Kann ich die Worksheets ausdrucken?",
        answer:
          "Ja, alle Begleitmaterialien und Checklisten stehen dir als PDF-Download zur Verfügung und sind für den Ausdruck optimiert, damit du auch offline damit arbeiten kannst.",
      },
      {
        question: "Benötige ich spezielle Software?",
        answer:
          "Nein, du brauchst lediglich einen Internetzugang und einen Browser auf deinem PC, Tablet oder Smartphone. Unsere Plattform ist für alle Endgeräte optimiert.",
      },
    ],
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};

export default function FAQ() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_DATA.flatMap(group => 
      group.items.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    )
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <SEO 
        title="FAQ | Fragen zu Kinderwunsch & Naturheilkunde" 
        description="Antworten auf häufige Fragen zu meinem Kinderwunsch-Onlinekurs, der Hebammenbegleitung und meiner Arbeit als Heilpraktikerin in Bad Schönborn."
        schema={schema}
      />
      {/* Hero Section */}
      <section className="relative py-24 bg-accent/30 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-primary blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-secondary blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div {...fadeInUp}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <HelpCircle className="w-4 h-4" />
              Hilfe & Antworten
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Häufig gestellte Fragen
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Hier findest du Antworten auf die wichtigsten Fragen rund um den
              Kinderwunsch-Onlinekurs und meine Arbeit als Heilpraktikerin.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-16">
            {FAQ_DATA.map((group, groupIndex) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: groupIndex * 0.1 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 border-b border-border pb-4">
                  {group.icon}
                  <h2 className="text-2xl font-semibold text-foreground">
                    {group.category}
                  </h2>
                </div>

                <Accordion type="single" collapsible className="w-full">
                  {group.items.map((item, itemIndex) => (
                    <AccordionItem
                      key={itemIndex}
                      value={`${groupIndex}-${itemIndex}`}
                      className="border-none mb-4"
                    >
                      <AccordionTrigger className="px-6 py-4 rounded-xl bg-card hover:bg-muted/50 transition-all text-left font-medium text-lg hover:no-underline shadow-sm">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-8 pt-4 pb-6 text-muted-foreground text-base leading-relaxed bg-card/50 rounded-b-xl border-x border-b border-border/50">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-primary text-primary-foreground rounded-[2rem] p-12 text-center shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full border-[20px] border-white" />
            <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full border-[40px] border-white" />
          </div>

          <div className="relative z-10">
            <MessageCircle className="w-12 h-12 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl font-heading mb-4">
              Deine Frage war nicht dabei?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Kein Problem! Schreib mir einfach eine Nachricht oder vereinbare ein
              kostenloses Erstgespräch. Ich bin für dich da.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="rounded-full px-8"
              >
                <Link to={ROUTE_PATHS.CONTACT}>Kontakt aufnehmen</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 bg-transparent border-white/30 hover:bg-white/10 text-white"
              >
                Live-Chat starten
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Bottom Info Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-secondary/20 flex flex-col items-center text-center">
            <Calendar className="w-10 h-10 text-secondary-foreground mb-4" />
            <h3 className="font-semibold mb-2">Flexible Termine</h3>
            <p className="text-sm text-muted-foreground">
              Erstgespräche sind oft kurzfristig innerhalb von 48h möglich.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-accent/20 flex flex-col items-center text-center">
            <Clock className="w-10 h-10 text-accent-foreground mb-4" />
            <h3 className="font-semibold mb-2">Rund um die Uhr</h3>
            <p className="text-sm text-muted-foreground">
              Der Onlinekurs steht dir 24/7 zur Verfügung – wann immer du Zeit hast.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-primary/10 flex flex-col items-center text-center">
            <CreditCard className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Sicher & Einfach</h3>
            <p className="text-sm text-muted-foreground">
              Verschlüsselte Zahlung und sofortiger Zugriff auf alle Inhalte.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
