import React, { useState } from "react";
import { useSelector } from "react-redux";

function DisplayUrl() {
  const [copied, setCopied] = useState("");
  const {
    url: { result = [] },
  } = useSelector(state => state);

  return (
    <section className="bg-custom-gray bg-opacity-25 pt-32 gap-4">
      {result?.map(item => (
        <div className="p-3 custom-card bg-white w-[80vw] m-auto rounded-lg flex flex-col md:flex-row justify-items-center place-items-center mt-4" key={item}>
          <p className="flex-1 w-full md:flex-1 border-b-2 md:border-none p-2 md:p-0">{item.result.original_link}</p>
          <a target="_blank" href={item.result.full_short_link} className="mr-5 text-custom-cyan w-full sm:w-fit p-2 md:p-0">
            {item.result.full_short_link}
          </a>
          <button
            className={`border-0 py-2 text-center w-full md:w-24 focus:outline-none rounded-lg text-white ${
              copied === item.result.full_short_link ? "bg-dark-voilet hover:bg-violet-950" : "bg-custom-cyan hover:bg-cyan-400"
            }`}
            onClick={e => {
              e.preventDefault();
              setCopied(item.result.full_short_link);
              navigator.clipboard.writeText(item.result.full_short_link);
            }}>
            {copied === item.result.full_short_link ? "Copied!" : "Copy"}
          </button>
        </div>
      ))}
    </section>
  );
}

export default DisplayUrl;
