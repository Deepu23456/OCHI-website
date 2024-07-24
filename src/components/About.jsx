import React from "react";
import aboutImg from '../assets/about-component.jpg';

function About() {
  return (
    <div data-scroll data-scroll-section className="w-full max-md:h-[120vh] max-md:p-8 p-20 bg-[#CDEA68] max-sm:rounded-tl-none max-sm:rounded-tr-none rounded-tl-3xl rounded-tr-3xl text-zinc-800">
      <h1 className="max-md:text-[6vw] max-md:leading-[6vw] text-[3.6vw] leading-[4vw] tracking-tight">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain ideas, and hire great people.
      </h1>
      <div className="w-full border-t-[2px] max-md:py-4 border-[#a4b2717e] mt-20 max-md:flex-col flex py-[1vw]">
        <div className="w-1/2">
          <h1 className="max-md:text-[6vw] text-[4vw] mb-4 -mt-4">Our approach:</h1>
          <button className="max-xl:w-[14vw] max-md:w-[28vw] max-md:px-4 px-6 w-[12vw] py-3 bg-zinc-900 rounded-full text-white uppercase max-xl:text-[2.5vw] text-[1.2vw] flex items-center justify-between">
            read more <span className=" w-2 h-2 bg-white rounded-full"></span>
          </button>
        </div>
        <div className="max-md:w-full max-md:mt-4 w-1/2 h-[70vh] rounded-3xl overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={aboutImg}
            alt="image"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
