"use client";

import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'

const teamMembers = [
  {
    quote: "Specializing in SaaS solutions and product strategy. I help businesses scale their software products and optimize user experiences for maximum growth and retention.",
    name: 'Mikki Aalto-Ylevä',
    designation: 'SaaS Specialist',
    src: '/images/team/Mikki.jpeg'
  },
  {
    quote: "Creating intuitive and beautiful user experiences. I focus on user-centered design principles to craft interfaces that are both functional and delightful to use.",
    name: 'Tuomas Kaartoluoma',
    designation: 'Fullstack Designer',
    src: '/images/team/Tuomas.png'
  },
  {
    quote: "Passionate about visual storytelling and brand identity. I bring creative solutions to complex design challenges, ensuring every pixel serves a purpose.",
    name: 'Dũng Nguyen',
    designation: 'Fullstack Designer',
    src: '/images/team/Duncan.jpeg'
  },
  {
    quote: "Focused on creating seamless user journeys and innovative design systems. I believe great design should be invisible yet impactful in solving real problems.",
    name: 'Aksel Suokas',
    designation: 'Fullstack Designer',
    src: '/images/team/Aksel.jpeg'
  }
]

export function TeamSection() {
  return (
    <section className="pt-0 pb-16 md:pb-24 lg:pb-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="max-w-3xl text-left mb-4">
          <p className="text-xs text-blue-600 dark:text-blue-400 font-medium uppercase tracking-wide mb-3">
            The Solution
          </p>
          <h2 className="text-2xl font-medium tracking-tight md:text-3xl lg:text-4xl">
            Your product team&apos;s <span className="text-blue-600 dark:text-blue-400">missing pieces</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Let us fill the gaps and accelerate your growth.
          </p>
        </div>

        {/* Animated Team Showcase */}
        <AnimatedTestimonials 
          testimonials={teamMembers} 
          autoplay={true}
        />
      </div>
    </section>
  )
} 