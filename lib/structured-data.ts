const siteUrl = "https://engram.ventures";

const descriptions = {
  en: "Engram Ventures partners with technology leaders and investors to build AI capability that works — through hands-on engineering, technical due diligence, and architecture that holds.",
  "pt-BR":
    "A Engram Ventures trabalha com líderes de tecnologia e investidores para construir capacidade de IA que funciona — através de engenharia prática, due diligence técnica e arquitetura que se sustenta.",
};

export function getOrganizationJsonLd(locale: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Engram Ventures",
    url: siteUrl,
    logo: `${siteUrl}/og-image.png`,
    description: descriptions[locale as keyof typeof descriptions] ?? descriptions.en,
    inLanguage: locale,
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
}

const serviceDescriptions = {
  en: [
    "Turning AI ambitions into systems that ship. Architecture decisions, build-or-buy analysis, and implementation plans your team can actually follow.",
    "For investors who need to know what's really under the hood. Architecture reviews, codebase health, team assessments, and honest risk scoring.",
    "Security-first engineering foundations. Cloud architecture, CI/CD hardening, compliance automation, and AI-native development workflows.",
  ],
  "pt-BR": [
    "Transformando ambições de IA em sistemas que entregam. Decisões de arquitetura, análise de construir ou comprar e planos de implementação que sua equipe pode realmente seguir.",
    "Para investidores que precisam saber o que realmente está por baixo do capô. Revisões de arquitetura, saúde do código, avaliações de equipe e pontuação de risco honesta.",
    "Fundações de engenharia com segurança em primeiro lugar. Arquitetura de nuvem, hardening de CI/CD, automação de compliance e fluxos de desenvolvimento nativos de IA.",
  ],
};

export function getServicesJsonLd(locale: string) {
  const descs =
    serviceDescriptions[locale as keyof typeof serviceDescriptions] ??
    serviceDescriptions.en;

  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "AI Architecture & Planning",
      description: descs[0],
      inLanguage: locale,
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
      description: descs[1],
      inLanguage: locale,
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
      description: descs[2],
      inLanguage: locale,
      provider: {
        "@type": "ProfessionalService",
        name: "Engram Ventures",
      },
      areaServed: "AU",
      serviceType: "DevSecOps Consulting",
    },
  ];
}
