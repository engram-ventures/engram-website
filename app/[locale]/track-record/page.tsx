import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import VariantEditorial from "./VariantEditorial";

const siteUrl = "https://engram.ventures";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("trackRecordTitle"),
    description: t("trackRecordDescription"),
    alternates: {
      canonical: "/track-record",
      languages: {
        en: `${siteUrl}/track-record`,
        "pt-BR": `${siteUrl}/pt-BR/track-record`,
      },
    },
  };
}

export default async function TrackRecordPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <VariantEditorial locale={locale} />;
}
