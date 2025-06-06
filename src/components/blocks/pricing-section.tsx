"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { PricingCalculator } from "@/components/ui/pricing-calculator"
import type { LucideIcon } from "lucide-react"
import { Palette, Users, Zap, Target, MessageSquare } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"

export interface Feature {
  text: string
  icon: LucideIcon
}

export interface Benefit {
  text: string
  icon: LucideIcon
}

export interface SinglePricingCardProps {
  // Header content
  badge?: {
    icon: LucideIcon
    text: string
  }
  title: string
  subtitle: string

  // Pricing info
  price: {
    current: string
    original?: string
    discount?: string
    discountBadgeClassName?: string
  }

  // Benefits
  benefits: Benefit[]

  // Features
  features: Feature[]
  featuresTitle?: string
  featuresBadge?: {
    icon: LucideIcon
    text: string
  }

  // Buttons
  primaryButton: {
    text: string
    icon: LucideIcon
    href?: string
    onClick?: () => void
    chevronIcon?: LucideIcon
  }
  secondaryButton?: {
    text: string
    icon: LucideIcon
    href?: string
    onClick?: () => void
  }

  // Animation
  animationEnabled?: boolean

  // Additional styling
  className?: string
  cardClassName?: string
  maxWidth?: string
}

export function SinglePricingCard({
  badge,
  title,
  subtitle,
  price,
  benefits,
  features,
  featuresTitle = "Included Features",
  primaryButton,
  animationEnabled = true,
  className,
  cardClassName,
  maxWidth = "max-w-2xl",
}: SinglePricingCardProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <div ref={sectionRef} className={`py-12 relative overflow-hidden ${className || ""}`}>
      <div className={`relative z-10 ${maxWidth}`}>
        {animationEnabled ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <SinglePricingCardContent
              badge={badge}
              title={title}
              subtitle={subtitle}
              price={price}
              benefits={benefits}
              features={features}
              featuresTitle={featuresTitle}
              primaryButton={primaryButton}
              isInView={isInView}
              animationEnabled={animationEnabled}
              cardClassName={cardClassName}
            />
          </motion.div>
        ) : (
          <SinglePricingCardContent
            badge={badge}
            title={title}
            subtitle={subtitle}
            price={price}
            benefits={benefits}
            features={features}
            featuresTitle={featuresTitle}
            primaryButton={primaryButton}
            isInView={isInView}
            animationEnabled={animationEnabled}
            cardClassName={cardClassName}
          />
        )}
      </div>
    </div>
  )
}

interface SinglePricingCardContentProps
  extends Omit<SinglePricingCardProps, "className" | "maxWidth" | "featuresIcon"> {
  isInView: boolean
  cardClassName?: string
}

