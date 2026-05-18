import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronLeft, CheckCircle, Lock, PlayCircle, FileText, Headphones, MonitorPlay } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Course, CourseModule, CourseLesson } from "@/lib/index";

export default function CourseViewer() {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const [loading, setLoading] = useState(true);
  const [course, setCourse] = useState<Course | null>(null);
  const [modules, setModules] = useState<(CourseModule & { lessons: CourseLesson[] })[]>([]);
  const [progress, setProgress] = useState<string[]>([]); // Array of completed lesson IDs
  
  const [activeLesson, setActiveLesson] = useState<CourseLesson | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    fetchCourseData();
  }, [slug]);

  const fetchCourseData = async () => {
    setLoading(true);
    // 1. Get Session
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate("/kurs/login");
      return;
    }

    // 2. Get Course
    const { data: courseData, error: courseError } = await supabase
      .from('courses')
      .select('*')
      .eq('slug', slug)
      .single();

    if (courseError || !courseData) {
      toast.error("Kurs nicht gefunden");
      navigate("/lms");
      return;
    }
    setCourse(courseData);

    // 3. Verify Enrollment
    const { data: enrollment, error: enrollmentError } = await supabase
      .from('course_enrollments')
      .select('*')
      .eq('course_id', courseData.id)
      .eq('user_id', session.user.id)
      .single();

    if (enrollmentError || !enrollment) {
      toast.error("Du bist nicht für diesen Kurs eingeschrieben.");
      navigate("/lms");
      return;
    }

    // 4. Get Modules & Lessons
    const { data: modulesData } = await supabase
      .from('course_modules')
      .select('*, course_lessons(*)')
      .eq('course_id', courseData.id)
      .order('order_index', { ascending: true });

    if (modulesData) {
      // Sort lessons within modules
      const sortedModules = modulesData.map(m => ({
        ...m,
        lessons: m.course_lessons.sort((a: any, b: any) => a.order_index - b.order_index)
      }));
      setModules(sortedModules);
      
      // Select first lesson by default
      if (sortedModules.length > 0 && sortedModules[0].lessons.length > 0) {
        setActiveLesson(sortedModules[0].lessons[0]);
      }
    }

    // 5. Get Progress
    const { data: progressData } = await supabase
      .from('course_progress')
      .select('lesson_id')
      .eq('user_id', session.user.id)
      .eq('completed', true);

    if (progressData) {
      setProgress(progressData.map(p => p.lesson_id));
    }

    setLoading(false);
  };

  const handleLessonSelect = (lesson: CourseLesson) => {
    setActiveLesson(lesson);
    if (window.innerWidth < 1024) {
      setIsSidebarOpen(false);
    }
  };

  const toggleLessonComplete = async () => {
    if (!activeLesson) return;
    
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) return;

    const isCompleted = progress.includes(activeLesson.id);
    
    if (isCompleted) {
      // Remove progress
      await supabase
        .from('course_progress')
        .delete()
        .eq('user_id', session.user.id)
        .eq('lesson_id', activeLesson.id);
      
      setProgress(progress.filter(id => id !== activeLesson.id));
    } else {
      // Add progress
      await supabase
        .from('course_progress')
        .insert([{
          user_id: session.user.id,
          lesson_id: activeLesson.id,
          completed: true,
          completed_at: new Date().toISOString()
        }]);
      
      setProgress([...progress, activeLesson.id]);
    }
  };

  const getIconForType = (type: string) => {
    switch (type) {
      case 'video': return <PlayCircle size={18} />;
      case 'audio': return <Headphones size={18} />;
      case 'slides': return <MonitorPlay size={18} />;
      case 'pdf': return <FileText size={18} />;
      default: return <FileText size={18} />;
    }
  };

  if (loading || !course) {
    return <div className="min-h-screen bg-[#FFF9F2] flex items-center justify-center"><div className="animate-spin w-12 h-12 border-4 border-primary border-t-transparent rounded-full" /></div>;
  }

  return (
    <div className="min-h-screen bg-[#FFF9F2] flex flex-col md:flex-row">
      
      {/* Mobile Header (Only visible on small screens) */}
      <header className="lg:hidden bg-white h-16 border-b flex items-center justify-between px-4 sticky top-0 z-40">
        <div className="flex items-center gap-2">
          <Link to="/lms" className="text-muted-foreground"><ChevronLeft /></Link>
          <span className="font-serif font-bold text-primary truncate max-w-[200px]">{course.title}</span>
        </div>
        <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? <X /> : <Menu />}
        </Button>
      </header>

      {/* Sidebar Navigation */}
      <aside className={cn(
        "bg-white border-r w-full lg:w-80 flex flex-col fixed lg:sticky inset-y-0 lg:top-0 z-30 transition-transform duration-300 h-[calc(100vh-4rem)] lg:h-screen",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        "top-16 lg:top-0"
      )}>
        <div className="hidden lg:flex p-6 border-b items-center gap-3">
          <Link to="/lms" className="w-10 h-10 rounded-full hover:bg-primary/5 flex items-center justify-center text-primary transition-colors">
            <ChevronLeft size={24} />
          </Link>
          <h2 className="font-serif text-xl font-bold text-primary line-clamp-2">{course.title}</h2>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {modules.map((module, mIdx) => (
            <div key={module.id}>
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3 px-2">
                Modul {mIdx + 1}: {module.title}
              </h3>
              <div className="space-y-1">
                {module.lessons.map((lesson) => {
                  const isActive = activeLesson?.id === lesson.id;
                  const isCompleted = progress.includes(lesson.id);
                  // Hier würde später die Time-Gating Logik greifen
                  const isLocked = false; 

                  return (
                    <button
                      key={lesson.id}
                      onClick={() => !isLocked && handleLessonSelect(lesson)}
                      disabled={isLocked}
                      className={cn(
                        "w-full text-left flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200",
                        isActive ? "bg-accent/10 text-accent" : "hover:bg-primary/5 text-primary",
                        isLocked && "opacity-50 cursor-not-allowed"
                      )}
                    >
                      <div className={cn(
                        "w-6 h-6 rounded-full flex items-center justify-center shrink-0 border-2",
                        isCompleted ? "bg-green-500 border-green-500 text-white" : 
                        isActive ? "border-accent text-accent" : "border-primary/20 text-primary/40"
                      )}>
                        {isCompleted ? <CheckCircle size={14} strokeWidth={3} /> : 
                         isLocked ? <Lock size={12} /> : 
                         <span className="text-[10px] font-bold">{lesson.order_index}</span>}
                      </div>
                      
                      <div className="flex-1 overflow-hidden">
                        <span className={cn("block truncate text-sm font-medium", isActive && "font-bold")}>
                          {lesson.title}
                        </span>
                        <span className="flex items-center gap-1 text-[10px] text-muted-foreground mt-0.5 opacity-80 uppercase tracking-wider font-bold">
                          {getIconForType(lesson.content_type)} {lesson.content_type}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 h-screen overflow-y-auto">
        {activeLesson ? (
          <div className="max-w-4xl mx-auto">
            {/* Player Area */}
            <div className="bg-black w-full aspect-video flex items-center justify-center relative">
              {activeLesson.content_type === 'video' && activeLesson.content_url ? (
                <iframe 
                  src={activeLesson.content_url} 
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture" 
                  allowFullScreen
                />
              ) : activeLesson.content_type === 'slides' && activeLesson.content_url ? (
                 <iframe 
                  src={activeLesson.content_url} 
                  className="absolute inset-0 w-full h-full"
                  allowFullScreen
                />
              ) : (
                <div className="text-white/50 flex flex-col items-center">
                  {getIconForType(activeLesson.content_type)}
                  <p className="mt-4">Medieninhalt laden...</p>
                </div>
              )}
            </div>

            {/* Lesson Details */}
            <div className="p-6 md:p-10 lg:p-16">
              <h1 className="text-3xl md:text-4xl font-serif text-primary font-bold mb-6">
                {activeLesson.title}
              </h1>
              
              {activeLesson.description && (
                <div className="prose prose-lg prose-p:text-primary/80 prose-headings:text-primary max-w-none mb-10" dangerouslySetInnerHTML={{ __html: activeLesson.description }} />
              )}

              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between border-t border-primary/10 pt-10">
                <Button 
                  onClick={toggleLessonComplete}
                  variant={progress.includes(activeLesson.id) ? "outline" : "default"}
                  className={cn(
                    "w-full sm:w-auto h-14 px-8 rounded-full font-bold text-base transition-all",
                    progress.includes(activeLesson.id) 
                      ? "border-green-500 text-green-600 hover:bg-green-50" 
                      : "bg-accent hover:bg-accent/90 text-white shadow-xl shadow-accent/20"
                  )}
                >
                  <CheckCircle className="mr-2" size={20} />
                  {progress.includes(activeLesson.id) ? "Abgeschlossen" : "Lektion abschließen"}
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-full flex items-center justify-center p-8 text-center text-muted-foreground">
            Bitte wähle eine Lektion aus der Navigation links aus.
          </div>
        )}
      </main>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

    </div>
  );
}
