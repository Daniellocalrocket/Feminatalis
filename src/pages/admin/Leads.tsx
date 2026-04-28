import React, { useEffect, useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { supabase } from "@/integrations/supabase/client";
import { 
  Users, 
  Download, 
  Search, 
  Filter, 
  MoreHorizontal, 
  Eye, 
  CheckCircle,
  Clock,
  Mail,
  Phone,
  MapPin,
  LifeBuoy,
  Trash2
} from "lucide-react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { formatDate } from "@/lib/index";
import { Progress } from "@/components/ui/progress";

const calculateScore = (lead: any) => {
  const values = [
    lead.mindset_situation,
    lead.mindset_motivation,
    lead.mindset_experience,
    lead.mindset_individuality,
    lead.mindset_responsibility,
    lead.mindset_investment,
    lead.mindset_reality
  ];
  let points = 0;
  let answered = 0;
  values.forEach(v => {
    if (v === 'A') { points += 1; answered++; }
    else if (v === 'B') { points += 2; answered++; }
    else if (v === 'C') { points += 3; answered++; }
  });
  
  if (answered === 0) return null;
  return Math.round((points / (answered * 3)) * 100);
};

const getScoreColor = (score: number | null) => {
  if (score === null) return "bg-slate-100 text-slate-500";
  if (score >= 80) return "bg-green-100 text-green-700 border-green-200";
  if (score >= 55) return "bg-orange-100 text-orange-700 border-orange-200";
  return "bg-red-100 text-red-700 border-red-200";
};

const getScoreStars = (value: string) => {
  if (value === 'A') return "⭐";
  if (value === 'B') return "⭐⭐";
  if (value === 'C') return "⭐⭐⭐";
  return "-";
};

const STATUS_FILTERS = [
  { label: "Alle", value: "alle" },
  { label: "Neu", value: "neu" },
  { label: "Kontaktiert", value: "kontaktiert" },
  { label: "Bestätigt", value: "bestätigt" },
  { label: "Erledigt", value: "abgeschlossen" },
];

export default function AdminLeads() {
  const [leads, setLeads] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("alle");
  const [isLoading, setIsLoading] = useState(true);
  const [selectedLead, setSelectedLead] = useState<any | null>(null);
  const [leadToDelete, setLeadToDelete] = useState<{id: string, name: string} | null>(null);

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast.error("Fehler beim Laden der Anfragen");
    } else {
      setLeads(data || []);
    }
    setIsLoading(false);
  };

  const executeDelete = async () => {
    if (!leadToDelete) return;
    const { error } = await supabase.from('leads').delete().eq('id', leadToDelete.id);
    if (error) {
      toast.error("Fehler beim Löschen");
    } else {
      toast.success("Anfrage gelöscht");
      setSelectedLead(null);
      setLeadToDelete(null);
      fetchLeads();
    }
  };

  const updateStatus = async (id: string, newStatus: string) => {
    const { error } = await supabase
      .from('leads')
      .update({ status: newStatus })
      .eq('id', id);

    if (error) {
      toast.error("Status konnte nicht aktualisiert werden");
    } else {
      toast.success(`Anfrage auf '${newStatus}' gesetzt`);
      fetchLeads();
    }
  };

  const exportToCSV = () => {
    if (leads.length === 0) return;

    const headers = [
      "Datum", "Vorname", "Nachname", "E-Mail", "Telefon", 
      "PLZ", "Versicherung", "Bereiche", "Dringlichkeit", 
      "Info", "Status_Aktuell", "Hauptziel", "Wissenstand", "Fokus", "Umsetzung", "Investition", "Ansatz_Match", "Status"
    ];

    const csvRows = [
      headers.join(";"), // Header row
      ...leads.map(lead => [
        new Date(lead.created_at).toLocaleDateString("de-DE"),
        lead.first_name || "",
        lead.last_name || "",
        lead.email || "",
        lead.phone || "",
        lead.zip_code || "",
        lead.insurance || "",
        (lead.areas || []).join(", "),
        lead.urgency || "",
        (lead.additional_info || "").replace(/;/g, ",").replace(/\n/g, " "),
        lead.mindset_situation || "",
        lead.mindset_motivation || "",
        lead.mindset_experience || "",
        lead.mindset_individuality || "",
        lead.mindset_responsibility || "",
        lead.mindset_investment || "",
        lead.mindset_reality || "",
        lead.status || ""
      ].join(";"))
    ];

    const csvContent = csvRows.join("\n");
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    
    link.setAttribute("href", url);
    link.setAttribute("download", `feminatalis_leads_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast.success("CSV-Export erfolgreich gestartet");
  };

  const filteredLeads = leads.filter(lead => {
    const matchesSearch =
      `${lead.first_name} ${lead.last_name}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "alle" || lead.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <AdminLayout title="Anfragen-Management (Leads)">
      <div className="space-y-6 animate-in fade-in duration-500">
        
        {/* Toolbar */}
        <div className="flex flex-col gap-4 bg-white/50 p-6 rounded-[2rem] border border-primary/5">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/30" />
              <Input 
                placeholder="Name oder E-Mail suchen..." 
                className="pl-12 h-12 rounded-xl bg-white border-primary/5"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button 
              onClick={exportToCSV}
              className="h-12 rounded-xl bg-accent text-white gap-2 hover:shadow-lg transition-all px-6"
            >
              <Download size={18} /> CSV Export
            </Button>
          </div>
          {/* Status Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {STATUS_FILTERS.map((f) => (
              <button
                key={f.value}
                onClick={() => setStatusFilter(f.value)}
                className={cn(
                  "px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all border",
                  statusFilter === f.value
                    ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                    : "bg-white text-primary/50 border-primary/10 hover:border-primary/30 hover:text-primary"
                )}
              >
                {f.label}
                {f.value !== "alle" && (
                  <span className="ml-1.5 opacity-70">
                    ({leads.filter(l => l.status === f.value).length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Leads Table */}
        <div className="bg-white/80 backdrop-blur-md rounded-[2.5rem] border border-primary/5 shadow-xl shadow-primary/5 overflow-x-auto">
          <Table className="min-w-[800px]">
            <TableHeader className="bg-primary/5">
              <TableRow className="hover:bg-transparent border-none">
                <TableHead className="font-bold text-primary py-6 px-8">Client</TableHead>
                <TableHead className="font-bold text-primary">Datum</TableHead>
                <TableHead className="font-bold text-primary">Schwerpunkt</TableHead>
                <TableHead className="font-bold text-primary">Match</TableHead>
                <TableHead className="font-bold text-primary">Status</TableHead>
                <TableHead className="font-bold text-primary text-right px-8">Aktion</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={6} className="h-64 text-center">
                    <div className="flex flex-col items-center gap-4 text-muted-foreground">
                      <Clock className="w-8 h-8 animate-spin opacity-20" />
                      Wird geladen...
                    </div>
                  </TableCell>
                </TableRow>
              ) : filteredLeads.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="h-64 text-center text-muted-foreground">
                    Keine Anfragen gefunden.
                  </TableCell>
                </TableRow>
              ) : (
                filteredLeads.map((lead) => (
                  <TableRow key={lead.id} className="hover:bg-primary/5 border-primary/5 transition-colors group">
                    <TableCell className="py-6 px-8">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-primary font-bold shadow-inner shrink-0">
                          {lead.first_name[0]}{lead.last_name[0]}
                        </div>
                        <div>
                          <p className="font-bold text-primary">{lead.first_name} {lead.last_name}</p>
                          <p className="text-xs text-muted-foreground">{lead.email}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm text-primary/60">{formatDate(lead.created_at)}</div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {lead.areas.map((area: string) => (
                          <Badge key={area} variant="outline" className="bg-white border-primary/10 text-primary capitalize text-[10px]">
                            {area}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>
                      {calculateScore(lead) !== null ? (
                        <Badge variant="outline" className={cn("font-black tracking-widest text-[10px]", getScoreColor(calculateScore(lead)))}>
                           {calculateScore(lead)}%
                        </Badge>
                      ) : (
                        <span className="text-xs text-muted-foreground">-</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <Badge className={cn(
                        "rounded-full px-3 py-1 text-[10px] uppercase tracking-wider font-black",
                        lead.status === 'neu' ? "bg-accent text-white" : 
                        lead.status === 'bestätigt' ? "bg-green-600 text-white" :
                        lead.status === 'kontaktiert' ? "bg-blue-500 text-white" :
                        "bg-slate-500 text-white"
                      )}>
                        {lead.status === 'bestätigt' ? "Bestätigt" : lead.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right px-8">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-10 w-10 p-0 rounded-full">
                            <MoreHorizontal className="h-5 w-5" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="rounded-2xl border-primary/5 shadow-2xl p-2 min-w-[200px]">
                          <DropdownMenuItem 
                            className="rounded-xl flex gap-3 py-3 px-4 cursor-pointer" 
                            onClick={() => setSelectedLead(lead)}
                          >
                            <Eye size={18} className="text-primary/40" /> Details ansehen
                          </DropdownMenuItem>
                          <DropdownMenuItem className="rounded-xl flex gap-3 py-3 px-4 cursor-pointer text-green-600 focus:text-green-600" onClick={() => updateStatus(lead.id, 'bestätigt')}>
                             <CheckCircle size={18} /> Bestätigen
                          </DropdownMenuItem>
                          <DropdownMenuItem className="rounded-xl flex gap-3 py-3 px-4 cursor-pointer" onClick={() => updateStatus(lead.id, 'kontaktiert')}>
                            <Clock size={18} className="text-blue-500" /> Auf 'Kontaktiert'
                          </DropdownMenuItem>
                          <DropdownMenuItem className="rounded-xl flex gap-3 py-3 px-4 cursor-pointer" onClick={() => updateStatus(lead.id, 'abgeschlossen')}>
                            <CheckCircle size={18} className="text-slate-500" /> Auf 'Erledigt'
                          </DropdownMenuItem>
                          <DropdownMenuItem 
                            className="rounded-xl flex gap-3 py-3 px-4 cursor-pointer text-red-500 focus:text-red-500 focus:bg-red-50" 
                            onClick={() => setLeadToDelete({ id: lead.id, name: `${lead.first_name} ${lead.last_name}` })}
                          >
                            <Trash2 size={18} /> Löschen
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>

        {/* Footer Info */}
        <div className="p-8 bg-primary/5 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-6 opacity-60">
           <div className="flex items-center gap-3">
             <LifeBuoy className="w-5 h-5 text-primary" />
             <p className="text-xs font-medium text-primary">Tipp: Exportiere die Leads regelmäßig für deine interne Buchhaltung.</p>
           </div>
           <p className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Gesamt: {leads.length} Einträge</p>
        </div>

        {/* Detail Modal */}
        {selectedLead && (
          <Dialog open={!!selectedLead} onOpenChange={(open) => !open && setSelectedLead(null)}>
            <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto rounded-[2rem]">
              <DialogHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <DialogTitle className="text-2xl font-serif text-primary">Lead Details</DialogTitle>
                    <DialogDescription>
                      Erfasst am {formatDate(selectedLead.created_at)}
                    </DialogDescription>
                  </div>
                  {calculateScore(selectedLead) !== null && (
                    <div className={cn("px-4 py-2 rounded-2xl flex flex-col items-center border", getScoreColor(calculateScore(selectedLead)))}>
                      <span className="text-[10px] uppercase tracking-widest font-bold opacity-70">Match-Score</span>
                      <span className="text-2xl font-bold">{calculateScore(selectedLead)}%</span>
                    </div>
                  )}
                </div>
              </DialogHeader>

              <div className="space-y-6 mt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-bold text-muted-foreground uppercase">Name</p>
                    <p className="text-primary">{selectedLead.first_name} {selectedLead.last_name}</p>
                  </div>
                  <div>
                     <p className="text-xs font-bold text-muted-foreground uppercase">Kontakt</p>
                     <a href={`mailto:${selectedLead.email}`} className="block text-accent hover:underline font-medium">{selectedLead.email}</a>
                     <a href={`tel:${selectedLead.phone}`} className="block text-accent hover:underline font-medium">{selectedLead.phone}</a>
                   </div>
                  <div>
                    <p className="text-xs font-bold text-muted-foreground uppercase">PLZ</p>
                    <p className="text-primary">{selectedLead.zip_code}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-muted-foreground uppercase">Versicherung</p>
                    <p className="text-primary">{selectedLead.insurance}</p>
                  </div>
                </div>

                <div className="border-t border-b border-primary/5 py-4 my-4">
                  <p className="text-xs font-bold text-muted-foreground uppercase mb-2">Schwerpunkte</p>
                  <div className="flex flex-wrap gap-2">
                    {(selectedLead.areas || []).map((area: string) => (
                      <Badge key={area} variant="outline" className="text-primary capitalize">{area}</Badge>
                    ))}
                  </div>
                </div>

                <div className="bg-orange-50/50 p-6 rounded-2xl border border-primary/5 space-y-4">
                  <h4 className="font-serif text-lg text-primary mb-2">Mindset & Motivation</h4>
                  
                  {[
                    { label: "1. Aktueller Status", value: selectedLead.mindset_situation },
                    { label: "2. Hauptziel", value: selectedLead.mindset_motivation },
                    { label: "3. Wissenstand", value: selectedLead.mindset_experience },
                    { label: "4. Fokus & Begleitung", value: selectedLead.mindset_individuality },
                    { label: "5. Aktive Umsetzung", value: selectedLead.mindset_responsibility },
                    { label: "6. Investitionsbereitschaft", value: selectedLead.mindset_investment },
                    { label: "7. Ansatz-Match", value: selectedLead.mindset_reality }
                  ].map((item, idx) => (
                    <div key={idx} className="flex flex-col border-b border-primary/5 pb-2 last:border-0 last:pb-0">
                       <div className="flex justify-between items-center mb-1">
                         <span className="text-xs text-muted-foreground font-bold">{item.label}</span>
                         <span className="text-xs">{item.value ? getScoreStars(item.value) : ""}</span>
                       </div>
                       <span className="text-sm font-medium text-primary">Auswahl: {item.value || "Nicht beantwortet"} {item.value === 'C' ? '(Premium)' : item.value === 'B' ? '(Interessiert)' : item.value === 'A' ? '(Standard)' : ''}</span>
                    </div>
                  ))}
                </div>

                {selectedLead.additional_info && (
                  <div>
                    <p className="text-xs font-bold text-muted-foreground uppercase mb-1">Zusätzliche Infos</p>
                    <p className="p-4 bg-muted/30 rounded-xl text-sm italic border border-primary/5">
                      "{selectedLead.additional_info}"
                    </p>
                  </div>
                )}
              </div>
            </DialogContent>
          </Dialog>
        )}

        {/* Delete Confirmation Modal */}
        <Dialog open={!!leadToDelete} onOpenChange={(open) => !open && setLeadToDelete(null)}>
          <DialogContent className="max-w-md rounded-[2rem]">
            <DialogHeader>
              <DialogTitle className="text-2xl font-serif text-primary">Anfrage löschen</DialogTitle>
              <DialogDescription>
                Bist du sicher, dass du die Anfrage von <strong className="text-primary">{leadToDelete?.name}</strong> unwiderruflich löschen möchtest?
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="mt-6 flex gap-3 sm:justify-between w-full">
              <Button variant="outline" className="flex-1 rounded-xl" onClick={() => setLeadToDelete(null)}>Abbrechen</Button>
              <Button variant="destructive" className="flex-1 rounded-xl bg-red-500 hover:bg-red-600 text-white" onClick={executeDelete}>Ja, löschen</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

      </div>
    </AdminLayout>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}
