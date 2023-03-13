import React from "react";
import logo from "../assets/logo.png"
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className="bg-yellow-400 shadow-lg">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <a href={'/'}>
              <img className="h-8 w-8" src={logo} alt="Logo"/>
            </a>
            <a href={'/signIn'} className="text-red-600 hover:text-white hover:bg-red-600 rounded-md px-3 py-2 text-md font-medium">
              Aanmelden
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-4 flex items-center justify-end">
              <a href={'/bestuur'} className="text-red-600 hover:text-white hover:bg-red-600 rounded-md px-3 py-2 text-md font-medium">Bestuur</a>
              <a href={'/over'} className="text-red-600 hover:text-white hover:bg-red-600 rounded-md px-3 py-2 text-md font-medium">Over ons</a>
              <a href={'/activiteiten'} className="text-red-600 hover:text-white hover:bg-red-600 rounded-md px-3 py-2 text-md font-medium">Activiteiten</a>
              <a href={'/ploegen'} className="text-red-600 hover:text-white hover:bg-red-600 rounded-md px-3 py-2 text-md font-medium">Ploegen</a>
              <a href={'/contact'} className="text-red-600 hover:text-white hover:bg-red-600 rounded-md px-3 py-2 text-md font-medium">Contact</a>
              <div className="flex justify-end text-2xl ml-2">
                <a href='https://www.facebook.com/' target={"_blank"} rel={"noreferrer"} className="hover:text-red-600 mr-2">
                  <FaFacebookSquare/>
                </a>
                <a href='https://www.instagram.com/' target={"_blank"} rel={"noreferrer"}  className="hover:text-red-600">
                  <FaInstagram/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
