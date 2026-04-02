import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PlayCircle, CheckCircle2, ArrowRight, BookOpen } from "lucide-react";
import { IMAGES } from "@/assets/images";
import { ROUTE_PATHS } from "@/lib";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

interface CourseCardProps {
  title: string;
  description: string;
  progress?: number;
  isEnrolled?: boolean;
}

export function CourseCard({
  title,
  description,
  progress = 0,
  isEnrolled = false,
}: CourseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="h-full"
    >
      <Card className="group h-full flex flex-col overflow-hidden border-border bg-card shadow-sm hover:shadow-xl transition-all duration-300">
        <CardHeader className="p-0 relative aspect-video overflow-hidden">
          <img
            src={isEnrolled ? IMAGES.ONLINE_COURSE_1 : IMAGES.FERTILITY_HERO_1}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <PlayCircle className="w-12 h-12 text-primary drop-shadow-lg" />
          </div>
          {isEnrolled && (
            <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground backdrop-blur-md border-none">
              In Bearbeitung
            </Badge>
          )}
          {!isEnrolled && (
            <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
              Neu
            </Badge>
          )}
        </CardHeader>

        <CardContent className="flex-1 p-6">
          <div className="flex items-center gap-2 mb-3 text-muted-foreground text-xs font-mono uppercase tracking-wider">
            <BookOpen className="w-4 h-4 text-primary" />
            <span>Online-Kurs</span>
          </div>
          <h3 className="text-xl font-semibold mb-3 leading-tight group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
            {description}
          </p>

          {isEnrolled && (
            <div className="mt-6 space-y-2">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-muted-foreground">Fortschritt</span>
                <span className="text-primary font-mono">{progress}%</span>
              </div>
              <Progress value={progress} className="h-1.5 bg-muted">
                <div
                  className="h-full bg-primary transition-all"
                  style={{ width: `${progress}%` }}
                />
              </Progress>
            </div>
          )}
        </CardContent>

        <CardFooter className="p-6 pt-0">
          {isEnrolled ? (
            <Button asChild className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-sm">
              <Link to={ROUTE_PATHS.COURSE} className="flex items-center justify-center gap-2">
                Kurs fortsetzen
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          ) : (
            <Button asChild variant="outline" className="w-full border-primary/20 hover:bg-primary/5 text-primary group/btn">
              <Link to={ROUTE_PATHS.COURSE} className="flex items-center justify-center gap-2">
                Details ansehen
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </Button>
          )}
        </CardFooter>

        {progress === 100 && (
          <div className="absolute top-4 left-4">
            <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 p-1.5 rounded-full shadow-sm">
              <CheckCircle2 className="w-5 h-5" />
            </div>
          </div>
        )}
      </Card>
    </motion.div>
  );
}
