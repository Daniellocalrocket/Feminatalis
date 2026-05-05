# Feminatalis - Projektanalyse

## 1. Projektübersicht

**Projektname:** Feminatalis  
**GitHub:** https://github.com/Daniellocalrocket/Feminatalis  
**URL:** https://feminatalis.de  
**Betreiber:** Angela Deschner – Heilpraktikerin & Hebamme  
**Standort:** Hebelstr. 3A, 76669 Bad Schönborn  

**Geschäftszweck:**  
Kombinierte Praxis für Hebammenbegleitung und Funktionelle Medizin/Naturheilkunde. Spezialisiert auf:
- Hebammenleistungen (Geburtsvorbereitung, Wochenbett, Rückbildung, Akupunktur)
- Naturheilpraxis (Labordiagnostik, Infusionstherapie, Mitochondrien-Therapie/IHHT)
- Kinderwunschbegleitung
- Premium-Zellkraft-Programme

---

## 2. Tech Stack

| Kategorie | Technologie |
|-----------|-------------|
| **Framework** | Vite 5.4.1 |
| **Sprache** | TypeScript 5.5.3 |
| **UI Library** | React 18.3.1 |
| **Styling** | Tailwind CSS 4.0.0 + shadcn-ui Komponenten |
| **Routing** | React Router DOM 6.26.2 |
| **Animationen** | Framer Motion 11.15.0 |
| **State Management** | Zustand 5.0.9 |
| **API/Data Fetching** | TanStack Query 5.56.2, Axios 1.13.2 |
| **Formulare** | React Hook Form 7.53.0 + Zod 3.23.8 |
| **Backend** | Supabase (Edge Functions in Deno) |
| **Icons** | Lucide React, React Icons, Iconify |

**Wichtige shadcn-ui/ Radix-Komponenten:**
- Dialog, Dropdown, Select, Tabs, Toast, Tooltip, Accordion, Calendar, etc.

---

## 3. Verzeichnisstruktur

```
src/
├── api/                    # API-Integrationen (demo.ts)
├── components/
│   ├── ui/                 # shadcn-ui Komponenten
│   ├── vorqualifizierung/ # Vorqualifizierungs-Formular
│   ├── Layout.tsx         # Haupt-Layout (Header + Footer)
│   ├── CourseCard.tsx    # Kurs-Karten-Komponente
│   └── PreisTransparenz.tsx
├── hooks/
│   ├── useSiteImages.ts   # Bildverwaltung
│   ├── use-toast.ts       # Toast-Benachrichtigungen
│   └── use-mobile.tsx     # Mobile-Detection
├── lib/
│   ├── index.ts           # Routen, Typen, Hilfsfunktionen
│   ├── utils.ts           # Utility-Funktionen
│   ├── motion.ts          # Framer Motion Varianten
│   └── react-router-dom-proxy.tsx
├── pages/
│   ├── Home.tsx           # Startseite
│   ├── Blog.tsx           # Blog-Übersicht
│   ├── BlogPostDetails.tsx
│   ├── Contact.tsx        # Kontakt
│   ├── UeberMich.tsx      # Über Angela Deschner
│   ├── Preisliste.tsx
│   ├── Impressum.tsx
│   ├── Kinderwunsch.tsx
│   ├── CoursesOverview.tsx
│   ├── Vorqualifizierung.tsx
│   ├── EventBooking.tsx
│   ├── not-found/
│   ├── admin/
│   │   ├── Dashboard.tsx
│   │   ├── Login.tsx
│   │   ├── Leads.tsx      # Lead-Verwaltung
│   │   ├── Events.tsx     # Event-Verwaltung
│   │   ├── Blog.tsx       # Blog-Verwaltung
│   │   ├── Settings.tsx
│   │   └── Images.tsx     # Bildverwaltung
│   ├── hebammenpraxis/    # Hebammen-Leistungen
│   │   ├── Index.tsx, Geburtsvorbereitung.tsx, PremiumZellkraftKurs.tsx
│   │   ├── Wochenbettbetreuung.tsx, Rueckbildung.tsx, Akupunktur.tsx
│   │   ├── Beschwerden.tsx, Mikronaehrstoffe.tsx, Zelltraining.tsx
│   └── naturheilpraxis/   # Naturheilkunde-Leistungen
│       ├── Index.tsx, Labor.tsx, LongCovid.tsx, Infusionstherapie.tsx
│       ├── CO2Therapie.tsx, Darmsanierung.tsx, Hormontherapie.tsx
│       ├── Schwermetall.tsx, TCM.tsx, Allergie.tsx, BrainLight.tsx
│       ├── Mitochondrien.tsx, Homoeopathie.tsx, Blutegel.tsx, Lasertherapie.tsx
├── integrations/supabase/ # Supabase Client
└── supabase/edge_function/ # Backend Edge Functions (Deno)
```

