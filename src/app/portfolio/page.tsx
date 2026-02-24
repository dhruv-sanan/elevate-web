"use client"

import { PortfolioHero } from "@/components/portfolio/PortfolioHero"
import { RestaurantShowcase } from "@/components/portfolio/RestaurantShowcase"
import { ImpactNumbers } from "@/components/portfolio/ImpactNumbers"
import { PortfolioTestimonials } from "@/components/portfolio/PortfolioTestimonials"
import { PortfolioCTA } from "@/components/portfolio/PortfolioCTA"
import { Footer } from "@/components/footer/Footer"

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0F172A] selection:bg-emerald-500 selection:text-white">
      <PortfolioHero />
      <RestaurantShowcase />
      <ImpactNumbers />
      <PortfolioTestimonials />
      <PortfolioCTA />
      <Footer />
    </main>
  )
}
