import React from "react";
import logo1 from "../assets/logo001.svg";
import logo2 from "../assets/logo002.svg";
import logo3 from "../assets/logo003.png";
import Card from "./Card";

function CardContainer() {
  return (
    <div className="sticky top-0 max-xl:static max-xl:h-[120vh] max-md:h-[130vh] w-full bg-white max-md:p-4 px-20 py-10">
      <div className="card-container max-md:min-96 h-96 w-full max-xl:flex-wrap flex items-center">
        <div className="card-container-left max-xl:w-full  w-1/2 h-full p-3">
          <div className="card relative w-full h-full bg-[#004D43] rounded-lg flex items-center justify-center">
            <Card logo={logo1} text="&copy; 2019-2022" color={'#CDEA68'}/>
          </div>
        </div>
        <div className="card-container-right max-xl:w-full  w-1/2 h-[65vh] max-md:flex-col flex items-center justify-between p-3">
          <div className="card max-md:w-full relative w-1/2 h-full bg-[#212121] max-md:-mt-4 max-md:mb-2 max-md:-ml-0 -ml-3 rounded-lg flex items-center justify-center">
            <Card logo={logo2} text="rating 5.0 on clutch" />
          </div>
          <div className="card max-md:w-full relative w-1/2 h-full bg-[#212121] rounded-lg flex items-center justify-center">
            <Card logo={logo3} text="business bootcamp alumini" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardContainer;
