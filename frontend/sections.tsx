/**
 * Startsidor – sektioner för startsidan
 */
import { Link } from "react-router-dom";
import {
  Phone,
  ChevronRight,
  Star,
  CheckCircle2,
  Heart,
  MapPin,
  Clock,
  MessageCircle,
  ChevronDown,
} from "lucide-react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BOOKING_URL } from "./constants";
import { SERVICES } from "./data/services";
import { TrustBadges } from "./components/TrustBadges";

export function Hero() {
  return (
    <section className="relative w-full flex flex-col bg-black overflow-hidden" style={{ minHeight: '100svh' }}>
      
      {/* Bakgrundsbild */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="/hero-modell.jpg"
          alt="Kvinna med friskt leende"
          className="w-full h-full object-cover object-center"
          loading="eager"
          decoding="sync"
        />
        {/* Tonad overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-black/10" />
      </div>

      {/* Spacer som puffar innehållet ner förbi navbar */}
      <div className="h-20 md:h-28 shrink-0" />

      {/* Innehåll — centrerat vertikalt i resterande utrymme */}
      <div className="relative z-10 flex-1 flex flex-col justify-end max-w-7xl mx-auto px-6 w-full pb-12 md:pb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12">
          
          {/* Vänster: Text & Betyg */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-3xl"
          >
            {/* Recensionspills */}
            <div className="flex items-center gap-2 mb-6 flex-wrap">
              <div className="flex items-center gap-1 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-gold-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
                <span className="ml-1 text-xs font-bold text-white">4,9 / 5,0</span>
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-white/90 bg-black/40 backdrop-blur-md px-3 py-2 rounded-full border border-white/5">
                100+ recensioner
              </span>
              <span className="text-[10px] font-black uppercase tracking-widest text-black bg-gold-500 px-3 py-2 rounded-full shadow-lg shadow-gold-500/20">
                1986
              </span>
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-[7rem] font-black text-white leading-[1.05] tracking-tight font-display mb-6">
              Din tandvård i <br />
              <span className="text-gold-400 italic font-serif font-medium tracking-normal">trygga händer</span>
            </h1>
            
            <p className="text-white/75 text-base md:text-lg max-w-lg leading-relaxed font-light">
              Välkommen till Huddinges mest anrika klinik. Vi kombinerar 40 års erfarenhet med modern teknik – för ett leende du kan vara stolt över.
            </p>
          </motion.div>

          {/* Höger: CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col gap-4 sm:min-w-[280px]"
          >
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-6 px-8 py-5 bg-gold-500 text-black rounded-full font-black text-sm uppercase tracking-widest hover:bg-white transition-all shadow-2xl shadow-gold-500/30 group"
            >
              Boka Din Tid
              <span className="bg-black text-gold-500 p-2 rounded-full group-hover:bg-gold-500 group-hover:text-black transition-colors">
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            
            <a href="tel:087118108" className="flex items-center gap-4 text-white hover:text-gold-400 transition-colors group px-2">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-md group-hover:border-gold-500 transition-colors shrink-0">
                <Phone size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-white/50">Ring oss direkt</span>
                <span className="font-bold text-lg">08-711 81 08</span>
              </div>
            </a>

            <div className="mt-2 pt-4 border-t border-white/10 hidden md:block">
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40 mb-2">Legitimerad vård</p>
              <TrustBadges />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


const INVISALIGN_IMG = "/offers/invisalign-kampanj.png";

export function Offers() {
  return (
    <section className="py-16 md:py-20 bg-[#ecfdf5]/80">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-center text-2xl md:text-3xl font-black text-black tracking-tight mb-10 md:mb-12">
          Aktuella erbjudanden
        </h2>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {/* Invisalign – kampanjbild (text finns i bilden; HTML under för tillgänglighet) */}
          <motion.article
            whileHover={{ y: -3 }}
            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-emerald-100/80 flex flex-col max-w-md mx-auto w-full"
          >
            <div className="relative w-full overflow-hidden bg-[#fde047]">
              <img
                src={INVISALIGN_IMG}
                alt="Invisalign – osynlig tandställning från världsledande Invisalign, 300 kr i mån"
                className="w-full h-auto object-contain object-center block"
                loading="lazy"
              />
            </div>
            <p className="sr-only">
              Få vackrare leende med osynlig tandställning från världsledande Invisalign. 300 kr i mån.
            </p>
            <div className="p-4 sm:p-5 text-center mt-auto border-t border-slate-100">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-black uppercase tracking-widest text-gold-700 hover:text-black inline-flex items-center gap-2 transition-colors"
              >
                Boka nu <ChevronRight size={14} />
              </a>
            </div>
          </motion.article>

          {/* Undersökning + Airflow */}
          <motion.article
            whileHover={{ y: -3 }}
            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-emerald-100/80 flex flex-col max-w-md mx-auto w-full"
          >
            <div className="flex-1 p-6 sm:p-7 flex flex-col justify-center min-h-[200px] bg-white">
              <h3 className="text-base font-black text-slate-800 mb-1">Erbjudande Undersökning + Airflow</h3>
              <p className="text-3xl font-black text-red-600 mb-3">690:-</p>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2">
                Fullständig undersökning inkl. 4 röntgen och enklare tandstensborttagning
              </p>
              <p className="text-xs sm:text-sm font-semibold text-amber-700 mb-3">
                + Gratis Airflow för renare och vitare tänder
              </p>
              <p className="text-[10px] text-slate-500 mt-auto">*erbjudandet gäller endast nya patienter</p>
            </div>
            <div className="p-4 sm:p-5 pt-0 text-center border-t border-slate-100">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-black uppercase tracking-widest text-gold-700 hover:text-black inline-flex items-center gap-2 transition-colors"
              >
                Boka nu <ChevronRight size={14} />
              </a>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="behandlingar" className="py-16 md:py-20 bg-beige-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="max-w-2xl">
            <span className="text-gold-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">Våra Tjänster</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-black leading-tight">
              Expertis som täcker <br /> <span className="text-gold-600 italic font-serif">alla dina behov</span>
            </h2>
          </div>
          <p className="text-slate-700 max-w-sm text-sm leading-relaxed">
            Från den årliga kontrollen till avancerade estetiska ingrepp – vi levererar kvalitet i varje detalj. Välj en tjänst för att läsa mer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service) => (
            <motion.div
              key={service.slug}
              whileHover={{ y: -4, backgroundColor: "#ffffff" }}
              className="p-8 rounded-[28px] transition-all group bg-white/80 border border-beige-200/90 shadow-sm hover:shadow-lg hover:shadow-gold-500/5 flex flex-col min-h-[220px]"
            >
              <h3 className="text-lg font-bold text-black mb-3 group-hover:text-gold-600 transition-colors">{service.title}</h3>
              <p className="text-slate-700 text-sm leading-relaxed mb-6 flex-1">{service.shortDesc}</p>
              <Link
                to={`/tjanster/${service.slug}`}
                className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gold-600 group-hover:gap-3 transition-all mt-auto"
              >
                Läs mer <ChevronRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutTeaser() {
  return (
    <section className="py-24 bg-beige-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <span className="text-gold-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">Vår Historia</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Fyrtio år av <br /> <span className="text-gold-600">lokalt förtroende</span>
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-8 font-light">
            Sedan 1986 har vi varit en trygg punkt för invånarna i Huddinge. Vår resa började med en vision om att erbjuda personlig tandvård där patienten alltid står i centrum.
          </p>

          <div className="grid grid-cols-2 gap-8 mb-10">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-gold-600">
                <CheckCircle2 size={18} />
                <span className="font-bold text-black">Erfarenhet</span>
              </div>
              <p className="text-sm text-slate-700">Fyra decennier av klinisk expertis.</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-gold-600">
                <Heart size={18} />
                <span className="font-bold text-black">Omtanke</span>
              </div>
              <p className="text-sm text-slate-700">Vi ser människan bakom leendet.</p>
            </div>
          </div>

          <Link
            to="/om-oss"
            className="inline-block px-10 py-5 bg-white text-black rounded-full font-black text-xs uppercase tracking-widest hover:bg-black hover:text-gold-500 transition-all shadow-md border-2 border-white hover:border-black"
          >
            Läs mer om vårt team
          </Link>

          <div className="mt-12 pt-10 border-t border-black/10">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-600 mb-4">Trygg kvalitet</p>
            <TrustBadges compact />
          </div>
        </div>

        <div className="order-1 lg:order-2 relative">
          <div className="rounded-[60px] overflow-hidden border border-white shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800"
              alt="Tandvård Huddinge"
              className="w-full aspect-square object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -top-10 -left-10 w-40 h-40 border border-gold-200 rounded-full -z-10" />
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const reviews = [
    {
      name: "Udoy Hossain",
      text: "Bättre tandläkarklinik får ni leta efter. Trots svår tandläkarrädsla får de en alltid att känna sig säker och trygg i stolen.",
      rating: 5,
      date: "Google Recension",
    },
    {
      name: "Petra H.",
      text: "Helt underbart bemötande. Tandläkaren tog sig tid för att möta mig som person. Väldigt grundligt undersökt min tandstatus.",
      rating: 5,
      date: "Google Recension",
    },
    {
      name: "Lars G.",
      text: "Proffsigt och personligt bemötande. De förklarar allt pedagogiskt och man känner sig i trygga händer. Bästa kliniken i Huddinge.",
      rating: 5,
      date: "Google Recension",
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
            <motion.div key={idx} className="p-10 rounded-[40px] bg-white border border-beige-100 flex flex-col items-center text-center shadow-sm relative overflow-hidden">
              {/* Google G Logo */}
              <div className="absolute top-6 right-6 opacity-80">
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              </div>
              <div className="flex gap-1 text-gold-600 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="text-base text-slate-800 italic mb-8 font-light leading-relaxed">"{review.text}"</p>
              <div className="mt-auto">
                <p className="font-bold text-black">{review.name}</p>
                <p className="text-[10px] uppercase tracking-widest text-slate-600">{review.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
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
                  <p className="text-[10px] uppercase tracking-widest text-slate-600 mb-1">Adress</p>
                  <p className="text-black font-bold">Rådsvägen 5G, 141 48 Huddinge</p>
                </div>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-gold-50 flex items-center justify-center text-gold-700 group-hover:bg-black group-hover:text-gold-500 transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-600 mb-1">Telefon</p>
                  <p className="text-black font-bold">08-711 81 08</p>
                </div>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-gold-50 flex items-center justify-center text-gold-700 group-hover:bg-black group-hover:text-gold-500 transition-all">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-600 mb-1">Öppettider</p>
                  <div className="text-black font-bold space-y-1">
                    <p>Mån - Tor: 08:00 - 17:00</p>
                    <p>Fre: 08:00 - 12:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 flex flex-wrap gap-4">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-12 py-5 bg-black text-gold-500 rounded-full font-black text-xs uppercase tracking-widest hover:bg-gold-950 transition-all shadow-xl shadow-black/20"
              >
                Boka tid online
              </a>
              <Link
                to="/kontakt"
                className="inline-block px-12 py-5 border-2 border-black/15 text-black rounded-full font-black text-xs uppercase tracking-widest hover:border-gold-600 transition-all"
              >
                All kontaktinfo
              </Link>
            </div>
          </div>

          <div className="relative min-h-[500px] bg-slate-50 flex items-center justify-center">
            <div className="absolute inset-0 opacity-10">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000"
                alt=""
                className="w-full h-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="relative z-10 text-center p-12">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center text-gold-500 mx-auto mb-6 shadow-2xl">
                <MapPin size={32} />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Välkommen in</h3>
              <p className="text-slate-700 text-sm font-light">Vi finns centralt i Huddinge, bara ett stenkast från centrum.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AiPromo() {
  return (
    <section className="py-12 bg-beige-50 border-b border-beige-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-black text-gold-500 rounded-full mb-4 shadow-lg">
          <MessageCircle size={24} />
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-black mb-2">Chatta med vår AI-assistent</h2>
        <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Klicka på runda ikonen nere i hörnet! Vår digitala värdinna har stenkoll på våra behandlingar, priser och kan tipsa dig snabbt – dygnet runt.
        </p>
      </div>
    </section>
  );
}

export function FAQSection() {
  const faqs = [
    {
      q: "Erbjuder ni delbetalning?",
      a: "Ja, vi erbjuder fördelaktig delbetalning och faktura för att tandvård ska vara tillgänglig för alla. Kontakta oss i samband med ditt besök så hjälper vi dig hitta en lösning som passar din ekonomi.",
    },
    {
      q: "Tar ni emot akuta patienter?",
      a: "Absolut! Vi erbjuder oftast akuttid samma dag. Om du har akut tandvärk eller en skadad tand, ring oss direkt på 08-711 81 08 (eller boka online) så prioriterar vi dig.",
    },
    {
      q: "Är jag välkommen som ny patient?",
      a: "Ja, vi välkomnar alltid nya patienter till vår klinik på Rådsvägen. Vi har även speciella erbjudanden för nya patienter, tex reducerat pris på basundersökning.",
    },
    {
      q: "Hur avbokar eller ombokar jag min tid?",
      a: "Om du behöver ändra din tid ber vi dig göra det så snart som möjligt, helst 24 timmar innan, så att någon annan kan få din tid. Du kan ringa oss eller svara på din kallelse.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-gold-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">Frågor & Svar</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-black">Vanliga frågor</h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm">
              <button
                type="button"
                className="w-full px-6 py-5 text-left flex justify-between items-center bg-white hover:bg-beige-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-black text-sm">{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`text-gold-600 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2 text-sm text-slate-700 leading-relaxed border-t border-slate-100">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
