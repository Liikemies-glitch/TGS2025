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
  Search, 
  UserCheck, 
  Map, 
  Users,
  BarChart3,
  MessageSquare,
  Eye,
  Target,
  Brain,
  Lightbulb,
  ArrowUpRight,
  CheckCircle,
  Clock,
  TrendingUp
} from "lucide-react"

// Service offerings data
const serviceOfferings = [
  {
    name: "User Interviews",
    description: "In-depth one-on-one conversations with users to understand their needs, motivations, and pain points.",
    icon: MessageSquare,
    features: ["Structured interview guides", "Remote & in-person sessions", "Detailed insights reports", "Video recordings & transcripts"]
  },
  {
    name: "Usability Testing",
    description: "Observe users interacting with your product to identify usability issues and optimization opportunities.",
    icon: Eye,
    features: ["Task-based testing", "Think-aloud protocols", "Heatmap analysis", "Performance metrics"]
  },
  {
    name: "User Persona Development",
    description: "Create detailed user personas based on real data and research insights to guide design decisions.",
    icon: UserCheck,
    features: ["Data-driven personas", "Behavioral patterns", "Goals & motivations", "Journey touchpoints"]
  },
  {
    name: "Journey Mapping",
    description: "Visual representations of user interactions across all touchpoints to identify improvement opportunities.",
    icon: Map,
    features: ["End-to-end journeys", "Emotion mapping", "Pain point identification", "Opportunity areas"]
  },
  {
    name: "Surveys & Analytics",
    description: "Quantitative research methods to gather insights from larger user groups and validate hypotheses.",
    icon: BarChart3,
    features: ["Custom survey design", "Statistical analysis", "Behavioral analytics", "A/B testing insights"]
  },
  {
    name: "Competitive Research",
    description: "Analyze competitor products and market trends to identify opportunities and best practices.",
    icon: TrendingUp,
    features: ["Feature comparison", "UX benchmarking", "Market positioning", "Trend analysis"]
  }
]

// Research process steps
const researchProcess = [
  {
    step: "01",
    title: "Research Planning",
    description: "Define research objectives, select appropriate methods, and create a comprehensive research plan.",
    icon: Target,
    deliverables: ["Research objectives", "Method selection", "Participant criteria", "Timeline & budget"]
  },
  {
    step: "02",
    title: "Data Collection",
    description: "Execute research activities using various methods to gather both qualitative and quantitative insights.",
    icon: Search,
    deliverables: ["Interview recordings", "Survey responses", "Usability test videos", "Analytics data"]
  },
  {
    step: "03",
    title: "Analysis & Synthesis",
    description: "Analyze collected data to identify patterns, themes, and actionable insights for your product.",
    icon: Brain,
    deliverables: ["Data analysis", "Pattern identification", "Key insights", "User segments"]
  },
  {
    step: "04",
    title: "Insights & Recommendations",
    description: "Present findings with clear recommendations and actionable next steps for product improvement.",
    icon: Lightbulb,
    deliverables: ["Research report", "Actionable recommendations", "Persona profiles", "Journey maps"]
  }
]

// Case studies specific to User Research
const caseStudies = [
  {
    id: 1,
    title: "SaaS Onboarding Research",
    summary: "Conducted comprehensive user research that led to a 65% improvement in onboarding completion rates.",
    image: "/images/case-studies/user-research.jpg",
    tags: ["User Interviews", "Usability Testing", "Journey Mapping"],
    metrics: ["65% improvement in onboarding completion", "40% reduction in time-to-value", "85% user satisfaction increase"]
  },
  {
    id: 2,
    title: "E-commerce User Behavior Study",
    summary: "Deep-dive research into shopping behaviors that increased conversion rates by 45% across all channels.",
    image: "/images/case-studies/ecommerce-research.jpg",
    tags: ["User Personas", "Behavioral Analytics", "A/B Testing"],
    metrics: ["45% increase in conversion rate", "30% higher average order value", "60% improvement in user retention"]
  },
  {
    id: 3,
    title: "B2B Platform User Research",
    summary: "Comprehensive research program that informed product strategy and improved user satisfaction by 70%.",
    image: "/images/case-studies/b2b-research.jpg",
    tags: ["User Interviews", "Competitive Research", "Feature Validation"],
    metrics: ["70% improvement in user satisfaction", "50% reduction in support tickets", "35% increase in feature adoption"]
  }
]

