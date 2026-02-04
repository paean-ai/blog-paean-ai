import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/content";

const baseUrl = "https://blog.paean.ai";

const comparisons = [
    "linear",
    "notion",
    "reclaim-ai",
    "cursor",
    "claude-code",
    "chatgpt-gemini",
    "openclaw",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/vs`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/docs`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
    ];

    // Comparison pages
    const comparisonPages: MetadataRoute.Sitemap = comparisons.map((slug) => ({
        url: `${baseUrl}/vs/${slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.8,
    }));

    // Blog posts
    const posts = await getAllPosts();
    const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    return [...staticPages, ...comparisonPages, ...blogPages];
}
