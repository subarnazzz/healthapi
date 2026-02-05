import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BrandConfig } from "@/lib/brand";

export default function PrivacyPage() {
    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Navbar />
            <main className="flex-1 pt-48 pb-20 bg-white">
                <div className="container mx-auto max-w-4xl px-6">
                    <h1 className="mb-10 text-4xl font-black tracking-tight text-zinc-900 md:text-6xl text-center">Privacy Policy</h1>
                    <div className="prose prose-zinc max-w-none text-zinc-600">
                        <p className="mb-6 text-sm italic text-zinc-400 text-center">Effective Date: January 1, {BrandConfig.establishedYear}</p>

                        <div className="space-y-12 mt-12">
                            <section>
                                <h2 className="mb-4 text-2xl font-bold text-zinc-900">1. Commitment to Privacy</h2>
                                <p>
                                    At {BrandConfig.name}, we recognize the critical importance of privacy in the era of intelligent infrastructure and high-speed automation. This policy explains how we handle data within our {BrandConfig.establishedYear} platform architecture. We are dedicated to maintaining the highest standards of transparency regarding how we collect, process, and safeguard your information.
                                </p>
                            </section>

                            <section>
                                <h2 className="mb-4 text-2xl font-bold text-zinc-900">2. Information Collection</h2>
                                <p className="mb-4">
                                    We collect information necessary to provide our API-first services and improve our intelligent workflows:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Direct Inputs:</strong> Email address and contact details provided during the "Request Access" or waitlist phase.</li>
                                    <li><strong>Technical Data:</strong> Usage logs, API interaction metrics, and performance data required for error telemetry and system optimization.</li>
                                    <li><strong>AI Processing Data:</strong> Unidentified metadata required to train and refine our automation models for better accuracy in financial workflows.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="mb-4 text-2xl font-bold text-zinc-900">3. How We Use Data</h2>
                                <p>
                                    Your data is used exclusively to facilitate healthcare financial automations, manage early-access invitations, and ensure the security of our unified intelligence platform. We do not sell your personal data. We utilize aggregated, non-identifiable data to enhance our platform's predictive capabilities and automation speed.
                                </p>
                            </section>

                            <section>
                                <h2 className="mb-4 text-2xl font-bold text-zinc-900">4. Intelligent Infrastructure Security</h2>
                                <p>
                                    We implement SOC2-aligned security protocols to protect our data environment. Our infrastructure uses advanced encryption for both data at rest and in transit. As a provider of intelligent infrastructure, we continuously monitor for unauthorized access and maintain robust backup systems to ensure business continuity.
                                </p>
                            </section>

                            <section>
                                <h2 className="mb-4 text-2xl font-bold text-zinc-900">5. Your Controls</h2>
                                <p>
                                    You may request to be removed from our waitlist or have your contact information deleted at any time by contacting our support team. We respect "right to be forgotten" requests in accordance with modern digital privacy standards.
                                </p>
                            </section>

                            <section>
                                <h2 className="mb-4 text-2xl font-bold text-zinc-900">6. Contact Information</h2>
                                <p>
                                    For any questions regarding this policy or our data practices, please reach out to us at:
                                    <br />
                                    <span className="font-bold text-zinc-900">Email:</span> {BrandConfig.footer.contact.email}
                                    <br />
                                    <span className="font-bold text-zinc-900">Established:</span> {BrandConfig.establishedYear}
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
