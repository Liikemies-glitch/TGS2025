"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useSearchParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { 
  Send, 
  Calculator, 
  Calendar, 
  Users, 
  TrendingUp, 
  CheckCircle,
  AlertCircle,
  Edit3,
  Save,
  RotateCcw,
  Trash2
} from "lucide-react"

interface PricingRecap {
  months: number
  daysPerWeek: number
  hoursPerDay: number
  hourlyRate: number
  totalCost: number
  discountedCost?: number
  savings?: number
  allocationPercentage: number
}

interface ContactFormProps {
  className?: string
}

export function ContactForm({ className }: ContactFormProps) {
  const searchParams = useSearchParams()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [pricingRecap, setPricingRecap] = useState<PricingRecap | null>(null)
  const [originalPricingRecap, setOriginalPricingRecap] = useState<PricingRecap | null>(null)
  const [isEditingEstimate, setIsEditingEstimate] = useState(false)
  const [showEstimate, setShowEstimate] = useState(false)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    projectType: "",
    timeline: ""
  })

  // Parse pricing parameters from URL
  useEffect(() => {
    const months = searchParams.get('months')
    const daysPerWeek = searchParams.get('daysPerWeek')
    const hourlyRate = searchParams.get('hourlyRate')

    // Only show estimate if user came from pricing calculator
    if (months && daysPerWeek && hourlyRate) {
      const monthsNum = parseInt(months)
      const daysNum = parseInt(daysPerWeek)
      const rateNum = parseInt(hourlyRate)
      const hoursPerDay = 8 // Fixed as per pricing calculator
      
      const calculatedRecap = calculatePricingRecap(monthsNum, daysNum, hoursPerDay, rateNum)
      
      setPricingRecap(calculatedRecap)
      setOriginalPricingRecap(calculatedRecap)
      setShowEstimate(true)

      // Pre-fill message with pricing details
      updateMessageWithPricing(calculatedRecap)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams])

  const calculatePricingRecap = (months: number, daysPerWeek: number, hoursPerDay: number, hourlyRate: number): PricingRecap => {
    const weeksPerMonth = 4.33
    const totalHours = months * weeksPerMonth * daysPerWeek * hoursPerDay
    const totalCost = Math.round(totalHours * hourlyRate)
    
    const savings = months >= 6 ? 10 : 0
    const discountedCost = savings > 0 ? Math.round(totalCost * (1 - savings / 100)) : totalCost
    const allocationPercentage = Math.round((daysPerWeek / 5) * 100)

    return {
      months,
      daysPerWeek,
      hoursPerDay,
      hourlyRate,
      totalCost,
      discountedCost: savings > 0 ? discountedCost : undefined,
      savings: savings > 0 ? savings : undefined,
      allocationPercentage
    }
  }

  const updateMessageWithPricing = (recap: PricingRecap) => {
    const finalCost = recap.discountedCost || recap.totalCost
    setFormData(prev => ({
      ...prev,
      message: `Hi! I'm interested in discussing a project with the following specifications:

Duration: ${recap.months} ${recap.months === 1 ? 'month' : 'months'}
Schedule: ${recap.daysPerWeek} days/week (${recap.allocationPercentage}% allocation)
Estimated Investment: ${formatCurrency(finalCost)}

I'd love to discuss this further and explore how we can work together.`
    }))
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('fi-FI', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleEstimateChange = (field: keyof PricingRecap, value: number) => {
    if (!pricingRecap) return

    const updatedRecap = { ...pricingRecap, [field]: value }
    
    // Recalculate dependent values
    if (field === 'months' || field === 'daysPerWeek' || field === 'hourlyRate') {
      const recalculated = calculatePricingRecap(
        field === 'months' ? value : updatedRecap.months,
        field === 'daysPerWeek' ? value : updatedRecap.daysPerWeek,
        updatedRecap.hoursPerDay,
        field === 'hourlyRate' ? value : updatedRecap.hourlyRate
      )
      setPricingRecap(recalculated)
    } else {
      setPricingRecap(updatedRecap)
    }
  }

  const handleSaveEstimate = () => {
    setIsEditingEstimate(false)
    if (pricingRecap) {
      updateMessageWithPricing(pricingRecap)
    }
  }

  const handleResetEstimate = () => {
    if (originalPricingRecap) {
      setPricingRecap(originalPricingRecap)
      updateMessageWithPricing(originalPricingRecap)
    }
    setIsEditingEstimate(false)
  }

  const handleRemoveEstimate = () => {
    setShowEstimate(false)
    setPricingRecap(null)
    setShowDeleteConfirm(false)
    // Clear the pre-filled message
    setFormData(prev => ({
      ...prev,
      message: ""
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', { ...formData, pricingRecap: showEstimate ? pricingRecap : null })
      
      setIsSubmitted(true)
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className={className}
      >
        <Card className="text-center p-8">
          <CardContent className="space-y-4">
            <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-2xl font-semibold">Thank You!</h3>
            <p className="text-sm text-muted-foreground">
              We&apos;ll get back to you within 24 hours.
            </p>
            <Button 
              variant="outline" 
              onClick={() => {
                setIsSubmitted(false)
                setFormData({
                  name: "",
                  email: "",
                  company: "",
                  phone: "",
                  message: "",
                  projectType: "",
                  timeline: ""
                })
              }}
            >
              Send Another Message
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    )
  }

  const monthOptions = [1, 2, 3, 6, 12]
  const dayOptions = [2, 3, 4, 5]

  return (
    <div className={className}>
      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>
              {showEstimate && pricingRecap ? "Let's Discuss Your Project" : "Get in Touch"}
            </CardTitle>
            <p className="text-muted-foreground">
              {showEstimate && pricingRecap
                ? "Ready to move forward? Let's discuss the details and next steps."
                : "Tell us about your project and how we can help you achieve your goals."
              }
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Pricing Estimate Section - Inside Form */}
              {showEstimate && pricingRecap && (
                <div className="p-6 border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Calculator className="h-5 w-5 text-primary" />
                      <h3 className="text-lg font-semibold">Your Project Estimate</h3>
                    </div>
                    <div className="flex items-center gap-2">
                      {!isEditingEstimate ? (
                        <>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => setIsEditingEstimate(true)}
                            className="h-8 px-2"
                          >
                            <Edit3 className="h-4 w-4 mr-1" />
                            Edit
                          </Button>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => setShowDeleteConfirm(true)}
                            className="h-8 px-2 text-muted-foreground hover:text-destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={handleResetEstimate}
                            className="h-8 px-2"
                          >
                            <RotateCcw className="h-4 w-4 mr-1" />
                            Reset
                          </Button>
                          <Button
                            type="button"
                            variant="default"
                            size="sm"
                            onClick={handleSaveEstimate}
                            className="h-8 px-2"
                          >
                            <Save className="h-4 w-4 mr-1" />
                            Save
                          </Button>
                        </>
                      )}
                    </div>
                  </div>

                  {isEditingEstimate ? (
                    // Edit Mode
                    <div className="space-y-6">
                      {/* Duration Selection */}
                      <div className="space-y-3">
                        <Label className="flex items-center gap-2 text-sm font-semibold">
                          <Calendar className="h-4 w-4 text-primary" />
                          Duration
                        </Label>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                          {monthOptions.map((month) => (
                            <Button
                              key={month}
                              type="button"
                              variant={pricingRecap.months === month ? "default" : "outline"}
                              size="sm"
                              onClick={() => handleEstimateChange('months', month)}
                              className="h-10 text-xs"
                            >
                              {month} {month === 1 ? 'month' : 'months'}
                            </Button>
                          ))}
                        </div>
                      </div>

                      {/* Schedule Selection */}
                      <div className="space-y-3">
                        <Label className="flex items-center gap-2 text-sm font-semibold">
                          <Users className="h-4 w-4 text-primary" />
                          Schedule
                        </Label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                          {dayOptions.map((day) => (
                            <Button
                              key={day}
                              type="button"
                              variant={pricingRecap.daysPerWeek === day ? "default" : "outline"}
                              size="sm"
                              onClick={() => handleEstimateChange('daysPerWeek', day)}
                              className="h-10 text-xs"
                            >
                              {day} days/week
                            </Button>
                          ))}
                        </div>
                      </div>

                      {/* Hourly Rate Input */}
                      <div className="space-y-2">
                        <Label htmlFor="hourlyRate" className="text-sm font-semibold">
                          Hourly Rate (€)
                        </Label>
                        <Input
                          id="hourlyRate"
                          type="number"
                          value={pricingRecap.hourlyRate}
                          onChange={(e) => handleEstimateChange('hourlyRate', parseInt(e.target.value) || 0)}
                          className="w-32"
                          min="1"
                          step="5"
                        />
                      </div>
                    </div>
                  ) : (
                    // Display Mode
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          <div>
                            <p className="text-sm text-muted-foreground">Duration</p>
                            <p className="font-semibold">
                              {pricingRecap.months} {pricingRecap.months === 1 ? 'month' : 'months'}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-primary" />
                          <div>
                            <p className="text-sm text-muted-foreground">Schedule</p>
                            <p className="font-semibold">{pricingRecap.daysPerWeek} days/week</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <TrendingUp className="h-4 w-4 text-primary" />
                          <div>
                            <p className="text-sm text-muted-foreground">Allocation</p>
                            <p className="font-semibold">{pricingRecap.allocationPercentage}%</p>
                          </div>
                        </div>
                      </div>
                      
                      <Separator className="my-4" />
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Total hours:</span>
                          <span className="font-medium">
                            {Math.round(pricingRecap.months * 4.33 * pricingRecap.daysPerWeek * pricingRecap.hoursPerDay)}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Hourly rate:</span>
                          <span className="font-medium">{pricingRecap.hourlyRate}€/hour</span>
                        </div>
                        {pricingRecap.savings && (
                          <div className="flex justify-between text-sm">
                            <span className="text-blue-600 dark:text-blue-400">Partnership discount:</span>
                            <span className="font-semibold text-blue-600 dark:text-blue-400">
                              -{pricingRecap.savings}%
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t">
                        <span className="font-semibold">Total Investment:</span>
                        <div className="text-right">
                          {pricingRecap.savings && (
                            <div className="text-sm text-muted-foreground line-through">
                              {formatCurrency(pricingRecap.totalCost)}
                            </div>
                          )}
                          <div className="text-xl font-bold text-primary">
                            {formatCurrency(pricingRecap.discountedCost || pricingRecap.totalCost)}
                          </div>
                        </div>
                      </div>

                      {pricingRecap.savings && (
                        <Badge className="w-full justify-center bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800 mt-4">
                          🤝 Partnership Value: {formatCurrency(pricingRecap.totalCost - (pricingRecap.discountedCost || pricingRecap.totalCost))}
                        </Badge>
                      )}
                    </>
                  )}
                </div>
              )}

              {/* Contact Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your full name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your company name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+358 40 123 4567"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  placeholder={showEstimate && pricingRecap
                    ? "The form has been pre-filled with your project details. Feel free to add any additional information or questions."
                    : "Tell us about your project, goals, and how we can help you succeed."
                  }
                />
              </div>

              <div className="flex items-start gap-2 p-4 bg-muted/30 rounded-lg">
                <AlertCircle className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  We typically respond within 2 hours during business hours. 
                  For urgent matters, feel free to call us directly at +358 40 869 8887.
                </p>
              </div>

              <Button 
                type="submit" 
                className="w-full" 
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>

      {/* Delete Confirmation Dialog */}
      <Dialog open={showDeleteConfirm} onOpenChange={setShowDeleteConfirm}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Remove Project Estimate?</DialogTitle>
            <DialogDescription>
              Are you sure you want to remove the project estimate from your message? 
              This will also clear the pre-filled message content.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setShowDeleteConfirm(false)}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleRemoveEstimate}
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Remove Estimate
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
} 