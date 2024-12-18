import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

interface BlogPostProps {
  title: string
  date: string
  content: string
}

export default function BlogPost({ title, date, content }: BlogPostProps) {
  return (
    <article className="max-w-3xl mx-auto">
      <Link href="/blog" className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center mb-6">
        <ArrowLeft size={20} className="mr-2" /> Back to all posts
      </Link>
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-gray-600 mb-8">{date}</p>
      <div className="prose prose-lg" dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  )
}

