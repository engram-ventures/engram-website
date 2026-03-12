import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Engram Ventures was founded by a technologist with 23+ years in enterprise systems, cloud infrastructure, and AI product development. Based in Sydney, Australia.",
};

const credentials = [
  "23+ years across enterprise technology, cloud architecture, and product leadership",
  "Founding CTO experience at AI-native fintech (Go Consumer / Trustly)",
  "AWS Architect with deep expertise across EKS, RDS, Cognito, Security Hub, and IAM",
  "ISO 27001, SOC 2, and OWASP Mobile Top 10 compliance practitioner",
  "Multi-agent AI architecture design and agentic SDLC implementation",
  "Experience spanning Sydney, San Francisco, and distributed international teams",
];

const values = [
  {
    name: "Embedded, not extractive",
    desc: "We don't fly in, deliver a deck, and fly out. We work alongside your team long enough to understand what's actually true about your situation.",
  },
  {
    name: "Honest over comfortable",
    desc: "If the architecture is weak, we'll say so. If the AI strategy won't work, we'll tell you before you invest. Clients hire us for our judgement — we protect that.",
  },
  {
    name: "Precise and plain",
    desc: "Technical depth doesn't require technical obscurity. We explain complex things clearly, to everyone in the room.",
  },
  {
    name: "Outcomes over outputs",
    desc: "Reports, roadmaps, and frameworks are only valuable if they change something. We stay accountable to results, not just deliverables.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-navy pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="section-label text-ember mb-6">Our story</div>
          <h1 className="font-display text-6xl md:text-7xl font-light text-parchment leading-tight max-w-xl">
            The thinking
            <br />
            <em className="font-light text-ember">behind the build.</em>
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-parchment">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display text-4xl font-light text-navy mb-8 leading-tight">
                Why Engram Ventures exists
              </h2>
              <div className="space-y-5 font-body text-base font-light text-slate-warm leading-relaxed">
                <p>
                  The name Engram comes from neuroscience — a memory trace, the
                  physical mark that experience leaves in the brain. It&apos;s a
                  useful metaphor for what we think good advisory work should
                  do: leave something lasting behind.
                </p>
                <p>
                  Engram Ventures was founded after two decades inside
                  enterprise technology — as an architect, as a CTO, and as
                  someone who has seen the same problems repeat themselves in
                  different companies and different sectors. The problems are
                  rarely technical. They&apos;re about leadership clarity,
                  organisational alignment, and the gap between what technology
                  can do and what an organisation is actually ready to absorb.
                </p>
                <p>
                  AI has made that gap wider and more expensive to ignore. The
                  organisations that close it well are the ones that treat AI as
                  a strategic question first, and a technology question second.
                </p>
                <p>
                  That&apos;s the work we do.
                </p>
              </div>
            </div>

            {/* Credentials */}
            <div>
              <div className="section-label mb-6">Credentials</div>
              <ul className="space-y-4">
                {credentials.map((c) => (
                  <li key={c} className="flex items-start gap-4">
                    <span className="text-ember mt-1 text-xs shrink-0">◆</span>
                    <span className="font-body text-sm font-light text-navy leading-relaxed">
                      {c}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-12 bg-white border border-parchment-dark rounded-xs p-8">
                <blockquote className="font-display text-2xl font-light text-navy italic leading-snug">
                  &ldquo;AI intelligence, embedded.&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-6 h-px bg-ember" />
                  <span className="font-body text-xs font-light text-slate-warm tracking-wide">
                    Engram Ventures
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <div className="section-label mb-4">How we work</div>
            <h2 className="section-heading">Our values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.name} className="card">
                <h3 className="font-display text-xl font-light text-navy mb-3">
                  {v.name}
                </h3>
                <p className="font-body text-sm font-light text-slate-warm leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-light text-parchment mb-6">
            Ready to work together?
          </h2>
          <p className="font-body text-base font-light text-parchment/60 max-w-md mx-auto mb-10 leading-relaxed">
            We&apos;d like to understand your situation before proposing anything.
          </p>
          <Link href="/contact" className="btn-primary">
            Start a conversation →
          </Link>
        </div>
      </section>
    </>
  );
}
