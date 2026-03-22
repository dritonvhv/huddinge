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
} from "lucide-react";
import { motion } from "motion/react";
import { BOOKING_URL } from "./constants";
import { SERVICES } from "./data/services";
import { TrustBadges } from "./components/TrustBadges";

export function Hero() {
  return (
    <section className="relative flex flex-col pt-24 pb-0 md:pt-28 bg-white overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-beige-200 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-beige-100 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10 flex-1 pb-16 lg:pb-24">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
          <div className="flex flex-col gap-2 mb-4">
            <div className="flex items-center gap-1 text-gold-600">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
              <span className="ml-2 text-sm font-bold text-black">4,9 av 5.0 i betyg:</span>
            </div>
            <p className="text-sm text-slate-700 italic">"Snabb och proffsig hjälp. Väldigt bra bemötande och omhändertagande."</p>
          </div>

          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-black leading-tight mb-4 tracking-tight font-display">
            Din tandvård i <br />
            <span className="text-gold-600 italic font-serif font-black">trygga händer</span>
          </h1>
          <p className="text-base md:text-lg text-slate-700 mb-6 max-w-lg leading-relaxed font-light">
            Välkommen till Huddinges mest anrika klinik. Vi kombinerar 40 års erfarenhet med modern teknik – för ett leende du kan vara stolt över.
          </p>

          <div className="flex flex-wrap gap-6 items-center">
            <a
              href={BOOKING_URL}
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
                <span className="text-[10px] uppercase tracking-widest text-slate-600">Ring oss direkt</span>
                <span className="font-bold text-lg">08-711 81 08</span>
              </div>
            </a>
          </div>

          <div className="mt-6 pt-6 border-t border-black/5">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500 mb-3">Legitimerad vård &amp; medlemskap</p>
            <TrustBadges />
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
              alt="Tandläkare på Huddinge Tandvård Rådsvägen – modern och trygg tandvård"
              className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-10 -right-10 z-20 bg-black text-gold-500 p-10 rounded-full flex flex-col items-center justify-center shadow-2xl border-4 border-white">
            <span className="text-4xl font-black leading-none">40</span>
            <span className="text-[10px] font-bold uppercase tracking-widest">År</span>
          </div>
        </motion.div>
      </div>

      {/* Stats ribbon */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative z-10 bg-black"
      >
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "40+", label: "Års erfarenhet" },
            { value: "4,9", label: "Google-betyg" },
            { value: "1000+", label: "Nöjda patienter" },
            { value: "Idag", label: "Akuttid tillgänglig" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-gold-500 font-black text-3xl leading-none mb-1">{stat.value}</p>
              <p className="text-white/60 text-xs font-medium uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
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
            <motion.div key={idx} className="p-10 rounded-[40px] bg-white border border-beige-100 flex flex-col items-center text-center shadow-sm">
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
