import React, { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[rgb(9,9,23)] px-3.5 py-3 fixed top-0 left-0 w-full z-30">
      <div className="flex justify-between items-center mt-1 lg:mx-20">
        
          <div className="text-white font-poppins font-medium px-5 md:px-12 flex items-center">
              <span className="text-[rgb(133,76,230)] text-[32px] font-poppins font-medium">{'<'}</span>
              <span className="text-[rgb(133,76,230)] text-[18px] font-poppins font-medium">{'/'}</span>
              <span className="text-white ml-1 text-[18px] font-poppins font-medium">Rakesh</span>
              <span className="text-[rgb(133,76,230)] ml-1 text-[32px] font-poppins font-medium">{'>'}</span>
          </div>
        
        <ul className="hidden md:flex space-x-10 pr-12">
          <li className="text-[rgb(242,243,244)] font-poppins font-medium hover:text-[rgb(133,76,230)]"><a href="#about">About</a></li>
          <li className="text-[rgb(242,243,244)] font-poppins font-medium hover:text-[rgb(133,76,230)]"><a href="#skills">Skills</a></li>
          <li className="text-[rgb(242,243,244)] font-poppins font-medium hover:text-[rgb(133,76,230)]"><a href="#projects">Projects</a></li>
          <li className="text-[rgb(242,243,244)] font-poppins font-medium hover:text-[rgb(133,76,230)]"><a href="#education">Education</a></li>
          <li className="text-[rgb(242,243,244)] font-poppins font-medium hover:text-[rgb(133,76,230)]"><a href="#contact">Hire me</a></li>
        </ul>

        <button onClick={toggleMenu} className="flex md:hidden">
          <RxHamburgerMenu className='text-white mr-4 h-6 w-6' />
        </button>

      </div>

      {isOpen && (
        <ul className="flex-col pt-3 px-8 md:hidden">
          <li onClick={toggleMenu} className="py-2 font-poppins text-[rgb(242,243,244)]"><a href="#about">About</a></li>
          <li onClick={toggleMenu} className="py-2 font-poppins text-[rgb(242,243,244)]"><a href="#skills">Skills</a></li>
          <li onClick={toggleMenu} className="py-2 font-poppins text-[rgb(242,243,244)]"><a href="#projects">Projects</a></li>
          <li onClick={toggleMenu} className="py-2 font-poppins text-[rgb(242,243,244)]"><a href="#education">Education</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;