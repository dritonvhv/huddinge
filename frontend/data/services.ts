export type ServiceItem = {
  slug: string;
  title: string;
  shortDesc: string;
  intro: string;
  bullets: string[];
  seoTitle: string;
  seoDesc: string;
};

export const SERVICES: ServiceItem[] = [
  {
    slug: "akut-tandvard",
    title: "Akut tandvård",
    shortDesc:
      "Tandvärk eller skada? Vi prioriterar akuta besvär och erbjuder ofta tid samma dag – så du slipper vänta i onödan när något händer.",
    intro:
      "När smärta eller en skada uppstår ska du inte behöva vänta. På Huddinge Tandvård Rådsvägen strävar vi efter att kunna ta emot dig snabbt, ofta samma dag du hör av dig.",
    bullets: [
      "Ring 08-711 81 08 vid akuta besvär – vi guidar dig vidare.",
      "Vi lindrar smärta och gör en bedömning av vad som behövs härnäst.",
      "Vid mer omfattande åtgärder planerar vi fortsatt vård i lugn takt.",
    ],
    seoTitle: "Akut tandvård Huddinge | Samma dag | Huddinge Tandvård",
    seoDesc:
      "Akuttid ofta samma dag. Tandvärk, fraktur eller annat akut – ring 08-711 81 08 eller boka online hos Huddinge Tandvård Rådsvägen.",
  },
  {
    slug: "estetisk-tandvard",
    title: "Estetisk tandvård",
    shortDesc:
      "Skalfasader, Invisalign och mer – vi hjälper dig forma ett leende du trivs med, med fokus på naturligt resultat och trygg behandling.",
    intro:
      "Estetisk tandvård handlar om både utseende och funktion. Vi kombinerar erfarenhet med moderna metoder så att ditt leende ska kännas rätt för dig.",
    bullets: [
      "Skalfasader och diskreta lösningar för form och färg.",
      "Invisalign och alternativ som passar din vardag.",
      "Konsultation där vi går igenom önskemål och möjligheter.",
    ],
    seoTitle: "Estetisk tandvård Huddinge | Skalfasader & Invisalign",
    seoDesc:
      "Estetisk tandvård på Rådsvägen i Huddinge. Skalfasader, Invisalign och personlig rådgivning – boka tid hos Huddinge Tandvård.",
  },
  {
    slug: "allman-tandvard",
    title: "Allmän tandvård",
    shortDesc:
      "Regelbundna kontroller, lagningar och förebyggande vård – grunden för en frisk mun och ett hållbart leende genom livet.",
    intro:
      "Allmän tandvård är hjärtat i vår verksamhet. Genom regelbundna besök och god munhygien fångar vi problem tidigt och håller tänderna friska längre.",
    bullets: [
      "Undersökningar och råd anpassade efter dina behov.",
      "Lagningar och enklare åtgärder med fokus på kvalitet.",
      "Samtal om kost, borstning och vanor som påverkar tänderna.",
    ],
    seoTitle: "Allmän tandvård Huddinge | Undersökning & lagning",
    seoDesc:
      "Allmän tandvård, kontroller och lagningar i Huddinge. Boka tid hos Huddinge Tandvård Rådsvägen – vi har funnits sedan 1986.",
  },
  {
    slug: "implantat",
    title: "Implantat, bro & krona",
    shortDesc:
      "När en tand saknas eller behöver ersättas – implantat, broar och kronor som återger funktion och estetik med noggrant planerad vård.",
    intro:
      "Implantat och fast protetik kräver både erfarenhet och tid. Vi går igenom hela processen med dig: från första bedömning till färdig lösning.",
    bullets: [
      "Implantat som ersättning för saknad tand när förutsättningarna finns.",
      "Bro och krona när det passar ditt enskilda fall.",
      "Tydlig information om steg, tid och eftervård.",
    ],
    seoTitle: "Tandimplantat Huddinge | Bro & krona | Huddinge Tandvård",
    seoDesc:
      "Implantat, bro och krona i Huddinge. Erfaren klinik på Rådsvägen – boka konsultation hos Huddinge Tandvård.",
  },
  {
    slug: "tandblekning",
    title: "Tandblekning",
    shortDesc:
      "Ljusare leende med säker, kliniskt genomförd blekning – alltid efter undersökning så att vi vet att det är lämpligt för dina tänder.",
    intro:
      "Tandblekning ska göras rätt. Vi börjar med en undersökning och väljer metod som passar dina tänder och dina mål – utan att kompromissa med hälsan.",
    bullets: [
      "Obligatorisk kontroll innan blekning.",
      "Genomtänkt blekmedel och uppföljning.",
      "Råd om hur du behåller resultatet längre.",
    ],
    seoTitle: "Tandblekning Huddinge | Klinisk blekning | Huddinge Tandvård",
    seoDesc:
      "Professionell tandblekning i Huddinge. Säker process med undersökning först – boka hos Huddinge Tandvård Rådsvägen.",
  },
  {
    slug: "specialistvard",
    title: "Specialistvård",
    shortDesc:
      "Mer komplexa besvär kräver samlad kompetens – vi har erfarenhet av avancerad tandvård och samverkar vid behov för bästa utfall.",
    intro:
      "Vissa situationer kräver extra kunskap och planering. Vi tar oss an komplexa fall med struktur och tydlig kommunikation, så du vet vad som händer.",
    bullets: [
      "Kirurgi och protetik i samspel när det behövs.",
      "Tydliga besked om alternativ och risker.",
      "Fokus på trygghet genom hela behandlingen.",
    ],
    seoTitle: "Specialisttandvård Huddinge | Avancerad tandvård",
    seoDesc:
      "Specialistvård och komplex tandvård i Huddinge. Erfaren team på Rådsvägen – kontakta Huddinge Tandvård.",
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
