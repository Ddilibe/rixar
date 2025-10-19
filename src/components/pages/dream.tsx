import { companyNewsData, constructionData, experienceData, ProjectData, splatterData, summaryData, teamData, type ProjectProp } from "@/data/landing";
import { Separator } from "../ui/separator";
import { motion } from "motion/react";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "../ui/button";
import { type TagType } from "@/data/landing";
import IntegrateImage from "/public/jr-harris-T72ooC45UTE-unsplash.jpg";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export function Dream() {
    const isMobile = useIsMobile();
    return (
        <div className="flex flex-col md:flex-row justify-center items-center h-5 gap-10 w-full self-center mb-20 md:px-40 md:py-1 py-20">
            <div className="flex gap-3 text-right flex-col text-4xl md:w-2xl font-extrabold">
                <span>Let's Build</span>
                <span>Your Dream Together</span>
            </div>
            <Separator decorative={false} orientation={isMobile ? "horizontal" : "vertical"} className="bg-green-600 size-96 h-full" />
            <div className="text-left w-full text-lg">
                Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
            </div>
        </div>
    )
}

export function Construction() {
    return (
        <div className="flex gap-5 md:flex-row flex-col">
            {constructionData.map((value, idx) => (
                <motion.div key={idx} whileHover={{
                    scale: 1.1,
                    transition: {
                        duration: 0.5
                    }
                }}>
                    <Card>
                        <CardContent className="flex flex-col justify-center items-center gap-5 flex-wrap">
                            {<value.icon size={30} fill="green" />}
                            <CardTitle>
                                <span>{value.title}</span>
                            </CardTitle>
                            <CardDescription>
                                <span>{value.description}</span>
                            </CardDescription>
                        </CardContent>
                    </Card>
                </motion.div>
            ))}
        </div>
    )
}

export function Integrate() {
    return (
        <div className="w-full flex gap-5 flex-col md:flex-row">
            <div className="flex flex-col items-center justify-center gap-5 text-left md:w-[100vw] mx-5">
                <div className="text-4xl md:ml-10 mx-5">A Fully Integrated Design Engineering Construction Mechanical Services</div>
                <div className="flex flex-col w-full md:w-[500px] gap-3">
                    <span>Nam varius iaculis porttitor. Ut ac pharetra nulla, nec dictum nibh. Suspendisse the sodales quis enim ac ornare.</span>
                    <span>Aliquam lobortis pellentesque sollicitudin. Cras in condimentum enim. Integer varius nisi ex, et dictum enim dapibus id. Vestibulum convallis, mi vitae tincidunt semper, ligula magna pulvinar libero, eget porttitor lorem felis vitae metus.</span>

                    <span>Sed id lacus volutpat, imperdiet quam a, fermentum mi. Etiam urna sapien, tempor in accumsan eu, consequat sed neque. Nam varius iaculis porttitor.</span>
                </div>
                <Button variant={"secondary"} title="Know More About Us" color="green">Know More About Us</Button>
            </div>
            <div>
                <img src={IntegrateImage} />
            </div>
        </div>
    )
}

export function Splatter({ key, begTitle, endTitle, description, image }: { key: any, begTitle: string, endTitle: string, description: string, image: string }) {
    return (
        <div className="relative flex text-white bg-cover bg-center h-[500px] w-full" style={{ backgroundImage: `url(${image})` }} key={key}>
            <div className="flex flex-col items-baseline justify-end p-5 text-left inset-0 absolute bg-black/50">
                <span className="text-xl">{begTitle}</span>
                <span className="font-bold text-3xl">{endTitle}</span>
                <span>{description}</span>
            </div>
        </div>
    )
}

export function SplatterComponent() {
    return <div className="flex flex-col md:flex-row w-full">
        {splatterData.map((value, idx) => (
            <Splatter key={idx} begTitle={value.begTitle} endTitle={value.endTitle} description={value.description} image={value.image} />
        ))}
    </div>
}

