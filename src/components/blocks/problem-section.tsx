'use client'
import React, { useEffect, useState } from 'react'

interface Problem {
  title: string
  description: string
  illustration: React.ReactNode
}

// Custom SVG illustrations for each problem
const PoorUIIllustration = () => (
  <svg viewBox="0 0 400 400" className="w-full h-full">
    {/* Broken/misaligned UI elements */}
    {/* Header bar - crooked */}
    <rect x="20" y="30" width="360" height="50" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" transform="rotate(-2 200 55)" />
    <circle cx="50" cy="55" r="6" fill="#cbd5e1" />
    <circle cx="75" cy="55" r="6" fill="#94a3b8" />
    <circle cx="100" cy="55" r="6" fill="#64748b" />
    
    {/* Navigation - misaligned */}
    <rect x="30" y="100" width="80" height="35" fill="#94a3b8" rx="4" transform="rotate(1 70 117)" />
    <text x="70" y="120" textAnchor="middle" className="fill-white text-sm font-medium">Home</text>
    
    <rect x="130" y="95" width="80" height="35" fill="#64748b" rx="4" transform="rotate(-1 170 112)" />
    <text x="170" y="115" textAnchor="middle" className="fill-white text-sm font-medium">About</text>
    
    <rect x="230" y="105" width="80" height="35" fill="#475569" rx="4" transform="rotate(2 270 122)" />
    <text x="270" y="125" textAnchor="middle" className="fill-white text-sm font-medium">Contact</text>
    
    {/* Content boxes - different sizes and misaligned */}
    <rect x="20" y="160" width="150" height="100" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="5,5" />
    <text x="95" y="185" textAnchor="middle" className="fill-gray-500 text-xs">Broken Layout</text>
    
    <rect x="200" y="170" width="120" height="80" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1" transform="rotate(-1 260 210)" />
    <text x="260" y="195" textAnchor="middle" className="fill-gray-500 text-xs">Bad Spacing</text>
    
    <rect x="340" y="150" width="80" height="120" fill="#f1f5f9" stroke="#64748b" strokeWidth="1" transform="rotate(3 380 210)" />
    <text x="380" y="175" textAnchor="middle" className="fill-gray-500 text-xs">Wrong Size</text>
    
    {/* Buttons - inconsistent styles */}
    <rect x="30" y="300" width="100" height="40" fill="#64748b" rx="20" />
    <text x="80" y="323" textAnchor="middle" className="fill-white text-sm">Click Me!</text>
    
    <rect x="150" y="305" width="90" height="30" fill="#94a3b8" rx="4" />
    <text x="195" y="323" textAnchor="middle" className="fill-white text-xs">Button</text>
    
    <rect x="260" y="295" width="110" height="50" fill="#475569" rx="8" />
    <text x="315" y="323" textAnchor="middle" className="fill-white text-sm">Submit</text>
    
    {/* Error symbols - more subtle */}
    <text x="180" y="40" className="fill-slate-400 text-xl">⚠</text>
    <text x="350" y="130" className="fill-slate-400 text-lg">✕</text>
    <text x="50" y="280" className="fill-slate-400 text-lg">⚙</text>
  </svg>
)

