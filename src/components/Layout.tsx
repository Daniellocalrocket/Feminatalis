import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X, Heart, Mail, Phone, MapPin, ChevronDown, ArrowUp } from "lucide-react";
import { SiInstagram, SiFacebook } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import { ROUTE_PATHS } from "@/lib/index";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { pathname } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // Scroll to top on navigation
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsScrolled(false);
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    // Check initial scroll position
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: ROUTE_PATHS.HOME },
    { 
      name: "Hebammenpraxis", 
      path: ROUTE_PATHS.HEBAMMENPRAXIS,
      subItems: [
        { name: "Biochemische Geburtsvorbereitung", path: ROUTE_PATHS.GEBURTSVORBEREITUNG, desc: "Zelluläre Power & Nährstoffe" },
        { name: "Wochenbett & Hausbesuche", path: ROUTE_PATHS.WOCHENBETTBETREUUNG, desc: "Ganzheitliche Begleitung" },
        { name: "IHHT / Zelltraining", path: ROUTE_PATHS.ZELLTRAINING, desc: "Sauerstofftherapie" },
        { name: "Akupunktur", path: ROUTE_PATHS.AKUPUNKTUR, desc: "TCM & Geburtsvorbereitung" },
        { name: "Rückbildung", path: ROUTE_PATHS.RUECKBILDUNG, desc: "Beckenboden-Fokus" },
        { name: "Schwangerschaftsbeschwerden", path: ROUTE_PATHS.BESCHWERDEN, desc: "Natürliche Linderung" },
        { name: "Mikronährstoff-Beratung", path: ROUTE_PATHS.MIKRONAEHRSTOFFE, desc: "Optimale Vitalstoff-Zufuhr" }
      ]
    },
    { 
      name: "Naturheilpraxis", 
      path: ROUTE_PATHS.NATURHEILPRAXIS,
      subItems: [
        { name: "Tiefgehende Labordiagnostik", path: ROUTE_PATHS.LABOR, desc: "Ursachenforschung" },
        { name: "Infusionstherapie", path: ROUTE_PATHS.INFUSIONSTHERAPIE, desc: "Direkte Nährstoffaufnahme" },
        { name: "Long-Covid Hilfe", path: ROUTE_PATHS.LONG_COVID, desc: "Energieaufbau" },
        { name: "CO2-Therapie", path: ROUTE_PATHS.CO2_THERAPIE, desc: "Carboxytherapie" },
        { name: "Darmanalyse & Mikrobiom", path: ROUTE_PATHS.DARMANALYSE, desc: "Darmgesundheit" },
        { name: "Bioidentische Hormone", path: ROUTE_PATHS.HORMONTHERAPIE, desc: "Natürliche Balance" },
        { name: "Schwermetallausleitung", path: ROUTE_PATHS.SCHWERMETALL, desc: "Chelat-Therapie" },
        { name: "TCM", path: ROUTE_PATHS.TCM, desc: "Traditionelle Chinesische Medizin" },
        { name: "Allergiebehandlung", path: ROUTE_PATHS.ALLERGIE, desc: "Immunmodulation" },
        { name: "brainLight Entspannung", path: ROUTE_PATHS.BRAINLIGHT, desc: "Tiefenregeneration" },
        { name: "Mitochondrien-Therapie", path: ROUTE_PATHS.MITOCHONDRIEN, desc: "Zelluläre Energie" },
        { name: "Homöopathie", path: ROUTE_PATHS.HOMOEOPATHIE, desc: "Ganzheitliche Heilung" },
        { name: "Blutegeltherapie", path: ROUTE_PATHS.BLUTEGEL, desc: "Natürliche Entzündungshemmung" },
        { name: "Lasertherapie", path: ROUTE_PATHS.LASERTHERAPIE, desc: "Regeneration & Licht" }
      ]
    },
    { name: "Kinderwunsch", path: ROUTE_PATHS.KINDERWUNSCH },
    { name: "Über mich", path: ROUTE_PATHS.UEBER_MICH },
    { name: "Magazin", path: ROUTE_PATHS.BLOG },
    { name: "Kontakt", path: ROUTE_PATHS.CONTACT }
  ];

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="flex flex-col min-h-screen bg-background font-sans">
      {/* Header */}
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border shadow-sm h-20 flex items-center"
      >
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <Link
            to={ROUTE_PATHS.HOME}
            className="flex items-center h-16 w-56 sm:w-64 shrink-0 transition-transform hover:scale-[1.02] active:scale-[0.98]"
            aria-label="Zur Startseite"
          >
            <img 
              src="/logo.png" 
              alt="Feminatalis Logo" 
              className="h-full w-full object-contain object-left drop-shadow-sm" 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-stretch gap-2">
            {navItems.map((item) => (
              <div 
                key={item.path} 
                className="relative flex items-stretch"
                onMouseEnter={() => setHoveredItem(item.path)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    cn(
                      "text-sm font-medium transition-colors flex items-center gap-1.5 px-4",
                      isActive || hoveredItem === item.path ? "text-primary" : "text-muted-foreground hover:text-foreground"
                    )
                  }
                >
                  {item.name}
                  {item.subItems && (
                     <ChevronDown 
                       size={14} 
                       className={cn(
                         "opacity-50 transition-transform duration-300",
                         hoveredItem === item.path ? "rotate-180 opacity-100" : ""
                       )} 
                     />
                  )}
                </NavLink>
                
                {item.subItems && hoveredItem === item.path && (
                  <div className="absolute top-[100%] left-0 pt-2 z-[100]">
                    <motion.div 
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={cn(
                        "bg-background/95 backdrop-blur-xl border border-border shadow-xl rounded-2xl p-4 grid gap-1.5 max-h-[75vh] overflow-y-auto",
                        item.subItems.length > 5 ? "w-[680px] grid-cols-2" : "w-80 grid-cols-1"
                      )}
                    >
                      {item.subItems.map((sub, idx) => (
                        <NavLink 
                          key={idx} 
                          to={sub.path} 
                          onClick={() => setHoveredItem(null)}
                          className="flex flex-col px-4 py-3 rounded-xl hover:bg-primary/5 hover:scale-[1.01] transition-all duration-200 group/sub"
                        >
                          <span className="text-sm font-semibold text-foreground group-hover/sub:text-primary transition-colors">{sub.name}</span>
                          <span className="text-[13px] text-muted-foreground mt-0.5 leading-snug">{sub.desc}</span>
                        </NavLink>
                      ))}
                    </motion.div>
                  </div>
                )}
              </div>
            ))}
            <div className="flex items-center ml-2">
              <Link
                to={ROUTE_PATHS.KURS}
                className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 hover:shadow-primary/20 transition-all shadow-md hover:shadow-lg active:scale-95 whitespace-nowrap"
              >
                Kurse & Events
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menü öffnen"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background md:hidden pt-24 px-6"
          >
            <nav className="flex flex-col gap-4 overflow-y-auto max-h-[70vh] pb-10">
              {navItems.map((item) => (
                <div key={item.path} className="flex flex-col gap-2">
                  <NavLink
                    to={item.path}
                    onClick={closeMobileMenu}
                    className={({ isActive }) =>
                      cn(
                        "text-2xl font-medium transition-colors border-b border-border/30 pb-2",
                        isActive ? "text-primary" : "text-foreground"
                      )
                    }
                  >
                    {item.name}
                  </NavLink>
                  
                  {item.subItems && (
                    <div className="flex flex-col gap-3 pl-4 mb-2">
                      {item.subItems.map((sub, idx) => (
                        <NavLink
                          key={idx}
                          to={sub.path}
                          onClick={closeMobileMenu}
                          className={({ isActive }) =>
                            cn(
                              "text-lg transition-colors flex items-center gap-2",
                              isActive ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
                            )
                          }
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-border inline-block" /> {sub.name}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                to={ROUTE_PATHS.KURS}
                onClick={closeMobileMenu}
                className="bg-primary text-primary-foreground px-8 py-4 rounded-xl text-center text-lg font-semibold mt-4 shadow-lg"
              >
                Kurse & Events
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-muted/30 border-t border-border mt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div className="space-y-6">
              <div className="flex items-center">
                <img 
                  src="/logo.png" 
                  alt="Feminatalis Logo" 
                  className="h-12 w-auto" 
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    if (e.currentTarget.nextElementSibling) {
                      (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                    }
                  }}
                />
                <div className="hidden items-center gap-2">
                  <Heart className="text-primary w-6 h-6" />
                  <span className="text-xl font-semibold">feminatalis</span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Ganzheitliche Begleitung auf deinem Weg zum Wunschkind.
                Naturheilkunde, Expertinnen-Wissen und emotionale Geborgenheit.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/feminatalis/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Feminatalis auf Instagram"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <SiInstagram size={20} />
                </a>
                <a
                  href="https://www.facebook.com/feminatalis"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Feminatalis auf Facebook"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <SiFacebook size={20} />
                </a>
              </div>
            </div>

            {/* Navigation Column */}
            <div className="space-y-6">
              <h4 className="font-semibold text-foreground uppercase tracking-wider text-xs">Navigation</h4>
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className="text-muted-foreground hover:text-primary text-sm transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <a href="https://www.cosmedea.de" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                    cosMedea (Zweitpraxis)
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Column */}
            <div className="space-y-6">
              <h4 className="font-semibold text-foreground uppercase tracking-wider text-xs">Kontakt</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <MapPin size={18} className="text-primary shrink-0" />
                  <span>Hebelstr. 3A<br />76669 Bad Schönborn</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Phone size={18} className="text-primary shrink-0" />
                  <a href="tel:072538468728" className="hover:text-primary transition-colors">07253-8468728</a>
                </li>
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Mail size={18} className="text-primary shrink-0" />
                  <a href="mailto:info@feminatalis.de" className="hover:text-primary transition-colors">info@feminatalis.de</a>
                </li>
              </ul>
            </div>

            {/* Info Column */}
            <div className="space-y-6">
              <h4 className="font-semibold text-foreground uppercase tracking-wider text-xs">Sprechzeiten</h4>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li className="flex justify-between"><span>Mo:</span> <span>08:00–12:30, 14:00–17:30</span></li>
                <li className="flex justify-between"><span>Di:</span> <span>14:00–17:30</span></li>
                <li className="flex justify-between"><span>Mi:</span> <span>08:00–12:30, 14:00–17:30</span></li>
                <li className="flex justify-between"><span>Do:</span> <span>08:30–12:30, 14:00–17:00</span></li>
                <li className="flex justify-between"><span>Fr:</span> <span>11:00–14:00</span></li>
              </ul>
              <div className="pt-4">
                <Link to={ROUTE_PATHS.IMPRESSUM} className="text-xs hover:text-primary transition-colors">Impressum</Link> / 
                <Link to="#" className="text-xs hover:text-primary transition-colors"> Datenschutz</Link>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © 2026 Feminatalis – Angela Deschner. Alle Rechte vorbehalten.
            </p>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              Made with <Heart size={10} className="text-primary fill-primary" /> in Bad-Schönborn
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {isScrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-[60] bg-primary text-primary-foreground p-3 rounded-full shadow-2xl hover:bg-accent hover:text-white transition-all duration-300 hover:scale-110 active:scale-95 group"
            aria-label="Nach oben scrollen"
          >
            <ArrowUp size={24} className="group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
