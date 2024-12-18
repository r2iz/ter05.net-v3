import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import BlogPreview from "@/components/blog-preview";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
    return (
        <div className="min-h-screen bg-white text-gray-900">
            <Header />
            <main className="max-w-5xl mx-auto px-4 py-8">
                <Hero />
                <About />
                <Skills />
                <BlogPreview />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
