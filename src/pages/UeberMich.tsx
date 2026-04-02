import React from "react";
import SEO from "@/components/SEO";
import { CheckCircle2, GraduationCap, Clock, Award } from "lucide-react";

export default function UeberMich() {
  return (
    <>
      <SEO 
        title="Angela Deschner | Heilpraktikerin & Hebamme in Bad Schönborn" 
        description="Über 30 Jahre Erfahrung: Lernen Sie Angela Deschner kennen. Doppel-Qualifikation als Hebamme und Heilpraktikerin mit Spezialisierung auf mitochondriale Medizin." 
      />

      <section className="bg-background pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-card text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                Leitung & Expertise
              </div>
              <h1 className="text-4xl lg:text-5xl font-serif text-primary mb-6 leading-tight">
                Angela Deschner
              </h1>
              <p className="text-xl text-muted-foreground mb-6 font-serif italic text-primary">
                "Jeder Mensch ist einzigartig. Deshalb behandle ich nicht Symptome, sondern Menschen – ganzheitlich, individuell und mit viel Zeit."
              </p>
              <p className="text-muted-foreground mb-8">
                Als Gründerin der feminatalis Praxis vereine ich die klassische, schulmedizinisch fundierte Hebammenkunst mit der tiefgreifenden Ursachenforschung der modernen Naturheilkunde (Mitochondriale Medizin).
              </p>
            </div>
            
            <div className="bg-card rounded-2xl p-4 md:p-8 aspect-square flex items-center justify-center">
              {/* PLATZHALTER BILD - Hier kann später das echte Porträt eingefügt werden */}
              <div className="w-full h-full bg-background/50 rounded-xl flex items-center justify-center border-2 border-dashed border-border text-muted-foreground flex-col gap-2">
                <span className="font-serif">Porträt Angela Deschner</span>
                <span className="text-sm">(Echtes Bild wird später eingefügt)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-background p-10 rounded-2xl shadow-sm border border-border">
            <div className="flex items-center gap-4 mb-8 border-b border-border pb-6">
              <GraduationCap className="w-10 h-10 text-accent" />
              <h2 className="text-3xl font-serif text-primary">Medizinische Qualifikationen</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <Clock className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <strong className="text-foreground block">Staatlich geprüfte Hebamme (seit 1992)</strong>
                    <span className="text-sm text-muted-foreground">Über 33 Jahre Praxiserfahrung, 10 Jahre aktive Kreißsaalarbeit, über 500 begleitete Geburten. Fachliche Schulung in St. Petersburg.</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Award className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <strong className="text-foreground block">Heilpraktikerin (Prüfung 2016)</strong>
                    <span className="text-sm text-muted-foreground">Amtsärztlich geprüfte Heilpraktikerin. Erlaubnis zur Ausübung der Heilkunde ohne Bestallung.</span>
                  </div>
                </li>
              </ul>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <strong className="text-foreground block">Master of Acupuncture (2013)</strong>
                    <span className="text-sm text-muted-foreground">Fundierte Ausbildung im TCM-Bereich, speziell angepasst auf gynäkologische Fragestellungen und Kinderwunsch.</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <strong className="text-foreground block">Geprüfte Vitalstoffberaterin (2019)</strong>
                    <span className="text-sm text-muted-foreground">Orthomolekulare & Mitochondriale Medizin. Spezialisiert auf Mikronährstofftherapien und intrazelluläre Diagnostik.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
