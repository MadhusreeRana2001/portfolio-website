import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-scroll";


const Navbar = ({ handleClick }) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = (show) => {
    setIsNavbarOpen(show);
  };

  return (
    <>
      <nav className="mb-6 md:mb-10 flex items-center justify-around md:justify-between py-1 fixed top-0 w-full z-50 bg-[#202032] shadow-md">
        <div className="md:hidden">
          <div id="hamburger" className={`hamburger inline-block cursor-pointer ${isNavbarOpen ? 'hidden' : ''}`} onClick={() => toggleNavbar(true)}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <div id="crossIcon" className={`cursor-pointer absolute ${isNavbarOpen ? '' : 'hidden'}`} onClick={() => toggleNavbar(false)}>
            <div className="line rotate-45"></div>
            <div className="line -rotate-45 -translate-y-1"></div>
          </div>
        </div>
        <div className="ml-6 font-bold text-2xl">mR.</div>
        <ul className={`fixed md:static space-x-4 items-center md:flex md:translate-x-0 transform transition-transform duration-300 ${isNavbarOpen ? '-translate-x-36 flex-col max-h-4 mt-22' : '-translate-x-96'}`}>
          <li className="navItem ml-4 pt-4 md:ml-0 md:pt-0">
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="navItem">
            <Link to="techStack" smooth={true} duration={500}>
              Tech Stack
            </Link>
          </li>
          <li className="navItem">
            <Link to="experience" smooth={true} duration={500}>
              Experience
            </Link>
          </li>
          <li className="navItem">
            <Link to="education" smooth={true} duration={500}>
              Education
            </Link>
          </li>
          <li className="navItem">
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li className="navItem">
            <Link to="awards" smooth={true} duration={500}>
              Awards
            </Link>
          </li>
          <li className="navItem pb-4 md:pb-0">
            <Link to="contactMe" smooth={true} duration={500}>
              Contact Me
            </Link>
          </li>
        </ul>
        <div className="my-6 ml-8 md:m-8 flex items-center justify-end gap-3 md:gap-4 text-xl">
          <FaLinkedin className="cursor-pointer" onClick={() => { handleClick("https://www.linkedin.com/in/madhusree-rana-460267239/") }}/>
          <FaGithub className="cursor-pointer" onClick={() => { handleClick("https://github.com/MadhusreeRana2001") }}/>
        </div>
      </nav>
    </>
  )
}

export default Navbar