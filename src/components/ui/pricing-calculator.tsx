"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, TrendingUp, Users, Sparkles, ArrowRight } from "lucide-react"

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
  const [internalMonths, setInternalMonths] = useState(3)
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

  const monthOptions = [1, 2, 3, 6, 12]
  const dayOptions = [2, 3, 4, 5] // Minimum 2 days as per business requirement

  return (
    <div className={`relative overflow-hidden ${className}`}>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Calculate your investment</h3>
          <p className="text-sm text-muted-foreground">
            Estimate project costs based on your timeline and schedule needs
          </p>
        </div>

        <div className="space-y-6">
          {/* Project Duration */}
          <div className="space-y-3">
            <Label className="flex items-center gap-2 text-sm font-semibold">
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
                  <span className="font-semibold mr-1">{month}</span>
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
            <Label className="flex items-center gap-2 text-sm font-semibold">
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
                  <span className="font-semibold mr-1">{day}</span>
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
                <Label className="flex items-center gap-2 text-sm font-semibold">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  Allocation
                </Label>
                <span className="text-lg font-bold text-primary">{allocationPercentage}%</span>
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
                      <span className="font-semibold text-blue-600 dark:text-blue-400">
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
                    <span className="font-semibold">
                      Total Investment:
                    </span>
                    <motion.span
                      key={savings > 0 ? discountedCost : totalCost}
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      className="text-xl font-bold text-primary"
                    >
                      {formatCurrency(savings > 0 ? discountedCost : totalCost)}
                    </motion.span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Call to Action */}
          <Button className="w-full" size="sm" onClick={handleGetStarted}>
            <Sparkles className="h-4 w-4 mr-2" />
            Get detailed quote
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>


        </div>
      </div>
    </div>
  )
} 