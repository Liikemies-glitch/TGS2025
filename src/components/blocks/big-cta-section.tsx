"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export function BigCtaSection() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        {/* CTA Section */}
        <div className="bg-gradient-to-br from-muted/30 to-background rounded-3xl border border-border/50 relative overflow-hidden">
          <div className="grid md:grid-cols-2 items-stretch min-h-[400px]">
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
                <p className="text-sm text-muted-foreground mb-3">
                  The founder of The Good Side
                </p>
                <h3 className="text-2xl lg:text-3xl font-medium mb-3">
                  Ready to transform your design process?
                </h3>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I personally handle every consultation call to understand your unique challenges and match you with the perfect designer. 
                <span className="block mt-2 font-medium text-foreground">{"Let's chat about how we can accelerate your growth."}</span>
              </p>
              
              <div className="space-y-3">
                <div className="flex flex-col md:flex-row gap-3">
                  <Button size="lg" className="px-8 w-full md:w-auto">
                    Book a Call with Mikki
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="lg" 
                    className="px-4 w-full md:w-auto flex items-center gap-3"
                    asChild
                  >
                    <a 
                      href="https://wa.me/0408698887?text=Hi%20Mikki,%20I'd%20like%20to%20discuss%20design%20services%20for%20my%20project" 
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
                <div className="flex flex-col items-start gap-1 md:flex-row md:items-center md:justify-start md:gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span>Available on whatsapp</span>
                  </div>
                  <span className="hidden md:inline">•</span>
                  <span>30-minute call</span>
                  <span className="hidden md:inline">•</span>
                  <span>No commitment</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-brand-blue/5 dark:bg-brand-blue-light/5 rounded-full -translate-y-20 translate-x-20"></div>
        </div>
      </div>
    </section>
  );
} 