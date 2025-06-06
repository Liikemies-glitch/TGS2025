'use client'

import * as React from 'react'
import { useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Sparkles } from 'lucide-react'
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
      const cal = await getCalApi({"namespace":"kartoitustapaaminen"});
      cal("ui", {
        "cssVarsPerTheme": {
          "light": {"cal-brand": "#3b82f6", "cal-brand-emphasis": "#2563eb"}, 
          "dark": {"cal-brand": "#60a5fa", "cal-brand-emphasis": "#3b82f6"}
        },
        "hideEventTypeDetails": false,
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
          
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl leading-tight md:leading-tight lg:leading-tight">
            {"Let's Build Something"}
            <span className="block bg-gradient-to-r from-primary via-brand-blue to-primary bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Book a free design audit call to identify exactly where design improvements will drive growth. 
            No commitment, just actionable insights and clear next steps.
          </p>
        </motion.div>

        {/* Simple Calendar Embed */}
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-8"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src="/images/team/Mikki.jpeg" alt="Mikki Aalto-Ylevä" />
                <AvatarFallback>MA</AvatarFallback>
              </Avatar>
              <div className="text-left">
                <h3 className="font-medium text-foreground">Mikki Aalto-Ylevä</h3>
                <p className="text-sm text-muted-foreground">30 minutes • Free design audit</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Cal 
              namespace="kartoitustapaaminen"
              calLink="aaltoyleva/kartoitustapaaminen"
              style={{
                width: "100%",
                height: "700px",
                overflow: "scroll"
              }}
              config={{
                layout: "month_view"
              }}
            />
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
            Trusted by <span className="font-medium text-foreground">50+</span> companies worldwide
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