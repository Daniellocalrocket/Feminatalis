import React from "react";
import { useFormContext } from "react-hook-form";
import { URGENCY_TYPES, VorqualifizierungData } from "../schema";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Battery, Calendar, Clock, Microscope } from "lucide-react";

export default function Step3Details() {
  const { register, watch, setValue, formState: { errors } } = useFormContext<VorqualifizierungData>();
  
  const areas = watch("areas") || [];
  const midwifeServices = watch("midwifeService") || [];
  const prevTreatments = watch("prevTreatments") || [];

  const handleCheckboxChange = (field: "midwifeService" | "prevTreatments", value: string, checked: boolean) => {
    const current = watch(field) || [];
    if (checked) {
      setValue(field, [...current, value], { shouldValidate: true });
    } else {
      setValue(field, current.filter(v => v !== value), { shouldValidate: true });
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 max-w-2xl mx-auto px-4">
      
      {/* 1. Dringlichkeit (Allgemein) */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 mb-4">
           <Clock className="w-6 h-6 text-primary/30" />
           <Label className="text-xl font-serif text-primary">Wie dringend ist dein Anliegen?</Label>
        </div>
        <RadioGroup onValueChange={(val) => setValue("urgency", val, { shouldValidate: true })}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {URGENCY_TYPES.map((type) => (
              <div key={type.id} className="flex items-center space-x-3 bg-white p-4 rounded-xl border border-primary/5 hover:border-accent/40 transition-all">
                <RadioGroupItem value={type.id} id={type.id} className="text-accent border-primary/20" />
                <Label htmlFor={type.id} className="text-sm font-medium cursor-pointer flex-1">{type.label}</Label>
              </div>
            ))}
          </div>
        </RadioGroup>
        {errors.urgency && <p className="text-accent text-xs pl-2 font-bold">{errors.urgency.message}</p>}
      </div>

      {/* 2. Hebammenpraxis Spezifisch */}
      {areas.includes("hebamme") && (
        <div className="space-y-8 p-8 bg-[#fff9f2] rounded-[2.5rem] border border-primary/5 animate-in slide-in-from-right-4 duration-500 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[100px] -z-0" />
          <div className="flex items-center gap-3 mb-6 relative z-10">
             <Calendar className="w-6 h-6 text-primary" />
             <h3 className="text-xl font-serif text-primary">Details zur Hebammenbetreuung</h3>
          </div>
          
          <div className="space-y-4 relative z-10">
            <Label className="text-sm font-bold text-primary opacity-60 uppercase">Aktuelle Schwangerschaftswoche</Label>
            <Input 
              type="number" 
              {...register("pregnancyWeek")} 
              placeholder="z.B. 12" 
              className="h-14 rounded-2xl bg-white border-primary/10"
            />
          </div>

          <div className="space-y-4 relative z-10">
            <Label className="text-sm font-bold text-primary opacity-60 uppercase">Gewünschte Leistungen</Label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {["Vorsorge", "Geburtsvorbereitung", "Nachsorge", "Kurs"].map((service) => (
                <div key={service} className="flex items-center space-x-2 bg-white/50 p-3 rounded-xl border border-primary/5">
                  <Checkbox 
                    id={service} 
                    checked={midwifeServices.includes(service)}
                    onCheckedChange={(checked) => handleCheckboxChange("midwifeService", service, checked === true)} 
                  />
                  <Label htmlFor={service} className="text-sm font-medium cursor-pointer">{service}</Label>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 3. Kinderwunsch Spezifisch */}
      {areas.includes("kinderwunsch") && (
        <div className="space-y-8 p-8 bg-[#fde4c8]/20 rounded-[2.5rem] border border-accent/10 animate-in slide-in-from-right-4 duration-500 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-bl-[100px] -z-0" />
          <div className="flex items-center gap-3 mb-6 relative z-10">
             <Microscope className="w-6 h-6 text-accent" />
             <h3 className="text-xl font-serif text-primary">Details zum Kinderwunsch</h3>
          </div>
          
          <div className="space-y-4 relative z-10">
            <Label className="text-sm font-bold text-primary opacity-60 uppercase">Dauer des Kinderwunsches</Label>
            <Select onValueChange={(val) => setValue("ttcDuration", val)}>
              <SelectTrigger className="h-14 rounded-2xl bg-white border-primary/10">
                <SelectValue placeholder="Bitte wählen..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="<6 Monate">Weniger als 6 Monate</SelectItem>
                <SelectItem value="6-12 Monate">6 bis 12 Monate</SelectItem>
                <SelectItem value="1-2 Jahre">1 bis 2 Jahre</SelectItem>
                <SelectItem value=">2 Jahre">Länger als 2 Jahre</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4 relative z-10">
            <Label className="text-sm font-bold text-primary opacity-60 uppercase">Bisherige Behandlungen</Label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {["Keine", "Hormonbehandlung", "Insemination", "IVF", "Andere"].map((treat) => (
                <div key={treat} className="flex items-center space-x-2 bg-white/50 p-3 rounded-xl border border-primary/5">
                  <Checkbox 
                    id={treat} 
                    checked={prevTreatments.includes(treat)}
                    onCheckedChange={(checked) => handleCheckboxChange("prevTreatments", treat, checked === true)} 
                  />
                  <Label htmlFor={treat} className="text-sm font-medium cursor-pointer">{treat}</Label>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 4. Naturheilpraxis Spezifisch */}
      {areas.includes("naturheilkunde") && (
        <div className="space-y-8 p-8 bg-white rounded-[2.5rem] border border-primary/5 shadow-xl shadow-primary/5 animate-in slide-in-from-right-4 duration-500 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[100px] -z-0" />
          <div className="flex items-center gap-3 mb-6 relative z-10">
             <Battery className="w-6 h-6 text-primary" />
             <h3 className="text-xl font-serif text-primary">Naturheilkundliche Behandlung</h3>
          </div>
          
          <div className="space-y-4 relative z-10">
            <Label className="text-sm font-bold text-primary opacity-60 uppercase">Art der Beschwerden</Label>
            <Select onValueChange={(val) => setValue("complaintType", val)}>
              <SelectTrigger className="h-14 rounded-2xl bg-white border-primary/10">
                <SelectValue placeholder="Bitte wählen..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Akut">Akute Beschwerden</SelectItem>
                <SelectItem value="Chronisch">Chronische Beschwerden</SelectItem>
                <SelectItem value="Prävention">Prävention & Check-up</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4 relative z-10">
            <Label className="text-sm font-bold text-primary opacity-60 uppercase">IHR HAUPTANLIEGEN IN EINEM SATZ</Label>
            <Textarea 
              {...register("mainConcern")} 
              placeholder="Was beschäftigt dich aktuell am meisten?" 
              className="min-h-[120px] rounded-2xl bg-white border-primary/10 p-4"
              maxLength={200}
            />
            <p className="text-[10px] text-right text-muted-foreground font-bold">Max. 200 Zeichen</p>
          </div>
        </div>
      )}
    </div>
  );
}
