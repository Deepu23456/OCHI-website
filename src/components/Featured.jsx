import React from "react";
import featureLeft from "../assets/feature-left.png";
import featureRight from "../assets/feature-right.jpg";
import trawa from "../assets/trawa.jpg";
import premium from "../assets/premium-blend.png";
import CardInfo from "./CardInfo";
import { motion, useAnimation } from "framer-motion";

function Featured() {
  const cards = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];
  const handleHover = (i) => {
    cards[i].start({ y: "0" });
  };
  const handleHoverEnd = (i) => {
    cards[i].start({ y: "100%" });
  };

  return (
    <div data-scroll data-scroll-section className="w-full py-20">
      <div className="w-full px-[5vw] border-b-[1px] border-zinc-700 pb-10">
        <h1 className="max-md:text-[10vw] text-[4vw] tracking-tight">Featured projects</h1>
      </div>
      <div className="relative cards w-full flex max-xl:flex-wrap gap-5 mt-10 px-[5vw]">
        <motion.div
          onHoverStart={() => handleHover(0)}
          onHoverEnd={()=>handleHoverEnd(0)}
          className="card-container max-xl:w-full w-1/2 h-[80vh]rounded-2xl"
        >
          <h1 className="text-[#CDEA68]  flex overflow-hidden absolute top-[38%] left-[40%] leading-none z-[9] text-[8vw] tracking-tight font-normal  uppercase">
            {"fyde".split("").map((item, index) => {
              return (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ease: [0.22, 1, 0.36, 1], delay: index * .06}}
                  key={index}
                >
                  {item}
                </motion.span>
              );
            })}
          </h1>
          <CardInfo
            image={featureLeft}
            imageName={"fyde"}
            array={["audit", "copy writing", "sales deck", "slides design"]}
          />
        </motion.div>
        <motion.div
          onHoverStart={() => handleHover(1)}
          onHoverEnd={()=>handleHoverEnd(1)}
          className="card-container max-xl:w-full w-1/2 h-[80vh]rounded-2xl"
        >
          <h1 className="text-[#CDEA68]  overflow-hidden flex absolute top-[38%] left-[40%] leading-none z-[9] text-[8vw] tracking-tight font-normal uppercase">
            {"vise".split("").map((item, index) => {
              return (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ease: [0.22, 1, 0.36, 1], delay: index * .06}}
                  key={index}
                >
                  {item}
                </motion.span>
              );
            })}
          </h1>
          <CardInfo
            image={featureRight}
            imageName={"vise"}
            array={["agency", "company presentation"]}
          />
        </motion.div>
      </div>
      <div className="relative cards w-full flex max-xl:flex-wrap gap-5 mt-10 px-[5vw]">
        <motion.div
          onHoverStart={() => handleHover(2)}
          onHoverEnd={()=>handleHoverEnd(2)}
          className="card-container max-xl:w-full w-1/2 h-[80vh]rounded-2xl"
        >
          <h1 className="text-[#CDEA68] overflow-hidden flex absolute top-[38%] left-[37%] leading-none z-[9] text-[8vw] tracking-tight font-normal  uppercase">
            {"trawa".split("").map((item, index) => {
              return (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[2]}
                  transition={{ease: [0.22, 1, 0.36, 1], delay: index * .06}}
                  className="inline-block"
                  key={index}
                >
                  {item}
                </motion.span>
              );
            })}
          </h1>
          <CardInfo
            image={trawa}
            imageName={"trawa"}
            array={["brand identity", "design research", "investor deck"]}
          />
        </motion.div>
        <motion.div
          onHoverStart={() => handleHover(3)}
          onHoverEnd={()=>handleHoverEnd(3)}
          className="card-container max-xl:w-full w-1/2 h-[80vh]rounded-2xl"
        >
          <h1 className="text-[#CDEA68] overflow-hidden flex absolute top-[38%] left-[20%] leading-none z-[9] text-[8vw] tracking-tight font-normal  uppercase whitespace-nowrap">
            {"premium blend".split("").map((item, index) => {
              return (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[3]}
                  transition={{ease: [0.22, 1, 0.36, 1], delay: index * .01}}
                  key={index}
                >
                  {item}
                </motion.span>
              );
            })}
          </h1>
          <CardInfo
            image={premium}
            imageName={"premium blend"}
            array={["brand template"]}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Featured;
