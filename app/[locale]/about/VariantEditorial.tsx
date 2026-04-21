import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

type Props = {
  locale: string;
};

export default async function VariantEditorial({ locale }: Props) {
  const t = await getTranslations({ locale, namespace: "About" });

  const credentials = [
    t("credential1"),
    t("credential2"),
    t("credential3"),
    t("credential4"),
    t("credential5"),
    t("credential6"),
  ];

  const education = [t("bioEdu1"), t("bioEdu2"), t("bioEdu3")];

  const values = [
    { name: t("value1Name"), desc: t("value1Desc") },
    { name: t("value2Name"), desc: t("value2Desc") },
    { name: t("value3Name"), desc: t("value3Desc") },
    { name: t("value4Name"), desc: t("value4Desc") },
  ];

  return (
    <>
      {/* Hero — compressed */}
      <section className="bg-navy pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="section-label text-ember mb-5">{t("label")}</div>
          <h1 className="font-display text-5xl md:text-6xl font-light text-parchment leading-tight max-w-3xl">
            {t("heading1")}{" "}
            <em className="font-light text-ember">{t("heading2")}</em>
          </h1>
        </div>
      </section>

      {/* Merged Story + Bio — editorial two-column with sidebar */}
      <section className="py-20 bg-parchment">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Narrative — scrolls */}
            <div className="md:col-span-2 order-2 md:order-1">
              <h2 className="font-display text-4xl font-light text-navy mb-8 leading-tight">
                {t("storyHeading")}
              </h2>
              <div className="space-y-5 font-body text-base font-light text-slate-dark leading-relaxed">
                <p>{t("storyP1")}</p>
                <p>{t("storyP2")}</p>
                <p>{t("storyP3")}</p>
                <p>{t("storyP4")}</p>
              </div>

              <div className="mt-14 pt-10 border-t border-parchment-dark">
                <div className="section-label mb-4">{t("bioLabel")}</div>
                <h2 className="font-display text-4xl font-light text-navy mb-8 leading-tight">
                  {t("bioHeading")}
                </h2>
                <div className="space-y-8 font-body text-base font-light text-slate-dark leading-relaxed">
                  <p>{t("bioLead")}</p>
                  <div>
                    <h3 className="font-display text-2xl font-light text-navy mb-4">
                      {t("bioBeforeTrinitiHeading")}
                    </h3>
                    <p>{t("bioBeforeTriniti")}</p>
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-light text-navy mb-4">
                      {t("bioFocusHeading")}
                    </h3>
                    <p>{t("bioFocusBody")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar — sticky facts */}
            <aside className="order-1 md:order-2">
              <div className="md:sticky md:top-24 space-y-8">
                <div className="relative">
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

                <div>
                  <div className="section-label mb-2">{t("andreGallo")}</div>
                  <p className="font-body text-sm font-light text-slate-dark">
                    {t("founderCeo")}
                  </p>
                </div>

                <div>
                  <div className="section-label mb-4">
                    {t("bioEducationHeading")}
                  </div>
                  <ul className="space-y-3">
                    {education.map((e) => (
                      <li key={e} className="flex items-start gap-3">
                        <span className="text-ember mt-1 text-xs shrink-0">
                          ◆
                        </span>
                        <span className="font-body text-xs font-light text-navy leading-relaxed">
                          {e}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <ul className="space-y-3">
                    {credentials.map((c) => (
                      <li key={c} className="flex items-start gap-3">
                        <span className="text-ember mt-1 text-xs shrink-0">
                          ◆
                        </span>
                        <span className="font-body text-xs font-light text-navy leading-relaxed">
                          {c}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="section-label mb-2">
                    {t("bioLanguagesHeading")}
                  </div>
                  <p className="font-body text-sm font-light text-navy">
                    {t("bioLanguages")}
                  </p>
                </div>
              </div>
            </aside>
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
