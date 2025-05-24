import React from 'react'
import { ShimmerButton } from './shimmer-button'
import { cn } from '@/lib/utils'

interface AnnouncementButtonProps {
  children: React.ReactNode
  className?: string
  href?: string
}

export function AnnouncementButton({ 
  children, 
  className,
  href,
  ...props 
}: AnnouncementButtonProps) {
  const handleClick = () => {
    if (href) {
      window.open(href, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <ShimmerButton
      onClick={handleClick}
      shimmerColor="#3b82f6"
      shimmerSize="0.1em"
      shimmerDuration="2s"
      background="linear-gradient(110deg, #000103 45%, #1e2631 55%, #000103)"
      borderRadius="12px"
      className={cn(
        'text-xs font-medium tracking-wide text-zinc-200',
        'px-4 py-2 h-8',
        'border-zinc-700/50 hover:border-zinc-600/50',
        'transition-all duration-300',
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        <div className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
        <span>{children}</span>
        <svg 
          className="h-3 w-3 transition-transform group-hover:translate-x-0.5" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M9 5l7 7-7 7" 
          />
        </svg>
      </div>
    </ShimmerButton>
  )
} 