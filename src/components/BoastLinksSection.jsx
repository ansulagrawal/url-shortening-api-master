import React from "react";

function BoastLinksSection() {
  return (
    <div className="w-full h-[250px] bg-dark-voilet bg-boast-pattern bg-cover bg-no-repeat flex gap-10 place-items-center flex-col justify-center">
      <div className="text-white text-[20px] md:text-[40px]">Boost your links today</div>
      <button className="bg-custom-cyan md:w-[190px] w-[140px] h-[60px] border-0 py-1 px-3 md:text-[20px] focus:outline-none rounded-full mt-4 md:mt-0 text-white hover:bg-cyan-400">
        Sign Up
      </button>
    </div>
  );
}

export default BoastLinksSection;
