"use client"

import React, { useEffect } from 'react'
import {
    Sparkles,
    ArrowRight,
    ChevronDown,
    ChevronLeft,
    ShoppingCart,
    Coffee,
    Star,
    Signal,
    Wifi,
    Battery,
} from 'lucide-react'
import './hero-v1.css'

export function HeroV1() {

    // Locomotive Scroll logic moved to wrapper or page level if global,
    // but if we want this component strictly responsible for its effects, 
    // we can keep it generic or rely on parent's Scroll context.
    // For now, we will rely on standard CSS animations and data-scroll attributes 
    // picked up by the global Locomotive instance if present, or fallback.

    return (
        <section className="hero-v1" id="hero-v1">
            {/* Background with subtle gradient */}
            <div className="hero-v1-background">
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
            </div>

            <div className="hero-v1-content">
                {/* Left Side: Text Content */}
                <div className="hero-v1-text">
                    <div className="badge block" data-scroll data-scroll-speed="0.5">
                        <Sparkles className="w-4 h-4 inline mr-1" />
                        AMRITSAR'S DIGITAL PARTNER
                    </div>

                    <h1
                        className="hero-v1-headline"
                        data-scroll
                        data-scroll-speed="0.8"
                    >
                        Crafting <span className="text-orange">Digital</span>
                        <br />
                        Experiences for
                        <br />
                        Cafés & Bakeries.
                    </h1>

                    <p
                        className="hero-v1-subtitle"
                        data-scroll
                        data-scroll-speed="0.6"
                    >
                        Turn casual visitors into loyal regulars with a stunning digital
                        menu and seamless ordering experience.
                    </p>

                    <div
                        className="hero-v1-cta"
                        data-scroll
                        data-scroll-speed="0.4"
                    >
                        <button className="cta-button primary">
                            See Demos
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Subtle "scroll to see more" indicator */}
                    <div className="scroll-indicator">
                        <p className="scroll-text">Scroll to discover the real power</p>
                        <ChevronDown className="scroll-icon animate-bounce" />
                    </div>
                </div>

                {/* Right Side: 3D iPhone Mockup */}
                <div
                    className="hero-v1-phone"
                    data-scroll
                    data-scroll-speed="1.2"
                >
                    {/* iPhone 15 Pro with Dynamic Island */}
                    <div className="iphone-container">
                        {/* iPhone Frame */}
                        <div className="iphone-frame">
                            {/* Dynamic Island */}
                            <div className="dynamic-island">
                                <div className="island-camera"></div>
                            </div>

                            {/* Screen Content */}
                            <div className="iphone-screen">
                                {/* Status Bar */}
                                <div className="status-bar">
                                    <span className="time">9:41</span>
                                    <div className="status-right">
                                        <Signal className="w-4 h-4" />
                                        <Wifi className="w-4 h-4" />
                                        <Battery className="w-4 h-4" />
                                    </div>
                                </div>

                                {/* App Content: Café Menu */}
                                <div className="screen-content">
                                    {/* Header */}
                                    <div className="app-header">
                                        <button className="back-button">
                                            <ChevronLeft className="w-5 h-5" />
                                        </button>
                                        <h2 className="app-title">Menu</h2>
                                        <button className="cart-button">
                                            <ShoppingCart className="w-5 h-5 text-orange" />
                                        </button>
                                    </div>

                                    {/* Menu Category */}
                                    <div className="menu-section">
                                        <h3 className="category-title">Morning Brew</h3>
                                        <p className="category-subtitle">Start your day right.</p>

                                        {/* Menu Item 1 */}
                                        <div className="menu-item">
                                            <div className="item-image">
                                                <div className="coffee-icon">☕</div>
                                            </div>
                                            <div className="item-details">
                                                <h4 className="item-name">Caramel Latte</h4>
                                                <p className="item-description">Oat milk • Extra foam</p>
                                                <p className="item-price">$4.50</p>
                                            </div>
                                            <button className="add-button">+</button>
                                        </div>

                                        {/* Menu Item 2 */}
                                        <div className="menu-item">
                                            <div className="item-image">
                                                <div className="avocado-icon">🥑</div>
                                            </div>
                                            <div className="item-details">
                                                <h4 className="item-name">Avo Toast</h4>
                                                <p className="item-description">
                                                    Sourdough • Poached Egg
                                                </p>
                                                <p className="item-price">$8.00</p>
                                            </div>
                                            <button className="add-button">+</button>
                                        </div>
                                    </div>

                                    {/* Checkout Button */}
                                    <button className="checkout-button">Checkout • $12.50</button>
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements (Animated) */}
                        <div className="floating-element element-1">
                            <Coffee className="w-6 h-6 text-orange" />
                        </div>
                        <div className="floating-element element-2">
                            <Star className="w-5 h-5 text-yellow-400" />
                        </div>
                        <div className="floating-element element-3">
                            <Sparkles className="w-5 h-5 text-orange" />
                        </div>
                    </div>

                    {/* Theme Toggle Badge (Floating) */}
                    <div className="theme-badge">
                        <Coffee className="w-4 h-4" />
                        <span>The Café Vibe</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
