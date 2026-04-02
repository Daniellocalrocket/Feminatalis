import * as z from "zod";

export const SERVICE_AREAS = [
  { id: "hebamme", label: "Hebammenpraxis", description: "Schwangerschaft, Geburtshilfe & Nachsorge" },
  { id: "naturheilkunde", label: "Naturheilpraxis", description: "Funktionelle Medizin & Infusionen" },
  { id: "kinderwunsch", label: "Kinderwunsch", description: "Ganzheitliche Unterstützung" },
  { id: "cosmedea", label: "cosMedea Ästhetik", description: "Wellness & Hautgesundheit" },
] as const;

export const INSURANCE_TYPES = [
  "Gesetzlich versichert",
  "Privat versichert",
  "Selbstzahler",
  "Kassenleistung + Zusatzleistung gewünscht",
  "Noch unsicher",
] as const;

export const URGENCY_TYPES = [
  { id: "akut", label: "Akut (innerhalb 1 Woche)" },
  { id: "dringend", label: "Dringend (2-4 Wochen)" },
  { id: "planend", label: "Planend (1-3 Monate)" },
  { id: "info", label: "Nur Informationseinholung" },
] as const;

export const vorqualifizierungSchema = z.object({
  // Schritt 1
  areas: z.array(z.string()).min(1, "Bitte wählen Sie mindestens einen Bereich aus."),
  
  // Schritt 2
  firstName: z.string().min(2, "Vorname ist erforderlich"),
  lastName: z.string().min(2, "Nachname ist erforderlich"),
  email: z.string().email("Ungültige E-Mail-Adresse"),
  phone: z.string().min(6, "Telefonnummer ist erforderlich"),
  zipCode: z.string().length(5, "PLZ muss 5 Stellen haben"),
  insurance: z.enum(INSURANCE_TYPES, {
    required_error: "Bitte wählen Sie Ihre Versicherungssituation aus.",
  }),

  // Schritt 3 (Bedingte Felder)
  urgency: z.string().min(1, "Bitte wählen Sie die Dringlichkeit aus."),
  
  // Hebammenpraxis spezifisch
  pregnancyWeek: z.string().optional(),
  midwifeService: z.array(z.string()).optional(),

  // Kinderwunsch spezifisch
  ttcDuration: z.string().optional(),
  prevTreatments: z.array(z.string()).optional(),

  // Naturheilpraxis spezifisch
  complaintType: z.string().optional(),
  mainConcern: z.string().max(200, "Maximal 200 Zeichen").optional(),

  // Schritt 4
  additionalInfo: z.string().max(500, "Maximal 500 Zeichen").optional(),
  dataConsent: z.boolean().refine(val => val === true, {
    message: "Sie müssen der Datenschutzerklärung zustimmen.",
  }),
  newsletter: z.boolean().optional(),
});

export type VorqualifizierungData = z.infer<typeof vorqualifizierungSchema>;

export const defaultValues: Partial<VorqualifizierungData> = {
  areas: [],
  midwifeService: [],
  prevTreatments: [],
  dataConsent: false,
  newsletter: false,
};
