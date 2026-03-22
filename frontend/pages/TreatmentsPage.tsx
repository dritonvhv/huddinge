import { Link } from "react-router-dom";
import { ChevronRight, Phone, ArrowRight, Clock, Shield, Star } from "lucide-react";
import { motion } from "motion/react";
import { SEO } from "../components/SEO";
import { SERVICES } from "../data/services";
import { BOOKING_URL } from "../constants";

const SERVICE_ICONS: Record<string, string> = {
  "akut-tandvard": "🚨",
  "estetisk-tandvard": "✨",
  "allman-tandvard": "🦷",
  "implantat": "🔬",
  "tandblekning": "⚡",
  "specialistvard": "🏆",
};

const SERVICE_TIME: Record<string, string> = {
  "akut-tandvard": "Samma dag",
  "estetisk-tandvard": "Konsultation krävs",
  "allman-tandvard": "30–60 min",
  "implantat": "Flera besök",
  "tandblekning": "60–90 min",
  "specialistvard": "Individuell planering",
};

export default function TreatmentsPage() {
  return (
    <>
      <SEO
        title="Våra Behandlingar & Tjänster | Huddinge Tandvård Rådsvägen"
        description="Utforska alla våra tandvårdsbehandlingar – akuttandvård, estetisk tandvård, implantat, tandblekning, allmän tandvård och specialistvård. Boka tid online eller ring 08-711 81 08."
        path="/behandlingar"
      />

      {/* Hero */}
      <section className="pt-36 pb-16 bg-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-beige-200 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <nav className="text-xs text-slate-500 mb-8 flex items-center gap-2">
              <Link to="/" className="hover:text-gold-600 transition-colors">Hem</Link>
              <ChevronRight size={12} className="text-slate-300" />
              <span className="text-slate-800 font-semibold">Behandlingar</span>
            </nav>
            <span className="text-gold-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">
              Våra Tjänster
            </span>
            <h1 className="text-5xl md:text-6xl font-black text-black leading-tight mb-6 tracking-tight">
              Allt du behöver<br />
              <span className="text-gold-600 italic font-serif">under ett tak</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed mb-10">
              Från akuta besvär till drömleende – vi erbjuder ett komplett utbud av tandvårdsbehandlingar med 40 års samlad expertis.
            </p>

            {/* Trust bar */}
            <div className="flex flex-wrap gap-6 mb-2">
              {[
                { icon: <Shield size={16} />, text: "Legitimerade tandläkare" },
                { icon: <Star size={16} />, text: "4,9/5 i Google-betyg" },
                { icon: <Clock size={16} />, text: "Akuttid samma dag" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                  <span className="text-gold-600">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 bg-beige-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, idx) => (
              <motion.article
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-[28px] border border-beige-200 shadow-sm hover:shadow-lg hover:shadow-gold-500/5 transition-all group flex flex-col overflow-hidden"
              >
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-5">
                    <span className="text-4xl">{SERVICE_ICONS[service.slug] ?? "🦷"}</span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-beige-100 px-3 py-1.5 rounded-full">
                      <Clock size={10} />
                      {SERVICE_TIME[service.slug]}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-black mb-3 group-hover:text-gold-600 transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                    {service.shortDesc}
                  </p>
                  <div className="mt-auto flex gap-3">
                    <Link
                      to={`/tjanster/${service.slug}`}
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 bg-beige-100 text-black rounded-xl text-xs font-bold uppercase tracking-wide hover:bg-black hover:text-gold-500 transition-all"
                    >
                      Läs mer <ArrowRight size={14} />
                    </Link>
                    <a
                      href={BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 py-3 px-5 bg-black text-gold-500 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-gold-950 transition-all"
                    >
                      Boka
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-gold-500 font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">
            Kom igång idag
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Redo för ett friskare leende?
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
            Boka din tid online på bara några sekunder, eller ring oss direkt – vi finns här för dig.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gold-500 text-black rounded-full font-black text-sm uppercase tracking-widest hover:bg-gold-400 transition-all shadow-2xl shadow-gold-500/20"
            >
              Boka tid online <ChevronRight size={18} />
            </a>
            <a
              href="tel:087118108"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 border-2 border-white/20 text-white rounded-full font-bold text-sm hover:border-gold-500 hover:text-gold-400 transition-all"
            >
              <Phone size={18} />
              08-711 81 08
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
