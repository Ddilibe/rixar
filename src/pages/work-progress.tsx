import React, { type ReactNode, useEffect } from "react";
import { DisplayPath } from "@/components/nav-bar";
import { useLandingContext } from "@/context/landingpage-context";
import { cn } from "@/lib/utils";
import Project6 from "@/assets/projects/omoniyi-david-syuGbgVO_2U-unsplash.jpg";
import { Header } from "@/components/header";
import { WorkGridData } from "@/data/work-overview";
import { useIsMobile } from "@/hooks/use-mobile";
import { Footer } from "@/components/footer";
import { Exclusive } from "@/components/exclusive";

interface WorkProgressProps {
    title?: string;
}

interface WorkProgressState {
    status: string;
}

export default class WorkProgress extends React.Component<
    WorkProgressProps,
    WorkProgressState
> {
    constructor(props: WorkProgressProps) {
        super(props);
        this.state = {
            status: "Work Progress",
        };
    }

    Hero = ({ children, className }: { children?: ReactNode; className?: string }) => {
        const { setFocus, setPath } = useLandingContext();

        useEffect(() => {
            setFocus("About");
            setPath(["Home", "About", "Work Overview"]);
        }, [setFocus, setPath]);

        return (
            <div
                className={cn(
                    "md:pb-10 bg-cover bg-center md:mx-30 brightness-75",
                    className
                )}
                style={{ backgroundImage: `url("${Project6}")` }}
            >
                {children}
                <div className="md:mx-40 mx-2 flex flex-col justify-center items-start text-left text-sm gap-4 text-white">
                    <span className="text-lg font-black md:text-5xl">Work Overview</span>
                    <DisplayPath />
                </div>
            </div>
        );
    };

    WorkGrid = () => {
        const mobile = useIsMobile();
        const image = WorkGridData.filter((val) => val.status == true);
        const text = WorkGridData.filter((val) => val.status == false);
        return (
            mobile ? (
                <div className="flex flex-col">
                    {image.map((_, idx) => (
                        <>
                            <this.ImageWorkGrid image={image[idx].image as string} id={idx} />
                            <this.TextWorkGrid
                                key={idx}
                                id={idx}
                                num={text[idx].number as string}
                                title={text[idx].title as string}
                                first={text[idx].first as string}
                                second={text[idx].second as string}
                            />
                        </>
                    ))}
                </div>
            ) : (
                <div className="grid md:grid-cols-4 grid-cols-1 w-full -mt-20 -mb-20">
                    {
                        WorkGridData.map((val, idx) =>
                            val.status ? (
                                <this.ImageWorkGrid key={idx} id={idx} image={val.image as string} />
                            ) : (
                                <this.TextWorkGrid
                                    key={idx}
                                    id={idx}
                                    num={val.number as string}
                                    title={val.title as string}
                                    first={val.first as string}
                                    second={val.second as string}
                                />
                            )
                        )
                    }
                </div>
            )
        );
    }

    ImageWorkGrid = ({ image, id }: { image: string; id: number }) => (
        <img
            src={image}
            alt={`work-grid-${id}`}
            id={String(id)}
            className="object-cover w-full h-full"
        />
    );

    TextWorkGrid = ({
        num,
        title,
        first,
        second,
        id,
    }: {
        num: string;
        title: string;
        first: string;
        second: string;
        id: number;
    }) => (
        <div
            id={String(id)}
            className="flex flex-col justify-center items-start p-4 bg-gray-50 text-gray-800 text-left gap-3"
        >
            <span className="text-4xl font-bold">{num}.</span>
            <span className="text-lg font-semibold">{title}</span>
            <span>{first}</span>
            <span>{second}</span>
        </div>
    );


    render(): ReactNode {

        return (
            <>
                <this.Hero className="w-full">
                    <Header />
                </this.Hero>
                <this.WorkGrid />
                <Exclusive />
                <Footer className="" />
            </>
        );
    }
}
