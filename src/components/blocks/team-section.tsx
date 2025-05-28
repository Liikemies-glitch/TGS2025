"use client";

import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'

interface TeamMember {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

export const teamMembers: TeamMember[] = [
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
];

export function TeamSection() {
  return (
    <section className="pt-16 pb-16 md:pt-24 md:pb-24 lg:pt-32 lg:pb-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="max-w-3xl text-left mb-8">
          <p className="text-xs text-brand-blue dark:text-brand-blue-light font-medium uppercase tracking-wide mb-3">
            The Team
          </p>
          <h2 className="text-2xl font-medium tracking-tight md:text-3xl lg:text-4xl">
            Meet the <span className="text-brand-blue dark:text-brand-blue-light">experts</span> behind your success
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Our diverse team brings together years of experience in design, development, and strategy.
          </p>
        </div>

        {/* Team Section */}
        <div className="mt-8">
          <AnimatedTestimonials 
            testimonials={teamMembers} 
            autoplay={true}
          />
        </div>
      </div>
    </section>
  )
} 