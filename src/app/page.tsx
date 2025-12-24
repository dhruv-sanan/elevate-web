"use client"

import { DualHeroSection } from "@/components/hero/DualHeroSection";
import { FeaturesSection } from "@/components/features/FeaturesSection";
import { TestimonialsSection } from "@/components/testimonials/TestimonialsSection";
import { FAQSection } from "@/components/faq/FAQSection";
import { ProcessSection } from "@/components/process/ProcessSection";
import { PricingSection } from "@/components/pricing/PricingSection";
import { QualificationSection } from "@/components/qualification/QualificationSection";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <main>
      <DualHeroSection />
      <FeaturesSection />
      <ProcessSection />
      <FAQSection />
      <PricingSection />
      <QualificationSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
