import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-parchment/60">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="font-display text-2xl font-light tracking-[0.14em] text-parchment mb-1">
              ENGRAM
            </div>
            <div className="font-body text-[9px] font-light tracking-[0.32em] text-ember mb-5">
              VENTURES
            </div>
            <p className="font-body text-sm font-light leading-relaxed">
              Strategy that sticks.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="section-label text-ember/70 mb-5">Navigation</div>
            <nav className="flex flex-col gap-3">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-body text-sm font-light text-parchment/60 hover:text-parchment transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <div className="section-label text-ember/70 mb-5">Get in touch</div>
            <p className="font-body text-sm font-light leading-relaxed mb-4">
              Sydney, Australia
            </p>
            <a
              href="mailto:hello@engram.ventures"
              className="font-body text-sm font-light text-parchment hover:text-ember transition-colors"
            >
              hello@engram.ventures
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="font-body text-xs font-light">
            © {year} Engram Ventures Pty Ltd. All rights reserved.
          </p>
          <p className="font-body text-xs font-light">
            ABN 65 696 046 045
          </p>
        </div>
      </div>
    </footer>
  );
}
