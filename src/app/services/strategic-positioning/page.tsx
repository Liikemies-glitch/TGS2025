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
  Target, 
  Zap, 
  Users,
  TrendingUp,
  Eye,
  ArrowUpRight,
  CheckCircle,
  Rocket,
  MessageSquare
} from "lucide-react"

// Service offerings data
const serviceOfferings = [
  {
    name: "Product Positioning",
    description: "Strategic positioning that differentiates your product in the market and resonates with your target audience.",
    icon: Target,
    features: ["Market analysis", "Competitive positioning", "Value proposition design", "Positioning statements"]
  },
  {
    name: "Market Differentiation",
    description: "Identify and leverage unique value propositions that set your product apart from competitors.",
    icon: MessageSquare,
    features: ["Competitive analysis", "Unique selling points", "Feature differentiation", "Brand positioning"]
  },
  {
    name: "Value Proposition Design",
    description: "Clear, compelling value propositions that communicate your product's benefits to target customers.",
    icon: MessageSquare,
    features: ["Customer job mapping", "Pain point analysis", "Gain creator identification", "Value canvas design"]
  },
  {
    name: "Messaging Framework",
    description: "Consistent messaging that communicates your value across all channels and touchpoints.",
    icon: MessageSquare,
    features: ["Core messaging", "Channel-specific content", "Tone of voice", "Communication guidelines"]
  },
  {
    name: "Go-to-Market Strategy",
    description: "Comprehensive strategy for launching and scaling your product in the target market.",
    icon: Rocket,
    features: ["Market entry strategy", "Channel strategy", "Pricing strategy", "Launch planning"]
  },
  {
    name: "Brand Strategy",
    description: "Build a strong brand identity that supports your product positioning and business goals.",
    icon: MessageSquare,
    features: ["Brand identity", "Brand guidelines", "Visual strategy", "Brand architecture"]
  }
]

// Strategic process steps
const strategicProcess = [
  {
    step: "01",
    title: "Market Analysis",
    description: "Deep dive into your market, competitors, and target audience to understand the landscape.",
    icon: Eye,
    deliverables: ["Market research", "Competitive analysis", "Customer insights", "Opportunity mapping"]
  },
  {
    step: "02",
    title: "Strategic Planning",
    description: "Develop positioning strategy based on market insights and business objectives.",
    icon: Target,
    deliverables: ["Positioning strategy", "Value proposition", "Differentiation plan", "Strategic roadmap"]
  },
  {
    step: "03",
    title: "Message Development",
    description: "Create compelling messaging that communicates your unique value to target audiences.",
    icon: MessageSquare,
    deliverables: ["Messaging framework", "Key messages", "Content strategy", "Communication guidelines"]
  },
  {
    step: "04",
    title: "Implementation & Optimization",
    description: "Execute positioning strategy and continuously optimize based on market feedback.",
    icon: Zap,
    deliverables: ["Implementation plan", "Performance metrics", "Optimization recommendations", "Success tracking"]
  }
]

// Case studies specific to Strategic Positioning
const caseStudies = [
  {
    id: 1,
    title: "B2B SaaS Repositioning",
    summary: "Repositioned a B2B software product, resulting in 60% increase in qualified leads and 40% higher conversion rates.",
    image: "/images/case-studies/product-positioning.jpg",
    tags: ["Product Positioning", "Messaging Framework", "Market Differentiation"],
    metrics: ["60% increase in qualified leads", "40% higher conversion rate", "3x improvement in brand recognition"]
  },
  {
    id: 2,
    title: "Startup Market Entry",
    summary: "Developed go-to-market strategy for a fintech startup, achieving 200% growth in first year.",
    image: "/images/case-studies/startup-positioning.jpg",
    tags: ["Go-to-Market Strategy", "Value Proposition", "Brand Strategy"],
    metrics: ["200% growth in first year", "50% market share in niche", "85% customer satisfaction"]
  },
  {
    id: 3,
    title: "E-commerce Brand Differentiation",
    summary: "Created unique positioning for e-commerce platform, increasing market share by 35% in competitive space.",
    image: "/images/case-studies/brand-differentiation.jpg",
    tags: ["Market Differentiation", "Brand Strategy", "Competitive Positioning"],
    metrics: ["35% increase in market share", "70% improvement in brand recall", "45% higher customer lifetime value"]
  }
]

