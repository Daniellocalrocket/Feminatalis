import React from "react";
import { useFormContext } from "react-hook-form";
import { VorqualifizierungData } from "../schema";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Brain, Target, Activity, Settings2, Hand, PiggyBank, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const MINDSET_QUESTIONS = [
  {
    id: "mqSituation",
    icon: Activity,
    title: "1. Aktuelle Situation",
    options: [
      { value: "A", label: "Ich stehe ganz am Anfang (Kinderwunsch/Früh-SS)." },
      { value: "B", label: "Ich bin mittendrin (Fortgeschrittene SS/Wochenbett)." },
      { value: "C", label: "Ich habe eine spezifische Herausforderung, die sofortige Klärung braucht." }
    ]
  },
  {
    id: "mqMotivation",
    icon: Target,
    title: "2. Motivation (Tiefe)",
    options: [
      { value: "A", label: "Ich suche allgemeine Tipps und Sicherheit für den Alltag." },
      { value: "B", label: "Ich möchte verstehen, wie mein Körper in dieser Phase funktioniert." },
      { value: "C", label: "Ich will die tieferen Ursachen angehen und neue Wege abseits des Standards gehen." }
    ]
  },
  {
    id: "mqExperience",
    icon: Brain,
    title: "3. Erfahrungs-Level",
    options: [
      { value: "A", label: "Ich verlasse mich bisher primär auf die Standard-Vorsorge." },
      { value: "B", label: "Ich habe mich schon eingelesen und vereinzelt Dinge ausprobiert." },
      { value: "C", label: "Ich habe bereits eigene Diagnostik/Therapien hinter mir und bin informiert." }
    ]
  },
  {
    id: "mqIndividuality",
    icon: Settings2,
    title: "4. Der Hauptfilter (Individualität)",
    options: [
      { value: "A", label: "Ich fühle mich mit allgemeinen, bewährten Empfehlungen am wohlsten." },
      { value: "B", label: "Ich suche eine Mischung aus Standard und individuellen Ansätzen." },
      { value: "C", label: "Ich möchte eine absolut individuelle Begleitung, die nur auf meinen Körper schaut." }
    ]
  },
  {
    id: "mqResponsibility",
    icon: Hand,
    title: "5. Eigenverantwortung",
    options: [
      { value: "A", label: "Ich möchte mich erst einmal unverbindlich informieren." },
      { value: "B", label: "Ich bin bereit für Veränderungen, brauche aber viel Anleitung." },
      { value: "C", label: "Ich bin bereit, aktiv und konsequent Dinge im Alltag umzusetzen." }
    ]
  },
  {
    id: "mqInvestment",
    icon: PiggyBank,
    title: "6. Investitions-Mindset",
    options: [
      { value: "A", label: "Die Begleitung sollte sich strikt im Rahmen der Kassenleistungen bewegen." },
      { value: "B", label: "Ich bin bereit für sinnvolle Ergänzungen, sofern der Nutzen klar ist." },
      { value: "C", label: "Ich investiere bewusst in meine Gesundheit über den Kassenstandard hinaus." }
    ]
  },
  {
    id: "mqReality",
    icon: Briefcase,
    title: "7. Reality-Check (Arbeitsweise)",
    options: [
      { value: "A", label: "Ich bin unsicher, ob eine aktive Mitarbeit das Richtige für mich ist." },
      { value: "B", label: "Das Konzept klingt interessant, ich habe aber noch Fragen zur Umsetzung." },
      { value: "C", label: "Das ist genau das, was ich suche – ich will die volle Verantwortung übernehmen." }
    ]
  }
];

interface Step3MindsetProps {
  activeIndex: number;
}

export default function Step3Mindset({ activeIndex }: Step3MindsetProps) {
  const { watch, setValue, formState: { errors } } = useFormContext<VorqualifizierungData>();
  const question = MINDSET_QUESTIONS[activeIndex];

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
          {error && <p className="text-red-500 text-xs text-center font-bold">{error.message as string}</p>}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
