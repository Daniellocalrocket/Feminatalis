import React from "react";
import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "@/lib/index";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { IMAGES } from "@/assets/images";

const springPresets = {
  gentle: { type: "spring", stiffness: 300, damping: 35 },
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <img
            src={IMAGES.WELLNESS_NATURAL_6}
            alt="Natural Wellness"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={springPresets.gentle}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-semibold text-foreground mb-6">
              Lass uns sprechen
            </h1>
            <p className="text-xl text-muted-foreground">
              Ich begleite dich empathisch und fachkundig auf deinem Weg zum Wunschkind.
              Vereinbare ein Erstgespräch oder schick mir deine Fragen.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column: Calendar & Accessibility Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={springPresets.gentle}
              className="space-y-12"
            >
              <div className="space-y-6">
                <h2 className="text-3xl font-serif text-primary underline decoration-accent/20 underline-offset-4 font-bold">Termin direkt online buchen</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Wählen Sie Ihren passenden Termin direkt aus meinem Kalender. Sie erhalten sofort eine Bestätigung per E-Mail. 
                  Für Akut-Anfragen nutzen Sie bitte weiterhin das Telefon.
                </p>
                
                {/* Booking CTA Button for Mobile/Direct access */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a 
                    href="https://calendar.app.google/RYQGskXW5jivjhBk6" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-accent text-white px-8 py-5 rounded-2xl font-bold hover:bg-accent/90 transition-all flex items-center justify-center gap-3 shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Clock size={20} /> Jetzt Termin wählen
                  </a>
                </div>

                {/* Secure Embedded Booking Frame */}
                <div className="rounded-[2.5rem] overflow-hidden border border-border shadow-2xl bg-white p-2">
                   <div className="relative w-full min-h-[600px] md:min-h-[750px] bg-muted/20">
                     <iframe 
                       src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ25nfo5KWrAQ06zJe6zwyNruIvcbVjEHxkR5PFo9uhkZ_1GpZL4G8COmvRmcLOKgMIFGG8-mKeA?gv=true" 
                       style={{ border: 0 }} 
                       className="absolute inset-0 w-full h-full rounded-2xl"
                       frameBorder="0" 
                       title="Terminbuchung feminatalis"
                     ></iframe>
                   </div>
                </div>
                <p className="text-[11px] text-muted-foreground italic text-center">
                  Sichere Buchung über Google Calendar. Ihre Daten werden verschlüsselt übertragen.
                </p>
              </div>

              <div className="grid gap-6">
                <Card className="border-none bg-primary/5 rounded-[2rem]">
                  <CardContent className="p-8 flex items-start gap-5">
                    <div className="p-4 rounded-2xl bg-white shadow-sm text-primary">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">Praxis Bad Schönborn</h4>
                      <p className="text-muted-foreground">Hebelstr. 3A, 76669 Bad-Schönborn</p>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-none bg-orange-50/50 rounded-[2rem]">
                    <CardContent className="p-8 flex items-start gap-5">
                      <div className="p-4 rounded-2xl bg-white shadow-sm text-orange-600">
                        <Phone size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-primary mb-1">Telefon</h4>
                        <a href="tel:072538468728" className="text-muted-foreground hover:text-primary transition-colors">07253-8468728</a>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Contact Form Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={springPresets.gentle}
            >
              <div className="sticky top-24">
                <h2 className="text-3xl font-serif text-primary mb-8 underline decoration-accent/20 underline-offset-4">Anfrage senden</h2>
                <Card className="shadow-2xl border-none overflow-hidden rounded-[3rem] bg-white border border-border/50">
                  <CardContent className="p-0">
                    <div className="flex flex-col items-center justify-center min-h-[600px] bg-gradient-to-br from-primary/5 via-white to-orange-50/30 p-12 text-center gap-8">
                      <div className="relative">
                        <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                          <Mail className="w-10 h-10 text-primary" />
                        </div>
                        <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-ping opacity-30" />
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-2xl font-serif text-primary">Direktkontakt & Formular</h3>
                        <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
                          Nutzen Sie unser gesichertes Kontaktformular für Ihre Anfrage. Wir melden uns zeitnah bei Ihnen zurück.
                        </p>
                      </div>

                      <div className="w-full max-w-sm border border-dashed border-primary/30 rounded-3xl p-8 bg-white/50 backdrop-blur-sm">
                         <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest mb-6">Individuelle Anfrage</p>
                         <div className="flex flex-col gap-4">
                            <Link 
                               to={ROUTE_PATHS.VORQUALIFIZIERUNG} 
                               className="bg-primary text-white py-4 rounded-xl font-bold shadow-lg hover:bg-primary/95 transition-all flex items-center justify-center gap-2"
                            >
                               <Mail size={18} /> Zum Kontaktformular
                            </Link>
                            <p className="text-[10px] text-muted-foreground italic">
                               Nutzen Sie unser Vorqualifizierungs-Formular für eine schnellere Bearbeitung.
                            </p>
                         </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section – anklickbar */}
      <section className="w-full h-[400px] bg-muted relative overflow-hidden">
        <a
          href="https://www.google.com/maps/search/?api=1&query=Hebelstr.+3A,+76669+Bad-Sch%C3%B6nborn"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-center justify-center group"
          aria-label="Praxis auf Google Maps öffnen"
        >
          <div className="text-center space-y-4 px-4 z-10">
            <div className="w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center mx-auto group-hover:bg-primary/25 transition-colors">
              <MapPin className="h-8 w-8 text-primary" />
            </div>
            <p className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              Hebelstr. 3A, 76669 Bad-Schönborn
            </p>
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-1 group-hover:text-primary/70 transition-colors">
              <ExternalLink size={14} />
              Auf Google Maps öffnen
            </p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
        </a>
      </section>
    </div>
  );
}
