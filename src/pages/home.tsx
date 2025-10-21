import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Company, Construction, Dream, Experience, Integrate, Projects, SplatterComponent, Team } from "@/components/pages/dream";
import { LandingHero } from "@/components/landing-hero";
import { useEffect } from "react";
import { useLandingContext } from "@/context/landingpage-context";

export default function Home() {
    const { setFocus, setPath } = useLandingContext();
    useEffect(() => {
        setFocus("Home");
        setPath(["Home"]);
    }, [])
    return (
        <>
            <LandingHero className='relative'>
                <Header className='md:absolute h-40' />
            </LandingHero>
            <div className='flex flex-col gap-15 my-30 mx-10'>
                <Dream />
                <Construction />
            </div>
            <Integrate />
            <SplatterComponent />
            <Projects />
            <Team />
            <Experience />
            <Company />
            <Footer />
        </>
    )
}