'use client'
import React from 'react'
import Link from 'next/link'
import { ThemeToggle } from '@/components/theme-toggle'
import { cn } from '@/lib/utils'

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

                        <div className="flex items-center">
                            <ThemeToggle />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

const Logo = ({ className }: { className?: string }) => {
    return (
        <div className={cn("flex items-center space-x-2", className)}>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
                The Good Side
            </div>
        </div>
    )
} 