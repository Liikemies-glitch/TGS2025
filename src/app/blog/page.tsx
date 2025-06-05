import { Suspense } from 'react'
import { Metadata } from 'next'
import { getAllBlogPosts, getAllCategories, getAllTags } from '@/lib/blog/utils'
import { BlogList } from '@/components/blog/BlogList'
import { BlogFilters } from '@/components/blog/BlogFilters'
import { BlogSearch } from '@/components/blog/BlogSearch'
import { BlogHeader } from '@/components/blog/BlogHeader'

export const metadata: Metadata = {
  title: 'Blog | TGS 2025',
  description: 'Insights, updates, and thought leadership from TGS 2025',
}

interface BlogPageProps {
  searchParams: Promise<{
    category?: string
    tag?: string
    search?: string
  }>
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams
  const allPosts = await getAllBlogPosts()
  const categories = await getAllCategories()
  const tags = await getAllTags()

  // Filter posts based on search params
  let filteredPosts = allPosts

  if (params.category) {
    filteredPosts = filteredPosts.filter(post => 
      post.category.toLowerCase() === params.category?.toLowerCase()
    )
  }

  if (params.tag) {
    filteredPosts = filteredPosts.filter(post => 
      post.tags.some(tag => tag.toLowerCase() === params.tag?.toLowerCase())
    )
  }

  if (params.search) {
    const searchTerm = params.search.toLowerCase()
    filteredPosts = filteredPosts.filter(post => 
      post.title.toLowerCase().includes(searchTerm) ||
      post.description.toLowerCase().includes(searchTerm) ||
      post.excerpt.toLowerCase().includes(searchTerm) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
      post.category.toLowerCase().includes(searchTerm)
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <BlogHeader />
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <Suspense fallback={<div>Loading search...</div>}>
              <BlogSearch />
            </Suspense>
            
            <Suspense fallback={<div>Loading filters...</div>}>
              <BlogFilters 
                categories={categories}
                tags={tags}
                activeCategory={params.category}
                activeTag={params.tag}
              />
            </Suspense>
          </div>

          {/* Main content */}
          <div className="lg:col-span-3">
            <Suspense fallback={<div>Loading posts...</div>}>
              <BlogList 
                posts={filteredPosts}
                searchTerm={params.search}
                activeCategory={params.category}
                activeTag={params.tag}
              />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
} 