import { Button } from "./ui/button";

const Exclusive = () => (
    <div className="flex flex-col md:flex-row justify-center md:gap-40 items-center w-full bg-amber-200 px-50 py-20 -mt-20 -mb-20">
        <div className="flex flex-col md:w-4xl text-left md:">
            <span className="font-black text-2xl">Looking For Exclusive Construction Service?</span>
            <span>Curabitur vitae mauris id justo posuere consectetur vitae eu elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</span>
        </div>
        <Button variant={"destructive"} className="text-2xl p-6      bg-amber-400 hover:bg-green-600">Get Free Consultation</Button>
    </div>
);


export {
    Exclusive,
};