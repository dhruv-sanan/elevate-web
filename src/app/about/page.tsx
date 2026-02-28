import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { StorySection } from "@/components/about/StorySection";
import { TeamProfiles } from "@/components/about/TeamProfiles";
import { MissionValues } from "@/components/about/MissionValues";
import { TechStack } from "@/components/about/TechStack";
import { IdealClient } from "@/components/about/IdealClient";
import { AboutCTA } from "@/components/about/AboutCTA";
import { Footer } from "@/components/footer/Footer";

export const metadata: Metadata = {
    title: "About | ElevateWeb",
    description: "Meet the team behind ElevateWeb. India's hospitality-focused web app studio helping restaurants keep 100% of their revenue.",
    openGraph: {
        title: "About | ElevateWeb",
        description: "India's hospitality-focused web app studio. We build commission-free ordering systems.",
        images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            {/* HERO TODO */}
            {/* <AboutHero /> */}

            {/* STORY - Why We Built This */}
            <StorySection />

            {/* TEAM - Founder Profiles */}
            <TeamProfiles />

            {/* MISSION & VALUES */}
            <MissionValues />

            {/* TECH STACK */}
            <TechStack />

            {/* FIT - Red vs Green Cards */}
            <IdealClient />

            {/* CTA */}
            <AboutCTA />

            <Footer />
        </main>
    );
}
