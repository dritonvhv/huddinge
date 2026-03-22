/**
 * Medlemskap: Privattandläkarna & Sveriges Tandläkarförbund (officiella loggor i /public/trust)
 */
const LOGO_PRIVAT = "/trust/privattandlakarna.png";
const LOGO_STL = "/trust/sveriges-tandlakareforbund.png";

export function TrustBadges({ className = "", compact = false }: { className?: string; compact?: boolean }) {
  /* Privat: horisontell. STL: högre (stående + text) – ges extra höjd så visuell vikt matchar */
  const hPrivat = compact ? "h-9 sm:h-10" : "h-12 sm:h-14";
  const maxPrivat = compact ? "max-w-[min(100%,220px)]" : "max-w-[min(100%,280px)]";
  const hStl = compact ? "h-12 sm:h-14" : "h-[4.25rem] sm:h-[4.75rem]";
  const maxStl = compact ? "max-w-[min(100%,240px)]" : "max-w-[min(100%,280px)]";
  return (
    <div
      className={`flex flex-wrap items-center justify-start gap-6 md:gap-10 ${className}`}
      role="group"
      aria-label="Professionella medlemskap"
    >
      <a
        href="https://www.privattandlakarna.se/"
        target="_blank"
        rel="noopener noreferrer"
        className="block opacity-90 transition hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
      >
        <img
          src={LOGO_PRIVAT}
          alt="Medlem av Privattandläkarna"
          className={`${hPrivat} w-auto ${maxPrivat} object-contain object-left`}
          loading="lazy"
        />
      </a>

      <a
        href="https://www.tandlakarna.se/"
        target="_blank"
        rel="noopener noreferrer"
        className="block opacity-90 transition hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
      >
        <img
          src={LOGO_STL}
          alt="Sveriges Tandläkarförbund"
          className={`${hStl} w-auto ${maxStl} object-contain object-left`}
          loading="lazy"
        />
      </a>
    </div>
  );
}
