import React from "react";


function CardInfo({image, imageName, array}) {
  return (
    <div className="card-info">
      <h4 className="max-xl:text-[2.8vw] max-md:text-[5vw] flex items-center gap-2 font-light uppercase">
        <span className="h-2 w-2 bg-white rounded-full"></span>{imageName}
      </h4>
      <div className="card shadow-lg hover:scale-95 transition duration-1000 w-full rounded-2xl h-full overflow-hidden mt-4 mb-4">
        <img
          className="w-full h-full bg-cover hover:scale-125 transition duration-700 "
          src={image}
          alt=""
        />
      </div>
      <div className="flex w-full items-center gap-2 uppercase">
        {array.map(
          (item, index) => {
            return (
              <div
                key={index}
                className="font-light px-[1.5vw] py-[0.3vw] border-zinc-400 border rounded-full"
              >
                <h4 className="max-lg:text-[1.5vw] max-md:text-[3vw] text-[1vw]">{item}</h4>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default CardInfo;
