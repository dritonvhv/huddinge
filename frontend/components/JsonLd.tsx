import { useEffect } from "react";

const schema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Huddinge Tandvård Rådsvägen",
  image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200",
  "@id": "https://huddingetandvard.se",
  url: "https://huddingetandvard.se",
  telephone: "+4687118108",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rådsvägen 5G",
    addressLocality: "Huddinge",
    postalCode: "141 48",
    addressCountry: "SE",
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "08:00", closes: "17:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "08:00", closes: "12:00" },
  ],
  priceRange: "$$",
};

export function JsonLdHome() {
  useEffect(() => {
    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.text = JSON.stringify(schema);
    s.id = "jsonld-dentist";
    document.head.appendChild(s);
    return () => {
      document.getElementById("jsonld-dentist")?.remove();
    };
  }, []);
  return null;
}
