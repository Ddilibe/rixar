import { cn } from "@/lib/utils";
import { motion } from "motion/react";

type MiddleProp = {
    image: string;
    title: string;
    subtitle?: string;
    des: string[];
    className?: string;
    imageClassName?: string;
}

export function MiddleSplitBanner({ title, subtitle, des, image, className, imageClassName }: MiddleProp) {
    return (
        <div className={cn("grid grid-cols-1 md:grid-cols-2 md:mx-50 md:px-40 justify-center items-center gap-5", className)}>
            <div className="flex flex-col text-left gap-10 mx-5">
                <span className="font-black text-5xl">{title}</span>
                {subtitle && <span className="font-extrabold text-lg">{subtitle}</span>}
                {des && <div className="flex flex-col gap-5 text-md">
                    {des.map((val, idx) => (
                        <span key={idx}>{val}</span>
                    ))}
                </div>}
            </div>
            <motion.img src={image} className={cn("", imageClassName)} />
        </div>
    )
}