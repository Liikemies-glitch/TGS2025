"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { GlowButton } from "@/components/ui/glow-button"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, TrendingUp, Users, Sparkles, ArrowRight, Zap, Target, MessageSquare, Palette } from "lucide-react"

// Custom animated button component for partnership deals
interface AnimatedCtaButtonProps {
  isPartnership: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const AnimatedCtaButton = ({ isPartnership, children, className, onClick }: AnimatedCtaButtonProps) => {
  // If partnership mode, use GlowButton with enhanced effects
  if (isPartnership) {
    return (
      <motion.div className="relative overflow-hidden rounded-md w-full">
        <motion.div
          className="relative z-10"
          whileTap={{ scale: 0.97 }}
          whileHover={{ scale: 1.02 }}
        >
          <GlowButton
            glowColor="#3b82f6"
            className={className}
            onClick={onClick}
          >
            {children}
          </GlowButton>
        </motion.div>
      </motion.div>
    );
  }
  
  // Regular button for non-partnership
  return (
    <motion.div className="relative overflow-hidden rounded-md w-full">
      <motion.button
        className={`relative w-full z-10 ${className}`}
        whileTap={{ scale: 0.97 }}
        onClick={onClick}
      >
        {children}
      </motion.button>
    </motion.div>
  );
};

interface PricingCalculatorProps {
  hourlyRate?: number
  className?: string
  months?: number
  daysPerWeek?: number
  onMonthsChange?: (months: number) => void
  onDaysPerWeekChange?: (daysPerWeek: number) => void
}

export function PricingCalculator({ 
  hourlyRate = 110, 
  className,
  months: externalMonths,
  daysPerWeek: externalDaysPerWeek,
  onMonthsChange,
  onDaysPerWeekChange
}: PricingCalculatorProps) {
  const router = useRouter()
  
  // Use external state if provided, otherwise internal state
  const [internalMonths, setInternalMonths] = useState(2)
  const [internalDaysPerWeek, setInternalDaysPerWeek] = useState(5)
  
  const months = externalMonths ?? internalMonths
  const daysPerWeek = externalDaysPerWeek ?? internalDaysPerWeek
  
  const setMonths = (value: number) => {
    if (onMonthsChange) {
      onMonthsChange(value)
    } else {
      setInternalMonths(value)
    }
  }
  
  const setDaysPerWeek = (value: number) => {
    if (onDaysPerWeekChange) {
      onDaysPerWeekChange(value)
    } else {
      setInternalDaysPerWeek(value)
    }
  }

  const [hoursPerDay] = useState(7.5) // Fixed at 7.5 hours per day
  const [totalCost, setTotalCost] = useState(0)

  // Calculate total cost
  useEffect(() => {
    const weeksPerMonth = 4 // 4 weeks per month
    const totalHours = months * weeksPerMonth * daysPerWeek * hoursPerDay
    setTotalCost(Math.round(totalHours * hourlyRate))
  }, [months, daysPerWeek, hoursPerDay, hourlyRate])

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('fi-FI', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const getSavingsPercentage = () => {
    if (months >= 6) return 10
    return 0
  }

  const getDiscountedCost = () => {
    const savings = getSavingsPercentage()
    return Math.round(totalCost * (1 - savings / 100))
  }

  const getAllocationPercentage = () => {
    return Math.round((daysPerWeek / 5) * 100)
  }

  const handleGetStarted = () => {
    const params = new URLSearchParams({
      months: months.toString(),
      daysPerWeek: daysPerWeek.toString(),
      hourlyRate: hourlyRate.toString()
    })
    
    // Navigate to contact page with parameters
    router.push(`/contact?${params.toString()}`)
    
    // Small delay to ensure navigation completes, then scroll to form
    setTimeout(() => {
      const contactFormSection = document.getElementById('contact-form-section')
      if (contactFormSection) {
        contactFormSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    }, 100)
  }

  const savings = getSavingsPercentage()
  const discountedCost = getDiscountedCost()
  const allocationPercentage = getAllocationPercentage()
  const discountedRate = Math.round(hourlyRate * (1 - savings / 100))

  const monthOptions = [1, 2, 3, 6, 12]
  const dayOptions = [2, 3, 4, 5] // Minimum 2 days as per business requirement

  // Strategic design services data
  const services = [
    { text: "Strategic product positioning & market differentiation", icon: Target },
    { text: "User research & data-driven insights", icon: Users },
    { text: "Complete design system development & implementation", icon: Palette },
    { text: "Conversion-focused UX optimization", icon: Zap },
    { text: "Team workshops & strategic design consulting", icon: MessageSquare }
  ]

  return (
    <Card className={`overflow-hidden border border-primary/10 relative ${className}`}>
      <div className="flex flex-col lg:flex-row">
        {/* Left column - Investment overview and services */}
        <div className="p-6 md:p-8 lg:w-1/2 flex flex-col">
          {/* Investment Header */}
          <div className="mb-8">
            <div className="space-y-4 mb-6">
              <h3 className="text-3xl md:text-4xl font-medium leading-tight tracking-tight">Calculate your investment</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Estimate project costs based on your timeline and schedule needs
              </p>
            </div>
          </div>

          {/* What's Included Section */}
          <div className="mb-8">
            <div className="flex items-center mb-6">
              <h4 className="font-medium text-lg">What&apos;s included in your partnership</h4>
            </div>

            <div className="space-y-2">
              {services.map((service, i) => {
                const ServiceIcon = service.icon
                
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.05, duration: 0.5 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors mt-0.5">
                      <ServiceIcon className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <span className="text-sm leading-relaxed font-medium">{service.text}</span>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Pricing Display - Lower Left */}
          <div className="mt-auto">
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 border border-primary/10">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-muted-foreground mb-1">Starting at</p>
                  <div className="flex items-baseline gap-3 h-12">
                    <span className="text-4xl md:text-5xl font-medium text-primary">
                      {savings > 0 ? discountedRate : hourlyRate}€/hour
                    </span>
                    <span className="text-2xl text-muted-foreground min-w-0">
                      {savings > 0 ? (
                        <span className="line-through">{hourlyRate}€/hour</span>
                      ) : (
                        <span className="opacity-0">{hourlyRate}€/hour</span>
                      )}
                    </span>
                    {savings > 0 && (
                      <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-xs font-medium self-baseline">
                        Partnership -{savings}%
                      </div>
                    )}
                  </div>
                  <p className="text-lg text-muted-foreground font-medium mt-1">start in 2 weeks</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right column - Calculator Controls */}
        <div className="p-6 md:p-8 lg:w-1/2 lg:border-l border-border/50">
          <div className="relative overflow-hidden">
            <div className="relative z-10">
              {/* Header */}
              <div className="mb-6">
                <h3 className="text-xl font-medium mb-2">Configure your project</h3>
                <p className="text-sm text-muted-foreground">
                  Adjust duration and schedule to see your total investment
                </p>
              </div>

              <div className="space-y-6">
                {/* Project Duration */}
                <div className="space-y-3">
                  <Label className="flex items-center gap-2 text-sm font-medium">
                    <Calendar className="h-4 w-4 text-primary" />
                    Duration
                  </Label>
                  <div className="grid grid-cols-2 gap-2">
                    {monthOptions.map((month) => (
                      <Button
                        key={month}
                        variant={months === month ? "default" : "outline"}
                        size="sm"
                        onClick={() => setMonths(month)}
                        className="relative h-12 flex items-center justify-center text-sm"
                      >
                        <span className="font-medium mr-1">{month}</span>
                        <span className="opacity-70">
                          {month === 1 ? 'month' : 'months'}
                        </span>
                        {month >= 6 && (
                          <Badge className="absolute -top-1 -right-1 h-4 px-1 text-xs bg-blue-500 hover:bg-blue-500 text-white">
                            Partnership
                          </Badge>
                        )}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Work Schedule */}
                <div className="space-y-3">
                  <Label className="flex items-center gap-2 text-sm font-medium">
                    <Users className="h-4 w-4 text-primary" />
                    Schedule
                  </Label>
                  <div className="grid grid-cols-2 gap-2">
                    {dayOptions.map((day) => (
                      <Button
                        key={day}
                        variant={daysPerWeek === day ? "default" : "outline"}
                        size="sm"
                        onClick={() => setDaysPerWeek(day)}
                        className="h-12 flex items-center justify-center text-sm"
                      >
                        <span className="font-medium mr-1">{day}</span>
                        <span className="opacity-70">days/week</span>
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Allocation & Cost Summary Side by Side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Allocation Percentage */}
                  <div className="p-4 bg-muted/30 rounded-lg border border-border/50">
                    <div className="flex items-center justify-between mb-2">
                      <Label className="flex items-center gap-2 text-sm font-medium">
                        <TrendingUp className="h-4 w-4 text-primary" />
                        Allocation
                      </Label>
                      <span className="text-lg font-medium text-primary">{allocationPercentage}%</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Based on {daysPerWeek} days/week × 7.5 hours/day
                    </p>
                  </div>

                  {/* Cost Summary */}
                  <div className="p-4 bg-primary/5 rounded-lg border border-border/50">
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Total hours:</span>
                        <span className="font-medium">{Math.round(months * 4 * daysPerWeek * hoursPerDay)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Standard rate:</span>
                        <span className="font-medium">{hourlyRate}€/hour</span>
                      </div>
                      <div className="flex justify-between min-h-[1.25rem]">
                        {savings > 0 ? (
                          <>
                            <span className="text-blue-600 dark:text-blue-400 text-sm">Partnership rate:</span>
                            <span className="font-medium text-blue-600 dark:text-blue-400">
                              {Math.round(hourlyRate * (1 - savings / 100))}€/hour
                            </span>
                          </>
                        ) : (
                          <span></span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cost Display */}
                <div className="p-4 bg-primary/5 rounded-lg border border-border/50">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${totalCost}-${savings}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-3"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm min-h-[1.25rem]">
                          {savings > 0 ? (
                            <>
                              <span className="text-muted-foreground line-through">
                                {formatCurrency(totalCost)}
                              </span>
                              <span className="text-blue-600 dark:text-blue-400 text-xs">
                                Partnership Value
                              </span>
                            </>
                          ) : (
                            <span></span>
                          )}
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="font-medium">
                            Total Investment:
                          </span>
                          <motion.span
                            key={savings > 0 ? discountedCost : totalCost}
                            initial={{ scale: 1.1 }}
                            animate={{ scale: 1 }}
                            className="text-xl font-medium text-primary"
                          >
                            {formatCurrency(savings > 0 ? discountedCost : totalCost)}
                          </motion.span>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Call to Action */}
                <div className="relative">
                  <AnimatedCtaButton
                    isPartnership={savings > 0}
                    className="h-12 bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    onClick={handleGetStarted}
                  >
                    <Sparkles className={`h-4 w-4 mr-2 ${savings > 0 ? 'animate-pulse' : ''}`} />
                    <span className="mr-1">Get detailed quote</span>
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </AnimatedCtaButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
} 