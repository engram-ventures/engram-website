import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import VariantEditorial from "./VariantEditorial";

const siteUrl = "https://engram.ventures";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("aboutTitle"),
    description: t("aboutDescription"),
    alternates: {
      canonical: "/about",
      languages: {
        en: `${siteUrl}/about`,
        "pt-BR": `${siteUrl}/pt-BR/about`,
      },
    },
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <VariantEditorial locale={locale} />;
}
