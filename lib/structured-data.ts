const siteUrl = "https://engram.ventures";

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Engram Ventures",
  url: siteUrl,
  logo: `${siteUrl}/og-image.png`,
  description:
    "Engram Ventures partners with technology leaders and investors to build AI capability that works — through hands-on engineering, technical due diligence, and architecture that holds.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sydney",
    addressCountry: "AU",
  },
  founder: {
    "@type": "Person",
    name: "Andre Gallo",
    jobTitle: "Founder & CEO",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@engram.ventures",
    contactType: "customer service",
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      addressCountry: "AU",
    },
  },
  knowsAbout: [
    "AI Architecture",
    "Technical Due Diligence",
    "DevSecOps",
    "Cloud Architecture",
    "AWS",
  ],
};

export const servicesJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Architecture & Planning",
    description:
      "Turning AI ambitions into systems that ship. Architecture decisions, build-or-buy analysis, and implementation plans your team can actually follow.",
    provider: {
      "@type": "ProfessionalService",
      name: "Engram Ventures",
    },
    areaServed: "AU",
    serviceType: "AI Consulting",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Technical Due Diligence",
    description:
      "For investors who need to know what's really under the hood. Architecture reviews, codebase health, team assessments, and honest risk scoring.",
    provider: {
      "@type": "ProfessionalService",
      name: "Engram Ventures",
    },
    areaServed: "AU",
    serviceType: "Technology Due Diligence",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "DevSecOps & Cloud Architecture",
    description:
      "Security-first engineering foundations. Cloud architecture, CI/CD hardening, compliance automation, and AI-native development workflows.",
    provider: {
      "@type": "ProfessionalService",
      name: "Engram Ventures",
    },
    areaServed: "AU",
    serviceType: "DevSecOps Consulting",
  },
];
