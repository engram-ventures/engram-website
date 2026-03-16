import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getServicesJsonLd } from "@/lib/structured-data";

const siteUrl = "https://engram.ventures";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("servicesTitle"),
    description: t("servicesDescription"),
    alternates: {
      canonical: "/services",
      languages: {
        en: `${siteUrl}/services`,
        "pt-BR": `${siteUrl}/pt-BR/services`,
      },
    },
  };
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Services" });

  const services = [
    {
      id: "ai-strategy",
      icon: "◈",
      name: t("service1Name"),
      tagline: t("service1Tagline"),
      description: t("service1Description"),
      audience: t("service1Audience"),
      deliverables: [
        t("service1Deliverable1"),
        t("service1Deliverable2"),
        t("service1Deliverable3"),
        t("service1Deliverable4"),
        t("service1Deliverable5"),
        t("service1Deliverable6"),
      ],
    },
    {
      id: "due-diligence",
      icon: "◎",
      name: t("service2Name"),
      tagline: t("service2Tagline"),
      description: t("service2Description"),
      audience: t("service2Audience"),
      deliverables: [
        t("service2Deliverable1"),
        t("service2Deliverable2"),
        t("service2Deliverable3"),
        t("service2Deliverable4"),
        t("service2Deliverable5"),
        t("service2Deliverable6"),
      ],
    },
    {
      id: "devsecops",
      icon: "◇",
      name: t("service3Name"),
      tagline: t("service3Tagline"),
      description: t("service3Description"),
      audience: t("service3Audience"),
      deliverables: [
        t("service3Deliverable1"),
        t("service3Deliverable2"),
        t("service3Deliverable3"),
        t("service3Deliverable4"),
        t("service3Deliverable5"),
        t("service3Deliverable6"),
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getServicesJsonLd(locale)),
        }}
      />
      {/* Header */}
      <section className="bg-navy pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="section-label text-ember mb-6">{t("label")}</div>
          <h1 className="font-display text-6xl md:text-7xl font-light text-parchment leading-tight max-w-xl">
            {t("heading")}
          </h1>
          <p className="mt-6 font-body text-lg font-light text-parchment/80 max-w-lg leading-relaxed">
            {t("subheading")}
          </p>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-parchment">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col gap-6">
            {services.map((s, i) => (
              <div
                key={s.id}
                id={s.id}
                className="bg-white border border-parchment-dark rounded-xs overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-5">
                  {/* Left panel */}
                  <div className={`md:col-span-2 p-10 ${i % 2 === 0 ? "bg-navy" : "bg-navy-light"}`}>
                    <div className="text-3xl mb-6 text-ember">
                      {s.icon}
                    </div>
                    <h2 className="font-display text-3xl font-light mb-3 text-parchment">
                      {s.name}
                    </h2>
                    <p className="font-body text-sm font-light italic mb-8 text-parchment/75">
                      {s.tagline}
                    </p>
                    <div>
                      <div className="section-label mb-3 text-ember/70">
                        {t("bestFor")}
                      </div>
                      <p className="font-body text-sm font-light leading-relaxed text-parchment/75">
                        {s.audience}
                      </p>
                    </div>
                  </div>

                  {/* Right panel */}
                  <div className="md:col-span-3 p-10">
                    <p className="font-body text-base font-light text-slate-dark leading-relaxed mb-10">
                      {s.description}
                    </p>
                    <div>
                      <h3 className="section-label mb-5">{t("deliverables")}</h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {s.deliverables.map((d) => (
                          <li key={d} className="flex items-start gap-3">
                            <span className="text-ember mt-0.5 text-xs shrink-0">◆</span>
                            <span className="font-body text-sm font-light text-navy leading-snug">
                              {d}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white border-t border-parchment-dark">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <h2 className="font-display text-4xl font-light text-navy mb-3">
              {t("ctaHeading")}
            </h2>
            <p className="font-body text-base font-light text-slate-dark">
              {t("ctaDescription")}
            </p>
          </div>
          <Link href="/contact" className="btn-primary shrink-0">
            {t("ctaButton")}
          </Link>
        </div>
      </section>
    </>
  );
}
