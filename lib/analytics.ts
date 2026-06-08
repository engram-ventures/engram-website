"use client";

import { sendGAEvent } from "@next/third-parties/google";

type EventMap = {
  cta_clicked: {
    cta_location: "nav" | "nav-mobile" | "hero" | "footer" | "page-cta" | "track-record-cta";
    cta_text: string;
    destination: string;
    locale: string;
  };
  contact_form_submitted: {
    enquiry_type: string;
    company_present: boolean;
    locale: string;
  };
  contact_form_failed: {
    error_type: "network" | "validation" | "server";
    locale: string;
  };
  language_switched: {
    from_locale: string;
    to_locale: string;
  };
  track_record_section_viewed: {
    section_id: string;
    locale: string;
  };
};

export type AnalyticsEvent = keyof EventMap;

export function track<E extends AnalyticsEvent>(event: E, params: EventMap[E]): void {
  if (typeof window === "undefined") return;
  sendGAEvent("event", event, params);
}
