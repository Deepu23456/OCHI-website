import { useState } from "react";
import "./App.css";
import About from "./components/About";
import CardContainer from "./components/CardContainer";
import EyeMove from "./components/EyeMove";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Landing from "./components/LandingPage";
import Marquee from "./components/Marquee";
import { Navbar } from "./components/Navbar";
import ProjectSection from "./components/ProjectSection";
import LocomotiveScroll from "locomotive-scroll";
import OpenNav from "./components/OpenNav";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`w-full bg-zinc-900 text-white min-h-screen`}>
      <Navbar isOpen={isOpen} toggleNav={toggleNav} />
      {isOpen ? (
        <OpenNav isOpen={isOpen} toggleNav={toggleNav} />
      ) : (
        <>
          <Landing isOpen={isOpen} />
          <Marquee />
          <About />
          <EyeMove />
          <Featured />
          <CardContainer />
          <ProjectSection />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
