import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Post {
    slug: string;
    meta: {
        title: string;
        date: string;
        excerpt: string;
        authors: Array<{ name: string; avatar: string }>;
        category: string;
        readingTime: number;
    };
}

const postsDirectory = path.join(process.cwd(), "contents");

export function getPostBySlug(slug: string) {
    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return { slug: realSlug, meta: data as Post["meta"], content };
}

export function getAllPosts() {
    const slugs = fs.readdirSync(postsDirectory);
    const posts = slugs.map((slug) => getPostBySlug(slug));
    return posts.sort((post1, post2) =>
        post1.meta.date > post2.meta.date ? -1 : 1
    );
}

export function getPostsByCategory(category: string) {
    const allPosts = getAllPosts();
    return allPosts.filter(
        (post) => post.meta.category.toLowerCase() === category.toLowerCase()
    );
}

export function getAllCategories() {
    const posts = getAllPosts();
    const categories = new Set(posts.map((post) => post.meta.category));
    return Array.from(categories);
}
