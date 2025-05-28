'use client'

import * as React from 'react'
import { useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Sparkles, Target, Users, ArrowUpRight } from 'lucide-react'
import Cal, { getCalApi } from "@calcom/embed-react"

// Animated Sparkles Component
const AnimatedSparkles = () => {
  return (
    <div className="relative w-4 h-4">
      {/* Main sparkle */}
      <motion.div
        className="absolute inset-0"
        animate={{
          rotate: [0, 0, 360, 360],
          scale: [1, 1.2, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.3, 0.7, 1]
        }}
      >
        <Sparkles className="h-4 w-4" />
      </motion.div>
      
      {/* Floating sparkle dots */}
      <motion.div
        className="absolute -top-1 -right-1 w-1 h-1 bg-primary rounded-full"
        animate={{
          opacity: [0, 1, 0],
          scale: [0, 1, 0],
          y: [0, -4, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 0.5,
          ease: "easeOut"
        }}
      />
      
      <motion.div
        className="absolute -bottom-1 -left-1 w-0.5 h-0.5 bg-primary rounded-full"
        animate={{
          opacity: [0, 1, 0],
          scale: [0, 1.5, 0],
          x: [0, -3, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          delay: 1,
          ease: "easeOut"
        }}
      />
      
      <motion.div
        className="absolute top-0 -left-2 w-0.5 h-0.5 bg-primary rounded-full"
        animate={{
          opacity: [0, 1, 0],
          scale: [0, 1, 0],
          x: [0, -2, 0],
          y: [0, -2, 0],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          delay: 1.5,
          ease: "easeOut"
        }}
      />
    </div>
  )
}

export function CTASection() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"cumucore-ux-research-interview"});
      cal("ui", {
        "cssVarsPerTheme": {
          "light": {"cal-brand": "#3b82f6", "cal-brand-emphasis": "#2563eb"}, 
          "dark": {"cal-brand": "#60a5fa", "cal-brand-emphasis": "#3b82f6"}
        },
        "hideEventTypeDetails": true,
        "layout": "month_view"
      });
    })();
  }, [])

  return (
    <section className="relative w-full overflow-hidden bg-background">
      {/* Reduced top fade since testimonials section now has bottom fade */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom, 
            hsl(var(--background)) 0%, 
            hsl(var(--background) / 0.9) 10%, 
            hsl(var(--background) / 0.7) 20%, 
            hsl(var(--background) / 0.5) 30%, 
            hsl(var(--background) / 0.3) 40%, 
            hsl(var(--background) / 0.1) 50%, 
            transparent 60%
          )`
        }}
      />

      <motion.div 
        className="relative container mx-auto px-4 py-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ 
          duration: 1.5,
          ease: "easeOut",
          delay: 0.3
        }}
      >
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary">
            <AnimatedSparkles />
            <span className="text-sm font-medium">Ready to Get Started?</span>
          </div>
          
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
            Let&apos;s Build Something
            <span className="block bg-gradient-to-r from-primary via-brand-blue to-primary bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Book a free consultation call and let&apos;s discuss how we can transform your ideas into reality. 
            No commitment, just pure value and insights.
          </p>
        </motion.div>

        {/* CTA Content Grid - Side by Side Layout */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Left Side - Benefits Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[800px] rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm overflow-hidden">
              {/* Fade-out borders */}
              <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-border/50 via-border/30 to-transparent" />
              <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-border/50 via-border/30 to-transparent" />
              
              <div className="p-8 h-full flex flex-col justify-between">
                {/* Mikki's Profile Section - compact, fully rounded, centered */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="flex justify-center mb-4"
                >
                  <div className="flex items-center gap-3 px-4 py-3 rounded-full border border-border/30">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/images/team/Mikki.jpeg" alt="Mikki Aalto-Ylevä" />
                      <AvatarFallback>MA</AvatarFallback>
                    </Avatar>
                    <h4 className="font-semibold text-foreground">Mikki Aalto-Ylevä</h4>
                  </div>
                </motion.div>

                {/* Main content area */}
                <div className="flex-1 flex flex-col justify-center">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-medium mb-4">Intro Meeting Agenda</h3>
                    <p className="text-muted-foreground">What we&apos;ll cover in our 1-hour consultation call</p>
                  </div>
                  
                  <div className="space-y-6 max-w-lg mx-auto w-full">
                    {[
                      {
                        title: "Your Current Situation",
                        description: "We&apos;ll discuss your current situation, goals and needs to understand exactly what you&apos;re looking to achieve",
                        icon: Target,
                        step: "1"
                      },
                      {
                        title: "The Good Side Offering",
                        description: "Learn about our solutions and how we can help transform your ideas into reality with our proven approach",
                        icon: Users,
                        step: "2"
                      },
                      {
                        title: "Next Steps Forward",
                        description: "If we&apos;re a good fit, we&apos;ll outline the next steps and how we can continue working together",
                        icon: ArrowUpRight,
                        step: "3"
                      }
                    ].map((benefit, index) => (
                      <motion.div 
                        key={index} 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                        className="flex items-start gap-4 p-4 rounded-xl bg-card/50 border border-border/30 backdrop-blur-sm hover:bg-card/70 hover:border-border/50 transition-all duration-300 w-full"
                      >
                        <div className="flex-shrink-0">
                          <div className="relative">
                            <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center">
                              <benefit.icon className="h-5 w-5 text-brand-blue" />
                            </div>
                            <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-brand-blue text-white text-xs font-bold flex items-center justify-center">
                              {benefit.step}
                            </div>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-1">{benefit.title}</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Call duration info and response time - bottom section */}
                <div className="space-y-4 max-w-lg mx-auto w-full">
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    className="text-center p-4"
                  >
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-brand-blue">Duration:</span> 1 hour • 
                      <span className="font-medium text-brand-blue ml-1">Format:</span> Google Meet • 
                      <span className="font-medium text-brand-blue ml-1">Cost:</span> Completely Free
                    </p>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                    className="text-center p-4"
                  >
                    <p className="text-sm text-muted-foreground">
                      ⚡ Usually responds within 2 hours • 🎯 100% Free consultation
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Cal.com Embed */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="relative h-[800px] rounded-2xl border border-border/50 bg-card shadow-2xl overflow-hidden">
              {/* Fade-out borders */}
              <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-border/50 via-border/30 to-transparent" />
              <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-border/50 via-border/30 to-transparent" />
              
              {/* Embed Header */}
              <div className="p-6 border-b border-border/50 bg-black">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-4 text-sm text-gray-300 font-mono">
                    cal.com/aksel-suokas
                  </span>
                </div>
              </div>
              
              {/* Cal.com React Component */}
              <div className="relative flex-1 bg-card flex flex-col">
                <div 
                  className="flex-1"
                  style={{ 
                    height: '722px',
                    overflow: 'auto',
                    width: '100%'
                  }}
                >
                  <Cal 
                    namespace="cumucore-ux-research-interview"
                    calLink="aksel-suokas/cumucore-ux-research-interview"
                    style={{
                      width: "100%",
                      height: "722px",
                      border: "none"
                    }}
                    config={{
                      layout: "month_view"
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16 space-y-4"
        >
          <p className="text-muted-foreground">
            Trusted by <span className="font-semibold text-foreground">50+</span> companies worldwide
          </p>
          
          {/* Real Company Logos */}
          <div className="flex justify-center items-center gap-8 opacity-50 grayscale hover:opacity-75 transition-opacity">
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
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Fade Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  )
} 