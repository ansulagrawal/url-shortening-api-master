import React from "react";
import Logo from "../assets/logo.svg";
import Facebook from "../assets/icon-facebook.svg";
import Twitter from "../assets/icon-twitter.svg";
import Pinterest from "../assets/icon-pinterest.svg";
import Instagram from "../assets/icon-instagram.svg";

function Footer() {
  return (
    <footer className="text-white body-font bg-dark-blue">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <div className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <img src={Logo} alt="Shortly" className="invert" />
            <span className="ml-3 text-xl">url shortner</span>
          </div>
          <p className="mt-2 text-sm text-white">Web application for shortening large urls</p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Features</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-white hover:text-custum-cyan cursor-pointer">Link Shortening</a>
              </li>
              <li>
                <a className="text-white hover:text-custum-cyan cursor-pointer">Branded Links</a>
              </li>
              <li>
                <a className="text-white hover:text-custum-cyan cursor-pointer">Analytics</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Resources</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-white hover:text-custum-cyan cursor-pointer">Blog</a>
              </li>
              <li>
                <a className="text-white hover:text-custum-cyan cursor-pointer">Developers</a>
              </li>
              <li>
                <a className="text-white hover:text-custum-cyan cursor-pointer">Support</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Company</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-white hover:text-custum-cyan cursor-pointer">About</a>
              </li>
              <li>
                <a className="text-white hover:text-custum-cyan cursor-pointer">Our Team</a>
              </li>
              <li>
                <a className="text-white hover:text-custum-cyan cursor-pointer">Careers</a>
              </li>
              <li>
                <a className="text-white hover:text-custum-cyan cursor-pointer">Contact</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 flex h-[30px] gap-3 align-middle justify-center">
            <img src={Facebook} alt="facebook" />
            <img src={Twitter} alt="twitter" />
            <img src={Pinterest} alt="pinterest" />
            <img src={Instagram} alt="instagram" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
