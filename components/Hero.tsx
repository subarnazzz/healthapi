"use client";

import Image from "next/image";
import { BrandConfig } from "@/lib/brand";
import { motion } from "framer-motion";
import Link from "next/link";

export const Hero = () => {
    return (
        <section className="relative flex min-h-screen items-center bg-white pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-16">


                    <div className="flex-1 text-center lg:text-left pt-10">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-[40px] font-black leading-[1.1] tracking-tight text-zinc-900 md:text-[80px]"
                        >
                            {BrandConfig.hero.title.split(". ").map((part, i, arr) => (
                                <span key={i} className="block">
                                    {part}{i < arr.length - 1 ? "." : ""}
                                </span>
                            ))}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="mt-6 max-w-lg text-sm leading-relaxed text-zinc-600 mx-auto lg:mx-0 md:text-lg"
                        >
                            {BrandConfig.hero.subtitle}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mt-12 flex flex-col items-center gap-6 lg:items-start"
                        >
                            <Link
                                href="#waitlist"
                                className="rounded-full bg-[#ED5D90] px-8 py-4 text-sm font-bold text-white transition-opacity hover:opacity-90"
                            >
                                {BrandConfig.hero.cta}
                            </Link>


                        </motion.div>
                    </div>


                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative w-full max-w-[280px] md:max-w-2xl lg:flex-1"
                    >
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                            <Image
                                src={BrandConfig.hero.image}
                                alt="Intelligent Infrastructure"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>


                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full bg-gradient-to-br from-pink-50/50 to-purple-50/50 blur-[120px] rounded-full" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
