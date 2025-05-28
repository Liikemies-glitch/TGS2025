"use client"
import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const BackgroundBeams = React.memo(
  ({ className }: { className?: string }) => {
    const paths = [
      "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875",
      "M-352 -221C-352 -221 -284 184 180 311C644 438 712 843 712 843",
      "M-324 -253C-324 -253 -256 152 208 279C672 406 740 811 740 811",
      "M-296 -285C-296 -285 -228 120 236 247C700 374 768 779 768 779",
      "M-268 -317C-268 -317 -200 88 264 215C728 342 796 747 796 747",
      "M-240 -349C-240 -349 -172 56 292 183C756 310 824 715 824 715",
      "M-212 -381C-212 -381 -144 24 320 151C784 278 852 683 852 683",
      "M-184 -413C-184 -413 -116 -8 348 119C812 246 880 651 880 651",
      "M-156 -445C-156 -445 -88 -40 376 87C840 214 908 619 908 619",
      "M-128 -477C-128 -477 -60 -72 404 55C868 182 936 587 936 587",
    ]
    
    return (
      <div
        className={cn(
          "absolute h-full w-full inset-0 flex items-center justify-center",
          className,
        )}
      >
        <svg
          className="z-0 h-full w-full pointer-events-none absolute"
          width="100%"
          height="100%"
          viewBox="0 0 696 316"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875M-352 -221C-352 -221 -284 184 180 311C644 438 712 843 712 843M-324 -253C-324 -253 -256 152 208 279C672 406 740 811 740 811M-296 -285C-296 -285 -228 120 236 247C700 374 768 779 768 779M-268 -317C-268 -317 -200 88 264 215C728 342 796 747 796 747M-240 -349C-240 -349 -172 56 292 183C756 310 824 715 824 715M-212 -381C-212 -381 -144 24 320 151C784 278 852 683 852 683M-184 -413C-184 -413 -116 -8 348 119C812 246 880 651 880 651M-156 -445C-156 -445 -88 -40 376 87C840 214 908 619 908 619M-128 -477C-128 -477 -60 -72 404 55C868 182 936 587 936 587"
            stroke="hsl(var(--border))"
            strokeOpacity="0.1"
            strokeWidth="0.5"
          />

          {paths.slice(0, 3).map((path, index) => (
            <motion.path
              key={`path-` + index}
              d={path}
              stroke={`url(#linearGradient-${index})`}
              strokeOpacity="0.6"
              strokeWidth="0.8"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 8 + index * 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
                delay: index * 3,
              }}
            />
          ))}
          
          <defs>
            {paths.slice(0, 3).map((path, index) => (
              <linearGradient
                id={`linearGradient-${index}`}
                key={`gradient-${index}`}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="hsl(var(--brand-blue-dark))" stopOpacity="0" />
                <stop offset="20%" stopColor="hsl(var(--brand-blue-dark))" stopOpacity="0.8" />
                <stop offset="50%" stopColor="hsl(var(--brand-blue-dark))" stopOpacity="1" />
                <stop offset="80%" stopColor="hsl(var(--brand-blue))" stopOpacity="0.8" />
                <stop offset="100%" stopColor="hsl(var(--brand-blue))" stopOpacity="0" />
              </linearGradient>
            ))}
          </defs>
        </svg>
      </div>
    )
  },
)

BackgroundBeams.displayName = "BackgroundBeams" 