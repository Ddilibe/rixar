
import { LuConstruction, } from "react-icons/lu";
import { FaBuilding } from "react-icons/fa";
import { MdDomain } from "react-icons/md";
import { GiDrawbridge } from "react-icons/gi";
import type { IconType } from "react-icons/lib";
import Splatter1 from "/public/batto-creative-XO7DruraBL4-unsplash.jpg";
import Splatter2 from "/public/troy-mortier-ZgUDMsqUNYI-unsplash.jpg"
import Project1 from "@/assets/projects/batto-creative-XO7DruraBL4-unsplash(1).jpg";
import Project2 from "@/assets/projects/construtora-lyx-engenharia-pyOm4L5kKnQ-unsplash.jpg";
import Project3 from "@/assets/projects/jansen-omoro-YaDE_3e7g_0-unsplash.jpg";
import Project4 from "@/assets/projects/kawe-rodrigues-xu9Wd4x2fJ0-unsplash.jpg";
import Project5 from "@/assets/projects/mohad3-ns-PF0xVZyi2iE-unsplash.jpg";
import Project6 from "@/assets/projects/omoniyi-david-syuGbgVO_2U-unsplash.jpg";
import Project7 from "@/assets/projects/troy-mortier-UrF8Wp2qCEY-unsplash.jpg";
import Project8 from "@/assets/projects/willfly-sa-gj_6p3YADMA-unsplash.jpg";
import Team1 from "@/assets/projects/team/alex-suprun-ZHvM3XIOHoE-unsplash.jpg"
import Team2 from "@/assets/projects/team/daniil-lobachev-XAo09LtQiAQ-unsplash.jpg"
import Team3 from "@/assets/projects/team/nicolas-horn-MTZTGvDsHFY-unsplash.jpg"
import Team4 from "@/assets/projects/team/seth-doyle-vmBik4xv27s-unsplash.jpg"
import { MdWork, MdEmergency, MdHighQuality } from "react-icons/md";
import News1 from "@/assets/projects/news/cobi-krumholz-mZKF19ydEzk-unsplash.jpg"
import News2 from "@/assets/projects/news/daniel-wong-9jWVqy6KeJA-unsplash.jpg"
import News3 from "@/assets/projects/news/igor-omilaev-xozD8XNXVuc-unsplash.jpg"
import News4 from "@/assets/projects/news/manny-becerra-Y7ZE2R243rs-unsplash.jpg"
import News5 from "@/assets/projects/news/mohammad-aqhib-moaKlKdiryw-unsplash.jpg"
import News6 from "@/assets/projects/news/neeqolah-creative-works-n_Gd5nnamnw-unsplash.jpg"
import News7 from "@/assets/projects/news/rick-rothenberg-PI7TBuddriQ-unsplash.jpg"
import News8 from "@/assets/projects/news/tobias-nii-kwatei-quartey-eGdGkZAI6h4-unsplash.jpg"
import News9 from "@/assets/projects/news/vishal-mehariya-6HjSHWDxR0s-unsplash.jpg"
import News10 from "@/assets/projects/news/wengang-zhai-mtdxswQuRoI-unsplash.jpg"

type HeroProp = {
    mainTitle: string;
    miniTitle: string;
    description: string;
    button: any;
    background: string;
}
type ConstructionProp = {
    icon: IconType,
    title: string,
    description: string,
}
type SplatterProp = {
    begTitle: string,
    endTitle: string,
    image: string,
    description: string,
}
type TagType = "Commercial" | "Education" | "Hospital" | "Office" | "Residential";
type ProjectProp = {
    tag: TagType;
    image: string;
    title: string;
}
type summaryProp = {
    num: number;
    text: string;
}
type teamProp = {
    image: string;
    name: string;
    role: string;
}
type experienceProp = {
    icon: IconType;
    title: string;
    subtitle: string;
    mainColor: string;
    subColor: string;
}
type CompanyNewsProp = {
    image: string;
    title: string;
    href: string;
    date: string;
};

const heroData: HeroProp[] = [
    {
        miniTitle: "Create with heart",
        mainTitle: "Build with mind",
        description: "Keep the whole family comfortable with building contructions. We provide 24/7 emergency water service in los angeles",
        button: "Get free quote",
        background: Project1
    },
    {
        miniTitle: "Create with heart",
        mainTitle: "Build with mind",
        description: "Keep the whole family comfortable with building contructions. We provide 24/7 emergency water service in los angeles",
        button: "Get free quote",
        background: Project8
    },
    {
        miniTitle: "We build your dream",
        mainTitle: "With passion",
        description: "Keep the whole family comfortable with building contructions. We provide 24/7 emergency water service in los angeles",
        button: "Get free quote",
        background: Project6
    },
    {
        miniTitle: "Create with heart",
        mainTitle: "Build with mind",
        description: "Keep the whole family comfortable with building contructions. We provide 24/7 emergency water service in los angeles",
        button: "Get free quote",
        background: Project2
    },
]

