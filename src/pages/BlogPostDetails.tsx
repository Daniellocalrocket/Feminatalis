import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Tag, BookOpen } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { ROUTE_PATHS, formatDate } from "@/lib";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

export default function BlogPostDetails() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;
      
      setIsLoading(true);
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('is_published', true)
        .single();

      if (error) {
        console.error("Error fetching post:", error);
      } else {
        setPost(data);
      }
      setIsLoading(false);
    };

    fetchPost();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background pt-32 pb-20 flex justify-center">
        <div className="flex flex-col items-center gap-4 text-muted-foreground animate-pulse">
          <BookOpen className="w-12 h-12 opacity-20" />
          <p>Lade Artikel...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background pt-32 pb-20 flex justify-center text-center px-4">
        <div className="max-w-md">
          <BookOpen className="w-16 h-16 mx-auto opacity-10 mb-6" />
          <h1 className="text-3xl font-serif text-primary mb-4">Artikel nicht gefunden</h1>
          <p className="text-muted-foreground mb-8">
            Dieser Beitrag existiert leider nicht oder wurde offline genommen.
          </p>
          <Button asChild className="rounded-full bg-primary text-white">
            <Link to={ROUTE_PATHS.BLOG}>
              <ArrowLeft className="mr-2" size={16} />
              Zurück zum Magazin
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background pb-20" role="main">
      <article>
      {/* Hero Header */}
      <header className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {post.image_url && (
            <img
              src={post.image_url}
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover opacity-10 blur-sm"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Button asChild variant="ghost" className="mb-8 text-foreground/80 hover:text-primary rounded-full focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
              <Link to={ROUTE_PATHS.BLOG} aria-label="Zurück zur Blog-Übersicht">
                <ArrowLeft className="mr-2" size={16} aria-hidden="true" /> Zurück zur Übersicht
              </Link>
            </Button>
            
            <div className="flex justify-center mb-6">
              <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors uppercase tracking-widest px-4 py-1">
                {post.category || "Magazin"}
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center justify-center gap-6 text-base text-foreground/80 font-medium">
              <span className="flex items-center gap-2">
                <Calendar size={18} className="text-primary/80" aria-hidden="true" />
                <time dateTime={new Date(post.date).toISOString()}>{formatDate(post.date)}</time>
              </span>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Hero Image */}
      {post.image_url && (
        <section className="container mx-auto px-4 mb-16 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="aspect-video md:aspect-[21/9] rounded-[2rem] overflow-hidden shadow-2xl border border-border"
          >
            <img
              src={post.image_url}
              alt={`Titelbild für den Artikel: ${post.title}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </section>
      )}

      {/* Content */}
      <section className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          {post.excerpt && (
            <div className="text-2xl md:text-3xl font-serif italic text-foreground/80 border-l-4 border-primary/40 pl-6 mb-12 leading-relaxed">
              {post.excerpt}
            </div>
          )}
          
          <div 
            className="prose prose-xl md:prose-2xl dark:prose-invert prose-p:text-xl md:prose-p:text-2xl prose-p:leading-loose prose-headings:font-serif prose-headings:text-primary prose-a:text-accent hover:prose-a:text-accent/80 focus-visible:prose-a:ring-2 focus-visible:prose-a:ring-primary max-w-none text-foreground/90"
            dangerouslySetInnerHTML={{ __html: post.content_html || "" }}
          />
          
        </motion.div>
      </section>
      
      {/* Share / Tags section could go here */}
      </article>
    </main>
  );
}
