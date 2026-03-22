import { Link } from "react-router-dom";
import { CheckCircle2, Heart, User } from "lucide-react";
import { motion } from "motion/react";
import { SEO } from "../components/SEO";
import { TrustBadges } from "../components/TrustBadges";

const TEAM_PHOTO_RAJIB =
  "https://www.huddingetandvard.se/wp-content/uploads/2024/05/4W8A2896-Edit-Edit-724x1024.jpg";
const TEAM_PHOTO_SAEED =
  "https://www.huddingetandvard.se/wp-content/uploads/2024/05/4W8A2846-Edit-Edit-724x1024.jpg";
const TEAM_PLACEHOLDER =
  "https://www.huddingetandvard.se/wp-content/uploads/2024/05/Skarmavbild-2024-05-05-kl.-19.30.26-300x298.png";

type TeamEntry = { name: string | null; role: string; photo: string | null };

const TEAM: TeamEntry[] = [
  { name: "Rajib Sarder", role: "Leg. Tandläkare", photo: TEAM_PHOTO_RAJIB },
  { name: "Saeed Golestani", role: "Leg. Tandläkare", photo: TEAM_PHOTO_SAEED },
  { name: "Harriet", role: "Tandhygienist", photo: TEAM_PLACEHOLDER },
  { name: null, role: "Tandsköterska", photo: null },
  { name: "Maria", role: "Tandsköterska", photo: TEAM_PLACEHOLDER },
  { name: null, role: "Tandsköterska", photo: null },
];

function TeamCard({ member, index }: { member: TeamEntry; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="flex gap-6 sm:gap-8 items-center rounded-[28px] bg-white/90 border border-beige-200/90 p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="shrink-0 w-[120px] h-[140px] sm:w-[140px] sm:h-[165px] rounded-2xl overflow-hidden bg-beige-100 border border-beige-200/80">
        {member.photo ? (
          <img
            src={member.photo}
            alt={member.name ? `${member.name}, ${member.role}` : member.role}
            className="w-full h-full object-cover object-top"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 bg-gradient-to-br from-slate-100 to-beige-100">
            <User className="w-12 h-12 opacity-40" strokeWidth={1.25} />
            <span className="text-[10px] font-bold uppercase tracking-widest mt-2 opacity-50">Foto kommer</span>
          </div>
        )}
      </div>
      <div className="min-w-0 flex-1 py-1">
        {member.name ? (
          <>
            <h3 className="text-xl sm:text-2xl font-bold text-black leading-tight mb-1">{member.name}</h3>
            <p className="text-gold-700 font-semibold text-sm sm:text-base">{member.role}</p>
          </>
        ) : (
          <h3 className="text-xl sm:text-2xl font-bold text-black leading-tight">{member.role}</h3>
        )}
      </div>
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <>
      <SEO
        title="Om oss | Huddinge Tandvård Rådsvägen"
        description="Sedan 1986 har vi funnits på Rådsvägen i Huddinge. Personlig tandvård, erfaret team och modern teknik – läs mer om kliniken."
        path="/om-oss"
      />
      <section className="pt-28 pb-16 bg-beige-200 min-h-screen">
        <div className="max-w-3xl mx-auto px-6">
          <div>
            <span className="text-gold-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">Vår Historia</span>
            <h1 className="text-4xl lg:text-6xl font-bold text-black mb-8">
              Fyrtio år av <br /> <span className="text-gold-600">lokalt förtroende</span>
            </h1>
            <p className="text-lg text-slate-700 leading-relaxed mb-8 font-light">
              Sedan 1986 har vi varit en trygg punkt för invånarna i Huddinge. Vår resa började med en vision om att erbjuda personlig tandvård där patienten alltid står i centrum. Idag, 40 år senare, är vi stolta över att ha behandlat generationer av familjer med samma passion och noggrannhet.
            </p>
            <p className="text-slate-700 leading-relaxed mb-10">
              Vi kombinerar lång erfarenhet med modern utrustning och ett team som bryr sig om hur du mår – både i stolen och i vardagen. Välkommen till oss på Rådsvägen.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-12">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-gold-600">
                  <CheckCircle2 size={18} />
                  <span className="font-bold text-black">Erfarenhet</span>
                </div>
                <p className="text-sm text-slate-600">Fyra decennier av klinisk expertis i Huddinge.</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-gold-600">
                  <Heart size={18} />
                  <span className="font-bold text-black">Omtanke</span>
                </div>
                <p className="text-sm text-slate-600">Vi ser människan bakom leendet.</p>
              </div>
            </div>

            <div className="rounded-2xl bg-black/5 border border-black/10 p-6 mb-8">
              <h2 className="text-sm font-black uppercase tracking-widest text-gold-700 mb-3">Vårt team</h2>
              <p className="text-slate-700 text-sm leading-relaxed mb-4">
                Bland våra medarbetare finns legitimerade tandläkare, tandhygienist och tandsköterskor som samarbetar för att du ska få trygg och sammanhållen vård. Vi utvecklas kontinuerligt och har särskilt fokus på tandvårdsrädsla – säg till oss i förväg så anpassar vi besöket.
              </p>
              <TrustBadges compact />
            </div>

            <Link
              to="/kontakt"
              className="inline-flex items-center justify-center px-10 py-5 bg-white text-black border-2 border-black/15 rounded-full font-black text-xs uppercase tracking-widest hover:bg-black hover:text-gold-500 hover:border-black transition-all shadow-sm"
            >
              Kontakta oss
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-24 bg-beige-100 border-t border-beige-200/80">
        <div className="max-w-5xl mx-auto px-6 pt-4">
          <div className="mb-12">
            <span className="text-gold-600 font-black text-[10px] uppercase tracking-[0.3em] mb-3 block">Våra medarbetare</span>
            <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight">Medarbetare</h2>
            <p className="text-slate-600 mt-3 max-w-2xl text-sm leading-relaxed">
              Här möter du några av oss som tar hand om dig på kliniken. All personal arbetar enligt samma höga krav på hygien, bemötande och kvalitet.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {TEAM.map((member, i) => (
              <TeamCard key={`${member.role}-${i}`} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
