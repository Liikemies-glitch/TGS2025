'use client'

import * as React from "react"
import Link from "next/link"
import { MenuIcon, XIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface MobileMenuProps {
  className?: string
}

export const MobileMenu = ({ className }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <div className={cn("md:hidden", className)}>
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleMenu}
        className="h-9 w-9 p-0"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <XIcon className="h-5 w-5" />
        ) : (
          <MenuIcon className="h-5 w-5" />
        )}
      </Button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm mobile-menu-backdrop"
            onClick={closeMenu}
          />
          
          {/* Menu Panel */}
          <div className="fixed inset-x-0 top-[73px] z-50 bg-background/95 backdrop-blur-md border-b shadow-lg mobile-menu-panel">
            <div className="container mx-auto px-6 py-6">
              <nav className="space-y-6">
                {/* Products Section */}
                <div>
                  <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-3">
                    Products
                  </h3>
                  <div className="space-y-2">
                    <MobileMenuItem href="/products/web-apps" onClick={closeMenu}>
                      Web Applications
                    </MobileMenuItem>
                    <MobileMenuItem href="/products/mobile-apps" onClick={closeMenu}>
                      Mobile Apps
                    </MobileMenuItem>
                    <MobileMenuItem href="/products/consulting" onClick={closeMenu}>
                      Consulting
                    </MobileMenuItem>
                  </div>
                </div>

                {/* Services Section */}
                <div>
                  <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-3">
                    Services
                  </h3>
                  <div className="space-y-2">
                    <MobileMenuItem href="/services/development" onClick={closeMenu}>
                      Development
                    </MobileMenuItem>
                    <MobileMenuItem href="/services/design" onClick={closeMenu}>
                      Design
                    </MobileMenuItem>
                    <MobileMenuItem href="/services/strategy" onClick={closeMenu}>
                      Strategy
                    </MobileMenuItem>
                    <MobileMenuItem href="/services/support" onClick={closeMenu}>
                      Support
                    </MobileMenuItem>
                    <MobileMenuItem href="/services/training" onClick={closeMenu}>
                      Training
                    </MobileMenuItem>
                    <MobileMenuItem href="/services/audit" onClick={closeMenu}>
                      Technical Audit
                    </MobileMenuItem>
                  </div>
                </div>

                {/* Company Section */}
                <div>
                  <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-3">
                    Company
                  </h3>
                  <div className="space-y-2">
                    <MobileMenuItem href="/about" onClick={closeMenu}>
                      About Us
                    </MobileMenuItem>
                    <MobileMenuItem href="/careers" onClick={closeMenu}>
                      Careers
                    </MobileMenuItem>
                    <MobileMenuItem href="/blog" onClick={closeMenu}>
                      Blog
                    </MobileMenuItem>
                    <MobileMenuItem href="/contact" onClick={closeMenu}>
                      Contact
                    </MobileMenuItem>
                    <MobileMenuItem href="/press" onClick={closeMenu}>
                      Press
                    </MobileMenuItem>
                    <MobileMenuItem href="/partners" onClick={closeMenu}>
                      Partners
                    </MobileMenuItem>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

interface MobileMenuItemProps {
  href: string
  children: React.ReactNode
  onClick?: () => void
}

const MobileMenuItem = ({ href, children, onClick }: MobileMenuItemProps) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block py-2 px-3 rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
    >
      {children}
    </Link>
  )
} 