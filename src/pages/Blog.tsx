import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Search, Tag, BookOpen, Sparkles } from "lucide-react";
import { IMAGES } from "@/assets/images";
import { ROUTE_PATHS, formatDate } from "@/lib";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: "Fruchtbarkeit" | "Ernährung" | "Mindset" | "Naturheilkunde";
  date: string;
  readTime: string;
  image: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Die Top 5 Superfoods für deine Eizellqualität",
    excerpt: "Erfahre, wie spezifische Nährstoffe die Qualität deiner Eizellen positiv beeinflussen können und welche Lebensmittel in deinem Speiseplan nicht fehlen dürfen.",
    category: "Ernährung",
    date: "2026-02-10",
    readTime: "6 min",
    image: IMAGES.WELLNESS_NATURAL_2,
  },
  {
    id: "2",
    title: "Warum Entspannung kein Luxus, sondern Notwendigkeit ist",
    excerpt: "Stress ist einer der größten Faktoren, die deinen Kinderwunsch negativ beeinflussen können. Wir zeigen dir effektive Techniken zur Stressbewältigung.",
    category: "Mindset",
    date: "2026-01-28",
    readTime: "8 min",
    image: IMAGES.PREGNANCY_WELLNESS_9,
  },
  {
    id: "3",
    title: "Hormonbalance natürlich unterstützen mit Kräutern",
    excerpt: "Die Naturheilkunde bietet sanfte Wege, um den Hormonhaushalt zu regulieren. Von Mönchspfeffer bis Frauenmantel - wir erklären die Wirkung.",
    category: "Naturheilkunde",
    date: "2026-01-15",
    readTime: "10 min",
    image: IMAGES.WELLNESS_NATURAL_1,
  },
  {
    id: "4",
    title: "Zyklustracking: Mehr als nur Temperatur messen",
    excerpt: "Lerne die Signale deines Körpers richtig zu deuten. Ein tiefer Einblick in die symptothermale Methode und moderne Tracking-Tools.",
    category: "Fruchtbarkeit",
    date: "2025-12-20",
    readTime: "7 min",
    image: IMAGES.FERTILITY_HERO_6,
  },
  {
    id: "5",
    title: "Die Rolle des Partners im Kinderwunschprozess",
    excerpt: "Ein unerfüllter Kinderwunsch betrifft beide. Wie Paare gemeinsam stark bleiben und wie auch die männliche Fruchtbarkeit optimiert werden kann.",
    category: "Mindset",
    date: "2025-12-05",
    readTime: "5 min",
    image: IMAGES.MOTHER_BABY_4,
  },
  {
    id: "6",
    title: "Detox für die Fruchtbarkeit: Sanft entgiften",
    excerpt: "Umweltgifte können die Fortpflanzungsorgane belasten. Ein sanfter Detox-Plan kann helfen, den Körper optimal auf eine Schwangerschaft vorzubereiten.",
    category: "Naturheilkunde",
    date: "2025-11-18",
    readTime: "9 min",
    image: IMAGES.WELLNESS_NATURAL_6,
  }
];

const CATEGORIES = ["Alle", "Fruchtbarkeit", "Ernährung", "Mindset", "Naturheilkunde"];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("Alle");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesCategory = activeCategory === "Alle" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.WELLNESS_NATURAL_2}
            alt="Natural Wellness"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary uppercase tracking-widest px-4 py-1">
              Magazin
            </Badge>
            <h1 className="text-4xl md:text-6xl font-serif text-foreground mb-6 italic">
              Wissen & Inspiration
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Begleitung auf deinem Weg zum Wunschkind mit fundiertem Fachwissen,
              naturheilkundlichen Tipps und emotionaler Unterstützung.
            </p>
          </motion.div>

          {/* Search & Filter */}
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={20} />
              <Input
                type="text"
                placeholder="Suche nach Themen..."
                className="pl-12 h-14 bg-card/50 backdrop-blur-sm border-border focus-visible:ring-primary rounded-2xl text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${activeCategory === cat
                      ? "bg-primary text-primary-foreground border-primary shadow-lg"
                      : "bg-card/50 text-muted-foreground border-border hover:border-primary/50 hover:bg-primary/5"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="container mx-auto px-4">
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group h-full flex flex-col overflow-hidden border-border bg-card/30 backdrop-blur-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 rounded-2xl">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-background/80 backdrop-blur-md text-foreground border-none hover:bg-background">
                        {post.category}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="pt-6">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {formatDate(post.date)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {post.readTime}
                      </span>
                    </div>
                    <CardTitle className="text-xl font-semibold leading-tight group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground line-clamp-3 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                  </CardContent>

                  <CardFooter className="pt-2 pb-6">
                    <Button variant="ghost" className="p-0 text-primary hover:text-primary/80 hover:bg-transparent group/btn font-semibold">
                      Weiterlesen
                      <ArrowRight className="ml-2 transition-transform group-hover/btn:translate-x-1" size={16} />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <BookOpen className="mx-auto text-muted-foreground mb-4 opacity-20" size={64} />
            <h3 className="text-2xl font-semibold text-foreground mb-2">Keine Artikel gefunden</h3>
            <p className="text-muted-foreground">Versuche es mit einem anderen Suchbegriff oder einer anderen Kategorie.</p>
            <Button
              variant="outline"
              className="mt-6 rounded-full"
              onClick={() => { setActiveCategory("Alle"); setSearchQuery(""); }}
            >
              Alle Artikel anzeigen
            </Button>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 mt-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2.5rem] bg-secondary/10 border border-secondary/20 p-8 md:p-16 text-center"
        >
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-secondary/20 rounded-full blur-3xl" />

          <div className="relative z-10">
            <Sparkles className="mx-auto text-primary mb-6" size={32} />
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Willst du tiefer eintauchen?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Mein Onlinekurs bietet dir eine strukturierte Schritt-für-Schritt Begleitung,
              um deine Fruchtbarkeit ganzheitlich zu unterstützen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90 shadow-lg px-8">
                <Link to={ROUTE_PATHS.COURSE}>Zum Onlinekurs</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full border-primary text-primary hover:bg-primary/5 px-8">
                <Link to={ROUTE_PATHS.CONTACT}>Persönliche Beratung</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Newsletter Placeholder */}
      <section className="container mx-auto px-4 mt-24 text-center">
        <div className="max-w-xl mx-auto">
          <Tag className="mx-auto text-accent mb-4" size={24} />
          <h3 className="text-2xl font-serif mb-4">Bleibe informiert</h3>
          <p className="text-muted-foreground mb-8">
            Melde dich für meinen Newsletter an und erhalte regelmäßig wertvolle Impulse direkt in dein Postfach.
          </p>
          <div className="flex gap-2">
            <Input placeholder="Deine E-Mail Adresse" className="rounded-full bg-card" />
            <Button className="rounded-full">Anmelden</Button>
          </div>
          <p className="text-[10px] text-muted-foreground mt-4">
            Durch die Anmeldung akzeptierst du unsere Datenschutzbestimmungen. Abmeldung jederzeit möglich.
          </p>
        </div>
      </section>
    </div>
  );
}
