"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Rss } from "lucide-react";

interface BlogCategoriesProps {
    categories: string[];
}

export default function BlogCategories({ categories }: BlogCategoriesProps) {
    const pathname = usePathname();

    return (
        <div className="border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between py-4">
                    <nav className="flex space-x-4 overflow-x-auto">
                        <Link
                            href="/blog"
                            className={`text-sm whitespace-nowrap px-3 py-2 rounded-full transition-colors ${
                                pathname === "/blog"
                                    ? ""
                                    : "text-gray-400 hover:text-gray-900 hover:bg-gray-100"
                            }`}
                        >
                            All Posts
                        </Link>
                        {categories.map((category) => (
                            <Link
                                key={category}
                                href={`/blog/category/${encodeURIComponent(
                                    category.toLowerCase()
                                )}`}
                                className={`text-sm whitespace-nowrap px-3 py-2 rounded-full transition-colors ${
                                    pathname ===
                                    `/blog/category/${encodeURIComponent(
                                        category.toLowerCase()
                                    )}`
                                        ? ""
                                        : "text-gray-400 hover:text-gray-900 hover:bg-gray-100"
                                }`}
                            >
                                {category}
                            </Link>
                        ))}
                    </nav>
                    <div className="flex items-center space-x-4">
                        <Link
                            href="/feed.xml"
                            className="text-gray-600 hover:text-gray-900"
                        >
                            <Rss className="h-5 w-5" />
                            <span className="sr-only">RSS Feed</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
