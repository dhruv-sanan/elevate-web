"use client"

import { Calendar } from "lucide-react"

export function StickyMobileCTA() {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pointer-events-none">
            <a
                href="https://calendly.com/dhruvsanan2001/free-website-demo"
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto flex items-center justify-center gap-2 bg-black/40 backdrop-blur-[10px] border border-white/10 text-white font-semibold w-full py-3.5 rounded-xl text-base transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.2)]"
            >
                <Calendar className="w-5 h-5" />
                Book a Free Call
            </a>
        </div>
    )
}