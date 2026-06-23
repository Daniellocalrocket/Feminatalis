export interface PriceItem {
  id: string;
  name: string;
  price: string;
  detail: string;
  time?: string;
}

export interface PriceCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  highlight: boolean;
  items: PriceItem[];
}

export const fallbackCategories: PriceCategory[] = [
  {
    id: "1", title: "Naturheilpraxis - Einzelbehandlungen", subtitle: "", icon: "Activity", highlight: false,
    items: [
      { id: "1a", name: "Einzelberatung / Erstanamnese", price: "100,- €", detail: "60 Min. inkl. Untersuchung, Therapieplan, Laborbesprechung", time: "60 min" },
      { id: "1b", name: "Aku-pur (Akupunktur extra)", price: "40,- €", detail: "Behandlung nach Erstanamnese", time: "30 min" },
      { id: "1c", name: "Aku-plus (Akupunktur begleitend)", price: "26,- €", detail: "Begleittherapie (z.B. zu Infusion oder Geburtsvorbereitung)", time: "30 min" },
      { id: "1d", name: "IHHT / Höhentraining", price: "75,- €", detail: "Zelltraining (zzgl. einmalig 10,- € für Maske)", time: "60 min" },
      { id: "1e", name: "Infusionstherapie", price: "65,- €", detail: "Wirkstoff-Drip (zzgl. Medikamente)", time: "45-90 min" },
      { id: "1f", name: "Haemo-Laser", price: "60,- €", detail: "Lichttherapie inkl. Lichtleiter", time: "30 min" },
      { id: "1g", name: "CO2-Vitalisierungsbad", price: "45,- €", detail: "Trockenbad (zzgl. einmalig 7,50 € für Hülle)", time: "45 min" },
      { id: "1h", name: "brainLight-pur", price: "7,50 €", detail: "Nur Brille & Kopfhörer (ohne Massage)", time: "bis 30 min" },
      { id: "1i", name: "brainLight komplett", price: "ab 15,- €", detail: "System & Massage / Mentaltraining", time: "15-60 min" },
      { id: "1j", name: "Massagesessel individuell", price: "40,- €", detail: "Inkl. Gesundheitscheck & Ionen-Funktion", time: "60 min" },
      { id: "1k", name: "Massagesessel pur", price: "ab 10,- €", detail: "Automatik-Massageprogramme", time: "15-60 min" },
      { id: "1l", name: "brainLight Gesundheitscheck", price: "5,- €", detail: "Vor und nach jeder Session empfohlen", time: "1x" },
      { id: "1m", name: "Mikronährstoffberatung", price: "90,- €", detail: "Individuelle Beratung (pro Stunde)", time: "60 min" },
      { id: "1n", name: "Schwermetall-Provokationstest", price: "85,- €", detail: "Inkl. Laboranalyse" },
    ]
  },
  {
    id: "2", title: "Naturheilpraxis - Pakete & Kombis", subtitle: "Günstigere Konditionen (10 zum Preis von 9!)", icon: "Gem", highlight: true,
    items: [
      { id: "2a", name: "Aku-pur 10", price: "405,- €", detail: "10x Akupunktur (Statt 450,- €)" },
      { id: "2b", name: "Air-pur 10 (IHHT)", price: "675,- €", detail: "Statt 750,- € (zzgl. Maske, 2 RZ möglich)" },
      { id: "2c", name: "Drop-pur 5 (Infusionen)", price: "300,- €", detail: "5x Infusion (Statt 325,- €, zzgl. Medikamente)" },
      { id: "2d", name: "Drop-pur 10 (Infusionen)", price: "585,- €", detail: "Statt 650,- € (zzgl. Medikamente, 2 RZ möglich)" },
      { id: "2e", name: "Light-pur 5 (Laser)", price: "285,- €", detail: "5x Haemo-Laser (Statt 300,- €, inkl. Lichtleiter)" },
      { id: "2f", name: "Light-pur 10 (Laser)", price: "540,- €", detail: "Statt 600,- € (2 RZ möglich)" },
      { id: "2g", name: "Carbo-pur 10 (CO2)", price: "405,- €", detail: "Statt 450,- € (zzgl. Hülle)" },
      { id: "2h", name: "brainLight-pur 10", price: "67,50 €", detail: "Statt 75,- € (Nur Brille & Kopfhörer)" },
      { id: "2i", name: "Massagesessel individuell 10", price: "360,- €", detail: "Statt 400,- € (Gesundheitscheck & Ionen-Funktion)" },
      { id: "2j", name: "Massagesessel pur 10 (15 Min.)", price: "90,- €", detail: "10x 15 Min. (Statt 100,- €)" },
      { id: "2k", name: "Massagesessel pur 10 (30 Min.)", price: "135,- €", detail: "10x 30 Min. (Statt 150,- €)" },
      { id: "2l", name: "Massagesessel pur 10 (45 Min.)", price: "225,- €", detail: "10x 45 Min. (Statt 250,- €)" },
      { id: "2m", name: "Massagesessel pur 10 (60 Min.)", price: "270,- €", detail: "10x 60 Min. (Statt 300,- €)" },
      { id: "2n", name: "brainLight komplett 10 (15 Min.)", price: "135,- €", detail: "10x 15 Min. (Statt 150,- €)" },
      { id: "2o", name: "brainLight komplett 10 (30 Min.)", price: "180,- €", detail: "10x 30 Min. (Statt 200,- €)" },
      { id: "2p", name: "brainLight komplett 10 (45 Min.)", price: "225,- €", detail: "10x 45 Min. (Statt 250,- €)" },
      { id: "2q", name: "brainLight komplett 10 (60 Min.)", price: "315,- €", detail: "10x 60 Min. (Statt 350,- €)" },
      { id: "2r", name: "Carbo-Brain (je 10x)", price: "473,- €", detail: "CO₂ + brainLight pur (Statt 525,- €, zzgl. Hülle 7,50 €)" },
      { id: "2s", name: "Kombi AkuLight 10", price: "945,- €", detail: "Akupunktur + Laser (Statt 1.050,- €, 3 RZ möglich)" },
      { id: "2t", name: "Kombi AkuDrop 10", price: "990,- €", detail: "Akupunktur + Infusion (Statt 1.100,- €, 3 RZ möglich)" },
      { id: "2u", name: "Kombi AirDrop", price: "975,- €", detail: "10x IHHT + 5x Infusion (Statt 1.075,- €, 3 RZ möglich)" },
      { id: "2v", name: "Kombi LightDrop 5", price: "551,- €", detail: "5x Laser + 5x Infusion (Statt 580,- €, 2 RZ möglich)" },
      { id: "2w", name: "Kombi LightDrop 10", price: "1.044,- €", detail: "10x Laser + 10x Infusion (Statt 1.160,- €, 3 RZ möglich)" },
      { id: "2x", name: "Super Kombi 10", price: "1.530,- €", detail: "Laser + Akupunktur + Infusion (Statt 1.700,- €, 3 RZ möglich)" },
      { id: "2y", name: "Ultra Kombi 20", price: "2.205,- €", detail: "20 Termine (Statt 2.450,- €, 3 RZ möglich)" },
      { id: "2z", name: "Mega Kombi 30", price: "2.630,- €", detail: "30 Termine (Statt 2.920,- €, 5 RZ möglich)" },
    ]
  },
  {
    id: "3", title: "Hebammenpraxis & Veranstaltungen", subtitle: "", icon: "Heart", highlight: false,
    items: [
      { id: "3a", name: "Geburtsvorbereitung Partnergebühr", price: "160,- €", detail: "Kompletter Kurs (14 Stunden)" },
      { id: "3b", name: "Partnergebühr (pro Stunde)", price: "12,- €", detail: "Bei stundenweiser Teilnahme" },
      { id: "3c", name: "Vorträge (1,5 Std.)", price: "ab 7,50 €", detail: "Auf freiwilliger Spendenbasis möglich" },
      { id: "3d", name: "Wochenend-Seminare", price: "250,- €", detail: "10-12 Std. inkl. Imbiss & Verpflegung" },
    ]
  }
];
