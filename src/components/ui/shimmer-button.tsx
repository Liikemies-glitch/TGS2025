import React from 'react'
import { cn } from '@/lib/utils'

export interface ShimmerButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string
  shimmerSize?: string
  borderRadius?: string
  shimmerDuration?: string
  background?: string
  className?: string
  children?: React.ReactNode
}

const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  (
    {
      shimmerColor = '#ffffff',
      shimmerSize = '0.05em',
      borderRadius = '100px',
      shimmerDuration = '3s',
      background = 'rgba(0, 0, 0, 1)',
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        style={
          {
            '--shimmer-color': shimmerColor,
            '--shimmer-size': shimmerSize,
            '--border-radius': borderRadius,
            '--shimmer-duration': shimmerDuration,
            '--background': background,
            '--speed': shimmerDuration,
          } as React.CSSProperties
        }
        className={cn(
          'group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white [background:var(--background)] [border-radius:var(--border-radius)]',
          'transform-gpu transition-transform duration-300 ease-in-out active:translate-y-[1px]',
          className
        )}
        ref={ref}
        {...props}
      >
        {/* spark container */}
        <div className="absolute inset-0 overflow-visible [container-type:size]">
          {/* spark */}
          <div className="absolute inset-0 h-[100cqh] animate-spin-around [aspect-ratio:1] [border-radius:0] [mask:none]">
            {/* spark before */}
            <div className="absolute inset-[-100%] w-auto rotate-0 [background:conic-gradient(from_calc(270deg-(var(--shimmer-size)*0.5)),transparent_0,var(--shimmer-color)_var(--shimmer-size),transparent_calc(var(--shimmer-size)*1.5))] [translate:0_0]" />
          </div>
        </div>

        {/* backdrop */}
        <div className="absolute inset-[1px] rounded-[calc(var(--border-radius)-1px)] bg-neutral-950 dark:bg-neutral-800" />

        {/* content */}
        <div className="z-10">{children}</div>

        {/* Highlight */}
        <div className="absolute inset-0 rounded-[var(--border-radius)] opacity-0 transition-opacity duration-500 [background:radial-gradient(800px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.06),transparent_40%)] group-hover:opacity-100" />
      </button>
    )
  }
)

ShimmerButton.displayName = 'ShimmerButton'

export { ShimmerButton } 