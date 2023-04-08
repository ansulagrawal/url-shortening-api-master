import React from "react";
import Logo from "../assets/logo.svg";

function Header() {
  return (
    <header className="text-gray-600 body-font w-[80vw] m-auto">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <img className="h-8 w-auto" src={Logo} alt="Compony Logo" />
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4	flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900">Features</a>
          <a className="mr-5 hover:text-gray-900">Pricing</a>
          <a className="mr-5 hover:text-gray-900">Resources</a>
        </nav>
        <button className="py-1 px-3 focus:outline-none bg-white mr-2 text-gray-600 hover:text-gray-900">
          Login
        </button>
        <button className="bg-custom-cyan border-0 py-1 px-3 focus:outline-none rounded-full mt-4 md:mt-0 text-white hover:bg-cyan-400">
          Sign Up
        </button>
      </div>
    </header>
  );
}

export default Header;
