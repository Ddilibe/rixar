import { LucideWorkflow, MailIcon, Phone } from "lucide-react"
import { MobileMenu, NavigationMenuDemo } from "./nav-bar"
import { FaFacebook, FaGooglePlusG, FaTwitter } from "react-icons/fa";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

type HeaderProp = {
    className?: string;
}

export function Header({ className }: HeaderProp) {
    const isMobile = useIsMobile();
    function Upper() {
        return (
            <div className="w-full flex justify-between bg-black/20 p-5 text-white font-black">
                <div className="flex gap-3">
                    <div className="flex gap-4"> <MailIcon size={20} /><span>E-Mail Us: Info@example.com</span></div>
                    <div className="flex gap-4"><Phone size={20} /> <span>Call Us: 08100</span></div>
                </div>
                <div className="flex gap-5">
                    <span>Stay Connected: </span>
                    <FaGooglePlusG size={25} />
                    <FaFacebook size={25} />
                    <FaTwitter size={25} />
                </div>
            </div>
        )
    }
    return (
        <div className={cn("w-full", className)}>
            {!isMobile && <Upper />}
            <div className="flex justify-between md:my-6 md:mx-40 m-10">
                <LucideWorkflow />
                {!isMobile && <NavigationMenuDemo />}
                {isMobile && <MobileMenu />}
            </div>
        </div>
    )
}