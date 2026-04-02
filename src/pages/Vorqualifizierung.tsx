import React from "react";
import SEO from "@/components/SEO";
import VorqualifizierungForm from "@/components/vorqualifizierung/VorqualifizierungForm";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Vorqualifizierung() {
  return (
    <div className="bg-[#fff9f2] min-h-screen pt-32 pb-24">
      <SEO 
        title="Persönliche Vorqualifizierung" 
        description="Lernen wir uns kennen. Erzählen Sie mir kurz, womit ich Ihnen helfen darf, damit ich mich optimal auf unser Erstgespräch vorbereiten kann." 
      />
      
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 space-y-6"
        >
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-5 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] shadow-sm">
             <Heart className="w-4 h-4 fill-current" /> Vorqualifizierung
          </div>
          <h1 className="text-5xl lg:text-7xl font-serif text-primary leading-[1.1]">
            Lernen wir <br />
            <span className="text-orange-600">uns kennen</span>
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Erzählen Sie mir kurz, womit ich Ihnen helfen darf. Ich melde mich persönlich bei Ihnen zurück.
          </p>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2 }}
           className="relative"
        >
           {/* Decorative elements */}
           <div className="absolute -top-12 -left-12 w-48 h-48 bg-orange-200/20 rounded-full blur-[80px] -z-10" />
           <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -z-10" />
           
           <div className="bg-white/80 backdrop-blur-xl p-8 md:p-16 rounded-[4rem] border border-white shadow-2xl shadow-primary/5">
              <VorqualifizierungForm />
           </div>
        </motion.div>

        <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 opacity-50">
           <div className="text-center">
              <p className="text-3xl font-serif font-bold text-primary mb-1">33 Jahre</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-primary/60">Expertise</p>
           </div>
           <div className="text-center">
              <p className="text-3xl font-serif font-bold text-primary mb-1">100%</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-primary/60">Persönlich</p>
           </div>
           <div className="text-center">
              <p className="text-3xl font-serif font-bold text-primary mb-1">Sicher</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-primary/60">SSL Verschlüsselt</p>
           </div>
        </div>
      </div>
    </div>
  );
}
