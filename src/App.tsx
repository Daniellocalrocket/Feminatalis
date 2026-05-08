import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { ROUTE_PATHS } from "@/lib/index";
import { Layout } from "@/components/Layout";
import { lazy, Suspense } from "react";

// Lazy-loaded pages for code splitting & faster initial load
const Home = lazy(() => import("@/pages/Home"));
const Blog = lazy(() => import("@/pages/Blog"));
const BlogPostDetails = lazy(() => import("@/pages/BlogPostDetails"));
const FAQ = lazy(() => import("@/pages/FAQ"));
const Contact = lazy(() => import("@/pages/Contact"));
const Hebammenpraxis = lazy(() => import("@/pages/hebammenpraxis/Index"));
const Geburtsvorbereitung = lazy(() => import("@/pages/hebammenpraxis/Geburtsvorbereitung"));
const PremiumZellkraftKurs = lazy(() => import("@/pages/hebammenpraxis/PremiumZellkraftKurs"));
const Zelltraining = lazy(() => import("@/pages/hebammenpraxis/Zelltraining"));
const ZelltrainingSchwangerschaft = lazy(() => import("@/pages/hebammenpraxis/ZelltrainingSchwangerschaft"));
const Wochenbettbetreuung = lazy(() => import("@/pages/hebammenpraxis/Wochenbettbetreuung"));
const Akupunktur = lazy(() => import("@/pages/hebammenpraxis/Akupunktur"));
const Rueckbildung = lazy(() => import("@/pages/hebammenpraxis/Rueckbildung"));
const Naturheilpraxis = lazy(() => import("@/pages/naturheilpraxis/Index"));
const Labor = lazy(() => import("@/pages/naturheilpraxis/Labor"));
const LongCovid = lazy(() => import("@/pages/naturheilpraxis/LongCovid"));
const Infusionstherapie = lazy(() => import("@/pages/naturheilpraxis/Infusionstherapie"));
const CO2Therapie = lazy(() => import("@/pages/naturheilpraxis/CO2Therapie"));
const Darmsanierung = lazy(() => import("@/pages/naturheilpraxis/Darmsanierung"));
const Hormontherapie = lazy(() => import("@/pages/naturheilpraxis/Hormontherapie"));
const Schwermetall = lazy(() => import("@/pages/naturheilpraxis/Schwermetall"));
const TCM = lazy(() => import("@/pages/naturheilpraxis/TCM"));
const Kinderwunsch = lazy(() => import("@/pages/Kinderwunsch"));
const UeberMich = lazy(() => import("@/pages/UeberMich"));
const Allergie = lazy(() => import("@/pages/naturheilpraxis/Allergie"));
const BrainLight = lazy(() => import("@/pages/naturheilpraxis/BrainLight"));
const Mitochondrien = lazy(() => import("@/pages/naturheilpraxis/Mitochondrien"));
const Homoeopathie = lazy(() => import("@/pages/naturheilpraxis/Homoeopathie"));
const Blutegel = lazy(() => import("@/pages/naturheilpraxis/Blutegel"));
const Lasertherapie = lazy(() => import("@/pages/naturheilpraxis/Lasertherapie"));
const Beschwerden = lazy(() => import("@/pages/hebammenpraxis/Beschwerden"));
const Mikronaehrstoffe = lazy(() => import("@/pages/hebammenpraxis/Mikronaehrstoffe"));
const Vorqualifizierung = lazy(() => import("@/pages/Vorqualifizierung"));
const ZellkraftRoadmap = lazy(() => import("@/pages/kinderwunsch/ZellkraftRoadmap"));
const CoursesOverview = lazy(() => import("@/pages/CoursesOverview"));
const KursInteresse = lazy(() => import("@/pages/KursInteresse"));
const EventBooking = lazy(() => import("@/pages/EventBooking"));
const Impressum = lazy(() => import("@/pages/Impressum"));
const Datenschutz = lazy(() => import("@/pages/Datenschutz"));
const AGB = lazy(() => import("@/pages/AGB"));
const Preisliste = lazy(() => import("@/pages/Preisliste"));
const AdminLogin = lazy(() => import("@/pages/admin/Login"));
const AdminDashboard = lazy(() => import("@/pages/admin/Dashboard"));
const AdminLeads = lazy(() => import("@/pages/admin/Leads"));
const AdminEvents = lazy(() => import("@/pages/admin/Events"));
const AdminBlog = lazy(() => import("@/pages/admin/Blog"));
const AdminSettings = lazy(() => import("@/pages/admin/Settings"));
const AdminImages = lazy(() => import("@/pages/admin/Images"));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="flex flex-col items-center gap-4">
      <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      <p className="text-sm text-muted-foreground font-medium">Seite wird geladen…</p>
    </div>
  </div>
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      retry: 1,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner 
          position="bottom-right" 
          expand={false} 
          richColors 
          closeButton
        />
        <BrowserRouter>
          <Suspense fallback={<PageLoader />}>
            <Layout>
              <Routes>
              <Route 
                path={ROUTE_PATHS.HOME} 
                element={<Home />} 
              />
              <Route 
                path={ROUTE_PATHS.BLOG} 
                element={<Blog />} 
              />
              <Route 
                path={ROUTE_PATHS.BLOG_POST} 
                element={<BlogPostDetails />} 
              />
              <Route 
                path={ROUTE_PATHS.FAQ} 
                element={<FAQ />} 
              />
              <Route 
                path={ROUTE_PATHS.CONTACT} 
                element={<Contact />} 
              />
              <Route 
                path={ROUTE_PATHS.HEBAMMENPRAXIS} 
                element={<Hebammenpraxis />} 
              />
              <Route 
                path={ROUTE_PATHS.GEBURTSVORBEREITUNG} 
                element={<Geburtsvorbereitung />} 
              />
              <Route 
                path={ROUTE_PATHS.PREMIUM_ZELLKRAFT_KURS} 
                element={<PremiumZellkraftKurs />} 
              />
              <Route 
                path={ROUTE_PATHS.ZELLTRAINING} 
                element={<Zelltraining />} 
              />
              <Route 
                path={ROUTE_PATHS.ZELLTRAINING_SCHWANGERSCHAFT} 
                element={<ZelltrainingSchwangerschaft />} 
              />
              <Route 
                path={ROUTE_PATHS.WOCHENBETTBETREUUNG} 
                element={<Wochenbettbetreuung />} 
              />
              <Route 
                path={ROUTE_PATHS.NATURHEILPRAXIS} 
                element={<Naturheilpraxis />} 
              />
              <Route 
                path={ROUTE_PATHS.LABOR} 
                element={<Labor />} 
              />
              <Route 
                path={ROUTE_PATHS.LONG_COVID} 
                element={<LongCovid />} 
              />
              <Route 
                path={ROUTE_PATHS.INFUSIONSTHERAPIE} 
                element={<Infusionstherapie />} 
              />
              <Route 
                path={ROUTE_PATHS.CO2_THERAPIE} 
                element={<CO2Therapie />} 
              />
              <Route 
                path={ROUTE_PATHS.DARMANALYSE} 
                element={<Darmsanierung />} 
              />
              <Route 
                path={ROUTE_PATHS.HORMONTHERAPIE} 
                element={<Hormontherapie />} 
              />
              <Route 
                path={ROUTE_PATHS.SCHWERMETALL} 
                element={<Schwermetall />} 
              />
              <Route 
                path={ROUTE_PATHS.TCM} 
                element={<TCM />} 
              />
              <Route 
                path={ROUTE_PATHS.AKUPUNKTUR} 
                element={<Akupunktur />} 
              />
              <Route 
                path={ROUTE_PATHS.RUECKBILDUNG} 
                element={<Rueckbildung />} 
              />
              <Route 
                path={ROUTE_PATHS.KINDERWUNSCH} 
                element={<Kinderwunsch />} 
              />
              <Route 
                path={ROUTE_PATHS.ZELLKRAFT_ROADMAP} 
                element={<ZellkraftRoadmap />} 
              />
              <Route 
                path={ROUTE_PATHS.KURS} 
                element={<CoursesOverview />} 
              />
              <Route 
                path={ROUTE_PATHS.KURS_INTERESSE} 
                element={<KursInteresse />} 
              />
              <Route 
                path={ROUTE_PATHS.EVENT_BOOKING} 
                element={<EventBooking />} 
              />
              <Route 
                path={ROUTE_PATHS.UEBER_MICH} 
                element={<UeberMich />} 
              />
              <Route 
                path={ROUTE_PATHS.PREISLISTE} 
                element={<Preisliste />} 
              />
              
              {/* New Routes */}
              <Route 
                path={ROUTE_PATHS.ALLERGIE} 
                element={<Allergie />} 
              />
              <Route 
                path={ROUTE_PATHS.BRAINLIGHT} 
                element={<BrainLight />} 
              />
              <Route 
                path={ROUTE_PATHS.MITOCHONDRIEN} 
                element={<Mitochondrien />} 
              />
              <Route 
                path={ROUTE_PATHS.HOMOEOPATHIE} 
                element={<Homoeopathie />} 
              />
              <Route 
                path={ROUTE_PATHS.BLUTEGEL} 
                element={<Blutegel />} 
              />
              <Route 
                path={ROUTE_PATHS.LASERTHERAPIE} 
                element={<Lasertherapie />} 
              />
              <Route 
                path={ROUTE_PATHS.BESCHWERDEN} 
                element={<Beschwerden />} 
              />
              <Route 
                path={ROUTE_PATHS.MIKRONAEHRSTOFFE} 
                element={<Mikronaehrstoffe />} 
              />

              <Route 
                path={ROUTE_PATHS.VORQUALIFIZIERUNG} 
                element={<Vorqualifizierung />} 
              />
              <Route 
                path={ROUTE_PATHS.IMPRESSUM} 
                element={<Impressum />} 
              />
              <Route 
                path={ROUTE_PATHS.DATENSCHUTZ} 
                element={<Datenschutz />} 
              />
              <Route 
                path={ROUTE_PATHS.AGB} 
                element={<AGB />} 
              />
              
              {/* Admin Routes */}
              <Route 
                path={ROUTE_PATHS.ADMIN_LOGIN} 
                element={<AdminLogin />} 
              />
              <Route 
                path={ROUTE_PATHS.ADMIN_DASHBOARD} 
                element={<AdminDashboard />} 
              />
              <Route 
                path={ROUTE_PATHS.ADMIN_LEADS} 
                element={<AdminLeads />} 
              />
              <Route 
                path={ROUTE_PATHS.ADMIN_EVENTS} 
                element={<AdminEvents />} 
              />
              <Route 
                path={ROUTE_PATHS.ADMIN_BLOG} 
                element={<AdminBlog />} 
              />
              <Route 
                path={ROUTE_PATHS.ADMIN_SETTINGS} 
                element={<AdminSettings />} 
              />
              <Route 
                path={ROUTE_PATHS.ADMIN_IMAGES} 
                element={<AdminImages />} 
              />
              {/* Fallback route - Redirecting to Home as no specific NotFound was provided */}
              <Route 
                path="*" 
                element={<Home />} 
              />
            </Routes>
            </Layout>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;