const FragmentedProcessIllustration = () => (
  <svg viewBox="0 0 400 400" className="w-full h-full">
    {/* Multiple disconnected design systems */}
    
    {/* Design System A - Modern */}
    <g transform="translate(20, 20)">
      <rect x="0" y="0" width="100" height="80" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" rx="8" />
      <text x="50" y="15" textAnchor="middle" className="fill-slate-600 text-xs font-medium">Design A</text>
      <rect x="10" y="25" width="80" height="8" fill="#94a3b8" rx="4" />
      <rect x="10" y="40" width="60" height="8" fill="#e2e8f0" rx="4" />
      <circle cx="20" cy="60" r="4" fill="#64748b" />
      <circle cx="35" cy="60" r="4" fill="#94a3b8" />
    </g>
    
    {/* Design System B - Old */}
    <g transform="translate(280, 40)">
      <rect x="0" y="0" width="100" height="80" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1" rx="4" />
      <text x="50" y="15" textAnchor="middle" className="fill-slate-600 text-xs font-medium">Design B</text>
      <rect x="10" y="25" width="80" height="10" fill="#64748b" />
      <rect x="10" y="45" width="50" height="10" fill="#94a3b8" />
      <rect x="10" y="65" width="30" height="6" fill="#cbd5e1" />
    </g>
    
    {/* Design System C - Inconsistent */}
    <g transform="translate(150, 150)">
      <rect x="0" y="0" width="100" height="80" fill="#f8fafc" stroke="#64748b" strokeWidth="1" rx="8" strokeDasharray="3,3" />
      <text x="50" y="15" textAnchor="middle" className="fill-slate-600 text-xs font-medium">Design C</text>
      <rect x="10" y="25" width="80" height="6" fill="#475569" rx="3" />
      <rect x="10" y="38" width="40" height="8" fill="#64748b" rx="4" />
      <polygon points="15,55 25,65 35,55" fill="#94a3b8" />
    </g>
    
    {/* Broken connections */}
    <g stroke="#94a3b8" strokeWidth="1" fill="none" strokeDasharray="4,4">
      <path d="M120 60 L150 190" />
      <path d="M250 190 L280 80" />
      <path d="M70 100 L330 120" />
    </g>
    
    {/* Conflict indicators - more subtle */}
    <text x="200" y="120" textAnchor="middle" className="fill-slate-400 text-2xl">⚡</text>
    <text x="150" y="80" textAnchor="middle" className="fill-slate-400 text-lg">✕</text>
    <text x="250" y="160" textAnchor="middle" className="fill-slate-400 text-lg">⚠</text>
    
    {/* Scattered tools */}
    <g transform="translate(50, 280)">
      <rect x="0" y="0" width="60" height="35" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" rx="4" />
      <text x="30" y="22" textAnchor="middle" className="fill-slate-600 text-xs">Tool 1</text>
    </g>
    
    <g transform="translate(170, 300)">
      <rect x="0" y="0" width="60" height="35" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1" rx="4" />
      <text x="30" y="22" textAnchor="middle" className="fill-slate-600 text-xs">Tool 2</text>
    </g>
    
    <g transform="translate(290, 290)">
      <rect x="0" y="0" width="60" height="35" fill="#f1f5f9" stroke="#64748b" strokeWidth="1" rx="4" />
      <text x="30" y="22" textAnchor="middle" className="fill-slate-600 text-xs">Tool 3</text>
    </g>
    
    {/* Question marks indicating confusion */}
    <text x="80" y="200" className="fill-slate-300 text-3xl">?</text>
    <text x="320" y="200" className="fill-slate-300 text-3xl">?</text>
  </svg>
)

const UnclearPositioningIllustration = () => (
  <svg viewBox="0 0 400 400" className="w-full h-full">
    {/* Confused messaging and scattered elements */}
    
    {/* Multiple competing messages */}
    <g transform="translate(20, 20)">
      <rect x="0" y="0" width="120" height="60" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" rx="8" />
      <text x="60" y="20" textAnchor="middle" className="fill-slate-600 text-xs font-medium">We're #1!</text>
      <text x="60" y="35" textAnchor="middle" className="fill-slate-500 text-xs">Best Quality</text>
      <text x="60" y="50" textAnchor="middle" className="fill-slate-500 text-xs">Cheapest Price</text>
    </g>
    
    <g transform="translate(260, 40)">
      <rect x="0" y="0" width="120" height="60" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1" rx="8" />
      <text x="60" y="20" textAnchor="middle" className="fill-slate-600 text-xs font-medium">Premium Only</text>
      <text x="60" y="35" textAnchor="middle" className="fill-slate-500 text-xs">Luxury Brand</text>
      <text x="60" y="50" textAnchor="middle" className="fill-slate-500 text-xs">Exclusive</text>
    </g>
    
    <g transform="translate(140, 120)">
      <rect x="0" y="0" width="120" height="60" fill="#f8fafc" stroke="#64748b" strokeWidth="1" rx="8" />
      <text x="60" y="20" textAnchor="middle" className="fill-slate-600 text-xs font-medium">For Everyone</text>
      <text x="60" y="35" textAnchor="middle" className="fill-slate-500 text-xs">Mass Market</text>
      <text x="60" y="50" textAnchor="middle" className="fill-slate-500 text-xs">Affordable</text>
    </g>
    
    {/* Scattered target audiences */}
    <circle cx="80" cy="220" r="22" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
    <text x="80" y="225" textAnchor="middle" className="fill-slate-600 text-xs">Kids</text>
    
    <circle cx="200" cy="200" r="22" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1" />
    <text x="200" y="205" textAnchor="middle" className="fill-slate-600 text-xs">Adults</text>
    
    <circle cx="320" cy="230" r="22" fill="#f8fafc" stroke="#64748b" strokeWidth="1" />
    <text x="320" y="235" textAnchor="middle" className="fill-slate-600 text-xs">B2B</text>
    
    <circle cx="150" cy="280" r="22" fill="#f1f5f9" stroke="#475569" strokeWidth="1" />
    <text x="150" y="285" textAnchor="middle" className="fill-slate-600 text-xs">Elderly</text>
    
    {/* Conflicting arrows - more subtle */}
    <g stroke="#94a3b8" strokeWidth="2" fill="#94a3b8">
      <path d="M100 150 L180 180" markerEnd="url(#arrowhead-subtle)" />
      <path d="M240 150 L160 180" markerEnd="url(#arrowhead-subtle)" />
      <path d="M200 100 L200 180" markerEnd="url(#arrowhead-subtle)" />
    </g>
    
    {/* Arrow marker definition */}
    <defs>
      <marker id="arrowhead-subtle" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
        <polygon points="0 0, 8 3, 0 6" fill="#94a3b8" />
      </marker>
    </defs>
    
    {/* Confusion indicators - more subtle */}
    <text x="200" y="160" textAnchor="middle" className="fill-slate-400 text-2xl">?</text>
    <text x="100" y="120" textAnchor="middle" className="fill-slate-400 text-lg">~</text>
    <text x="300" y="140" textAnchor="middle" className="fill-slate-400 text-lg">⚠</text>
    
    {/* Scattered product features */}
    <g transform="translate(20, 320)">
      <rect x="0" y="0" width="70" height="25" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" rx="12" />
      <text x="35" y="17" textAnchor="middle" className="fill-slate-600 text-xs">Feature A</text>
    </g>
    
    <g transform="translate(150, 340)">
      <rect x="0" y="0" width="70" height="25" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1" rx="12" />
      <text x="35" y="17" textAnchor="middle" className="fill-slate-600 text-xs">Feature B</text>
    </g>
    
    <g transform="translate(310, 330)">
      <rect x="0" y="0" width="70" height="25" fill="#f8fafc" stroke="#64748b" strokeWidth="1" rx="12" />
      <text x="35" y="17" textAnchor="middle" className="fill-slate-600 text-xs">Feature C</text>
    </g>
    
    {/* Lost customer - more subtle */}
    <text x="50" y="380" className="fill-slate-300 text-lg">?</text>
    <text x="350" y="380" className="fill-slate-300 text-lg">~</text>
  </svg>
)

