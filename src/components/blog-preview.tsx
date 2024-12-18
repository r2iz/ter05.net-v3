import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllPosts } from "@/lib/api";

export default function BlogPreview() {
    const allPosts = getAllPosts();
    const blogPosts = allPosts.slice(0, 3);
    return (
        <section id="blog-preview" className="py-16">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
                Latest Blog Posts
            </h2>
            <div className="space-y-6">
                {blogPosts.map((post, index) => (
                    <div
                        key={index}
                        className="border border-gray-200 rounded-lg p-6 transition-shadow"
                    >
                        <h3 className="text-xl font-semibold mb-2">
                            <Link
                                href={`/blog/${post.slug}`}
                                className="text-blue-600 hover:text-blue-800 transition-colors"
                            >
                                {post.meta.title}
                            </Link>
                        </h3>
                        <p className="text-sm text-gray-600 mb-3">
                            {post.meta.date}
                        </p>
                        <p className="text-gray-700 mb-4">
                            {post.meta.excerpt}
                        </p>
                        <Link
                            href={`/blog/${post.slug}`}
                            className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center"
                        >
                            Read more <ArrowRight size={16} className="ml-2" />
                        </Link>
                    </div>
                ))}
            </div>
            <div className="mt-8">
                <Link
                    href="/blog"
                    className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center text-lg font-medium"
                >
                    View all posts <ArrowRight size={20} className="ml-2" />
                </Link>
            </div>
        </section>
    );
}
