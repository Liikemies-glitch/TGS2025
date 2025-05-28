"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"
import { Star, CheckCircle, Palette, Users, Zap, Target, MessageSquare } from "lucide-react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export interface Testimonial {
  id: number
  name: string
  role: string
  company?: string
  content: string
  rating: number
  avatar: string
}

export interface Feature {
  text: string
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
  featuresIcon: LucideIcon
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

  // Testimonials
  testimonials: Testimonial[]
  testimonialRotationSpeed?: number // in milliseconds

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
  featuresIcon,
  featuresTitle = "Included Features",
  primaryButton,
  testimonials,
  testimonialRotationSpeed = 5000,
  animationEnabled = true,
  className,
  cardClassName,
  maxWidth = "max-w-2xl",
}: SinglePricingCardProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0)

  // Auto-rotate testimonials
  useEffect(() => {
    if (testimonials.length <= 1) return

    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length)
    }, testimonialRotationSpeed)

    return () => clearInterval(interval)
  }, [testimonials.length, testimonialRotationSpeed])

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
              featuresIcon={featuresIcon}
              featuresTitle={featuresTitle}
              primaryButton={primaryButton}
              testimonials={testimonials}
              currentTestimonialIndex={currentTestimonialIndex}
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
            featuresIcon={featuresIcon}
            featuresTitle={featuresTitle}
            primaryButton={primaryButton}
            testimonials={testimonials}
            currentTestimonialIndex={currentTestimonialIndex}
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
  extends Omit<SinglePricingCardProps, "className" | "maxWidth" | "testimonialRotationSpeed"> {
  currentTestimonialIndex: number
  isInView: boolean
  cardClassName?: string
}