// Research methods
const researchMethods = [
  {
    title: "Qualitative Research",
    description: "Deep insights into user motivations, behaviors, and experiences through direct interaction.",
    icon: MessageSquare,
    methods: ["User interviews", "Focus groups", "Usability testing", "Ethnographic studies"]
  },
  {
    title: "Quantitative Research",
    description: "Statistical data and metrics to validate hypotheses and measure user behavior at scale.",
    icon: BarChart3,
    methods: ["Surveys", "Analytics", "A/B testing", "Heat mapping"]
  },
  {
    title: "Mixed Methods",
    description: "Combining qualitative and quantitative approaches for comprehensive understanding.",
    icon: Brain,
    methods: ["Sequential studies", "Triangulation", "Validation research", "Longitudinal studies"]
  },
  {
    title: "Remote Research",
    description: "Flexible research methods that can be conducted remotely to reach diverse user groups.",
    icon: Users,
    methods: ["Remote interviews", "Unmoderated testing", "Online surveys", "Digital ethnography"]
  }
]

export default function UserResearchPage() {
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
              <Search className="w-4 h-4" />
              <span className="text-sm font-medium">User Research Services</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6">
              Understand Your Users
              <span className="block bg-gradient-to-r from-primary via-brand-blue to-primary bg-clip-text text-transparent">
                Drive Better Decisions
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8">
              Data-driven insights that inform design decisions and validate product assumptions. We help you understand your users deeply to create products they truly need and love.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                Start Research Project
              </button>
              <button className="px-6 py-3 border border-border rounded-lg text-sm font-medium hover:bg-muted/50 transition-colors">
                View Research Examples
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
              Our User Research Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive research services to uncover user insights and validate product decisions with real data.
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

      {/* Research Methods Section */}
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
              Research Methods We Use
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We employ a variety of research methods to gather comprehensive insights about your users and their needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchMethods.map((method, index) => {
              const MethodIcon = method.icon
              return (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full border-border/50">
                    <CardHeader>
                      <div className="p-3 rounded-lg bg-primary/10 w-fit mb-3">
                        <MethodIcon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{method.title}</CardTitle>
                      <CardDescription className="text-sm leading-relaxed">
                        {method.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1">
                        {method.methods.map((methodItem) => (
                          <li key={methodItem} className="text-xs text-muted-foreground">
                            • {methodItem}
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

      {/* Research Process Section */}
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
              Our Research Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A systematic approach to user research that ensures reliable insights and actionable recommendations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchProcess.map((step, index) => {
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
                  {index < researchProcess.length - 1 && (
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
              Why User Research Matters
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              User research provides the foundation for making informed product decisions and creating experiences that truly resonate with your audience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Reduce Risk",
                description: "Validate ideas before development to avoid costly mistakes and ensure product-market fit.",
                icon: Target,
                stat: "70% reduction in failed features"
              },
              {
                title: "Improve User Satisfaction",
                description: "Create products that truly meet user needs and exceed their expectations.",
                icon: Users,
                stat: "85% increase in user satisfaction"
              },
              {
                title: "Increase Conversion",
                description: "Optimize user flows and remove friction points to improve conversion rates.",
                icon: TrendingUp,
                stat: "40% average conversion improvement"
              },
              {
                title: "Save Development Time",
                description: "Focus development efforts on features that users actually want and need.",
                icon: Clock,
                stat: "50% faster development cycles"
              },
              {
                title: "Data-Driven Decisions",
                description: "Replace assumptions with real user insights to guide product strategy.",
                icon: BarChart3,
                stat: "90% more confident decisions"
              },
              {
                title: "Competitive Advantage",
                description: "Understand your market and users better than your competitors.",
                icon: Eye,
                stat: "3x better market positioning"
              }
            ].map((benefit, index) => {
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
                        {benefit.stat}
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
              User Research Case Studies
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real research projects that delivered actionable insights and measurable business impact.
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
                          <Search className="w-8 h-8 text-primary" />
                        </div>
                        <p className="text-sm">Research Study</p>
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
              We&apos;ve conducted research for innovative companies across various industries.
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