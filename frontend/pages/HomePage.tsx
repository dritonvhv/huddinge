import { SEO } from "../components/SEO";
import { JsonLdHome } from "../components/JsonLd";
import { Hero, Offers, Services, AboutTeaser, Testimonials, ContactSection } from "../sections";

export default function HomePage() {
  return (
    <>
      <JsonLdHome />
      <SEO
        title="Huddinge Tandvård Rådsvägen | Tandläkare sedan 1986"
        description="Tandvård i Huddinge med 40 års erfarenhet. Akuttid, estetik, implantat och allmän tandvård. Rådsvägen 5G. Boka online eller ring 08-711 81 08."
        path="/"
      />
      <Hero />
      <Offers />
      <Services />
      <AboutTeaser />
      <Testimonials />
      <ContactSection />
    </>
  );
}
