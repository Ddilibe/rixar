import { Hero } from "@/components/hero";
import { useLandingContext } from "@/context/landingpage-context";
import { useEffect } from "react";
import OverviewImage from "@/assets/projects/omoniyi-david-syuGbgVO_2U-unsplash.jpg";
import { MiddleSplitBanner } from "@/components/middle-split-banner";
import { Discover } from "@/components/pages/overview";

export default function CompanyOverview() {
    const { setPath, path, setFocus } = useLandingContext();
    const des = [
        "Aliquam lobortis pellentesque sollicitudin. Cras in condimentum enim. Integer varius nisi ex, et dictum enim dapibus id.",
        "Vestibulum convallis, mi vitae tincidunt semper, ligula magna pulvinar libero, eget porttitor lorem felis vitae metus.",
        "Integer consectetur, purus at porta fringilla, sapien nisl scelerisque nisi, ut luctus sapien ligula hendrerit diam. In et mauris tortor. Fusce mollis lacus vel ornare gravida. Donec sollicitudin odio vel auctor suscipit."
    ]

    useEffect(() => {
        setFocus("About");
        setPath(["Home", "About", "Company Overview"]);
    }, [])
    return (
        <>
            <Hero title="Company Overview" heroPath={path} pageParent="About" image={OverviewImage} />
            <MiddleSplitBanner image={OverviewImage} title="Company Overview" des={des} subtitle="Nam varius iaculis porttitor. Ut ac pharetra nulla, nec dictum nibh. Suspendisse the sodales quis enim ac ornare." />
            <Discover />
        </>
    )
}