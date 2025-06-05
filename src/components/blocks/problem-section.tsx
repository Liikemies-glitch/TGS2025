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
    title: "Your product's UI/UX lacks professional design, hurting your growth potential.",
    description: "Amateur design elements and poor user experience create friction that drives potential customers away, limiting your ability to scale and compete in the market.",
    imageSrc: "/images/illustrations/section-1-problem.png"
  },
  {
    title: "Your user journey and content design is fragmented across multiple partners.",
    description: "Working with different agencies for different aspects of your product creates inconsistencies, resulting in poor user experience and low conversion rates.",
    imageSrc: "/images/illustrations/section-1-problem.png"
  },
  {
    title: "Poor positioning leads to unclear targets, weak messaging, and scattered development.",
    description: "Without clear market positioning, your team struggles with mixed priorities, unclear value propositions, and product decisions that don't align with business goals.",
    imageSrc: "/images/illustrations/section-1-problem.png"
  },
  {
    title: "We transform SaaS companies into market leaders through unified design strategy.",
    description: "Our comprehensive design ops process aligns your product, positioning, and user experience to create cohesive solutions that drive growth and market dominance.",
    imageSrc: "/images/illustrations/section-2-solution.png"
  }
]

export function ProblemSection() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const scrollerRef = useRef<any>(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024) // lg breakpoint
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    // Only initialize Scrollama for desktop
    if (isMobile) return

    // Dynamically import Scrollama to avoid SSR issues
    import('scrollama').then((scrollama) => {
      const scroller = scrollama.default()
      scrollerRef.current = scroller

      // Setup Scrollama
      scroller
        .setup({
          step: '.problem-step',
          offset: 0.5,
          debug: false, // Set to true for debugging
        })
        .onStepEnter((response: any) => {
          setCurrentStep(response.index)
        })

      // Cleanup function
      return () => {
        scroller.destroy()
      }
    })

    // Cleanup on unmount
    return () => {
      if (scrollerRef.current) {
        scrollerRef.current.destroy()
      }
    }
  }, [isMobile])

  // Mobile layout - simple sequential problems
  if (isMobile) {
    return (
      <section className="bg-background py-16">
        <div className="mx-auto max-w-2xl px-6">
          <div className="space-y-16">
            {problems.map((problem, index) => (
              <div key={index} className="space-y-8">
                {/* Problem Text */}
                <div className="text-left space-y-4">
                  <p className="text-xs text-brand-blue dark:text-brand-blue-light font-medium uppercase tracking-wide">
                    {index < 3 ? `Problem ${index + 1}` : "The Solution"}
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
                  <div className={`relative w-full opacity-90 ${index < 3 ? 'h-56' : 'h-80'}`}>
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

  // Desktop layout - Scrollama sticky side pattern
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column - Scrolling Text Content */}
          <div className="relative">
            {problems.map((problem, index) => (
              <div 
                key={index} 
                className="problem-step min-h-screen flex flex-col justify-center py-16"
              >
                <div className="space-y-6">
                  <p className="text-xs text-brand-blue dark:text-brand-blue-light font-medium uppercase tracking-wide">
                    {index < 3 ? `Problem ${index + 1}` : "The Solution"}
                  </p>
                  <h3 className="text-3xl font-medium md:text-4xl lg:text-3xl leading-tight">
                    {problem.title}
                  </h3>
                  <p className="text-lg text-muted-foreground md:text-xl leading-relaxed max-w-2xl">
                    {problem.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Sticky Images */}
          <div className="relative">
            <div className="sticky top-0 h-screen flex items-center justify-center">
              {/* Background image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 scale-150"
                style={{
                  backgroundImage: "url('/images/illustrations/sticky-scroll-bg.png')"
                }}
              ></div>
              
              {/* Image Container */}
              <div className="relative w-full max-w-lg h-[600px] flex items-center justify-center">
                {problems.map((problem, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out ${
                      currentStep === index ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <div className={`w-full h-full ${index < 3 ? 'max-w-56' : 'max-w-md'}`}>
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
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 