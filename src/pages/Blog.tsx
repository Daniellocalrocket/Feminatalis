import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Search, Tag, BookOpen, Sparkles } from "lucide-react";
import { IMAGES } from "@/assets/images";
import { ROUTE_PATHS, formatDate } from "@/lib";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import SEO from "@/components/SEO";

const CATEGORIES = ["Alle", "Allgemein", "Hebammenpraxis", "Naturheilkunde", "Kinderwunsch", "Tipps & Tricks"];

export default function Blog() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "feminatalis Magazin",
    "description": "Wissen & Inspiration rund um Kinderwunsch, Hebammenpraxis und Naturheilkunde von Angela Deschner.",
    "publisher": {
      "@type": "Person",
      "name": "Angela Deschner"
    },
    "url": "https://feminatalis.de/magazin"
  };

  const [activeCategory, setActiveCategory] = useState("Alle");
  const [searchQuery, setSearchQuery] = useState("");
  const [posts, setPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('is_published', true)
        .order('date', { ascending: false });

      if (error) {
        console.error("Error fetching posts:", error);
      } else {
        setPosts(data || []);
      }
      setIsLoading(false);
    };

    fetchPosts();
  }, []);

  const filteredPosts = posts.filter(post => {
    const categoryMatch = post.category || "Allgemein";
    const matchesCategory = activeCategory === "Alle" || categoryMatch === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (post.excerpt && post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-background pb-20" role="main">
      <SEO 
        title="Magazin | Wissen zu Kinderwunsch & Naturheilkunde" 
        description="Entdecken Sie fundierte Artikel über ganzheitliche Frauengesundheit, Hebammenwissen und natürliche Wege zum Wunschkind."
        schema={blogSchema}
      />
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
                  aria-pressed={activeCategory === cat}
                  aria-label={`Kategorie filtern nach: ${cat}`}
                  className={`px-6 py-2 rounded-full text-base font-medium transition-all duration-300 border focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none ${activeCategory === cat
                      ? "bg-primary text-primary-foreground border-primary shadow-lg"
                      : "bg-card/50 text-foreground/80 border-border hover:border-primary/50 hover:bg-primary/5"
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
        {isLoading ? (
          <div className="text-center py-20 flex flex-col items-center gap-4 text-muted-foreground animate-pulse">
            <BookOpen className="w-12 h-12 opacity-20" />
            <p>Lade Artikel...</p>
          </div>
        ) : filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={ROUTE_PATHS.BLOG_POST.replace(':slug', post.slug)} className="block h-full">
                  <Card className="group h-full flex flex-col overflow-hidden border-border bg-card/30 backdrop-blur-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 rounded-2xl cursor-pointer">
                    <div className="relative aspect-[16/10] overflow-hidden bg-muted/30 flex items-center justify-center">
                      {post.image_url ? (
                        <img
                          src={post.image_url}
                          alt={`Titelbild für den Artikel: ${post.title}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <BookOpen className="w-12 h-12 text-muted-foreground/30" />
                      )}
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-background/80 backdrop-blur-md text-foreground border-none shadow-sm hover:bg-background">
                          {post.category || "Allgemein"}
                        </Badge>
                      </div>
                    </div>

                    <CardHeader className="pt-6">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {formatDate(post.date)}
                        </span>
                      </div>
                      <CardTitle className="text-xl font-semibold leading-tight group-hover:text-primary transition-colors">
                        {post.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="flex-grow">
                      <p className="text-foreground/80 line-clamp-3 text-base leading-relaxed">
                        {post.excerpt || "Lesen Sie mehr über dieses Thema in unserem Magazin."}
                      </p>
                    </CardContent>

                    <CardFooter className="pt-2 pb-6">
                      <span className="text-primary hover:text-primary/80 font-semibold flex items-center group-hover:underline focus-visible:ring-2 focus-visible:ring-primary">
                        Weiterlesen
                        <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={16} aria-hidden="true" />
                      </span>
                    </CardFooter>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-muted/10 rounded-3xl border border-border max-w-2xl mx-auto">
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
                <Link to={ROUTE_PATHS.KURS}>Zum Onlinekurs</Link>
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
          <Tag className="mx-auto text-accent mb-4" size={24} aria-hidden="true" />
          <h3 className="text-2xl font-serif mb-4">Bleibe informiert</h3>
          <p className="text-foreground/80 text-lg mb-8">
            Melde dich für meinen Newsletter an und erhalte regelmäßig wertvolle Impulse direkt in dein Postfach.
          </p>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <Input 
              placeholder="Deine E-Mail Adresse" 
              className="rounded-full bg-card focus-visible:ring-2 focus-visible:ring-primary" 
              aria-label="E-Mail Adresse für Newsletter"
              type="email"
            />
            <Button className="rounded-full focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary" type="submit">Anmelden</Button>
          </form>
          <p className="text-xs text-foreground/60 mt-4">
            Durch die Anmeldung akzeptierst du unsere Datenschutzbestimmungen. Abmeldung jederzeit möglich.
          </p>
        </div>
      </section>
    </main>
  );
}
