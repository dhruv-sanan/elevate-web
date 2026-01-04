'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CafeVibeToggle } from "@/components/hero-3d/CafeVibeToggle"
import { useTheme } from '@/components/theme-provider';
import { Menu, X, ChevronDown } from 'lucide-react';

// ...
// ... (existing imports)

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const pathname = usePathname();
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    const navLinks = [
        { name: 'Demos', href: 'https://yummin.vercel.app', target: '_blank' },
        { name: 'Timeline', href: '/timeline' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    const serviceLinks = [
        {
            name: 'For Restaurants',
            href: '/services#restaurants',
            icon: '🍽️',
            desc: 'Online ordering, QR menus'
        },
        {
            name: 'For Hotels',
            href: '/services#hotels',
            icon: '🏨',
            desc: 'Direct bookings, room tours'
        },
        {
            name: 'For Bakeries',
            href: '/services#bakeries',
            icon: '🧁',
            desc: 'Custom cake forms, pre-orders'
        },
        {
            name: 'AI Chatbots',
            href: '/services#ai',
            icon: '🤖',
            desc: 'Smart customer support'
        },
    ];

    return (
        <>
            <motion.nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${isScrolled
                    ? 'h-18 bg-navbar-glass backdrop-blur-xl border-b border-navbar-border shadow-navbar'
                    : 'h-22 bg-transparent'
                    }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            >
                <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="group">
                        <motion.span
                            className={`text-2xl font-bold transition-all ${isScrolled
                                ? 'text-text-primary'
                                : 'text-white'
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            ElevateWeb
                        </motion.span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-8">
                        {/* Services Dropdown */}
                        {/* <div
                            className="relative"
                            onMouseEnter={() => setIsServicesOpen(true)}
                            onMouseLeave={() => setIsServicesOpen(false)}
                        >
                            <button
                                className={`flex items-center gap-1 font-medium transition-colors ${isScrolled ? 'text-text-primary' : 'text-white'
                                    } hover:text-accent`}
                            >
                                Services
                                <ChevronDown
                                    className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>

                            <AnimatePresence>
                                {isServicesOpen && (
                                    <motion.div
                                        className="absolute top-full left-0 mt-2 w-80"
                                        variants={{
                                            hidden: { opacity: 0, y: -10, scale: 0.95 },
                                            visible: { opacity: 1, y: 0, scale: 1 },
                                        }}
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                                    >
                                        <div className="glass-card p-4 space-y-2">
                                            {serviceLinks.map((service) => (
                                                <Link
                                                    key={service.href}
                                                    href={service.href}
                                                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-accent/10 
                                     transition-all hover:translate-x-1"
                                                >
                                                    <span className="text-2xl">{service.icon}</span>
                                                    <div>
                                                        <p className="font-semibold text-sm text-text-primary">
                                                            {service.name}
                                                        </p>
                                                        <p className="text-xs text-text-muted">
                                                            {service.desc}
                                                        </p>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div> */}

                        {/* Regular Nav Links */}
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                target={link.target}
                                className={`relative font-medium transition-colors ${isScrolled ? 'text-text-primary' : 'text-white'
                                    } hover:text-accent ${pathname === link.href ? 'text-accent' : ''
                                    }`}
                            >
                                {link.name}
                                {pathname === link.href && (
                                    <motion.span
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                                        layoutId="navbar-indicator"
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Right Side: Theme Toggle + WhatsApp */}
                    <div className="flex items-center gap-3">


                        {/* WhatsApp Button - Desktop */}
                        <motion.a
                            href="https://wa.me/917901919447?text=Hi!%20I'm%20interested%20in%20a%20commission-free%20website."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden lg:flex glass-button-primary items-center gap-2 px-4 h-11 mr-4"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="font-semibold text-sm">Chat Now</span>
                        </motion.a>

                        {/* Cafe Vibe Toggle */}
                        {/* <div className="hidden lg:block">
                            <CafeVibeToggle />
                        </div> */}

                        {/* Mobile Menu Button */}
                        <motion.button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden glass-button w-10 h-10 flex items-center justify-center"
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.92 }}
                        >
                            <AnimatePresence mode="wait">
                                {isMobileMenuOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <X className="w-5 h-5" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Menu className="w-5 h-5" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="fixed inset-0 z-40 lg:hidden"
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    >
                        <div className="absolute inset-0 bg-navbar-glass backdrop-blur-3xl">
                            <div className="flex flex-col h-full px-6 pt-24 pb-8">
                                <nav className="flex-1 space-y-2">
                                    {/* Services (expandable) */}
                                    <div>
                                        <button
                                            onClick={() => setIsServicesOpen(!isServicesOpen)}
                                            className="w-full flex items-center justify-between py-4 text-2xl font-bold
                                 text-text-primary border-b border-glass-border"
                                        >
                                            Services
                                            <ChevronDown
                                                className={`w-6 h-6 transition-transform ${isServicesOpen ? 'rotate-180' : ''
                                                    }`}
                                            />
                                        </button>
                                        <AnimatePresence>
                                            {isServicesOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="overflow-hidden pl-4"
                                                >
                                                    {serviceLinks.map((service, i) => (
                                                        <motion.div
                                                            key={service.href}
                                                            initial={{ x: -20, opacity: 0 }}
                                                            animate={{ x: 0, opacity: 1 }}
                                                            transition={{ delay: i * 0.05 }}
                                                        >
                                                            <Link
                                                                href={service.href}
                                                                className="flex items-center gap-3 py-3 text-lg text-text-secondary
                                           hover:text-accent hover:translate-x-2 transition-all"
                                                            >
                                                                <span>{service.icon}</span>
                                                                <span>{service.name}</span>
                                                            </Link>
                                                        </motion.div>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    {/* Other Links */}
                                    {navLinks.map((link, i) => (
                                        <motion.div
                                            key={link.href}
                                            initial={{ x: -20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: (i + 1) * 0.08 }}
                                        >
                                            <Link
                                                href={link.href}
                                                className="block py-4 text-2xl font-bold text-text-primary
                                   border-b border-glass-border hover:text-accent
                                   hover:translate-x-2 transition-all"
                                            >
                                                {link.name}
                                            </Link>
                                        </motion.div>
                                    ))}
                                </nav>

                                {/* Cafe Vibe Toggle - Mobile */}
                                <div className="flex justify-center py-4">
                                    <CafeVibeToggle />
                                </div>

                                {/* WhatsApp CTA - Mobile */}
                                <motion.a
                                    href="https://wa.me/917901919447"
                                    target="_blank"
                                    className="glass-button-primary flex items-center justify-center gap-2 h-14 text-lg font-semibold"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Chat on WhatsApp →
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
