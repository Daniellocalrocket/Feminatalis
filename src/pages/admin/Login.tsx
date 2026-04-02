import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Lock, Mail, Loader2, Sparkles } from "lucide-react";
import SEO from "@/components/SEO";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      toast.success("Willkommen zurück, Angela!");
      navigate("/admin");
    } catch (error: any) {
      toast.error(error.message || "Login fehlgeschlagen");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fff9f2] flex items-center justify-center p-4 pt-20">
      <SEO title="Admin Login | Feminatalis" description="Login für den Administrationsbereich von Feminatalis." />
      
      <div className="absolute top-0 left-0 w-full h-1 bg-accent" />
      
      <Card className="w-full max-w-md border-none shadow-2xl rounded-[3rem] overflow-hidden bg-white/80 backdrop-blur-xl">
        <CardHeader className="pt-12 pb-8 text-center space-y-4">
          <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto">
            <Lock className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-serif text-primary">Admin Bereich</h1>
            <p className="text-muted-foreground">Willkommen zurück bei Feminatalis</p>
          </div>
        </CardHeader>
        
        <form onSubmit={handleLogin}>
          <CardContent className="space-y-6 px-10">
            <div className="space-y-2">
              <Label htmlFor="email">E-Mail Adresse</Label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/30" />
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="angela@feminatalis.de" 
                  className="pl-12 h-12 rounded-xl bg-white/50 border-primary/10" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Passwort</Label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/30" />
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="••••••••" 
                  className="pl-12 h-12 rounded-xl bg-white/50 border-primary/10" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
          </CardContent>
          
          <CardFooter className="pb-12 pt-8 px-10">
            <Button 
              type="submit" 
              className="w-full h-14 rounded-2xl bg-primary text-white font-bold text-lg hover:shadow-xl transition-all"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Wird angemeldet...
                </>
              ) : (
                "Jetzt anmelden"
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>
      
      <div className="fixed bottom-8 text-center opacity-30">
        <p className="text-[10px] font-bold uppercase tracking-widest text-primary flex items-center gap-2">
          <Sparkles className="w-3 h-3" /> Feminatalis Admin Panel v1.0
        </p>
      </div>
    </div>
  );
}
