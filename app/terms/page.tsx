import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BrandConfig } from "@/lib/brand";

export default function TermsPage() {
    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Navbar />
            <main className="flex-1 pt-48 pb-20 bg-white">
                <div className="container mx-auto max-w-4xl px-6">
                    <h1 className="mb-10 text-4xl font-black tracking-tight text-zinc-900 md:text-6xl text-center">Terms of Service</h1>
                    <div className="prose prose-zinc max-w-none text-zinc-600">
                        <p className="mb-6 text-sm italic text-zinc-400 text-center">Last Updated: January 1, {BrandConfig.establishedYear}</p>

                        <div className="space-y-12 mt-12">
                            <section>
                                <h2 className="mb-4 text-2xl font-bold text-zinc-900">1. Acceptance of Conditions</h2>
                                <p>
                                    By engaging with {BrandConfig.name} or requesting access to our intelligent infrastructure, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. These terms govern the use of our API-first financial automation platform as developed in {BrandConfig.establishedYear}.
                                </p>
                            </section>

                            <section>
                                <h2 className="mb-4 text-2xl font-bold text-zinc-900">2. Scope of Service</h2>
                                <p>
                                    {BrandConfig.name} provides a technological framework for healthcare financial operations, including automated insurance verification and claim status tracking. During this early access phase, services are provided to help organizations innovate at startup speed. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.
                                </p>
                            </section>

                            <section>
                                <h2 className="mb-4 text-2xl font-bold text-zinc-900">3. Usage Eligibility and Professional Conduct</h2>
                                <p>
                                    Our platform is designed for professional use by healthcare providers, developers, and administrators. Users agreement to maintain ethical standards when utilizing our automations. Unauthorized reverse engineering of our AI models or intelligent infrastructure logic is strictly prohibited.
                                </p>
                            </section>

                            <section>
                                <h2 className="mb-4 text-2xl font-bold text-zinc-900">4. Intellectual Property</h2>
                                <p>
                                    The software, design, brand assets, and proprietary AI models underlying {BrandConfig.name} are the exclusive property of {BrandConfig.name} Inc. Access to our waitlist or platform does not grant any ownership rights. All rights not expressly granted herein are reserved.
                                </p>
                            </section>

                            <section>
                                <h2 className="mb-4 text-2xl font-bold text-zinc-900">5. Limitation of Liability</h2>
                                <p>
                                    To the fullest extent permitted by law, {BrandConfig.name} shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our automation tools. Our service is provided "as is" with the goal of revolutionizing workflows through intelligent infrastructure.
                                </p>
                            </section>

                            <section>
                                <h2 className="mb-4 text-2xl font-bold text-zinc-900">6. Governing Law</h2>
                                <p>
                                    These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which {BrandConfig.name} is incorporated, without regard to its conflict of law provisions.
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
