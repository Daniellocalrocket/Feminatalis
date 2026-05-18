import React, { useEffect, useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Edit, Trash2, Globe, Lock, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { Course } from "@/lib/index";

export default function AdminCourses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [newTitle, setNewTitle] = useState("");
  const [isCreating, setIsCreating] = useState(false);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("courses")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast.error("Fehler beim Laden der Kurse: " + error.message);
    } else {
      setCourses(data || []);
    }
    setLoading(false);
  };

  const handleCreateCourse = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    setIsCreating(true);
    const slug = newTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

    const { data, error } = await supabase
      .from("courses")
      .insert([{ title: newTitle, slug }])
      .select()
      .single();

    if (error) {
      toast.error("Fehler beim Erstellen: " + error.message);
    } else if (data) {
      toast.success("Kurs erfolgreich erstellt!");
      setNewTitle("");
      setCourses([data, ...courses]);
    }
    setIsCreating(false);
  };

  const togglePublish = async (course: Course) => {
    const { error } = await supabase
      .from("courses")
      .update({ published: !course.published })
      .eq("id", course.id);

    if (error) {
      toast.error("Fehler beim Speichern: " + error.message);
    } else {
      setCourses(courses.map(c => c.id === course.id ? { ...c, published: !c.published } : c));
      toast.success(course.published ? "Kurs auf Entwurf gesetzt." : "Kurs veröffentlicht!");
    }
  };

  const deleteCourse = async (id: string) => {
    if (!confirm("Diesen Kurs und alle zugehörigen Module wirklich löschen? Dies kann nicht rückgängig gemacht werden.")) return;
    
    const { error } = await supabase
      .from("courses")
      .delete()
      .eq("id", id);

    if (error) {
      toast.error("Fehler beim Löschen: " + error.message);
    } else {
      setCourses(courses.filter(c => c.id !== id));
      toast.success("Kurs gelöscht");
    }
  };

  return (
    <AdminLayout title="LMS Kurse verwalten">
      <div className="space-y-8 max-w-5xl animate-in fade-in duration-500">
        
        <Card className="border-none shadow-xl shadow-primary/5 rounded-[2rem] bg-white">
          <CardHeader className="p-8 pb-4">
            <CardTitle className="text-xl font-serif text-primary">Neuen Kurs anlegen</CardTitle>
          </CardHeader>
          <CardContent className="p-8 pt-0">
            <form onSubmit={handleCreateCourse} className="flex gap-4">
              <Input 
                placeholder="Z.B. Der Zellkraft-Geburtskompass" 
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="rounded-xl h-12"
                disabled={isCreating}
              />
              <Button type="submit" disabled={!newTitle.trim() || isCreating} className="h-12 px-8 rounded-xl font-bold bg-accent hover:bg-[#e07500]">
                <Plus size={20} className="mr-2" />
                Erstellen
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <h3 className="text-xl font-serif text-primary px-2">Vorhandene Kurse</h3>
          
          {loading ? (
            <div className="p-8 text-center text-muted-foreground">Lade Kurse...</div>
          ) : courses.length === 0 ? (
            <Card className="border-dashed border-2 border-primary/20 shadow-none bg-transparent">
              <CardContent className="p-16 text-center text-muted-foreground flex flex-col items-center">
                <GraduationCap size={48} className="mb-4 opacity-20" />
                <p>Noch keine Kurse vorhanden.</p>
                <p className="text-sm">Erstelle oben deinen ersten Kurs.</p>
              </CardContent>
            </Card>
          ) : (
            courses.map(course => (
              <Card key={course.id} className="border-none shadow-lg shadow-primary/5 rounded-3xl overflow-hidden hover:shadow-xl transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between p-6">
                  <div className="flex items-center gap-6 mb-4 md:mb-0">
                    <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary">
                      <GraduationCap size={28} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-primary mb-1">{course.title}</h4>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          {course.published ? (
                            <><Globe size={14} className="text-green-500" /> Veröffentlicht</>
                          ) : (
                            <><Lock size={14} /> Entwurf</>
                          )}
                        </span>
                        <span>URL: /lms/{course.slug}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 border-t md:border-t-0 pt-4 md:pt-0">
                    <Button 
                      variant="outline" 
                      onClick={() => togglePublish(course)}
                      className="rounded-xl"
                    >
                      {course.published ? "Verbergen" : "Veröffentlichen"}
                    </Button>
                    
                    <Link to={`/admin/courses/${course.id}`}>
                      <Button className="rounded-xl gap-2">
                        <Edit size={16} /> Bearbeiten
                      </Button>
                    </Link>
                    
                    <Button 
                      variant="ghost" 
                      onClick={() => deleteCourse(course.id)}
                      className="text-red-500 hover:text-red-600 hover:bg-red-50 rounded-xl px-3"
                    >
                      <Trash2 size={20} />
                    </Button>
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>
      </div>
    </AdminLayout>
  );
}
