import React from "react";
import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "@/lib/index";
import { ArrowRight, Gem } from "lucide-react";

interface PreisTransparenzProps {
  /** Short teaser, e.g. "Erstberatung ab 120 €" */
  preisHint?: string;
  /** Additional context line */
  hinweis?: string;
}

/**
 * Reusable CTA module linking to the Preisliste page.
 * Drop this anywhere on a treatment page to create a trust anchor.
 */
export default function PreisTransparenz({ 
  preisHint = "Transparente Preisgestaltung", 
  hinweis 
}: PreisTransparenzProps) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-gradient-to-br from-muted/40 to-muted/10 border border-border rounded-[3rem] p-10 lg:p-14 flex flex-col md:flex-row items-center gap-8 md:gap-12 shadow-sm">
          <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
            <Gem className="w-8 h-8 text-accent" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <p className="text-2xl font-serif font-bold text-primary mb-2">{preisHint}</p>
            {hinweis && (
              <p className="text-sm text-muted-foreground font-medium">{hinweis}</p>
            )}
          </div>
          <Link
            to={ROUTE_PATHS.PREISLISTE}
            className="bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:shadow-xl transition-all active:scale-95 flex items-center gap-3 shrink-0 text-sm"
          >
            Alle Preise & Pakete <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
