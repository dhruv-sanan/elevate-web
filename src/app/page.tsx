"use client"

import { HeroSection } from "@/components/hero/HeroSection";
import { Hero3D } from "@/components/hero-3d/Hero3D";
import { FeaturesSection } from "@/components/features/FeaturesSection";
import { TestimonialsSection } from "@/components/testimonials/TestimonialsSection";
import { FAQSection } from "@/components/faq/FAQSection";
import { QualificationSection } from "@/components/qualification/QualificationSection";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <main>
      <Hero3D />
      <HeroSection />
      <FeaturesSection />
      <QualificationSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
