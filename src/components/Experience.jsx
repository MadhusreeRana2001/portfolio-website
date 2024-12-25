import { useState } from "react";
import { EXPERIENCES } from "./Constants";
import { MdOutlineWorkHistory } from "react-icons/md";


const Experience = () => {
    const [zoomedImage, setZoomedImage] = useState(null);

    const handleImageClick = (index) => {
        setZoomedImage((prevIndex) => (prevIndex === index ? null : index));
    };


    return (
        <>
            <div id="experience" className="mt-20 mb-16 title">
                <div>Experience</div>
                <MdOutlineWorkHistory className="font-icon"/>
            </div>
            <div>
                {EXPERIENCES.map((experience, index) => (
                    <div key={index} className="mb-8 flex flex-wrap justify-center md:space-x-16">
                        <div className="w-full md:w-1/4 flex flex-wrap justify-center">
                            <img src={experience.image} alt={`${experience.company} Experience Certificate`} className={`w-80 rounded-lg transition-transform duration-300 cursor-pointer ${zoomedImage === index ? "scale-150 z-40" : ""}`} onClick={() => handleImageClick(index)}/>
                            {zoomedImage === null && (
                                <p className="text-xs text-gray-400 mt-2">Click the image to zoom in / zoom out</p>
                            )}
                        </div>

                        <div className="w-full max-w-xl text-center md:w-3/4 border-b md:border-none mb-3 md:mb-0">
                            <p className="mt-4 mb-2 md:my-0 font-bold text-xl text-purple-500">{experience.company}</p>
                            <p className="mb-1 font-semibold">{experience.role}</p>
                            <p className="mb-1 text-sm text-purple-400">{experience.place} - {experience.mode}</p>
                            <p className="mb-8 md:mb-4 text-xs text-neutral-400">{experience.year}</p>
                            <div className="mt-4 text-left">
                                {Object.values(experience.description).map((item, itemIndex) => (
                                    <div key={itemIndex} className="mb-3 mx-2 text-center md:text-left text-sm">
                                        <p>{item.activity}</p>
                                        <div className="list-disc list-inside mt-1">
                                            {item.technologies.map((tech, techIndex) => (
                                                <span key={techIndex} className="mr-2 rounded bg-neutral-800 md:bg-neutral-900 text-purple-400 md:text-purple-600 px-2 text-xs">{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Experience