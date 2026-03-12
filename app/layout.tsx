import type { Metadata } from "next";
import { Cormorant_Garamond, Jost, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { organizationJsonLd } from "@/lib/structured-data";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-jost",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jetbrains",
  display: "swap",
});

const siteUrl = "https://engram.ventures";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Engram Ventures — AI Strategy & Technical Advisory",
    template: "%s | Engram Ventures",
  },
  description:
    "Engram Ventures partners with enterprise technology leaders and investors to build lasting AI capability — through embedded strategy, rigorous due diligence, and engineering foundations that hold.",
  keywords: [
    "AI strategy",
    "technical advisory",
    "tech due diligence",
    "DevSecOps",
    "AI consulting",
    "CTO advisory",
    "Australia",
    "Sydney",
  ],
  authors: [{ name: "Andre Gallo" }],
  creator: "Engram Ventures",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: siteUrl,
    siteName: "Engram Ventures",
    title: "Engram Ventures — AI Strategy & Technical Advisory",
    description:
      "Partnering with enterprise leaders and investors to build lasting AI capability.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Engram Ventures",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Engram Ventures — AI Strategy & Technical Advisory",
    description:
      "Partnering with enterprise leaders and investors to build lasting AI capability.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-AU"
      className={`${cormorant.variable} ${jost.variable} ${jetbrains.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
