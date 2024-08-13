import React from 'react';
import panimalar from '../Images/Panimalar.jpg';
import velammal from '../Images/Velammal.png';

const Education = () => {
  return (

    <div id="education" className="w-full pt-9 lg:pt-16">

      <h1 className="text-white font-poppins font-semibold text-center mb-8 lg:mb-12 text-[30px] lg:text-[40px]">Education</h1>
            
            <div className="flex justify-center">
                <ol className="relative border-l-2 border-[rgb(133,76,230)] mx-12 lg:mx-96">                  
            
                <li className="ml-6 mb-12 flex items-center">
                    <span className="absolute flex items-center justify-center h-2 w-2 rounded-full bg-[rgb(133,76,230)] -left-1 overflow-hidden ring-8 ring-[rgb(133,76,230)]">
                    </span>
                    <div className="mx-2 lg:mx-6 p-4 bg-[rgba(15,15,36,0.74)] border border-[rgb(133,76,230)] border-opacity-35 rounded-lg shadow-sm flex flex-col w-[300px] lg:w-[500px] h-auto">
                        <div className="flex flex-col mt-2 lg:flex-row justify-between text-[#f2f3f498] text-sm lg:text-[16px] font-poppins font-semibold">
                            <div className="flex flex-row mb-5 lg:mb-0 items-center">
                                <div className="h-6 lg:h-7 w-6 lg:w-7 ring-4 ring-white rounded-full flex items-center justify-center mx-2 mr-3">
                                    <img className="h-full w-full rounded-full object-cover" src={panimalar} alt="Panimalar" />
                                </div>
                                <span>Panimalar Engineering College</span>
                            </div>
                            <span className="text-sm font-semibold ml-2 lg:ml-0">April 2024</span>
                        </div>
                        <div className="text-sm ml-2 mt-2 lg:mt-5 font-poppins font-normal text-[#f2f3f498]">B.E - Computer & Communication Engineering</div>
                        <div className="text-sm ml-2 mt-3 font-poppins font-normal text-[#f2f3f498]">CGPA - 8.92</div>
                        <div className="text-xs lg:text-[14px] leading-5 ml-2 mr mt-3 font-poppins font-normal text-[#f2f3f498]">
                        Throughout my college years, I took the lead and contributed to several projects enhancing my problem solving skills and built a strong foundation.
                        </div>
                    </div>
                </li>


                <li className="ml-6 mb-12 flex items-center">
                    <span className="absolute flex items-center justify-center h-2 w-2 rounded-full bg-[rgb(133,76,230)] -left-1 overflow-hidden ring-8 ring-[rgb(133,76,230)]">
                    </span>
                    <div className="mx-2 lg:mx-6 p-4 bg-[rgba(15,15,36,0.74)] border border-[rgb(133,76,230)] border-opacity-35 rounded-lg shadow-sm flex flex-col w-[300px] lg:w-[500px] h-auto">
                        <div className="flex flex-col mt-2 lg:flex-row justify-between text-[#f2f3f498] text-sm lg:text-[16px] font-poppins font-semibold">
                            <div className="flex flex-row mb-5 lg:mb-0 items-center">
                                <div className="h-6 lg:h-7 w-6 lg:w-7 ring-4 ring-white rounded-full flex items-center justify-center mx-2 mr-3">
                                    <img className="h-full w-full rounded-full object-cover" src={velammal} alt="velammal" />
                                </div>
                                <span>Velammal Matric Hsc School</span>
                            </div>
                            <span className="text-sm ml-2 lg:ml-0">March 2019</span>
                        </div>
                        <div className="text-sm ml-2 mt-2 lg:mt-5 font-poppins font-normal text-[#f2f3f498]">12th - State Board</div>
                        <div className="text-sm ml-2 mt-3 font-poppins font-normal text-[#f2f3f498]">Percentage - 88.5%</div>
                        <div className="text-xs lg:text-[14px] leading-5 ml-2 mt-3 font-poppins font-normal text-[#f2f3f498]">
                        In my higher secondary, I pursued biology stream securing a decent cutoff score of 170 out off 200, though I eventually led to follow a path in engineering.
                        </div>
                    </div>
                </li>


                <li className="ml-6 mb-2 flex items-center">
                    <span className="absolute flex items-center justify-center h-2 w-2 rounded-full bg-[rgb(133,76,230)] -left-1 overflow-hidden ring-8 ring-[rgb(133,76,230)]">
                    </span>
                    <div className="mx-2 lg:mx-6 p-4 bg-[rgba(15,15,36,0.74)] border border-[rgb(133,76,230)] border-opacity-35 rounded-lg shadow-sm flex flex-col w-[300px] lg:w-[500px] h-auto">
                        <div className="flex flex-col mt-2 lg:flex-row justify-between text-[#f2f3f498] text-sm lg:text-[16px] font-poppins font-semibold">
                            <div className="flex flex-row mb-5 lg:mb-0 items-center">
                                <div className="h-6 lg:h-7 w-6 lg:w-7 ring-4 ring-white rounded-full flex items-center justify-center mx-2 mr-3">
                                    <img className="h-full w-full rounded-full object-cover" src={velammal} alt="velammal" />
                                </div>
                                <span>Velammal Matric Hsc School</span>
                            </div>
                            <span className="text-sm ml-2 lg:ml-0">March 2017</span>
                        </div>
                        <div className="text-sm ml-2 mt-2 lg:mt-5 font-poppins font-normal text-[#f2f3f498]">10th - State Board</div>
                        <div className="text-sm ml-2 mt-3 font-poppins font-normal text-[#f2f3f498]">Percentge - 98%</div>
                        <div className="text-xs lg:text-[14px] leading-5 ml-2 mt-3 font-poppins font-normal text-[#f2f3f498]">
                        Achieved a score of 490 out of 500 in my SSLC. Competetive surrounding lifted my dedication reflecting my commitment to excellence.
                        </div>
                    </div>
                </li>
                
            </ol>
            </div>
    </div>
  );
}

export default Education;
