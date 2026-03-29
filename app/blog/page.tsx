import { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/content";
import { ArrowRight, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog - Paean AI",
  description:
    "Technical insights on ambient AI, Digital Twins, agent economies, and the infrastructure behind context-aware personal intelligence.",
  openGraph: {
    title: "Blog - Paean AI",
    description:
      "Technical insights on ambient AI, Digital Twins, and the agent economy.",
  },
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  const featuredPost = posts.find((p) => p.featured) || posts[0];
  const remainingPosts = posts.filter((p) => p.slug !== featuredPost?.slug);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="pt-20 pb-12 relative">
        <div className="absolute inset-0 bg-radial-glow opacity-50" />
        <div className="container-width relative">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[var(--color-primary-400)] mb-3 tracking-wide uppercase">
              Blog
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-[family-name:var(--font-outfit)] tracking-tight">
              Ideas & Engineering
            </h1>
            <p className="text-lg text-[var(--foreground-secondary)] leading-relaxed">
              How we think about ambient AI, Digital Twins, agent infrastructure,
              and the systems that turn personal context into compounding
              intelligence.
            </p>
          </div>
        </div>
      </section>

      <div className="divider-gradient" />

      <div className="container-width py-16">
        {/* Featured Post */}
        {featuredPost && (
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="group block glass-panel-hover p-8 md:p-10 mb-12"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="badge badge-cyan text-[10px]">Featured</span>
              <time className="text-xs text-[var(--foreground-muted)]">
                {new Date(featuredPost.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-[var(--color-primary-400)] transition-colors font-[family-name:var(--font-outfit)] tracking-tight max-w-3xl">
              {featuredPost.title}
            </h2>

            <p className="text-[var(--foreground-secondary)] mb-6 max-w-2xl leading-relaxed">
              {featuredPost.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {featuredPost.tags.slice(0, 4).map((tag) => (
                <span key={tag} className="badge">
                  {tag}
                </span>
              ))}
            </div>

            <span className="inline-flex items-center gap-1 text-sm text-[var(--color-primary-400)] group-hover:gap-2 transition-all font-medium">
              Read article
              <ChevronRight className="w-4 h-4" />
            </span>
          </Link>
        )}

        {/* Posts Grid */}
        {remainingPosts.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {remainingPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group glass-panel-hover p-6 flex flex-col"
              >
                <div className="flex items-center gap-3 text-xs text-[var(--foreground-muted)] mb-4">
                  <time>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                </div>

                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-[var(--color-primary-400)] transition-colors flex-1 leading-snug">
                  {post.title}
                </h3>

                <p className="text-sm text-[var(--foreground-secondary)] mb-4 line-clamp-2">
                  {post.description}
                </p>

                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="badge text-[10px]">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <span className="flex items-center gap-1 text-sm text-[var(--color-primary-400)] opacity-0 group-hover:opacity-100 transition-opacity mt-auto">
                  Read more
                  <ChevronRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        )}

        {posts.length === 0 && (
          <div className="text-center py-24">
            <p className="text-[var(--foreground-secondary)] mb-4">
              No posts yet. Check back soon.
            </p>
            <Link
              href="/"
              className="text-[var(--color-primary-400)] hover:text-[var(--color-primary-300)] transition-colors text-sm"
            >
              Return to Home
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
