import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://engram.ventures";

  const routes = [
    { path: "", changeFrequency: "monthly" as const, priority: 1 },
    { path: "/services", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/about", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/contact", changeFrequency: "yearly" as const, priority: 0.7 },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date("2026-03-15"),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    alternates: {
      languages: {
        en: `${baseUrl}${route.path}`,
        "pt-BR": `${baseUrl}/pt-BR${route.path}`,
      },
    },
  }));
}