---

## 4. Routen (ROUTE_PATHS)

### Öffentliche Seiten
| Pfad | Seite |
|------|-------|
| `/` | Home |
| `/blog` | Blog |
| `/blog/:slug` | BlogPostDetails |
| `/faq` | FAQ |
| `/kontakt` | Contact |
| `/ueber-mich` | Über Mich |
| `/preisliste` | Preisliste |
| `/impressum` | Impressum |
| `/datenschutz` | Datenschutz |

### Hebammenpraxis
| Pfad | Seite |
|------|-------|
| `/hebammenpraxis` | Index |
| `/hebammenpraxis/geburtsvorbereitung` | Geburtsvorbereitung |
| `/hebammenpraxis/geburtsvorbereitung/zellkraft-kurs` | PremiumZellkraftKurs |
| `/hebammenpraxis/wochenbettbetreuung` | Wochenbettbetreuung |
| `/hebammenpraxis/rueckbildung` | Rückbildung |
| `/hebammenpraxis/zelltraining` | IHHT/Zelltraining |
| `/hebammenpraxis/akupunktur` | Akupunktur |
| `/hebammenpraxis/beschwerden` | Schwangerschaftsbeschwerden |
| `/hebammenpraxis/mikronaehrstoffe` | Mikronährstoff-Beratung |

### Naturheilpraxis
| Pfad | Seite |
|------|-------|
| `/naturheilpraxis` | Index |
| `/naturheilpraxis/labor` | Labordiagnostik |
| `/naturheilpraxis/infusionstherapie` | Infusionstherapie |
| `/naturheilpraxis/tcm` | TCM |
| `/naturheilpraxis/long-covid` | Long-Covid |
| `/naturheilpraxis/co2-therapie` | CO2-Therapie |
| `/naturheilpraxis/darmanalyse` | Darmsanierung |
| `/naturheilpraxis/hormontherapie` | Hormontherapie |
| `/naturheilpraxis/schwermetall` | Schwermetallausleitung |
| `/naturheilpraxis/allergie` | Allergiebehandlung |
| `/naturheilpraxis/brainlight` | brainLight Entspannung |
| `/naturheilpraxis/mitochondrien` | Mitochondrien-Therapie |
| `/naturheilpraxis/homoeopathie` | Homöopathie |
| `/naturheilpraxis/blutegel` | Blutegeltherapie |
| `/naturheilpraxis/lasertherapie` | Lasertherapie |

### Kinderwunsch
| Pfad | Seite |
|------|-------|
| `/kinderwunsch` | Index |
| `/kinderwunsch/zellkraft-roadmap` | ZellkraftRoadmap |

### Sonstige
| Pfad | Seite |
|------|-------|
| `/kurs` | CoursesOverview |
| `/event-buchung/:eventId` | EventBooking |
| `/kontakt/vorqualifizierung` | Vorqualifizierung |

### Admin-Bereich
| Pfad | Seite |
|------|-------|
| `/admin/login` | Login |
| `/admin` | Dashboard |
| `/admin/leads` | Leads-Verwaltung |
| `/admin/events` | Events-Verwaltung |
| `/admin/blog` | Blog-Verwaltung |
| `/admin/settings` | Einstellungen |
| `/admin/images` | Bildverwaltung |

---

