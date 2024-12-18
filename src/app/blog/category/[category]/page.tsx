import Header from "@/components/header";
import Footer from "@/components/footer";
import BlogCategories from "@/components/blog-categories";
import PostGrid from "@/components/post-grid";
import { getPostsByCategory, getAllCategories } from "@/lib/api";
import { notFound } from "next/navigation";

export default async function CategoryPage(props: {
    params: Promise<{ category: string }>;
}) {
    const params = await props.params;
    const decodedCategory = decodeURIComponent(params.category);
    const posts = getPostsByCategory(decodedCategory);
    const categories = getAllCategories();

    if (posts.length === 0) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <BlogCategories categories={categories} />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-3xl font-bold mb-8">
                    Category: {decodedCategory}
                </h1>
                <PostGrid posts={posts} />
            </main>
            <Footer />
        </div>
    );
}

export async function generateStaticParams() {
    const categories = getAllCategories();
    return categories.map((category) => ({
        category: encodeURIComponent(category.toLowerCase()),
    }));
}
