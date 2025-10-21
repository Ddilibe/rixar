
import Project6 from "@/assets/projects/omoniyi-david-syuGbgVO_2U-unsplash.jpg";
import React, { type ReactNode } from "react";
import { Exclusive } from "@/components/exclusive";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { expertDescription, ExpertTeamCards, expertTitle, leadDescription, LeaderShipCards, leadTitle } from "@/data/management";
import { OverLayCards, TeamCards } from "@/components/card";

type ManagementProps = {};

export default class Management extends React.Component {
    constructor(props: ManagementProps) {
        super(props);
    }

    slides = ({ title, description }: { title: string, description: string }) => {
        return (
            <div className="my-10 flex flex-col md:flex-row justify-center items-center md:w-[67%] gap-4 text-left mx-7">
                <div className="md:w-[40%] w-[100%] flex flex-row justify-between gap-auto items-center">
                    <span className="text-4xl font-black">{title}</span>
                    <div className="bg-amber-300 w-[6px] h-[5pc]"></div>
                </div>
                <span>{description}</span>
            </div>
        )
    }

    cards = () => {

        return (
            <div className="grid grid-cols-1 md:grid-cols-2 w-90 md:w-[80%] mx-auto gap-4">
                {LeaderShipCards.map(val => <OverLayCards name={val.name} description={val.description} bgImage={val.bgImage} position={val.position} />)}
            </div>
        )
    }

    team = () => {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 w-90 md:w-[80%] mx-auto gap-4">
                {ExpertTeamCards.map(val => <TeamCards image={val.image} name={val.name} position={val.position} first={val.first} second={val.second} />)}
            </div>
        )
    }

    render(): ReactNode {

        return (
            <>
                <Hero title="Management" heroPath={["Home", "About", "Managments"]} pageParent="About" image={Project6} />
                <this.slides title={leadTitle} description={leadDescription} />
                <this.cards />
                <this.slides title={expertTitle} description={expertDescription} />
                <this.team />
                <Exclusive />
                <Footer />
            </>
        )
    }
}