import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { SERVICES } from "../data/services";

export function Footer() {
  return (
    <footer className="bg-white text-black pt-32 pb-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-8">
              <div className="relative w-12 h-12 aspect-square shrink-0 bg-black rounded-full border-2 border-gold-500 flex items-center justify-center overflow-hidden">
                <span className="text-gold-500 font-serif text-2xl font-bold leading-none -translate-y-[1px]">H</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-none tracking-tight">
                  HUDDINGE <span className="text-gold-600">TANDVÅRD</span>
                </span>
              </div>
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed mb-8 font-light">
              Sedan 1986 har vi levererat tandvård med passion och precision. Din trygghet är vår främsta prioritet.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/huddingetandvardr/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-black hover:text-gold-500 transition-all"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/huddingetandvard/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-black hover:text-gold-500 transition-all"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gold-600 mb-8">Navigation</h4>
            <ul className="space-y-4 text-slate-600 text-xs font-bold uppercase tracking-widest">
              <li>
                <Link to="/" className="hover:text-black transition-colors">
                  Hem
                </Link>
              </li>
              <li>
                <Link to="/behandlingar" className="hover:text-black transition-colors">
                  Behandlingar
                </Link>
              </li>
              <li>
                <Link to="/om-oss" className="hover:text-black transition-colors">
                  Om oss
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="hover:text-black transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gold-600 mb-8">Tjänster</h4>
            <ul className="space-y-3 text-slate-600 text-xs font-bold tracking-wide">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link to={`/tjanster/${s.slug}`} className="hover:text-black transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gold-600 mb-8">Kontakt</h4>
            <ul className="space-y-4 text-slate-600 text-xs font-bold tracking-widest">
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-gold-600 shrink-0" />
                08-711 81 08
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-gold-600 shrink-0" />
                info@huddingetandvard.se
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={14} className="text-gold-600 shrink-0" />
                Rådsvägen 5G, Huddinge
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold uppercase tracking-widest text-slate-500">
          <p>© {new Date().getFullYear()} Huddinge Tandvård Rådsvägen. Fyrtio år av expertis.</p>
          <div className="flex gap-10">
            <span className="text-slate-400">Integritetspolicy</span>
            <span className="text-slate-400">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