const problems: Problem[] = [
  {
    title: "Poor UI/UX Design",
    description: "Your product's UI/UX lacks professional design, hurting your growth potential.",
    illustration: <PoorUIIllustration />
  },
  {
    title: "Fragmented Design Process",
    description: "Your web design and content design is fragmented across multiple partners, resulting in inconsistent quality and low conversions.",
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
  }, [isMobile])

  // Mobile layout - simple sequential problems
  if (isMobile) {
    return (
      <section id="problem-section" className="bg-background py-16">
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

  // Desktop layout (original with progress bar and sticky behavior)
  // Calculate escape progress - starts when last problem is centered
  const escapeThreshold = (problems.length - 1) / problems.length // Start escape when last problem is centered (2/3 = 0.67)
  const escapeProgress = Math.max(0, (scrollProgress - escapeThreshold) / (1 - escapeThreshold))
  const translateY = escapeProgress * -100 // Move container up by 100vh

  return (
    <section id="problem-section" className="bg-background" style={{ height: `${problems.length * 150}vh` }}>
      <div 
        className="sticky top-0 h-screen overflow-hidden"
        style={{
          transform: `translateY(${translateY}vh)`,
          transition: scrollProgress > escapeThreshold ? 'none' : 'transform 0.1s ease-out'
        }}
      >
        {/* Section indicator - hidden on mobile */}
        <div className="hidden lg:block absolute left-6 top-1/2 -translate-y-1/2 z-10">
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
                  const textTranslateY = scrollProgress >= escapeThreshold ? 0 : -problemProgress * 100 // Stop text movement during escape
                  
                  // During escape phase, only show the last problem
                  const opacity = scrollProgress >= escapeThreshold 
                    ? (index === problems.length - 1 ? 1 : 0)
                    : Math.max(0, Math.min(1, 1 - Math.abs(problemProgress)))
                  
                  return (
                    <div
                      key={index}
                      className="absolute inset-0 flex items-center"
                      style={{
                        transform: `translateY(${textTranslateY}vh)`,
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
                    // Calculate opacity based on how close this problem is to being active
                    const problemProgress = (scrollProgress * problems.length) - index
                    const opacity = Math.max(0, Math.min(1, 1 - Math.abs(problemProgress)))
                    
                    return (
                      <div
                        key={index}
                        className="absolute inset-0 flex items-center justify-center"
                        style={{
                          opacity: opacity * 0.9, // Make images slightly more transparent
                          transform: `scale(${0.95 + (opacity * 0.05)})`
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