## 5. Kernfunktionen

### Öffentliche Features
- **Terminanfrage-Formular** (Homepage Hero)
- **Vorqualifizierungs-Formular** mit 5 Steps (Zod + React Hook Form)
- **Blog-System** mit Übersicht und Detailseiten
- **Kurs-Übersicht** mit Kurs-Modulen (4 Module, 11 Lektionen)
- **Event-Booking** System
- **Bildverwaltung** über Admin-Bereich
- **SEO** mit JSON-LD Schema (MedicalBusiness, Person)
- **Responsive Design** mit Mobile-Navigation
- **Animierte UI-Elemente** (Framer Motion)

### Admin-Features
- **Dashboard** mit Statistiken
- **Lead-Verwaltung** (Kontaktanfragen)
- **Event-Verwaltung**
- **Blog-Verwaltung** (CRUD)
- **Bildverwaltung** (Site-Images hochladen)
- **Einstellungen**

### Business-Logik
- **Kurs fortschritt-Tracking** (CourseProgress pro User)
- **User-Rollen:** Admin, Student
- **Datum-Formatierung** für deutsche Lokale

---

## 6. Design-System

### Farben (Tailwind Theme)
- **Primary:** ~#8B5E3C (Braun)
- **Accent:** ~#D4A84B (Gold/Orange)
- **Background:** Weiß/Cream
- **Muted:** Grautöne

### Komponenten-Stil
- Gerundete Ecken (`rounded-2xl` bis `rounded-[3rem]`)
- Große Schatten (`shadow-xl`, `shadow-2xl`)
- Backdrop-Blur-Effekte
- Serif-Fonts für Überschriften
- Orange/Gold Akzentfarben

### Animations
- Fade-In, Slide-Up bei Scroll
- Hover-Effekte mit Scale
- Mobile Menu Overlay
- Scroll-to-Top Button

---

## 7. Datenmodelle (TypeScript Interfaces)

```typescript
// Aus src/lib/index.ts
interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: "admin" | "student";
}

interface CourseProgress {
  userId: string;
  courseId: string;
  completedLessons: string[];
  lastAccessedAt: string;
  overallProgress: number;
}

interface Lesson {
  id: string;
  title: string;
  duration: string;
  type: "video" | "reading" | "worksheet";
}

interface CourseModule {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}
```

---

## 8. NPM Scripts

```json
"dev": "vite",
"build": "vite build",
"build:dev": "vite build --mode development --sourcemap",
"build:map": "vite build --sourcemap",
"lint": "eslint .",
"preview": "vite preview",
"preview:dev": "npm run build:dev && npm run preview",
"test:edge-functions": "cd supabase/edge_function && deno task test"
```

---

## 9. Statische Assets

### Öffentliche Bilder
- `/logo.png` – Praxis-Logo
- `/angela_portrait.png` – Porträt Angela Deschner
- `/hebammen_section.png`
- `/kinderwunsch_section.png`
- `/90_days_fertility_hero.png`
- `/healthy_fet_blog_hero.png`
- `/placeholder.svg`

### Externe Services
- **Supabase:** Backend (Auth, Database, Edge Functions)
- **Ungated Images:** Fallback von unsplash.com
- **Social Media:** Instagram, Facebook

---

## 10. Build & Deployment

- **Build-Output:** `dist/` Verzeichnis
- **Vercel Ready:** `vercel.json` Konfiguration vorhanden
- **CSS:** PostCSS + Tailwind CSS

---

## 11. Notizen

- **Sprache:** Deutsch (Primär), teilweise Englisch in Code
- **Zielgruppe:** Frauen mit Kinderwunsch, Schwangere, Mütter, Patientinnen mit chronischen Beschwerden
- **Besonderheit:** Kombination aus Schulmedizin (Hebamme) + Naturheilkunde + Funktionelle Medizin
- **Admin-Bereich:** Zugang für Inhaberin (Angela) zur Pflege von Content und Leads
- **Lead-Tracking:** Kontaktanfragen werden systematisch erfasst

---

*Erstellt am: 2026-05-05*