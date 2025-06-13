'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  width?: number
  height?: number
}

export const Logo: React.FC<LogoProps> = ({ 
  className, 
  width = 84, 
  height = 21 
}) => {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  
  // Prevent hydration mismatch by only applying theme logic after mount
  useEffect(() => {
    setMounted(true)
  }, [])
  
  // Default to dark theme to match ThemeProvider defaultTheme="dark"
  // Light mode: use dark/black logo (visible on light background)
  // Dark mode: use light/white logo (visible on dark background)
  const isDark = mounted ? resolvedTheme === 'dark' : true
  const logoSrc = isDark ? '/TGS logo white.webp' : '/TGS logo black.webp'
  const logoAlt = 'The Good Side Logo'

  return (
    <div className={cn("flex items-center", className)}>
      <Image
        src={logoSrc}
        alt={logoAlt}
        width={width}
        height={height}
        className="object-contain transition-all duration-300"
        priority
        style={{
          filter: 'none',
          mixBlendMode: 'normal'
        }}
      />
    </div>
  )
} 