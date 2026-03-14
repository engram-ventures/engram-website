import type { Metadata } from "next";
import Link from "next/link";
import { servicesJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "AI Architecture, Due Diligence & DevSecOps Services",
  description:
    "AI Architecture & Planning, Technical Due Diligence, and DevSecOps & Cloud Architecture. Engram Ventures delivers embedded advisory for enterprise leaders and investors.",
  alternates: { canonical: "/services" },
};

const services = [
  {
    id: "ai-strategy",
    icon: "◈",
    name: "AI Architecture & Planning",
    tagline: "From 'we should do something with AI' to a plan your team can ship.",
    description:
      "Most teams we talk to have AI ambitions but no clear path to production. We work with technology leaders to close that gap — figuring out what to build, what to buy, and how to get from proof-of-concept to something your engineers can actually ship and maintain.",
    deliverables: [
      "AI capability assessment and readiness review",
      "Strategic roadmap with 30/90/180-day milestones",
      "Build vs buy vs integrate analysis",
      "Executive briefings and stakeholder alignment",
      "AI governance and responsible-use guardrails",
      "Team structure and hiring recommendations",
    ],
    audience: "Enterprise CTOs, technology leaders, and boards navigating AI adoption.",
  },
  {
    id: "due-diligence",
    icon: "◎",
    name: "Technical Due Diligence",
    tagline: "Independent, thorough, and built for decisions with real money behind them.",
    description:
      "For PE and VC firms, the difference between a good deal and an expensive lesson often comes down to what the data room doesn't show. We get into the codebase, the architecture, and the team dynamics — and give you a clear, independent picture before you commit.",
    deliverables: [
      "Architecture review and scalability assessment",
      "Engineering team capability and delivery velocity",
      "Security posture and compliance gap analysis",
      "Technical debt quantification",
      "AI/ML capability assessment",
      "Risk scoring and red-flag report",
    ],
    audience: "PE/VC firms, M&A advisors, and investors evaluating technology-intensive assets.",
  },
  {
    id: "devsecops",
    icon: "◇",
    name: "DevSecOps & Cloud Architecture",
    tagline: "Secure foundations for teams that ship fast.",
    description:
      "When teams move fast — especially with AI-assisted development — security gaps compound quickly. We help engineering teams build AWS infrastructure that's secure and compliant from day one, without turning every deploy into a bottleneck.",
    deliverables: [
      "AWS architecture design and review",
      "ISO 27001 and SOC 2 readiness assessment",
      "Security automation and CI/CD pipeline hardening",
      "IAM and least-privilege access design",
      "Compliance-as-code implementation",
      "AI-assisted development workflow design",
    ],
    audience: "Scaleup engineering teams and CTOs building AI-native products on AWS.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesJsonLd),
        }}
      />
      {/* Header */}
      <section className="bg-navy pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="section-label text-ember mb-6">What we do</div>
          <h1 className="font-display text-6xl md:text-7xl font-light text-parchment leading-tight max-w-xl">
            Our services
          </h1>
          <p className="mt-6 font-body text-lg font-light text-parchment/60 max-w-lg leading-relaxed">
            Three focused practice areas, built around the problems we&apos;ve spent two decades solving.
          </p>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-parchment">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col gap-6">
            {services.map((s, i) => (
              <div
                key={s.id}
                id={s.id}
                className="bg-white border border-parchment-dark rounded-xs overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-5">
                  {/* Left panel */}
                  <div className={`md:col-span-2 p-10 ${i % 2 === 0 ? "bg-navy" : "bg-navy-light"}`}>
                    <div className="text-3xl mb-6 text-ember">
                      {s.icon}
                    </div>
                    <h2 className="font-display text-3xl font-light mb-3 text-parchment">
                      {s.name}
                    </h2>
                    <p className="font-body text-sm font-light italic mb-8 text-parchment/60">
                      {s.tagline}
                    </p>
                    <div>
                      <div className="section-label mb-3 text-ember/70">
                        Best for
                      </div>
                      <p className="font-body text-sm font-light leading-relaxed text-parchment/60">
                        {s.audience}
                      </p>
                    </div>
                  </div>

                  {/* Right panel */}
                  <div className="md:col-span-3 p-10">
                    <p className="font-body text-base font-light text-slate-warm leading-relaxed mb-10">
                      {s.description}
                    </p>
                    <div>
                      <h3 className="section-label mb-5">Deliverables</h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {s.deliverables.map((d) => (
                          <li key={d} className="flex items-start gap-3">
                            <span className="text-ember mt-0.5 text-xs shrink-0">◆</span>
                            <span className="font-body text-sm font-light text-navy leading-snug">
                              {d}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white border-t border-parchment-dark">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <h2 className="font-display text-4xl font-light text-navy mb-3">
              Not sure where to start?
            </h2>
            <p className="font-body text-base font-light text-slate-warm">
              Tell us about your situation and we&apos;ll figure it out.
            </p>
          </div>
          <Link href="/contact" className="btn-primary shrink-0">
            Start a conversation →
          </Link>
        </div>
      </section>
    </>
  );
}
