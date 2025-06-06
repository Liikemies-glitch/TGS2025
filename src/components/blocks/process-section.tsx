"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Search, HandshakeIcon, RocketIcon } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  badge: string;
  details: string[];
  imageAlt: string;
}

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Free design audit call",
    description: "Map your current design gaps and identify exactly where design improvements will drive growth.",
    icon: <Users className="h-6 w-6" />,
    badge: "Free consultation",
    details: [
      "Audit existing design and UX",
      "Identify conversion bottlenecks",
      "Define engagement scope and timeline"
    ],
    imageAlt: "Free consultation meeting"
  },
  {
    number: "02", 
    title: "Match with available designer",
    description: "Get matched with designers already on our payroll or source new talent based on your exact requirements.",
    icon: <Search className="h-6 w-6" />,
    badge: "Ready to start",
    details: [
      "Access designers already on payroll",
      "Source additional talent if needed", 
      "Match domain expertise to your needs"
    ],
    imageAlt: "Expert matching process"
  },
  {
    number: "03",
    title: "Interview and approve",
    description: "Meet your matched designer to confirm technical fit and team chemistry before starting.",
    icon: <HandshakeIcon className="h-6 w-6" />,
    badge: "Chemistry check",
    details: [
      "30-min technical interview",
      "Review portfolio and case studies",
      "Confirm communication preferences"
    ],
    imageAlt: "Meeting with consultant"
  },
  {
    number: "04",
    title: "Designer starts in 2 weeks",
    description: "Your designer integrates with your team and begins delivering results. We handle all tools and admin.",
    icon: <RocketIcon className="h-6 w-6" />,
    badge: "2-week start",
    details: [
      "Complete onboarding in 48 hours",
      "Access to all design tools included",
      "Direct Slack/team integration"
    ],
    imageAlt: "Consultant working and delivering results"
  }
];

export function ProcessSection() {
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set());
  const [headerVisible, setHeaderVisible] = useState(false);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Header observer
    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px"
      }
    );

    if (headerRef.current) {
      headerObserver.observe(headerRef.current);
    }

    // Steps observers
    const stepsObservers = stepRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSteps(prev => new Set([...prev, index]));
          }
        },
        {
          threshold: 0.3,
          rootMargin: "0px 0px -100px 0px"
        }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      headerObserver.disconnect();
      stepsObservers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-6xl px-6">
          {/* Header */}
          <div 
            ref={headerRef}
            className={`text-left mb-20 transition-all duration-1000 ease-out ${
              headerVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-12'
            }`}
          >
            <p className="text-xs text-brand-blue dark:text-brand-blue-light font-medium uppercase tracking-wide mb-6">
              Our process
            </p>
            <h2 className="text-3xl md:text-4xl font-medium mb-4">
              From first call to <span className="text-brand-blue dark:text-brand-blue-light">delivered results</span><br />
              in just <span className="text-brand-blue dark:text-brand-blue-light">2 weeks</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A streamlined process that gets you working with senior designers quickly, 
              without the hassle of traditional hiring or expensive mistakes.
            </p>
          </div>

          {/* Process Steps */}
          <div className="space-y-24">
            {processSteps.map((step, index) => (
              <div
                key={index}
                ref={el => { stepRefs.current[index] = el; }}
                className={`transition-all duration-1000 ease-out ${
                  visibleSteps.has(index) 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-16 scale-95'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  {/* Text Content */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-brand-blue dark:bg-brand-blue-light flex items-center justify-center text-white font-medium shadow-lg">
                        {step.number}
                      </div>
                      <Badge variant="secondary" className="text-xs font-medium">
                        {step.badge}
                      </Badge>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-medium mb-4 text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        {step.description}
                      </p>
                      
                      <div className="space-y-1">
                        {step.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-center gap-3 text-muted-foreground">
                            <div className="w-2 h-2 rounded-full bg-brand-blue/60 shrink-0"></div>
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Image Placeholder */}
                  <div className="order-first lg:order-last">
                    <div className="aspect-[4/3] bg-muted/50 rounded-2xl border border-border/50 flex items-center justify-center relative overflow-hidden group">
                      {/* Placeholder content */}
                      <div className="text-center p-8">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand-blue/10 dark:bg-brand-blue-light/10 flex items-center justify-center">
                          {step.icon}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {step.imageAlt}
                        </p>
                      </div>
                      
                      {/* Subtle animation on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-24 bg-gradient-to-br from-muted/30 to-background rounded-3xl border border-border/50 relative overflow-hidden">
            <div className="grid md:grid-cols-2 items-stretch min-h-[400px]">
              {/* Mikki's Image */}
              <div className="order-2 md:order-1 relative">
                <Image
                  src="/images/team/mikki ai.png"
                  alt="Mikki - AI Design Consultant"
                  fill
                  className="object-cover object-top rounded-l-3xl md:rounded-l-3xl rounded-r-3xl md:rounded-r-none"
                />
              </div>

              {/* Personal Message */}
              <div className="order-1 md:order-2 text-center md:text-left p-8 flex flex-col justify-center">
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
                  <Button size="lg" className="px-8 w-full md:w-auto">
                    Book a Call with Mikki
                  </Button>
                  <div className="flex items-center justify-center md:justify-start gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span>Available today</span>
                    </div>
                    <span>•</span>
                    <span>30-minute call</span>
                    <span>•</span>
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