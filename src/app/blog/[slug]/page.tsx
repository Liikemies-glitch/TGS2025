import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getBlogPostBySlug, getAllBlogSlugs } from '@/lib/blog/utils'
import { BlogPostHeader } from '@/components/blog/BlogPostHeader'
import { BlogPostContent } from '@/components/blog/BlogPostContent'
import { BlogPostNavigation } from '@/components/blog/BlogPostNavigation'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} | TGS 2025 Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)

  if (!post || post.draft) {
    notFound()
  }

  return (
    <article className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <BlogPostHeader post={post} />
          
          <div className="mt-8">
            <BlogPostContent content={post.content} />
          </div>
          
          <div className="mt-12">
            <BlogPostNavigation currentSlug={slug} />
          </div>
        </div>
      </div>
    </article>
  )
} 