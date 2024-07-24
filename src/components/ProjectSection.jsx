import React, { useEffect, useState } from "react";
import EyesPart from "./EyesPart";
import '../font.css'

function ProjectSection() {
  const [rotate, setRotate] = useState(0);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });
  return (
    <div
      data-scroll
      data-scroll-section
      className="sticky max-xl:static top-0 w-full max-xl:h-[70vh] h-screen bg-[#CDEA68] flex items-center justify-center"
    >
      <h1 className='uppercase text-zinc-800 font-medium max-xl:text-[18vw] max-xl:w-[100%] text-[15vw] leading-[12vw] tracking-tight font-custom w-[70%] text-center'>
        ready <br /> to start <br /> the project
      </h1>
      <div data-scroll data-scroll-section data-scroll-speed="-.2" className="eyes absolute">
        <EyesPart rotate={rotate} play={setPlay} isPlay="pause" />
      </div>
    </div>
  );
}

export default ProjectSection;
