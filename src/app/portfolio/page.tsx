import type { Metadata } from "next"
import { PortfolioHero } from "@/components/portfolio/PortfolioHero"
import { RestaurantShowcase } from "@/components/portfolio/RestaurantShowcase"
import { ImpactNumbers } from "@/components/portfolio/ImpactNumbers"
import { PortfolioTestimonials } from "@/components/portfolio/PortfolioTestimonials"
import { PortfolioCTA } from "@/components/portfolio/PortfolioCTA"
import { Footer } from "@/components/footer/Footer"

export const metadata: Metadata = {
  title: "Portfolio | ElevateWeb",
  description: "See how restaurants, cafes, and hotels across India are using our commission-free web apps to boost direct orders and revenue.",
  openGraph: {
    title: "Portfolio | ElevateWeb",
    description: "Real results from real restaurants. Commission-free ordering web apps that drive revenue.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
}

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
