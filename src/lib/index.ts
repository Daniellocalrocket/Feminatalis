export const ROUTE_PATHS = {
  HOME: "/",
  BLOG: "/blog",
  BLOG_POST: "/blog/:slug",
  FAQ: "/faq",
  CONTACT: "/kontakt",
  UEBER_MICH: "/ueber-mich",
  PREISLISTE: "/preisliste",
  
  // Hebammenpraxis
  HEBAMMENPRAXIS: "/hebammenpraxis",
  GEBURTSVORBEREITUNG: "/hebammenpraxis/geburtsvorbereitung",
  PREMIUM_ZELLKRAFT_KURS: "/hebammenpraxis/geburtsvorbereitung/zellkraft-kurs",
  WOCHENBETTBETREUUNG: "/hebammenpraxis/wochenbettbetreuung",
  RUECKBILDUNG: "/hebammenpraxis/rueckbildung",
  ZELLTRAINING: "/hebammenpraxis/zelltraining",
  ZELLTRAINING_SCHWANGERSCHAFT: "/hebammenpraxis/ihht-schwangerschaft",
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
  HEBAMMENSPRECHSTUNDE: "/hebammenpraxis/beschwerden",
  BESCHWERDEN: "/hebammenpraxis/beschwerden",
  MIKRONAEHRSTOFFE: "/hebammenpraxis/mikronaehrstoffe",
  CO2_THERAPIE_HEBAMME: "/hebammenpraxis/co2-therapie",
  
  // Kinderwunsch
  KINDERWUNSCH: "/kinderwunsch",
  ZELLKRAFT_ROADMAP: "/kinderwunsch/zellkraft-roadmap",
  
  // Shop
  SHOP: "/shop",
  EVENTS: "/veranstaltungen",
  COURSES_OVERVIEW: "/veranstaltungen",
  
  // Onlinekurs
  COURSE: "/kurs",
  KURS: "/kurs",
  KURS_INTERESSE: "/kurs/vorregistrierung",
  
  // Vorqualifizierungsformular
  VORQUALIFIZIERUNG: "/kontakt/vorqualifizierung",
  EVENT_BOOKING: "/event-buchung/:eventId",

  // Admin Area
  ADMIN_LOGIN: "/admin/login",
  ADMIN_DASHBOARD: "/admin",
  ADMIN_LEADS: "/admin/leads",
  ADMIN_EVENTS: "/admin/events",
  ADMIN_BLOG: "/admin/blog",
  ADMIN_NEWS: "/admin/news",
  ADMIN_SETTINGS: "/admin/settings",
  ADMIN_IMAGES: "/admin/images",
  ADMIN_COURSES: "/admin/courses",
  ADMIN_COURSE_EDITOR: "/admin/courses/:courseId",

  // Legal
  IMPRESSUM: "/impressum",
  DATENSCHUTZ: "/datenschutz",
  AGB: "/agb",
} as const;

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: "admin" | "student";
}

// Course / LMS Types
export interface Course {
  id: string;
  title: string;
  slug: string;
  theme_color: string;
  published: boolean;
  created_at: string;
  updated_at: string;
}

export interface CourseModule {
  id: string;
  course_id: string;
  title: string;
  order_index: number;
  unlock_days: number;
  created_at: string;
  updated_at: string;
}

export interface CourseLesson {
  id: string;
  module_id: string;
  title: string;
  content_type: 'video' | 'audio' | 'slides' | 'pdf' | 'text';
  content_url?: string;
  description?: string;
  order_index: number;
  created_at: string;
  updated_at: string;
}

export interface CourseEnrollment {
  id: string;
  user_id: string;
  course_id: string;
  enrolled_at: string;
}

export interface CourseProgress {
  id: string;
  user_id: string;
  lesson_id: string;
  completed: boolean;
  completed_at?: string;
}

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