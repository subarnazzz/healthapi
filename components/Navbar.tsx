"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { BrandConfig } from "@/lib/brand";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showBanner, setShowBanner] = useState(true);

    return (
        <header className="fixed top-0 z-50 w-full bg-white">
            {/* Top Banner */}
            <AnimatePresence>
                {showBanner && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="relative overflow-hidden bg-[#18181b] py-2 text-center text-[11px] font-medium tracking-wide text-white"
                    >
                        <div className="container mx-auto px-6 pr-12">
                            {BrandConfig.name} Achieves SOC2 Type II Certification for Advanced AI Security{" "}
                            <a href="#" className="ml-1 text-pink-400 hover:underline">Learn more</a>
                        </div>
                        <button
                            onClick={() => setShowBanner(false)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1 text-white/50 transition-colors hover:text-white"
                        >
                            <X size={14} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            <nav className="border-b border-zinc-100 py-6">
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="flex items-center">
                            <Logo />
                        </Link>


                        <div className="hidden items-center gap-10 md:flex">
                            {BrandConfig.navbar.links.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="text-[13px] font-medium text-zinc-600 transition-colors hover:text-black"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        <div className="hidden items-center gap-4 md:flex">
                            <Link
                                href="#waitlist"
                                className="rounded-full bg-[#ED5D90] px-6 py-2 text-sm font-bold text-white transition-opacity hover:opacity-90"
                            >
                                {BrandConfig.navbar.cta}
                            </Link>
                        </div>


                        <button
                            className="text-black md:hidden"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>


                <AnimatePresence>
                    {isOpen && (
                        <>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setIsOpen(false)}
                                className="fixed inset-0 top-[116px] z-40 bg-zinc-900/10 backdrop-blur-sm md:hidden"
                            />
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="absolute left-0 top-full z-50 w-full border-b border-zinc-100 bg-white md:hidden shadow-xl"
                            >
                                <div className="flex flex-col gap-4 p-6">
                                    {BrandConfig.navbar.links.map((link) => (
                                        <Link
                                            key={link.label}
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className="text-base font-semibold text-zinc-900"
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                    <Link
                                        href="#waitlist"
                                        onClick={() => setIsOpen(false)}
                                        className="w-full rounded-full bg-[#ED5D90] p-4 text-center text-sm font-bold text-white"
                                    >
                                        {BrandConfig.navbar.cta}
                                    </Link>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
};
