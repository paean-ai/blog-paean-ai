import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { getAllPosts, getPostBySlug } from "@/lib/content";
import { ArticleSchema } from "@/components/seo/JsonLd";
import { MDXRemote } from "next-mdx-remote/rsc";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = await getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === post.slug);
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const prevPost =
    currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  return (
    <>
      <ArticleSchema
        title={post.title}
        description={post.description}
        datePublished={post.date}
        author={post.author}
        url={`https://blog.paean.ai/blog/${post.slug}`}
      />

      <article className="min-h-screen">
        {/* Header */}
        <header className="pt-16 pb-12 relative">
          <div className="absolute inset-0 bg-radial-glow opacity-30" />
          <div className="container-width relative">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-[var(--foreground-muted)] hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              All posts
            </Link>

            <div className="container-narrow">
              <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--foreground-muted)] mb-6">
                <time>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <span className="w-1 h-1 rounded-full bg-[var(--foreground-muted)]" />
                <span>{post.author}</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 font-[family-name:var(--font-outfit)] tracking-tight leading-[1.15]">
                {post.title}
              </h1>

              <p className="text-lg text-[var(--foreground-secondary)] mb-8 leading-relaxed">
                {post.description}
              </p>

              {post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="badge">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </header>

        <div className="divider-gradient" />

        {/* Content */}
        <div className="container-width py-16">
          <div className="container-narrow prose">
            <MDXRemote source={post.content} />
          </div>
        </div>

        <div className="divider-gradient" />

        {/* Navigation */}
        <footer className="container-width py-12">
          <div className="container-narrow">
            <div className="grid md:grid-cols-2 gap-4">
              {prevPost && (
                <Link
                  href={`/blog/${prevPost.slug}`}
                  className="group glass-panel-hover p-5"
                >
                  <div className="text-xs text-[var(--foreground-muted)] mb-2">
                    Older
                  </div>
                  <div className="text-sm font-medium text-white group-hover:text-[var(--color-primary-400)] transition-colors line-clamp-2">
                    {prevPost.title}
                  </div>
                </Link>
              )}
              {nextPost && (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="group glass-panel-hover p-5 md:text-right md:col-start-2"
                >
                  <div className="text-xs text-[var(--foreground-muted)] mb-2">
                    Newer
                  </div>
                  <div className="text-sm font-medium text-white group-hover:text-[var(--color-primary-400)] transition-colors line-clamp-2">
                    {nextPost.title}
                  </div>
                </Link>
              )}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/blog"
                className="text-sm text-[var(--foreground-muted)] hover:text-white transition-colors inline-flex items-center gap-1"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to all posts
              </Link>
            </div>
          </div>
        </footer>
      </article>
    </>
  );
}
