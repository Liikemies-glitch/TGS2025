'use client'

import * as React from "react"
import Link from "next/link"
import { MenuIcon, XIcon, ChevronDownIcon, ChevronRightIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ShimmerButton } from "@/components/ui/shimmer-button"

interface MobileMenuProps {
  className?: string
}

interface MenuSection {
  title: string
  items: {
    href: string
    title: string
    description?: string
  }[]
}

const menuSections: MenuSection[] = [
  {
    title: "Products",
    items: [
      {
        href: "/products/web-apps",
        title: "Web Applications",
        description: "Modern, responsive web applications built with cutting-edge technology."
      },
      {
        href: "/products/mobile-apps",
        title: "Mobile Apps",
        description: "Native and cross-platform mobile applications for iOS and Android."
      },
      {
        href: "/products/consulting",
        title: "Consulting",
        description: "Expert technical consulting and strategic guidance for your projects."
      }
    ]
  },
  {
    title: "Services",
    items: [
      {
        href: "/services",
        title: "Our Services",
        description: "Comprehensive solutions to help your business thrive in the digital world."
      },
      {
        href: "/services/ui-ux-design",
        title: "UI/UX Design",
        description: "Create intuitive and beautiful user experiences that drive engagement."
      },
      {
        href: "/services/user-research",
        title: "User Research",
        description: "Data-driven insights that inform design decisions and validate assumptions."
      },
      {
        href: "/services/strategic-positioning",
        title: "Strategic Positioning",
        description: "Position your product for market success through strategic design."
      },
      {
        href: "/services/user-journeys",
        title: "User Journeys",
        description: "Optimize every touchpoint from landing pages to user activation and beyond."
      }
    ]
  },
  {
    title: "Company",
    items: [
      {
        href: "/about",
        title: "About Us",
        description: "Learn about our mission, values, and the team behind The Good Side."
      },
      {
        href: "/careers",
        title: "Careers",
        description: "Join our team and help us build the future of technology."
      },
      {
        href: "/blog",
        title: "Blog",
        description: "Insights, tutorials, and thoughts on technology and innovation."
      },
      {
        href: "/contact",
        title: "Contact",
        description: "Get in touch with us for your next project or collaboration."
      },
      {
        href: "/press",
        title: "Press",
        description: "Media resources, press releases, and company news."
      },
      {
        href: "/partners",
        title: "Partners",
        description: "Our trusted partners and technology ecosystem."
      }
    ]
  }
]

export const MobileMenu = ({ className }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [expandedSections, setExpandedSections] = React.useState<Set<string>>(new Set())

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      // Reset expanded sections when opening
      setExpandedSections(new Set())
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden'
    } else {
      // Restore body scroll when menu is closed
      document.body.style.overflow = 'unset'
    }
  }

  const closeMenu = () => {
    setIsOpen(false)
    document.body.style.overflow = 'unset'
  }

  const toggleSection = (sectionTitle: string) => {
    const newExpanded = new Set(expandedSections)
    if (newExpanded.has(sectionTitle)) {
      newExpanded.delete(sectionTitle)
    } else {
      newExpanded.add(sectionTitle)
    }
    setExpandedSections(newExpanded)
  }

  // Close menu on escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeMenu()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  // Cleanup on unmount
  React.useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <div className={cn("md:hidden", className)}>
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleMenu}
        className="h-9 w-9 p-0 relative z-50"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <div className="relative">
          <MenuIcon 
            className={cn(
              "h-5 w-5 transition-all duration-300",
              isOpen ? "opacity-0 rotate-180 scale-75" : "opacity-100 rotate-0 scale-100"
            )} 
          />
          <XIcon 
            className={cn(
              "h-5 w-5 absolute inset-0 transition-all duration-300",
              isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-180 scale-75"
            )} 
          />
        </div>
      </Button>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 transition-all duration-300 ease-in-out",
          isOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-x-0 bg-black/60 mobile-menu-backdrop"
          style={{
            top: '73px', // Start from bottom of header
            bottom: '0'
          }}
          onClick={closeMenu}
        />
        
        {/* Menu Panel */}
        <div
          className={cn(
            "absolute inset-x-0 bg-background border-b shadow-2xl transition-all duration-300 ease-in-out mobile-menu-panel",
            isOpen 
              ? "translate-y-0 opacity-100" 
              : "-translate-y-full opacity-0"
          )}
          style={{ 
            top: '73px', // Start from bottom of header
            height: 'calc(100vh - 73px)', // Full height minus header
          }}
        >
          {/* Scrollable Content */}
          <div className="h-full overflow-y-auto overscroll-contain mobile-menu-scroll">
            <div className="container mx-auto px-6 pt-6 pb-20">
              <nav className="space-y-1">
                {/* Menu Sections */}
                {menuSections.map((section) => (
                  <div key={section.title} className="border-b border-border/50 last:border-b-0">
                    <button
                      onClick={() => toggleSection(section.title)}
                      className="flex items-center justify-between w-full py-4 text-left group mobile-menu-button mobile-menu-section-header"
                      aria-expanded={expandedSections.has(section.title)}
                    >
                      <span className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {section.title}
                      </span>
                      <div className="transition-transform duration-200">
                        {expandedSections.has(section.title) ? (
                          <ChevronDownIcon className="h-5 w-5 text-muted-foreground" />
                        ) : (
                          <ChevronRightIcon className="h-5 w-5 text-muted-foreground" />
                        )}
                      </div>
                    </button>
                    
                    {/* Collapsible Section Content */}
                    <div
                      className={cn(
                        "overflow-hidden mobile-menu-collapsible",
                        expandedSections.has(section.title)
                          ? "max-h-[1000px] opacity-100 pb-4"
                          : "max-h-0 opacity-0"
                      )}
                    >
                      <div className="space-y-1 pl-4">
                        {section.items.map((item) => (
                          <MobileMenuItem
                            key={item.href}
                            href={item.href}
                            title={item.title}
                            description={item.description}
                            onClick={closeMenu}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Direct Contact Link */}
                <div className="border-b border-border/50">
                  <Link
                    href="/contact"
                    onClick={closeMenu}
                    className="flex items-center py-4 text-lg font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    Contact
                  </Link>
                </div>

                {/* CTA Button Section */}
                <div className="pt-6">
                  <ShimmerButton
                    className="w-full px-6 py-4 text-base font-medium"
                    shimmerColor="#ffffff"
                    background="hsl(var(--primary))"
                    borderRadius="12px"
                    onClick={closeMenu}
                  >
                    <Link href="/contact" className="text-white block w-full">
                      Get Started
                    </Link>
                  </ShimmerButton>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface MobileMenuItemProps {
  href: string
  title: string
  description?: string
  onClick?: () => void
}

const MobileMenuItem = ({ href, title, description, onClick }: MobileMenuItemProps) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block py-3 px-4 rounded-lg transition-all duration-200 hover:bg-accent hover:text-accent-foreground active:scale-[0.98] group mobile-menu-item"
    >
      <div className="space-y-1">
        <div className="text-sm font-medium leading-none group-hover:text-primary transition-colors">
          {title}
        </div>
        {description && (
          <p className="text-xs leading-snug text-muted-foreground line-clamp-2 mobile-menu-description">
            {description}
          </p>
        )}
      </div>
    </Link>
  )
} 