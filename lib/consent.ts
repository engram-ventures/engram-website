"use client";

export const CONSENT_KEY = "engram-consent-v1";

export type ConsentValue = "granted" | "denied";

type GtagFn = (...args: unknown[]) => void;
type ConsentWindow = Window & { gtag?: GtagFn; dataLayer?: unknown[] };

export function getStoredConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_KEY);
    return raw === "granted" || raw === "denied" ? raw : null;
  } catch {
    return null;
  }
}

export function setStoredConsent(value: ConsentValue): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(CONSENT_KEY, value);
  } catch {
    // localStorage unavailable (privacy mode, quota) — fail silently
  }
}

export function applyConsent(value: ConsentValue): void {
  if (typeof window === "undefined") return;
  const w = window as ConsentWindow;
  w.dataLayer = w.dataLayer || [];
  const gtag: GtagFn =
    w.gtag ??
    function (...args: unknown[]) {
      w.dataLayer!.push(args);
    };
  gtag("consent", "update", {
    ad_storage: value,
    ad_user_data: value,
    ad_personalization: value,
    analytics_storage: value,
  });
}
