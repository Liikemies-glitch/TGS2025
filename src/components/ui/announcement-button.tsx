import React from 'react'
import { ShimmerButton } from './shimmer-button'
import { cn } from '@/lib/utils'
import { Avatar, AvatarGroup, AvatarImage } from './avatar'
import { teamMembers } from '@/components/blocks/team-section'
import { TooltipProvider, TooltipRoot, TooltipTrigger, TooltipContent } from './tooltip'

interface AnnouncementButtonProps {
  children: React.ReactNode
  className?: string
  href?: string
  color?: string
  speed?: string
}

export function AnnouncementButton({ 
  children, 
  className,
  href,
  color = "#60a5fa",
  speed = "4s",
  ...props 
}: AnnouncementButtonProps) {
  const handleClick = () => {
    if (href) {
      window.open(href, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <TooltipProvider>
      <div className="relative inline-block py-[1px] overflow-hidden rounded-xl group/button">
        <div
          className={cn(
            "absolute w-[300%] h-[50%] bottom-[-11px] right-[-250%] rounded-full z-0",
            "animate-star-movement-bottom opacity-100",
            "group-hover/button:opacity-100"
          )}
          style={{
            background: `radial-gradient(circle, ${color}, transparent 10%)`,
            animationDuration: speed,
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
          }}
        />
        <div
          className={cn(
            "absolute w-[300%] h-[50%] top-[-10px] left-[-250%] rounded-full z-0",
            "animate-star-movement-top opacity-100",
            "group-hover/button:opacity-100"
          )}
          style={{
            background: `radial-gradient(circle, ${color}, transparent 10%)`,
            animationDuration: speed,
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
          }}
        />
        <ShimmerButton
          onClick={handleClick}
          shimmerColor={color}
          shimmerSize="0.1em"
          shimmerDuration="2s"
          background="linear-gradient(110deg, #000103 45%, #1e2631 55%, #000103)"
          borderRadius="12px"
          className={cn(
            'text-xs font-medium tracking-wide text-zinc-200',
            'px-4 py-3 h-12',
            'border-zinc-700/50 hover:border-zinc-600/50',
            'transition-all duration-300',
            'relative z-10',
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-3">
            <AvatarGroup className="mr-1">
              {teamMembers.map((member) => (
                <TooltipRoot key={member.name}>
                  <TooltipTrigger asChild>
                    <Avatar 
                      className={cn(
                        "border-2 border-background transition-all duration-200",
                        "hover:scale-105 hover:border-blue-500/50 hover:z-10"
                      )}
                    >
                      <AvatarImage src={member.src} alt={member.name} />
                    </Avatar>
                  </TooltipTrigger>
                  <TooltipContent 
                    side="top" 
                    align="center"
                    className="bg-zinc-900/95 border border-zinc-800"
                    sideOffset={8}
                    avoidCollisions
                  >
                    <div className="flex flex-col gap-0.5">
                      <span className="text-zinc-100">{member.name}</span>
                      <span className="text-zinc-400 text-[10px]">{member.designation}</span>
                    </div>
                  </TooltipContent>
                </TooltipRoot>
              ))}
            </AvatarGroup>
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
      </div>
    </TooltipProvider>
  )
} 