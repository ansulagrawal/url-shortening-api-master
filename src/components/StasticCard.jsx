import React from "react";

function StasticCard({ image, heading, content, className }) {
  return (
    <div className={`w-full xl:w-96 pb-5 mt-4 bg-white rounded-md relative ${className}`}>
      <div className="flex place-items-center justify-center h-[90px] w-[90px] bg-dark-voilet -mt-11 ml-10 rounded-full">
        <img src={image} alt="" />
      </div>
      <div className="flex flex-col pt-2 px-10">
        <div className="text-[30px] text-dark-voilet font-bold">{heading}</div>
        <div className="leading-relaxed text-gray-400 text-[16px] mt-2 w-4/5">{content}</div>
      </div>
    </div>
  );
}

export default StasticCard;
