import React from 'react';
import Marquee from 'react-fast-marquee';

import ReactIcon from '../Images/React.svg';
import NodeIcon from '../Images/Node.svg';
import MongodbIcon from '../Images/Mongodb.svg';
import MySQLIcon from '../Images/MySQL.svg';
import JavaIcon from '../Images/Java.svg';
import SpringIcon from '../Images/Spring.svg';
import JavascriptIcon from '../Images/Javascript.svg';
import HTMLIcon from '../Images/HTML.svg';
import CSSIcon from '../Images/CSS.svg';
import TailwindIcon from '../Images/Tailwind.svg';


const SkillsMarquee = () => {

    const skills = [
        { name: 'React', icon: ReactIcon },
        { name: 'Node', icon: NodeIcon },
        { name: 'Mongodb', icon: MongodbIcon },
        { name: 'MySQL', icon: MySQLIcon },
        { name: 'Java', icon: JavaIcon },
        { name: 'Spring', icon: SpringIcon },
        { name: 'HTML', icon: HTMLIcon },
        { name: 'CSS', icon: CSSIcon },
        { name: 'Tailwind', icon: TailwindIcon },
        { name: 'Javascript', icon: JavascriptIcon },
    ];
      
    return (
        <div id="skills" className="bg-[rgb(9,9,23)] pt-10 lg:pt-24">
            <div className="mx-7 lg:mx-28">
            <h1 className="text-white font-poppins font-semibold text-center mb-8 lg:mb-12 text-[30px] lg:text-[40px]">Skills</h1>
                <Marquee gradient={false} speed={60} pauseOnHover={true}>
                    {skills.map((skill, index) => (
                        <div key={index} className="bg-[rgba(15,15,36,0.74)] p-10 lg:p-12 text-white rounded-lg border border-[rgb(133,76,230)] border-opacity-35 flex flex-col items-center justify-center w-32 h-32 lg:w-36 lg:h-32 mx-3 lg:mx-5">
                            <img className="flex items-center h-36 w-36" src={skill.icon} />
                            <h3 className="mt-4 text-md lg:text-lg font-poppins font-normal">{skill.name}</h3>
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
        
    
    );
};

export default SkillsMarquee;