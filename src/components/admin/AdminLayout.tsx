import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  LogOut, 
  ChevronRight,
  Menu,
  X,
  BookOpen,
  Settings
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ROUTE_PATHS } from "@/lib/index";
import { toast } from "sonner";


interface AdminLayoutProps {
  children: React.ReactNode;
  title: string;
}

export default function AdminLayout({ children, title }: AdminLayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  const [isAuthChecking, setIsAuthChecking] = React.useState(true);
  const [newLeadsCount, setNewLeadsCount] = React.useState(0);

  React.useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        toast.error("Bitte melden Sie sich an, um diesen Bereich zu sehen");
        navigate("/admin/login");
      } else {
        setIsAuthChecking(false);
        // Fetch new leads count after auth confirmed
        const { count } = await supabase
          .from('leads')
          .select('*', { count: 'exact', head: true })
          .eq('status', 'neu');
        setNewLeadsCount(count || 0);
      }
    };
    checkAuth();
  }, [navigate]);

  if (isAuthChecking) {
    return <div className="min-h-screen bg-[#fff9f2] flex items-center justify-center p-4"><div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" /></div>;
  }

  const navigation = [
    { name: "Dashboard", href: ROUTE_PATHS.ADMIN_DASHBOARD, icon: LayoutDashboard },
    { name: "Anfragen (Leads)", href: ROUTE_PATHS.ADMIN_LEADS, icon: Users },
    { name: "Kurse & Events", href: ROUTE_PATHS.ADMIN_EVENTS, icon: Calendar },
    { name: "Blogverwaltung", href: ROUTE_PATHS.ADMIN_BLOG, icon: BookOpen },
    { name: "Einstellungen", href: ROUTE_PATHS.ADMIN_SETTINGS, icon: Settings },
  ];

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast.info("Erfolgreich abgemeldet");
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-[#fff9f2] flex">
      {/* Sidebar */}
      <aside className={cn(
        "bg-primary text-white w-72 transition-all duration-300 flex flex-col fixed inset-y-0 z-50",
        !isSidebarOpen && "-translate-x-full lg:translate-x-0 lg:w-20"
      )}>
        <div className="p-6 flex items-center justify-between">
          <Link to="/" className={cn("font-serif text-2xl transition-all", !isSidebarOpen && "lg:hidden")}>
            Feminatalis
          </Link>
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white hover:bg-white/10"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? <X /> : <Menu />}
          </Button>
        </div>

        <nav className="flex-1 px-4 py-8 space-y-2">
        {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            const showBadge = item.href === ROUTE_PATHS.ADMIN_LEADS && newLeadsCount > 0;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group",
                  isActive 
                    ? "bg-accent text-white shadow-lg shadow-accent/20" 
                    : "text-white/60 hover:bg-white/5 hover:text-white"
                )}
              >
                <item.icon size={22} className={cn("shrink-0", isActive ? "text-white" : "group-hover:text-white")} />
                <span className={cn("font-medium transition-all flex-1", !isSidebarOpen && "lg:hidden")}>
                  {item.name}
                </span>
                {showBadge && isSidebarOpen && (
                  <span className="bg-orange-500 text-white text-[10px] font-black rounded-full w-5 h-5 flex items-center justify-center animate-pulse shrink-0">
                    {newLeadsCount > 9 ? "9+" : newLeadsCount}
                  </span>
                )}
                {isActive && isSidebarOpen && !showBadge && <ChevronRight size={16} className="ml-auto opacity-50" />}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/10">
          <Button 
            variant="ghost" 
            className="w-full justify-start text-white/60 hover:bg-red-500/10 hover:text-red-400 gap-4 h-12 rounded-xl"
            onClick={handleLogout}
          >
            <LogOut size={22} />
            <span className={cn(!isSidebarOpen && "lg:hidden")}>Abmelden</span>
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className={cn(
        "flex-1 transition-all duration-300 min-h-screen",
        isSidebarOpen ? "lg:pl-72" : "lg:pl-20"
      )}>
        {/* Header */}
        <header className="bg-white/50 backdrop-blur-md border-b border-primary/5 h-20 flex items-center justify-between px-8 sticky top-0 z-40">
          <h2 className="text-xl font-serif text-primary">{title}</h2>
          <div className="flex items-center gap-4 text-sm font-medium text-primary/60">
            <span>Admin-Panel</span>
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          </div>
        </header>

        {/* Content Area */}
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
