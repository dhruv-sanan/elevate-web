"use client"

import React, { useEffect, useRef } from 'react'
import { HeroV1 } from './HeroV1'
// import LocomotiveScroll from 'locomotive-scroll';
// import 'locomotive-scroll/dist/locomotive-scroll.css';

export function DualHeroSection() {
    const containerRef = useRef(null);

    useEffect(() => {
        // Dynamically import LocomotiveScroll to avoid SSR issues
        // and ensure it only runs on the client
        let scroll: any;

        const initScroll = async () => {
            try {
                const LocomotiveScroll = (await import('locomotive-scroll')).default;

                scroll = new LocomotiveScroll({
                    el: (document.querySelector('[data-scroll-container]') as HTMLElement) || containerRef.current,
                    smooth: true,
                    smoothMobile: false,
                    multiplier: 1.0,
                    class: 'is-inview',
                    smartphone: {
                        smooth: true
                    },
                    tablet: {
                        smooth: true
                    }
                } as any);
            } catch (e) {
                console.error("Locomotive Scroll failed to initialize", e);
            }
        };

        initScroll();

        const handleResize = () => {
            if (scroll) scroll.update();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            if (scroll) scroll.destroy();
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div data-scroll-container ref={containerRef}>
            <div className="dual-hero-container">

                {/* V1 Hero: Premium iPhone Showcase (First View) */}
                <HeroV1 />

                {/* Transition Section: Smooth fade/scale effect */}
                <div className="hero-transition" data-scroll data-scroll-speed="2">
                    <div className="transition-gradient"></div>
                </div>

                {/* V2 Hero: Placeholder for now */}
                {/* We can put the 'old' hero or a placeholder here if requested, 
            but for now the prompt focused on V1 placement. 
            I'll leave an empty section or the original hero content if needed later.
        */}
                <section className="hero-v2 min-h-[50vh] flex items-center justify-center bg-gray-900 text-white" id="hero-v2">
                    <div className="text-center p-10">
                        <h2 className="text-4xl font-bold mb-4">Ready to Elevate?</h2>
                        <p className="text-gray-400">Scroll down to see the magic.</p>
                    </div>
                </section>

            </div>
        </div>
    )
}
