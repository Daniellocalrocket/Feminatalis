import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

interface TestimonialCardProps {
  name: string;
  story: string;
  image?: string;
}

export function TestimonialCard({ name, story, image }: TestimonialCardProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30
      }}
      className="h-full"
    >
      <Card className="h-full border-none bg-white/40 dark:bg-card/40 backdrop-blur-xl shadow-xl shadow-primary/5 rounded-[2rem] overflow-hidden group transition-all duration-500">
        <CardContent className="p-8 md:p-10 flex flex-col h-full relative">
          {/* Decorative soft glow background */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full -mr-24 -mt-24 blur-3xl transition-opacity group-hover:opacity-100 opacity-60" />
          
          <div className="mb-8 text-primary/20 group-hover:text-primary/40 transition-colors transform group-hover:scale-110 duration-500 origin-left">
            <Quote size={56} strokeWidth={1} />
          </div>

          <blockquote className="flex-grow relative z-10">
            <p className="text-foreground/80 text-lg md:text-xl leading-relaxed font-medium italic mb-10">
              &bdquo;{story}&ldquo;
            </p>
          </blockquote>

          <div className="flex items-center gap-5 pt-10 border-t border-primary/10 relative z-10">
            <div className="relative">
              <Avatar className="h-16 w-16 ring-4 ring-white/80 dark:ring-white/10 shadow-lg">
                {image ? (
                  <AvatarImage src={image} alt={name} className="object-cover" />
                ) : null}
                <AvatarFallback className="bg-secondary text-secondary-foreground font-bold text-lg">
                  {initials}
                </AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-accent rounded-full border-2 border-white dark:border-card flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              </div>
            </div>
            
            <div className="flex flex-col">
              <span className="font-bold text-foreground text-xl tracking-tight">
                {name}
              </span>
              <span className="text-[10px] font-bold text-primary/60 uppercase tracking-[0.2em] mt-0.5">
                Glückliche Mutter
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
