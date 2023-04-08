import React from "react";
import StasticCard from "./StasticCard";
import BrandImg from "../assets/icon-brand-recognition.svg";
import RecordImg from "../assets/icon-detailed-records.svg";
import FCImg from "../assets/icon-fully-customizable.svg";

function AdvanceStatstics() {
  const stats = [
    {
      heading: "Brand Recognition",
      content: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil contidence in vour conrent",
      image: BrandImg,
      className: "",
    },
    {
      heading: "Detailed Records",
      content: "Gain insights into who is clicking your links. Knowing when and where people engage witn your content helps inform better decisions.",
      image: RecordImg,
      className: "xl:mt-24",
    },
    {
      heading: "Fully Customizable",
      content: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
      image: FCImg,
      className: "xl:mt-48",
    },
  ];
  return (
    <section className="bg-custom-gray bg-opacity-25 px-5 xl:px-0 pb-32">
      <div className="text-center mb-12 pt-14" id="advance-stats-header-container">
        <h2 className="font-bold text-3xl">Advance Statics</h2>
        <p className="text-xl md:w-4/12 w-full m-auto text-gray-400 px-2">Track how your links are performing across the web with our advance statics dashboard.</p>
      </div>
      <div className="flex place-items-center flex-col xl:flex-row justify-center gap-10">
        <div className="absolute bg-custom-cyan h-4 xl:w-[500px]"></div>
        {stats.map(item => (
          <StasticCard key={item.heading} {...item} />
        ))}
      </div>
    </section>
  );
}

export default AdvanceStatstics;
