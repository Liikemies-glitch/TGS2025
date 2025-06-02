"use client"

import { Suspense } from 'react'
import { ContactForm } from './contact-form'

export function ContactFormWrapper() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    }>
      <ContactForm />
    </Suspense>
  )
} 