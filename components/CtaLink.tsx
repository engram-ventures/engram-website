"use client";

import type { ComponentProps, ReactNode } from "react";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { track } from "@/lib/analytics";

type LinkProps = ComponentProps<typeof Link>;

type CtaLocation =
  | "nav"
  | "nav-mobile"
  | "hero"
  | "footer"
  | "page-cta"
  | "track-record-cta";

type Props = Omit<LinkProps, "onClick"> & {
  ctaLocation: CtaLocation;
  ctaText: string;
  children: ReactNode;
};

export default function CtaLink({
  ctaLocation,
  ctaText,
  href,
  children,
  ...rest
}: Props) {
  const locale = useLocale();

  function handleClick() {
    track("cta_clicked", {
      cta_location: ctaLocation,
      cta_text: ctaText,
      destination: typeof href === "string" ? href : JSON.stringify(href),
      locale,
    });
  }

  return (
    <Link href={href} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
}
