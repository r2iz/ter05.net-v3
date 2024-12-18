import Header from "@/components/header";
import Footer from "@/components/footer";
import BlogCategories from "@/components/blog-categories";
import PostGrid from "@/components/post-grid";
import { getAllPosts, getAllCategories } from "@/lib/api";

export default function Blog() {
    const posts = getAllPosts();
    const categories = getAllCategories();

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <BlogCategories categories={categories} />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <PostGrid posts={posts} />
            </main>
            <Footer />
        </div>
    );
}
