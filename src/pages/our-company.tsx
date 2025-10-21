import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Brand, ChooseUs, OurCompanyHero, Reasons, Society, Solution, Success } from "@/components/pages/company";

export default function OurCompany() {
    return (
        <>
            <OurCompanyHero className="w-full">
                <Header />
            </OurCompanyHero>
            <Society />
            <Brand />
            <Reasons />
            <ChooseUs />
            <Success />
            <Solution />
            <Footer />
        </>
    )
}