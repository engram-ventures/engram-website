"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

type FormState = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full bg-white border border-parchment-dark rounded-xs px-4 py-3 font-body text-sm font-light text-navy placeholder:text-slate-dark/70 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 transition-colors";

export default function ContactClient() {
  const t = useTranslations("Contact");
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    type: "",
    message: "",
  });

  const enquiryTypes = [
    t("enquiryType1"),
    t("enquiryType2"),
    t("enquiryType3"),
    t("enquiryType4"),
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setFormState(res.ok ? "success" : "error");
    } catch {
      setFormState("error");
    }
  };

  return (
    <>
      {/* Header */}
      <section className="bg-navy pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="section-label text-ember mb-6">{t("label")}</div>
          <h1 className="font-display text-6xl md:text-7xl font-light text-parchment leading-tight max-w-xl">
            {t("heading")}
          </h1>
          <p className="mt-6 font-body text-lg font-light text-parchment/80 max-w-lg leading-relaxed">
            {t("subheading")}
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-24 bg-parchment">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-16">
            {/* Form */}
            <div className="md:col-span-3">
              <div aria-live="polite">
                {formState === "success" && (
                  <div className="bg-white border border-parchment-dark rounded-xs p-12 text-center">
                    <div className="text-4xl text-sage mb-6">◆</div>
                    <h2 className="font-display text-3xl font-light text-navy mb-4">
                      {t("successHeading")}
                    </h2>
                    <p className="font-body text-base font-light text-slate-dark leading-relaxed">
                      {t("successMessage")}
                    </p>
                  </div>
                )}
              </div>
              {formState !== "success" && (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white border border-parchment-dark rounded-xs p-10"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label htmlFor="name" className="section-label block mb-2">{t("nameLabel")}</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder={t("namePlaceholder")}
                        value={form.name}
                        onChange={handleChange}
                        className={inputClass}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="section-label block mb-2">{t("emailLabel")}</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        spellCheck={false}
                        placeholder={t("emailPlaceholder")}
                        value={form.email}
                        onChange={handleChange}
                        className={inputClass}
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-5">
                    <label htmlFor="company" className="section-label block mb-2">{t("companyLabel")}</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      placeholder={t("companyPlaceholder")}
                      value={form.company}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>

                  <div className="mb-5">
                    <label htmlFor="enquiry-type" className="section-label block mb-2">
                      {t("enquiryTypeLabel")}
                    </label>
                    <select
                      id="enquiry-type"
                      name="type"
                      value={form.type}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">{t("enquiryTypePlaceholder")}</option>
                      {enquiryTypes.map((typ) => (
                        <option key={typ} value={typ}>
                          {typ}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-8">
                    <label htmlFor="message" className="section-label block mb-2">{t("messageLabel")}</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      placeholder={t("messagePlaceholder")}
                      value={form.message}
                      onChange={handleChange}
                      className={`${inputClass} resize-none`}
                      required
                    />
                  </div>

                  <div aria-live="polite">
                    {formState === "error" && (
                      <p className="text-ember font-body text-sm mb-4">
                        {t("errorMessage")}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={formState === "loading" || !form.name || !form.email || !form.message}
                    className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formState === "loading" ? t("submitting") : t("submitButton")}
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <div className="section-label mb-4">{t("directContact")}</div>
                <a
                  href="mailto:hello@engram.ventures"
                  className="font-body text-base font-light text-navy hover:text-ember transition-colors focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:outline-hidden rounded-xs"
                >
                  hello@engram.ventures
                </a>
              </div>

              <div>
                <div className="section-label mb-4">{t("basedIn")}</div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="overflow-hidden rounded-xs border border-parchment-dark">
                    <div className="aspect-[4/3] relative">
                      <Image
                        src="/sydney.png"
                        alt={t("basedInValue")}
                        fill
                        className="object-cover grayscale"
                        sizes="(max-width: 768px) 50vw, 150px"
                      />
                    </div>
                    <div className="px-3 py-2.5 bg-white">
                      <p className="font-body text-xs font-light text-navy">{t("basedInValue")}</p>
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-xs border border-parchment-dark">
                    <div className="aspect-[4/3] relative">
                      <Image
                        src="/saopaulo.png"
                        alt={t("basedInValue2")}
                        fill
                        className="object-cover grayscale"
                        sizes="(max-width: 768px) 50vw, 150px"
                      />
                    </div>
                    <div className="px-3 py-2.5 bg-white">
                      <p className="font-body text-xs font-light text-navy">{t("basedInValue2")}</p>
                    </div>
                  </div>
                </div>
              </div>


              <div className="bg-navy rounded-xs p-8">
                <div className="font-display text-2xl font-light text-parchment italic leading-snug mb-6">
                  {t("brandQuote")}
                </div>
                <div className="font-body text-xs font-light text-parchment/70 tracking-wide">
                  {t("brandName")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
