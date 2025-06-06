"use client";

import { BentoGrid } from '@/components/ui/bento-grid'
import { Settings, Users, Palette, Code2, TrendingUp, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GlowingEffect } from '@/components/ui/glowing-effect'

const solutionItems = [
  {
    title: "Our UX System in Action",
    meta: "Design Ops Process",
    description: "From audit to implementation — scalable design foundations that empower design and dev teams.",
    icon: <Settings className="w-4 h-4 text-white" />,
    hasPersistentHover: true,
  },
  {
    title: "Align UX with Business Goals",
    meta: "UX Strategy Workshops",
    description: "Facilitation sessions that bridge stakeholders and shape product direction before designing.",
    icon: <Users className="w-4 h-4 text-white" />,
  },
  {
    title: "Design That's Thoughtful & Functional",
    meta: "Interface Craftsmanship",
    description: "Details that drive conversions — from button behavior to motion microcopy.",
    icon: <Palette className="w-4 h-4 text-white" />,
  },
  {
    title: "Built for Handoff",
    meta: "Developer-Ready Design",
    description: "Designed with development in mind — optimized for Webflow, React or your stack.",
    icon: <Code2 className="w-4 h-4 text-white" />,
  },
];

const ctaItems = [
  {
    title: "560 € → 870 € /week. That&apos;s +55%.",
    meta: "Case Study Result",
    description: (
      <div className="space-y-4">
        <p className="text-sm">
          User-centered redesign led to 55% revenue increase, 622% media ROI uplift, +46% deal size, and higher retention.
        </p>
        <Button variant="outline" size="sm" className="text-xs h-8">
          View Full Case Study
        </Button>
      </div>
    ),
    icon: <TrendingUp className="w-4 h-4 text-white" />,
    hasPersistentHover: true,
  },
  {
    title: "Ready to Transform Your Product?",
    meta: "Get Started",
    description: (
      <div className="space-y-4">
        <p className="text-sm">
          Let&apos;s discuss how we can accelerate your growth with strategic UX design.
        </p>
        <Button size="sm" className="text-xs h-8">
          Book a Strategy Call
        </Button>
      </div>
    ),
    icon: <ArrowRight className="w-4 h-4 text-brand-blue" />,
    hasPersistentHover: true,
  },
];

export function SolutionSection() {
  // Temporarily hidden
  return null;
  
  return (
    <section className="pt-0 pb-16 md:pb-24 lg:pb-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="max-w-3xl text-left mb-8">
          <p className="text-xs text-brand-blue dark:text-brand-blue-light font-medium uppercase tracking-wide mb-3">
            The Solution
          </p>
          <h2 className="text-2xl font-medium tracking-tight md:text-3xl lg:text-4xl">
            Real <span className="text-brand-blue dark:text-brand-blue-light">Results</span>. Real <span className="text-brand-blue dark:text-brand-blue-light">Growth</span>.
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            From revenue and retention to ROI — we design with business outcomes in mind. Here&apos;s what happens when UX strategy meets execution.
          </p>
        </div>

        {/* Main Services Bento Grid */}
        <div className="mb-12">
          <BentoGrid items={solutionItems} />
        </div>

        {/* Separator */}
        <div className="relative mb-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-4 text-muted-foreground font-medium tracking-wide">
              Results & Next Steps
            </span>
          </div>
        </div>

        {/* Case Study & CTA Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {ctaItems.map((item, index) => (
            <div key={index} className="min-h-[12rem]">
              <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
                {index === 1 ? (
                  // Star movement effect for CTA block (same as hero avatar)
                  <div className="absolute inset-0 rounded-[inherit] overflow-hidden">
                    <div
                      className="absolute w-[300%] h-[50%] bottom-[-11px] right-[-250%] rounded-full z-0 animate-star-movement-bottom opacity-100"
                      style={{
                        background: 'radial-gradient(circle, hsl(var(--brand-blue-light)), transparent 10%)',
                        animationDuration: '4s',
                        animationTimingFunction: 'linear',
                        animationIterationCount: 'infinite',
                      }}
                    />
                    <div
                      className="absolute w-[300%] h-[50%] top-[-10px] left-[-250%] rounded-full z-0 animate-star-movement-top opacity-100"
                      style={{
                        background: 'radial-gradient(circle, hsl(var(--brand-blue-light)), transparent 10%)',
                        animationDuration: '4s',
                        animationTimingFunction: 'linear',
                        animationIterationCount: 'infinite',
                      }}
                    />
                  </div>
                ) : (
                  // Regular glow effect for case study
                  <GlowingEffect
                    spread={40}
                    glow={item.hasPersistentHover}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={3}
                  />
                )}
                <div className="relative flex h-full flex-col justify-between gap-6 rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
                  <div className="relative flex flex-1 flex-col justify-between gap-3">
                    <div className="flex items-center justify-between">
                      <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
                        {item.icon}
                      </div>
                      {item.meta && (
                        <span className="text-xs text-muted-foreground">
                          {item.meta}
                        </span>
                      )}
                    </div>
                    <div className="space-y-3">
                      <h3 className="pt-0.5 text-xl leading-[1.375rem] font-medium font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground">
                        {item.title}
                      </h3>
                      <div className="[&_b]:md:font-medium [&_strong]:md:font-medium font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
                        {item.description}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 