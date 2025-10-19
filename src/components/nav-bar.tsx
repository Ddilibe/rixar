import * as React from "react"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils";
import { useLandingContext } from "@/context/landingpage-context";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { TiThMenuOutline } from "react-icons/ti";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import { ChevronsDown, ChevronsRight, ChevronsUp } from "lucide-react";
import { Link } from "react-router-dom";
import Links from "@/data/links";

const components: { title: string; href: string }[] = [
    {
        title: "Our Company",
        href: Links.ABOUT.OUR_COMPANY,
    },
    {
        title: "Company Overview",
        href: Links.ABOUT.COMPANY_OVERVIEW,
    },
    {
        title: "Work Process",
        href: Links.ABOUT.WORK_PROGRESS,
    },
    {
        title: "Management",
        href: Links.ABOUT.MANAGEMENT,
    },
    {
        title: "Our History",
        href: "/docs/primitives/tooltip",
    },
    {
        title: "Our Location",
        href: "/docs/primitives/tooltip",
    },
    {
        title: "Testimonials",
        href: "/docs/primitives/tooltip",
    },
    {
        title: "FAQs",
        href: "/docs/primitives/tooltip",
    },
]

const services: { title: string; href: string }[] = [
    { title: "Architectural Design", href: "" },
    { title: "Building Contruction", href: "" },
    { title: "General Construction", href: "" },
    { title: "Interior Design", href: "" },
    { title: "Flooring & Roofing", href: "" },
    { title: "INT/EXT Painting", href: "" }
];

export function NavigationMenuDemo() {
    const { focus, setFocus } = useLandingContext();
    return (
        <NavigationMenu viewport={false}>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), focus === "Home" && "bg-gray-700 text-white")}>
                        <Link to={Links.HOME}>Home</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className={cn(focus === "About" && "bg-gray-700 text-white")}>About</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="flex flex-col min-w-40 gap-3">
                            {components.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                />

                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), focus === "Projects" && "bg-gray-700 text-white")}>
                        <a>Projects</a>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className={cn(focus === "Services" && "bg-gray-700 text-white")}>Services</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[300px] gap-4">
                            {services.map((value, idx) => (
                                <ListItem title={value.title} href={value.href} key={idx} />
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem >
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), focus === "Contact Us" && "bg-gray-700 text-white")}>
                        <a href="/docs">Contact Us</a>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList >
        </NavigationMenu >
    )
}

function ListItem({
    title,
    children,
    href,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <a href={href}>
                    <div className="text-sm leading-none font-medium">{title}</div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
}

function MobileListItem({
    title,
    children,
    href,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
    return (
        <li {...props}>
            <a href={href}>
                <div className="mx-5 leading-none font-medium">{title}</div>
                <p className="text-muted-foreground line-clamp-2 text-md leading-snug">
                    {children}
                </p>
            </a>
        </li>
    )
}


export function MobileMenu() {
    return (
        <Sheet>
            <SheetTrigger asChild >
                <Button variant={"outline"} className="cursor-pointer"><TiThMenuOutline /></Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <MobileListItem title="Home" href="" className={cn(navigationMenuTriggerStyle())} />
                <MobileCollapsible title="About" values={components} />
                <MobileListItem title="Projects" href="" className={cn(navigationMenuTriggerStyle())} />
                <MobileCollapsible title="Services" values={services} />
                <MobileListItem title="Contact Us" href="" className={cn(navigationMenuTriggerStyle())} />
            </SheetContent>
        </Sheet>
    )
}

export function MobileCollapsible({ title, values }: { title: string, values: { title: string, href: string }[] }) {
    const [isOpen, setIsOpen] = React.useState<boolean | undefined>(false);
    return (
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <div className="flex items-center justify-between gap-4 px-5">
                {/* <div>{title}</div> */}
                <CollapsibleTrigger asChild>
                    <Button variant={"ghost"} size={"icon"} className={cn(navigationMenuTriggerStyle(), `flex items-center justify-between gap-4 w-full`)}>
                        {title}
                        {isOpen && <ChevronsUp fill="green" size={30} />}
                        {!isOpen && <ChevronsDown />}
                        <span className="sr-only">Toggle</span>
                    </Button>
                </CollapsibleTrigger>
            </div >
            <CollapsibleContent className="flex flex-col gap-2">
                {values.map((val, idx) => (
                    <MobileListItem key={idx} title={val.title} href={val.href} className={cn(navigationMenuTriggerStyle())} />
                ))}
            </CollapsibleContent>
        </Collapsible>
    )
}


export function DisplayPath() {
    const { path } = useLandingContext();
    console.log(path.length)
    return (
        <div className="flex flex-wrap gap-1 justify-center-safe items-center-safe font-bold">
            {path.map((val, idx) => (<div className="flex gap-1"> {val} <ChevronsRight className={cn(idx == path.length ? "hidden" : "", "items-center pb-1")} /></div>))}
        </div>
    )
}