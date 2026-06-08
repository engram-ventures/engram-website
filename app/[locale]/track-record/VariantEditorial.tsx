import { getTranslations } from "next-intl/server";
import CtaLink from "@/components/CtaLink";
import ObservedSection from "@/components/ObservedSection";
import { clientSectors } from "./content";

type Props = {
  locale: string;
};

export default async function VariantEditorial({ locale }: Props) {
  const t = await getTranslations({ locale, namespace: "TrackRecord" });

  const stats = [
    { value: t("stat1Value"), label: t("stat1Label") },
    { value: t("stat2Value"), label: t("stat2Label") },
    { value: t("stat3Value"), label: t("stat3Label") },
    { value: t("stat4Value"), label: t("stat4Label") },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="section-label text-ember mb-6">{t("label")}</div>
          <h1 className="font-display text-6xl md:text-7xl font-light text-parchment leading-tight max-w-2xl">
            {t("heading1")}
            <br />
            <em className="font-light text-ember">{t("heading2")}</em>
          </h1>
          <p className="font-body text-base font-light text-parchment/70 mt-6 max-w-xl">
            {t("subheading")}
          </p>
        </div>
      </section>

      {/* Impact stats — inline row */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-y-0 md:divide-x md:divide-parchment-dark">
            {stats.map((s) => (
              <div key={s.label} className="md:px-6 first:md:pl-0 last:md:pr-0">
                <div className="font-display text-5xl md:text-6xl font-light text-navy mb-4">
                  {s.value}
                </div>
                <div className="font-body text-sm font-light text-slate-dark leading-relaxed">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
          <p className="font-body text-sm font-light text-slate-dark leading-relaxed mt-12 max-w-2xl">
            {t("statsCaption")}
          </p>
        </div>
      </section>

      {/* Sector wall — anonymised descriptors */}
      <section className="bg-parchment py-24">
        <div className="max-w-6xl mx-auto px-6 space-y-14">
          {clientSectors.map((group) => (
            <ObservedSection key={group.titleKey} sectionId={group.titleKey}>
              <div className="section-label text-ember mb-5">
                {t(group.titleKey)}
              </div>
              <ul className="space-y-3">
                {group.engagementKeys.map((key) => (
                  <li key={key} className="flex items-start gap-4">
                    <span className="text-ember mt-2 text-xs shrink-0">◆</span>
                    <span className="font-body text-base font-light text-navy leading-relaxed">
                      {t(key)}
                    </span>
                  </li>
                ))}
              </ul>
            </ObservedSection>
          ))}
        </div>
      </section>

      {/* CTA — left aligned */}
      <section className="py-20 bg-navy">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-4xl md:text-5xl font-light text-parchment mb-6 max-w-2xl">
            {t("ctaHeading")}
          </h2>
          <p className="font-body text-base font-light text-parchment/80 max-w-xl mb-10 leading-relaxed">
            {t("ctaDescription")}
          </p>
          <CtaLink
            href="/contact"
            ctaLocation="track-record-cta"
            ctaText={t("ctaButton")}
            className="btn-primary"
          >
            {t("ctaButton")}
          </CtaLink>
        </div>
      </section>
    </>
  );
}
