import type { Metadata } from "next";
import { Cormorant_Garamond, Jost, JetBrains_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getOrganizationJsonLd } from "@/lib/structured-data";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500"],
  variable: "--font-jost",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
  variable: "--font-jetbrains",
  display: "swap",
});

const siteUrl = "https://engram.ventures";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: t("homeTitle"),
      template: "%s | Engram Ventures",
    },
    description: t("homeDescription"),
    keywords: [
      "AI engineering",
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
      locale: locale === "pt-BR" ? "pt_BR" : "en_AU",
      url: siteUrl,
      siteName: "Engram Ventures",
      title: t("homeTitle"),
      description: t("homeDescription"),
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
      title: t("homeTitle"),
      description: t("homeDescription"),
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
    alternates: {
      languages: {
        en: siteUrl,
        "pt-BR": `${siteUrl}/pt-BR`,
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={`${cormorant.variable} ${jost.variable} ${jetbrains.variable}`}
    >
      <head>
        <meta name="theme-color" content="#1C2B3A" />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getOrganizationJsonLd(locale)),
          }}
        />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <NextIntlClientProvider>
          <Navigation />
          <main id="main-content">{children}</main>
          <Footer />
        </NextIntlClientProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