// Strategic frameworks
const strategicFrameworks = [
  {
    title: "Value Proposition Canvas",
    description: "Map customer jobs, pains, and gains to create compelling value propositions.",
    icon: Target,
    applications: ["Product-market fit", "Feature prioritization", "Customer segmentation", "Value communication"]
  },
  {
    title: "Positioning Map",
    description: "Visual representation of competitive landscape and positioning opportunities.",
    icon: Target,
    applications: ["Competitive analysis", "Market gaps", "Positioning strategy", "Differentiation planning"]
  },
  {
    title: "Jobs-to-be-Done",
    description: "Understand the fundamental jobs customers hire your product to do.",
    icon: Users,
    applications: ["Customer insights", "Innovation opportunities", "Market segmentation", "Product development"]
  },
  {
    title: "Blue Ocean Strategy",
    description: "Create uncontested market space by making competition irrelevant.",
    icon: TrendingUp,
    applications: ["Market creation", "Value innovation", "Strategic differentiation", "Growth strategy"]
  }
]

// Benefits of strategic positioning
const strategicBenefits = [
  {
    title: "Market Leadership",
    description: "Establish your product as the go-to solution in your category or niche market.",
    icon: TrendingUp,
    impact: "3x higher brand recognition"
  },
  {
    title: "Premium Pricing",
    description: "Command higher prices through clear differentiation and perceived value.",
    icon: TrendingUp,
    impact: "25-40% price premium"
  },
  {
    title: "Faster Growth",
    description: "Accelerate customer acquisition through clear, compelling positioning.",
    icon: Rocket,
    impact: "2x faster customer acquisition"
  },
  {
    title: "Reduced Competition",
    description: "Create unique market position that's difficult for competitors to replicate.",
    icon: Target,
    impact: "60% less direct competition"
  },
  {
    title: "Customer Loyalty",
    description: "Build stronger customer relationships through clear value communication.",
    icon: Users,
    impact: "50% higher customer retention"
  },
  {
    title: "Team Alignment",
    description: "Align your entire organization around a clear strategic direction.",
    icon: Users,
    impact: "80% improvement in team alignment"
  }
]

export default function StrategicPositioningPage() {
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
              <Target className="w-4 h-4" />
              <span className="text-sm font-medium">Strategic Positioning Services</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6">
              Position for
              <span className="block bg-gradient-to-r from-primary via-brand-blue to-primary bg-clip-text text-transparent">
                Market Success
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8">
              Strategic positioning that differentiates your product, communicates clear value, and drives sustainable growth. We help you find your unique market position and communicate it effectively.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                Start Strategic Planning
              </button>
              <button className="px-6 py-3 border border-border rounded-lg text-sm font-medium hover:bg-muted/50 transition-colors">
                View Success Stories
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
              Our Strategic Positioning Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive strategic services to position your product for market success and sustainable growth.
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

      {/* Strategic Frameworks Section */}
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
              Strategic Frameworks We Use
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Proven frameworks and methodologies to develop effective positioning strategies and drive business results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strategicFrameworks.map((framework, index) => {
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

      {/* Strategic Process Section */}
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
              Our Strategic Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A systematic approach to strategic positioning that ensures market-driven results and sustainable competitive advantage.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {strategicProcess.map((step, index) => {
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
                  {index < strategicProcess.length - 1 && (
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
              Benefits of Strategic Positioning
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Strategic positioning creates sustainable competitive advantages and drives long-term business success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strategicBenefits.map((benefit, index) => {
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
              Strategic Positioning Case Studies
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real strategic positioning projects that delivered measurable business impact and market success.
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
                          <Target className="w-8 h-8 text-primary" />
                        </div>
                        <p className="text-sm">Strategic Case Study</p>
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
              We&apos;ve helped innovative companies achieve strategic market positioning and sustainable growth.
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