import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { ROUTE_PATHS } from "@/lib/index";
import { Layout } from "@/components/Layout";
import Home from "@/pages/Home";
import Blog from "@/pages/Blog";
import FAQ from "@/pages/FAQ";
import Contact from "@/pages/Contact";
import Hebammenpraxis from "@/pages/hebammenpraxis/Index";
import Geburtsvorbereitung from "@/pages/hebammenpraxis/Geburtsvorbereitung";
import Zelltraining from "@/pages/hebammenpraxis/Zelltraining";
import Wochenbettbetreuung from "@/pages/hebammenpraxis/Wochenbettbetreuung";
import Akupunktur from "@/pages/hebammenpraxis/Akupunktur";
import Rueckbildung from "@/pages/hebammenpraxis/Rueckbildung";

import Naturheilpraxis from "@/pages/naturheilpraxis/Index";
import Labor from "@/pages/naturheilpraxis/Labor";
import LongCovid from "@/pages/naturheilpraxis/LongCovid";
import Infusionstherapie from "@/pages/naturheilpraxis/Infusionstherapie";
import CO2Therapie from "@/pages/naturheilpraxis/CO2Therapie";
import OzonTherapie from "@/pages/naturheilpraxis/OzonTherapie";
import Darmsanierung from "@/pages/naturheilpraxis/Darmsanierung";
import Hormontherapie from "@/pages/naturheilpraxis/Hormontherapie";
import Schwermetall from "@/pages/naturheilpraxis/Schwermetall";
import TCM from "@/pages/naturheilpraxis/TCM";
import Kinderwunsch from "@/pages/Kinderwunsch";
import UeberMich from "@/pages/UeberMich";

// New Pages
import Allergie from "@/pages/naturheilpraxis/Allergie";
import BrainLight from "@/pages/naturheilpraxis/BrainLight";
import Mitochondrien from "@/pages/naturheilpraxis/Mitochondrien";
import Homoeopathie from "@/pages/naturheilpraxis/Homoeopathie";
import Blutegel from "@/pages/naturheilpraxis/Blutegel";
import Lasertherapie from "@/pages/naturheilpraxis/Lasertherapie";
import Beschwerden from "@/pages/hebammenpraxis/Beschwerden";
import Mikronaehrstoffe from "@/pages/hebammenpraxis/Mikronaehrstoffe";
import CosMedea from "@/pages/CosMedea";
import Vorqualifizierung from "@/pages/Vorqualifizierung";
import Impressum from "@/pages/Impressum";

// Admin Pages
import AdminLogin from "@/pages/admin/Login";
import AdminDashboard from "@/pages/admin/Dashboard";
import AdminLeads from "@/pages/admin/Leads";
import AdminEvents from "@/pages/admin/Events";

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
                path={ROUTE_PATHS.ZELLTRAINING} 
                element={<Zelltraining />} 
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
                path={ROUTE_PATHS.OZON_THERAPIE} 
                element={<OzonTherapie />} 
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
                path={ROUTE_PATHS.UEBER_MICH} 
                element={<UeberMich />} 
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
                path={ROUTE_PATHS.COSMEDEA} 
                element={<CosMedea />} 
              />
              <Route 
                path={ROUTE_PATHS.VORQUALIFIZIERUNG} 
                element={<Vorqualifizierung />} 
              />
              <Route 
                path={ROUTE_PATHS.IMPRESSUM} 
                element={<Impressum />} 
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
              {/* Fallback route - Redirecting to Home as no specific NotFound was provided */}
              <Route 
                path="*" 
                element={<Home />} 
              />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;