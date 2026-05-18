import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Lock, LogIn, ArrowLeft } from "lucide-react";
import { toast } from "sonner";

export default function LMSLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      toast.error("Login fehlgeschlagen: " + error.message);
    } else {
      toast.success("Erfolgreich eingeloggt!");
      navigate("/lms");
    }
    
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#FFF9F2] flex items-center justify-center p-4 font-sans">
      <Link 
        to="/" 
        className="absolute top-8 left-8 flex items-center text-primary/60 hover:text-primary transition-colors font-medium"
      >
        <ArrowLeft className="mr-2" size={20} />
        Zurück zur Webseite
      </Link>

      <div className="w-full max-w-md animate-in fade-in duration-500 zoom-in-95">
        <div className="text-center mb-8">
          <h1 className="font-serif text-4xl text-primary font-bold mb-2">Feminatalis</h1>
          <p className="text-muted-foreground text-lg tracking-wide uppercase font-medium">Premium Kursbereich</p>
        </div>

        <Card className="border-none shadow-2xl shadow-primary/10 rounded-[2.5rem] bg-white overflow-hidden">
          <CardContent className="p-10">
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary ml-1">E-Mail Adresse</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <Input 
                    type="email" 
                    placeholder="deine@email.de" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="pl-12 h-14 rounded-2xl bg-[#FFF9F2] border-none focus-visible:ring-1 focus-visible:ring-accent"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary ml-1">Passwort</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <Input 
                    type="password" 
                    placeholder="••••••••" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="pl-12 h-14 rounded-2xl bg-[#FFF9F2] border-none focus-visible:ring-1 focus-visible:ring-accent"
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                disabled={loading} 
                className="w-full h-14 rounded-full font-bold text-lg bg-accent hover:bg-[#e07500] text-white shadow-xl shadow-accent/20 transition-all hover:-translate-y-0.5 mt-4"
              >
                {loading ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>Einloggen <LogIn className="ml-2 w-5 h-5" /></>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
        
        <p className="text-center text-sm text-muted-foreground mt-8">
          Noch keinen Zugang? <Link to="/hebammenpraxis/geburtsvorbereitung/zellkraft-kurs" className="text-accent font-bold hover:underline">Kurse entdecken</Link>
        </p>
      </div>
    </div>
  );
}
