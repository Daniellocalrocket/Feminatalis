import React from "react";
import { useFormContext } from "react-hook-form";
import { VorqualifizierungData } from "../schema";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Brain, Target, Activity, Settings2, Hand, PiggyBank, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const getMindsetQuestions = (areas: string[] = []) => {
  // Determine primary area
  const isKinderwunsch = areas.includes("kinderwunsch");
  const isHebamme = areas.includes("hebamme");
  
  if (isKinderwunsch) {
    return [
      {
        id: "mqSituation",
        icon: Activity,
        title: "1. Wo steht ihr aktuell?",
        options: [
          { value: "A", label: "Wir fangen gerade erst an und möchten uns informieren." },
          { value: "B", label: "Wir versuchen es schon länger (ohne Klinik) und suchen natürliche Wege." },
          { value: "C", label: "Wir sind / waren bereits in ärztlicher Behandlung (z.B. Klinik) oder haben Diagnosen." }
        ]
      },
      {
        id: "mqMotivation",
        icon: Target,
        title: "2. Was ist das wichtigste Ziel unserer Zusammenarbeit?",
        options: [
          { value: "A", label: "Allgemeine Tipps zur Fruchtbarkeit und zum Zyklus." },
          { value: "B", label: "Den Körper auf natürliche Weise ganzheitlich optimal vorbereiten." },
          { value: "C", label: "Eine fundierte, begleitende Therapie (auch neben einer Klinikbehandlung)." }
        ]
      },
      {
        id: "mqExperience",
        icon: Brain,
        title: "3. Welche Schritte seid ihr bisher gegangen?",
        options: [
          { value: "A", label: "Bisher nur Zyklus-Tracking per App." },
          { value: "B", label: "Wir haben Ernährung und erste Nahrungsergänzungsmittel angepasst." },
          { value: "C", label: "Wir haben bereits umfassende Diagnostik (Hormonstatus, Spermiogramm etc.) hinter uns." }
        ]
      },
      {
        id: "mqIndividuality",
        icon: Settings2,
        title: "4. Wie möchtet ihr vorgehen?",
        options: [
          { value: "A", label: "Wir suchen nach bewährten Basis-Ratschlägen." },
          { value: "B", label: "Wir wünschen uns eine individuelle naturheilkundliche Analyse." },
          { value: "C", label: "Wir möchten das volle, ganzheitliche Zellkraft-Protokoll umsetzen." }
        ]
      },
      {
        id: "mqResponsibility",
        icon: Hand,
        title: "5. Aktive Mitwirkung",
        options: [
          { value: "A", label: "Wir suchen eher nach Lösungen, die leicht nebenbei funktionieren." },
          { value: "B", label: "Wir sind bereit, Dinge zu verändern, brauchen aber eine genaue Anleitung." },
          { value: "C", label: "Wir wollen alles in unserer Macht Stehende tun und aktiv umsetzen." }
        ]
      }
    ];
  }

  if (isHebamme) {
    return [
      {
        id: "mqSituation",
        icon: Activity,
        title: "1. In welcher Phase befindest du dich?",
        options: [
          { value: "A", label: "Ich bin frisch schwanger (1. Trimester)." },
          { value: "B", label: "Ich bin im 2. oder 3. Trimester der Schwangerschaft." },
          { value: "C", label: "Ich suche primär Betreuung für das Wochenbett." }
        ]
      },
      {
        id: "mqMotivation",
        icon: Target,
        title: "2. Was wünschst du dir für die Betreuung am meisten?",
        options: [
          { value: "A", label: "Medizinische Sicherheit und Basis-Vorsorge." },
          { value: "B", label: "Gute Vorbereitung auf eine natürliche, selbstbestimmte Geburt." },
          { value: "C", label: "Ganzheitliche, emotionale und körperliche Unterstützung auf allen Ebenen." }
        ]
      },
      {
        id: "mqExperience",
        icon: Brain,
        title: "3. Wie hast du dich bisher vorbereitet?",
        options: [
          { value: "A", label: "Ich verlasse mich primär auf die Termine beim Frauenarzt." },
          { value: "B", label: "Ich habe bereits Bücher gelesen oder Podcasts zum Thema gehört." },
          { value: "C", label: "Ich setze mich intensiv auseinander und habe genaue Wünsche." }
        ]
      },
      {
        id: "mqIndividuality",
        icon: Settings2,
        title: "4. Welcher Betreuungsansatz passt zu dir?",
        options: [
          { value: "A", label: "Die klassischen, von der Kasse getragenen Hebammenleistungen reichen mir." },
          { value: "B", label: "Ich bin auch offen für naturheilkundliche Extras (z.B. Akupunktur)." },
          { value: "C", label: "Ich wünsche mir eine exklusive, erweiterte Premium-Begleitung." }
        ]
      },
      {
        id: "mqResponsibility",
        icon: Hand,
        title: "5. Aktive Mitwirkung",
        options: [
          { value: "A", label: "Ich möchte einfach sicher durch die Schwangerschaft geführt werden." },
          { value: "B", label: "Ich bin bereit, mich aktiv auf die Geburt vorzubereiten." },
          { value: "C", label: "Ich möchte proaktiv meine und die Gesundheit meines Babys optimieren." }
        ]
      }
    ];
  }

  // Default to Naturheilkunde
  return [
    {
      id: "mqSituation",
      icon: Activity,
      title: "1. Wie lange bestehen deine Herausforderungen schon?",
      options: [
        { value: "A", label: "Es handelt sich um ein akutes, neueres Thema." },
        { value: "B", label: "Die Beschwerden treten phasenweise oder schon länger auf." },
        { value: "C", label: "Ich habe chronische Themen und schon sehr vieles ausprobiert." }
      ]
    },
    {
      id: "mqMotivation",
      icon: Target,
      title: "2. Was erwartest du von der Therapie?",
      options: [
        { value: "A", label: "Eine schnelle Linderung meiner akuten Symptome." },
        { value: "B", label: "Eine sinnvolle, naturheilkundliche Ergänzung zur Schulmedizin." },
        { value: "C", label: "Die tatsächliche Ursache finden und den Körper an der Basis heilen." }
      ]
    },
    {
      id: "mqExperience",
      icon: Brain,
      title: "3. Wie bist du bisher an deine Gesundheit herangegangen?",
      options: [
        { value: "A", label: "Primär über den Hausarzt oder Facharzt." },
        { value: "B", label: "Mit Hausmitteln und Standard-Nahrungsergänzungsmitteln." },
        { value: "C", label: "Mit detaillierter Labordiagnostik und funktioneller Medizin." }
      ]
    },
    {
      id: "mqIndividuality",
      icon: Settings2,
      title: "4. Welchen Therapieansatz bevorzugst du?",
      options: [
        { value: "A", label: "Standardisierte, bewährte Behandlungsprotokolle." },
        { value: "B", label: "Eine Mischung aus klassischen und individuellen naturheilkundlichen Wegen." },
        { value: "C", label: "Ein hochindividuelles, tiefgreifendes und laborbasiertes Konzept." }
      ]
    },
    {
      id: "mqResponsibility",
      icon: Hand,
      title: "5. Aktive Umsetzung",
      options: [
        { value: "A", label: "Ich suche eine Lösung, die mich im Alltag wenig Aufwand kostet." },
        { value: "B", label: "Ich bin bereit, Dinge zu ändern, brauche aber viel Anleitung und Support." },
        { value: "C", label: "Ich übernehme volle Verantwortung und setze Pläne konsequent um." }
      ]
    }
  ];
};

