"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { applyConsent, getStoredConsent, setStoredConsent } from "@/lib/consent";

export default function ConsentBanner() {
  const t = useTranslations("Consent");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- valid: read client-only storage on mount
    setVisible(getStoredConsent() === null);
  }, []);

  function handleChoice(value: "granted" | "denied") {
    setStoredConsent(value);
    applyConsent(value);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label={t("ariaLabel")}
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md z-40 bg-navy text-parchment border border-white/10 rounded-xs shadow-2xl px-6 py-5"
    >
      <p className="font-body text-sm font-light leading-relaxed mb-4 text-parchment/90">
        {t("message")}
      </p>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => handleChoice("granted")}
          className="btn-primary text-xs py-2 px-4"
        >
          {t("accept")}
        </button>
        <button
          type="button"
          onClick={() => handleChoice("denied")}
          className="font-body text-xs font-light text-parchment/70 hover:text-parchment transition-colors px-3 py-2 focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-navy focus-visible:outline-hidden rounded-xs"
        >
          {t("decline")}
        </button>
      </div>
    </div>
  );
}
