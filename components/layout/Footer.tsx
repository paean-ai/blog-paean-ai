import Link from "next/link";

const footerLinks = {
  product: [
    { href: "https://paean.ai", label: "Paean AI", external: true },
    { href: "https://paean.ai/products/ring", label: "Smart Ring", external: true },
    { href: "https://0.works", label: "0.works", external: true },
    { href: "https://a8e.ai", label: "A8E Platform", external: true },
  ],
  resources: [
    { href: "/blog", label: "Blog" },
    { href: "/docs", label: "Documentation" },
    { href: "/vs", label: "Comparisons" },
  ],
  developers: [
    { href: "https://www.npmjs.com/package/@paean-ai/adk", label: "ADK (npm)", external: true },
    { href: "https://www.npmjs.com/package/paeanclaw", label: "PaeanClaw", external: true },
    { href: "https://github.com/nicepkg", label: "GitHub", external: true },
  ],
  company: [
    { href: "https://paean.ai/about", label: "About", external: true },
    { href: "https://paean.ai/privacy", label: "Privacy", external: true },
    { href: "https://paean.ai/terms", label: "Terms", external: true },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="container-width py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center">
                <span className="text-black font-bold text-xs">P</span>
              </div>
              <span className="font-semibold text-sm text-white">
                Paean AI
              </span>
            </Link>
            <p className="text-[13px] text-[var(--foreground-muted)] leading-relaxed max-w-[200px]">
              Context-aware personal AI. Hardware + Software + Agents.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-[11px] font-semibold text-[var(--foreground-muted)] uppercase tracking-wider mb-4">
                {category}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[13px] text-[var(--foreground-secondary)] hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-[13px] text-[var(--foreground-secondary)] hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="divider-gradient mt-12 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-[var(--foreground-muted)]">
            &copy; {new Date().getFullYear()} A8E Group. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a
              href="https://twitter.com/paean_ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] text-[var(--foreground-muted)] hover:text-white transition-colors"
            >
              X / Twitter
            </a>
            <a
              href="https://github.com/nicepkg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] text-[var(--foreground-muted)] hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="mailto:hello@paean.ai"
              className="text-[12px] text-[var(--foreground-muted)] hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
