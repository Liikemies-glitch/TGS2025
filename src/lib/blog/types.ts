export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
  category: string
  tags: string[]
  featured: boolean
  draft: boolean
  readingTime: string
  content: string
  excerpt: string
}

export interface BlogMetadata {
  title: string
  description: string
  date: string
  author: string
  category: string
  tags: string[]
  featured?: boolean
  draft?: boolean
}

export interface BlogListItem {
  slug: string
  title: string
  description: string
  date: string
  author: string
  category: string
  tags: string[]
  featured: boolean
  readingTime: string
  excerpt: string
} 