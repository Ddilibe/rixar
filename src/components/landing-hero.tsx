import { heroData } from "@/data/landing";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "./ui/carousel";
import type React from "react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "motion/react";
import { Button } from "./ui/button";

export function LandingHero({
    children,
    className,
}: {
    children?: React.ReactNode;
    className?: string;
}) {
    const [image, setImage] = useState<string>("");
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!api) return;

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap());

        const handleSelect = () => {
            const snap = api.selectedScrollSnap();
            setCurrent(snap);
            setImage(heroData[snap].background);
            console.log(image, count, current);
        };

        api.on("select", handleSelect);

        setImage(heroData[api.selectedScrollSnap()].background);

        return () => {
            api.off("select", handleSelect);
        };
    }, [api]);

    return (
        <div
            style={{
                backgroundImage: `url("${image}")`,
            }}
            className={cn(
                "bg-cover bg-center bg-black/50 w-full brightness-80 md:h-[600px] relative flex flex-col",
                className
            )}
        >
            {children}
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                setApi={setApi}
                orientation="vertical"
                className="w-full max-w-sm md:max-w-7xl lg:max-w-7xl md:pt-40 mb-10"
                plugins={[
                    Autoplay({
                        delay: 8000,
                    }),
                ]}
            >
                <CarouselContent className="-mt-1 h-[200px] md:h-[400px] w-[100vw] pl-5">
                    {heroData.map((item, idx) => (
                        <CarouselItem
                            key={idx}
                            className="bg-cover bg-center  md:w-[600px] md:basis-[1000px] flex flex-col md:ml-20 md:gap-5"
                        >
                            <span className="font-bold md:text-6xl text-2xl text-white text-left">{item.mainTitle}</span>
                            <span className="font-bold md:text-6xl text-2xl text-white text-left">{item.miniTitle}</span>
                            <span className="text-white font-bold text-sm md:text-lg text-left">{item.description}</span>
                            <Button variant={"destructive"} color="green" className="bg-green-500 font-bold w-fit">{item.button}</Button>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            <div className="flex gap-2 justify-center brightness-200 absolute items-center translate-y-90 md:translate-y-[570px]  w-full">
                {Array.from({ length: count }).map((_, index) => (
                    <motion.div
                        key={index}
                        whileHover={{
                            opacity: 1,
                            transition: {
                                duration: 0.3,
                            },
                        }}
                    >
                        <div
                            className={`text-amber-600 brightness-200 border-2 rounded-3xl size-3 ${current === index
                                ? "bg-green-500 border-green-500"
                                : "border-white bg-white"
                                }`}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}