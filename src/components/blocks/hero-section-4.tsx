'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'

export function HeroSection() {
    return (
        <main className="overflow-x-hidden">
            <section>
                <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44">
                    <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
                        <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-[70%] lg:max-w-none lg:text-left">
                            <h1 className="mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16 lg:max-w-none xl:text-7xl">If DIY methods scaled, you&apos;d be <span className="text-blue-600 dark:text-blue-400">market leader</span> by now.</h1>
                            <p className="mt-8 max-w-2xl text-pretty text-lg lg:max-w-none">We transform SaaS products into market leaders through strategic design and product thinking. Our track record speaks for itself - we&apos;ve helped over ten companies achieve breakthrough growth.</p>

                            <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
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
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-background pb-16 md:pb-32">
                <div className="group relative m-auto max-w-6xl px-6">
                    <div className="flex flex-col items-center md:flex-row">
                        <div className="md:max-w-44 md:border-r md:pr-6">
                            <p className="text-end text-sm">Luotettu kumppani</p>
                        </div>
                        <div className="relative py-6 md:w-[calc(100%-11rem)]">
                            <InfiniteSlider
                                duration={40}
                                gap={112}>
                                <div className="flex">
                                    <Image
                                        className="mx-auto h-5 w-fit dark:invert"
                                        src="/images/logos/prospectum.png"
                                        alt="Prospectum Logo"
                                        height={20}
                                        width={120}
                                    />
                                </div>

                                <div className="flex">
                                    <Image
                                        className="mx-auto h-4 w-fit dark:invert"
                                        src="/images/logos/minnalearn-png.webp"
                                        alt="MinnaLearn Logo"
                                        height={16}
                                        width={100}
                                    />
                                </div>
                                <div className="flex">
                                    <Image
                                        className="mx-auto h-4 w-fit dark:invert"
                                        src="/images/logos/evolver.webp"
                                        alt="Evolver Logo"
                                        height={16}
                                        width={100}
                                    />
                                </div>
                                <div className="flex">
                                    <Image
                                        className="mx-auto h-5 w-fit dark:invert"
                                        src="/images/logos/akamon.webp"
                                        alt="Akamon Logo"
                                        height={20}
                                        width={120}
                                    />
                                </div>
                                <div className="flex">
                                    <Image
                                        className="mx-auto h-5 w-fit dark:invert"
                                        src="/images/logos/eemel.png"
                                        alt="Eemel Logo"
                                        height={20}
                                        width={120}
                                    />
                                </div>
                                <div className="flex">
                                    <Image
                                        className="mx-auto h-4 w-fit dark:invert"
                                        src="/images/logos/seppo.webp"
                                        alt="Seppo Logo"
                                        height={16}
                                        width={100}
                                    />
                                </div>
                                <div className="flex">
                                    <Image
                                        className="mx-auto h-7 w-fit dark:invert"
                                        src="/images/logos/elisa.webp"
                                        alt="Elisa Logo"
                                        height={28}
                                        width={140}
                                    />
                                </div>

                                <div className="flex">
                                    <Image
                                        className="mx-auto h-6 w-fit dark:invert"
                                        src="/images/logos/cumucore.webp"
                                        alt="Cumucore Logo"
                                        height={24}
                                        width={120}
                                    />
                                </div>

                                <div className="flex">
                                    <Image
                                        className="mx-auto h-5 w-fit dark:invert"
                                        src="/images/logos/paytrail-png.webp"
                                        alt="Paytrail Logo"
                                        height={20}
                                        width={120}
                                    />
                                </div>

                                <div className="flex">
                                    <Image
                                        className="mx-auto h-4 w-fit dark:invert"
                                        src="/images/logos/kamux-png.webp"
                                        alt="Kamux Logo"
                                        height={16}
                                        width={100}
                                    />
                                </div>

                                <div className="flex">
                                    <Image
                                        className="mx-auto h-4 w-fit dark:invert"
                                        src="/images/logos/materialistning-png.webp"
                                        alt="Materialistning Logo"
                                        height={16}
                                        width={100}
                                    />
                                </div>

                                <div className="flex">
                                    <Image
                                        className="mx-auto h-5 w-fit dark:invert"
                                        src="/images/logos/gebwell-png.webp"
                                        alt="Gebwell Logo"
                                        height={20}
                                        width={120}
                                    />
                                </div>

                                <div className="flex">
                                    <Image
                                        className="mx-auto h-6 w-fit dark:invert"
                                        src="/images/logos/groweo-png.webp"
                                        alt="Groweo Logo"
                                        height={24}
                                        width={120}
                                    />
                                </div>

                                <div className="flex">
                                    <Image
                                        className="mx-auto h-5 w-fit dark:invert"
                                        src="/images/logos/1001lakes-png.webp"
                                        alt="1001 Lakes Logo"
                                        height={20}
                                        width={120}
                                    />
                                </div>
                            </InfiniteSlider>

                            <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                            <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
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
            </section>
        </main>
    )
}
