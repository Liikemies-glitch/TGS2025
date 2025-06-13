'use client'

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookAMeetingSection } from "@/components/blocks/book-a-meeting-section"
import { InfiniteSlider } from "@/components/ui/infinite-slider"
import { ProgressiveBlur } from "@/components/ui/progressive-blur"
import { 
  Map, 
  Zap, 
  Users,
  ArrowRight,
  Target,
  TrendingUp,
  Layers,
  BarChart3,
  Eye,
  Lightbulb,
  ArrowUpRight,
  CheckCircle,
  Clock,
  Rocket,
  UserCheck
} from "lucide-react"

// Service offerings data
const serviceOfferings = [
  {
    name: "Landing Page Optimization",
    description: "High-converting landing pages that capture attention and drive action from the first interaction.",
    icon: Target,
    features: ["Conversion optimization", "A/B testing", "Performance analytics", "Mobile-first design"]
  },
  {
    name: "User Onboarding",
    description: "Seamless onboarding experiences that guide users to their first success moment quickly and efficiently.",
    icon: UserCheck,
    features: ["Progressive disclosure", "Interactive tutorials", "Success milestones", "Retention optimization"]
  },
  {
    name: "User Activation",
    description: "Strategic activation flows that help users discover value and become engaged, active users.",
    icon: Zap,
    features: ["Activation metrics", "Feature adoption", "Engagement triggers", "Behavioral nudges"]
  },
  {
    name: "Customer Journey Mapping",
    description: "Comprehensive journey maps that visualize every touchpoint and optimize the entire user experience.",
    icon: Map,
    features: ["Touchpoint analysis", "Pain point identification", "Opportunity mapping", "Journey optimization"]
  },
  {
    name: "Conversion Funnels",
    description: "Optimized conversion funnels that reduce friction and maximize user progression through key actions.",
    icon: TrendingUp,
    features: ["Funnel analysis", "Drop-off optimization", "Multi-step flows", "Conversion tracking"]
  },
  {
    name: "User Flow Design",
    description: "Intuitive user flows that guide users through complex processes with clarity and purpose.",
    icon: ArrowRight,
    features: ["Flow diagrams", "Decision trees", "Path optimization", "User testing"]
  }
]

// Journey optimization process
const journeyProcess = [
  {
    step: "01",
    title: "Journey Analysis",
    description: "Map current user journeys and identify key touchpoints, pain points, and optimization opportunities.",
    icon: Eye,
    deliverables: ["Current state mapping", "Analytics review", "User feedback analysis", "Opportunity assessment"]
  },
  {
    step: "02",
    title: "Strategy Development",
    description: "Design optimized journey strategies based on user needs and business objectives.",
    icon: Lightbulb,
    deliverables: ["Journey strategy", "Success metrics", "Optimization roadmap", "Testing plan"]
  },
  {
    step: "03",
    title: "Design & Implementation",
    description: "Create and implement optimized user journeys with focus on conversion and engagement.",
    icon: Layers,
    deliverables: ["Journey designs", "Prototypes", "Implementation guide", "Testing framework"]
  },
  {
    step: "04",
    title: "Optimization & Growth",
    description: "Continuously test, measure, and optimize journeys for improved performance and user satisfaction.",
    icon: Rocket,
    deliverables: ["Performance reports", "A/B test results", "Optimization recommendations", "Growth insights"]
  }
]

// Case studies specific to User Journeys
const caseStudies = [
  {
    id: 1,
    title: "SaaS Onboarding Optimization",
    summary: "Redesigned onboarding flow that increased user activation by 75% and reduced time-to-value by 60%.",
    image: "/images/case-studies/onboarding-optimization.jpg",
    tags: ["User Onboarding", "User Activation", "Conversion Optimization"],
    metrics: ["75% increase in user activation", "60% reduction in time-to-value", "45% improvement in retention"]
  },
  {
    id: 2,
    title: "E-commerce Conversion Funnel",
    summary: "Optimized checkout flow that increased conversion rates by 40% and reduced cart abandonment by 50%.",
    image: "/images/case-studies/conversion-funnel.jpg",
    tags: ["Conversion Funnels", "Landing Page Optimization", "User Flow Design"],
    metrics: ["40% increase in conversion rate", "50% reduction in cart abandonment", "25% higher average order value"]
  },
  {
    id: 3,
    title: "B2B Lead Generation Journey",
    summary: "Created comprehensive lead nurturing journey that improved qualified lead generation by 85%.",
    image: "/images/case-studies/lead-generation.jpg",
    tags: ["Customer Journey Mapping", "Landing Page Optimization", "User Activation"],
    metrics: ["85% increase in qualified leads", "65% improvement in lead quality", "30% faster sales cycle"]
  }
]

