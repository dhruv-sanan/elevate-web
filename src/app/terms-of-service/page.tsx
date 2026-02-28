import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer/Footer";

export const metadata: Metadata = {
    title: "Terms of Service | ElevateWeb",
    description:
        "Terms and conditions for ElevateWeb's web app development services for restaurants, cafés, hotels, bakeries, and local businesses.",
};

export default function TermsOfServicePage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <section className="pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <p className="font-inter text-sm text-muted-foreground mb-4">
                        Last updated: February 25, 2026
                    </p>
                    <h1 className="font-space-grotesk text-4xl md:text-5xl font-bold text-foreground mb-6">
                        Terms of Service
                    </h1>
                    <p className="font-inter text-lg text-muted-foreground leading-relaxed mb-16">
                        These Terms of Service (&quot;Terms&quot;) govern your use of the
                        ElevateWeb web app and the web-app development services we provide. By
                        engaging our services or using our web app, you agree to these
                        Terms.
                    </p>

                    <div className="space-y-12 font-inter text-foreground/90 leading-relaxed">
                        {/* 1 */}
                        <TermsSection number="1" title="Services We Provide">
                            <p>ElevateWeb offers the following services:</p>
                            <ul className="list-disc pl-6 space-y-1 mt-3 text-muted-foreground">
                                <li>Custom web app design and development for restaurants, cafés, bakeries, hotels, homestays, cloud kitchens, and local service businesses</li>
                                <li>WhatsApp Business API integration for order confirmations, booking alerts, and customer communication</li>
                                <li>AI-powered chatbot setup for menu recommendations, concierge features, and customer support</li>
                                <li>QR-based table ordering and digital menu systems</li>
                                <li>Direct booking engines for hotels and homestays</li>
                                <li>Search-engine optimisation (SEO), Google Maps integration, and local-search visibility</li>
                                <li>Review automation and Google Business Profile optimisation</li>
                                <li>Ongoing web app maintenance and support (where agreed)</li>
                            </ul>
                            <p className="mt-3">
                                The specific scope of work for each project is defined in a
                                proposal or agreement shared before work begins.
                            </p>
                        </TermsSection>

                        {/* 2 */}
                        <TermsSection number="2" title="Client Obligations">
                            <p>To ensure timely and successful delivery, you agree to:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-3 text-muted-foreground">
                                <li>Provide accurate and complete business information (name, address, contact details, licensing where applicable)</li>
                                <li>Supply web app content — menus, room details, pricing, photos, branding assets — in a timely manner</li>
                                <li>Share domain registrar and hosting credentials required for project setup and deployment</li>
                                <li>Respond to review requests, feedback rounds, and approvals within a reasonable timeframe</li>
                                <li>Ensure that all content you provide does not infringe on any third-party intellectual property rights</li>
                            </ul>
                            <p className="mt-3">
                                Delays in providing content or feedback may extend project
                                timelines. We are not responsible for missed deadlines caused
                                by delayed client inputs.
                            </p>
                        </TermsSection>

                        {/* 3 */}
                        <TermsSection number="3" title="Pricing & Payment">
                            <p>
                                Our pricing is outlined on our{" "}
                                <Link
                                    href="/pricing"
                                    className="text-[#10B981] hover:underline"
                                >
                                    Pricing page
                                </Link>{" "}
                                and in the project proposal shared with you before work
                                begins.
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-3 text-muted-foreground">
                                <li>Payment terms (upfront, milestone-based, or otherwise) will be specified in your project proposal</li>
                                <li>Work begins only after the agreed advance payment is received</li>
                                <li>Final deliverables (source code handover, domain pointing, go-live) are released upon full payment</li>
                                <li>Prices are in Indian Rupees (INR) unless stated otherwise</li>
                                <li>Applicable taxes (GST) will be added where required by law</li>
                            </ul>
                        </TermsSection>

                        {/* 4 */}
                        <TermsSection number="4" title="Revisions & Scope Changes">
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>Each project includes a defined number of revision rounds as specified in the proposal</li>
                                <li>Minor text or image changes within revision rounds are included at no extra cost</li>
                                <li>Requests that fall outside the original scope (new pages, additional integrations, feature additions) will be quoted separately</li>
                                <li>We will always communicate scope changes and associated costs before proceeding</li>
                            </ul>
                        </TermsSection>

                        {/* 5 */}
                        <TermsSection number="5" title="Intellectual Property">
                            <p className="font-semibold mt-1 mb-2">Your content</p>
                            <p className="text-muted-foreground">
                                You retain full ownership of all content you provide —
                                menus, photographs, branding, logos, and copy. We do not
                                claim any rights to your intellectual property.
                            </p>

                            <p className="font-semibold mt-6 mb-2">Our work</p>
                            <p className="text-muted-foreground">
                                Upon full payment, you receive a licence to use the web app
                                we build for you. ElevateWeb retains ownership of underlying
                                code frameworks, templates, reusable components, and
                                proprietary tools developed independently of your project.
                            </p>

                            <p className="font-semibold mt-6 mb-2">Portfolio rights</p>
                            <p className="text-muted-foreground">
                                We reserve the right to showcase your completed project in
                                our portfolio, case studies, and marketing materials (with
                                screenshots and project descriptions) unless you explicitly
                                opt out in writing.
                            </p>
                        </TermsSection>

                        {/* 6 */}
                        <TermsSection number="6" title="Web App Hosting & Maintenance">
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>If hosting is included in your plan, we will maintain your web app on a reliable hosting provider with reasonable uptime expectations (typically 99.9%)</li>
                                <li>Maintenance plans, where applicable, cover security updates, minor content changes, and performance monitoring</li>
                                <li>If you discontinue payment for hosting or maintenance, we will provide reasonable notice before taking the web app offline and will hand over all your content and data upon request</li>
                                <li>We are not liable for downtime caused by hosting-provider outages, DNS propagation, or force-majeure events</li>
                            </ul>
                        </TermsSection>

                        {/* 7 */}
                        <TermsSection number="7" title="Third-Party Integrations">
                            <p>
                                Our web apps may integrate with third-party services
                                including WhatsApp Business API, Google Maps, Google
                                Analytics, AI/LLM providers, and payment gateways.
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-3 text-muted-foreground">
                                <li>These services are governed by their own terms and privacy policies</li>
                                <li>We are not responsible for outages, policy changes, or data handling by third-party providers</li>
                                <li>If a third-party service discontinues or changes its API, we will work with you to find an alternative, which may involve additional costs</li>
                            </ul>
                        </TermsSection>

                        {/* 8 */}
                        <TermsSection number="8" title="Limitation of Liability">
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>ElevateWeb builds web apps designed to increase your online visibility, orders, and bookings — however, we do not guarantee specific business outcomes such as revenue targets, order volumes, or Google ranking positions</li>
                                <li>SEO services are provided on a best-effort basis; search-engine algorithms are outside our control</li>
                                <li>Our total liability for any claim arising from our services shall not exceed the total fees paid by you for the specific project in question</li>
                                <li>We are not liable for indirect, incidental, or consequential damages including lost profits, lost data, or business interruption</li>
                            </ul>
                        </TermsSection>

                        {/* 9 */}
                        <TermsSection number="9" title="Termination">
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>Either party may terminate the engagement with 15 days&apos; written notice via email</li>
                                <li>Upon termination, you will be invoiced for all work completed up to the date of termination</li>
                                <li>After settlement, we will hand over all your content, data, and any deliverables completed to that point</li>
                                <li>Refunds for advance payments are subject to the amount of work already completed and will be calculated on a pro-rata basis</li>
                                <li>Clauses on intellectual property, limitation of liability, and confidentiality survive termination</li>
                            </ul>
                        </TermsSection>

                        {/* 10 */}
                        <TermsSection number="10" title="Confidentiality">
                            <p>
                                Both parties agree to keep confidential any proprietary or
                                sensitive information shared during the engagement —
                                including business data, credentials, pricing, and
                                strategies. This obligation continues for 12 months after the
                                engagement ends.
                            </p>
                        </TermsSection>

                        {/* 11 */}
                        <TermsSection number="11" title="Governing Law & Disputes">
                            <p>
                                These Terms are governed by the laws of India. Any disputes
                                arising from or related to these Terms or our services shall
                                be subject to the exclusive jurisdiction of the courts in
                                Gurugram, Haryana, India.
                            </p>
                            <p className="mt-3">
                                Both parties agree to attempt resolution through good-faith
                                negotiation before pursuing formal legal action.
                            </p>
                        </TermsSection>

                        {/* 12 */}
                        <TermsSection number="12" title="Changes to These Terms">
                            <p>
                                We may update these Terms from time to time. Changes will be
                                posted on this page with an updated &quot;Last updated&quot;
                                date. Continued use of our services after changes are posted
                                constitutes acceptance of the revised Terms.
                            </p>
                        </TermsSection>

                        {/* 13 */}
                        <TermsSection number="13" title="Contact Us">
                            <p>
                                If you have questions about these Terms, get in touch:
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
                        </TermsSection>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

function TermsSection({
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
