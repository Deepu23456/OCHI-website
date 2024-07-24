import React from "react";

function OpenNav({ toggleNav, isOpen }) {
  return (
    <div
      className={`nav-container z-[99] absolute left-0 overflow-auto w-full min-h-screen bg-zinc-900 pt-20 transition-all duration-300 ${
        isOpen ? "block" : "hidden"
      } `}
    >
      <div className="nav mt-10 w-full overflow-auto ">
        <div className="links px-8 py-5">
          {["Services", "Our work", "About us", "Insights", "Contact"].map(
            (item, index) => {
              return (
                <a
                  key={index}
                  className={`block max-md:text-[12vw] text-[8vw] uppercase font-['Founders_Grotesk_X'] font-bold leading-none`}
                >
                  {item}
                </a>
              );
            }
          )}
        </div>
        <div className="dets max-md:text-[4vw] max-xl:text-[1.6vw] px-8 w-full py-5 text-[1.2vw]">
          <h2>S:</h2>
          <div className="links flex flex-col gap-1 mt-6">
            {["instagram", "behance", "facebook", "linkedin"].map(
              (item, index) => {
                return (
                  <a key={index} className="capitalize">
                    {item}
                  </a>
                );
              }
            )}
          </div>
        </div>
        <div className="dets max-md:text-[4vw] max-xl:text-[1.6vw] px-8 w-full py-5 text-[1.2vw] ">
          <h2>L:</h2>
          <div className="links flex flex-col gap-1 mt-6">
            {[
              "202-1965 w 4th ave",
              "vancouver, canada",
              "30 chukarina st",
              "lviv, ukraine",
            ].map((item, index) => {
              return (
                <a key={index} className="capitalize">
                  {item}
                </a>
              );
            })}
          </div>
        </div>
        <div className="dets max-md:text-[4vw] max-xl:text-[1.6vw] px-8 w-full py-5 text-[1.2vw]">
          <h2>E:</h2>
          <div className="links flex flex-col gap-1 mt-6">
            {["hello@ochi.design"].map((item, index) => {
              return (
                <a key={index} className="capitalize">
                  {item}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpenNav;
