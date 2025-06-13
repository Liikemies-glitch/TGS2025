"use client";

import { Badge } from "@/components/ui/badge";
import { Users, Search, HandshakeIcon, RocketIcon } from "lucide-react";
import { useRef, useState, useEffect } from "react";

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
  const [headerVisible, setHeaderVisible] = useState(false);
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
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    if (headerRef.current) {
      headerObserver.observe(headerRef.current);
    }

    return () => {
      headerObserver.disconnect();
    };
  }, []);

  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        {/* Sticky Header */}
        <div 
          ref={headerRef}
          className={`sticky bg-background/95 backdrop-blur-sm border-b border-border/20 z-50 pb-8 mb-8 transition-all duration-400 ease-out ${
            headerVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
          style={{ top: '120px' }}
        >
          <div className="pt-8">
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
        </div>

        {/* Piling Cards Process Steps */}
        <div className="relative pt-16">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className={`sticky mb-8 ${index === processSteps.length - 1 ? 'mb-96' : ''}`}
              style={{ 
                top: `${380 + (index * 12)}px`,
                zIndex: index === processSteps.length - 1 ? 60 : index + 1
              }}
            >
              <div className="bg-card/95 backdrop-blur-sm border border-border/50 rounded-3xl p-8 lg:p-12 shadow-lg hover:shadow-xl transition-all duration-300 ease-out">
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
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 