"use client"

import { PricingCalculator } from "@/components/ui/pricing-calculator"
import { motion } from "framer-motion"

export function PricingSection() {
  return (
    <section className="pt-16 pb-16 md:pt-24 md:pb-20 lg:pt-28 lg:pb-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left mb-16"
        >
          <p className="text-xs text-brand-blue dark:text-brand-blue-light font-medium uppercase tracking-wide mb-3">
            Pricing
          </p>
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl mb-4">
            Calculate the cost of <span className="text-brand-blue dark:text-brand-blue-light">market leadership</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            See what it costs to hire a professional full-stack designer to drive your product to market dominance.
          </p>
        </motion.div>

        {/* Full Width Pricing Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full"
        >
          <PricingCalculator hourlyRate={110} />
        </motion.div>
      </div>
    </section>
  )
} 