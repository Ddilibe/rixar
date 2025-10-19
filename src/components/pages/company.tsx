import { useLandingContext } from "@/context/landingpage-context";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { DisplayPath } from "../nav-bar";
import Project6 from "@/assets/projects/omoniyi-david-syuGbgVO_2U-unsplash.jpg";
import ReasonImage from "@/assets/projects/team/seth-doyle-vmBik4xv27s-unsplash.jpg";
import { GiIdea } from "react-icons/gi";
import { FaLaptopCode } from "react-icons/fa";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import { ReasonsData, SuccessData } from "@/data/ourcompany";

export function OurCompanyHero({ children, className }: { children?: React.ReactElement, className: string }) {
    const { setFocus, setPath } = useLandingContext();
    useEffect(() => {
        setFocus("About");
        setPath(["Home", "About", "Our Company"]);
    }, [])
    return (
        <div className={cn("md:pb-10 bg-cover bg-center md:mx-30 brightness-75", className)} style={{ backgroundImage: `url("${Project6}")` }}>
            {children}
            <div className="md:mx-40 mx-2 flex flex-col justify-center items-start text-left text-sm gap-4 text-white">
                <span className="text-lg font-black md:text-5xl"> Our Company </span>
                <DisplayPath />
            </div>
        </div>
    )
}

export function Society() {
    const isMobile = useIsMobile();
    return (
        <div className="flex flex-col md:flex-row md:px-70 w-full mx-20 justify-center items-center gap-10 px-5">
            <div className="flex flex-col gap-10">
                <div className="flex flex-row gap-3 md:gap-10">
                    <div className="w-1 bg-green-500"></div>
                    <span className="md:text-5xl font-extrabold text-left md:w-90 text-3xl">Society Where There is Understanding</span>
                </div>
                <span className="md:text-xl font-light w-full text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </span>
            </div>
            <div className="flex flex-col items-center gap-5 ">
                <GiIdea size={100} />
                <span className="hover:text-green-600 text-md font-bold">01. Planning & Strategy</span>
                <span className="text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.
                </span>
            </div>
            <div className={`w-1 h-[200px] bg-green-500 ${isMobile ? "hidden" : ""}`}></div>
            <div className="flex flex-col items-center gap-5">
                <FaLaptopCode size={100} />
                <span className="hover:text-green-600 text-md font-bold">02. Client’s Satisfaction</span>
                <span className="text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.
                </span>
            </div>
        </div>
    )
}

export function Brand() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 mx-5 md:mx-50 gap-20">
            <motion.img src={Project6} whileHover={{
                scale: 0.9
            }} />
            <div className="flex flex-col justify-center items-start md:gap-10 gap-3">
                <div className="flex flex-row gap-3 md:gap-10">
                    <div className="w-1 bg-green-500"></div>
                    <span className="md:text-5xl font-extrabold text-left md:w-90 text-3xl">Meet Our Brand New Solution</span>
                </div>
                <span className="md:text-xl font-light w-full text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </span>
                <Button variant={"destructive"} className="bg-green-500">Read More</Button>
            </div>
        </div>
    )
}

export function Reasons() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 md:mx-50 gap-3 md:gap-10 bg-gray-200 md:p-10 p-2">
            <div className="flex flex-col gap-5 md:gap-10">
                <div className="flex flex-row gap-3 md:gap-10">
                    <div className="w-1 bg-green-500"></div>
                    <span className="md:text-5xl font-extrabold text-left md:w-90 text-3xl">Some Reasons to work Together</span>
                </div>
                <div className="flex flex-col gap-2 md:gap-5">
                    {ReasonsData.map((val, idx) => (
                        <div key={idx} className="grid grid-cols-1 md:grid-cols-6 justify-center items-center md:gap-10">
                            <val.badge className="hover:fill-green-500 size-20 md:size-15 self-center" color="gray" />
                            <div className="flex flex-col gap-2 text-left md:col-span-5">
                                <span className="font-extrabold text-lg ">{val.title}</span>
                                <span>{val.description}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <motion.img src={ReasonImage} />
        </div>
    )
}

export function ChooseUs({ className }: { className?: string }) {
    return (
        <div className={cn("grid grid-cols-1 md:grid-cols-2 mx-5 md:mx-50 gap-20", className)}>
            <motion.img src={Project6} whileHover={{
                scale: 0.9
            }} />
            <div className="flex flex-col justify-center items-start md:gap-10 gap-3">
                <div className="flex flex-row gap-3 md:gap-10">
                    <div className="w-1 bg-green-500"></div>
                    <span className="md:text-5xl font-extrabold text-left md:w-90 text-3xl">Collaboratively Administrate Ampowered Markets Works.</span>
                </div>
                <span className="md:text-xl font-light w-full text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </span>
                <span className="md:text-xl font-bold text-lg w-full text-left">Why Choose Us ?</span>
                <span className="md:text-xl font-light w-full text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                <Button variant={"destructive"} className="bg-green-500">Read More</Button>
            </div>
        </div>
    )
}


export function Success() {
    return (
        <div className="bg-gray-200 w-full flex flex-col md:flex-row justify-center md:p-20 gap-20 py-20 px-5">
            {SuccessData.map((val, idx) => (
                <div className="flex gap-10 items-center" key={idx}>
                    <val.badge size={80} />
                    <div className="flex flex-col text-left">
                        <span className="text-7xl font-black">{val.num}</span>
                        <span className="text-green-700 font-bold text-2xl">{val.highlight}</span>
                        <span className="text-lg">{val.des}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export function Solution({ className }: { className?: string }) {
    return (
        <div className={cn("flex flex-col-reverse md:flex-row-reverse mx-20 md:mx-50 justify-center gap-20 w-full md:px-90", className)}>
            <motion.img src={Project6} whileHover={{
                scale: 0.9
            }} className="md:size-150" />
            <div className="flex flex-col justify-center items-start md:gap-10 gap-3 mx-3">
                <div className="flex flex-row gap-3 md:gap-10">
                    <div className="w-3 bg-green-500"></div>
                    <span className="md:text-5xl font-extrabold text-left md:w-90 text-3xl">We Provide Solution on your business</span>
                </div>
                <span className="md:text-xl font-light w-full text-left">
                    On the other hand we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment so blinded by desire that they cannot foresee.
                </span>
                <span className="md:text-xl font-bold text-lg w-full text-left">What We Do?</span>
                <span className="md:text-xl font-light w-full text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.</span>
                <Button variant={"destructive"} className="bg-green-500">Read More</Button>
            </div>
        </div>
    )
}
