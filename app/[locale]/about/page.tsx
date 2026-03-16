import type { Metadata } from "next";
import Image from "next/image";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

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
  const t = await getTranslations({ locale, namespace: "About" });

  const credentials = [
    t("credential1"),
    t("credential2"),
    t("credential3"),
    t("credential4"),
    t("credential5"),
    t("credential6"),
  ];

  const values = [
    { name: t("value1Name"), desc: t("value1Desc") },
    { name: t("value2Name"), desc: t("value2Desc") },
    { name: t("value3Name"), desc: t("value3Desc") },
    { name: t("value4Name"), desc: t("value4Desc") },
  ];

  return (
    <>
      {/* Header */}
      <section className="bg-navy pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="section-label text-ember mb-6">{t("label")}</div>
          <h1 className="font-display text-6xl md:text-7xl font-light text-parchment leading-tight max-w-xl">
            {t("heading1")}
            <br />
            <em className="font-light text-ember">{t("heading2")}</em>
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-parchment">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display text-4xl font-light text-navy mb-8 leading-tight">
                {t("storyHeading")}
              </h2>
              <div className="space-y-5 font-body text-base font-light text-slate-dark leading-relaxed">
                <p>{t("storyP1")}</p>
                <p>{t("storyP2")}</p>
                <p>{t("storyP3")}</p>
                <p>{t("storyP4")}</p>
              </div>
            </div>

            {/* Credentials */}
            <div>
              <div className="relative mb-8">
                <div className="overflow-hidden rounded-xs border border-parchment-dark">
                  <Image
                    src="/web-profile-new.jpeg"
                    alt={t("profileAlt")}
                    width={600}
                    height={750}
                    className="w-full object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 w-full h-full border border-ember/20 rounded-xs -z-10" />
              </div>

              <div className="section-label mb-3">{t("andreGallo")}</div>
              <p className="font-body text-sm font-light text-slate-dark mb-6">
                {t("founderCeo")}
              </p>
              <ul className="space-y-4">
                {credentials.map((c) => (
                  <li key={c} className="flex items-start gap-4">
                    <span className="text-ember mt-1 text-xs shrink-0">◆</span>
                    <span className="font-body text-sm font-light text-navy leading-relaxed">
                      {c}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <div className="section-label mb-4">{t("valuesLabel")}</div>
            <h2 className="section-heading">{t("valuesHeading")}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.name} className="card">
                <h3 className="font-display text-xl font-light text-navy mb-3">
                  {v.name}
                </h3>
                <p className="font-body text-sm font-light text-slate-dark leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-light text-parchment mb-6">
            {t("ctaHeading")}
          </h2>
          <p className="font-body text-base font-light text-parchment/80 max-w-md mx-auto mb-10 leading-relaxed">
            {t("ctaDescription")}
          </p>
          <Link href="/contact" className="btn-primary">
            {t("ctaButton")}
          </Link>
        </div>
      </section>
    </>
  );
}
