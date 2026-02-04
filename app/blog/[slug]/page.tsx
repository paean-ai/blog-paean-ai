import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
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
        return {
            title: "Post Not Found",
        };
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

    return (
        <>
            <ArticleSchema
                title={post.title}
                description={post.description}
                datePublished={post.date}
                author={post.author}
                url={`https://blog.paean.ai/blog/${post.slug}`}
            />

            <article className="min-h-screen py-16">
                <div className="container-width">
                    {/* Back Link */}
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        All Posts
                    </Link>

                    {/* Header */}
                    <header className="max-w-3xl mb-12">
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                            <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {new Date(post.date).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </span>
                            <span className="flex items-center gap-1">
                                <User className="w-4 h-4" />
                                {post.author}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-[family-name:var(--font-outfit)]">
                            {post.title}
                        </h1>

                        <p className="text-xl text-gray-400 mb-6">{post.description}</p>

                        {post.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                                {post.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-sm px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </header>

                    {/* Content */}
                    <div className="max-w-3xl prose">
                        <MDXRemote source={post.content} />
                    </div>

                    {/* Footer */}
                    <footer className="max-w-3xl mt-16 pt-8 border-t border-white/10">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                            <div>
                                <p className="text-gray-400 text-sm">
                                    Written by{" "}
                                    <span className="text-white">{post.author}</span>
                                </p>
                            </div>
                            <Link
                                href="/blog"
                                className="text-cyan-400 hover:text-cyan-300 text-sm flex items-center gap-1"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Back to all posts
                            </Link>
                        </div>
                    </footer>
                </div>
            </article>
        </>
    );
}
