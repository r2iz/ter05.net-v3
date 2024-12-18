import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { type Post } from "@/lib/api";

interface PostGridProps {
    posts: Post[];
}

export default function PostGrid({ posts }: PostGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
                <Card
                    key={post.slug}
                    className="border border-gray-200 hover:border-gray-300 transition-colors"
                >
                    <CardContent className="p-6">
                        <div className="flex items-start mb-4">
                            <span className="text-sm text-gray-600">
                                {post.meta.date} • {post.meta.category}
                            </span>
                        </div>
                        <h2 className="text-xl font-semibold mb-2 line-clamp-2">
                            <Link
                                href={`/blog/${post.slug}`}
                                className="hover:text-blue-600 transition-colors"
                            >
                                {post.meta.title}
                            </Link>
                        </h2>
                        <p className="text-gray-600 mb-4 line-clamp-2">
                            {post.meta.excerpt}
                        </p>
                        <div className="flex items-center">
                            {post.meta.authors.map((author, index) => (
                                <Avatar key={index} className="w-8 h-8">
                                    <AvatarImage
                                        src={author.avatar}
                                        alt={author.name}
                                    />
                                    <AvatarFallback>
                                        {author.name
                                            .split(" ")
                                            .map((n) => n[0])
                                            .join("")}
                                    </AvatarFallback>
                                </Avatar>
                            ))}
                            <span className="ml-4 text-sm text-gray-600">
                                {post.meta.authors
                                    .map((a) => a.name)
                                    .join(", ")}
                            </span>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