export function Projects() {
    const tag = ["All Groups", "Commercial", "Education", "Hospital", "Office", "Residential"];
    const [select, setSelect] = useState<TagType | undefined>(undefined);
    const [data, setData] = useState<ProjectProp[]>([]);

    useEffect(() => {
        if (select === undefined) {
            setData([...ProjectData]);
            return;
        }
        setData(ProjectData.filter(val => val.tag === select))
        console.log(data);
        return;
    }, [select])

    async function changeSelected(e: string) {
        if (e === tag[0]) {
            setSelect(undefined)
            return;
        }
        if (tag.includes(e)) {
            setSelect(e)
            return;
        }

    }
    return (<div className="w-full">
        <h1 className="font-black text-5xl mx-5">Feature Projects</h1>
        <div className="flex md:gap-20 gap-2 justify-center flex-wrap mx-5">{tag.map((val, idx) => (
            <div key={idx} className="my-4 flex flex-col gap-5 cursor-pointer">
                <Separator color={select === val ? "blue" : "green"} className="h-20 w-40" />
                <span onClick={() => changeSelected(val)} className="font-black md:text-xl text-md">{val}</span>
            </div>
        ))}
        </div>
        <div className="grid md:grid-cols-4 grid-cols-1">
            {data.map((val, idx) => (
                <div className="group relative h-64 w-full overflow-hidden  shadow-lg" key={idx}>

                    <motion.img
                        src={val.image}
                        alt="Card background"
                        className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:blur-sm"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                    />


                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="hidden group-hover:flex absolute inset-0 items-center justify-center text-xl font-bold text-white group-hover:flex-col gap-5"
                    >
                        <span>{val.tag}</span>
                        <span className="text-green-300">{val.title}</span>
                    </motion.div>
                </div>
            ))}
        </div>
        <div className="bg-yellow-400 text-black w-full font-black flex flex-col md:flex-row justify-center gap-10 py-10 text-2xl px-10">
            {summaryData.map((val, idx) => (
                <div key={idx} className="flex gap-5 items-center">
                    <div className="flex flex-col gap-5">
                        <Separator />
                        <span className="text-3xl">{val.num}</span>
                    </div>
                    <div>{val.text}</div>
                </div>
            ))}
        </div>
    </div>)
}

export function Team() {
    const isMobile = useIsMobile();
    return (
        <div className="flex flex-col gap-15 my-30 mx-5">
            <div className="flex flex-col md:flex-row justify-center items-center h-5 gap-10 w-full self-center mb-20 md:px-40 md:py-1 py-20">
                <div className="flex gap-3 text-right flex-col text-4xl md:w-2xl font-extrabold">
                    <span>Let's Build</span>
                    <span>Your Dream Together</span>
                </div>
                <Separator orientation={isMobile ? "horizontal" : "vertical"} className="bg-green-600 size-8" />
                <div className="text-left w-full text-lg">
                    Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-10 items-center">
                {teamData.map((val, idx) => (
                    <div key={idx} className="flex flex-col gap-2 justify-center">
                        <motion.img src={val.image} className="size-80" whileHover={{ scale: 1.1 }} />
                        <span className="text-xl font-bold">{val.name}</span>
                        <span className="text-green-900 text-lg font-bold">{val.role}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export function Experience() {
    return (
        <div
            style={{
                backgroundImage: `url("${IntegrateImage}")`,
            }}
            className="bg-cover bg-center w-full h-[500px] bg-black/50 relative flex justify-center items-center"
        >
            <div className="flex md:flex-row flex-col justify-center items-center absolute -translate-y-63">
                {experienceData.map((val, idx) => (
                    <div key={idx} className={cn("flex h-32 items-center justify-center g-30 md:w-90 px-1 py-10", val.mainColor, val.subColor)}>
                        <val.icon color="green" size={100} />
                        <div className="flex flex-col justify-center items-center text-left gap-3 px-5">
                            <span className="font-black md:text-2xl text-lg text-leftyy">{val.title}</span>
                            <span className=" text-md">{val.subtitle}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex flex-col text-white justify-center w-full items-center md:gap-10 mt-40 gap-10">
                <span className="text-xl md:text-3xl">Great Experience for Building</span>
                <span className="text-4xl font-black md:text-6xl">Construction & Reconstruction</span>
                <Button variant={"destructive"} className="bg-green-700 w-40" >Know more about us</Button>
            </div>
        </div>
    )
}

export function Company() {
    const isMobile = useIsMobile();
    return (
        <div className="flex w-full flex-col items-center justify-center gap-10">
            <div className="font-black text-4xl capitalize">Company News</div>
            <Carousel
                opts={{
                    align: "start",
                }}
                plugins={[
                    Autoplay({
                        delay: 5000,
                    }),
                ]}
                className="w-full max-w-sm md:max-w-3xl lg:max-w-7xl"
            >
                <CarouselContent className="w-full">
                    {companyNewsData.map((val, index) => (
                        <CarouselItem
                            key={index}
                            className="basis-full md:basis-1/2 lg:basis-1/4 flex flex-col gap-5"
                        >
                            <motion.img
                                src={val.image}
                                alt={val.title ?? "Company news"}
                                className="h-64 w-full rounded-lg object-cover md:h-72 lg:h-80 ml-2"
                            />
                            <span className="text-xl font-bold">{val.title}</span>
                            <span>{val.date}</span>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                {!isMobile && <CarouselPrevious />}
                {!isMobile && <CarouselNext />}
            </Carousel>
        </div>
    );
}