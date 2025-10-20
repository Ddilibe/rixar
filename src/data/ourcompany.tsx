import { BadgeInfo, Handshake, type LucideProps } from "lucide-react"
import { FaGlobeEurope } from "react-icons/fa";
import { GiChampions, GiPaper, GiWorld } from "react-icons/gi";
import type { IconType } from "react-icons/lib";
import { LuClock12 } from "react-icons/lu";

type ReasonsProps = {
    badge: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>> | IconType;
    title: string;
    description: string;
}
type SuccessProps = {
    badge: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>> | IconType;
    num: string;
    highlight: string;
    des: string;
}
type DiscoverProps = {
    title: string;
    des: string;
    num: string;
}
const ReasonsData: ReasonsProps[] = [
    { badge: BadgeInfo, title: "We Believe in Best Quality", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam." },
    { badge: Handshake, title: "We Believe in Good Relation", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt." },
    { badge: GiPaper, title: "We Believe in Abilities", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt." }
]

const SuccessData: SuccessProps[] = [
    { badge: GiChampions, num: "450+", highlight: "Successfully", des: "Completed Projects" },
    { badge: FaGlobeEurope, num: "450+", highlight: "Successfully", des: "Completed Projects" },
    { badge: LuClock12, num: "450+", highlight: "Successfully", des: "Completed Projects" },
]
const DiscoverData: DiscoverProps[] = [
    { num: "01", title: "Creativity Discover Talent", des: "Cras in condimentum enim. the Integer varius nisi ex, et dictum enim dapibus id. Vestibulum the convallis." },
    { num: "03", title: "Technology.Expert Analysis", des: "Cras in condimentum enim. the Integer varius nisi ex, et dictum enim dapibus id. Vestibulum the convallis." },
    { num: "02", title: "Discover.Explore Work.", des: "Cras in condimentum enim. the Integer varius nisi ex, et dictum enim dapibus id. Vestibulum the convallis." },
]
export {
    ReasonsData,
    SuccessData,
    DiscoverData,
}