import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div data-scroll data-scroll-speed = '-.01' className={`w-full py-10 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl`}>
      <div className="text border-t-[1px] border-b-[1px] border-zinc-400 flex items-center whitespace-nowrap overflow-hidden">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          className='text-[30vw] leading-none font-["Founders_Grotesk_X"] -mb-[10vw] uppercase font-semibold pt-[1vw] pr-20'
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          className='text-[30vw] leading-none font-["Founders_Grotesk_X"] -mb-[10vw] uppercase font-semibold pt-[1vw] pr-20'
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
