"use client";

import { useEffect, useRef } from "react";
import { useLocale } from "next-intl";
import { track } from "@/lib/analytics";

type Props = {
  sectionId: string;
  threshold?: number;
  className?: string;
  children: React.ReactNode;
};

export default function ObservedSection({
  sectionId,
  threshold = 0.4,
  className,
  children,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const firedRef = useRef(false);
  const locale = useLocale();

  useEffect(() => {
    const el = ref.current;
    if (!el || firedRef.current) return;
    if (typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (
            entry.isIntersecting &&
            entry.intersectionRatio >= threshold &&
            !firedRef.current
          ) {
            firedRef.current = true;
            track("track_record_section_viewed", {
              section_id: sectionId,
              locale,
            });
            observer.disconnect();
            break;
          }
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [sectionId, threshold, locale]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
