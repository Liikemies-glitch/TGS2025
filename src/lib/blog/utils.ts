import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import type { BlogPost, BlogMetadata, BlogListItem } from './types'

const BLOG_CONTENT_PATH = path.join(process.cwd(), 'src/content/blog')

/**
 * Get all blog post slugs
 */
export function getAllBlogSlugs(): string[] {
  if (!fs.existsSync(BLOG_CONTENT_PATH)) {
    return []
  }
  
  const files = fs.readdirSync(BLOG_CONTENT_PATH)
  return files
    .filter(file => file.endsWith('.md') || file.endsWith('.mdx'))
    .map(file => file.replace(/\.(md|mdx)$/, ''))
}

/**
 * Get blog post by slug
 */
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const mdxPath = path.join(BLOG_CONTENT_PATH, `${slug}.mdx`)
    const mdPath = path.join(BLOG_CONTENT_PATH, `${slug}.md`)
    
    let fullPath: string
    if (fs.existsSync(mdxPath)) {
      fullPath = mdxPath
    } else if (fs.existsSync(mdPath)) {
      fullPath = mdPath
    } else {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    const metadata = data as BlogMetadata
    const readTime = readingTime(content)
    
    // Generate excerpt from content (first 160 characters)
    const excerpt = content
      .replace(/^#\s+.*$/gm, '') // Remove headers
      .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1') // Remove markdown links
      .replace(/[#*`]/g, '') // Remove markdown syntax
      .trim()
      .substring(0, 160)
      .replace(/\s+/g, ' ')
      .trim() + (content.length > 160 ? '...' : '')

    return {
      slug,
      title: metadata.title,
      description: metadata.description,
      date: metadata.date,
      author: metadata.author,
      category: metadata.category,
      tags: metadata.tags || [],
      featured: metadata.featured || false,
      draft: metadata.draft || false,
      readingTime: readTime.text,
      content,
      excerpt
    }
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error)
    return null
  }
}

/**
 * Get all blog posts for listing
 */
export async function getAllBlogPosts(includesDrafts = false): Promise<BlogListItem[]> {
  const slugs = getAllBlogSlugs()
  const posts: BlogListItem[] = []

  for (const slug of slugs) {
    const post = await getBlogPostBySlug(slug)
    if (post && (includesDrafts || !post.draft)) {
      posts.push({
        slug: post.slug,
        title: post.title,
        description: post.description,
        date: post.date,
        author: post.author,
        category: post.category,
        tags: post.tags,
        featured: post.featured,
        readingTime: post.readingTime,
        excerpt: post.excerpt
      })
    }
  }

  // Sort by date (newest first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

/**
 * Get blog posts by category
 */
export async function getBlogPostsByCategory(category: string): Promise<BlogListItem[]> {
  const allPosts = await getAllBlogPosts()
  return allPosts.filter(post => 
    post.category.toLowerCase() === category.toLowerCase()
  )
}

/**
 * Get blog posts by tag
 */
export async function getBlogPostsByTag(tag: string): Promise<BlogListItem[]> {
  const allPosts = await getAllBlogPosts()
  return allPosts.filter(post => 
    post.tags.some(postTag => postTag.toLowerCase() === tag.toLowerCase())
  )
}

/**
 * Get featured blog posts
 */
export async function getFeaturedBlogPosts(): Promise<BlogListItem[]> {
  const allPosts = await getAllBlogPosts()
  return allPosts.filter(post => post.featured)
}

/**
 * Get recent blog posts
 */
export async function getRecentBlogPosts(limit = 5): Promise<BlogListItem[]> {
  const allPosts = await getAllBlogPosts()
  return allPosts.slice(0, limit)
}

/**
 * Get all unique categories
 */
export async function getAllCategories(): Promise<string[]> {
  const allPosts = await getAllBlogPosts()
  const categories = new Set(allPosts.map(post => post.category))
  return Array.from(categories).sort()
}

/**
 * Get all unique tags
 */
export async function getAllTags(): Promise<string[]> {
  const allPosts = await getAllBlogPosts()
  const tags = new Set(allPosts.flatMap(post => post.tags))
  return Array.from(tags).sort()
}

/**
 * Search blog posts
 */
export async function searchBlogPosts(query: string): Promise<BlogListItem[]> {
  const allPosts = await getAllBlogPosts()
  const searchTerm = query.toLowerCase()
  
  return allPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm) ||
    post.description.toLowerCase().includes(searchTerm) ||
    post.excerpt.toLowerCase().includes(searchTerm) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
    post.category.toLowerCase().includes(searchTerm)
  )
} 