'use client'
import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'

interface Problem {
  title: string
  description: string
  imageSrc: string
}

const problems: Problem[] = [
  {
    title: "Design systems are broken or non-existent.",
    description: "Teams reuse inconsistent components, copy-paste Figma files, and ship disjointed UI. It slows down devs and confuses users.",
    imageSrc: "/images/illustrations/section-1-problem.png"
  },
  {
    title: "We connect the dots.",
    description: "Our design ops process transforms chaos into clarity, aligning business goals and UI delivery.",
    imageSrc: "/images/illustrations/section-2-solution.png"
  }
]

export function ProblemSection() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024) // lg breakpoint
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    // Only handle scroll for desktop
    if (isMobile) return

    const handleScroll = () => {
      const sectionElement = sectionRef.current
      if (!sectionElement) return

      const rect = sectionElement.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const sectionHeight = sectionElement.offsetHeight
      
      // Calculate scroll progress within the section (0 to 1)
      const progress = Math.max(0, Math.min(1, -rect.top / (sectionHeight - windowHeight)))
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMobile])

  // Mobile layout - simple sequential problems
  if (isMobile) {
    return (
      <section ref={sectionRef} className="bg-background py-16">
        <div className="mx-auto max-w-2xl px-6">
          <div className="space-y-16">
            {problems.map((problem, index) => (
              <div key={index} className="space-y-8">
                {/* Problem Text */}
                <div className="text-left space-y-4">
                  <p className="text-xs text-brand-blue dark:text-brand-blue-light font-medium uppercase tracking-wide">
                    {index === 0 ? "The Problem" : "The Solution"}
                  </p>
                  <h3 className="text-2xl font-medium">
                    {problem.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </div>

                {/* Problem Illustration */}
                <div className="relative w-full max-w-md mx-auto">
                                     {/* Background image only behind illustrations on mobile */}
                   <div 
                     className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 scale-150"
                     style={{
                       backgroundImage: "url('/images/illustrations/sticky-scroll-bg.png')"
                     }}
                   ></div>
                                     <div className={`relative w-full opacity-90 ${index === 0 ? 'h-56' : 'h-80'}`}>
                    <Image
                      src={problem.imageSrc}
                      alt={problem.title}
                      width={680}
                      height={680}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  // Desktop layout - sticky scroll with smooth content swapping
  const sectionHeight = 200 // 200vh for smooth scrolling
  
  return (
    <section 
      ref={sectionRef}
      className="bg-background" 
      style={{ 
        height: `${sectionHeight}vh`
      }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-6xl w-full px-6">
            {/* Two Column Layout */}
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              {/* Left Column - Text Content */}
              <div className="relative">
                {problems.map((problem, index) => {
                  // Calculate opacity and position for smooth transitions
                  let opacity = 0
                  let translateY = 0
                  
                  if (index === 0) {
                    // First content: visible at start, fades out
                    if (scrollProgress <= 0.5) {
                      opacity = 1 - (scrollProgress / 0.5)
                      translateY = -scrollProgress * 20 // Subtle upward movement
                    }
                  } else {
                    // Second content: fades in from bottom
                    if (scrollProgress >= 0.5) {
                      const progress = (scrollProgress - 0.5) / 0.5
                      opacity = progress
                      translateY = (1 - progress) * 20 // Moves up as it fades in
                    }
                  }
                  
                  return (
                    <div
                      key={index}
                      className="absolute inset-0 flex flex-col justify-center transition-all duration-500 ease-out"
                      style={{
                        opacity,
                        transform: `translateY(${translateY}px)`
                      }}
                    >
                      <div className="space-y-4">
                        <p className="text-xs text-brand-blue dark:text-brand-blue-light font-medium uppercase tracking-wide">
                          {index === 0 ? "The Problem" : "The Solution"}
                        </p>
                        <h3 className="text-3xl font-medium md:text-4xl lg:text-3xl leading-tight">
                          {problem.title}
                        </h3>
                        <p className="text-lg text-muted-foreground md:text-xl leading-relaxed max-w-2xl">
                          {problem.description}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Right Column - Image Content */}
              <div className="relative">
                {/* Background image only behind the right column illustrations */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 scale-150"
                  style={{
                    backgroundImage: "url('/images/illustrations/sticky-scroll-bg.png')"
                  }}
                ></div>
                
                <div className="relative w-full max-w-lg mx-auto h-[600px] flex items-center justify-center">
                  {problems.map((problem, index) => {
                    // Calculate opacity and scale for smooth image transitions
                    let opacity = 0
                    let scale = 0.9
                    
                    if (index === 0) {
                      // First image: visible at start, fades out with scale
                      if (scrollProgress <= 0.5) {
                        opacity = 1 - (scrollProgress / 0.5)
                        scale = 1 - (scrollProgress / 0.5) * 0.1 // Slight scale down
                      }
                    } else {
                      // Second image: fades in with scale
                      if (scrollProgress >= 0.5) {
                        const progress = (scrollProgress - 0.5) / 0.5
                        opacity = progress
                        scale = 0.9 + (progress * 0.1) // Scale up as it appears
                      }
                    }
                    
                    return (
                      <div
                        key={index}
                        className="absolute inset-0 flex items-center justify-center transition-all duration-700 ease-out"
                        style={{
                          opacity,
                          transform: `scale(${scale})`
                        }}
                      >
                        <div className={`w-full h-full ${index === 0 ? 'max-w-56' : 'max-w-md'}`}>
                          <Image
                            src={problem.imageSrc}
                            alt={problem.title}
                            width={680}
                            height={680}
                            className="w-full h-full object-contain"
                            priority={index === 0}
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 