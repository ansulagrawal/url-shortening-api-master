import React from "react";
import Logo from "../assets/logo.svg";
import { useGetShortenUrlQuery } from "../app/api/urlApi";

function Header() {
  const { data } = useGetShortenUrlQuery("https://flags-nine.vercel.app/?search=india");
  console.log(data, "data");
  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <img className="h-8 w-auto" src={Logo} alt="" />
        
      </nav>
    </header>
  );
}

export default Header;