// Journey optimization frameworks
const journeyFrameworks = [
  {
    title: "AARRR Metrics",
    description: "Acquisition, Activation, Retention, Referral, Revenue framework for growth optimization.",
    icon: TrendingUp,
    applications: ["Growth tracking", "Funnel optimization", "Performance measurement", "Strategic planning"]
  },
  {
    title: "Jobs-to-be-Done",
    description: "Understanding the fundamental jobs users hire your product to accomplish.",
    icon: Target,
    applications: ["User motivation", "Feature prioritization", "Journey design", "Value proposition"]
  },
  {
    title: "Behavioral Design",
    description: "Using behavioral psychology principles to design more effective user experiences.",
    icon: Zap,
    applications: ["Habit formation", "Motivation triggers", "Friction reduction", "Engagement design"]
  },
  {
    title: "Customer Journey Analytics",
    description: "Data-driven approach to understanding and optimizing user behavior patterns.",
    icon: BarChart3,
    applications: ["Behavior tracking", "Conversion analysis", "Segmentation", "Personalization"]
  }
]

// Benefits of journey optimization
const journeyBenefits = [
  {
    title: "Higher Conversion Rates",
    description: "Optimized journeys that guide users toward desired actions more effectively.",
    icon: TrendingUp,
    impact: "40-60% increase in conversions"
  },
  {
    title: "Improved User Activation",
    description: "Get users to their 'aha moment' faster and increase product adoption.",
    icon: Zap,
    impact: "50-75% improvement in activation"
  },
  {
    title: "Reduced Churn",
    description: "Better onboarding and engagement leads to higher user retention rates.",
    icon: Users,
    impact: "30-50% reduction in churn"
  },
  {
    title: "Faster Time-to-Value",
    description: "Streamlined journeys that help users realize value from your product quickly.",
    icon: Clock,
    impact: "40-60% faster time-to-value"
  },
  {
    title: "Increased Revenue",
    description: "Better user journeys directly translate to improved business metrics and growth.",
    icon: Rocket,
    impact: "25-40% revenue increase"
  },
  {
    title: "Enhanced User Satisfaction",
    description: "Smoother experiences that delight users and build long-term loyalty.",
    icon: CheckCircle,
    impact: "60-80% satisfaction improvement"
  }
]

