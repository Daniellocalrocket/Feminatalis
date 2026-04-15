export const ROUTE_PATHS = {
  HOME: "/",
  BLOG: "/blog",
  FAQ: "/faq",
  CONTACT: "/kontakt",
  UEBER_MICH: "/ueber-mich",
  PREISLISTE: "/preisliste",
  
  // Hebammenpraxis
  HEBAMMENPRAXIS: "/hebammenpraxis",
  GEBURTSVORBEREITUNG: "/hebammenpraxis/geburtsvorbereitung",
  WOCHENBETTBETREUUNG: "/hebammenpraxis/wochenbettbetreuung",
  RUECKBILDUNG: "/hebammenpraxis/rueckbildung",
  ZELLTRAINING: "/hebammenpraxis/zelltraining",
  AKUPUNKTUR: "/hebammenpraxis/akupunktur",
  
  // Naturheilpraxis
  NATURHEILPRAXIS: "/naturheilpraxis",
  LABOR: "/naturheilpraxis/labor",
  INFUSIONSTHERAPIE: "/naturheilpraxis/infusionstherapie",
  TCM: "/naturheilpraxis/tcm",
  LONG_COVID: "/naturheilpraxis/long-covid",
  CO2_THERAPIE: "/naturheilpraxis/co2-therapie",
  DARMANALYSE: "/naturheilpraxis/darmanalyse",
  HORMONTHERAPIE: "/naturheilpraxis/hormontherapie",
  SCHWERMETALL: "/naturheilpraxis/schwermetall",
  ALLERGIE: "/naturheilpraxis/allergie",
  BRAINLIGHT: "/naturheilpraxis/brainlight",
  MITOCHONDRIEN: "/naturheilpraxis/mitochondrien",
  HOMOEOPATHIE: "/naturheilpraxis/homoeopathie",
  BLUTEGEL: "/naturheilpraxis/blutegel",
  LASERTHERAPIE: "/naturheilpraxis/lasertherapie",
  
  // Hebammenpraxis Addons
  BESCHWERDEN: "/hebammenpraxis/beschwerden",
  MIKRONAEHRSTOFFE: "/hebammenpraxis/mikronaehrstoffe",
  
  // Kinderwunsch
  KINDERWUNSCH: "/kinderwunsch",
  
  // CosMedea & Shop
  COSMEDEA: "/naturheilpraxis-cosmedea",
  SHOP: "/shop",
  
  // Onlinekurs
  KURS: "/kurs",
  
  // Vorqualifizierungsformular
  VORQUALIFIZIERUNG: "/kontakt/vorqualifizierung",

  // Admin Area
  ADMIN_LOGIN: "/admin/login",
  ADMIN_DASHBOARD: "/admin",
  ADMIN_LEADS: "/admin/leads",
  ADMIN_EVENTS: "/admin/events",
  ADMIN_BLOG: "/admin/blog",
  ADMIN_SETTINGS: "/admin/settings",

  // Legal
  IMPRESSUM: "/impressum",
} as const;

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: "admin" | "student";
}

export interface CourseProgress {
  userId: string;
  courseId: string;
  completedLessons: string[];
  lastAccessedAt: string;
  overallProgress: number;
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  type: "video" | "reading" | "worksheet";
}

export interface CourseModule {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

export const courseModules: CourseModule[] = [
  {
    id: "m1",
    title: "Grundlagen der Fruchtbarkeit",
    description: "Verstehe die biologischen Zusammenhänge und den weiblichen Zyklus in der Tiefe.",
    lessons: [
      { id: "l1-1", title: "Willkommen bei Feminatalis", duration: "05:00", type: "video" },
      { id: "l1-2", title: "Der weibliche Zyklus verstehen", duration: "15:00", type: "video" },
      { id: "l1-3", title: "Hormon-Checkliste", duration: "10:00", type: "worksheet" }
    ]
  },
  {
    id: "m2",
    title: "Ganzheitliche Ernährung",
    description: "Wie die richtige Ernährung deine Eizellqualität und Hormonbalance unterstützen kann.",
    lessons: [
      { id: "l2-1", title: "Superfoods für den Kinderwunsch", duration: "12:00", type: "video" },
      { id: "l2-2", title: "Blutzucker & Fruchtbarkeit", duration: "20:00", type: "video" },
      { id: "l2-3", title: "Rezeptbuch Download", duration: "05:00", type: "worksheet" }
    ]
  },
  {
    id: "m3",
    title: "Naturheilkunde & Supplements",
    description: "Sinnvolle Ergänzungen und sanfte Unterstützung aus der Naturheilkunde.",
    lessons: [
      { id: "l3-1", title: "Vitamine & Mineralstoffe", duration: "18:00", type: "video" },
      { id: "l3-2", title: "Kräuterheilkunde für Frauen", duration: "14:00", type: "video" }
    ]
  },
  {
    id: "m4",
    title: "Mindset & Stressmanagement",
    description: "Emotionale Stabilität und Entspannungstechniken während der Kinderwunschzeit.",
    lessons: [
      { id: "l4-1", title: "Meditation für Gelassenheit", duration: "10:00", type: "video" },
      { id: "l4-2", title: "Umgang mit Enttäuschungen", duration: "15:00", type: "reading" }
    ]
  }
];

export function calculateProgress(completedCount: number, totalCount: number): number {
  if (totalCount === 0) return 0;
  return Math.round((completedCount / totalCount) * 100);
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("de-DE", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}