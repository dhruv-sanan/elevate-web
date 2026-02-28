import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactCards } from "@/components/contact/ContactCards";
import { GoogleMap } from "@/components/contact/GoogleMap";
import { CalendlyWidget } from "@/components/contact/CalendlyWidget";
import { FAQQuickLinks } from "@/components/contact/FAQQuickLinks";
import { Footer } from "@/components/footer/Footer";

export const metadata: Metadata = {
    title: "Contact | ElevateWeb",
    description: "Get in touch with ElevateWeb. WhatsApp us for the fastest response. Free consultation for restaurants, cafes, and hotels.",
    openGraph: {
        title: "Contact | ElevateWeb",
        description: "WhatsApp us for a free consultation. Usually respond in under 5 minutes.",
        images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-background">
            {/* HERO */}
            <ContactHero />

            {/* CONTACT METHODS GRID */}
            <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-16">
                <ContactForm />
                <ContactCards />
            </div>

            {/* MAP */}
            <GoogleMap />

            {/* CALENDLY */}
            <CalendlyWidget />

            {/* FAQ LINKS */}
            <FAQQuickLinks />

            <Footer />
        </main>
    );
}
