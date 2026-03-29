import Link from "next/link";
import { getAllPosts } from "@/lib/content";
import {
  ArrowRight,
  Cpu,
  Brain,
  Shield,
  Radio,
  Layers,
  Users,
  Sparkles,
  ChevronRight,
} from "lucide-react";

const pillars = [
  {
    icon: Radio,
    title: "Ambient Sensing",
    description:
      "24/7 multimodal capture through wearable hardware and software endpoints. Audio, health, location — without manual input.",
    gradient: "from-cyan-500/10 to-cyan-500/5",
    iconColor: "text-cyan-400",
  },
  {
    icon: Brain,
    title: "Context Intelligence",
    description:
      "Long-term semantic memory that accumulates over months and years. Your AI doesn't forget — it compounds understanding.",
    gradient: "from-violet-500/10 to-violet-500/5",
    iconColor: "text-violet-400",
  },
  {
    icon: Cpu,
    title: "Digital Twin",
    description:
      "An AI agent that thinks like you, knows what you know, and acts on your behalf. From 'AI for you' to 'AI is you.'",
    gradient: "from-emerald-500/10 to-emerald-500/5",
    iconColor: "text-emerald-400",
  },
  {
    icon: Layers,
    title: "Agent Economy",
    description:
      "An open marketplace where AI agents discover tasks, compete, and get paid. Skills replace apps. Protocols replace platforms.",
    gradient: "from-amber-500/10 to-amber-500/5",
    iconColor: "text-amber-400",
  },
];

const ecosystem = [
  { label: "Mobile Apps", detail: "iOS & Android" },
  { label: "Smart Ring", detail: "Health & Audio" },
  { label: "AI Watch", detail: "4G Always-On" },
  { label: "Web Platform", detail: "Full Experience" },
  { label: "Desktop App", detail: "Native" },
  { label: "CLI", detail: "Articulate (Rust)" },
  { label: "Agent Store", detail: "Skills & Tools" },
  { label: "ADK", detail: "Open Source" },
];

const stats = [
  { value: "62.8B+", label: "Tokens Processed" },
  { value: "1.35M+", label: "App Downloads" },
  { value: "130K+", label: "Registered Users" },
  { value: "10.5K+", label: "Hours of Voice" },
];

export default async function Home() {
  const posts = await getAllPosts();
  const latestPosts = posts.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="absolute inset-0 bg-dot-grid opacity-40" />

        <div className="container-width relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="badge badge-cyan mb-8 mx-auto">
              <Sparkles className="w-3.5 h-3.5" />
              Building the human–AI symbiosis layer
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 font-[family-name:var(--font-outfit)] leading-[1.1]">
              <span className="text-gradient-brand">Context is the</span>
              <br />
              <span className="text-white">new intelligence.</span>
            </h1>

            <p className="text-lg md:text-xl text-[var(--foreground-secondary)] mb-10 max-w-2xl mx-auto leading-relaxed">
              When foundation models become commodities, the deepest personal
              context becomes the only moat. We're building the platform that
              captures, structures, and activates it.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/blog" className="btn-primary">
                Read our thinking
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://paean.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Explore Paean AI
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative">
        <div className="divider-gradient" />
        <div className="container-width py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white font-[family-name:var(--font-outfit)] tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm text-[var(--foreground-muted)] mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="divider-gradient" />
      </section>

      {/* Four Pillars */}
      <section className="py-24">
        <div className="container-width">
          <div className="max-w-2xl mb-16">
            <p className="text-sm font-medium text-[var(--color-primary-400)] mb-3 tracking-wide uppercase">
              Platform Architecture
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-outfit)] tracking-tight mb-4">
              Four pillars of the personal AI stack
            </h2>
            <p className="text-[var(--foreground-secondary)] text-lg">
              Each layer feeds the next. Hardware captures context. Context
              enables intelligence. Intelligence powers your Digital Twin. The
              Twin participates in the agent economy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="glass-panel-hover p-7 flex gap-5"
              >
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center`}
                >
                  <pillar.icon className={`w-6 h-6 ${pillar.iconColor}`} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[var(--foreground-secondary)] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="py-24 bg-[var(--background-elevated)]">
        <div className="container-width">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-[var(--color-primary-400)] mb-3 tracking-wide uppercase">
              Ecosystem
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-outfit)] tracking-tight mb-4">
              One AI brain, every touchpoint
            </h2>
            <p className="text-[var(--foreground-secondary)] max-w-2xl mx-auto text-lg">
              All endpoints share a unified account, context layer, and credit
              system. Hardware captures. Software reasons. Agents act.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {ecosystem.map((item) => (
              <div
                key={item.label}
                className="glass-panel p-5 text-center hover:border-[var(--border-hover)] transition-colors"
              >
                <div className="text-sm font-medium text-white">
                  {item.label}
                </div>
                <div className="text-xs text-[var(--foreground-muted)] mt-1">
                  {item.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="py-24">
        <div className="container-width">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-sm font-medium text-[var(--color-primary-400)] mb-3 tracking-wide uppercase">
                Blog
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-outfit)] tracking-tight">
                Latest thinking
              </h2>
            </div>
            <Link
              href="/blog"
              className="hidden md:flex items-center gap-1.5 text-sm text-[var(--foreground-secondary)] hover:text-white transition-colors"
            >
              View all posts
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {latestPosts.map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={`group glass-panel-hover p-7 flex flex-col ${
                  i === 0 ? "md:col-span-2" : ""
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <time className="text-xs text-[var(--foreground-muted)]">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                  {post.featured && (
                    <span className="badge badge-cyan text-[10px]">
                      Featured
                    </span>
                  )}
                </div>

                <h3
                  className={`font-semibold text-white mb-3 group-hover:text-[var(--color-primary-400)] transition-colors ${
                    i === 0 ? "text-2xl" : "text-lg"
                  }`}
                >
                  {post.title}
                </h3>

                <p className="text-sm text-[var(--foreground-secondary)] line-clamp-2 mb-4 flex-1">
                  {post.description}
                </p>

                <span className="flex items-center gap-1 text-sm text-[var(--color-primary-400)] opacity-0 group-hover:opacity-100 transition-opacity">
                  Read article
                  <ChevronRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>

          <div className="md:hidden mt-8 text-center">
            <Link
              href="/blog"
              className="text-sm text-[var(--color-primary-400)] hover:text-[var(--color-primary-300)] transition-colors inline-flex items-center gap-1"
            >
              View all posts
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Comparisons */}
      <section className="py-24 bg-[var(--background-elevated)]">
        <div className="container-width">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-[var(--color-primary-400)] mb-3 tracking-wide uppercase">
              Comparisons
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-outfit)] tracking-tight mb-4">
              How Paean compares
            </h2>
            <p className="text-[var(--foreground-secondary)] max-w-xl mx-auto">
              In-depth feature comparisons against leading AI and productivity platforms.
            </p>
          </div>

          <div className="flex justify-center">
            <Link
              href="/vs"
              className="btn-secondary"
            >
              View all comparisons
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow-accent" />
        <div className="container-width relative">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-[family-name:var(--font-outfit)] tracking-tight">
              The future of personal AI
              <br />
              <span className="text-gradient-accent">starts with context.</span>
            </h2>
            <p className="text-[var(--foreground-secondary)] mb-10 text-lg">
              Join over 130,000 users building their persistent AI memory.
              Available on every platform.
            </p>
            <a
              href="https://paean.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-8 py-4"
            >
              Get started with Paean
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
