const siteUrl = "https://engram.ventures";

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Engram Ventures",
  url: siteUrl,
  logo: `${siteUrl}/og-image.png`,
  description:
    "Engram Ventures partners with enterprise technology leaders and investors to build lasting AI capability through embedded strategy, rigorous due diligence, and engineering foundations that hold.",
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
    "AI Strategy",
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
    name: "AI Strategy & Roadmaps",
    description:
      "Translating AI potential into executable plans. From board-level framing to team-level implementation.",
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
      "For PE/VC firms evaluating technology assets. Architecture reviews, team assessments, risk scoring.",
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
      "Security-first engineering foundations. AWS architecture, compliance frameworks, and agentic SDLC design.",
    provider: {
      "@type": "ProfessionalService",
      name: "Engram Ventures",
    },
    areaServed: "AU",
    serviceType: "DevSecOps Consulting",
  },
];