interface Step3MindsetProps {
  activeIndex: number;
}

export default function Step3Mindset({ activeIndex }: Step3MindsetProps) {
  const { watch, setValue, formState: { errors } } = useFormContext<VorqualifizierungData>();
  const areas = watch("areas") || [];
  const mindsetQuestions = getMindsetQuestions(areas);
  const question = mindsetQuestions[activeIndex];

  if (!question) return null;

  const Icon = question.icon;
  const currentVal = watch(question.id as any);
  const error = errors[question.id as keyof typeof errors];

  return (
    <div className="flex flex-col justify-center max-w-2xl mx-auto w-full px-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={question.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="space-y-6"
        >
          <div className="text-center mb-4">
            <div className="inline-flex p-3 rounded-2xl bg-accent/5 mb-2">
              <Icon className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl md:text-2xl font-serif text-primary">{question.title}</h3>
          </div>

          <RadioGroup 
            onValueChange={(val) => setValue(question.id as any, val, { shouldValidate: true })}
            value={currentVal}
            className="grid grid-cols-1 gap-3"
          >
            {question.options.map((option) => (
              <div 
                key={option.value} 
                className={cn(
                  "flex items-center space-x-3 p-4 rounded-xl border transition-all hover:shadow-sm cursor-pointer min-h-[70px]",
                  currentVal === option.value 
                    ? "border-accent bg-accent/5 ring-1 ring-accent/20" 
                    : "border-primary/5 bg-white hover:border-primary/20"
                )}
                onClick={() => setValue(question.id as any, option.value, { shouldValidate: true })}
              >
                <RadioGroupItem value={option.value} id={`${question.id}-${option.value}`} className="sr-only" />
                <div className={cn(
                  "w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors",
                  currentVal === option.value ? "border-accent bg-accent" : "border-primary/10"
                )}>
                  {currentVal === option.value && <div className="w-2 h-2 bg-white rounded-full" />}
                </div>
                <Label htmlFor={`${question.id}-${option.value}`} className="text-sm font-medium cursor-pointer flex-1 leading-relaxed">
                  {option.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
          {error && <p className="text-accent text-xs text-center font-bold">{error.message as string}</p>}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
