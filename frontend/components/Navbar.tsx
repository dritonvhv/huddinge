import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { BOOKING_URL } from "../constants";
import { SERVICES } from "../data/services";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Hem", to: "/" },
    { name: "Behandlingar", to: "/behandlingar" },
    { name: "Om oss", to: "/om-oss" },
    { name: "Kontakt", to: "/kontakt" },
  ];

  const linkClass = (isScrolled: boolean) =>
    `text-xs uppercase tracking-widest font-bold transition-colors duration-500 ${
      isScrolled ? "text-white/70 hover:text-gold-500" : "text-black/70 hover:text-gold-600"
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-black/95 backdrop-blur-md border-b border-gold-900/30 py-3" : "bg-white/80 backdrop-blur-sm py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 transition-colors duration-500">
          <div className="relative w-12 h-12 bg-black rounded-full border-2 border-gold-500 flex items-center justify-center overflow-hidden">
            <span className="text-gold-500 font-serif text-2xl font-bold leading-none -translate-y-[1px]">H</span>
            <div className="absolute inset-0 border border-gold-500/30 rounded-full scale-90" />
          </div>
          <div className="flex flex-col">
            <span
              className={`font-bold text-lg leading-none tracking-tight transition-colors duration-500 ${
                isScrolled ? "text-white" : "text-black"
              }`}
            >
              HUDDINGE <span className="text-gold-600">TANDVÅRD</span>
            </span>
            <span
              className={`text-[10px] uppercase tracking-[0.2em] font-medium transition-colors duration-500 ${
                isScrolled ? "text-gold-400" : "text-gold-600"
              }`}
            >
              Rådsvägen • Sedan 1986
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.to} className={linkClass(isScrolled)}>
              {link.name}
            </Link>
          ))}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all transform hover:scale-105 active:scale-95 shadow-lg ${
              isScrolled
                ? "bg-gold-500 text-black hover:bg-gold-600 shadow-gold-500/20"
                : "bg-black text-gold-500 hover:bg-gold-900 shadow-black/20"
            }`}
          >
            Boka Tid
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all shadow-md ${
              isScrolled
                ? "bg-gold-500 text-black hover:bg-gold-600 shadow-gold-500/20"
                : "bg-black text-gold-500 shadow-black/20"
            }`}
          >
            Boka
          </a>
          <button
            type="button"
            className={`p-1 transition-colors duration-500 ${isScrolled ? "text-gold-500" : "text-black"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Meny"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`absolute top-full left-0 right-0 border-t overflow-hidden md:hidden ${
              isScrolled ? "bg-black border-gold-900/30" : "bg-white border-slate-100"
            }`}
          >
            <div className="p-8 flex flex-col gap-6">
              {navLinks.map((link) => {
                if (link.name === "Behandlingar") {
                  return (
                    <div key={link.name} className="flex flex-col gap-3">
                      <button
                        className={`flex items-center justify-between text-xl font-bold transition-colors ${
                          isScrolled ? "text-white" : "text-black"
                        }`}
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                      >
                        {link.name}
                        <ChevronDown
                          size={20}
                          className={`transition-transform duration-300 ${isServicesOpen ? "rotate-180 text-gold-500" : ""}`}
                        />
                      </button>
                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="flex flex-col gap-4 pl-4 border-l-2 border-gold-500/30 overflow-hidden"
                          >
                            <Link
                              to="/behandlingar"
                              className={`text-xs font-black uppercase tracking-widest mt-2 ${isScrolled ? "text-gold-400" : "text-gold-600"}`}
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setIsServicesOpen(false);
                              }}
                            >
                              Översikt alla behandlingar →
                            </Link>
                            {SERVICES.map((service) => (
                              <Link
                                key={service.slug}
                                to={`/tjanster/${service.slug}`}
                                className={`text-base font-medium transition-colors ${
                                  isScrolled ? "text-white/70 hover:text-white" : "text-slate-600 hover:text-black"
                                }`}
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  setIsServicesOpen(false);
                                }}
                              >
                                {service.title}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                
                return (
                  <Link
                    key={link.name}
                    to={link.to}
                    className={`text-xl font-bold transition-colors border-b pb-4 ${
                      isScrolled ? "text-white hover:text-gold-500 border-white/10" : "text-black hover:text-gold-600 border-black/5"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <a
                href="tel:087118108"
                className={`flex items-center justify-center gap-3 py-4 rounded-xl font-black uppercase tracking-widest text-sm ${
                  isScrolled ? "bg-gold-500 text-black" : "bg-black text-gold-500"
                }`}
              >
                <Phone size={18} />
                08-711 81 08
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
