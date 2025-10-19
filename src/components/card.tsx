import type { OverLayCardsProps, TeamCardsProp } from "@/data/management";
import { FaFacebook, FaSkype, FaTwitter } from "react-icons/fa";


const OverLayCards = ({ bgImage, name, position, description }: OverLayCardsProps) => {
    return (
        <div style={{ backgroundImage: `url('${bgImage}')`, }} className="bg-cover bg-center h-90">
            <div className="md:mx-20 mx-2 my-10 flex flex-col items-start gap-6 w-80 text-left">
                <span className="text-2xl text-yellow-500 font-bold">{position}</span>
                <span className="text-4xl font-black ">{name}</span>
                <span className="text-lg font-extrabold text-white">{description}</span>
                <div className="flex flex-row gap-5">
                    <FaFacebook size={25} />
                    <FaTwitter size={25} />
                    <FaSkype size={25} />
                </div>
            </div>
        </div>
    )
}


const TeamCards = ({ image, name, position, first, second }: TeamCardsProp) => {
    return (
        <div className="w-full flex md:flex-row flex-col gap-10 my-10">
            <img src={image} alt={image} className="md:w-98" />
            <div className="flex flex-col text-left gap-5">
                <span className="font-bold text-2xl">{name}</span>
                <span className="-mt-5 font-black text-xl text-yellow-500">{position}</span>
                <span className="font-medium">{first}</span>
                <span className="font-medium">{second}</span>
            </div>
        </div>
    )
}

export {
    OverLayCards,
    TeamCards,
};