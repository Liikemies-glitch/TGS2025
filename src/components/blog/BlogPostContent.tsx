import { MDXRemote } from 'next-mdx-remote/rsc'

interface BlogPostContentProps {
  content: string
}

import { ReactNode } from 'react'

interface MDXComponentProps {
  children?: ReactNode
  className?: string
  [key: string]: unknown
}

interface LinkProps extends MDXComponentProps {
  href?: string
}

interface ImageProps extends MDXComponentProps {
  src?: string
  alt?: string
}

// Custom components for MDX
const components = {
  pre: ({ children, ...props }: MDXComponentProps) => (
    <pre 
      className="overflow-x-auto rounded-lg bg-muted p-4 text-sm"
      {...props}
    >
      {children}
    </pre>
  ),
  code: ({ children, ...props }: MDXComponentProps) => (
    <code
      className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono"
      {...props}
    >
      {children}
    </code>
  ),
  h1: ({ children, ...props }: MDXComponentProps) => (
    <h1 className="text-3xl font-bold tracking-tight mb-6 mt-8" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: MDXComponentProps) => (
    <h2 className="text-2xl font-semibold tracking-tight mb-4 mt-8" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: MDXComponentProps) => (
    <h3 className="text-xl font-semibold tracking-tight mb-3 mt-6" {...props}>
      {children}
    </h3>
  ),
  h4: ({ children, ...props }: MDXComponentProps) => (
    <h4 className="text-lg font-semibold tracking-tight mb-2 mt-4" {...props}>
      {children}
    </h4>
  ),
  p: ({ children, ...props }: MDXComponentProps) => (
    <p className="leading-7 mb-4" {...props}>
      {children}
    </p>
  ),
  ul: ({ children, ...props }: MDXComponentProps) => (
    <ul className="list-disc list-inside mb-4 space-y-2" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: MDXComponentProps) => (
    <ol className="list-decimal list-inside mb-4 space-y-2" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }: MDXComponentProps) => (
    <li className="leading-6" {...props}>
      {children}
    </li>
  ),
  blockquote: ({ children, ...props }: MDXComponentProps) => (
    <blockquote 
      className="border-l-4 border-primary pl-4 italic my-6 text-muted-foreground"
      {...props}
    >
      {children}
    </blockquote>
  ),
  a: ({ children, href, ...props }: LinkProps) => (
    <a
      href={href}
      className="text-primary hover:text-primary/80 underline underline-offset-4"
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      {...props}
    >
      {children}
    </a>
  ),
  // Note: Using img instead of Next.js Image for MDX content flexibility
  // eslint-disable-next-line @next/next/no-img-element
  img: ({ src, alt, ...props }: ImageProps) => (
    <img
      src={src}
      alt={alt || ''}
      className="rounded-lg mx-auto my-6 max-w-full h-auto"
      {...props}
    />
  ),
  hr: ({ ...props }: MDXComponentProps) => (
    <hr className="my-8 border-border" {...props} />
  ),
  table: ({ children, ...props }: MDXComponentProps) => (
    <div className="my-6 overflow-x-auto">
      <table className="w-full border-collapse border border-border" {...props}>
        {children}
      </table>
    </div>
  ),
  th: ({ children, ...props }: MDXComponentProps) => (
    <th 
      className="border border-border bg-muted px-4 py-2 text-left font-semibold"
      {...props}
    >
      {children}
    </th>
  ),
  td: ({ children, ...props }: MDXComponentProps) => (
    <td className="border border-border px-4 py-2" {...props}>
      {children}
    </td>
  ),
}

export function BlogPostContent({ content }: BlogPostContentProps) {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <MDXRemote 
        source={content} 
        components={components}
      />
    </div>
  )
} 