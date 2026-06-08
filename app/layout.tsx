import Script from "next/script";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {process.env.NODE_ENV === "production" && process.env.NEXT_PUBLIC_GA_ID ? (
        <Script
          id="ga-consent-default"
          src="/ga-consent-default.js"
          strategy="beforeInteractive"
        />
      ) : null}
      {children}
    </>
  );
}
