import React from "react";
import logo from "../assets/logo.png"


const Navbar = () => {
  return (
    <div className='bg-slate-800'>
      <nav className="container mx-auto flex justify-between p-8 bg-slate-800 text-white"><a href="/">
          <img src={logo} className="w-10" alt="logo" />
        </a>
                   
        <ul className="flex gap-14"> 
          <li>
            <a href={"/bestuur"} className='hover:bg-sky-700'>
              Bestuur 
            </a>
            </li>
            <li>
                <a href={"/over"} className='hover:bg-sky-700'>
                  Over 
                </a>
            </li>
            <li>
                <a href={"/ploegen"} className='hover:bg-sky-700'>
                  Ploegen 
                </a>
            </li>
            <li>
                <a href={"/contact"} className='hover:bg-sky-700'>
                  Contact 
                </a>
            </li>
          </ul>
      </nav>
    </div>
  );
};

export default Navbar;