function SinglePricingCardContent({
  badge,
  title,
  subtitle,
  benefits,
  features,
  featuresTitle,
  isInView,
  animationEnabled,
  cardClassName,
}: SinglePricingCardContentProps) {
  const BadgeIcon = badge?.icon
  
  // State for partnership tracking
  const [months, setMonths] = useState(3)
  const [daysPerWeek, setDaysPerWeek] = useState(5)
  
  // Calculate if partnership discount applies
  const getSavingsPercentage = () => {
    if (months >= 6) return 10
    return 0
  }
  
  const savings = getSavingsPercentage()
  const hourlyRate = 110
  const discountedRate = Math.round(hourlyRate * (1 - savings / 100))

  return (
    <Card className={`overflow-hidden border border-primary/10 relative ${cardClassName || ""}`}>
      <div className="flex flex-col lg:flex-row">
        {/* Left column - Pricing details and Features */}
        <div className="p-6 md:p-8 lg:w-1/2 flex flex-col">
          {/* Header Section */}
          <div className="mb-8">
            {badge && (
              <div className="flex items-center mb-6">
                <Badge className="px-3 py-1.5 bg-primary/5 border-primary/10 text-primary hover:bg-primary/10 text-sm font-medium">
                  {BadgeIcon && <BadgeIcon className="h-3.5 w-3.5 mr-1.5" />}
                  <span>{badge.text}</span>
                </Badge>
              </div>
            )}

            <div className="space-y-4 mb-6">
              <h3 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">{title}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">{subtitle}</p>
            </div>

          </div>

          {/* Benefits Section (if any) */}
          {benefits.length > 0 && (
            <div className="mb-8">
              <h4 className="font-semibold text-lg mb-4">Why choose us</h4>
              <div className="space-y-3">
                {benefits.map((benefit, index) => {
                  const BenefitIcon = benefit.icon

                  return (
                    <div key={index} className="flex items-center gap-3">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                        <BenefitIcon className="h-3 w-3 text-green-600 dark:text-green-400" />
                      </div>
                      <span className="text-sm font-medium">{benefit.text}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* Features Section */}
          <div className="mb-8">
            <div className="flex items-center mb-6">
              <h4 className="font-semibold text-lg">{featuresTitle}</h4>
            </div>

            <div className="space-y-2">
              {features.map((feature, i) => {
                const FeatureIcon = feature.icon
                
                return (
                  <motion.div
                    key={i}
                    initial={animationEnabled ? { opacity: 0, x: 20 } : { opacity: 1, x: 0 }}
                    animate={animationEnabled && isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.05, duration: 0.5 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors mt-0.5">
                      <FeatureIcon className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <span className="text-sm leading-relaxed font-medium">{feature.text}</span>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Pricing Display - Lower Left */}
          <div className="mt-auto">
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 border border-primary/10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Starting at</p>
                  <div className="flex items-baseline gap-2 min-h-[3rem]">
                    {savings > 0 ? (
                      <>
                        <span className="text-4xl md:text-5xl font-bold text-primary">{discountedRate}€/hour</span>
                        <span className="text-2xl text-muted-foreground line-through">{hourlyRate}€/hour</span>
                      </>
                    ) : (
                      <span className="text-4xl md:text-5xl font-bold text-foreground">{hourlyRate}€/hour</span>
                    )}
                  </div>
                  <p className="text-lg text-muted-foreground font-medium mt-1">start in 2 weeks</p>
                </div>
                <div className="flex flex-col items-end gap-2 min-h-[4rem]">
                  <div className="hidden sm:flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="h-6 flex items-center">
                    {savings > 0 && (
                      <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-xs font-medium">
                        Partnership -{savings}%
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right column - Calculator */}
        <div className="p-6 md:p-8 lg:w-1/2 lg:border-l border-border/50">
          <PricingCalculator 
            hourlyRate={110} 
            months={months}
            daysPerWeek={daysPerWeek}
            onMonthsChange={setMonths}
            onDaysPerWeekChange={setDaysPerWeek}
          />
        </div>
      </div>
    </Card>
  )
}

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
          className="text-center mb-16"
        >
          <p className="text-xs text-brand-blue dark:text-brand-blue-light font-medium uppercase tracking-wide mb-3">
            Pricing
          </p>
          <h2 className="text-2xl font-medium tracking-tight md:text-3xl lg:text-4xl mb-4">
            Simple, <span className="text-brand-blue dark:text-brand-blue-light">transparent</span> pricing
          </h2>
          <p className="text-base text-muted-foreground md:text-lg max-w-2xl mx-auto">
            No hidden fees, no long-term contracts. Pay for expert UX/UI consultation by the hour.
          </p>
        </motion.div>

        {/* Full Width Pricing Card with Integrated Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full"
        >
          <SinglePricingCard
            title="Strategic design partner"
            subtitle="Transform your SaaS product with strategic design thinking and proven methodologies that drive business growth"
            price={{
              current: "110€/hour"
            }}
            benefits={[]}
            features={[
              { text: "Strategic product positioning & market differentiation", icon: Target },
              { text: "User research & data-driven insights", icon: Users },
              { text: "Complete design system development & implementation", icon: Palette },
              { text: "Conversion-focused UX optimization", icon: Zap },
              { text: "Team workshops & strategic design consulting", icon: MessageSquare }
            ]}
            featuresTitle="Strategic Design Services"
            primaryButton={{
              text: "Book Consultation",
              icon: MessageSquare,
              href: "#contact"
            }}
            maxWidth="max-w-full"
            className="py-0 px-0"
          />
        </motion.div>
      </div>
    </section>
  )
} 