import type { Metadata } from "next";
import { PricingSection } from "@/components/pricing/PricingSection";
import { Footer } from "@/components/footer/Footer";

export const metadata: Metadata = {
    title: "Pricing | ElevateWeb",
    description: "Transparent pricing for commission-free ordering web apps. One-time setup from ₹25,000. No hidden fees. No contracts.",
    openGraph: {
        title: "Pricing | ElevateWeb",
        description: "One-time setup. No commissions. No hidden fees. Web apps that pay for themselves.",
        images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
};

export default function PricingPage() {
    return (
        <main>
            <PricingSection />
            <Footer />
        </main>
    );
}
