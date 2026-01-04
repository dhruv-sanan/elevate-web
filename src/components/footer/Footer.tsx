"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-black/5 dark:bg-[#0F172A] border-t border-black/10 dark:border-white/10 py-16 px-6 relative overflow-hidden">
            {/* Background elements if needed */}

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 relative z-10">

                {/* 1. BRAND */}
                <div className="space-y-6">
                    <Link href="/" className="font-space-grotesk text-2xl font-bold text-foreground block">
                        ElevateWeb
                    </Link>
                    <p className="font-inter text-muted-foreground text-sm leading-relaxed">
                        Amritsar's #1 Web Studio for Restaurants & Hotels.
                        Helping you stop paying commissions and own your customer relationships.
                    </p>
                    <div className="flex gap-4">
                        <SocialLink href="#" icon={Instagram} />
                        <SocialLink href="#" icon={Linkedin} />
                        <SocialLink href="#" icon={Twitter} />
                        <SocialLink href="#" icon={Facebook} />
                    </div>
                </div>

                {/* 2. SERVICES (Quick Links) */}
                <div>
                    <h4 className="font-space-grotesk font-bold text-foreground mb-6">Services</h4>
                    <ul className="space-y-4">
                        <FooterLink href="/#restaurants">For Restaurants</FooterLink>
                        <FooterLink href="/#hotels">For Hotels</FooterLink>
                        <FooterLink href="/#bakeries">For Bakeries</FooterLink>
                        <FooterLink href="/pricing#addons">AI Chatbots</FooterLink>
                    </ul>
                </div>

                {/* 3. COMPANY */}
                <div>
                    <h4 className="font-space-grotesk font-bold text-foreground mb-6">Company</h4>
                    <ul className="space-y-4">
                        <FooterLink href="/about">About Us</FooterLink>
                        <FooterLink href="/timeline">How It Works</FooterLink>
                        <FooterLink href="/pricing">Pricing</FooterLink>
                        <FooterLink href="/contact">Contact</FooterLink>
                    </ul>
                </div>

                {/* 4. CONTACT */}
                <div>
                    <h4 className="font-space-grotesk font-bold text-foreground mb-6">Get in Touch</h4>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3 text-sm text-muted-foreground">
                            <Phone className="w-5 h-5 text-[#00d9a3] shrink-0" />
                            <a href="tel:+917901919447" className="hover:text-foreground transition-colors">
                                +91 79019 19447
                            </a>
                        </li>
                        <li className="flex items-start gap-3 text-sm text-muted-foreground">
                            <Mail className="w-5 h-5 text-[#00d9a3] shrink-0" />
                            <a href="mailto:dhruvsanan01@gmail.com" className="hover:text-foreground transition-colors">
                                dhruvsanan01@gmail.com
                            </a>
                        </li>
                        <li className="flex items-start gap-3 text-sm text-muted-foreground">
                            <MapPin className="w-5 h-5 text-[#00d9a3] shrink-0" />
                            <span>Amritsar, Punjab</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm text-muted-foreground">
                            <Clock className="w-5 h-5 text-[#00d9a3] shrink-0" />
                            <span>Mon-Sat, 9 AM - 8 PM</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* BOTTOM BAR */}
            <div className="max-w-7xl mx-auto pt-8 border-t border-black/10 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
                <p className="font-inter text-sm text-muted-foreground">
                    © {new Date().getFullYear()} ElevateWeb. Built with ❤️ in Amritsar.
                </p>
                <div className="flex gap-6">
                    <Link href="#" className="font-inter text-sm text-muted-foreground hover:text-foreground transition-colors">
                        Privacy Policy
                    </Link>
                    <Link href="#" className="font-inter text-sm text-muted-foreground hover:text-foreground transition-colors">
                        Terms of Service
                    </Link>
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ href, icon: Icon }: { href: string, icon: any }) {
    return (
        <a
            href={href}
            className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center text-muted-foreground hover:bg-[#00d9a3] hover:text-black transition-all duration-300"
        >
            <Icon className="w-5 h-5" />
        </a>
    )
}

function FooterLink({ href, children }: { href: string, children: React.ReactNode }) {
    return (
        <li>
            <Link
                href={href}
                className="font-inter text-sm text-muted-foreground hover:text-[#00d9a3] hover:translate-x-1 transition-all duration-300 inline-block"
            >
                {children}
            </Link>
        </li>
    )
}
