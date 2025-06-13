"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function BigCtaSection() {
  return (
    <section className="pb-24 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        {/* CTA Section */}
        <div className="bg-gradient-to-br from-muted/30 to-background rounded-3xl border border-border/50 relative overflow-hidden">
          <div className="grid md:grid-cols-2 items-stretch min-h-[400px] relative z-10">
            {/* Mikki's Image */}
            <div className="order-1 md:order-1 relative">
              <Image
                src="/images/team/mikki ai.png"
                alt="Mikki - AI Design Consultant"
                fill
                className="object-cover object-top rounded-l-3xl md:rounded-l-3xl rounded-r-3xl md:rounded-r-none"
              />
            </div>

            {/* Personal Message */}
            <div className="order-2 md:order-2 text-left p-8 flex flex-col justify-center">
              <div className="mb-4">
                <p className="text-sm text-brand-blue dark:text-brand-blue-light font-medium mb-2">
                  {"👋 Hi, I'm Mikki"}
                </p>
                <h3 className="text-2xl lg:text-3xl font-medium mb-3">
                  Ready to take the next step in design and accelerate your growth?
                </h3>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I personally take every consultation call to understand your needs. After our chat, I&apos;ll match you with the perfect designer or team to help you succeed.
              </p>
              
              <div className="space-y-3">
                <div className="flex flex-col md:flex-row gap-3">
                  <Button size="lg" className="px-8 w-full md:w-auto" asChild>
                    <Link href="#book-meeting">
                      Book a Call with Mikki
                    </Link>
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="lg" 
                    className="px-4 w-full md:w-auto flex items-center gap-3"
                    asChild
                  >
                    <a 
                      href="https://wa.me/358408698887?text=Hi%20Mikki,%20I'd%20like%20to%20discuss%20design%20services%20for%20my%20project" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/images/team/mikki ai.png"
                        alt="Mikki"
                        width={36}
                        height={36}
                        className="rounded-full object-cover"
                      />
                      <span>Chat on whatsapp</span>
                      <span>→</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Background image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 scale-150 rounded-3xl -z-10"
            style={{
              backgroundImage: "url('/images/illustrations/sticky-scroll-bg.png')"
            }}
          ></div>
        </div>
      </div>
    </section>
  );
} 