import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import ContactClient from "./ContactClient";

const siteUrl = "https://engram.ventures";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("contactTitle"),
    description: t("contactDescription"),
    alternates: {
      canonical: "/contact",
      languages: {
        en: `${siteUrl}/contact`,
        "pt-BR": `${siteUrl}/pt-BR/contact`,
      },
    },
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ContactClient />;
}
