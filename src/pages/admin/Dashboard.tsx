import React, { useEffect, useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { supabase } from "@/integrations/supabase/client";
import { 
  Users, 
  Calendar, 
  TrendingUp, 
  Clock, 
  ArrowUpRight,
  MessageSquare,
  CheckCircle2
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { formatDate } from "@/lib/index";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalLeads: 0,
    newLeads: 0,
    totalEvents: 0,
    nextEvent: null as any
  });
  const [recentLeads, setRecentLeads] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchStats() {
      // 1. Total Leads
      const { count: totalLeads } = await supabase
        .from('leads')
        .select('*', { count: 'exact', head: true });

      // 2. New Leads (Status: neu)
      const { count: newLeads } = await supabase
        .from('leads')
        .select('*', { count: 'exact', head: true })
        .eq('status', 'neu');

      // 3. Total Events
      const { count: totalEvents } = await supabase
        .from('events')
        .select('*', { count: 'exact', head: true });

      // 4. Next Event
      const { data: nextEvent } = await supabase
        .from('events')
        .select('*')
        .gte('date', new Date().toISOString().split('T')[0])
        .order('date', { ascending: true })
        .limit(1)
        .single();

      // 5. Recent Leads
      const { data: leads } = await supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(5);

      setStats({
        totalLeads: totalLeads || 0,
        newLeads: newLeads || 0,
        totalEvents: totalEvents || 0,
        nextEvent
      });
      setRecentLeads(leads || []);
    }

    fetchStats();
  }, []);

  const statCards = [
    { title: "Gesamt Anfragen", value: stats.totalLeads, icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
    { title: "Neue Anfragen", value: stats.newLeads, icon: MessageSquare, color: "text-orange-600", bg: "bg-orange-50" },
    { title: "Aktive Kurse", value: stats.totalEvents, icon: Calendar, color: "text-purple-600", bg: "bg-purple-50" },
    { title: "Abschlussrate", value: "82%", icon: TrendingUp, color: "text-green-600", bg: "bg-green-50" },
  ];

  return (
    <AdminLayout title="Willkommen zurück, Angela">
      <div className="space-y-8 animate-in fade-in duration-500">
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statCards.map((s, i) => (
            <Card key={i} className="border-none shadow-xl shadow-primary/5 rounded-[2rem] overflow-hidden group hover:-translate-y-1 transition-all">
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">{s.title}</p>
                  <p className="text-3xl font-serif text-primary font-bold">{s.value}</p>
                </div>
                <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110", s.bg)}>
                  <s.icon className={cn("w-6 h-6", s.color)} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Recent Leads */}
          <Card className="lg:col-span-2 border-none shadow-xl shadow-primary/5 rounded-[2rem] md:rounded-[2.5rem] bg-white/80 backdrop-blur-md">
            <CardHeader className="flex flex-row items-center justify-between p-5 md:p-8 pb-2 md:pb-4">
              <CardTitle className="text-lg md:text-xl font-serif text-primary">Letzte Anfragen</CardTitle>
              <Link to="/admin/leads">
                <Button variant="ghost" className="text-accent hover:bg-accent/10 px-3 md:px-4">Alle ansehen <ArrowUpRight className="ml-1 md:ml-2 w-4 h-4" /></Button>
              </Link>
            </CardHeader>
            <CardContent className="p-5 md:p-8 pt-0">
              <div className="space-y-3 md:space-y-4">
                {recentLeads.length === 0 ? (
                  <p className="text-center py-8 md:py-10 text-sm md:text-base text-muted-foreground border-2 border-dashed border-primary/5 rounded-3xl">Keine aktuellen Anfragen gefunden.</p>
                ) : (
                  recentLeads.map((lead) => (
                    <div key={lead.id} className="flex items-center justify-between p-4 rounded-2xl border border-primary/5 hover:bg-primary/5 transition-all group">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-primary font-bold">{lead.first_name[0]}{lead.last_name[0]}</div>
                        <div>
                          <p className="font-bold text-primary">{lead.first_name} {lead.last_name}</p>
                          <p className="text-xs text-muted-foreground flex items-center gap-1"><Clock size={12} /> {formatDate(lead.created_at)}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-white text-[10px] font-bold text-primary border border-primary/10 uppercase tracking-widest">
                          {lead.areas[0]}
                        </span>
                        {lead.status === 'neu' && <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions & Next Event */}
          <div className="space-y-8">
            <Card className="border-none shadow-xl shadow-primary/5 rounded-[2rem] md:rounded-[2.5rem] bg-accent text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-bl-[100px]" />
              <CardHeader className="p-5 md:p-8 pb-0 md:pb-2">
                <CardTitle className="text-base md:text-lg font-serif">Nächster Kurs</CardTitle>
              </CardHeader>
              <CardContent className="p-5 md:p-8 pt-2 md:pt-4">
                {stats.nextEvent ? (
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">{stats.nextEvent.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-white/80">
                      <Calendar size={16} /> 
                      {new Date(stats.nextEvent.date).toLocaleDateString("de-DE")}
                    </div>
                    <div className="pt-4">
                      <div className="flex justify-between text-xs mb-2">
                        <span>Belegung</span>
                        <span>{Math.round((12 / stats.nextEvent.max_participants) * 100)}%</span>
                      </div>
                      <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                        <div className="h-full bg-white w-[60%]" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <p className="text-white/60">Keine anstehenden Kurse.</p>
                )}
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl shadow-primary/5 rounded-[2rem] md:rounded-[2.5rem] bg-white p-5 md:p-8">
              <CardTitle className="text-lg md:text-xl font-serif text-primary mb-4 md:mb-6">Quick Actions</CardTitle>
              <div className="grid grid-cols-1 gap-2 md:gap-3">
                <Button className="h-14 rounded-2xl bg-primary hover:shadow-lg transition-all text-sm font-bold" onClick={() => navigate("/admin/events")}>Neuen Kurs anlegen</Button>
                <Button variant="outline" className="h-14 rounded-2xl border-primary/10 hover:bg-primary/5 text-sm font-bold" onClick={() => navigate("/admin/leads")}>Leads exportieren (CSV)</Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}
