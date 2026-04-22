import React, { useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import { vorqualifizierungSchema, defaultValues, VorqualifizierungData } from "./schema";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { toast } from "sonner";
import { ChevronRight, ChevronLeft, Send, Sparkles } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

// Form steps components will be imported or defined here
import Step1Area from "./FormSteps/Step1Area";
import Step2Contact from "./FormSteps/Step2Contact";
import Step3Mindset from "./FormSteps/Step3Mindset";
import Step4Details from "./FormSteps/Step4Details";
import Step5Final from "./FormSteps/Step5Final";

const BASE_STEPS = [
  { id: "area", title: "Schwerpunkt", subtitle: "Wählen Sie Ihren Schwerpunkt" },
  { id: "contact", title: "Kontakt", subtitle: "Wie kann ich Sie erreichen?" },
  { id: "mindset", title: "Ihre Situation", subtitle: "Kurze Selbsteinschätzung" },
  { id: "details", title: "Details", subtitle: "Ein paar weitere Details" },
  { id: "final", title: "Abschluss", subtitle: "Fast geschafft!" },
];

const MINDSET_QUESTIONS_COUNT = 7;


export default function VorqualifizierungForm() {
  const [searchParams] = useSearchParams();
  const typeParam = searchParams.get("type"); // 'hebamme' or 'naturheilpraxis'
  const eventParam = searchParams.get("event");
  
  const [currentStepIndex, setCurrentStepIndex] = useState(typeParam ? 1 : 0); // 0: area, 1: contact, 2: mindset, 3: details, 4: final
  const [mindsetStep, setMindsetStep] = useState(0); // 0-6
  const [isSubmitted, setIsSubmitted] = useState(false);

  const methods = useForm<VorqualifizierungData>({
    resolver: zodResolver(vorqualifizierungSchema),
    defaultValues: defaultValues,
    mode: "onBlur",
  });

  const { handleSubmit, trigger, watch, setValue, formState: { isSubmitting } } = methods;

  useEffect(() => {
    if (typeParam === 'hebamme') {
      setValue("areas", ["hebamme"], { shouldValidate: true });
    } else if (typeParam === 'naturheilpraxis') {
      setValue("areas", ["naturheilkunde"], { shouldValidate: true });
    }
  }, [typeParam, setValue]);

  const currentStepId = BASE_STEPS[currentStepIndex].id;
  const totalDisplaySteps = BASE_STEPS.length + MINDSET_QUESTIONS_COUNT - 1;
  const currentDisplayProgress = currentStepId === "mindset" 
    ? 2 + mindsetStep + 1 
    : currentStepIndex < 2 ? currentStepIndex + 1 : currentStepIndex + MINDSET_QUESTIONS_COUNT;

  const nextStep = async () => {
    let fieldsToValidate: any = [];
    if (currentStepId === "area") fieldsToValidate = ["areas"];
    if (currentStepId === "contact") fieldsToValidate = ["firstName", "lastName", "email", "phone", "zipCode", "insurance"];
    if (currentStepId === "mindset") {
      const qIds = ["mqSituation", "mqMotivation", "mqExperience", "mqIndividuality", "mqResponsibility", "mqInvestment", "mqReality"];
      fieldsToValidate = [qIds[mindsetStep]];
    }
    if (currentStepId === "details") fieldsToValidate = ["urgency"];
    if (currentStepId === "final") fieldsToValidate = ["dataConsent"];

    const isStepValid = await trigger(fieldsToValidate);
    
    if (isStepValid) {
      if (currentStepId === "mindset" && mindsetStep < MINDSET_QUESTIONS_COUNT - 1) {
        setMindsetStep(prev => prev + 1);
      } else if (currentStepIndex < BASE_STEPS.length - 1) {
        setCurrentStepIndex(prev => prev + 1);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      toast.error("Bitte wählen Sie eine Option aus.");
    }
  };

  const prevStep = () => {
    if (currentStepId === "mindset" && mindsetStep > 0) {
      setMindsetStep(prev => prev - 1);
    } else if (currentStepIndex > (typeParam ? 1 : 0)) {
      setCurrentStepIndex(prev => prev - 1);
      if (BASE_STEPS[currentStepIndex - 1].id === "mindset") {
        setMindsetStep(MINDSET_QUESTIONS_COUNT - 1);
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const onSubmit = async (data: VorqualifizierungData) => {
    try {
      console.log("Submitting form data to Supabase:", data);
      
      const { error } = await supabase.from('leads').insert([
        {
          first_name: data.firstName,
          last_name: data.lastName,
          email: data.email,
          phone: data.phone,
          zip_code: data.zipCode,
          insurance: data.insurance,
          areas: data.areas,
          urgency: data.urgency,
          additional_info: eventParam ? `Buchungsanfrage für: ${decodeURIComponent(eventParam)}. ${data.additionalInfo || ""}` : data.additionalInfo,
          mindset_situation: data.mqSituation,
          mindset_motivation: data.mqMotivation,
          mindset_experience: data.mqExperience,
          mindset_individuality: data.mqIndividuality,
          mindset_responsibility: data.mqResponsibility,
          mindset_investment: data.mqInvestment,
          mindset_reality: data.mqReality,
        }
      ]);

      if (error) throw error;

      setIsSubmitted(true);
      toast.success("Vielen Dank! Ihre Anfrage wurde erfolgreich gesendet.");
    } catch (error) {
      console.error("Supabase error:", error);
      toast.error("Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.");
    }
  };

  if (isSubmitted) {
    const firstName = watch("firstName");
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center p-12 bg-white rounded-[3rem] border border-border shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-accent" />
        <div className="bg-orange-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
           <Sparkles className="w-12 h-12 text-accent animate-pulse" />
        </div>
        <h2 className="text-4xl font-serif text-primary mb-6">Vielen Dank, {firstName}!</h2>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
          Ich habe Ihre Anfrage erhalten und schaue mir diese persönlich an. 
          Ich melde mich innerhalb von 24 Stunden (an Werktagen) bei Ihnen zurück.
        </p>
        <p className="text-primary font-bold italic mb-10">Herzliche Grüße, <br /> Angela Deschner</p>
        <Button onClick={() => window.location.href = "/"} variant="outline" className="rounded-xl px-10 h-14 font-bold border-primary text-primary hover:bg-primary hover:text-white transition-all">
          Zurück zur Startseite
        </Button>
      </motion.div>
    );
  }

  return (
    <Card className="w-full max-w-3xl mx-auto border-none shadow-none bg-transparent">
      <CardHeader className="p-0 mb-6 text-center">
        <div className="flex justify-between items-center mb-4 px-2">
           <span className="text-xs font-bold text-primary/40 uppercase tracking-widest">
             Schritt {currentDisplayProgress} von {totalDisplaySteps}
           </span>
           <span className="text-xs font-bold text-accent uppercase tracking-widest">
             {Math.round((currentDisplayProgress / totalDisplaySteps) * 100)}%
           </span>
        </div>
        <Progress value={(currentDisplayProgress / totalDisplaySteps) * 100} className="h-1.5 mb-6 bg-white/50 border border-primary/10 overflow-hidden rounded-full shadow-inner" />
        
        {eventParam && (
          <div className="mb-8 p-4 bg-primary/5 rounded-2xl border border-primary/10 inline-block">
            <p className="text-[10px] font-bold uppercase tracking-widest text-primary/40 mb-1">Buchungsanfrage für:</p>
            <p className="text-lg font-serif text-primary">{decodeURIComponent(eventParam)}</p>
          </div>
        )}

        <h2 className="text-2xl md:text-4xl font-serif text-primary mb-2">{BASE_STEPS[currentStepIndex].title}</h2>
        <p className="text-base text-muted-foreground">{BASE_STEPS[currentStepIndex].subtitle}</p>
      </CardHeader>


      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${currentStepId}-${mindsetStep}`}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="min-h-[350px] flex flex-col justify-center"
            >
              {currentStepId === "area" && <Step1Area />}
              {currentStepId === "contact" && <Step2Contact />}
              {currentStepId === "mindset" && <Step3Mindset activeIndex={mindsetStep} />}
              {currentStepId === "details" && <Step4Details />}
              {currentStepId === "final" && <Step5Final />}
            </motion.div>

          </AnimatePresence>

          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-primary/5">
            {(currentStepIndex > 0 || (currentStepId === "mindset" && mindsetStep > 0)) && (
              <Button 
                type="button" 
                variant="outline" 
                onClick={prevStep} 
                className="flex-1 rounded-2xl h-14 font-bold text-primary border-primary/20 hover:bg-primary/5 transition-all"
              >
                <ChevronLeft className="mr-2 h-5 w-5" /> Zurück
              </Button>
            )}
            
            {(currentStepIndex < BASE_STEPS.length - 1 || (currentStepId === "mindset" && mindsetStep < MINDSET_QUESTIONS_COUNT - 1)) ? (

              <Button 
                type="button" 
                onClick={nextStep} 
                className="flex-[2] rounded-2xl h-16 font-bold bg-primary text-white hover:bg-primary/95 shadow-xl hover:shadow-primary/20 transition-all active:scale-95"
              >
                Weiter <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            ) : (
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="flex-[2] rounded-2xl h-16 font-bold bg-accent text-white hover:bg-accent/90 shadow-xl hover:shadow-accent/20 transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                {isSubmitting ? "Wird gesendet..." : (
                  <>
                    <Send className="h-5 w-5" /> Jetzt absenden
                  </>
                )}
              </Button>
            )}
          </div>
        </form>
      </FormProvider>
      
      <div className="mt-12 text-center">
         <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-[0.2em] opacity-40">
           © Feminatalis – Angela Deschner | 100% Sicher & Fachlich fundiert
         </p>
      </div>
    </Card>
  );
}
