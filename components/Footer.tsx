import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function Footer() {
  const t = await getTranslations("Footer");
  const year = new Date().getFullYear();

  const navLinks = [
    { href: "/" as const, label: t("home") },
    { href: "/services" as const, label: t("services") },
    { href: "/about" as const, label: t("about") },
    { href: "/contact" as const, label: t("contact") },
  ];

  return (
    <footer className="bg-navy text-parchment/80">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element -- SVG logo; next/image does not optimize SVGs */}
            <img
              src="/logo/engram-logo-stacked-reversed-notag.svg"
              alt="Engram Ventures"
              width={160}
              height={84}
              className="h-20 w-auto mb-5 -ml-4"
            />
            <p className="font-body text-sm font-light leading-relaxed">
              {t("tagline")}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="section-label text-ember/70 mb-5">{t("navigation")}</div>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-body text-sm font-light text-parchment/80 hover:text-parchment transition-colors focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:outline-hidden rounded-xs"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <div className="section-label text-ember/70 mb-5">{t("getInTouch")}</div>
            <p className="font-body text-sm font-light leading-relaxed">
              {t("location")}
            </p>
            <p className="font-body text-sm font-light leading-relaxed mb-4">
              {t("location2")}
            </p>
            <a
              href="mailto:hello@engram.ventures"
              className="font-body text-sm font-light text-parchment hover:text-ember transition-colors focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:outline-hidden rounded-xs"
            >
              hello@engram.ventures
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="font-body text-xs font-light" suppressHydrationWarning>
            {t("copyright", { year })}
          </p>
          <p className="font-body text-xs font-light">
            {t("abn")}
          </p>
        </div>
      </div>
    </footer>
  );
}
