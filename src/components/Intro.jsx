import { IoDocumentTextSharp } from "react-icons/io5";
import profilePic from "../assets/ProfilePic.png";
import { NAME, ROLE, ABOUT_CONTENT } from "./Constants";


const Intro = ({ handleClick }) => {

    return (
        <>
            <div id="home">
                <div className="flex flex-col md:flex-row items-center justify-center text-justify md:space-x-28 pb-4 mx-4 mt-36">
                    <div>
                        <div className="text-5xl font-thin tracking-tighter text-center border-b">{NAME}
                        </div>
                        <div className="mt-2 text-pink-300 text-2xl text-center">{ROLE}
                        </div>
                        <div className="my-2 max-w-xl py-4 font-light text-sm">{ABOUT_CONTENT}</div>
                    </div>
                    <div>
                        <img src={profilePic} alt="Madhusree Rana" className="w-40 h-60 rounded-lg mt-2 md:mt-0" />
                    </div>
                </div>
                <div className="flex justify-center md:justify-evenly">
                    <button className="button rounded-full bg-pink-600 active:bg-pink-700 px-3 py-1 mt-8 md:mt-0 flex items-center" onClick={() => { handleClick("/resume.pdf")}}>Download Resume <IoDocumentTextSharp className="ml-1"/></button>
                    <button disabled className="hidden md:inline"></button>
                </div>
            </div>
        </>
    )
}

export default Intro