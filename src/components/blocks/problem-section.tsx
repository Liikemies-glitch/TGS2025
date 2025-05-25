'use client'
import React, { useEffect, useState, useRef } from 'react'
import { 
  PoorUIIllustration, 
  FragmentedProcessIllustration, 
  UnclearPositioningIllustration 
} from '../illustrations'

interface Problem {
  title: string
  description: string
  illustration: React.ReactNode
}

const problems: Problem[] = [
  {
    title: "Poor UI/UX Design",
    description: "Your product's UI/UX lacks professional design, hurting your growth potential.",
    illustration: <PoorUIIllustration />
  },
  {
    title: "Fragmented Design Process",
    description: "Your web and content design is fragmented across multiple partners, resulting in inconsistent quality and low conversions.",
    illustration: <FragmentedProcessIllustration />
  },
  {
    title: "Unclear Positioning",
    description: "Poor positioning leads to unclear targets, weak messaging, and scattered product development.",
    illustration: <UnclearPositioningIllustration />
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
                  <p className="text-xs text-blue-600 dark:text-blue-400 font-medium uppercase tracking-wide">
                    The Problem
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
                  <div className="w-full h-80 opacity-90">
                    {problem.illustration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  // Desktop layout with reasonable height and smooth scrolling
  // Use a more reasonable height that provides smooth scrolling without excessive white space
  const sectionHeight = 200 // 200vh provides smooth scrolling for 3 problems
  
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
              {/* Left Column - Current Problem */}
              <div className="relative h-screen flex items-center">
                {/* Section indicator - positioned next to text content */}
                <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 z-10">
                  <div className="flex flex-col gap-1.5">
                    {problems.map((_, index) => {
                      const currentSection = Math.floor(scrollProgress * problems.length)
                      const isActive = currentSection === index
                      
                      return (
                        <div
                          key={index}
                          className="relative"
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                              isActive 
                                ? 'bg-blue-600' 
                                : 'bg-muted-foreground/40 hover:bg-muted-foreground/60'
                            }`}
                          />
                          {isActive && (
                            <>
                              <div className="absolute inset-0 w-1.5 h-1.5 rounded-full bg-blue-500/40 blur-[2px] scale-150" />
                              <div className="absolute inset-0 w-1.5 h-1.5 rounded-full bg-white/20 blur-[3px] scale-200" />
                            </>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
                
                {problems.map((problem, index) => {
                  let translateY = 0
                  const opacity = 1 // Always visible, no fade effect
                  
                  if (index === 0) {
                    // First problem: starts centered and visible, then scrolls up
                    const problemProgress = scrollProgress / 0.33 // 0 to 1 over first third
                    // Use same movement formula as other problems: from center (0) to top (-50vh)
                    translateY = -problemProgress * 50 // 0vh to -50vh (same speed as others)
                  } else {
                    // Subsequent problems: scroll from bottom to center to top
                    const problemStart = (index - 0.5) / problems.length // Start earlier to overlap
                    const problemEnd = (index + 0.5) / problems.length
                    const problemProgress = Math.max(0, Math.min(1, (scrollProgress - problemStart) / (problemEnd - problemStart)))
                    
                    // Text scrolls more slowly - from bottom (50vh) to top (-50vh) of viewport
                    translateY = (1 - problemProgress * 2) * 50 // 50vh to -50vh
                  }
                  
                  return (
                    <div
                      key={index}
                      className="absolute inset-0 flex items-center"
                      style={{
                        transform: `translateY(${translateY}vh)`,
                        opacity: opacity
                      }}
                    >
                      <div className="space-y-3">
                        <p className="text-xs text-blue-600 dark:text-blue-400 font-medium uppercase tracking-wide">
                          The Problem
                        </p>
                        <h3 className="text-2xl font-medium md:text-3xl lg:text-2xl">
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

              {/* Right Column - Sticky Illustration */}
              <div className="relative">
                <div className="relative w-full max-w-lg mx-auto h-[500px] flex items-center justify-center">
                  {problems.map((problem, index) => {
                    let opacity = 0
                    let scale = 0.95
                    
                    if (index === 0) {
                      // First illustration: starts visible, then fades out
                      if (scrollProgress <= 0.33) {
                        opacity = Math.max(0, 1 - (scrollProgress / 0.33) * 1.5) // Fade out gradually
                        scale = 1 - (scrollProgress / 0.33) * 0.05 // Slight scale down
                      }
                    } else {
                      // Subsequent illustrations: show when corresponding text is centered
                      const problemStart = (index - 0.5) / problems.length
                      const problemEnd = (index + 0.5) / problems.length
                      const problemProgress = Math.max(0, Math.min(1, (scrollProgress - problemStart) / (problemEnd - problemStart)))
                      
                      // Show illustration when its corresponding text is in the center area
                      if (problemProgress >= 0.3 && problemProgress <= 0.7) {
                        // Full opacity when text is centered
                        opacity = 1
                        scale = 1
                      } else if (problemProgress >= 0.1 && problemProgress < 0.3) {
                        // Fade in as text approaches center
                        const fadeProgress = (problemProgress - 0.1) / 0.2
                        opacity = fadeProgress
                        scale = 0.95 + (fadeProgress * 0.05)
                      } else if (problemProgress > 0.7 && problemProgress <= 0.9) {
                        // Fade out as text leaves center
                        const fadeProgress = (0.9 - problemProgress) / 0.2
                        opacity = fadeProgress
                        scale = 0.95 + (fadeProgress * 0.05)
                      }
                    }
                    
                    return (
                      <div
                        key={index}
                        className="absolute inset-0 flex items-center justify-center"
                        style={{
                          opacity: opacity * 0.9,
                          transform: `scale(${scale})`,
                          transition: 'opacity 0.4s ease-out, transform 0.4s ease-out'
                        }}
                      >
                        <div className="w-full h-full max-w-md">
                          {problem.illustration}
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