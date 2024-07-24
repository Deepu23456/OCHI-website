import React from "react";

function Card({ logo, text, color }) {
  return (
    <>
      <img src={logo} alt="" />
      <div className={`info absolute bottom-4 left-4 px-[0.8vw] py-[0.2vw] border-2 rounded-full border-[${color}]`}>
        <h4 className={`text-[${color}] uppercase max-xl:text-[2vw] text-[0.9vw] font-bold`}>{text}</h4>
      </div>
    </>
  );
}

export default Card;
