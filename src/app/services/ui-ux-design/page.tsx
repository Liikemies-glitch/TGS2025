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
  Palette, 
  BarChart3, 
  Users, 
  Layers, 
  GitBranch, 
  Smartphone,
  Monitor,
  Zap,
  Eye,
  ArrowUpRight,
  CheckCircle,
  Clock,
  Target
} from "lucide-react"

// Service offerings data
const serviceOfferings = [
  {
    name: "Dashboard Design",
    description: "Data-driven interfaces that make complex information accessible and actionable for better decision-making.",
    icon: BarChart3,
    features: ["Real-time data visualization", "Interactive charts & graphs", "Custom KPI displays", "Mobile-responsive layouts"]
  },
  {
    name: "User Experience Design",
    description: "End-to-end UX design focused on user needs and business objectives to drive engagement and conversion.",
    icon: Users,
    features: ["User journey mapping", "Wireframing & prototyping", "Usability testing", "Information architecture"]
  },
  {
    name: "Design Systems",
    description: "Scalable design systems that ensure consistency across all touchpoints and accelerate development.",
    icon: Layers,
    features: ["Component libraries", "Style guides", "Design tokens", "Documentation & guidelines"]
  },
  {
    name: "User Flow Optimization",
    description: "Optimized user journeys that guide users toward their goals efficiently and reduce friction.",
    icon: GitBranch,
    features: ["Conversion optimization", "A/B testing design", "User path analysis", "Onboarding flows"]
  },
  {
    name: "Mobile App Design",
    description: "Native and responsive mobile experiences that work seamlessly across all devices and platforms.",
    icon: Smartphone,
    features: ["iOS & Android design", "Progressive web apps", "Touch interactions", "Offline functionality"]
  },
  {
    name: "Web Application Design",
    description: "Modern web applications with intuitive interfaces that scale with your business needs.",
    icon: Monitor,
    features: ["SaaS platforms", "Admin panels", "E-commerce interfaces", "Landing pages"]
  }
]

// Process steps
const designProcess = [
  {
    step: "01",
    title: "Discovery & Research",
    description: "We start by understanding your users, business goals, and technical constraints through comprehensive research.",
    icon: Eye,
    deliverables: ["User research findings", "Competitive analysis", "Technical requirements", "Project roadmap"]
  },
  {
    step: "02",
    title: "Strategy & Planning",
    description: "Define the design strategy, information architecture, and user flows that will guide the entire project.",
    icon: Target,
    deliverables: ["Design strategy", "Information architecture", "User flow diagrams", "Feature prioritization"]
  },
  {
    step: "03",
    title: "Design & Prototyping",
    description: "Create high-fidelity designs and interactive prototypes that bring your vision to life.",
    icon: Palette,
    deliverables: ["High-fidelity mockups", "Interactive prototypes", "Design specifications", "Asset library"]
  },
  {
    step: "04",
    title: "Testing & Iteration",
    description: "Validate designs through user testing and iterate based on feedback to ensure optimal user experience.",
    icon: Zap,
    deliverables: ["Usability test results", "Design iterations", "Final designs", "Handoff documentation"]
  }
]

// Case studies specific to UI/UX Design
const caseStudies = [
  {
    id: 1,
    title: "SaaS Analytics Dashboard",
    summary: "Redesigned a complex analytics platform, improving user engagement by 40% and reducing support tickets by 60%.",
    image: "/images/case-studies/dashboard-redesign.jpg",
    tags: ["Dashboard Design", "Data Visualization", "User Experience"],
    metrics: ["40% increase in user engagement", "60% reduction in support tickets", "25% faster task completion"]
  },
  {
    id: 2,
    title: "E-commerce Mobile App",
    summary: "Created a mobile-first shopping experience that increased conversion rates by 35% and improved user retention.",
    image: "/images/case-studies/mobile-app.jpg",
    tags: ["Mobile Design", "User Experience", "Conversion Optimization"],
    metrics: ["35% increase in conversion rate", "50% improvement in user retention", "4.8/5 app store rating"]
  },
  {
    id: 3,
    title: "B2B Platform Redesign",
    summary: "Transformed a complex B2B platform with a comprehensive design system, reducing development time by 50%.",
    image: "/images/case-studies/design-system.jpg",
    tags: ["Design Systems", "B2B Platform", "Component Library"],
    metrics: ["50% faster development", "90% design consistency", "30% reduction in bugs"]
  }
]

// Benefits of working with us
const benefits = [
  {
    title: "User-Centered Approach",
    description: "Every design decision is backed by user research and data to ensure optimal user experience.",
    icon: Users
  },
  {
    title: "Scalable Solutions",
    description: "We build design systems and components that grow with your business and team.",
    icon: Layers
  },
  {
    title: "Fast Delivery",
    description: "Efficient design process with regular check-ins and rapid iterations to meet your deadlines.",
    icon: Clock
  },
  {
    title: "Proven Results",
    description: "Track record of improving key metrics like conversion rates, user engagement, and satisfaction.",
    icon: CheckCircle
  }
]

export default function UIUXDesignPage() {
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
              <Palette className="w-4 h-4" />
              <span className="text-sm font-medium">UI/UX Design Services</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6">
              Design Experiences
              <span className="block bg-gradient-to-r from-primary via-brand-blue to-primary bg-clip-text text-transparent">
                Users Love
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8">
              We create intuitive, beautiful, and conversion-focused designs that drive business results. From dashboards to mobile apps, we design experiences that users love and businesses need.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                Start Your Project
              </button>
              <button className="px-6 py-3 border border-border rounded-lg text-sm font-medium hover:bg-muted/50 transition-colors">
                View Our Work
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
              Our UI/UX Design Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive design services to transform your digital products and create exceptional user experiences.
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

      {/* Design Process Section */}
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
              Our Design Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures every project delivers exceptional results and meets your business objectives.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designProcess.map((step, index) => {
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
                  {index < designProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-border/50" />
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Choose Our UI/UX Design Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine creativity with data-driven insights to deliver designs that not only look great but drive real business results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const BenefitIcon = benefit.icon
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="p-4 rounded-xl bg-primary/10 w-fit mx-auto mb-4">
                    <BenefitIcon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
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
              UI/UX Design Case Studies
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real projects, real results. See how our UI/UX design expertise has transformed businesses and improved user experiences.
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
                          <Palette className="w-8 h-8 text-primary" />
                        </div>
                        <p className="text-sm">Case Study Image</p>
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
      <section className="py-20">
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
              We&apos;ve designed exceptional experiences for innovative companies across industries.
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