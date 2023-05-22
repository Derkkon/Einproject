import React from "react";
import logo from "../assets/logo.png";
import { IoIosPerson } from 'react-icons/io';

const Navbar = () => {
  return (
  <nav className="bg-yellow-300 shadow-lg">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href={'/'}>
      <img className="h-8 w-8" src={logo} alt="Logo"/>
    </a>
    <div className="flex md:order-2">
    <a href={'/signIn'}>
      <button className="flex justify-center text-3xl hover:text-red-600 mr-2"><IoIosPerson /></button>
    </a>
        <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
      </button>
    </div>
    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
      <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border bg-yellow-300 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-yellow-300">
        <li>
          <a href={'/bestuur'} className="block pl-3 pr-4 text-red-600 hover:text-white hover:bg-red-600 rounded-md px-3 py-2 text-md font-medium">Bestuur</a>
        </li>
        <li>
          <a href={'/over'} className="block pl-3 pr-4 text-red-600 hover:text-white hover:bg-red-600 rounded-md px-3 py-2 text-md font-medium">Over ons</a>
        </li>
        <li>
          <a href={'/activiteiten'} className="block pl-3 pr-4 text-red-600 hover:text-white hover:bg-red-600 rounded-md px-3 py-2 text-md font-medium">Activiteiten</a>
        </li>
        <li>
          <a href={'/ploegen'} className="block pl-3 pr-4 text-red-600 hover:text-white hover:bg-red-600 rounded-md px-3 py-2 text-md font-medium">Ploegen</a>
        </li>
        <li>
          <a href={'/contact'} className="block pl-3 pr-4 text-red-600 hover:text-white hover:bg-red-600 rounded-md px-3 py-2 text-md font-medium">Contact</a>
        </li>
        <li>
          <a href={'https://scduffel.shop4clubs.eu/'} target={"_blank"} rel={"noreferrer"} className="block pl-3 pr-4 text-red-600 hover:text-white hover:bg-red-600 rounded-md px-3 py-2 text-md font-medium">Kledij</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


  );
};

export default Navbar;