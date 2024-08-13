import React from 'react';
import FoodApp from '../Images/FoodApp.jpg';
import WeatherApp from '../Images/WeatherApp.png';
import QuizApp from '../Images/QuizApp.jpg';

const items = [
  { id: 1, title: 'Food ordering app - MERN stack', image: FoodApp, link: 'https://yummy-food-po8r.onrender.com' },
  { id: 2, title: 'Weather app - React & Node', image: WeatherApp, link:'https://github.com/rakeshk326/weather_app_using_react_and_node' },
  { id: 3, title: 'Quiz application - Javascript', image: QuizApp, link: 'https://github.com/rakeshk326/quiz-application-using-html-css-javascript' },
];

const Projects = () => {
  return (
    <div id="projects" className="bg-[rgb(9,9,23)] pt-[34px] lg:pt-16">
      <h1 className="text-white font-poppins font-semibold text-center mb-8 lg:mb-12 text-[30px] lg:text-[40px]">Projects</h1>
    <div className="w-full flex justify-center items-center">
      <div className="w-4/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-10">
        {items.map(item => (
          <div
            key={item.id}
            className="bg-[rgba(15,15,36,0.74)] border p-3 border-[rgb(133,76,230)] border-opacity-35 rounded-lg shadow"
          >
            <img className="rounded-t-lg w-full h-40 object-cover" src={item.image} alt="" />
            <div className="px-2 pt-5 pb-4">
              <h5 style={{ wordSpacing: '3px' }} className="mb-4 text-md lg:text-[18px] font-poppins font-semibold tracking-tight text-white">{item.title}</h5>
              <a href={item.link} target='blank'><button style={{ background: "linear-gradient(225deg, rgb(132, 0, 255) 0%, rgb(230, 0, 255) 100%)"}} className="text-white px-5 py-3 rounded-full text-sm font-poppins font-semibold relative z-20"> View project </button></a>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Projects;