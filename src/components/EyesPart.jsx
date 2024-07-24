import React from "react";

function EyesPart({ rotate, text, play, isPlay }) {
  return (
    <div
      onClick={() => {
        if (isPlay === "play") {
          const videoElement = document.querySelector("video");
          if (videoElement) {
            videoElement.style.opacity = 1;
            videoElement.style.transform = "scale(1)";
            videoElement.play();
            play(true);
          }
        } else if (isPlay === "pause") {
          return
        }
      }}
      className="eyes-inner absolute -translate-x-[50%] -translate-y-[50%] top-1/2 left-1/2 flex gap-10 "
    >
      <div className="flex items-center justify-center max-md:w-[30vw] max-md:h-[30vw] w-[15vw] h-[15vw] rounded-full bg-zinc-100">
        <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
          <h2 className="text-play text-white absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] max-md:text-[3vw] text-[1.5vw] uppercase">
            {text}
          </h2>
          <div
            style={{
              transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
            }}
            className="line bg-transparent absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-[1.6vw]"
          >
            <div className="w-[1.6vw] h-[1.6vw] rounded-full bg-zinc-100"></div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center max-md:w-[30vw] max-md:h-[30vw] w-[15vw] h-[15vw] rounded-full bg-zinc-100">
        <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
          <h2 className="text-play max-md:text-[3vw] text-white absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[1.5vw] uppercase">
            {text}
          </h2>
          <div
            style={{
              transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
            }}
            className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-[1.6vw]"
          >
            <div className="w-[1.6vw] h-[1.6vw] rounded-full bg-zinc-100"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EyesPart;
