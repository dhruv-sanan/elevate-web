"use client";

import { AboutHero } from "@/components/about/AboutHero";
import { StorySection } from "@/components/about/StorySection";
import { TeamProfiles } from "@/components/about/TeamProfiles";
import { MissionValues } from "@/components/about/MissionValues";
import { TechStack } from "@/components/about/TechStack";
import { IdealClient } from "@/components/about/IdealClient";
import { AboutCTA } from "@/components/about/AboutCTA";
import { Footer } from "@/components/footer/Footer";

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
