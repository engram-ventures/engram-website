"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

const hamburgerLines = [0, 1, 2] as const;

export default function Navigation() {
  const t = useTranslations("Navigation");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/services" as const, label: t("services") },
    { href: "/about" as const, label: t("about") },
    { href: "/contact" as const, label: t("contact") },
  ];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- valid: sync with route navigation
    setMenuOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled || !isHome
          ? "bg-parchment/95 backdrop-blur-xs border-b border-parchment-dark"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none group">
          <span
            className={`font-display text-xl font-light tracking-[0.14em] transition-colors ${
              scrolled || !isHome ? "text-navy" : "text-parchment"
            }`}
          >
            {t("engram")}
          </span>
          <span
            className={`font-body text-[9px] font-light tracking-[0.32em] transition-colors ${
              scrolled || !isHome ? "text-ember" : "text-ember"
            }`}
          >
            {t("ventures")}
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-body text-sm font-light tracking-wide transition-colors focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:outline-hidden rounded-xs ${
                pathname === link.href
                  ? "text-ember"
                  : scrolled || !isHome
                  ? "text-navy hover:text-ember"
                  : "text-parchment/80 hover:text-parchment"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className={scrolled || !isHome ? "text-navy" : "text-parchment"}>
            <LanguageSwitcher />
          </div>
          <Link href="/contact" className="btn-primary text-xs py-2 px-4">
            {t("getInTouch")}
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:outline-hidden rounded-xs"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={t("toggleMenu")}
        >
          {hamburgerLines.map((i) => (
            <span
              key={i}
              className={`block w-5 h-px transition-[transform,opacity] duration-200 ${
                scrolled || !isHome ? "bg-navy" : "bg-parchment"
              } ${
                menuOpen && i === 0
                  ? "rotate-45 translate-y-2"
                  : menuOpen && i === 1
                  ? "opacity-0"
                  : menuOpen && i === 2
                  ? "-rotate-45 -translate-y-2"
                  : ""
              }`}
            />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-parchment border-t border-parchment-dark px-6 py-6 flex flex-col gap-5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-body text-base font-light ${
                pathname === link.href ? "text-ember" : "text-navy"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary self-start mt-2">
            {t("getInTouch")}
          </Link>
          <div className="text-navy">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </header>
  );
}
