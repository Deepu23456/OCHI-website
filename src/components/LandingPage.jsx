import { motion } from "framer-motion";
import React from "react";
import { FaArrowUp } from "react-icons/fa";
import '../font.css'

function Landing({isOpen}) {
  return (
    <div data-scroll data-scroll-speed = '-.2' className={`w-full max-sm:h-[65vh] h-screen bg-zinc-900 pt-1 ${isOpen && "overflow-hidden"}`}>
      <div className="text-structure max-md:mt-32 max-md:px-4 mt-40 px-16">
        {["We create", "eye opening", "presentation"].map((item, index) => {
          return (
            <div key={index} className="masker">
              <div className="w-fit flex items-end overflow-hidden">
                {index === 1 && (
                  <motion.div initial={{width: 0}} animate={{width: "9vw"}} transition={{ease: [0.76, 0, 0.24, 1], duration: 1}} className="w-[9vw] h-[5.8vw] max-md:h-[12vw] bg-[url('https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg')] bg-cover relative max-md:-top-[1vw] -top-[0.8vw] mr-[1vw] rounded-md">
                    {" "}
                  </motion.div>
                )}
                <h1 className={` max-md:text-[18vw] max-md:leading-[15vw] max-xl:text-[12vw] max-xl:leading-[8vw] font-custom font-medium uppercase text-[9vw] leading-[8vw] `}>
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 max-md:mt-10 mt-20 max-md:px-4 py-6 px-10 flex items-center justify-between">
        {["for public and private companies", "from the first to IPO"].map(
          (item, index) => {
            return (
              <p
                key={index}
                className="max-md:text-[3vw] text-md capitalize font-light tracking-tight leading-none"
              >
                {item}
              </p>
            );
          }
        )}
        <div className="start flex items-center justify-between gap-2">
          <div className="max-md:w-[30vw] max-md:h-[7vw] max-md:px-[0] max-md:ml-[5px] max-md:py-[0] max-md:flex max-md:items-center max-md:justify-center max-md:text-[3vw] px-5 py-2 border-[1.5px] border-zinc-500 rounded-full uppercase font-light text-md cursor-pointer">
            start the project
          </div>
          <div className="max-md:px-[2vw] max-md:py-[2vw] max-md:text-[3vw] px-3 py-3 rounded-full border-[1.5px] border-zinc-500 rotate-45">
            <FaArrowUp />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
