"use client";

import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

const enquiryTypes = [
  "AI Architecture & Planning",
  "Technical Due Diligence",
  "DevSecOps & Cloud Architecture",
  "General enquiry",
];

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    type: "",
    message: "",
  });

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

  const inputClass =
    "w-full bg-white border border-parchment-dark rounded-xs px-4 py-3 font-body text-sm font-light text-navy placeholder:text-slate-warm/60 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 transition-colors";

  return (
    <>
      {/* Header */}
      <section className="bg-navy pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="section-label text-ember mb-6">Get in touch</div>
          <h1 className="font-display text-6xl md:text-7xl font-light text-parchment leading-tight max-w-xl">
            Let&apos;s talk
          </h1>
          <p className="mt-6 font-body text-lg font-light text-parchment/60 max-w-lg leading-relaxed">
            Tell us about your situation. We&apos;ll get back to you within one
            business day.
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
                      Message received.
                    </h2>
                    <p className="font-body text-base font-light text-slate-warm leading-relaxed">
                      Thanks for reaching out. We&apos;ll be in touch within one
                      business day.
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
                      <label htmlFor="name" className="section-label block mb-2">Name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="Your name…"
                        value={form.name}
                        onChange={handleChange}
                        className={inputClass}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="section-label block mb-2">Email</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        spellCheck={false}
                        placeholder="you@company.com"
                        value={form.email}
                        onChange={handleChange}
                        className={inputClass}
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-5">
                    <label htmlFor="company" className="section-label block mb-2">Company</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      placeholder="Your organisation…"
                      value={form.company}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>

                  <div className="mb-5">
                    <label htmlFor="enquiry-type" className="section-label block mb-2">
                      Enquiry type
                    </label>
                    <select
                      id="enquiry-type"
                      name="type"
                      value={form.type}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Select a service area</option>
                      {enquiryTypes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-8">
                    <label htmlFor="message" className="section-label block mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      placeholder="Tell us about your situation — the more context, the better."
                      value={form.message}
                      onChange={handleChange}
                      className={`${inputClass} resize-none`}
                      required
                    />
                  </div>

                  <div aria-live="polite">
                    {formState === "error" && (
                      <p className="text-ember font-body text-sm mb-4">
                        Something went wrong. Please try again or email us
                        directly.
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={formState === "loading" || !form.name || !form.email || !form.message}
                    className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formState === "loading" ? "Sending\u2026" : "Send message \u2192"}
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <div className="section-label mb-4">Direct contact</div>
                <a
                  href="mailto:hello@engram.ventures"
                  className="font-body text-base font-light text-navy hover:text-ember transition-colors focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:outline-hidden rounded-xs"
                >
                  hello@engram.ventures
                </a>
              </div>

              <div>
                <div className="section-label mb-4">Based in</div>
                <p className="font-body text-base font-light text-slate-warm">
                  Sydney, Australia
                  <br />
                  Available globally
                </p>
              </div>

              <div>
                <div className="section-label mb-4">Response time</div>
                <p className="font-body text-base font-light text-slate-warm">
                  Within one business day (AEST)
                </p>
              </div>

              <div className="bg-navy rounded-xs p-8">
                <div className="font-display text-2xl font-light text-parchment italic leading-snug mb-6">
                  &ldquo;Strategy that sticks.&rdquo;
                </div>
                <div className="font-body text-xs font-light text-parchment/50 tracking-wide">
                  ENGRAM VENTURES
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
