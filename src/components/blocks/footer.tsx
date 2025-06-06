'use client'

import * as React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Linkedin, Send } from 'lucide-react'

export function Footer() {
  const [email, setEmail] = React.useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement newsletter signup
    console.log('Newsletter signup:', email)
    setEmail('')
  }

  return (
    <footer className="w-full border-t bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Stay Connected Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-medium">Stay Connected</h2>
            <p className="text-sm text-muted-foreground">
              Join our newsletter for the latest updates and exclusive offers.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-background"
              />
              <Button type="submit" variant="ghost" size="icon">
                <Send className="h-5 w-5" />
              </Button>
            </form>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-medium">Quick Links</h2>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About Us
              </Link>
              <Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                Services
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Us Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-medium">Contact Us</h2>
            <div className="space-y-2 text-muted-foreground">
              <p>Innovation Home Tampere</p>
              <p>Tampere, Finland</p>
              <p>Phone: +358 40 869 8887</p>
              <p>Email: mikki@goodside.fi</p>
            </div>
          </div>

          {/* Follow Us Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-medium">Follow Us</h2>
            <div className="space-y-2">
              <Link href="https://www.linkedin.com/company/103906631/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="text-sm">Company page</span>
              </Link>
              <Link href="https://www.linkedin.com/in/mikkiaaltoyleva/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="text-sm">Mikki Aalto-Ylevä, Co-Founder</span>
              </Link>
              <Link href="https://www.linkedin.com/in/tuomas-kaartoluoma-48658117a/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="text-sm">Tuomas Kaartoluoma, Co-Founder</span>
              </Link>
              <Link href="https://www.linkedin.com/in/aksel-suokas/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="text-sm">Aksel Suokas, Partner</span>
              </Link>
            </div>

          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 The Good Side Oy (FI34535062). All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-muted-foreground hover:text-foreground transition-colors">
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 