import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI Strategy & Roadmaps, Technical Due Diligence, and DevSecOps & Cloud Architecture. Engram Ventures delivers embedded advisory for enterprise leaders and investors.",
};

const services = [
  {
    id: "ai-strategy",
    icon: "◈",
    name: "AI Strategy & Roadmaps",
    tagline: "From board-level framing to team-level execution.",
    description:
      "Most organisations have AI ambitions. Very few have a coherent plan for making them real. Engram Ventures works with technology leaders to close that gap — translating potential into a roadmap your teams can actually execute.",
    deliverables: [
      "AI capability assessment & maturity scoring",
      "Strategic roadmap with 30/90/180-day milestones",
      "Build vs buy vs integrate analysis",
      "Board and executive-level communication frameworks",
      "AI governance and risk management foundations",
      "Team structure and hiring recommendations",
    ],
    audience: "Enterprise CTOs, technology leaders, and boards navigating AI adoption.",
  },
  {
    id: "due-diligence",
    icon: "◎",
    name: "Technical Due Diligence",
    tagline: "Rigorous, independent, and built for investor-grade decisions.",
    description:
      "For PE and VC firms evaluating technology assets, the difference between a good deal and a bad one often comes down to what the data room doesn't show. Engram Ventures delivers structured, independent technical assessments that give you confidence before you commit.",
    deliverables: [
      "Architecture review and scalability assessment",
      "Engineering team quality and velocity analysis",
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
    tagline: "Security-first foundations for teams building at speed.",
    description:
      "AI-accelerated development creates real risks when security and architecture aren't designed in from the start. Engram Ventures helps engineering teams build on AWS foundations that are secure, compliant, and built to scale — without slowing delivery.",
    deliverables: [
      "AWS architecture design and review",
      "ISO 27001 and SOC 2 readiness assessment",
      "Security automation and CI/CD pipeline hardening",
      "IAM and least-privilege access design",
      "Compliance-as-code implementation",
      "Agentic SDLC workflow design",
    ],
    audience: "Scaleup engineering teams and CTOs building AI-native products on AWS.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-navy pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="section-label text-ember mb-6">What we do</div>
          <h1 className="font-display text-6xl md:text-7xl font-light text-parchment leading-tight max-w-xl">
            Our services
          </h1>
          <p className="mt-6 font-body text-lg font-light text-parchment/60 max-w-lg leading-relaxed">
            Three focused practice areas, built around the problems that matter most to enterprise technology leaders and investors.
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
                  <div className={`md:col-span-2 p-10 ${i % 2 === 0 ? "bg-navy" : "bg-parchment border-b md:border-b-0 md:border-r border-parchment-dark"}`}>
                    <div className={`text-3xl mb-6 ${i % 2 === 0 ? "text-ember" : "text-ember"}`}>
                      {s.icon}
                    </div>
                    <h2 className={`font-display text-3xl font-light mb-3 ${i % 2 === 0 ? "text-parchment" : "text-navy"}`}>
                      {s.name}
                    </h2>
                    <p className={`font-body text-sm font-light italic mb-8 ${i % 2 === 0 ? "text-parchment/60" : "text-slate-warm"}`}>
                      {s.tagline}
                    </p>
                    <div>
                      <div className={`section-label mb-3 ${i % 2 === 0 ? "text-ember/70" : "text-ember"}`}>
                        Best for
                      </div>
                      <p className={`font-body text-sm font-light leading-relaxed ${i % 2 === 0 ? "text-parchment/60" : "text-slate-warm"}`}>
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
                      <div className="section-label mb-5">Deliverables</div>
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
              Not sure which service fits?
            </h2>
            <p className="font-body text-base font-light text-slate-warm">
              Tell us about your situation and we&apos;ll work it out together.
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
