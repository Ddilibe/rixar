import DiscoverImage from "@/assets/projects/jansen-omoro-YaDE_3e7g_0-unsplash.jpg"
import { DiscoverData } from "@/data/ourcompany"
export function Discover() {
    return (
        <div className="relative w-full h-90 bg-cover bg-center" style={{ backgroundImage: `url('${DiscoverImage}')` }}>
            <div className="w-full h-90 bg-black opacity-70 flex text-white justify-center items-center gap-5 px-40">

                {DiscoverData.map((val, idx) => (
                    <div key={idx} className="brightness-200">
                        <div className="text-3xl justify-center font-black text-left flex ">
                            <span>{val.num}.</span>
                            <span>{val.title}</span>
                        </div>
                        <span>{val.des}</span>
                    </div>
                ))}
                
            </div>
        </div>
    )
}