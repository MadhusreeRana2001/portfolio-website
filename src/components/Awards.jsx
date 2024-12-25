import { useState } from "react";
import { AWARD } from "./Constants";
import { CgAwards } from "react-icons/cg";


const Awards = () => {
    const [zoomedImage, setZoomedImage] = useState(null);

    const handleImageClick = (index) => {
        setZoomedImage((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <>
            <div id="awards" className="mt-20 mb-12 title">
                <div>Awards</div>
                <CgAwards className="font-icon"/>
            </div>
            {AWARD.map((award, index) => ( 
                <div className="flex flex-col-reverse md:flex-row justify-center items-center mx-24 md:space-x-12 mb-16">
                    <div>
                        <p className="mt-4 mb-2 md:my-0 font-bold text-xl text-purple-500">{award.title}</p>
                        <p className="mb-1 text-sm text-purple-400">{award.institution}</p>
                        <p className="mb-8 md:mb-4 text-xs text-neutral-400">{award.year}</p>
                        <p className="mb-8 md:mb-4 text-sm text-neutral-400">{award.description}</p>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-wrap justify-center mb-6">
                        <img src={award.image} alt="Award" className={`w-96 rounded-lg transition-transform duration-300 cursor-pointer ${zoomedImage === index ? "scale-150 z-40" : ""}`} onClick={() => handleImageClick(index)} />
                        {zoomedImage === null && (
                            <p className="text-center text-xs text-gray-400 mt-2">Click the image to zoom in / zoom out</p>
                        )}
                    </div>
                </div>
            ))}
        </>
    )
}

export default Awards