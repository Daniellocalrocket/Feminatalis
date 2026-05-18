import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import AdminLayout from "@/components/admin/AdminLayout";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { ChevronLeft, Plus, Edit, Trash2, Video, FileText, MonitorPlay, Headphones, GripVertical, Save, Trash } from "lucide-react";
import { Course, CourseModule, CourseLesson } from "@/lib/index";

export default function AdminCourseEditor() {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const [course, setCourse] = useState<Course | null>(null);
  const [modules, setModules] = useState<(CourseModule & { lessons: CourseLesson[] })[]>([]);
  const [loading, setLoading] = useState(true);

  // States for modals/inline editing
  const [editingModule, setEditingModule] = useState<CourseModule | null>(null);
  const [editingLesson, setEditingLesson] = useState<CourseLesson | null>(null);

  useEffect(() => {
    if (courseId) {
      fetchCourseData();
    }
  }, [courseId]);

  const fetchCourseData = async () => {
    setLoading(true);
    
    // Fetch Course
    const { data: courseData, error: courseError } = await supabase
      .from("courses")
      .select("*")
      .eq("id", courseId)
      .single();

    if (courseError || !courseData) {
      toast.error("Kurs nicht gefunden.");
      navigate("/admin/courses");
      return;
    }
    setCourse(courseData);

    // Fetch Modules & Lessons
    const { data: modulesData } = await supabase
      .from('course_modules')
      .select('*, course_lessons(*)')
      .eq('course_id', courseId)
      .order('order_index', { ascending: true });

    if (modulesData) {
      const sortedModules = modulesData.map(m => ({
        ...m,
        lessons: m.course_lessons.sort((a: any, b: any) => a.order_index - b.order_index)
      }));
      setModules(sortedModules);
    }
    
    setLoading(false);
  };

  // --- Module Actions ---
  const handleAddModule = async () => {
    const title = prompt("Name des neuen Moduls:");
    if (!title) return;

    const newIndex = modules.length;
    const { data, error } = await supabase
      .from('course_modules')
      .insert([{ course_id: courseId, title, order_index: newIndex }])
      .select()
      .single();

    if (error) toast.error("Fehler: " + error.message);
    else if (data) {
      setModules([...modules, { ...data, lessons: [] }]);
      toast.success("Modul hinzugefügt");
    }
  };

  const handleUpdateModule = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingModule) return;

    const { error } = await supabase
      .from('course_modules')
      .update({ title: editingModule.title, unlock_days: editingModule.unlock_days })
      .eq('id', editingModule.id);

    if (error) {
      toast.error("Fehler beim Speichern: " + error.message);
    } else {
      setModules(modules.map(m => m.id === editingModule.id ? { ...m, ...editingModule } : m));
      setEditingModule(null);
      toast.success("Modul gespeichert");
    }
  };

  const handleDeleteModule = async (id: string) => {
    if (!confirm("Modul und alle Lektionen darin wirklich löschen?")) return;
    
    const { error } = await supabase.from('course_modules').delete().eq('id', id);
    if (error) toast.error("Fehler: " + error.message);
    else {
      setModules(modules.filter(m => m.id !== id));
      toast.success("Modul gelöscht");
    }
  };

  // --- Lesson Actions ---
  const handleAddLesson = async (moduleId: string) => {
    const targetModule = modules.find(m => m.id === moduleId);
    if (!targetModule) return;
    
    const title = prompt("Name der neuen Lektion:");
    if (!title) return;

    const newIndex = targetModule.lessons.length;
    const { data, error } = await supabase
      .from('course_lessons')
      .insert([{ module_id: moduleId, title, content_type: 'video', order_index: newIndex }])
      .select()
      .single();

    if (error) toast.error("Fehler: " + error.message);
    else if (data) {
      setModules(modules.map(m => m.id === moduleId ? { ...m, lessons: [...m.lessons, data] } : m));
      toast.success("Lektion hinzugefügt");
    }
  };

  const handleUpdateLesson = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingLesson) return;

    const { error } = await supabase
      .from('course_lessons')
      .update({ 
        title: editingLesson.title,
        content_type: editingLesson.content_type,
        content_url: editingLesson.content_url,
        description: editingLesson.description
      })
      .eq('id', editingLesson.id);

    if (error) {
      toast.error("Fehler beim Speichern: " + error.message);
    } else {
      setModules(modules.map(m => ({
        ...m,
        lessons: m.lessons.map(l => l.id === editingLesson.id ? { ...l, ...editingLesson } : l)
      })));
      setEditingLesson(null);
      toast.success("Lektion gespeichert");
    }
  };

  const handleDeleteLesson = async (lessonId: string, moduleId: string) => {
    if (!confirm("Lektion wirklich löschen?")) return;
    
    const { error } = await supabase.from('course_lessons').delete().eq('id', lessonId);
    if (error) toast.error("Fehler: " + error.message);
    else {
      setModules(modules.map(m => m.id === moduleId ? {
        ...m,
        lessons: m.lessons.filter(l => l.id !== lessonId)
      } : m));
      toast.success("Lektion gelöscht");
    }
  };

  if (loading) {
    return <AdminLayout title="Kurs Editor"><div className="p-8 text-center text-muted-foreground">Lade Kurs...</div></AdminLayout>;
  }

  return (
    <AdminLayout title="Kurs bearbeiten">
      <div className="space-y-8 max-w-5xl animate-in fade-in duration-500">
        
        <div className="flex items-center gap-4">
          <Link to="/admin/courses">
            <Button variant="outline" size="icon" className="rounded-xl"><ChevronLeft size={20} /></Button>
          </Link>
          <h2 className="text-2xl font-serif text-primary font-bold">Kursinhalte: {course?.title}</h2>
        </div>

        {/* Edit Module / Lesson Overlays (Simple conditional rendering) */}
        {editingModule && (
          <Card className="border-none shadow-xl rounded-[2rem] bg-orange-50 border-orange-200">
            <CardHeader><CardTitle className="text-lg">Modul bearbeiten</CardTitle></CardHeader>
            <CardContent>
              <form onSubmit={handleUpdateModule} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary">Titel</label>
                    <Input 
                      value={editingModule.title} 
                      onChange={e => setEditingModule({...editingModule, title: e.target.value})}
                      className="bg-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary">Freischaltung nach (Tagen)</label>
                    <Input 
                      type="number"
                      value={editingModule.unlock_days} 
                      onChange={e => setEditingModule({...editingModule, unlock_days: parseInt(e.target.value) || 0})}
                      className="bg-white"
                    />
                    <p className="text-xs text-muted-foreground">0 = sofort freigeschaltet. 7 = eine Woche nach Kauf.</p>
                  </div>
                </div>
                <div className="flex gap-2 justify-end">
                  <Button type="button" variant="ghost" onClick={() => setEditingModule(null)}>Abbrechen</Button>
                  <Button type="submit" className="bg-primary hover:bg-primary/90"><Save size={16} className="mr-2" /> Speichern</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {editingLesson && (
          <Card className="border-none shadow-xl rounded-[2rem] bg-blue-50 border-blue-200">
            <CardHeader><CardTitle className="text-lg">Lektion bearbeiten</CardTitle></CardHeader>
            <CardContent>
              <form onSubmit={handleUpdateLesson} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary">Titel der Lektion</label>
                    <Input 
                      value={editingLesson.title} 
                      onChange={e => setEditingLesson({...editingLesson, title: e.target.value})}
                      className="bg-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary">Medien-Typ</label>
                    <select 
                      value={editingLesson.content_type}
                      onChange={e => setEditingLesson({...editingLesson, content_type: e.target.value as any})}
                      className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="video">Vimeo / Video</option>
                      <option value="slides">Slideshow (Iframe)</option>
                      <option value="audio">Audio / Podcast</option>
                      <option value="pdf">PDF Download</option>
                      <option value="text">Nur Text</option>
                    </select>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-bold text-primary">URL (Vimeo Embed Link, Slide Link, etc.)</label>
                    <Input 
                      value={editingLesson.content_url || ""} 
                      onChange={e => setEditingLesson({...editingLesson, content_url: e.target.value})}
                      className="bg-white"
                      placeholder="https://player.vimeo.com/video/123456789"
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-bold text-primary">Beschreibungstext (HTML erlaubt)</label>
                    <Textarea 
                      value={editingLesson.description || ""} 
                      onChange={e => setEditingLesson({...editingLesson, description: e.target.value})}
                      className="bg-white min-h-[150px]"
                    />
                  </div>
                </div>
                <div className="flex gap-2 justify-end">
                  <Button type="button" variant="ghost" onClick={() => setEditingLesson(null)}>Abbrechen</Button>
                  <Button type="submit" className="bg-primary hover:bg-primary/90"><Save size={16} className="mr-2" /> Speichern</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Module List */}
        <div className="space-y-6">
          {modules.map((module, mIdx) => (
            <Card key={module.id} className="border-none shadow-lg shadow-primary/5 rounded-[2rem] overflow-hidden border border-primary/10 bg-white/50 backdrop-blur-sm">
              {/* Module Header */}
              <div className="bg-white p-5 border-b border-primary/10 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="cursor-move text-muted-foreground hover:text-primary"><GripVertical size={20} /></div>
                  <div>
                    <h3 className="font-bold text-primary text-lg">Modul {mIdx + 1}: {module.title}</h3>
                    <p className="text-xs text-muted-foreground">
                      {module.unlock_days > 0 ? `Freischaltung nach ${module.unlock_days} Tagen` : 'Sofort freigeschaltet'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm" onClick={() => setEditingModule(module)} className="rounded-xl"><Edit size={16} /></Button>
                  <Button variant="ghost" size="sm" onClick={() => handleDeleteModule(module.id)} className="text-red-500 rounded-xl hover:bg-red-50"><Trash size={16} /></Button>
                </div>
              </div>

              {/* Lessons List */}
              <div className="p-5 bg-primary/[0.02]">
                <div className="space-y-2 mb-4">
                  {module.lessons.map((lesson, lIdx) => (
                    <div key={lesson.id} className="flex items-center justify-between p-3 bg-white rounded-xl border border-primary/5 shadow-sm group">
                      <div className="flex items-center gap-4">
                        <div className="cursor-move text-muted-foreground opacity-50 hover:opacity-100"><GripVertical size={16} /></div>
                        <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center text-primary/60 shrink-0">
                          {lesson.content_type === 'video' ? <Video size={14} /> : 
                           lesson.content_type === 'slides' ? <MonitorPlay size={14} /> : 
                           lesson.content_type === 'audio' ? <Headphones size={14} /> : <FileText size={14} />}
                        </div>
                        <div>
                          <p className="font-medium text-sm text-primary">{lIdx + 1}. {lesson.title}</p>
                          <p className="text-[10px] text-muted-foreground uppercase">{lesson.content_type}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button variant="ghost" size="sm" onClick={() => setEditingLesson(lesson)} className="h-8 px-2 rounded-lg"><Edit size={14} /></Button>
                        <Button variant="ghost" size="sm" onClick={() => handleDeleteLesson(lesson.id, module.id)} className="h-8 px-2 text-red-500 rounded-lg"><Trash2 size={14} /></Button>
                      </div>
                    </div>
                  ))}
                  {module.lessons.length === 0 && (
                    <p className="text-sm text-muted-foreground italic p-2">Noch keine Lektionen in diesem Modul.</p>
                  )}
                </div>
                <Button variant="outline" size="sm" onClick={() => handleAddLesson(module.id)} className="w-full border-dashed rounded-xl h-10 hover:bg-primary/5">
                  <Plus size={16} className="mr-2" /> Lektion hinzufügen
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <Button onClick={handleAddModule} className="w-full h-14 rounded-2xl border-2 border-dashed border-primary/20 bg-transparent text-primary hover:bg-primary/5 font-bold text-lg">
          <Plus size={24} className="mr-2" />
          Neues Modul anlegen
        </Button>

      </div>
    </AdminLayout>
  );
}
