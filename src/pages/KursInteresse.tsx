import React, { useState } from "react";
import SEO from "@/components/SEO";
import { ROUTE_PATHS } from "@/lib/index";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight, CheckCircle2, Mail, User, Send, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export default function KursInteresse() {
  const [searchParams] = useSearchParams();
  const kurs = searchParams.get("kurs") || "zellkraft";
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    whatsapp: true,
    bemerkung: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const kursNames: Record<string, string> = {
    roadmap: "Fruchtbarkeits-Kompass",
    geburtskompass: "Zellkraft-Geburtskompass"
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from("course_interesse")
        .insert({
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          whatsapp_opt_in: formData.whatsapp,
          bemerkung: formData.bemerkung,
          kurs: kursNames[kurs] || kurs,
          created_at: new Date().toISOString()
        });

      if (error) throw error;
      
      setIsSubmitted(true);
      toast.success("Du bist vorgemerkt! Wir melden uns bald bei dir.");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Etwas ist schiefgelaufen. Bitte versuche es nochmal.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-[#fff9f2] min-h-screen pt-24 pb-24">
        <SEO 
          title="Vorgemerkt | Feminatalis" 
          description="Du wirst informiert, sobald der Kurs startet." 
        />
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-12 lg:p-16 rounded-[4rem] shadow-xl"
          >
            <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 className="w-10 h-10 text-accent" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-serif text-primary mb-6">
              Du bist vorgemerkt!
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Wir informieren dich per E-Mail, sobald der <strong>{kursNames[kurs] || kurs}</strong> offiziell startet.
            </p>
            <p className="text-sm text-muted-foreground mb-10">
              Als Vorgemerkte:r bekommst du natürlich Vorrang und vielleicht sogar einen Early-Bird-Rabatt.
            </p>
            <Link 
              to={ROUTE_PATHS.HOME}
              className="text-accent font-bold hover:underline"
            >
              Zurück zur Startseite <ArrowRight className="inline" size={16} />
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#fff9f2] min-h-screen pt-24 pb-24">
      <SEO 
        title={`Für ${kursNames[kurs] || "den Kurs"} vorregistrieren | Feminatalis`} 
        description="Melde dich jetzt an und sei dabei, wenn der Kurs startet." 
      />
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-widest uppercase mb-6">
              <Sparkles size={14} /> Prelaunch
            </div>
            <h1 className="text-4xl lg:text-5xl font-serif text-primary mb-4">
              Interessiert mich!
            </h1>
            <p className="text-lg text-muted-foreground">
              Sichere dir jetzt deinen Platz für den <strong>{kursNames[kurs] || "Online-Kurs"}</strong>.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-8 lg:p-12 rounded-[3rem] shadow-xl border border-white">
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-bold text-primary mb-2">
                    Vorname *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-[#fff9f2] focus:border-accent focus:outline-none transition-colors"
                    placeholder="Dein Vorname"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-bold text-primary mb-2">
                    Nachname *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-[#fff9f2] focus:border-accent focus:outline-none transition-colors"
                    placeholder="Dein Nachname"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-primary mb-2">
                  E-Mail *
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-[#fff9f2] focus:border-accent focus:outline-none transition-colors"
                    placeholder="deine@email.de"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-primary mb-2">
                  Telefon (optional)
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-[#fff9f2] focus:border-accent focus:outline-none transition-colors"
                    placeholder="+49 123 456789"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="whatsapp"
                  checked={formData.whatsapp}
                  onChange={(e) => setFormData({...formData, whatsapp: e.target.checked})}
                  className="w-5 h-5 rounded border-border text-accent focus:ring-accent"
                />
                <label htmlFor="whatsapp" className="text-sm text-muted-foreground">
                  Ich möchte per WhatsApp über den Kursstart informiert werden.
                </label>
              </div>

              <div>
                <label htmlFor="bemerkung" className="block text-sm font-bold text-primary mb-2">
                  Bemerkung (optional)
                </label>
                <textarea
                  id="bemerkung"
                  value={formData.bemerkung}
                  onChange={(e) => setFormData({...formData, bemerkung: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-[#fff9f2] focus:border-accent focus:outline-none transition-colors resize-none"
                  rows={3}
                  placeholder="Was ist dir besonders wichtig? Hast du Fragen?"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-8 bg-primary text-white py-5 rounded-2xl font-bold text-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
            >
              {isSubmitting ? (
                <>Wird gesendet...</>
              ) : (
                <>Platz sichern <Send size={20} /></>
              )}
            </button>

            <p className="text-xs text-muted-foreground text-center mt-4">
              Wir geben deine Daten nicht weiter. Du kannst dich jederzeit abmelden.
            </p>
          </form>
        </motion.div>

        <div className="mt-12 text-center">
          <Link to={ROUTE_PATHS.KURS} className="text-sm text-accent hover:underline">
            ← Zurück zu den Kursen
          </Link>
        </div>
      </div>
    </div>
  );
}