function SinglePricingCardContent({
  badge,
  title,
  subtitle,
  price,
  benefits,
  features,
  featuresIcon,
  featuresTitle,
  primaryButton,
  testimonials,
  currentTestimonialIndex,
  isInView,
  animationEnabled,
  cardClassName,
}: SinglePricingCardContentProps) {
  const BadgeIcon = badge?.icon
  const FeaturesIcon = featuresIcon
  const PrimaryButtonIcon = primaryButton.icon

  return (
    <Card className={`overflow-hidden border border-primary/10 relative ${cardClassName || ""}`}>
      <div className="flex flex-col md:flex-row">
        {/* Left column - Pricing details */}
        <div className="p-6 md:p-8 md:w-1/2 flex flex-col">
          {badge && (
            <div className="flex items-center mb-4">
              <Badge className="px-3 py-1 bg-primary/5 border-primary/10 text-primary hover:bg-primary/10">
                {BadgeIcon && <BadgeIcon className="h-3.5 w-3.5 mr-1" />}
                <span>{badge.text}</span>
              </Badge>
            </div>
          )}

          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4">{subtitle}</p>

          <div className="flex items-baseline mb-6">
            <span className="text-4xl font-bold">{price.current}</span>
          </div>

          <div className="space-y-4 mb-6">
            {benefits.map((benefit, index) => {
              const BenefitIcon = benefit.icon

              return (
                <div key={index} className="flex items-center gap-2">
                  <BenefitIcon className="h-4 w-4 text-primary" />
                  <span className="text-sm">{benefit.text}</span>
                </div>
              )
            })}
          </div>

          <div className="mt-auto">
            <Button
              className="gap-2 group"
              size="lg"
              onClick={primaryButton.onClick}
              asChild={!!primaryButton.href}
            >
              {primaryButton.href ? (
                <Link href={primaryButton.href}>
                  <PrimaryButtonIcon className="h-4 w-4 transition-transform group-hover:rotate-12" />
                  <span>{primaryButton.text}</span>
                </Link>
              ) : (
                <>
                  <PrimaryButtonIcon className="h-4 w-4 transition-transform group-hover:rotate-12" />
                  <span>{primaryButton.text}</span>
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Right column - Features */}
        <div className="p-6 md:p-8 md:w-1/2 md:border-l border-border/50">
          <div className="flex items-center mb-4">
            <h4 className="font-semibold">{featuresTitle}</h4>
          </div>

          <div className="space-y-3 mb-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={animationEnabled ? { opacity: 0, x: 20 } : { opacity: 1, x: 0 }}
                animate={animationEnabled && isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.05, duration: 0.5 }}
                className="flex items-center gap-3"
              >
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                  <FeaturesIcon className="h-3 w-3 text-primary" />
                </div>
                <span className="text-sm">{feature.text}</span>
              </motion.div>
            ))}
          </div>

          {testimonials.length > 0 && (
            <>
              <div className="my-6 h-px bg-border/50" />

              <div className="rounded-lg p-4 border border-border/50 relative overflow-hidden min-h-[140px]">
                <AnimatePresence mode="wait">
                  {testimonials.map(
                    (testimonial, index) =>
                      index === currentTestimonialIndex && (
                        <motion.div
                          key={testimonial.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.5 }}
                          className="absolute inset-0 p-4"
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <div className="h-8 w-8 rounded-full overflow-hidden">
                              <Image
                                src={testimonial.avatar || "/placeholder.svg"}
                                alt={`${testimonial.name}'s avatar`}
                                width={32}
                                height={32}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <p className="font-medium text-sm">{testimonial.name}</p>
                              <p className="text-xs text-muted-foreground">
                                {testimonial.role}
                                {testimonial.company && ` at ${testimonial.company}`}
                              </p>
                            </div>
                            <div className="ml-auto flex">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="h-3 w-3 fill-primary text-primary" />
                              ))}
                            </div>
                          </div>
                          <p className="text-sm italic line-clamp-3">{testimonial.content}</p>
                        </motion.div>
                      ),
                  )}
                </AnimatePresence>
              </div>

              {testimonials.length > 1 && (
                <div className="flex justify-center mt-4 gap-1">
                  {testimonials.map((_, index) => (
                    <div
                      key={index}
                      className={`h-1.5 rounded-full transition-all ${
                        index === currentTestimonialIndex ? "w-4 bg-primary" : "w-1.5 bg-primary/30"
                      }`}
                      aria-label={`Testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </Card>
  )
}

// Testimonial data from the existing testimonials section
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Anna-Mari Jääskeläinen",
    role: "Product Manager",
    company: "Helsinki",
    content: "Goodside offered a trial period for their design service, aimed at designing and implementing improvements to one area of our product. I was very satisfied with the trial period, as it clearly distinguished Goodside from its competitors.",
    rating: 5,
    avatar: "/images/client-testimonial-headshots/Anna-Mari Jääskeläinen.jpg"
  },
  {
    id: 2,
    name: "Kasper Valtonen",
    role: "Development Lead",
    company: "Tampere",
    content: "We wanted to improve our developers ability to develop software that our customers actually like to use. UX/UI training by Goodside UX/UI professionals really made the difference!",
    rating: 5,
    avatar: "/images/client-testimonial-headshots/Kasper Valtonen.jpg"
  },
  {
    id: 3,
    name: "Jarkko Kähkönen",
    role: "Project Manager",
    company: "Fuengirola",
    content: "The employees of The Goodside handled the task brilliantly, and the outcome of the UX design work was excellent. Everything was done on schedule, as agreed, and in an honest and straightforward manner.",
    rating: 5,
    avatar: "/images/client-testimonial-headshots/Jarkko Kähkönen.jpg"
  },
  {
    id: 4,
    name: "Teemu Toroi",
    role: "Business Owner",
    company: "Finland",
    content: "Things work smoothly with Janne, communication is straightforward and promises are kept. Excellent price/quality ratio.",
    rating: 5,
    avatar: "/images/client-testimonial-headshots/Teemu Toroi.jpg"
  }
]

export function PricingSection() {
  return (
    <section className="pt-16 pb-16 md:pt-24 md:pb-20 lg:pt-28 lg:pb-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl text-left mb-12"
        >
          <p className="text-xs text-brand-blue dark:text-brand-blue-light font-medium uppercase tracking-wide mb-3">
            Pricing
          </p>
          <h2 className="text-2xl font-medium tracking-tight md:text-3xl lg:text-4xl mb-4">
            Simple, <span className="text-brand-blue dark:text-brand-blue-light">transparent</span> pricing
          </h2>
          <p className="text-base text-muted-foreground md:text-lg">
            No hidden fees, no long-term contracts. Pay for expert UX/UI consultation by the hour.
          </p>
        </motion.div>

        {/* Pricing Card */}
        <div className="flex justify-start">
          <SinglePricingCard
            title="Strategic design partner"
            subtitle="Professional design consultation to elevate your digital products and user experience"
            price={{
              current: "110€/hour"
            }}
            benefits={[
              {
                text: "Expert UX/UI guidance and strategy",
                icon: Target
              },
              {
                text: "User research and usability testing",
                icon: Users
              },
              {
                text: "Design system development",
                icon: Palette
              },
              {
                text: "Rapid prototyping and validation",
                icon: Zap
              },
              {
                text: "Team training and workshops",
                icon: MessageSquare
              }
            ]}
            features={[
              { text: "Comprehensive UX audit and analysis" },
              { text: "User journey mapping and personas" },
              { text: "Wireframing and prototyping" },
              { text: "Visual design and UI components" },
              { text: "Usability testing and validation" },
              { text: "Design system documentation" },
              { text: "Accessibility compliance review" },
              { text: "Performance optimization recommendations" },
              { text: "Team collaboration and handoff" },
              { text: "Post-launch support and iteration" }
            ]}
            featuresIcon={CheckCircle}
            featuresTitle="What's Included"
            primaryButton={{
              text: "Book Consultation",
              icon: MessageSquare,
              href: "#contact"
            }}
            testimonials={testimonials}
            testimonialRotationSpeed={4000}
            maxWidth="max-w-4xl"
            className="py-0 px-0"
          />
        </div>
      </div>
    </section>
  )
} 