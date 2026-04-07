import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
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

const STEPS = [
  { id: 1, title: "Schwerpunkt", subtitle: "Wählen Sie Ihren Schwerpunkt" },
  { id: 2, title: "Kontakt", subtitle: "Wie kann ich Sie erreichen?" },
  { id: 3, title: "Ihre Situation", subtitle: "Kurze Selbsteinschätzung" },
  { id: 4, title: "Details", subtitle: "Ein paar weitere Details" },
  { id: 5, title: "Abschluss", subtitle: "Fast geschafft!" },
];

export default function VorqualifizierungForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const methods = useForm<VorqualifizierungData>({
    resolver: zodResolver(vorqualifizierungSchema),
    defaultValues: defaultValues,
    mode: "onBlur",
  });

  const { handleSubmit, trigger, watch, formState: { isSubmitting } } = methods;

  const nextStep = async () => {
    // Validate current step fields before proceeding
    let fieldsToValidate: any = [];
    if (currentStep === 1) fieldsToValidate = ["areas"];
    if (currentStep === 2) fieldsToValidate = ["firstName", "lastName", "email", "phone", "zipCode", "insurance"];
    if (currentStep === 3) fieldsToValidate = ["mqSituation", "mqMotivation", "mqExperience", "mqIndividuality", "mqResponsibility", "mqInvestment", "mqReality"];
    if (currentStep === 4) fieldsToValidate = ["urgency"]; // Partial validation for step 4
    if (currentStep === 5) fieldsToValidate = ["dataConsent"];

    const isStepValid = await trigger(fieldsToValidate);
    
    if (isStepValid) {
      if (currentStep < STEPS.length) {
        setCurrentStep(prev => prev + 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      toast.error("Bitte füllen Sie alle Pflichtfelder korrekt aus.");
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
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
          additional_info: data.additionalInfo,
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
      <CardHeader className="p-0 mb-10 text-center">
        <div className="flex justify-between items-center mb-6 px-2">
           <span className="text-xs font-bold text-primary/40 uppercase tracking-widest">
             Schritt {currentStep} von {STEPS.length}
           </span>
           <span className="text-xs font-bold text-accent uppercase tracking-widest">
             {Math.round((currentStep / STEPS.length) * 100)}% Abgeschlossen
           </span>
        </div>
        <Progress value={(currentStep / STEPS.length) * 100} className="h-2 mb-10 bg-white/50 border border-primary/10 overflow-hidden rounded-full shadow-inner" />
        
        <h2 className="text-3xl md:text-5xl font-serif text-primary mb-4">{STEPS[currentStep - 1].title}</h2>
        <p className="text-lg text-muted-foreground">{STEPS[currentStep - 1].subtitle}</p>
      </CardHeader>

      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="min-h-[400px]"
            >
              {currentStep === 1 && <Step1Area />}
              {currentStep === 2 && <Step2Contact />}
              {currentStep === 3 && <Step3Mindset />}
              {currentStep === 4 && <Step4Details />}
              {currentStep === 5 && <Step5Final />}
            </motion.div>
          </AnimatePresence>

          <div className="flex flex-col sm:flex-row gap-4 pt-10 border-t border-primary/5">
            {currentStep > 1 && (
              <Button 
                type="button" 
                variant="outline" 
                onClick={prevStep} 
                className="flex-1 rounded-2xl h-16 font-bold text-primary border-primary/20 hover:bg-primary/5 transition-all"
              >
                <ChevronLeft className="mr-2 h-5 w-5" /> Zurück
              </Button>
            )}
            
            {currentStep < STEPS.length ? (
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
