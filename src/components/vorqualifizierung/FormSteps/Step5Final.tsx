import React from "react";
import { useFormContext } from "react-hook-form";
import { VorqualifizierungData } from "../schema";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { ShieldCheck, Mail, MessageCircle, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function Step4Final() {
  const { register, watch, setValue, formState: { errors } } = useFormContext<VorqualifizierungData>();
  
  const dataConsent = watch("dataConsent");
  const newsletter = watch("newsletter");

  return (
    <div className="space-y-12 animate-in fade-in duration-500 max-w-2xl mx-auto px-4">
      
      {/* 1. Zusätzliche Informationen */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 mb-4">
           <MessageCircle className="w-6 h-6 text-primary/30" />
           <Label className="text-xl font-serif text-primary">Möchten Sie mir noch etwas mitteilen?</Label>
        </div>
        <div className="space-y-4">
            <Textarea 
              {...register("additionalInfo")} 
              placeholder="Gibt es Besonderheiten, die ich vor unserem Gespräch wissen sollte?" 
              className="min-h-[160px] rounded-[2rem] bg-white border-primary/10 p-6 shadow-sm"
              maxLength={500}
            />
            <p className="text-[10px] text-right text-muted-foreground font-bold">Max. 500 Zeichen</p>
        </div>
      </div>

      {/* 2. Rechtliches & Newsletter */}
      <div className="space-y-8 pt-8 border-t border-primary/5">
        
        <div className="bg-white p-8 rounded-[2.5rem] border border-primary/5 shadow-xl shadow-primary/5 space-y-6 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[100px] -z-0" />
           
           <div className="flex items-start space-x-4 relative z-10">
              <div className="pt-1">
                <Checkbox 
                  id="dataConsent" 
                  checked={dataConsent}
                  onCheckedChange={(checked) => setValue("dataConsent", checked === true, { shouldValidate: true })} 
                  className="w-6 h-6 rounded-lg border-primary/20 data-[state=checked]:bg-primary data-[state=checked]:text-white"
                />
              </div>
              <div className="space-y-2">
                <Label 
                  htmlFor="dataConsent" 
                  className="text-sm font-bold text-primary cursor-pointer flex items-center gap-2"
                >
                  <ShieldCheck className="w-4 h-4 text-green-600" /> Datenschutz & Kontakt *
                </Label>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Ich stimme der <Link to="/datenschutz" className="underline hover:text-primary transition-colors">Datenschutzerklärung</Link> zu und bin einverstanden, dass meine Daten zum Zweck der Kontaktaufnahme verarbeitet werden.
                </p>
                {errors.dataConsent && <p className="text-red-500 text-[10px] font-bold">{errors.dataConsent.message}</p>}
              </div>
           </div>

           <div className="flex items-start space-x-4 pt-4 relative z-10">
              <div className="pt-1">
                <Checkbox 
                  id="newsletter" 
                  checked={newsletter}
                  onCheckedChange={(checked) => setValue("newsletter", checked === true)} 
                  className="w-6 h-6 rounded-lg border-primary/20 data-[state=checked]:bg-accent data-[state=checked]:text-white"
                />
              </div>
              <div className="space-y-2">
                <Label 
                  htmlFor="newsletter" 
                  className="text-sm font-bold text-primary cursor-pointer flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-accent" /> Feminatalis Newsletter (Optional)
                </Label>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Ich möchte regelmäßig Tipps & wertvolle Informationen rund um Frauengesundheit, Zell-Power und Geburtskraft erhalten. Abmeldung jederzeit möglich.
                </p>
              </div>
           </div>
        </div>

        <div className="bg-orange-100/30 p-6 rounded-2xl border border-orange-200/50 flex items-center gap-4 animate-pulse">
           <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-sm shrink-0">
              <Sparkles className="w-5 h-5 text-accent" />
           </div>
           <p className="text-xs text-primary font-medium italic">
             „Fast geschafft! Nach dem Absenden erhalten Sie eine Bestätigungs-E-Mail von mir.“
           </p>
        </div>
      </div>
    </div>
  );
}
