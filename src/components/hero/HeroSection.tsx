"use client"

import { HeroLeft } from "./HeroLeft"
import { HeroRight } from "./HeroRight"
import { ClientLogos } from "./ClientLogos"
import { ChevronDown } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
    return (
        <section className="relative w-full min-h-screen overflow-hidden bg-white dark:bg-black transition-colors duration-500">
            <div className="absolute inset-0 bg-white dark:bg-black opacity-100 dark:opacity-100 transition-opacity duration-500" />

            {/* Main Layout Container */}
            <div className="container mx-auto px-4 md:px-6 pt-20 min-h-screen flex flex-col justify-between max-w-[1400px]">

                {/* Content Wrapper for Vertical Centering */}
                <div className="flex-grow flex items-center justify-center z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8 w-full">
                        {/* Left Content */}
                        <div className="w-full lg:w-[55%] pt-10 lg:pt-0">
                            <HeroLeft />
                        </div>

                        {/* Right Visual */}
                        <div className="w-full lg:w-[45%] flex items-center justify-center">
                            <HeroRight />
                        </div>
                    </div>
                </div>

                {/* Client Logos - Natural Flow at Bottom */}
                <div className="w-full pb-6 z-20 mt-10 md:mt-0">
                    <ClientLogos />
                </div>

            </div>



        </section>
    )
}
