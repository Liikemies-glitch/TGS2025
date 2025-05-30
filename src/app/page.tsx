import { HeroSection } from "@/components/blocks/hero-section-4";
import { ProblemSection } from "@/components/blocks/problem-section";
import { SolutionSection } from "@/components/blocks/solution-section";
import { TeamSection } from "@/components/blocks/team-section";
import { TestimonialsSection } from "@/components/blocks/testimonials-section";
import { PricingSection } from "@/components/blocks/pricing-section";
import { CTASection } from "@/components/blocks/cta-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <TeamSection />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
    </>
  );
} 