import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface Author {
    name: string;
    avatar: string;
}

interface Post {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    icon: string;
    authors: Author[];
    category: string;
}

const featuredPosts: Post[] = [
    {
        id: 1,
        title: "How Vercel adopted microfrontends",
        excerpt:
            "Vercel's main website, once a single large Next.js application, serves both our website visitors and logged-in dashboard.",
        date: "Oct 22",
        icon: "/placeholder.svg?height=64&width=64",
        authors: [
            { name: "Mark", avatar: "/placeholder.svg?height=32&width=32" },
            { name: "Dan", avatar: "/placeholder.svg?height=32&width=32" },
            { name: "Brian", avatar: "/placeholder.svg?height=32&width=32" },
        ],
        category: "Engineering",
    },
    {
        id: 2,
        title: "v0 plans for teams are here",
        excerpt:
            "Last October we introduced v0—a generative user interface system powered by natural language and AI.",
        date: "Oct 15",
        icon: "/placeholder.svg?height=64&width=64",
        authors: [
            { name: "Jared", avatar: "/placeholder.svg?height=32&width=32" },
            { name: "Jueun", avatar: "/placeholder.svg?height=32&width=32" },
        ],
        category: "Product",
    },
    {
        id: 3,
        title: "Vercel WAF upgrade brings persistent actions",
        excerpt:
            "At Vercel Ship, we introduced the new Web Application Firewall (WAF), an application-layer firewall.",
        date: "Oct 2",
        icon: "/placeholder.svg?height=64&width=64",
        authors: [
            { name: "Dan Fein", avatar: "/placeholder.svg?height=32&width=32" },
        ],
        category: "Security",
    },
];

export default function FeaturedPosts() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
                <Card
                    key={post.id}
                    className="border border-gray-200 hover:border-gray-300 transition-colors"
                >
                    <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                            <Image
                                src={post.icon}
                                alt=""
                                width={64}
                                height={64}
                                className="rounded-lg"
                            />
                            <span className="text-sm text-gray-600">
                                {post.date}
                            </span>
                        </div>
                        <h2 className="text-xl font-semibold mb-2 line-clamp-2">
                            <Link
                                href={`/blog/${post.id}`}
                                className="hover:text-blue-600 transition-colors"
                            >
                                {post.title}
                            </Link>
                        </h2>
                        <p className="text-gray-600 mb-4 line-clamp-2">
                            {post.excerpt}
                        </p>
                        <div className="flex items-center -space-x-2">
                            {post.authors.map((author, index) => (
                                <Image
                                    key={index}
                                    src={author.avatar}
                                    alt={author.name}
                                    width={32}
                                    height={32}
                                    className="rounded-full border-2 border-white"
                                />
                            ))}
                            <span className="ml-4 text-sm text-gray-600">
                                {post.authors.map((a) => a.name).join(", ")}
                            </span>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
