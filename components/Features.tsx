"use client";

import Image from "next/image";
import { BrandConfig } from "@/lib/brand";
import { Check, Zap, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

const FeatureImageSection = ({
    tag,
    title,
    desc,
    image,
    reversed = false
}: {
    tag: string,
    title: string,
    desc: string,
    image: string,
    reversed?: boolean
}) => (
    <section className="py-16 md:py-24 border-b border-zinc-50 bg-white">
        <div className="container mx-auto px-6">
            <div className={cn("flex flex-col items-center gap-8 lg:flex-row lg:gap-12", reversed && "lg:flex-row-reverse")}>
                <div className="flex-1 max-w-xl">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-purple-50 text-purple-400">
                        <Zap size={24} />
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4">
                        {tag}
                    </p>
                    <h2 className="text-2xl font-bold tracking-tight text-zinc-900 mb-6 font-sans md:text-4xl">
                        {title}
                    </h2>
                    <p className="text-lg leading-relaxed text-zinc-600 mb-8">
                        {desc}
                    </p>
                    <a href="#waitlist" className="text-pink-500 font-bold flex items-center gap-1 hover:gap-2 transition-all">
                        Get started <span>→</span>
                    </a>
                </div>
                <div className="flex-1 w-full">
                    <div className="relative aspect-video rounded-2xl overflow-hidden border border-zinc-100 bg-zinc-50">
                        <Image src={image} alt={title} fill className="object-cover" />
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const FeatureListSection = ({
    tag,
    title,
    image,
    items,
    reversed = false
}: {
    tag: string,
    title: string,
    image: string,
    items?: { title: string, desc: string }[],
    reversed?: boolean
}) => (
    <section className="py-16 md:py-24 bg-white border-b border-zinc-50 overflow-hidden">
        <div className="container mx-auto px-6">
            <div className="text-center mb-10 md:mb-16">
                <div className="mb-6 mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-50 text-green-400">
                    <Rocket size={24} />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4">
                    {tag}
                </p>
                <h2 className="text-2xl font-bold tracking-tight text-zinc-900 font-sans md:text-4xl">
                    {title}
                </h2>
            </div>

            <div className={cn("flex flex-col items-center gap-10 lg:flex-row lg:gap-16", reversed && "lg:flex-row-reverse")}>
                {items && (
                    <div className="flex-1 space-y-12">
                        {items.map((f, i) => (
                            <div key={i} className="group">
                                <h3 className="text-sm font-bold text-zinc-900 mb-2 flex items-center gap-2">
                                    <span className="h-4 w-4 rounded-full bg-green-100 text-green-500 flex items-center justify-center">
                                        <Check size={10} strokeWidth={4} />
                                    </span>
                                    {f.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-zinc-600">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                )}
                <div className="flex-1 w-full">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white bg-white">
                        <Image src={image} alt={title} fill className="object-contain" />
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const FeatureGrid = () => (
    <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {BrandConfig.features.grid.map((f, i) => (
                    <div key={i} className="flex flex-col gap-4">
                        <Check className="text-white rounded-full p-1 bg-pink-500" size={20} strokeWidth={4} />
                        <h3 className="text-sm font-bold text-zinc-900">{f.title}</h3>
                        <p className="text-sm leading-relaxed text-zinc-600">{f.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export const Features = () => {
    return (
        <div id="features" className="bg-white">
            <FeatureGrid />

            {BrandConfig.features.sections.map((section, idx) => (
                section.items ? (
                    <FeatureListSection
                        key={idx}
                        tag={section.tag}
                        title={section.title}
                        image={section.image}
                        items={section.items}
                        reversed={section.reversed}
                    />
                ) : (
                    <FeatureImageSection
                        key={idx}
                        tag={section.tag}
                        title={section.title}
                        desc={section.description!}
                        image={section.image}
                        reversed={section.reversed}
                    />
                )
            ))}
        </div>
    );
};