const constructionData: ConstructionProp[] = [
    {
        icon: FaBuilding,
        title: "Building Renovation",
        description: "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
    },
    {
        icon: LuConstruction,
        title: "Building Construction",
        description: "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
    },
    {
        icon: GiDrawbridge,
        title: "Archtecture Design",
        description: "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
    },
    {
        icon: MdDomain,
        title: "Building Maintenance",
        description: "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
    }
]

const splatterData: SplatterProp[] = [
    {
        begTitle: "Brixel is the leader of",
        endTitle: "Construction",
        image: Splatter1,
        description: "Proin lorem nulla, imperdiet sit amet diam id, mollis varius orci. In iaculis mi eu ipsum feugiat volutpat.",
    },
    {
        begTitle: "Brixel is ready to",
        endTitle: "Build You Dream",
        image: Splatter2,
        description: "Proin lorem nulla, imperdiet sit amet diam id, mollis varius orci. In iaculis mi eu ipsum feugiat volutpat.",
    }
]


const ProjectData: ProjectProp[] = [
    { tag: "Office", title: "Al Humid Tower, Dubai", image: Project1 },
    { tag: "Education", title: "Merlin Tower, San Diego", image: Project2 },
    { tag: "Commercial", title: "Magenta Building, London", image: Project3 },
    { tag: "Hospital", title: "Zcity, Los Angeles", image: Project4 },
    { tag: "Office", title: "School of Business, Berlin", image: Project5 },
    { tag: "Commercial", title: "Sui-Michio Hospital, Tokyo", image: Project6 },
    { tag: "Residential", title: "The One Tower, Ohio", image: Project7 },
    { tag: "Education", title: "A Torre, Lisbon", image: Project8 },
]

const summaryData: summaryProp[] = [
    { num: 25, text: "Years of experience" },
    { num: 54, text: "Professional Experts" },
    { num: 1530, text: "Successful Projects" },
    { num: 1310, text: "Satisfied Customers" },
]

const teamData: teamProp[] = [
    { image: Team1, name: "Donald T. Benjamin", role: "Head Engineer" },
    { image: Team2, name: "Albert Mccloud", role: "Chief Engineer" },
    { image: Team3, name: "Jessica Mcdade", role: "Architecture Designer" },
    { image: Team4, name: "Henry Smith", role: "General Manager" }
]

const experienceData: experienceProp[] = [
    { icon: MdWork, title: "Expert & Profesional", subtitle: "Sed rutrum ipsum nunc, at ultrices libero consectetur eget.", mainColor: "bg-gray-500", subColor: "text-black" },
    { icon: MdHighQuality, title: "High Quality Work", subtitle: "Sed rutrum ipsum nunc, at ultrices libero consectetur eget.", mainColor: "bg-yellow-500", subColor: "text-black" },
    { icon: MdEmergency, title: "24x7 Emergency", subtitle: "Sed rutrum ipsum nunc, at ultrices libero consectetur eget.", mainColor: "bg-black", subColor: "text-white" }
]


export const companyNewsData: CompanyNewsProp[] = [
    {
        image: News9,
        title: "Innovations in Modern Construction",
        href: "/articles/modern-construction",
        date: "2025-09-20",
    },
    {
        image: News2,
        title: "Sustainable Engineering Practices",
        href: "/articles/sustainable-engineering",
        date: "2025-09-15",
    },
    {
        image: News10,
        title: "The Future of Smart Buildings",
        href: "/articles/smart-buildings",
        date: "2025-09-10",
    },
    {
        image: News5,
        title: "Top 10 Project Management Tips for Engineers",
        href: "/articles/project-management-tips",
        date: "2025-08-28",
    },
    {
        image: News6,
        title: "How AI is Transforming the Construction Industry",
        href: "/articles/ai-in-construction",
        date: "2025-08-12",
    },
    {
        image: News7,
        title: "Green Materials: Building for a Sustainable Future",
        href: "/articles/green-materials",
        date: "2025-07-30",
    },
    {
        image: News4,
        title: "Bridges of Tomorrow: Engineering Marvels Around the World",
        href: "/articles/engineering-marvels",
        date: "2025-07-10",
    },
    {
        image: News1,
        title: "Safety Standards Every Engineer Should Know",
        href: "/articles/safety-standards",
        date: "2025-06-25",
    },
    {
        image: News8,
        title: "Cost-Effective Construction Techniques in 2025",
        href: "/articles/cost-effective-techniques",
        date: "2025-06-05",
    },
    {
        image: News3,
        title: "Digital Twins: The Next Revolution in Engineering",
        href: "/articles/digital-twins",
        date: "2025-05-18",
    },
];


export {
    heroData,
    constructionData,
    splatterData,
    ProjectData,
    summaryData,
    teamData,
    experienceData,
};
export type { TagType, ProjectProp };
