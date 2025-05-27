"use client";

import { BentoGrid } from '@/components/ui/bento-grid'
import { Code2, Palette, Wand2, Zap } from 'lucide-react'

const solutionItems = [
  {
    title: "Strategic Design",
    meta: "Core Service",
    description: "Transform your product with user-centered design that drives growth and retention.",
    icon: <Palette className="w-4 h-4 text-blue-500" />,
    status: "Available",
    tags: ["UX/UI", "Research", "Strategy"],
    colSpan: 2,
    hasPersistentHover: true,
  },
  {
    title: "Development",
    meta: "Full Stack",
    description: "Modern web development with React, Next.js, and TypeScript for scalable solutions.",
    icon: <Code2 className="w-4 h-4 text-emerald-500" />,
    status: "Available",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    title: "AI Integration",
    meta: "Advanced",
    description: "Enhance your product with cutting-edge AI capabilities and automation.",
    icon: <Wand2 className="w-4 h-4 text-purple-500" />,
    tags: ["OpenAI", "LangChain", "Vector DB"],
    colSpan: 2,
  },
  {
    title: "Performance",
    meta: "Optimization",
    description: "Optimize your application for speed, SEO, and core web vitals.",
    icon: <Zap className="w-4 h-4 text-sky-500" />,
    status: "Available",
    tags: ["Speed", "SEO", "Analytics"],
  },
];

export function SolutionSection() {
  return (
    <section className="pt-0 pb-16 md:pb-24 lg:pb-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="max-w-3xl text-left mb-8">
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

        {/* Bento Grid */}
        <BentoGrid items={solutionItems} />
      </div>
    </section>
  )
} 