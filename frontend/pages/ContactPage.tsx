import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { SEO } from "../components/SEO";
import { BOOKING_URL } from "../constants";

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Kontakt | Huddinge Tandvård – Rådsvägen 5G"
        description="Hitta till Huddinge Tandvård på Rådsvägen 5G. Ring 08-711 81 08, mejla eller boka tid online via Muntra."
        path="/kontakt"
      />
      <section className="pt-28 pb-20 bg-beige-100 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl lg:text-5xl font-bold text-black mb-4 text-center">Kontakta oss</h1>
          <p className="text-slate-700 text-center max-w-xl mx-auto mb-14">
            Vi finns på Rådsvägen i Huddinge. Ring, mejla eller boka tid online – vi hjälper dig gärna.
          </p>
          <div className="bg-white rounded-[60px] border border-beige-200 overflow-hidden grid lg:grid-cols-2 shadow-xl max-w-5xl mx-auto">
            <div className="p-12 lg:p-16">
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
                    <a href="tel:087118108" className="text-black font-bold hover:text-gold-600">
                      08-711 81 08
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-gold-50 flex items-center justify-center text-gold-700 group-hover:bg-black group-hover:text-gold-500 transition-all">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-slate-600 mb-1">E-post</p>
                    <a href="mailto:info@huddingetandvard.se" className="text-black font-bold hover:text-gold-600 break-all">
                      info@huddingetandvard.se
                    </a>
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
              <div className="mt-12">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-12 py-5 bg-black text-gold-500 rounded-full font-black text-xs uppercase tracking-widest hover:bg-gold-950 transition-all shadow-xl shadow-black/20"
                >
                  Boka tid online
                </a>
              </div>
            </div>
            <div className="relative min-h-[400px] bg-slate-100 flex items-center justify-center p-8">
              <div className="absolute inset-0 opacity-10">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000"
                  alt=""
                  className="w-full h-full object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center text-gold-500 mx-auto mb-6 shadow-2xl">
                  <MapPin size={32} />
                </div>
                <h2 className="text-2xl font-bold text-black mb-4">Välkommen in</h2>
                <p className="text-slate-700 text-sm max-w-xs mx-auto">
                  Centralt i Huddinge, nära centrum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
