import { useState } from "react";
import { PROJECTS } from "./Constants";
import { GoProjectRoadmap } from "react-icons/go";


const Projects = ({ handleClick }) => {
    const itemsPerPage = 3;
    const [currentPage, setCurrentPage] = useState(1);

    const handlePrev = () => {
        setCurrentPage(Math.max(currentPage - 1, 1));
    };

    const handleNext = () => {
        if (PROJECTS.length > 0) {
            setCurrentPage(Math.min(currentPage + 1, Math.ceil(PROJECTS.length / itemsPerPage)));
        }
    };

    const filteredProjectsData = PROJECTS.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <>
            <div id="projects" className="mt-20 mb-12 title">
                <div>Projects</div>
                <GoProjectRoadmap className="font-icon"/>
            </div>
            <div className="flex flex-wrap justify-center">
                {filteredProjectsData.map((project, index) => (
                    <div key={index} class="w-64 rounded overflow-hidden shadow-lg mb-6 mx-4 border-2 border-neutral-300">
                        <img class="w-full" src={project.image} alt={`${project.title}}`} />
                        <div class="px-6 py-4">
                            <div class="font-bold text-base mb-2 text-neutral-300">{project.title}</div>
                            <p class="text-neutral-300 text-sm">
                                {project.description}
                            </p>
                        </div>
                        <div class="px-6 pt-4 pb-2">
                            {project.technologies.map((tech, techIndex) => (
                                <span key={techIndex} class="inline-block bg-gray-300 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">{tech}</span>
                            ))}
                        </div>
                        <button onClick={() => {
                            handleClick(project.github)
                        }} className="ml-6 mb-3 bg-purple-400 active:bg-purple-500 md:bg-purple-500 active:md:bg-purple-600 rounded px-2">
                            Github &raquo;
                        </button>
                        <button onClick={() => {
                            handleClick(project.view)
                        }} className={`ml-4 mb-3 bg-cyan-300 active:bg-cyan-400 text-black rounded px-2 ${project.hasOwnProperty("view") ? "inline" : "hidden"}`}>
                            View &raquo;
                        </button>
                    </div>
                ))}
            </div>
            <div className="flex justify-around">
                <button className="project-button" disabled={currentPage === 1} onClick={handlePrev}>&laquo; Prev</button>
                <button className="project-button" disabled={(PROJECTS.length === 0) || currentPage === Math.ceil(PROJECTS.length / itemsPerPage)} onClick={handleNext}>Next &raquo;</button>
            </div>
        </>
    )
}

export default Projects
