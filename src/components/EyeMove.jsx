import React, { useEffect, useState } from "react";
import EyesPart from "./EyesPart";

function EyeMove() {
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
    <div className="eyes w-full h-screen overflow-hidden relative">
      <video
        onClick={() => {
          const videoElement = document.querySelector("video");
          if (videoElement) {
            videoElement.style.opacity = 0;
            videoElement.style.transform = "scale(0)";
            videoElement.load();
            setPlay(false);
          }
        }}
        className="cursor-pointer absolute h-full w-full top-0 left-0 z-[9999] object-cover opacity-0 scale-0"
        src="https://ochi.design/wp-content/uploads/2022/05/Main-HQ-1.mp4"
      ></video>
      <div data-scroll data-scroll-speed = '-.7' className='cursor-pointer relative w-full h-full bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")] bg-center bg-cover'>
        <EyesPart rotate={rotate} text="play" play={setPlay} isPlay='play'/>
      </div>
    </div>
  );
}

export default EyeMove;
