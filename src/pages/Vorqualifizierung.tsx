import React from "react";
import { useSearchParams } from "react-router-dom";
import SEO from "@/components/SEO";
import VorqualifizierungForm from "@/components/vorqualifizierung/VorqualifizierungForm";
import { motion } from "framer-motion";

export default function Vorqualifizierung() {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");
  
  const pageTitle = type === 'naturheilpraxis' 
    ? "Ihre Behandlungsanfrage" 
    : type === 'hebamme' 
    ? "Ihre Betreuungsanfrage" 
    : "Persönliches Kennenlernen";

  return (
    <div className="bg-[#fff9f2] min-h-screen pt-24 pb-24">
      <SEO 
        title={`${pageTitle} | Feminatalis`}
        description="Lernen wir uns kennen. Erzählen Sie mir kurz, womit ich Ihnen helfen darf, damit ich mich optimal auf unser Erstgespräch vorbereiten kann." 
      />
      
      <div className="container mx-auto px-4 max-w-5xl">
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
