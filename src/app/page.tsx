import { About } from "@/components/about";
import { Achievements } from "@/components/achievements";
import { Contact } from "@/components/contact";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";
import { RecruiterSnapshot } from "@/components/recruiter-snapshot";
import { Skills } from "@/components/skills";
import { VisaSection } from "@/components/visa-section";
import { site } from "@/content/site";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: "Software Engineer",
  email: site.contact.email,
  url: site.url,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Oldenburg",
    addressRegion: "Niedersachsen",
    addressCountry: "DE",
  },
  sameAs: [site.contact.linkedin, site.contact.github],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Nav />
      <main id="main">
        <Hero />
        <RecruiterSnapshot />
        <About />
        <Experience />
        <Skills />
        <Achievements />
        <Education />
        <Contact />
        <VisaSection />
      </main>
      <Footer />
    </>
  );
}
