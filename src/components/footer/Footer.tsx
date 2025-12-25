'use client';

import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="text-2xl font-bold tracking-tight mb-4 block">
                            ElevateWeb
                        </Link>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                            Building high-conversion websites for Amritsar's hospitality industry.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Company</h3>
                        <ul className="space-y-3">
                            <li><Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-green-500">Home</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Contact</h3>
                        <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                            <li>Amritsar, Punjab, India</li>
                            <li><a href="mailto:hello@elevateweb.in" className="hover:text-green-500">hello@elevateweb.in</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-800 pt-8 text-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} ElevateWeb. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
