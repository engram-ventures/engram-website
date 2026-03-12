import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Engram Ventures — AI Strategy & Technical Advisory",
  description:
    "Engram Ventures partners with enterprise technology leaders and investors to build lasting AI capability through embedded strategy, rigorous due diligence, and engineering foundations that hold.",
  alternates: { canonical: "/" },
};

const services = [
  {
    icon: "◈",
    name: "AI Strategy & Roadmaps",
    desc: "Translating AI potential into executable plans. From board-level framing to team-level implementation.",
    href: "/services#ai-strategy",
  },
  {
    icon: "◎",
    name: "Technical Due Diligence",
    desc: "For PE/VC firms evaluating technology assets. Architecture reviews, team assessments, risk scoring.",
    href: "/services#due-diligence",
  },
  {
    icon: "◇",
    name: "DevSecOps & Cloud",
    desc: "Security-first engineering foundations. AWS architecture, compliance frameworks, and agentic SDLC design.",
    href: "/services#devsecops",
  },
];

const stats = [
  { value: "23+", label: "Years in tech leadership" },
  { value: "3", label: "Core service lines" },
  { value: "AU", label: "Sydney-based, globally connected" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy min-h-screen flex items-center overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-ember blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-sage blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-32">
          <div className="max-w-3xl">
            <div className="section-label text-ember mb-8">
              AI Strategy · Due Diligence · DevSecOps
            </div>
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-light text-parchment leading-[0.95] mb-8">
              Strategy
              <br />
              <em className="text-ember font-light">that sticks.</em>
            </h1>
            <p className="font-body text-lg md:text-xl font-light text-parchment/70 leading-relaxed mb-12 max-w-xl">
              Engram Ventures partners with enterprise technology leaders and
              investors to build lasting AI capability — through embedded
              strategy, rigorous due diligence, and engineering foundations that
              hold.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">
                Start a conversation
                <span className="text-xs opacity-60">→</span>
              </Link>
              <Link href="/services" className="btn-outline border-parchment/30 text-parchment hover:bg-parchment hover:text-navy">
                Our services
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-24 grid grid-cols-3 gap-8 max-w-xl border-t border-white/10 pt-12">
            {stats.map((s) => (
              <div key={s.value}>
                <div className="font-display text-3xl font-light text-parchment mb-1">
                  {s.value}
                </div>
                <div className="font-body text-xs font-light text-parchment/50 leading-snug">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-28 bg-parchment">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <div className="section-label mb-4">What we do</div>
            <h2 className="section-heading max-w-lg">
              Three ways we work with you
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link
                key={s.name}
                href={s.href}
                className="card group hover:border-ember/40 hover:shadow-xs transition-all duration-200"
              >
                <div className="text-2xl text-ember mb-6">{s.icon}</div>
                <h3 className="font-display text-2xl font-light text-navy mb-4 group-hover:text-ember transition-colors">
                  {s.name}
                </h3>
                <p className="font-body text-sm font-light text-slate-warm leading-relaxed">
                  {s.desc}
                </p>
                <div className="mt-8 font-body text-xs text-ember opacity-0 group-hover:opacity-100 transition-opacity tracking-wide">
                  Learn more →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label mb-4">About</div>
              <h2 className="section-heading mb-6">
                The thinking behind the build
              </h2>
              <p className="font-body text-base font-light text-slate-warm leading-relaxed mb-6">
                Engram Ventures was founded by a technologist who has spent 23
                years inside enterprise systems, scaleup product teams, and
                cloud infrastructure — and who believes the gap between AI
                potential and AI execution is a leadership problem, not a
                technology one.
              </p>
              <p className="font-body text-base font-light text-slate-warm leading-relaxed mb-8">
                We work best when we&apos;re in the room — embedded with your
                team, accountable to your outcomes, and honest about what
                matters.
              </p>
              <Link href="/about" className="btn-outline">
                Our story
              </Link>
            </div>

            {/* Visual accent */}
            <div className="hidden md:block">
              <div className="relative">
                <div className="bg-parchment rounded-xs p-12 border border-parchment-dark">
                  <blockquote className="font-display text-3xl font-light text-navy italic leading-snug">
                    &ldquo;The gap between AI potential and AI execution is a
                    leadership problem, not a technology one.&rdquo;
                  </blockquote>
                  <div className="mt-8 flex items-center gap-3">
                    <div className="w-8 h-px bg-ember" />
                    <span className="font-body text-xs font-light text-slate-warm tracking-wide">
                      Engram Ventures
                    </span>
                  </div>
                </div>
                <div className="absolute -bottom-3 -right-3 w-full h-full border border-ember/20 rounded-xs -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-navy">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="section-label text-ember mb-6">Ready to start?</div>
          <h2 className="font-display text-5xl md:text-6xl font-light text-parchment mb-8">
            Let&apos;s work together
          </h2>
          <p className="font-body text-base font-light text-parchment/60 max-w-lg mx-auto mb-12 leading-relaxed">
            Whether you&apos;re evaluating an acquisition, building your AI
            roadmap, or hardening your engineering foundations — we&apos;d like
            to hear about it.
          </p>
          <Link href="/contact" className="btn-primary">
            Get in touch
            <span className="text-xs opacity-60">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
