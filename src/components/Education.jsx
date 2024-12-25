import { EDUCATION } from "./Constants";
import { MdMenuBook } from "react-icons/md";


const Education = () => {
    return (
        <>
            <div id="education" className="mt-20 mb-12 text-center text-3xl title">
                <div>Education</div>
                <MdMenuBook className="font-icon"/>
            </div>
            <div className="flex flex-wrap justify-center">
                {EDUCATION.map((education, index) => (
                    <div key={index} class="w-56 rounded overflow-hidden shadow-lg bg-purple-100 md:bg-purple-400 mb-6 mx-4">
                    <div class="px-6 py-4">
                        <div class="font-bold text-base mb-2 text-gray-900">{education.institution}</div>
                        <p class="font-semibold text-gray-900 text-sm">
                            {education.degree}
                        </p>
                        <p class="text-gray-900 text-sm md:text-xs">
                            {education.place}
                        </p>
                        <p class="text-gray-900 text-sm md:text-xs">
                            {education.year}
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm md:text-xs font-semibold text-gray-700 mr-2 mb-2">{education.result}</span>
                    </div>
                </div>
                ))}
            </div>
        </>
    )
}

export default Education