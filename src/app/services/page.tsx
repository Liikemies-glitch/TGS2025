'use client'

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CTASection } from "@/components/blocks/cta-section"
import { InfiniteSlider } from "@/components/ui/infinite-slider"
import { ProgressiveBlur } from "@/components/ui/progressive-blur"
import { cn } from "@/lib/utils"
import { 
  Palette, 
  BarChart3, 
  Users, 
  Layers, 
  GitBranch, 
  Search, 
  UserCheck, 
  Map, 
  Target, 
  MessageSquare, 
  ArrowUpRight,
  Settings
} from "lucide-react"

// Service categories data
const serviceCategories = [
  {
    title: "UI/UX Design",
    description: "Creating intuitive and beautiful user experiences that drive engagement and conversion.",
    icon: Palette,
    services: [
      {
        name: "Dashboards",
        description: "Data-driven interfaces that make complex information accessible and actionable.",
        icon: BarChart3
      },
      {
        name: "User Experience",
        description: "End-to-end UX design focused on user needs and business objectives.",
        icon: Users
      },
      {
        name: "Design Systems",
        description: "Scalable design systems that ensure consistency across all touchpoints.",
        icon: Layers
      },
      {
        name: "User Flows",
        description: "Optimized user journeys that guide users toward their goals efficiently.",
        icon: GitBranch
      }
    ]
  },
  {
    title: "User Research",
    description: "Data-driven insights that inform design decisions and validate product assumptions.",
    icon: Search,
    services: [
      {
        name: "User Research",
        description: "Comprehensive user studies to understand behaviors, needs, and pain points.",
        icon: Search
      },
      {
        name: "Persona Development",
        description: "Detailed user personas based on real data and research insights.",
        icon: UserCheck
      },
      {
        name: "Journey Mapping",
        description: "Visual representations of user interactions across all touchpoints.",
        icon: Map
      }
    ]
  },
  {
    title: "Strategic Positioning",
    description: "Positioning your product for market success through strategic design and messaging.",
    icon: Target,
    services: [
      {
        name: "Product Positioning",
        description: "Strategic positioning that differentiates your product in the market.",
        icon: Target
      },
      {
        name: "Market Differentiation",
        description: "Identifying and leveraging unique value propositions.",
        icon: Settings
      },
      {
        name: "Value Proposition",
        description: "Clear, compelling value propositions that resonate with your target audience.",
        icon: MessageSquare
      },
      {
        name: "Messaging Framework",
        description: "Consistent messaging that communicates your value across all channels.",
        icon: MessageSquare
      }
    ]
  }
]

