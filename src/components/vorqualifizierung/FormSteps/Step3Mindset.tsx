import React from "react";
import { useFormContext } from "react-hook-form";
import { VorqualifizierungData } from "../schema";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Brain, Target, Activity, Settings2, Hand, PiggyBank, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

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

export default function Step3Mindset() {
  const { register, watch, setValue, formState: { errors } } = useFormContext<VorqualifizierungData>();

  return (
    <div className="space-y-12 animate-in fade-in duration-500 max-w-3xl mx-auto px-4">
      <div className="text-center mb-8">
        <p className="text-muted-foreground">
          Um bestmöglich auf Ihre Bedürfnisse eingehen zu können und herauszufinden, 
          ob mein Ansatz der richtige für Sie ist, bitte ich Sie um eine kurze Selbsteinschätzung.
        </p>
      </div>

      {MINDSET_QUESTIONS.map((question, index) => {
        const Icon = question.icon;
        const currentVal = watch(question.id as any);
        const error = errors[question.id as keyof typeof errors];

        return (
          <div key={question.id} className="space-y-4 bg-white/50 p-6 rounded-3xl border border-primary/5 hover:border-accent/20 transition-all">
            <div className="flex items-center gap-3 mb-4">
               <Icon className="w-5 h-5 text-accent" />
               <Label className="text-lg font-serif text-primary">{question.title}</Label>
            </div>
            
            <RadioGroup 
              onValueChange={(val) => setValue(question.id as any, val, { shouldValidate: true })}
              value={currentVal}
            >
              <div className="grid grid-cols-1 gap-3">
                {question.options.map((option) => (
                  <div 
                    key={option.value} 
                    className={cn(
                      "flex items-center space-x-3 bg-white p-4 rounded-xl border transition-all hover:shadow-sm cursor-pointer",
                      currentVal === option.value ? "border-accent bg-accent/5" : "border-primary/5 hover:border-accent/40"
                    )}
                    onClick={() => setValue(question.id as any, option.value, { shouldValidate: true })}
                  >
                    <RadioGroupItem value={option.value} id={`${question.id}-${option.value}`} className="text-accent border-primary/20 sr-only" />
                    <div className={cn(
                      "w-5 h-5 rounded-full border flex items-center justify-center shrink-0",
                      currentVal === option.value ? "border-accent bg-accent" : "border-primary/20"
                    )}>
                      {currentVal === option.value && <div className="w-2 h-2 bg-white rounded-full" />}
                    </div>
                    <Label htmlFor={`${question.id}-${option.value}`} className="text-sm font-medium cursor-pointer flex-1 leading-relaxed">
                      {option.label}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
            {error && <p className="text-red-500 text-xs pl-2 font-bold">{error.message as string}</p>}
          </div>
        );
      })}
    </div>
  );
}
