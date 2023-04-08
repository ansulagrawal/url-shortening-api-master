import React from "react";
import HeroLogo from "../assets/illustration-working.svg";

function HeroSection() {
  return (
    <section id="main-hero" className="text-gray-400 bg-white body-font w-[80vw] m-auto">
      <div className="container px-5 py-24 mx-auto flex flex-col-reverse md:flex-row flex-wrap items-center">
        <div className="md:w-1/2 w-full">
          <h1 className="title-font font-medium lg:text-8xl md:text-6xl text-4xl  text-slate-950">More than just shorter links</h1>
          <p className="leading-relaxed text-2xl mt-4 w-4/5">Build your brand's recognition and get detailed insights on how links are performing</p>
          <button className="bg-custom-cyan border-0 py-2 px-6 focus:outline-none rounded-full mt-6 text-white hover:bg-cyan-400">Get Started</button>
        </div>
        <div className="md:w-1/2 w-full mb-5 md:mb-0">
          <img src={HeroLogo} alt="Hero Logo" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
