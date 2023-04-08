import React, { useState } from "react";
import { useLazyGetShortenUrlQuery } from "../app/api/urlApi";

function UrlShortnerSection() {
  const [value, setValue] = useState("");
  const [getResults] = useLazyGetShortenUrlQuery();

  return (
    <div className="relative">
      <main className="flex flex-col md:flex-row sm:flex-row items-center gap-5 w-[80vw] m-auto xl:px-20 xl:pt-12 xl:pb-10 px-8 pt-6 pb-5 md:px-12 rounded-lg bg-dark-voilet bg-shorten-mobile md:bg-shorten-desktop bg-cover bg-no-repeat -mb-16">
        <input
          type="url"
          id="url"
          value={value}
          onChange={e => setValue(e.target.value)}
          className="flex-1 bg-white w-full focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 focus:text-gray-100 text-base outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Shorten a link here..."
        />
        <button
          className="bg-custom-cyan w-full sm:w-auto border-0 py-2 px-6 focus:outline-none rounded text-white hover:bg-cyan-400"
          onClick={() => {
            if (value.length) {
              getResults(value);
            }
            setValue("");
          }}>
          Shorten It!
        </button>
      </main>
    </div>
  );
}

export default UrlShortnerSection;
