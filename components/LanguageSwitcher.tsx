"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("LanguageSwitcher");

  const otherLocale = locale === "en" ? "pt-BR" : "en";
  const otherLabel = locale === "en" ? t("portuguese") : t("english");

  function handleSwitch() {
    router.replace(pathname, { locale: otherLocale });
  }

  return (
    <button
      onClick={handleSwitch}
      aria-label={t("switchTo", { language: otherLabel })}
      className="flex items-center gap-1 font-body text-xs tracking-wide cursor-pointer focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:outline-hidden rounded-xs"
    >
      <span className={locale === "en" ? "font-medium" : "opacity-50"}>EN</span>
      <span className="opacity-30">/</span>
      <span className={locale === "pt-BR" ? "font-medium" : "opacity-50"}>PT</span>
    </button>
  );
}
