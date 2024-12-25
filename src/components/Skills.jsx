import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaNode } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { DiDjango } from "react-icons/di";
import { SiFlask } from "react-icons/si";
import { SiFastapi } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiNumpy } from "react-icons/si";
import { SiPandas } from "react-icons/si";
import { SiOpencv } from "react-icons/si";
import { FaLinux } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiGooglecolab } from "react-icons/si";
import { SiNginx } from "react-icons/si";
import { FaComputer } from "react-icons/fa6";


const Skills = () => {
    return (
        <>
            <div id="techStack" className="mt-16 md:mt-36 mb-8 title">
                <div>Tech Stack</div>
                <FaComputer className="font-icon" />
            </div>
            <div className="flex flex-wrap items-center justify-center">
                <div classname="flex flex-col">
                    <div className="icon">
                        <FaReact className="text-2xl text-cyan-400" />
                    </div>
                    <div className="icon-name">React.js</div>
                </div>

                <div classname="flex flex-col">
                    <div className="icon">
                        <FaNode className="text-2xl text-green-400" />
                    </div>
                    <div className="icon-name">Node.js</div>
                </div>

                <div classname="flex flex-col">
                    <div className="icon">
                        <SiExpress className="text-2xl text-neutral-400" />
                    </div>
                    <div className="icon-name">Express.js</div>
                </div>

                <div classname="flex flex-col">
                    <div className="icon">
                        <SiMongodb className="text-2xl text-green-500" />
                    </div>
                    <div className="icon-name">MongoDB</div>
                </div>

                <div classname="flex flex-col">
                    <div className="icon">
                        <DiDjango className="text-2xl text-neutral-400" />
                    </div>
                    <div className="icon-name">Django</div>
                </div>

                <div classname="flex flex-col">
                    <div className="icon">
                        <SiFlask className="text-2xl text-cyan-400" />
                    </div>
                    <div className="icon-name">Flask</div>
                </div>

                <div classname="flex flex-col">
                    <div className="icon">
                        <SiFastapi className="text-2xl text-cyan-600" />
                    </div>
                    <div className="icon-name">FastAPI</div>
                </div>

                <div classname="flex flex-col">
                    <div className="icon">
                        <RiTailwindCssFill className="text-2xl text-cyan-600" />
                    </div>
                    <div className="icon-name">Tailwind</div>
                </div>

                <div classname="flex flex-col">
                    <div className="icon">
                        <FaBootstrap className="text-2xl text-purple-600" />
                    </div>
                    <div className="icon-name">Bootstrap</div>
                </div>

                <div classname="flex flex-col">
                    <div className="icon">
                        <FaPython className="text-2xl text-cyan-600" />
                    </div>
                    <div className="icon-name">Python</div>
                </div>

                <div classname="flex flex-col">
                    <div className="icon">
                        <SiNumpy className="text-2xl text-cyan-400" />
                    </div>
                    <div className="icon-name">Numpy</div>
                </div>

                <div classname="flex flex-col">
                    <div className="icon">
                        <SiPandas className="text-2xl text-blue-900" />
                    </div>
                    <div className="icon-name">Pandas</div>
                </div>

                <div classname="flex flex-col">
                    <div className="icon">
                        <SiOpencv className="text-2xl text-red-600" />
                    </div>
                    <div className="icon-name">OpenCV</div>
                </div>

                <div classname="flex flex-col">
                    <div className="icon">
                        <FaLinux className="text-2xl text-neutral-400" />
                    </div>
                    <div className="icon-name">Linux</div>
                </div>

                <div classname="flex flex-col">
                    <div className="icon">
                        <FaGit className="text-2xl text-orange-600" />
                    </div>
                    <div className="icon-name">Git</div>
                </div>

                <div classname="flex flex-col">
                    <div className="icon">
                        <VscVscode className="text-2xl text-sky-600" />
                    </div>
                    <div className="icon-name">VS Code</div>
                </div>

                <div classname="flex flex-col">
                    <div className="icon">
                        <SiGooglecolab className="text-2xl text-orange-400" />
                    </div>
                    <div className="icon-name">Colab</div>
                </div>

                <div classname="flex flex-col">
                    <div className="icon">
                        <SiNginx className="text-2xl text-green-600" />
                    </div>
                    <div className="icon-name">Nginx</div>
                </div>
            </div>
        </>
    )
}

export default Skills