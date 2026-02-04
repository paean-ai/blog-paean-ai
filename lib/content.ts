import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface PostMeta {
    slug: string;
    title: string;
    description: string;
    date: string;
    author: string;
    tags: string[];
    featured?: boolean;
}

export interface Post extends PostMeta {
    content: string;
}

const postsDirectory = path.join(process.cwd(), "content/posts");

export async function getAllPosts(): Promise<PostMeta[]> {
    // Check if directory exists
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const posts = fileNames
        .filter((fileName) => fileName.endsWith(".md"))
        .map((fileName) => {
            const slug = fileName.replace(/\.md$/, "");
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, "utf8");
            const { data } = matter(fileContents);

            return {
                slug,
                title: data.title || slug,
                description: data.description || "",
                date: data.date || new Date().toISOString().split("T")[0],
                author: data.author || "Paean Team",
                tags: data.tags || [],
                featured: data.featured || false,
            } as PostMeta;
        });

    // Sort by date descending
    return posts.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
    const fullPath = path.join(postsDirectory, `${slug}.md`);

    if (!fs.existsSync(fullPath)) {
        return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
        slug,
        title: data.title || slug,
        description: data.description || "",
        date: data.date || new Date().toISOString().split("T")[0],
        author: data.author || "Paean Team",
        tags: data.tags || [],
        featured: data.featured || false,
        content,
    };
}

export async function getFeaturedPosts(): Promise<PostMeta[]> {
    const posts = await getAllPosts();
    return posts.filter((post) => post.featured).slice(0, 3);
}
