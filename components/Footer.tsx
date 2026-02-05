import Link from "next/link";
import { BrandConfig } from "@/lib/brand";
import { Logo } from "./Logo";

export const Footer = () => {
    return (
        <footer className="bg-white py-12 md:py-20 border-t border-zinc-100">
            <div className="container mx-auto px-6">
                {/* Main Links Grid */}
                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-12 md:mb-16">
                    {BrandConfig.footer.sections.map((section) => (
                        <div key={section.title}>
                            <h4 className="mb-6 text-[11px] font-bold uppercase tracking-widest text-zinc-900">{section.title}</h4>
                            <div className="flex flex-col gap-3">
                                {section.links.map((link) => (
                                    <Link key={link} href="#" className="text-[13px] text-zinc-500 hover:text-black transition-colors">{link}</Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact Info Section */}
                <div className="py-8 border-t border-zinc-100 mb-8">
                    <p className="text-[13px] text-zinc-500">
                        Connect with {BrandConfig.name}: <a href={`mailto:${BrandConfig.footer.contact.email}`} className="text-pink-500 hover:underline">{BrandConfig.footer.contact.email}</a> or call {BrandConfig.footer.contact.phone}
                    </p>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4">
                    <div className="flex flex-wrap items-center gap-6">
                        <p className="text-[11px] text-zinc-400">
                            Copyright © {BrandConfig.establishedYear} {BrandConfig.name} Inc. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            <Link href="/privacy" className="text-[11px] text-zinc-400 hover:text-zinc-900">Privacy Policy</Link>
                            <Link href="/terms" className="text-[11px] text-zinc-400 hover:text-zinc-900">Terms of Service</Link>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
};
