'use client'

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookAMeetingSection } from "@/components/blocks/book-a-meeting-section"
import { InfiniteSlider } from "@/components/ui/infinite-slider"
import { ProgressiveBlur } from "@/components/ui/progressive-blur"
import { 
  Palette, 
  Search, 
  Target, 
  Map,
  ArrowUpRight,
  Settings,
  Layers,
  ArrowRight
} from "lucide-react"

// Service categories data for linked boxes
const serviceCategories = [
  {
    title: "UI/UX Design",
    description: "Create intuitive and beautiful user experiences that drive engagement and conversion.",
    icon: Palette,
    href: "/services/ui-ux-design",
    features: ["Dashboard Design", "User Experience Design", "Design Systems", "User Flow Optimization"]
  },
  {
    title: "User Research",
    description: "Data-driven insights that inform design decisions and validate product assumptions.",
    icon: Search,
    href: "/services/user-research",
    features: ["User Interviews", "Usability Testing", "Persona Development", "Journey Mapping"]
  },
  {
    title: "Strategic Positioning",
    description: "Position your product for market success through strategic design and messaging.",
    icon: Target,
    href: "/services/strategic-positioning",
    features: ["Product Positioning", "Market Differentiation", "Value Proposition", "Messaging Framework"]
  },
  {
    title: "User Journeys",
    description: "Optimize every touchpoint from landing pages to user activation and beyond.",
    icon: Map,
    href: "/services/user-journeys",
    features: ["Landing Page Optimization", "User Onboarding", "User Activation", "Conversion Funnels"]
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
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8">
              We support you end-to-end in developing your SaaS product - from UI design and user flows to strategic product positioning.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                Get Started
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
          <div className="grid md:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => {
              const CategoryIcon = category.icon
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link href={category.href}>
                    <Card className="h-full group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 cursor-pointer">
                      {/* Card Header with Consistent Top Bar */}
                      <div className="relative p-6 bg-muted/20 border-b border-border/50">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-4">
                            <div className="p-3 rounded-xl bg-background/80 backdrop-blur-sm border border-border/50 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-300">
                              <CategoryIcon className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                                {category.title}
                              </h3>
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                {category.description}
                              </p>
                            </div>
                          </div>
                          <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                        </div>
                      </div>

                      {/* Card Content */}
                      <CardContent className="p-6">
                        <div className="space-y-3">
                          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                            Key Services
                          </p>
                          <div className="grid grid-cols-2 gap-2">
                            {category.features.map((feature) => (
                              <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                                {feature}
                              </div>
                            ))}
                          </div>
                          
                          <div className="pt-4 flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all duration-300">
                            Learn more
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
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
      <BookAMeetingSection />
    </div>
  )
} 