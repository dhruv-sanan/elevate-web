"use client"

import { Calendar } from "lucide-react"

export function StickyMobileCTA() {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden backdrop-blur-xl bg-black/80 border-t border-white/10 px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
            <a
                href="https://calendly.com/dhruvsanan2001/free-website-demo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#00d9a3] hover:bg-[#00c291] text-black font-semibold w-full py-3.5 rounded-xl text-base transition-all duration-300 shadow-[0_0_20px_rgba(0,217,163,0.3)]"
            >
                <Calendar className="w-5 h-5" />
                Book a Free Call
            </a>
        </div>
    )
}