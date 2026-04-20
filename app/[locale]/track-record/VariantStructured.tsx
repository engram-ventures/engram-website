import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import LogoPlaceholder from "@/components/LogoPlaceholder";
import { featuredLogos, sectorGroups } from "./content";

type Props = {
  locale: string;
};

export default async function VariantStructured({ locale }: Props) {
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
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 font-body text-sm font-light text-parchment/60">
            <span>{t("stat1Value")} {t("heroStripValue")}</span>
            <span aria-hidden>·</span>
            <span>{t("stat2Value")} {t("heroStripVentures")}</span>
            <span aria-hidden>·</span>
            <span>{t("stat3Value")} {t("heroStripCountries")}</span>
          </div>
        </div>
      </section>

      {/* Attribution — compact card */}
      <section className="bg-parchment py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="card flex items-start gap-4">
            <span className="text-ember mt-1 text-xs shrink-0">◆</span>
            <p className="font-body text-base font-light text-slate-dark leading-relaxed">
              {t("attribution")}
            </p>
          </div>
        </div>
      </section>

      {/* Impact stats — card tiles */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="card">
                <div className="font-display text-4xl font-light text-navy mb-3">
                  {s.value}
                </div>
                <div className="font-body text-sm font-light text-slate-dark leading-relaxed">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
          <p className="font-body text-sm font-light text-slate-dark leading-relaxed mt-10 max-w-2xl">
            {t("statsCaption")}
          </p>
        </div>
      </section>

      {/* Featured row — bordered tiles */}
      <section className="bg-parchment py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="section-label text-ember mb-8">{t("featuredLabel")}</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {featuredLogos.map((name) => (
              <LogoPlaceholder key={name} name={name} size="featured" style="tile" />
            ))}
          </div>
        </div>
      </section>

      {/* Logo wall — sub-sections with tile grids */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6 space-y-14">
          {sectorGroups.map((group) => (
            <div key={group.titleKey}>
              <h3 className="font-display text-2xl font-light text-navy mb-6">
                {t(group.titleKey)}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {group.logos.map((name) => (
                  <LogoPlaceholder
                    key={name}
                    name={name}
                    size="default"
                    style="tile"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA — centred */}
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