export default function UserJourneysPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-48 pb-20 overflow-hidden">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6">
              <Map className="w-4 h-4" />
              <span className="text-sm font-medium">User Journey Services</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6">
              Optimize Every Step
              <span className="block bg-gradient-to-r from-primary via-brand-blue to-primary bg-clip-text text-transparent">
                Of The User Journey
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8">
              From first impression to long-term engagement, we design and optimize user journeys that convert visitors into loyal customers. Every touchpoint is crafted to drive action and deliver value.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                Optimize Your Journeys
              </button>
              <button className="px-6 py-3 border border-border rounded-lg text-sm font-medium hover:bg-muted/50 transition-colors">
                View Journey Examples
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
              Our User Journey Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive journey optimization services to maximize conversions and create exceptional user experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceOfferings.map((service, index) => {
              const ServiceIcon = service.icon
              return (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30">
                    <CardHeader>
                      <div className="p-3 rounded-lg bg-primary/10 w-fit mb-3 group-hover:bg-primary/15 transition-colors">
                        <ServiceIcon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{service.name}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Journey Frameworks Section */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
              Journey Optimization Frameworks
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Proven frameworks and methodologies to design and optimize user journeys for maximum impact.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {journeyFrameworks.map((framework, index) => {
              const FrameworkIcon = framework.icon
              return (
                <motion.div
                  key={framework.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full border-border/50">
                    <CardHeader>
                      <div className="p-3 rounded-lg bg-primary/10 w-fit mb-3">
                        <FrameworkIcon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{framework.title}</CardTitle>
                      <CardDescription className="text-sm leading-relaxed">
                        {framework.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1">
                        {framework.applications.map((application) => (
                          <li key={application} className="text-xs text-muted-foreground">
                            • {application}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Journey Process Section */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
              Our Journey Optimization Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A systematic approach to analyzing, designing, and optimizing user journeys for maximum conversion and engagement.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {journeyProcess.map((step, index) => {
              const StepIcon = step.icon
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <Card className="h-full border-border/50">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                          {step.step}
                        </div>
                        <StepIcon className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{step.title}</CardTitle>
                      <CardDescription className="text-sm leading-relaxed">
                        {step.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-1">
                        <p className="text-xs font-medium text-muted-foreground mb-2">Deliverables:</p>
                        {step.deliverables.map((deliverable) => (
                          <p key={deliverable} className="text-xs text-muted-foreground">
                            • {deliverable}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Connection line to next step */}
                  {index < journeyProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-border/50" />
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
              Benefits of Journey Optimization
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Optimized user journeys create measurable business impact through improved conversions and user satisfaction.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {journeyBenefits.map((benefit, index) => {
              const BenefitIcon = benefit.icon
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full border-border/50">
                    <CardHeader>
                      <div className="p-3 rounded-lg bg-primary/10 w-fit mb-3">
                        <BenefitIcon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{benefit.title}</CardTitle>
                      <CardDescription className="text-sm leading-relaxed mb-3">
                        {benefit.description}
                      </CardDescription>
                      <div className="text-xs font-medium text-primary">
                        {benefit.impact}
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
              User Journey Case Studies
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real journey optimization projects that delivered significant improvements in conversion and user engagement.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-border/50 hover:border-primary/30 h-full">
                  {/* Case Study Image */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/5 to-brand-blue/5">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <ArrowUpRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    {/* Placeholder for case study image */}
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-2 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Map className="w-8 h-8 text-primary" />
                        </div>
                        <p className="text-sm">Journey Case Study</p>
                      </div>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {study.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {study.summary}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {study.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-xs font-medium text-muted-foreground">Key Results:</p>
                      {study.metrics.map((metric) => (
                        <p key={metric} className="text-xs text-muted-foreground flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                          {metric}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-4">
              Trusted by Leading Companies
            </h2>
            <p className="text-muted-foreground">
              We&apos;ve optimized user journeys for innovative companies across various industries.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative py-6 min-h-[60px] flex items-center"
          >
            <InfiniteSlider
              duration={40}
              gap={112}
            >
              <div className="logo-container">
                <Image
                  className="mx-auto h-5 w-fit dark:invert object-contain"
                  src="/images/logos/seppo.webp"
                  alt="Seppo Logo"
                  height={19}
                  width={120}
                  loading="lazy"
                />
              </div>
              
              <div className="logo-container">
                <Image
                  className="mx-auto h-7 w-fit dark:invert object-contain"
                  src="/images/logos/elisa.webp"
                  alt="Elisa Logo"
                  height={28}
                  width={140}
                  loading="lazy"
                />
              </div>

              <div className="logo-container">
                <Image
                  className="mx-auto h-6 w-fit dark:invert object-contain"
                  src="/images/logos/paytrail-png.webp"
                  alt="Paytrail Logo"
                  height={22}
                  width={132}
                  loading="lazy"
                />
              </div>

              <div className="logo-container">
                <Image
                  className="mx-auto h-4 w-fit dark:invert object-contain"
                  src="/images/logos/kamux-png.webp"
                  alt="Kamux Logo"
                  height={16}
                  width={100}
                  loading="lazy"
                />
              </div>

              <div className="logo-container">
                <Image
                  className="mx-auto h-5 w-fit dark:invert object-contain"
                  src="/images/logos/gebwell-png.webp"
                  alt="Gebwell Logo"
                  height={20}
                  width={120}
                  loading="lazy"
                />
              </div>

              <div className="logo-container">
                <Image
                  className="mx-auto h-6 w-fit dark:invert object-contain"
                  src="/images/logos/groweo-png.webp"
                  alt="Groweo Logo"
                  height={24}
                  width={120}
                  loading="lazy"
                />
              </div>
            </InfiniteSlider>

            {/* Fade effects for smooth edges */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent"></div>
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent"></div>
            <ProgressiveBlur
              className="pointer-events-none absolute left-0 top-0 h-full w-20"
              direction="left"
              blurIntensity={1}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute right-0 top-0 h-full w-20"
              direction="right"
              blurIntensity={1}
            />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <BookAMeetingSection />
    </div>
  )
} 