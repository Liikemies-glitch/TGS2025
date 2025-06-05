'use client'

import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { X } from 'lucide-react'

interface BlogFiltersProps {
  categories: string[]
  tags: string[]
  activeCategory?: string
  activeTag?: string
}

export function BlogFilters({ categories, tags, activeCategory, activeTag }: BlogFiltersProps) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const updateFilter = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams)
    
    if (value) {
      params.set(key, value)
    } else {
      params.delete(key)
    }
    
    router.replace(`${pathname}?${params.toString()}`)
  }

  const clearAllFilters = () => {
    const params = new URLSearchParams(searchParams)
    params.delete('category')
    params.delete('tag')
    router.replace(`${pathname}?${params.toString()}`)
  }

  const hasActiveFilters = activeCategory || activeTag

  return (
    <div className="space-y-6">
      {/* Active Filters */}
      {hasActiveFilters && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm">Active Filters</CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={clearAllFilters}
                className="h-auto p-0 text-xs"
              >
                Clear all
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-2">
            {activeCategory && (
              <Badge variant="secondary" className="mr-2">
                Category: {activeCategory}
                <button
                  onClick={() => updateFilter('category', null)}
                  className="ml-1 hover:bg-destructive/20 rounded-full p-0.5"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
            {activeTag && (
              <Badge variant="secondary" className="mr-2">
                Tag: {activeTag}
                <button
                  onClick={() => updateFilter('tag', null)}
                  className="ml-1 hover:bg-destructive/20 rounded-full p-0.5"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
          </CardContent>
        </Card>
      )}

      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => updateFilter('category', category)}
                className={`block w-full text-left text-sm px-2 py-1 rounded hover:bg-accent transition-colors ${
                  activeCategory === category ? 'bg-accent font-medium' : ''
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Tags */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Tags</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant={activeTag === tag ? "default" : "outline"}
                className="cursor-pointer hover:bg-accent"
                onClick={() => updateFilter('tag', tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 