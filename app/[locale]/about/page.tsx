import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import VariantFounderForward from "./VariantFounderForward";
import VariantEditorial from "./VariantEditorial";

const siteUrl = "https://engram.ventures";

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ v?: string }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
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

export default async function AboutPage({ params, searchParams }: Props) {
  const { locale } = await params;
  const { v } = await searchParams;
  setRequestLocale(locale);

  if (v === "b") {
    return <VariantEditorial locale={locale} />;
  }
  return <VariantFounderForward locale={locale} />;
}
