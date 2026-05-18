import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { PlayCircle, GraduationCap, Lock, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function CourseDashboard() {
  const [enrollments, setEnrollments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    checkAuthAndFetch();
  }, []);

  const checkAuthAndFetch = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      toast.error("Bitte logge dich ein, um deine Kurse zu sehen.");
      navigate("/kurs/login"); // We will need a login page for customers
      return;
    }

    setUserEmail(session.user.email || "");

    const { data, error } = await supabase
      .from('course_enrollments')
      .select('*, courses(*)')
      .eq('user_id', session.user.id);

    if (error) {
      toast.error("Fehler beim Laden deiner Kurse");
    } else {
      setEnrollments(data || []);
    }
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/kurs/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FFF9F2] flex items-center justify-center">
        <div className="animate-spin w-12 h-12 border-4 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF9F2] font-sans">
      {/* Header */}
      <header className="bg-white border-b border-primary/10 sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <Link to="/" className="font-serif text-2xl text-primary font-bold">Feminatalis</Link>
          <div className="flex items-center gap-4">
            <div className="hidden sm:block text-sm text-muted-foreground">{userEmail}</div>
            <Button variant="ghost" className="text-muted-foreground hover:text-red-500" onClick={handleLogout}>
              <LogOut size={18} className="mr-2" />
              Abmelden
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-primary font-bold mb-4">Dein Lernbereich</h1>
          <p className="text-lg text-muted-foreground">Willkommen zurück. Hier findest du alle deine gebuchten Premium-Programme.</p>
        </div>

        {enrollments.length === 0 ? (
          <Card className="border-none shadow-xl shadow-primary/5 rounded-[2rem] bg-white text-center py-20">
            <CardContent className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-primary/5 flex items-center justify-center mb-6 text-primary/40">
                <GraduationCap size={48} />
              </div>
              <h3 className="text-2xl font-serif text-primary font-bold mb-2">Keine aktiven Kurse</h3>
              <p className="text-muted-foreground mb-8 max-w-md">Du bist aktuell in keinem Programm eingeschrieben. Entdecke unsere ganzheitlichen Begleitungen für deine Gesundheit.</p>
              <Link to="/hebammenpraxis/geburtsvorbereitung/zellkraft-kurs">
                <Button className="h-14 px-8 rounded-full bg-primary hover:bg-primary/90 font-bold">
                  Programme entdecken
                </Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enrollments.map((enrollment) => {
              const course = enrollment.courses;
              if (!course) return null;
              
              // Define brand colors based on theme_color if we wanted, defaulting to primary
              const isFruchtbarkeit = course.slug.includes("fruchtbarkeit") || course.slug.includes("zellkraft-roadmap");
              
              return (
                <Card key={enrollment.id} className="border-none shadow-xl shadow-primary/5 rounded-[2rem] overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-300">
                  <div className="h-48 bg-accent relative overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-black/20" />
                    <GraduationCap size={64} className="text-white/30 absolute -right-4 -bottom-4 transform rotate-12" />
                    <h3 className="relative z-10 text-white font-serif text-2xl font-bold px-6 text-center shadow-sm">{course.title}</h3>
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground mb-4">
                        Eingeschrieben seit: {new Date(enrollment.enrolled_at).toLocaleDateString("de-DE")}
                      </p>
                      {/* Hier könnte später ein echter Fortschrittsbalken rein */}
                      <div className="mb-6">
                        <div className="flex justify-between text-xs mb-2 font-bold text-primary">
                          <span>Fortschritt</span>
                          <span>0%</span>
                        </div>
                        <div className="h-2 bg-primary/10 rounded-full overflow-hidden">
                          <div className="h-full bg-accent w-0" />
                        </div>
                      </div>
                    </div>
                    
                    <Link to={`/lms/${course.slug}`}>
                      <Button className="w-full h-14 rounded-xl bg-primary hover:bg-primary/90 font-bold group">
                        <PlayCircle size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                        Kurs fortsetzen
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
