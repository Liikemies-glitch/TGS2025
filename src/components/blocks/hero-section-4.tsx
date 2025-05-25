'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { AnnouncementButton } from '@/components/ui/announcement-button'

export function HeroSection() {
    const [isMounted, setIsMounted] = useState(false)
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsMounted(true)
        }, 100) // Small delay to ensure clean start
        
        return () => clearTimeout(timer)
    }, [])

    if (!isMounted) {
        return (
            <main className="overflow-x-hidden">
                <section className="opacity-0">
                    <div className="pb-12 pt-20 md:pb-16 md:pt-24 lg:pb-24 lg:pt-44">
                        <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
                            <div className="mx-auto max-w-lg text-left lg:ml-0 lg:w-[70%] lg:max-w-none">
                                <div className="space-y-6">
                                    <div className="flex justify-start lg:justify-start mb-6">
                                        <div className="opacity-0">Designer added: Aksel Suokas</div>
                                    </div>
                                    <h1 className="opacity-0 mt-6 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:max-w-none xl:text-7xl">If DIY methods scaled, you&apos;d be market leader by now</h1>
                                    <p className="opacity-0 mt-8 max-w-2xl text-pretty text-lg lg:max-w-none">We transform SaaS products into market leaders through strategic design and product thinking.</p>
                                    <div className="opacity-0 mt-12 flex flex-row items-start justify-start gap-2 sm:flex-row lg:justify-start">
                                        <div>Book a meeting</div>
                                        <div>View case studies</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="opacity-0 bg-background pb-16 pt-8 md:pb-32 md:pt-12">
                    <div>Loading...</div>
                </section>
            </main>
        )
    }

    return (
        <motion.main 
            className="overflow-x-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            <section>
                <div className="pb-12 pt-20 md:pb-16 md:pt-24 lg:pb-24 lg:pt-44">
                    <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
                        <div className="mx-auto max-w-lg text-left lg:ml-0 lg:w-[70%] lg:max-w-none">
                            <AnimatedGroup 
                                preset="blur-slide"
                                variants={{
                                    container: {
                                        hidden: { opacity: 0 },
                                        visible: {
                                            opacity: 1,
                                            transition: {
                                                staggerChildren: 0.15,
                                                delayChildren: 0.2,
                                            },
                                        },
                                    },
                                    item: {
                                        hidden: { 
                                            opacity: 0, 
                                            filter: 'blur(8px)', 
                                            y: 30 
                                        },
                                        visible: { 
                                            opacity: 1, 
                                            filter: 'blur(0px)', 
                                            y: 0,
                                            transition: {
                                                duration: 0.8,
                                                ease: [0.25, 0.1, 0.25, 1],
                                            }
                                        },
                                    },
                                }}
                            >
                                <div className="flex justify-start lg:justify-start mb-6">
                                    <AnnouncementButton>
                                        Designer added: Aksel Suokas
                                    </AnnouncementButton>
                                </div>
                                
                                <h1 className="mt-6 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:max-w-none xl:text-7xl">If DIY methods scaled, you&apos;d be <span className="text-blue-600 dark:text-blue-400">market leader</span> by now</h1>
                                
                                <p className="mt-8 max-w-2xl text-pretty text-lg lg:max-w-none">We transform SaaS products into market leaders through strategic design and product thinking. Our track record speaks for itself - we&apos;ve helped over twenty companies achieve breakthrough growth.</p>

                                <div className="mt-12 flex flex-row items-start justify-start gap-2 sm:flex-row lg:justify-start">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="px-5 text-base">
                                        <Link href="#contact">
                                            <span className="text-nowrap">Book a meeting</span>
                                        </Link>
                                    </Button>
                                    <Button
                                        key={2}
                                        asChild
                                        size="lg"
                                        variant="ghost"
                                        className="px-5 text-base">
                                        <Link href="#case-studies">
                                            <span className="text-nowrap">View case studies</span>
                                        </Link>
                                    </Button>
                                </div>
                            </AnimatedGroup>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-background pb-16 pt-8 md:pb-32 md:pt-12">
                <AnimatedGroup 
                    preset="fade"
                    variants={{
                        container: {
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.3,
                                    delayChildren: 0.6, // Start after hero animation
                                },
                            },
                        },
                        item: {
                            hidden: { opacity: 0, y: 20 },
                            visible: { 
                                opacity: 1, 
                                y: 0,
                                transition: {
                                    duration: 0.6,
                                    ease: "easeOut"
                                }
                            },
                        },
                    }}
                >
                    <div className="group relative m-auto max-w-6xl px-6">
                        <div className="flex flex-col items-center md:flex-row">
                            <div className="md:max-w-44 md:border-r md:pr-6">
                                <p className="text-end text-sm">Trusted by growing companies</p>
                            </div>
                            <div className="relative py-6 md:w-[calc(100%-11rem)] min-h-[60px] flex items-center">
                                <InfiniteSlider
                                    duration={40}
                                    gap={112}>
                                    <div className="logo-container">
                                        <Image
                                            className="mx-auto h-5 w-fit dark:invert object-contain"
                                            src="/images/logos/seppo.webp"
                                            alt="Seppo Logo"
                                            height={19}
                                            width={120}
                                            loading="eager"
                                        />
                                    </div>
                                    
                                    <div className="logo-container">
                                        <Image
                                            className="mx-auto h-7 w-fit dark:invert object-contain"
                                            src="/images/logos/elisa.webp"
                                            alt="Elisa Logo"
                                            height={28}
                                            width={140}
                                            loading="eager"
                                        />
                                    </div>

                                    <div className="logo-container">
                                        <Image
                                            className="mx-auto h-6 w-fit dark:invert object-contain"
                                            src="/images/logos/paytrail-png.webp"
                                            alt="Paytrail Logo"
                                            height={22}
                                            width={132}
                                            loading="eager"
                                        />
                                    </div>

                                    <div className="logo-container">
                                        <Image
                                            className="mx-auto h-4 w-fit dark:invert object-contain"
                                            src="/images/logos/kamux-png.webp"
                                            alt="Kamux Logo"
                                            height={16}
                                            width={100}
                                            loading="eager"
                                        />
                                    </div>

                                    <div className="logo-container">
                                        <Image
                                            className="mx-auto h-5 w-fit dark:invert object-contain"
                                            src="/images/logos/gebwell-png.webp"
                                            alt="Gebwell Logo"
                                            height={20}
                                            width={120}
                                            loading="eager"
                                        />
                                    </div>

                                    <div className="logo-container">
                                        <Image
                                            className="mx-auto h-6 w-fit dark:invert object-contain"
                                            src="/images/logos/groweo-png.webp"
                                            alt="Groweo Logo"
                                            height={24}
                                            width={120}
                                            loading="eager"
                                        />
                                    </div>

                                    <div className="logo-container">
                                        <Image
                                            className="mx-auto h-5 w-fit dark:invert object-contain"
                                            src="/images/logos/1001lakes-png.webp"
                                            alt="1001 Lakes Logo"
                                            height={20}
                                            width={120}
                                            loading="eager"
                                        />
                                    </div>

                                    <div className="logo-container">
                                        <Image
                                            className="mx-auto h-5 w-fit dark:invert object-contain"
                                            src="/images/logos/prospectum.png"
                                            alt="Prospectum Logo"
                                            height={20}
                                            width={120}
                                            loading="eager"
                                            priority
                                        />
                                    </div>

                                    <div className="logo-container">
                                        <Image
                                            className="mx-auto h-4 w-fit dark:invert object-contain"
                                            src="/images/logos/minnalearn-png.webp"
                                            alt="MinnaLearn Logo"
                                            height={16}
                                            width={100}
                                            loading="eager"
                                        />
                                    </div>
                                    
                                    <div className="logo-container">
                                        <Image
                                            className="mx-auto h-4 w-fit dark:invert object-contain"
                                            src="/images/logos/evolver.webp"
                                            alt="Evolver Logo"
                                            height={16}
                                            width={100}
                                            loading="eager"
                                        />
                                    </div>
                                    
                                    <div className="logo-container">
                                        <Image
                                            className="mx-auto h-5 w-fit dark:invert object-contain"
                                            src="/images/logos/akamon.webp"
                                            alt="Akamon Logo"
                                            height={20}
                                            width={120}
                                            loading="eager"
                                        />
                                    </div>
                                    
                                    <div className="logo-container">
                                        <Image
                                            className="mx-auto h-5 w-fit dark:invert object-contain"
                                            src="/images/logos/eemel.png"
                                            alt="Eemel Logo"
                                            height={20}
                                            width={120}
                                            loading="eager"
                                        />
                                    </div>
                                </InfiniteSlider>

                                <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent"></div>
                                <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent"></div>
                                <ProgressiveBlur
                                    className="pointer-events-none absolute left-0 top-0 h-full w-20"
                                    direction="left"
                                    blurIntensity={1}
                                />
                                <ProgressiveBlur
                                    className="pointer-events-none absolute right-0 top-0 h-full w-20"
                                    direction="right"
                                    blurIntensity={1}
                                />
                            </div>
                        </div>
                    </div>
                </AnimatedGroup>
            </section>
        </motion.main>
    )
}
