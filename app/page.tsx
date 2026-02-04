import Link from "next/link";
import { ArrowRight, Zap, Brain, Shield, Clock } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "24h Life Context",
    description:
      "Continuous multimodal capture through audio, health metrics, and location for complete life understanding.",
  },
  {
    icon: Brain,
    title: "External Memory",
    description:
      "Long-term semantic memory that remembers everything, so you don't have to.",
  },
  {
    icon: Shield,
    title: "Privacy-First",
    description:
      "Local-first processing with your data under your control. No cloud dependency.",
  },
  {
    icon: Zap,
    title: "Proactive Agent",
    description:
      "TDRC worker system that executes tasks autonomously based on your context.",
  },
];

const latestPosts = [
  {
    slug: "external-memory-management",
    title: "Why External Memory Management Matters",
    excerpt:
      "How Paean's 24h life context transforms productivity and decision-making.",
    date: "2026-02-04",
  },
  {
    slug: "24h-life-agent",
    title: "Building a 24h Life Agent",
    excerpt:
      "The architecture behind an always-on AI that truly understands your life.",
    date: "2026-02-03",
  },
  {
    slug: "privacy-first-ai",
    title: "Privacy-First AI Architecture",
    excerpt:
      "Why local-first processing is the future of personal AI assistants.",
    date: "2026-02-02",
  },
];

const comparisons = [
  { competitor: "Linear", slug: "linear", focus: "R&D Efficiency" },
  { competitor: "Notion", slug: "notion", focus: "Note-taking" },
  { competitor: "Reclaim.ai", slug: "reclaim-ai", focus: "Scheduling" },
  { competitor: "Cursor", slug: "cursor", focus: "AI Coding" },
  { competitor: "Claude Code", slug: "claude-code", focus: "Terminal Agent" },
  { competitor: "ChatGPT", slug: "chatgpt-gemini", focus: "General AI" },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="container-width relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-premium text-sm text-cyan-400 mb-6">
              <Zap className="w-4 h-4" />
              External Memory Management · 24h Life Agent
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-[family-name:var(--font-outfit)]">
              <span className="text-gradient-brand">Think Less.</span>
              <br />
              <span className="text-white">Execute More.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Technical insights and comparisons from the Paean team. Learn how
              external memory management and 24h life context are transforming
              personal productivity.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-medium rounded-lg transition-colors"
              >
                Read the Blog
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/vs"
                className="inline-flex items-center gap-2 px-6 py-3 glass-premium hover:bg-white/10 text-white font-medium rounded-lg transition-colors"
              >
                Compare Paean
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 border-t border-white/5">
        <div className="container-width">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 font-[family-name:var(--font-outfit)]">
            What Makes Paean Different
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-xl glass-panel hover:bg-white/5 transition-colors"
              >
                <feature.icon className="w-10 h-10 text-cyan-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="py-16 border-t border-white/5">
        <div className="container-width">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-outfit)]">
              Latest Posts
            </h2>
            <Link
              href="/blog"
              className="text-cyan-400 hover:text-cyan-300 text-sm flex items-center gap-1"
            >
              View all
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group p-6 rounded-xl glass-panel hover:bg-white/5 transition-colors"
              >
                <time className="text-sm text-gray-500">{post.date}</time>
                <h3 className="text-lg font-semibold text-white mt-2 mb-3 group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-400">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Comparisons */}
      <section className="py-16 border-t border-white/5">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 font-[family-name:var(--font-outfit)]">
              Paean vs. The Competition
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              See how Paean's unique approach to 24h life context and external
              memory compares to popular productivity and AI tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {comparisons.map((comp) => (
              <Link
                key={comp.slug}
                href={`/vs/${comp.slug}`}
                className="group flex items-center justify-between p-4 rounded-xl glass-panel hover:bg-white/5 transition-colors"
              >
                <div>
                  <h3 className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                    Paean vs {comp.competitor}
                  </h3>
                  <p className="text-sm text-gray-500">{comp.focus}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-white/5">
        <div className="container-width">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-[family-name:var(--font-outfit)]">
              Ready to Transform Your Productivity?
            </h2>
            <p className="text-gray-400 mb-8">
              Join thousands who are using Paean to capture their complete life
              context and execute more with less cognitive load.
            </p>
            <a
              href="https://paean.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 text-black font-semibold rounded-lg transition-all"
            >
              Get Started with Paean
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
