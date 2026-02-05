"use client";

import { useState } from "react";
import { BrandConfig } from "@/lib/brand";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Mail } from "lucide-react";

export const WaitlistForm = () => {
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 800));
        setIsLoading(false);
        setIsSubmitted(true);
    };

    return (
        <section id="waitlist" className="bg-white py-16 md:py-24 border-t border-zinc-100">
            <div className="container mx-auto px-6">
                <div className="mx-auto max-w-2xl text-center">
                    <AnimatePresence mode="wait">
                        {!isSubmitted ? (
                            <motion.div
                                key="form"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                            >
                                <div className="mb-6 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-zinc-50 text-zinc-900">
                                    <Mail size={32} />
                                </div>
                                <h2 className="mb-4 text-3xl font-black tracking-tight text-zinc-900 md:text-4xl">
                                    Ready to start?
                                </h2>
                                <p className="mb-10 text-zinc-500">
                                    Get started with {BrandConfig.name} today. Join the waitlist and our team will get back to you shortly.
                                </p>
                                <form
                                    onSubmit={handleSubmit}
                                    className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
                                >
                                    <input
                                        type="email"
                                        required
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="h-14 w-full md:h-14 flex-1 rounded-full border border-zinc-200 bg-zinc-50 px-6 py-4 text-base text-zinc-900 outline-none transition-all focus:border-pink-500 focus:bg-white"
                                    />
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="flex h-14 items-center justify-center rounded-full bg-[#ED5D90] px-8 text-sm font-bold text-white transition-opacity hover:opacity-90 disabled:opacity-50 min-w-[160px]"
                                    >
                                        {isLoading ? "Please wait..." : "Join Waitlist"}
                                    </button>
                                </form>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center"
                            >
                                <div className="mb-6 rounded-full bg-green-50 p-4 text-green-500">
                                    <CheckCircle2 size={48} />
                                </div>
                                <h3 className="mb-4 text-2xl font-bold text-zinc-900">
                                    Success!
                                </h3>
                                <p className="text-zinc-500 max-w-sm">
                                    {BrandConfig.contact.successMessage}
                                </p>
                                <button
                                    onClick={() => setIsSubmitted(false)}
                                    className="mt-8 text-sm font-bold text-pink-500 hover:underline"
                                >
                                    Go back
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};
