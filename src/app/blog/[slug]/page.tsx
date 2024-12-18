import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import ReactMarkdown from "react-markdown";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { CustomLink } from "@/components/custom-link";
import {
    CustomH1,
    CustomH2,
    CustomH3,
    CustomP,
    CustomUl,
    CustomOl,
    CustomLi,
    CustomBlockquote,
    CustomCode,
    CustomPre,
    CustomImg,
} from "@/components/custom-components";

export async function generateMetadata(props: {
    params: Promise<{ slug: string }>;
}) {
    const params = await props.params;
    const post = getPostBySlug(params.slug);

    return {
        title: post.meta.title,
        description: post.meta.excerpt,
    };
}

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPost(props: {
    params: Promise<{ slug: string }>;
}) {
    const params = await props.params;
    const post = getPostBySlug(params.slug);

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="max-w-4xl mx-auto px-4 py-12">
                {/* Breadcrumb */}
                <nav className="flex items-center space-x-2 text-sm mb-8">
                    <Link
                        href="/blog"
                        className="text-gray-600 hover:text-gray-900"
                    >
                        <ArrowLeft className="inline-block w-4 h-4 mr-1" />
                        Blog
                    </Link>
                    <span className="text-gray-400">/</span>
                    <span className="text-gray-600">{post.meta.category}</span>
                </nav>

                {/* Article header */}
                <article className="prose prose-lg max-w-none">
                    <h1 className="text-4xl font-bold mb-8">
                        {post.meta.title}
                    </h1>

                    {/* Authors */}
                    <div className="flex items-center mb-8">
                        <div className="flex -space-x-2">
                            {post.meta.authors.map(
                                (
                                    author: { name: string; avatar: string },
                                    index: number
                                ) => (
                                    <Image
                                        key={index}
                                        src={author.avatar}
                                        alt={author.name}
                                        width={40}
                                        height={40}
                                        className="rounded-full border-2 border-white"
                                    />
                                )
                            )}
                        </div>
                        <span className="ml-4 text-gray-600">
                            {post.meta.authors
                                .map((a: { name: string }) => a.name)
                                .join(", ")}
                        </span>
                    </div>

                    {/* Reading time and date */}
                    <div className="flex items-center space-x-6 text-sm text-gray-600 mb-8">
                        <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {post.meta.readingTime} min read
                        </div>
                        <div>{post.meta.date}</div>
                    </div>

                    {/* Article description */}
                    <p className="text-xl text-gray-600 mb-8">
                        {post.meta.excerpt}
                    </p>

                    {/* Article content */}
                    <ReactMarkdown
                        components={{
                            h1: CustomH1,
                            h2: CustomH2,
                            h3: CustomH3,
                            p: CustomP,
                            ul: CustomUl,
                            ol: CustomOl,
                            li: CustomLi,
                            blockquote: CustomBlockquote,
                            code: CustomCode,
                            pre: CustomPre,
                            img: CustomImg,
                            a: CustomLink,
                        }}
                    >
                        {post.content}
                    </ReactMarkdown>
                </article>
            </main>
            <Footer />
        </div>
    );
}
