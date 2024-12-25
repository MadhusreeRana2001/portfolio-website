import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from './components/Education';
import Projects from './components/Projects';
import Awards from "./components/Awards";
import Contact from "./components/Contact";


const App = () => {
  const handleClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-800">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
          </div>
        </div>
        <Navbar handleClick={handleClick}/>
        <Intro handleClick={handleClick}/>
        <Skills />
        <Experience />
        <Education />
        <Projects handleClick={handleClick}/>
        <Awards/>
        <Contact/>
      </div>
    </>
  )
}

export default App