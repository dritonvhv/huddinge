import { Link, useParams, Navigate } from "react-router-dom";
import { ChevronRight, Phone } from "lucide-react";
import { SEO } from "../components/SEO";
import { getServiceBySlug } from "../data/services";
import { BOOKING_URL } from "../constants";

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <SEO title={service.seoTitle} description={service.seoDesc} path={`/tjanster/${service.slug}`} />
      <article className="pt-28 pb-20 bg-beige-50 min-h-screen">
        <div className="max-w-3xl mx-auto px-6">
          <nav className="text-xs text-slate-600 mb-8">
            <Link to="/" className="hover:text-gold-600">
              Hem
            </Link>
            <span className="mx-2 text-slate-400">/</span>
            <Link to="/behandlingar" className="hover:text-gold-600">
              Behandlingar
            </Link>
            <span className="mx-2 text-slate-400">/</span>
            <span className="text-slate-800 font-medium">{service.title}</span>
          </nav>
          <p className="text-gold-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4">Våra tjänster</p>
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">{service.title}</h1>
          <p className="text-lg text-slate-700 leading-relaxed mb-8">{service.intro}</p>
          <ul className="space-y-4 mb-12">
            {service.bullets.map((b, i) => (
              <li key={i} className="flex gap-3 text-slate-700 leading-relaxed">
                <span className="text-gold-600 font-bold shrink-0">•</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-gold-500 rounded-full font-black text-xs uppercase tracking-widest hover:bg-gold-950 transition-colors"
            >
              Boka tid online
              <ChevronRight size={16} />
            </a>
            <a
              href="tel:087118108"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-black/15 text-black rounded-full font-bold text-sm hover:border-gold-600 transition-colors"
            >
              <Phone size={18} />
              08-711 81 08
            </a>
          </div>
          <p className="mt-10 text-sm text-slate-600">
            <Link to="/behandlingar" className="text-gold-700 font-semibold hover:underline">
              ← Tillbaka till alla behandlingar
            </Link>
          </p>
        </div>
      </article>
    </>
  );
}
