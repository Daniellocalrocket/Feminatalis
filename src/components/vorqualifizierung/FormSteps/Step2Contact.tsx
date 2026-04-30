import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { INSURANCE_TYPES, VorqualifizierungData } from "../schema";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info, MapPin, Shield } from "lucide-react";

export default function Step2Contact() {
  const { register, watch, formState: { errors } } = useFormContext<VorqualifizierungData>();
  const [showPlzInfo, setShowPlzInfo] = useState(false);


  const zipCode = watch("zipCode");
  const insurance = watch("insurance");
  const areas = watch("areas") || [];

  useEffect(() => {
    // Define nearby zip code patterns (approx. 10km driving distance around Bad Schönborn 76669)
    const isNearby = (plz: string) => {
      if (!plz || plz.length !== 5) return true; // Don't show info while typing

      // Strict list of nearby 5-digit zip codes
      const nearbyZips = [
        "76669", // Bad Schönborn (Mingolsheim / Langenbrücken)
        "76709", // Kronau
        "76684", // Östringen
        "76698", // Ubstadt-Weiher
        "69254", // Malsch (bei Wiesloch)
        "68789", // St. Leon-Rot
        "69242", // Mühlhausen
        "69231", // Rauenberg
        "76694", // Forst
        "76707", // Hambrücken
      ];

      return nearbyZips.includes(plz);
    };

    if (zipCode && zipCode.length === 5) {
      setShowPlzInfo(!isNearby(zipCode));
    } else {
      setShowPlzInfo(false);
    }
  }, [zipCode]);


  return (
    <div className="space-y-10 animate-in fade-in duration-500 max-w-2xl mx-auto px-4">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-sm font-bold text-primary pl-1 uppercase opacity-60">Vorname *</Label>
          <Input id="firstName" {...register("firstName")} className="h-14 rounded-2xl border-primary/10 transition-all focus:ring-accent" placeholder="Dein Vorname" />
          {errors.firstName && <p className="text-red-500 text-xs pl-2 font-bold">{errors.firstName.message}</p>}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-sm font-bold text-primary pl-1 uppercase opacity-60">Nachname *</Label>
          <Input id="lastName" {...register("lastName")} className="h-14 rounded-2xl border-primary/10 transition-all focus:ring-accent" placeholder="Dein Nachname" />
          {errors.lastName && <p className="text-red-500 text-xs pl-2 font-bold">{errors.lastName.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-bold text-primary pl-1 uppercase opacity-60">E-Mail *</Label>
          <Input id="email" type="email" {...register("email")} className="h-14 rounded-2xl border-primary/10 transition-all focus:ring-accent" placeholder="deine@email.de" />
          {errors.email && <p className="text-red-500 text-xs pl-2 font-bold">{errors.email.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-sm font-bold text-primary pl-1 uppercase opacity-60">Telefonnummer *</Label>
          <Input id="phone" type="tel" {...register("phone")} className="h-14 rounded-2xl border-primary/10 transition-all focus:ring-accent" placeholder="Für Rückfragen" />
          {errors.phone && <p className="text-red-500 text-xs pl-2 font-bold">{errors.phone.message}</p>}
        </div>
      </div>

      <div className="space-y-2 max-w-[200px]">
        <Label htmlFor="zipCode" className="text-sm font-bold text-primary pl-1 uppercase opacity-60">Postleitzahl *</Label>
        <div className="relative">
          <Input id="zipCode" maxLength={5} {...register("zipCode")} className="h-14 rounded-2xl border-primary/10 flex-1 pl-12" placeholder="76669" />
          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/30" />
        </div>
        {errors.zipCode && <p className="text-red-500 text-xs pl-2 font-bold">{errors.zipCode.message}</p>}
      </div>

      {showPlzInfo && (
        <Alert className="bg-orange-50 border-orange-200 rounded-2xl animate-in slide-in-from-top-2 duration-300">
           <AlertDescription className="text-primary/70 flex items-center gap-3">
             <Info className="w-5 h-5 text-accent shrink-0" />
             Du wohnst etwas weiter entfernt. Eine Betreuung ist unter Umständen trotzdem möglich. Ich kläre das gerne persönlich mit dir.
           </AlertDescription>
        </Alert>
      )}

      <div className="space-y-6 pt-6 border-t border-primary/5">
        <div className="flex items-center gap-3 mb-4">
           <Shield className="w-6 h-6 text-primary/30" />
           <Label className="text-lg font-serif text-primary">Deine Versicherungssituation</Label>
        </div>
        
        <RadioGroup onValueChange={(val) => register("insurance").onChange({ target: { value: val, name: "insurance" } })}>
          <div className="grid gap-4">
            {INSURANCE_TYPES.map((type) => (
              <div key={type} className="flex items-center space-x-3 bg-white p-4 rounded-xl border border-primary/5 hover:border-accent/40 transition-all">
                <RadioGroupItem value={type} id={type} className="text-accent border-primary/20" />
                <Label htmlFor={type} className="text-sm font-medium cursor-pointer flex-1">{type}</Label>
              </div>
            ))}
          </div>
        </RadioGroup>
        {errors.insurance && <p className="text-red-500 text-xs pl-2 font-bold">{errors.insurance.message}</p>}
      </div>


    </div>
  );
}
