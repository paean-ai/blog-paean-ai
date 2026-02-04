import { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/content";
import { Calendar, ArrowRight, Tag } from "lucide-react";

export const metadata: Metadata = {
    title: "Blog - Paean AI Technical Insights",
    description:
        "Technical articles on external memory management, 24h life context, AI agents, and privacy-first architecture from the Paean team.",
    openGraph: {
        title: "Blog - Paean AI Technical Insights",
        description:
            "Technical articles on external memory management, 24h life context, and AI agents.",
    },
};

export default async function BlogPage() {
    const posts = await getAllPosts();

    return (
        <div className="min-h-screen py-16">
            <div className="container-width">
                {/* Header */}
                <div className="max-w-3xl mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-outfit)]">
                        <span className="text-gradient-brand">Technical Insights</span>
                    </h1>
                    <p className="text-lg text-gray-400">
                        Explore the technology behind Paean's 24h life context capture,
                        external memory management, and privacy-first AI architecture.
                    </p>
                </div>

                {/* Posts Grid */}
                {posts.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {posts.map((post) => (
                            <Link
                                key={post.slug}
                                href={`/blog/${post.slug}`}
                                className="group flex flex-col p-6 rounded-xl glass-panel hover:bg-white/5 transition-colors"
                            >
                                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                    <span className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4" />
                                        {new Date(post.date).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "short",
                                            day: "numeric",
                                        })}
                                    </span>
                                    {post.featured && (
                                        <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs">
                                            Featured
                                        </span>
                                    )}
                                </div>

                                <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors flex-1">
                                    {post.title}
                                </h2>

                                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                    {post.description}
                                </p>

                                {post.tags.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {post.tags.slice(0, 3).map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-400"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                <span className="flex items-center gap-1 text-sm text-cyan-400 group-hover:gap-2 transition-all">
                                    Read more
                                    <ArrowRight className="w-4 h-4" />
                                </span>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <p className="text-gray-400 mb-4">
                            No posts yet. Check back soon for technical insights!
                        </p>
                        <Link
                            href="/"
                            className="text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                            Return to Home
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
