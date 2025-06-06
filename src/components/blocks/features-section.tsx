"use client";

import { AnimatedList } from "@/components/ui/animated-list";
import { BentoGrid } from "@/components/ui/bento-grid";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Clock, Search } from "lucide-react";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

interface ContractOption {
  title: string;
  description: string;
}

const contractOptions: ContractOption[] = [
  { title: "2 days/week", description: "Part-time consulting" },
  { title: "3-4 days/week", description: "Extended engagement" },
  { title: "Full-time", description: "Complete team integration" },
  { title: "Project-based", description: "Specific deliverables" }
];

const teamMembers = [
  {
    imageUrl: "/images/team/aksel ai.png",
    profileUrl: "#"
  },
  {
    imageUrl: "/images/team/mikki ai.png", 
    profileUrl: "#"
  },
  {
    imageUrl: "/images/team/tuomas ai.png",
    profileUrl: "#"
  }
];

const designSpecialties = [
  "UX Researcher",
  "Product Designer", 
  "UX/UI Designer",
  "Web Designer",
  "Service Designer",
  "Business Designer"
];

export function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Disconnect observer after first trigger to prevent re-triggering
          observer.disconnect();
        }
      },
      {
        threshold: 0.6, // Trigger when 60% of the section is visible
        rootMargin: "0px 0px -50px 0px" // Trigger closer to when the content is actually visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const bentoItems = [
        {
      title: "",
      description: (
        <div className="h-full flex flex-col">
          <div className="mb-6">
            <h3 className="text-xl md:text-2xl font-medium mb-3 text-foreground">Senior Full Stack Designers</h3>
            <p className="text-base">Expert designers who solve complex problems from strategy to implementation.</p>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="flex -space-x-6 md:-space-x-12">
              {teamMembers.map((member, index) => (
                <Image
                  key={index}
                  src={member.imageUrl}
                  alt={`Designer ${index + 1}`}
                  width={224}
                  height={224}
                  className="w-24 h-24 md:w-56 md:h-56 rounded-lg object-cover shadow-lg"
                  style={{ zIndex: teamMembers.length - index }}
                />
              ))}
            </div>
          </div>
        </div>
      ),
      icon: <Users className="h-6 w-6" />,
      meta: "10+ years experience",
      hasPersistentHover: true
    },
    {
      title: "",
      description: (
        <div className="h-full flex flex-col justify-start md:absolute md:top-16 md:left-6 md:right-6 md:bottom-6 -mt-6 md:mt-0">
          <h3 className="text-xl md:text-2xl font-medium mb-3 text-foreground">Flexible Contract Options</h3>
          <p className="mb-4">From part-time consulting to full-time team members, we adapt to your needs.</p>
          <div className="h-56 overflow-hidden">
            {isVisible && (
              <AnimatedList delay={500}>
                {contractOptions.map((option, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-muted/50 rounded-md">
                    <span className="font-medium text-sm">{option.title}</span>
                    <span className="text-xs text-muted-foreground">{option.description}</span>
                  </div>
                ))}
              </AnimatedList>
            )}
          </div>
        </div>
      ),
      icon: <Clock className="h-6 w-6" />,
      meta: "Start in 2 weeks"
    },
    {
      title: "",
      description: (
        <div className="h-full flex flex-col justify-start -mt-6">
          <h3 className="text-xl md:text-2xl font-medium mb-3 text-foreground">Talent Sourcing & Placement</h3>
          <p className="mb-4">Don&apos;t have the right expertise? We source specialized designers and hire them directly on our payroll for your project.</p>
          <div className="flex flex-wrap gap-1">
            {designSpecialties.map((specialty, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {specialty}
              </Badge>
            ))}
          </div>
        </div>
      ),
      icon: <Search className="h-6 w-6" />,
      meta: "100+ designer network"
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-left">
            <p className="text-xs text-brand-blue dark:text-brand-blue-light font-medium uppercase tracking-wide mb-6">
              How it works?
            </p>
            <h2 className="text-3xl md:text-4xl font-medium mb-4">
              Skip the <span className="text-brand-blue dark:text-brand-blue-light">3-month hiring process</span><br />
              and expensive <span className="text-brand-blue dark:text-brand-blue-light">design mistakes</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Get senior-level designers who understand your business goals, ship quality work consistently, and integrate with your team—without the overhead of full-time hires.
            </p>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto relative">
          <BentoGrid items={bentoItems} />
          
          {/* CTA in the white space - hidden on mobile */}
          <div className="hidden md:flex absolute bottom-6 right-6 items-center space-x-4">
            <p className="text-sm text-muted-foreground">Start in 2 weeks</p>
            <Button
              size="lg"
              className="px-5 text-base">
              <span className="text-nowrap">Schedule Meeting with Mikki</span>
            </Button>
          </div>
        </div>

        {/* Mobile CTA */}
        <div className="md:hidden text-center mt-12">
          <Button
            size="lg"
            className="px-5 text-base">
            <span className="text-nowrap">Schedule Meeting with Mikki</span>
          </Button>
          <p className="text-sm text-muted-foreground mt-2">Start in 2 weeks</p>
        </div>
        
      </div>
    </section>
  );
} 