import { HeroSection } from "@/components/blocks/hero-section-4";
import { ProblemSection } from "@/components/blocks/problem-section";
import { FeaturesSection } from "@/components/blocks/features-section";
import { SolutionSection } from "@/components/blocks/solution-section";
import { TestimonialsSection } from "@/components/blocks/testimonials-section";
import { PricingSection } from "@/components/blocks/pricing-section";
import { CTASection } from "@/components/blocks/cta-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <FeaturesSection />
      <SolutionSection />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
    </>
  );
} 