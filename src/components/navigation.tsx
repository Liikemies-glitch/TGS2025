'use client'
import React from 'react'
import Link from 'next/link'
import { ThemeToggle } from '@/components/theme-toggle'
import { Logo } from '@/components/logo'
import { cn } from '@/lib/utils'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { MobileMenu } from "@/components/ui/mobile-menu"
import { ShimmerButton } from "@/components/ui/shimmer-button"

export const Navigation = () => {
    return (
        <header>
            <nav className="bg-background/50 fixed z-20 w-full border-b backdrop-blur-3xl">
                <div className="mx-auto max-w-6xl px-6 transition-all duration-300">
                    <div className="relative flex items-center justify-between py-3 lg:py-4">
                        <Link
                            href="/"
                            aria-label="home"
                            className="flex items-center space-x-2">
                            <Logo />
                        </Link>

                        <div className="hidden md:flex items-center space-x-6">
                            <NavigationMenu>
                                <NavigationMenuList>
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                                <div className="row-span-3">
                                                    <NavigationMenuLink asChild>
                                                        <Link
                                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                            href="/"
                                                        >
                                                            <div className="mb-2 mt-4 text-lg font-medium">
                                                                The Good Side
                                                            </div>
                                                            <p className="text-sm leading-tight text-muted-foreground">
                                                                Discover our innovative solutions designed to make a positive impact.
                                                            </p>
                                                        </Link>
                                                    </NavigationMenuLink>
                                                </div>
                                                <ListItem href="/products/web-apps" title="Web Applications">
                                                    Modern, responsive web applications built with cutting-edge technology.
                                                </ListItem>
                                                <ListItem href="/products/mobile-apps" title="Mobile Apps">
                                                    Native and cross-platform mobile applications for iOS and Android.
                                                </ListItem>
                                                <ListItem href="/products/consulting" title="Consulting">
                                                    Expert technical consulting and strategic guidance for your projects.
                                                </ListItem>
                                            </div>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                    
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
                                                <NavigationMenuLink asChild>
                                                    <Link
                                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                        href="/services"
                                                    >
                                                        <div className="mb-2 mt-4 text-lg font-medium">
                                                            Our Services
                                                        </div>
                                                        <p className="text-sm leading-tight text-muted-foreground">
                                                            Comprehensive solutions to help your business thrive in the digital world.
                                                        </p>
                                                    </Link>
                                                </NavigationMenuLink>
                                            </div>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>

                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger>Company</NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                                                <ListItem href="/about" title="About Us">
                                                    Learn about our mission, values, and the team behind The Good Side.
                                                </ListItem>
                                                <ListItem href="/careers" title="Careers">
                                                    Join our team and help us build the future of technology.
                                                </ListItem>
                                                <ListItem href="/blog" title="Blog">
                                                    Insights, tutorials, and thoughts on technology and innovation.
                                                </ListItem>
                                                <ListItem href="/contact" title="Contact">
                                                    Get in touch with us for your next project or collaboration.
                                                </ListItem>
                                                <ListItem href="/press" title="Press">
                                                    Media resources, press releases, and company news.
                                                </ListItem>
                                                <ListItem href="/partners" title="Partners">
                                                    Our trusted partners and technology ecosystem.
                                                </ListItem>
                                            </div>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>

                                    <NavigationMenuItem>
                                        <NavigationMenuLink asChild>
                                            <Link href="/contact" className={navigationMenuTriggerStyle()}>
                                                Contact
                                            </Link>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>
                        </div>

                        <div className="flex items-center space-x-4">
                            {/* CTA Button - Desktop */}
                            <div className="hidden md:block">
                                <ShimmerButton
                                    className="px-6 py-2 text-sm font-medium"
                                    shimmerColor="#ffffff"
                                    background="hsl(var(--primary))"
                                    borderRadius="8px"
                                >
                                    <Link href="/contact" className="text-white">
                                        Get Started
                                    </Link>
                                </ShimmerButton>
                            </div>
                            
                            <div className="flex items-center space-x-2">
                                <MobileMenu />
                                <ThemeToggle />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link> & { title: string }
>(({ className, title, children, ...props }, ref) => {
  return (
    <NavigationMenuLink asChild>
      <Link
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground navigation-menu-list-item",
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </Link>
    </NavigationMenuLink>
  )
})
ListItem.displayName = "ListItem"

 