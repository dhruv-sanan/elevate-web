import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer/Footer";

export const metadata: Metadata = {
    title: "Privacy Policy | ElevateWeb",
    description:
        "Learn how ElevateWeb collects, uses, and protects your data. Privacy policy for our web app development services for restaurants, cafés, hotels, and bakeries.",
};

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <section className="pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <p className="font-inter text-sm text-muted-foreground mb-4">
                        Last updated: February 25, 2026
                    </p>
                    <h1 className="font-space-grotesk text-4xl md:text-5xl font-bold text-foreground mb-6">
                        Privacy Policy
                    </h1>
                    <p className="font-inter text-lg text-muted-foreground leading-relaxed mb-16">
                        At ElevateWeb, we respect your privacy. This policy explains what
                        information we collect, how we use it, and the choices you have —
                        whether you are a client, a visitor to our web app, or an end-user
                        of a web app we have built.
                    </p>

                    <div className="space-y-12 font-inter text-foreground/90 leading-relaxed">
                        {/* 1 */}
                        <PolicySection number="1" title="Who We Are">
                            <p>
                                ElevateWeb is a web-development studio based in India. We
                                design and build high-conversion web apps for restaurants,
                                cafés, bakeries, hotels, homestays, cloud kitchens, and
                                local service businesses. Our services include custom
                                web app development, WhatsApp API integrations, AI-powered
                                chatbots, QR-based ordering systems, direct booking engines,
                                and search-engine optimisation.
                            </p>
                            <p className="mt-3">
                                Contact:{" "}
                                <a
                                    href="mailto:growth.elevateweb@gmail.com"
                                    className="text-[#10B981] hover:underline"
                                >
                                    growth.elevateweb@gmail.com
                                </a>{" "}
                                | +91 79019 19447
                            </p>
                        </PolicySection>

                        {/* 2 */}
                        <PolicySection number="2" title="Information We Collect">
                            <p className="font-semibold mt-1 mb-2">From clients</p>
                            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                                <li>Business name, owner name, and contact details (phone, email, address)</li>
                                <li>Web app content you provide — menus, room photos, pricing, branding assets</li>
                                <li>Domain and hosting credentials shared for project setup</li>
                                <li>Payment and billing information for our service fees</li>
                            </ul>

                            <p className="font-semibold mt-6 mb-2">From visitors to elevateweb.in</p>
                            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                                <li>Name, email, and phone number submitted through contact or enquiry forms</li>
                                <li>Device type, browser, IP address, and pages visited (via analytics)</li>
                                <li>Cookie and local-storage data used for theme preferences and session tracking</li>
                            </ul>

                            <p className="font-semibold mt-6 mb-2">From end-users of client web apps</p>
                            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                                <li>Order details, table-booking information, or room-reservation data submitted through web apps we build</li>
                                <li>WhatsApp conversation data processed through integrated WhatsApp Business APIs</li>
                                <li>Analytics and behavioural data collected by third-party tools embedded in client web apps</li>
                            </ul>
                        </PolicySection>

                        {/* 3 */}
                        <PolicySection number="3" title="How We Use Your Information">
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>Design, develop, and maintain your web app</li>
                                <li>Set up and operate WhatsApp order/booking confirmations</li>
                                <li>Configure AI chatbot features (e.g. menu recommendations, concierge bots)</li>
                                <li>Implement QR-based table ordering and direct booking engines</li>
                                <li>Perform SEO, Google Maps integration, and local-search optimisation</li>
                                <li>Process payments for our services</li>
                                <li>Communicate project updates, invoices, and support</li>
                                <li>Improve our own web app and marketing with aggregated, anonymised analytics</li>
                            </ul>
                        </PolicySection>

                        {/* 4 */}
                        <PolicySection number="4" title="Third-Party Services">
                            <p>
                                We integrate with the following third-party services on your
                                behalf or on our own web app. Each has its own privacy
                                policy:
                            </p>
                            <ul className="list-disc pl-6 space-y-1 mt-3 text-muted-foreground">
                                <li><strong>WhatsApp Business API</strong> — for order confirmations, booking alerts, and customer communication</li>
                                <li><strong>Google Maps &amp; Google Business Profile</strong> — for location embeds and local SEO</li>
                                <li><strong>Google Analytics</strong> — for web app traffic and behaviour insights</li>
                                <li><strong>AI / LLM providers</strong> — for powering chatbot and recommendation features</li>
                                <li><strong>Payment gateways</strong> — for processing service-fee payments securely</li>
                                <li><strong>Hosting providers</strong> — for web app deployment and uptime</li>
                            </ul>
                            <p className="mt-3">
                                We only share the minimum data required for each integration
                                to function. We do not sell your personal information to any
                                third party.
                            </p>
                        </PolicySection>

                        {/* 5 */}
                        <PolicySection number="5" title="Cookies & Analytics">
                            <p>
                                Our web app uses cookies and local storage to remember your
                                theme preference (light/dark mode) and to collect anonymous
                                usage analytics. Client web apps we build may use cookies for
                                cart sessions, booking data, and third-party analytics.
                            </p>
                            <p className="mt-3">
                                You can disable cookies in your browser settings at any time.
                                Doing so may affect certain web app features.
                            </p>
                        </PolicySection>

                        {/* 6 */}
                        <PolicySection number="6" title="Client Web App Data Ownership">
                            <p>
                                Any data collected through a web app we build for you —
                                including customer orders, reservations, reviews, and contact
                                submissions — <strong>belongs to you, the client</strong>. We
                                act solely as a service provider and do not claim ownership
                                of your customers&apos; data.
                            </p>
                            <p className="mt-3">
                                We may access this data temporarily for debugging, feature
                                development, or support, but only with your knowledge and for
                                the duration necessary.
                            </p>
                        </PolicySection>

                        {/* 7 */}
                        <PolicySection number="7" title="Data Security">
                            <p>
                                We take reasonable measures to protect your information,
                                including:
                            </p>
                            <ul className="list-disc pl-6 space-y-1 mt-3 text-muted-foreground">
                                <li>SSL/TLS encryption on all web apps we build and on our own site</li>
                                <li>Secure, reputable hosting providers with regular backups</li>
                                <li>Access controls — only authorised team members handle client credentials</li>
                                <li>Credentials shared with us are used solely for project setup and are not stored beyond the project&apos;s active period</li>
                            </ul>
                            <p className="mt-3">
                                No method of electronic transmission is 100% secure. While we
                                strive to protect your data, we cannot guarantee absolute
                                security.
                            </p>
                        </PolicySection>

                        {/* 8 */}
                        <PolicySection number="8" title="Data Retention & Deletion">
                            <p>
                                We retain project files (designs, code, content) for the
                                duration of the client engagement and for up to 12 months
                                after project completion to support maintenance and updates.
                            </p>
                            <p className="mt-3">
                                Enquiry-form submissions and analytics data are retained for
                                up to 24 months and then deleted or anonymised.
                            </p>
                            <p className="mt-3">
                                You may request deletion of your personal data at any time by
                                emailing us at{" "}
                                <a
                                    href="mailto:growth.elevateweb@gmail.com"
                                    className="text-[#10B981] hover:underline"
                                >
                                    growth.elevateweb@gmail.com
                                </a>
                                . We will process your request within 30 days.
                            </p>
                        </PolicySection>

                        {/* 9 */}
                        <PolicySection number="9" title="Your Rights">
                            <p>You have the right to:</p>
                            <ul className="list-disc pl-6 space-y-1 mt-3 text-muted-foreground">
                                <li>Access the personal data we hold about you</li>
                                <li>Request correction of inaccurate data</li>
                                <li>Request deletion of your data</li>
                                <li>Withdraw consent for marketing communications</li>
                                <li>Request a copy of your data in a portable format</li>
                            </ul>
                            <p className="mt-3">
                                To exercise any of these rights, contact us at{" "}
                                <a
                                    href="mailto:growth.elevateweb@gmail.com"
                                    className="text-[#10B981] hover:underline"
                                >
                                    growth.elevateweb@gmail.com
                                </a>
                                .
                            </p>
                        </PolicySection>

                        {/* 10 */}
                        <PolicySection number="10" title="Changes to This Policy">
                            <p>
                                We may update this Privacy Policy from time to time. Changes
                                will be posted on this page with an updated &quot;Last
                                updated&quot; date. We encourage you to review this page
                                periodically.
                            </p>
                        </PolicySection>

                        {/* 11 */}
                        <PolicySection number="11" title="Contact Us">
                            <p>
                                If you have questions or concerns about this Privacy Policy,
                                reach out to us:
                            </p>
                            <ul className="mt-3 space-y-1 text-muted-foreground">
                                <li>
                                    Email:{" "}
                                    <a
                                        href="mailto:growth.elevateweb@gmail.com"
                                        className="text-[#10B981] hover:underline"
                                    >
                                        growth.elevateweb@gmail.com
                                    </a>
                                </li>
                                <li>Phone: +91 79019 19447</li>
                                <li>
                                    Or visit our{" "}
                                    <Link
                                        href="/contact"
                                        className="text-[#10B981] hover:underline"
                                    >
                                        Contact page
                                    </Link>
                                </li>
                            </ul>
                        </PolicySection>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

function PolicySection({
    number,
    title,
    children,
}: {
    number: string;
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div>
            <h2 className="font-space-grotesk text-2xl font-bold text-foreground mb-4">
                {number}. {title}
            </h2>
            <div className="font-inter text-muted-foreground leading-relaxed">
                {children}
            </div>
        </div>
    );
}
