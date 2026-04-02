import React from "react";
import { useFormContext } from "react-hook-form";
import { SERVICE_AREAS, VorqualifizierungData } from "../schema";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export default function Step1Area() {
  const { watch, setValue, formState: { errors } } = useFormContext<VorqualifizierungData>();
  const selectedAreas = watch("areas") || [];

  const toggleArea = (id: string) => {
    const isSelected = selectedAreas.includes(id);
    if (isSelected) {
      setValue("areas", selectedAreas.filter(a => a !== id), { shouldValidate: true });
    } else {
      setValue("areas", [...selectedAreas, id], { shouldValidate: true });
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-500">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {SERVICE_AREAS.map((area) => {
          const isSelected = selectedAreas.includes(area.id);
          return (
            <button
              key={area.id}
              type="button"
              onClick={() => toggleArea(area.id)}
              className={cn(
                "p-6 rounded-[2rem] border-2 text-left transition-all duration-300 group relative overflow-hidden h-full flex flex-col justify-between",
                isSelected 
                  ? "border-accent bg-accent/5 ring-4 ring-accent/10" 
                  : "border-primary/5 bg-white hover:border-primary/20 hover:bg-muted/30"
              )}
            >
              <div>
                <h3 className={cn(
                  "text-xl font-serif mb-2 transition-colors",
                  isSelected ? "text-accent" : "text-primary"
                )}>
                  {area.label}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {area.description}
                </p>
              </div>
              
              <div className="mt-6 flex justify-end">
                 <div className={cn(
                   "w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all",
                   isSelected ? "border-accent bg-accent text-white" : "border-primary/10 bg-white"
                 )}>
                   {isSelected && <Check className="w-4 h-4" />}
                 </div>
              </div>
            </button>
          );
        })}
      </div>
      
      {errors.areas && (
        <p className="text-red-500 text-sm font-bold text-center mt-4">
          {errors.areas.message}
        </p>
      )}

      {selectedAreas.length > 0 && (
         <div className="bg-orange-100/50 p-6 rounded-3xl border border-accent/20 text-center animate-in zoom-in-95 duration-300">
            <p className="text-primary font-serif italic text-lg leading-relaxed">
              „Sehr gut, damit kann ich helfen! In diesen Bereichen habe ich über 33 Jahre Erfahrung.“
            </p>
         </div>
      )}
    </div>
  );
}
