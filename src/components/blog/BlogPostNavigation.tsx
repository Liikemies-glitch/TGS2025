import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { getAllBlogPosts } from '@/lib/blog/utils'

interface BlogPostNavigationProps {
  currentSlug: string
}

export async function BlogPostNavigation({ currentSlug }: BlogPostNavigationProps) {
  const allPosts = await getAllBlogPosts()
  const currentIndex = allPosts.findIndex(post => post.slug === currentSlug)
  
  const previousPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null

  if (!previousPost && !nextPost) {
    return null
  }

  return (
    <nav className="space-y-4">
      <div className="border-t pt-8">
        <h2 className="text-lg font-semibold mb-4">Continue Reading</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {previousPost && (
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <ChevronLeft className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-sm text-muted-foreground mb-1">Previous</p>
                    <Link 
                      href={`/blog/${previousPost.slug}`}
                      className="font-medium hover:text-primary transition-colors line-clamp-2"
                    >
                      {previousPost.title}
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {nextPost && (
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-muted-foreground mb-1 text-right">Next</p>
                    <Link 
                      href={`/blog/${nextPost.slug}`}
                      className="font-medium hover:text-primary transition-colors line-clamp-2 block text-right"
                    >
                      {nextPost.title}
                    </Link>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="mt-6 text-center">
          <Button variant="outline" asChild>
            <Link href="/blog">
              View All Posts
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  )
} 