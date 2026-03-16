import type { Metadata } from "next";
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
    title: t("homeTitle"),
    description: t("homeDescription"),
    alternates: {
      canonical: "/",
      languages: {
        en: siteUrl,
        "pt-BR": `${siteUrl}/pt-BR`,
      },
    },
  };
}

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Home" });

  const services = [
    {
      icon: "◈",
      name: t("service1Name"),
      desc: t("service1Desc"),
      href: "/services#ai-strategy" as const,
    },
    {
      icon: "◎",
      name: t("service2Name"),
      desc: t("service2Desc"),
      href: "/services#due-diligence" as const,
    },
    {
      icon: "◇",
      name: t("service3Name"),
      desc: t("service3Desc"),
      href: "/services#devsecops" as const,
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-ember blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-sage blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-32">
          <div className="max-w-3xl">
            <div className="section-label text-ember mb-8">
              {t("heroLabel")}
            </div>
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-light text-parchment leading-[0.95] mb-8">
              {t("heroTitle1")}
              <br />
              <em className="text-ember font-light">{t("heroTitle2")}</em>
            </h1>
            <p className="font-body text-lg md:text-xl font-light text-parchment/70 leading-relaxed mb-12 max-w-xl">
              {t("heroDescription")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">
                {t("startConversation")}
                <span className="text-xs opacity-60">→</span>
              </Link>
              <Link href="/services" className="btn-outline border-parchment/30 text-parchment hover:bg-parchment hover:text-navy">
                {t("ourServices")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-28 bg-parchment">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <div className="section-label mb-4">{t("whatWeDo")}</div>
            <h2 className="section-heading max-w-lg">
              {t("threeWays")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link
                key={s.name}
                href={s.href}
                className="card group hover:border-ember/40 hover:shadow-xs transition-[border-color,box-shadow] duration-200 focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:outline-hidden"
              >
                <div className="text-2xl text-ember mb-6">{s.icon}</div>
                <h3 className="font-display text-2xl font-light text-navy mb-4 group-hover:text-ember transition-colors">
                  {s.name}
                </h3>
                <p className="font-body text-sm font-light text-slate-dark leading-relaxed">
                  {s.desc}
                </p>
                <div className="mt-8 font-body text-xs text-ember opacity-0 group-hover:opacity-100 transition-opacity tracking-wide">
                  {t("learnMore")}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label mb-4">{t("aboutLabel")}</div>
              <h2 className="section-heading mb-6">
                {t("aboutHeading")}
              </h2>
              <p className="font-body text-base font-light text-slate-dark leading-relaxed mb-6">
                {t("aboutP1")}
              </p>
              <p className="font-body text-base font-light text-slate-dark leading-relaxed mb-8">
                {t("aboutP2")}
              </p>
              <Link href="/about" className="btn-outline">
                {t("ourStory")}
              </Link>
            </div>

            <div className="hidden md:block">
              <div className="relative">
                <div className="bg-parchment rounded-xs p-12 border border-parchment-dark">
                  <blockquote className="font-display text-3xl font-light text-navy italic leading-snug">
                    {t("aboutQuote")}
                  </blockquote>
                  <div className="mt-8 flex items-center gap-3">
                    <div className="w-8 h-px bg-ember" />
                    <span className="font-body text-xs font-light text-slate-dark tracking-wide">
                      {t("aboutQuoteAttr")}
                    </span>
                  </div>
                </div>
                <div className="absolute -bottom-3 -right-3 w-full h-full border border-ember/20 rounded-xs -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-navy">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="section-label text-ember mb-6">{t("ctaLabel")}</div>
          <h2 className="font-display text-5xl md:text-6xl font-light text-parchment mb-8">
            {t("ctaHeading")}
          </h2>
          <p className="font-body text-base font-light text-parchment/80 max-w-lg mx-auto mb-12 leading-relaxed">
            {t("ctaDescription")}
          </p>
          <Link href="/contact" className="btn-primary">
            {t("ctaButton")}
            <span className="text-xs opacity-60">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
