'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

interface Problem {
  title: string
  description: string
  image: string
}

const problems: Problem[] = [
  {
    title: "Poor UI/UX Design",
    description: "Your product's UI/UX lacks professional design, hurting your growth potential.",
    image: "/images/problem-1.svg"
  },
  {
    title: "Fragmented Design Process",
    description: "Your web design and content design is fragmented across multiple partners, resulting in inconsistent quality and low conversions.",
    image: "/images/problem-2.svg"
  },
  {
    title: "Unclear Positioning",
    description: "Poor positioning leads to unclear targets, weak messaging, and scattered product development.",
    image: "/images/problem-3.svg"
  }
]

export function ProblemSection() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const sectionElement = document.getElementById('problem-section')
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
  }, [])

  return (
    <section id="problem-section" className="bg-background" style={{ height: `${problems.length * 150}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Section indicator - fixed on left side */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 z-10">
          <div className="flex flex-col gap-2">
            {problems.map((_, index) => {
              const currentSection = Math.floor(scrollProgress * problems.length)
              const isActive = currentSection === index
              
              return (
                <div
                  key={index}
                  className="relative"
                >
                  <div
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      isActive 
                        ? 'bg-blue-600' 
                        : 'bg-muted-foreground/40 hover:bg-muted-foreground/60'
                    }`}
                  />
                  {isActive && (
                    <>
                      <div className="absolute inset-0 w-2 h-2 rounded-full bg-blue-500/40 blur-[2px] scale-150" />
                      <div className="absolute inset-0 w-2 h-2 rounded-full bg-white/20 blur-[3px] scale-200" />
                    </>
                  )}
                </div>
              )
            })}
          </div>
        </div>
        
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-6xl w-full px-6">
            {/* Two Column Layout */}
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              {/* Left Column - Current Problem */}
              <div className="relative h-screen flex items-center">
                {problems.map((problem, index) => {
                  // Calculate position for each problem based on scroll progress
                  const problemProgress = (scrollProgress * problems.length) - index
                  const translateY = -problemProgress * 100 // Convert to percentage
                  
                  return (
                    <div
                      key={index}
                      className="absolute inset-0 flex items-center"
                      style={{
                        transform: `translateY(${translateY}vh)`
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

              {/* Right Column - Sticky Image */}
              <div className="relative">
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-muted">
                  {problems.map((problem, index) => {
                    // Calculate opacity based on how close this problem is to being active
                    const problemProgress = (scrollProgress * problems.length) - index
                    const opacity = Math.max(0, Math.min(1, 1 - Math.abs(problemProgress)))
                    
                    return (
                      <div
                        key={index}
                        className="absolute inset-0"
                        style={{
                          opacity,
                          transform: `scale(${0.95 + (opacity * 0.05)})`
                        }}
                      >
                        <Image
                          src={problem.image}
                          alt={`Illustration for ${problem.title}`}
                          fill
                          className="object-contain p-8"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    )
                  })}
                  
                  {/* Fallback placeholder when images don't load */}
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                    <div className="text-center">
                      <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-muted-foreground/10 flex items-center justify-center">
                        <span className="text-3xl font-light">?</span>
                      </div>
                      <p className="text-sm font-medium">
                        Problem Illustration
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 