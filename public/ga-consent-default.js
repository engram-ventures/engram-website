// Google Consent Mode v2 — default-denied
// Loaded synchronously in <head> so it runs before gtag.js (afterInteractive).
// Updated to "granted" by lib/consent.ts when the visitor accepts the banner.
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("consent", "default", {
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
  analytics_storage: "denied",
  wait_for_update: 500,
});
