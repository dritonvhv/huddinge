/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ChevronRight, 
  Star, 
  ShieldCheck, 
  UserCheck, 
  Calendar,
  Menu,
  X,
  Play,
  CheckCircle2,
  Stethoscope,
  Sparkles,
  Zap,
  Smile,
  Instagram,
  Facebook,
  Award,
  Heart
} from 'lucide-react';
import { FloatingChat } from './components/FloatingChat';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <div className="relative w-12 h-12 bg-black rounded-full border-2 border-gold-500 flex items-center justify-center overflow-hidden">
      <span className="text-gold-500 font-serif text-2xl font-bold">H</span>
      <div className="absolute inset-0 border border-gold-500/30 rounded-full scale-90"></div>
    </div>
    <div className="flex flex-col">
      <span className="font-bold text-lg leading-none tracking-tight text-white">
        HUDDINGE <span className="text-gold-500">TANDVÅRD</span>
      </span>
      <span className="text-[10px] uppercase tracking-[0.2em] text-gold-400 font-medium">
        Rådsvägen • Sedan 1986
      </span>
    </div>
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Hem', href: '#' },
    { name: 'Behandlingar', href: '#behandlingar' },
    { name: 'Om oss', href: '#om-oss' },
    { name: 'Kontakt', href: '#kontakt' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-black/95 backdrop-blur-md border-b border-gold-900/30 py-3' : 'bg-white/80 backdrop-blur-sm py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className={`flex items-center gap-3 transition-colors duration-500`}>
          <div className="relative w-12 h-12 bg-black rounded-full border-2 border-gold-500 flex items-center justify-center overflow-hidden">
            <span className="text-gold-500 font-serif text-2xl font-bold">H</span>
            <div className="absolute inset-0 border border-gold-500/30 rounded-full scale-90"></div>
          </div>
          <div className="flex flex-col">
            <span className={`font-bold text-lg leading-none tracking-tight transition-colors duration-500 ${isScrolled ? 'text-white' : 'text-black'}`}>
              HUDDINGE <span className="text-gold-600">TANDVÅRD</span>
            </span>
            <span className={`text-[10px] uppercase tracking-[0.2em] font-medium transition-colors duration-500 ${isScrolled ? 'text-gold-400' : 'text-gold-600'}`}>
              Rådsvägen • Sedan 1986
            </span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-xs uppercase tracking-widest font-bold transition-colors duration-500 ${isScrolled ? 'text-white/70 hover:text-gold-500' : 'text-black/70 hover:text-gold-600'}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://www.muntra.com/huddinge-tandvard-radsvagen/c/7627?language=sv"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all transform hover:scale-105 active:scale-95 shadow-lg ${isScrolled ? 'bg-gold-500 text-black hover:bg-gold-600 shadow-gold-500/20' : 'bg-black text-gold-500 hover:bg-gold-900 shadow-black/20'}`}
          >
            Boka Tid
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden p-2 transition-colors duration-500 ${isScrolled ? 'text-gold-500' : 'text-black'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`absolute top-full left-0 right-0 border-t overflow-hidden md:hidden ${isScrolled ? 'bg-black border-gold-900/30' : 'bg-white border-slate-100'}`}
          >
            <div className="p-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className={`text-xl font-bold transition-colors ${isScrolled ? 'text-white hover:text-gold-500' : 'text-black hover:text-gold-600'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="tel:087118108" 
                className={`flex items-center justify-center gap-3 py-4 rounded-xl font-black uppercase tracking-widest text-sm ${isScrolled ? 'bg-gold-500 text-black' : 'bg-black text-gold-500'}`}
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
};

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center pt-32 pb-20 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-beige-200 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-beige-100 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex flex-col gap-2 mb-8">
            <div className="flex items-center gap-1 text-gold-600">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              <span className="ml-2 text-sm font-bold text-black">4,9 av 5.0 i betyg:</span>
            </div>
            <p className="text-sm text-slate-500 italic">"Snabb och proffsig hjälp. Väldigt bra bemötande och omhändertagande."</p>
          </div>

          <h1 className="text-6xl lg:text-8xl font-black text-black leading-tight mb-8 tracking-tight font-display">
            Expertis som <br />
            <span className="text-gold-600 italic font-serif font-black">märks</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed font-light">
            Välkommen till en av Huddinges mest anrika kliniker. Vi kombinerar fyrtio års erfarenhet med den senaste teknologin för att ge dig ett leende i världsklass.
          </p>
          
          <div className="flex flex-wrap gap-6 items-center">
            <a 
              href="https://www.muntra.com/huddinge-tandvard-radsvagen/c/7627?language=sv"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-black text-gold-500 rounded-full font-black text-sm uppercase tracking-widest hover:bg-gold-950 transition-all shadow-2xl shadow-black/10 flex items-center gap-3 group"
            >
              Boka Din Tid
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="tel:087118108" className="flex items-center gap-4 text-black hover:text-gold-600 transition-colors group">
              <div className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center group-hover:border-gold-500 transition-colors">
                <Phone size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-slate-400">Ring oss direkt</span>
                <span className="font-bold text-lg">08-711 81 08</span>
              </div>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative lg:block hidden"
        >
          <div className="relative z-10 rounded-[60px] overflow-hidden border border-gold-200 aspect-[4/5] shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" 
              alt="Modern Dental Clinic" 
              className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" />
          </div>
          
          {/* Floating Badge */}
          <div className="absolute -bottom-10 -right-10 z-20 bg-black text-gold-500 p-10 rounded-full flex flex-col items-center justify-center shadow-2xl border-4 border-white">
            <span className="text-4xl font-black leading-none">40</span>
            <span className="text-[10px] font-bold uppercase tracking-widest">År</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Offers = () => {
  const offers = [
    { title: "Basundersökning", price: "495:-", original: "995:-", desc: "Gäller nya patienter. Inkluderar 4 röntgenbilder och enklare rengöring.", tag: "Nyhet" },
    { title: "Tandblekning", price: "1995:-", original: "3500:-", desc: "Få ett strålande vitt leende med vår skonsamma klinikblekning.", tag: "Populär" },
    { title: "Akut Undersökning", price: "0:-*", original: "895:-", desc: "Fri undersökning vid påbörjad behandling samma dag.", tag: "Akut" },
  ];

  return (
    <section className="py-20 bg-beige-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-gold-200" />
          <h2 className="text-2xl font-bold text-black uppercase tracking-widest">Aktuella Erbjudanden</h2>
          <div className="h-px flex-1 bg-gold-200" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {offers.map((offer, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 bg-gold-500 text-black text-[10px] font-black px-4 py-1 rounded-bl-xl uppercase tracking-widest">
                {offer.tag}
              </div>
              <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">{offer.desc}</p>
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-black text-black">{offer.price}</span>
                <span className="text-sm text-slate-300 line-through">{offer.original}</span>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-50">
                <a href="https://www.muntra.com/huddinge-tandvard-radsvagen/c/7627?language=sv" className="text-xs font-black uppercase tracking-widest text-gold-600 flex items-center gap-2 group-hover:gap-4 transition-all">
                  Boka nu <ChevronRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ToothIcon = ({ className = "", children, variant = 1 }: { className?: string, children?: React.ReactNode, variant?: number }) => {
  const paths = [
    "M5 8C5 5 7 3 12 3C17 3 19 5 19 8C19 11 18 13 17 15C16 17 17 21 15 21C13 21 13 18 12 18C11 18 11 21 9 21C7 21 8 17 7 15C6 13 5 11 5 8Z",
    "M6 8C6 5 8 4 12 4C16 4 18 5 18 8C18 11 17 13 16 15C15 17 16 20 14 20C13 20 12.5 18 12 18C11.5 18 11 20 10 20C8 20 9 17 8 15C7 13 6 11 6 8Z",
    "M5 7C5 4 8 3 12 3C16 3 19 4 19 7C19 10 18 12 17 14C16 16 17 21 15 21C13 21 13 19 12 19C11 19 11 21 9 21C7 21 8 16 7 14C6 12 5 10 5 7Z"
  ];
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={`w-12 h-12 ${className}`}>
      <path d={paths[variant - 1] || paths[0]} />
      {children}
    </svg>
  );
};

const Services = () => {
  const services = [
    { 
      visual: (
        <div className="relative w-16 h-16 mb-6 flex items-center justify-center">
          <motion.div 
            animate={{ 
              rotate: [0, -5, 5, -5, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gold-600"
          >
            <ToothIcon variant={1}>
              <motion.path 
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                d="M12 5.5 L12 12 M10 8 L14 8" 
                stroke="red" 
                strokeWidth="2"
              />
            </ToothIcon>
          </motion.div>
          <div className="absolute -top-1 -right-1">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-ping" />
          </div>
        </div>
      ), 
      title: "Akut Tandvård", 
      desc: "Smärta väntar inte. Vi erbjuder akuttider oftast samma dag för att hjälpa dig direkt." 
    },
    { 
      visual: (
        <div className="relative w-16 h-16 mb-6 flex items-center justify-center">
          <motion.div 
            animate={{ 
              filter: ["drop-shadow(0 0 0px gold)", "drop-shadow(0 0 8px gold)", "drop-shadow(0 0 0px gold)"]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gold-500"
          >
            <ToothIcon variant={2}>
              <motion.circle 
                animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                cx="17" cy="7" r="2" fill="currentColor" 
              />
            </ToothIcon>
          </motion.div>
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border border-gold-200 border-dashed rounded-full opacity-30"
          />
        </div>
      ), 
      title: "Estetisk Tandvård", 
      desc: "Skapa ditt drömleende med skalfasader, tandblekning och modern korrigering." 
    },
    { 
      visual: (
        <div className="relative w-16 h-16 mb-6 flex items-center justify-center">
          <motion.div 
            animate={{ 
              y: [-2, 2, -2]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-gold-600"
          >
            <ToothIcon variant={3} />
          </motion.div>
          <motion.div 
            animate={{ 
              x: [-10, 10, -10],
              rotate: [0, 20, 0]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -bottom-2 -right-2 text-gold-400"
          >
            <Stethoscope size={24} />
          </motion.div>
        </div>
      ), 
      title: "Allmän Tandvård", 
      desc: "Förebyggande vård, undersökningar och lagningar utförda med högsta precision." 
    },
    { 
      visual: (
        <div className="relative w-16 h-16 mb-6 flex items-center justify-center">
          <motion.div className="text-gold-600">
            <ToothIcon variant={1}>
              <motion.path 
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                d="M8 19 L12 22 L16 19" 
                strokeWidth="2"
              />
            </ToothIcon>
          </motion.div>
          <motion.div 
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-gold-500 rounded-full blur-2xl -z-10"
          />
        </div>
      ), 
      title: "Implantat", 
      desc: "Återskapa din tuggfunktion och ditt självförtroende med permanenta tandimplantat." 
    },
    { 
      visual: (
        <div className="relative w-16 h-16 mb-6 flex items-center justify-center">
          <motion.div 
            animate={{ 
              color: ["#a67f1e", "#c5a028", "#a67f1e"]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gold-500"
          >
            <ToothIcon variant={2} />
          </motion.div>
          <motion.div 
            animate={{ 
              scale: [0.5, 1.2, 0.5],
              opacity: [0, 1, 0]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 flex items-center justify-center text-white/50"
          >
            <Sparkles size={32} />
          </motion.div>
        </div>
      ), 
      title: "Tandblekning", 
      desc: "Säker och effektiv blekning som ger dig ett naturligt vitt och strålande leende." 
    },
    { 
      visual: (
        <div className="relative w-16 h-16 mb-6 flex items-center justify-center">
          <motion.div 
            animate={{ 
              scale: [1, 1.02, 1]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="text-gold-600"
          >
            <ToothIcon variant={3} />
          </motion.div>
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 text-gold-400"
          >
            <ShieldCheck size={64} strokeWidth={1} />
          </motion.div>
        </div>
      ), 
      title: "Specialistvård", 
      desc: "Vi hanterar komplexa fall med expertis inom kirurgi och avancerad protetik." 
    },
  ];

  return (
    <section id="behandlingar" className="py-20 bg-beige-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="max-w-2xl">
            <span className="text-gold-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">Våra Tjänster</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-black leading-tight">Expertis som täcker <br /> <span className="text-gold-600 italic font-serif">alla dina behov</span></h2>
          </div>
          <p className="text-slate-400 max-w-sm text-xs leading-relaxed">
            Från den årliga kontrollen till avancerade estetiska ingrepp – vi levererar kvalitet i varje detalj.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5, backgroundColor: '#ffffff' }}
              className="p-8 rounded-[32px] transition-all group bg-white/60 border border-beige-200 shadow-sm hover:shadow-xl hover:shadow-gold-500/5"
            >
              <div className="mb-6">
                {service.visual}
              </div>
              <h3 className="text-lg font-bold text-black mb-3 group-hover:text-gold-600 transition-colors">{service.title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed mb-6 line-clamp-2">{service.desc}</p>
              <a href="#" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gold-600 group-hover:gap-3 transition-all">
                Läs mer <ChevronRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="om-oss" className="py-32 bg-beige-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
        <div className="order-2 lg:order-1">
          <span className="text-gold-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">Vår Historia</span>
          <h2 className="text-4xl lg:text-6xl font-bold text-black mb-8">Fyrtio år av <br /> <span className="text-gold-600">lokalt förtroende</span></h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-10 font-light">
            Sedan 1986 har vi varit en trygg punkt för invånarna i Huddinge. Vår resa började med en vision om att erbjuda personlig tandvård där patienten alltid står i centrum. Idag, 40 år senare, är vi stolta över att ha behandlat generationer av familjer med samma passion och noggrannhet.
          </p>
          
          <div className="grid grid-cols-2 gap-8 mb-12">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-gold-600">
                <CheckCircle2 size={18} />
                <span className="font-bold text-black">Erfarenhet</span>
              </div>
              <p className="text-xs text-slate-400">4 decennier av klinisk expertis.</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-gold-600">
                <Heart size={18} />
                <span className="font-bold text-black">Omtanke</span>
              </div>
              <p className="text-xs text-slate-400">Vi ser människan bakom leendet.</p>
            </div>
          </div>

          <button className="px-10 py-5 border border-black/10 text-black rounded-full font-black text-xs uppercase tracking-widest hover:bg-black hover:text-gold-500 transition-all">
            Läs mer om vårt team
          </button>
        </div>

        <div className="order-1 lg:order-2 relative">
          <div className="rounded-[60px] overflow-hidden border border-white shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800" 
              alt="Dental Equipment" 
              className="w-full aspect-square object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative element */}
          <div className="absolute -top-10 -left-10 w-40 h-40 border border-gold-200 rounded-full -z-10" />
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { 
      name: "Udoy Hossain", 
      text: "Bättre tandläkarklinik får ni leta efter. Trots svår tandläkarrädsla får de en alltid att känna sig säker och trygg i stolen. Lokalerna är fräscha och man glömmer ibland att det är tandläkaren man är hos!", 
      rating: 5,
      date: "Google Recension"
    },
    { 
      name: "Petra H.", 
      text: "Helt underbart bemötande. Tandläkaren tog sig tid för att möta mig som person. Väldigt grundligt undersökt min tandstatus. Tandsköterskan var omtänksam och varm. Jag kommer definitivt tillbaka!", 
      rating: 5,
      date: "Google Recension"
    },
    { 
      name: "Lars G.", 
      text: "Proffsigt och personligt bemötande. De förklarar allt pedagogiskt och man känner sig i trygga händer. Bästa kliniken i Huddinge, rekommenderas varmt till alla som söker kvalitet.", 
      rating: 5,
      date: "Google Recension"
    },
  ];

  return (
    <section className="py-32 bg-beige-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-gold-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">Patienter</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-black">Vad våra patienter säger</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              className="p-10 rounded-[40px] bg-white border border-beige-100 flex flex-col items-center text-center shadow-sm"
            >
              <div className="flex gap-1 text-gold-600 mb-6">
                {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-base text-slate-700 italic mb-8 font-light leading-relaxed">"{review.text}"</p>
              <div className="mt-auto">
                <p className="font-bold text-black">{review.name}</p>
                <p className="text-[10px] uppercase tracking-widest text-slate-400">{review.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="kontakt" className="py-32 bg-beige-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-[60px] border border-beige-50 overflow-hidden grid lg:grid-cols-2 shadow-xl">
          <div className="p-16 lg:p-24">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-12">Hitta till oss</h2>
            <div className="space-y-10">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-beige-50 flex items-center justify-center text-gold-700 group-hover:bg-black group-hover:text-gold-500 transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-1">Adress</p>
                  <p className="text-black font-bold">Rådsvägen 5G, 141 48 Huddinge</p>
                </div>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-gold-50 flex items-center justify-center text-gold-700 group-hover:bg-black group-hover:text-gold-500 transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-1">Telefon</p>
                  <p className="text-black font-bold">08-711 81 08</p>
                </div>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-gold-50 flex items-center justify-center text-gold-700 group-hover:bg-black group-hover:text-gold-500 transition-all">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-1">Öppettider</p>
                  <div className="text-black font-bold space-y-1">
                    <p>Mån - Tor: 08:00 - 17:00</p>
                    <p>Fre: 08:00 - 12:00</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-16">
              <a 
                href="https://www.muntra.com/huddinge-tandvard-radsvagen/c/7627?language=sv"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-12 py-5 bg-black text-gold-500 rounded-full font-black text-xs uppercase tracking-widest hover:bg-gold-950 transition-all shadow-xl shadow-black/20"
              >
                Boka tid online
              </a>
            </div>
          </div>
          
          <div className="relative min-h-[500px] bg-slate-50 flex items-center justify-center">
            <div className="absolute inset-0 opacity-10">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000" 
                alt="Clinic Interior" 
                className="w-full h-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="relative z-10 text-center p-12">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center text-gold-500 mx-auto mb-6 shadow-2xl">
                <MapPin size={32} />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Välkommen in</h3>
              <p className="text-slate-500 text-sm font-light">Vi finns centralt i Huddinge, bara ett stenkast från centrum.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white text-black pt-32 pb-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="relative w-12 h-12 bg-black rounded-full border-2 border-gold-500 flex items-center justify-center overflow-hidden">
                <span className="text-gold-500 font-serif text-2xl font-bold">H</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-none tracking-tight">
                  HUDDINGE <span className="text-gold-600">TANDVÅRD</span>
                </span>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-8 font-light">
              Sedan 1986 har vi levererat tandvård med passion och precision. Din trygghet är vår främsta prioritet.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/huddingetandvardr/" className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-black hover:text-gold-500 transition-all">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/huddingetandvard/" className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-black hover:text-gold-500 transition-all">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gold-600 mb-8">Navigation</h4>
            <ul className="space-y-4 text-slate-500 text-xs font-bold uppercase tracking-widest">
              <li><a href="#" className="hover:text-black transition-colors">Hem</a></li>
              <li><a href="#behandlingar" className="hover:text-black transition-colors">Behandlingar</a></li>
              <li><a href="#om-oss" className="hover:text-black transition-colors">Om oss</a></li>
              <li><a href="#kontakt" className="hover:text-black transition-colors">Kontakt</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gold-600 mb-8">Tjänster</h4>
            <ul className="space-y-4 text-slate-500 text-xs font-bold uppercase tracking-widest">
              <li><a href="#" className="hover:text-black transition-colors">Akut Tandvård</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Estetisk Tandvård</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Tandimplantat</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Allmän Tandvård</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gold-600 mb-8">Kontakt</h4>
            <ul className="space-y-4 text-slate-500 text-xs font-bold tracking-widest">
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-gold-600" />
                08-711 81 08
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-gold-600" />
                info@huddingetandvard.se
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={14} className="text-gold-600" />
                Rådsvägen 5G, Huddinge
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold uppercase tracking-widest text-slate-300">
          <p>© 2026 Huddinge Tandvård Rådsvägen. Fyrtio år av expertis.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-black transition-colors">Integritetspolicy</a>
            <a href="#" className="hover:text-black transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-black selection:bg-gold-500 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Offers />
        <Services />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingChat />
    </div>
  );
}
