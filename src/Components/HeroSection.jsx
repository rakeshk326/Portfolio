import React from 'react';
import { AiOutlineGithub } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import profile from '../Images/ProfilePicture.png';

const HeroSection = () => {
  return (
    <section id="about" className="flex flex-col-reverse lg:flex-row items-center justify-center px-8 pt-24 lg:pt-40 bg-[rgb(9,9,23)]">
      
      <div className="text-center lg:ml-20 xl:ml-44 lg:text-left lg:mt-12 lg:w-1/2">
        <h1 className="text-white font-poppins font-semibold text-[30px] lg:text-[50px]">Hi, I am Rakesh</h1>
        <h3 className="text-[rgb(133,76,230)] mt-2 font-poppins font-semibold text-[20px] lg:text-[32px]">Full Stack Web Developer</h3>
        <p className="text-[#f2f3f498] leading-9 font-poppins font-light mt-4 lg:mt-6 text-[15px] lg:text-[20px]">
        Driven by curiosity and a strong passion for problem-solving,  thrive on tackling complex problems and eager to advance in the industry. I enjoy collaborating with like-minded people and wish to contribute to impactful projects that push the boundaries of technology and drive innovation.
        </p>

        <div className="flex space-x-6 justify-center lg:justify-start items-center mt-4 lg:ml-4 lg:mt-8">
        <a href="https://github.com/rakeshk326" target="_blank"><AiOutlineGithub className="flex text-white h-10 lg:h-12 w-10 lg:w-12 relative z-20"/></a>
        <a href="https://www.linkedin.com/in/rakeshk326/" target="_blank"><FaLinkedin className="flex text-white h-8 lg:h-10 w-8 lg:w-10 relative z-20" /></a>
        <a href="https://leetcode.com/u/Rakeshk_326/" target="_blank"><SiLeetcode className="flex text-white h-7 lg:h-9 w-7 lg:w-9 relative z-20" /></a>
        </div>

        <a href="https://drive.google.com/file/d/1LBZZfRk5em7Y0M6YpQpHSgNha7NHQd65/view?usp=sharing" target="_blank"> <button style={{ background: "linear-gradient(225deg, rgb(132, 0, 255) 0%, rgb(230, 0, 255) 100%)"}} className="text-white px-11 py-3 lg:py-4 rounded-full mt-8 lg:mt-10 text-[18px] font-poppins font-semibold relative z-20">
        Check Resume
        </button></a>

      </div>

      <div className="mb-8 md:ml-12 lg:w-1/2">
        <img
          src={profile}
          alt="Profile"
          className="w-60 h-60 lg:w-96 lg:h-96 rounded-full object-cover mx-auto border border-[rgb(133,76,230)] border-opacity-35 relative z-20"
        />
      </div>
    </section>
  );
};

export default HeroSection;