import { FaFacebook, FaGoogle, FaTwitter, FaVimeo } from "react-icons/fa";
import { Separator } from "./ui/separator";
import { MdLocationPin } from "react-icons/md";
import { ChevronsRight } from "lucide-react";
import { GiHouse } from "react-icons/gi";
import { cn } from "@/lib/utils";

export function Footer({ className }: { className?: string }) {
    return (
        <div className={cn(className, "bg-black w-full text-white py-10")}>
            <div className="grid grid-cols-1 md:grid-cols-3 text-left gap-10 justify-center mx-10 mb-5">
                <div className="flex flex-col gap-5">
                    <span className="font-black text-2xl">About Rixar</span>
                    <Separator className="w-[4px]" />
                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever.</span>
                    <GiHouse size={50} />
                </div>
                <div className="flex flex-col gap-5">
                    <span className="font-black text-2xl">Important Links</span>
                    <Separator className="w-[5px]" />
                    <div className="flex gap-5">
                        <div className="flex flex-col">
                            <span className="flex flex-row gap-3"><ChevronsRight /> Architecture Design</span>
                            <span className="flex flex-row gap-3"><ChevronsRight /> Architecture Design</span>
                            <span className="flex flex-row gap-3"><ChevronsRight /> Architecture Design</span>
                            <span className="flex flex-row gap-3"><ChevronsRight /> Architecture Design</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="flex flex-row gap-3"><ChevronsRight /> Architecture Design</span>
                            <span className="flex flex-row gap-3"><ChevronsRight /> Architecture Design</span>
                            <span className="flex flex-row gap-3"><ChevronsRight /> Architecture Design</span>
                            <span className="flex flex-row gap-3"><ChevronsRight /> Architecture Design</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <span className="font-black text-2xl">Get in Touch</span>
                    <Separator className="border-2 w-1" />
                    <div className="flex flex-col">
                        <span className="flex flex-row gap-3 items-center"><MdLocationPin />123 6th St. Melbourne, FL 32904</span>
                        <span className="flex flex-row gap-3 items-center"><MdLocationPin />123 6th St. Melbourne, FL 32904</span>
                        <span className="flex flex-row gap-3 items-center"><MdLocationPin />123 6th St. Melbourne, FL 32904</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-3 ">
                <Separator />
                <div className="flex flex-col md:flex-row gap-5 md:justify-between md:mx-20 md:my-5">
                    <div className="flex justify-center items-center gap-4 text-green-600">
                        <span>Privacy</span>
                        <span>Terms of Use</span>
                        <span>SiteMap</span>
                    </div>
                    <div className="flex gap-10 justify-center items-center">
                        <FaGoogle size={20} /><FaFacebook size={20} /><FaTwitter size={20} /><FaVimeo size={20} />
                    </div>
                </div>
            </div>
        </div>
    )
}