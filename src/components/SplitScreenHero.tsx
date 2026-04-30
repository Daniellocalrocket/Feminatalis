import { motion } from "framer-motion";
import { useSiteImages } from "@/hooks/useSiteImages";

interface SplitScreenHeroProps {
  badge: string;
  title: React.ReactNode;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  imageKey?: string;
  children?: React.ReactNode; // CTA buttons
}

export default function SplitScreenHero({ badge, title, subtitle, imageSrc, imageAlt, imageKey, children }: SplitScreenHeroProps) {
  const { getImageUrl } = useSiteImages();
  const finalImageSrc = imageKey ? getImageUrl(imageKey, imageSrc) : imageSrc;
  return (
    <section className="relative pt-32 pb-24 overflow-hidden border-b border-border/50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <span className="bg-primary/10 text-primary px-5 py-2 rounded-full text-xs font-black mb-8 inline-block uppercase tracking-[0.2em] shadow-sm">
              {badge}
            </span>
            <h1 className="text-4xl lg:text-6xl font-serif text-primary mb-8 leading-[1.1] [hyphens:auto] [overflow-wrap:anywhere] break-words">
              {title}
            </h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl">
              {subtitle}
            </p>
            {children && (
              <div className="flex flex-wrap gap-5">
                {children}
              </div>
            )}
          </motion.div>

          {/* Right Column: Atmospheric Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <img
                src={finalImageSrc}
                alt={imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-100 rounded-full -z-10 blur-2xl opacity-60" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
