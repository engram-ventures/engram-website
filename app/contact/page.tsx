import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Engram Ventures. AI strategy, technical due diligence, and DevSecOps advisory for enterprise leaders and investors. Based in Sydney, Australia.",
};

export default function ContactPage() {
  return <ContactClient />;
}
