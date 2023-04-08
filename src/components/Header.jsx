import React, { useState } from "react";
import Logo from "../assets/logo.svg";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200">
      <div className="md:max-w-screen-xl w-[100vw] flex flex-wrap items-center justify-center md:justify-between mx-auto p-4">
        <div className="flex items-center justify-between w-full md:w-auto">
          <img className="h-8 w-auto" src={Logo} alt="Compony Logo" />
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            onClick={() => setOpen(!open)}
            aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>
        <div className={`${open ? "block" : "hidden"} w-[80vw] md:block md:w-auto`} id="navbar-default">
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4	flex flex-col md:flex-row flex-wrap items-center text-base justify-center">
            <a className="mr-5 p-2 md:p-0 hover:text-gray-900">Features</a>
            <a className="mr-5 p-2 md:p-0 hover:text-gray-900">Pricing</a>
            <a className="mr-5 p-2 md:p-0 hover:text-gray-900">Resources</a>
          </nav>
          <div className="flex flex-col md:hidden md:flex-row">
            <button className="py-1 px-3 focus:outline-none bg-white mr-2 text-gray-600 hover:text-gray-900">Login</button>
            <button className="bg-custom-cyan border-0 py-1 px-3 focus:outline-none rounded-full mt-4 md:mt-0 text-white hover:bg-cyan-400">Sign Up</button>
          </div>
        </div>
        <div className="hidden md:flex flex-col md:flex-row">
          <button className="py-1 px-3 focus:outline-none bg-white mr-2 text-gray-600 hover:text-gray-900">Login</button>
          <button className="bg-custom-cyan border-0 py-1 px-3 focus:outline-none rounded-full mt-4 md:mt-0 text-white hover:bg-cyan-400">Sign Up</button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
