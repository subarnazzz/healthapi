"use client";

import { BrandConfig } from "@/lib/brand";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Image from "next/image";

interface LogoProps {
    className?: string;
    showText?: boolean;
}

export const Logo = ({ className, showText = true }: LogoProps) => {
    return (
        <div className={cn("flex items-center gap-2", className)}>
            <Image src={'/logo2.jpg'} alt="HealthAPI" width={40} height={40} />
            {showText && (
                <span className="text-xl font-black tracking-tighter text-black uppercase">
                    {BrandConfig.name}
                </span>
            )}
        </div>
    );
};
