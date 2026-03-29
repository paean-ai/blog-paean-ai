"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ExternalLink } from "lucide-react";
import clsx from "clsx";

const navLinks = [
  { href: "/blog", label: "Blog" },
  { href: "/vs", label: "Comparisons" },
  { href: "/docs", label: "Docs" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 glass-nav">
      <nav className="container-width">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center">
              <span className="text-black font-bold text-xs">P</span>
            </div>
            <span className="font-semibold text-[15px] text-white tracking-tight">
              Paean AI
              <span className="text-[var(--foreground-muted)] font-normal ml-1.5">
                Blog
              </span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "px-3 py-1.5 text-[13px] rounded-md transition-colors",
                  pathname.startsWith(link.href)
                    ? "text-white bg-white/[0.06]"
                    : "text-[var(--foreground-secondary)] hover:text-white hover:bg-white/[0.04]"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="w-px h-4 bg-[var(--border)] mx-2" />
            <a
              href="https://paean.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-1.5 text-[13px] text-[var(--color-primary-400)] hover:text-[var(--color-primary-300)] transition-colors"
            >
              Get Paean
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[var(--foreground-secondary)] hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-[var(--border)]">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={clsx(
                    "px-3 py-2 text-sm rounded-md transition-colors",
                    pathname.startsWith(link.href)
                      ? "text-white bg-white/[0.06]"
                      : "text-[var(--foreground-secondary)] hover:text-white"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://paean.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-3 py-2 text-sm text-[var(--color-primary-400)] hover:text-[var(--color-primary-300)] transition-colors"
              >
                Get Paean
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