// Case studies data
const caseStudies = [
  {
    id: 1,
    title: "SaaS Dashboard Redesign",
    summary: "Transformed a complex analytics platform into an intuitive dashboard that increased user engagement by 40%.",
    image: "/images/case-studies/dashboard-redesign.jpg",
    tags: ["UI/UX Design", "Dashboards", "User Research"]
  },
  {
    id: 2,
    title: "E-commerce Mobile App",
    summary: "Designed a mobile-first shopping experience that improved conversion rates by 25%.",
    image: "/images/case-studies/mobile-app.jpg",
    tags: ["User Experience", "Mobile Design", "User Flows"]
  },
  {
    id: 3,
    title: "B2B Product Positioning",
    summary: "Repositioned a B2B software product, resulting in 60% increase in qualified leads.",
    image: "/images/case-studies/product-positioning.jpg",
    tags: ["Product Positioning", "Messaging Framework", "Market Differentiation"]
  },
  {
    id: 4,
    title: "Design System Implementation",
    summary: "Built a comprehensive design system that reduced design-to-development time by 50%.",
    image: "/images/case-studies/design-system.jpg",
    tags: ["Design Systems", "UI/UX Design", "Strategic Positioning"]
  }
]

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState(0)

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
              <Settings className="w-4 h-4" />
              <span className="text-sm font-medium">Our Services</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6">
              Build a SaaS Product
              <span className="block bg-gradient-to-r from-primary via-brand-blue to-primary bg-clip-text text-transparent">
                Users Love
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              We support you end-to-end in developing your SaaS product - from UI design and user flows to strategic product positioning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tabbed Services Section */}
      <section className="pt-8 pb-32">
        <div className="mx-auto max-w-6xl px-6">
          {/* Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8"
          >
            <div className="inline-flex items-center p-1 rounded-xl bg-muted/50 border border-border/50 backdrop-blur-sm">
              {serviceCategories.map((category, index) => {
                const IconComponent = category.icon
                return (
                  <button
                    key={category.title}
                    onClick={() => setActiveTab(index)}
                    className={cn(
                      "relative flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300",
                      activeTab === index 
                        ? 'bg-background text-foreground shadow-sm border border-border/50' 
                        : 'text-muted-foreground hover:text-foreground'
                    )}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span className="hidden sm:inline">{category.title}</span>
                    <span className="sm:hidden">{category.title.split(' ')[0]}</span>
                    
                    {/* Active indicator */}
                    {activeTab === index && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-background border border-border/50 rounded-lg shadow-sm"
                        style={{ zIndex: -1 }}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </button>
                )
              })}
            </div>
            
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
              I want more information
            </button>
          </motion.div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Content Container with App-like styling */}
            <div className="relative rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm overflow-hidden">
              {/* Header */}
              <div className="border-b border-border/50 bg-muted/20 px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                    {React.createElement(serviceCategories[activeTab].icon, { className: "w-5 h-5 text-primary" })}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{serviceCategories[activeTab].title}</h3>
                    <p className="text-sm text-muted-foreground">{serviceCategories[activeTab].description}</p>
                  </div>
                </div>
              </div>

              {/* Services Grid */}
              <div className="p-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {serviceCategories[activeTab].services.map((service, serviceIndex) => {
                    const ServiceIcon = service.icon
                    return (
                      <motion.div
                        key={service.name}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: serviceIndex * 0.1 }}
                      >
                        <Card className="h-full group hover:shadow-md transition-all duration-300 border-border/30 hover:border-primary/30 bg-background/50">
                          <CardHeader className="pb-3">
                            <div className="p-2 rounded-md bg-primary/5 w-fit mb-2 group-hover:bg-primary/10 transition-colors">
                              <ServiceIcon className="w-4 h-4 text-primary" />
                            </div>
                            <CardTitle className="text-base">{service.name}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <CardDescription className="text-xs leading-relaxed">
                              {service.description}
                            </CardDescription>
                          </CardContent>
                        </Card>
                      </motion.div>
                    )
                  })}
                </div>
              </div>

              {/* Bottom border fade */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
            </div>
          </motion.div>
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
              Case Studies
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real projects, real results. See how we&apos;ve helped companies transform their products and achieve their goals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-border/50 hover:border-primary/30">
                  {/* Case Study Image */}
                  <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/5 to-brand-blue/5">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <ArrowUpRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    {/* Placeholder for case study image */}
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-2 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Layers className="w-8 h-8 text-primary" />
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

                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-2">
                      {study.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
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
              We&apos;ve partnered with innovative companies to deliver exceptional results.
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

              <div className="logo-container">
                <Image
                  className="mx-auto h-5 w-fit dark:invert object-contain"
                  src="/images/logos/1001lakes-png.webp"
                  alt="1001 Lakes Logo"
                  height={20}
                  width={120}
                  loading="lazy"
                />
              </div>

              <div className="logo-container">
                <Image
                  className="mx-auto h-auto w-fit dark:invert object-contain"
                  src="/images/logos/prospectum.png"
                  alt="Prospectum Logo"
                  height={20}
                  width={120}
                  loading="lazy"
                />
              </div>

              <div className="logo-container">
                <Image
                  className="mx-auto h-4 w-fit dark:invert object-contain"
                  src="/images/logos/minnalearn-png.webp"
                  alt="MinnaLearn Logo"
                  height={16}
                  width={100}
                  loading="lazy"
                />
              </div>
              
              <div className="logo-container">
                <Image
                  className="mx-auto h-4 w-fit dark:invert object-contain"
                  src="/images/logos/evolver.webp"
                  alt="Evolver Logo"
                  height={16}
                  width={100}
                  loading="lazy"
                />
              </div>
              
              <div className="logo-container">
                <Image
                  className="mx-auto h-5 w-fit dark:invert object-contain"
                  src="/images/logos/akamon.webp"
                  alt="Akamon Logo"
                  height={20}
                  width={120}
                  loading="lazy"
                />
              </div>
              
              <div className="logo-container">
                <Image
                  className="mx-auto h-5 w-fit dark:invert object-contain"
                  src="/images/logos/eemel.png"
                  alt="Eemel Logo"
                  height={20}
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
      <CTASection />
    </div>
  )
} 