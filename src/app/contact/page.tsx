"use client";

import { ContactHero } from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactCards } from "@/components/contact/ContactCards";
import { GoogleMap } from "@/components/contact/GoogleMap";
import { CalendlyWidget } from "@/components/contact/CalendlyWidget";
import { FAQQuickLinks } from "@/components/contact/FAQQuickLinks";
import { Footer } from "@/components/footer/Footer";

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
