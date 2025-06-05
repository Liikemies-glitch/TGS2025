import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CalendarDays, Clock, User } from 'lucide-react'
import type { BlogListItem } from '@/lib/blog/types'

interface BlogListProps {
  posts: BlogListItem[]
  searchTerm?: string
  activeCategory?: string
  activeTag?: string
}

export function BlogList({ posts, searchTerm, activeCategory, activeTag }: BlogListProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-semibold mb-2">No posts found</h3>
        <p className="text-muted-foreground">
          {searchTerm || activeCategory || activeTag
            ? 'Try adjusting your search criteria or filters.'
            : 'No blog posts are available at the moment.'}
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">
          {searchTerm ? `Search results for "${searchTerm}"` : 'Latest Posts'}
        </h2>
        <span className="text-sm text-muted-foreground">
          {posts.length} post{posts.length !== 1 ? 's' : ''}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}

function BlogCard({ post }: { post: BlogListItem }) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-200">
      <CardHeader>
        <div className="flex flex-wrap gap-2 mb-2">
          <Badge variant="outline">{post.category}</Badge>
          {post.featured && (
            <Badge variant="default">Featured</Badge>
          )}
        </div>
        
        <CardTitle className="line-clamp-2">
          <Link 
            href={`/blog/${post.slug}`}
            className="hover:text-primary transition-colors"
          >
            {post.title}
          </Link>
        </CardTitle>
        
        <CardDescription className="line-clamp-3">
          {post.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground line-clamp-3">
            {post.excerpt}
          </p>
          
          <div className="flex flex-wrap gap-1">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <CalendarDays className="h-3 w-3" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
            
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{post.readingTime}</span>
            </div>
            
            <div className="flex items-center gap-1">
              <User className="h-3 w-3" />
              <span>{post.author}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 