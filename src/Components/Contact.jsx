import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import skills from '../Images/Skills.png';
import { MdPhone } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { MdOutlineMailOutline } from "react-icons/md";

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
    
        emailjs.init(import.meta.env.VITE_USER_ID);
        
        const sendEmail = (e) => {
        e.preventDefault();

        const serviceId = import.meta.env.VITE_SERVICE_ID;
        const templateId = import.meta.env.VITE_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_USER_ID;
        
    
        emailjs.send(serviceId, templateId, formData)
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Email sent successfully !');
        }, (error) => {
          console.log('FAILED...', error);
          alert('Failed to send email.');
        });
    
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
      };

    return (

        <div id="contact" className="w-full">
            <h1 className="text-white font-poppins font-semibold text-center pt-12 lg:pt-20 text-[30px] lg:text-[40px]">Contact me</h1>
            
            
            <div className="flex flex-col lg:flex-row items-center pt-10 pb-7 px-7 lg:px-12 xl:px-20 lg:justify-between">
                <img className="w-[250px] md:w-[400px] lg:w-[500px] xg:w-[600px] h-auto mx-auto mb-8 lg:mb-0" src={skills} alt="Skills" />
                
                <div className="mx-4 md:mx-8 lg:mx-10 w-full lg:w-1/2">
                    <div className="bg-transparent border border-[rgb(133,76,230)] border-opacity-35 px-6 py-6 rounded-lg shadow-lg w-full">
                    <h2 className="text-[14px] md:text-[18px] lg:text-md font-poppins text-[#f2f3f498] mx-2 mb-6">For any inquiries, feel free to contact me. I'm open to work on assignments that align with my skills and interests.</h2>
                        <form onSubmit={sendEmail} method="post">
                            <div className="mb-6">
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="font-poppins font-medium text-white border bg-[rgba(17,17,42,0.22)] border-[rgb(133,76,230)] border-opacity-35 px-4 py-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[rgb(133,76,230)] focus:border-transparent relative z-20" placeholder="Your Name" required />
                            </div>
                            <div className="mb-6">
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="font-poppins font-medium text-white border bg-[rgba(17,17,42,0.22)] border-[rgb(133,76,230)] border-opacity-35 px-4 py-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[rgb(133,76,230)] focus:border-transparent relative z-20" placeholder="Your Email" required />
                            </div>
                            <div className="mb-6">
                                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="font-poppins font-medium border text-white bg-[rgba(17,17,42,0.22)] border-[rgb(133,76,230)] border-opacity-35 px-4 py-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[rgb(133,76,230)] focus:border-transparent relative z-20" placeholder="Subject" required />
                            </div>
                            <div className="mb-4">
                                <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="font-poppins font-medium border text-white bg-[rgba(17,17,42,0.22)] border-[rgb(133,76,230)] border-opacity-35 px-4 py-3 rounded-lg w-full h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[rgb(133,76,230)] focus:border-transparent relative z-20" placeholder="Message" required></textarea>
                            </div>
                            <div className="flex justify-center">
                                <button type="submit" style={{ background: "linear-gradient(225deg, rgb(132, 0, 255) 0%, rgb(230, 0, 255) 100%)"}} className="flex justify-center items-center text-white w-full py-3 lg:py-3.5 rounded-full text-[18px] font-poppins font-semibold relative z-20">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="mx-10 lg:mx-36 py-3 pb-10 px-4 shadow-md rounded-lg">
                    <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-start lg:items-center gap-8 font-poppins font-normal">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center justify-center bg-[#f2f3f498] rounded-full w-9 h-9 p-2">
                                <MdOutlineMailOutline className="text-gray-600 lg:text-gray-700 text-3xl" />
                            </div>
                            <span className="text-[#f2f3f498] text-md lg:text-lg">rakeshkittu2002@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center justify-center bg-[#f2f3f498] rounded-full w-9 h-9 p-2">
                                <MdPhone className="text-gray-600 lg:text-gray-700 text-3xl" />
                            </div>
                            <span className="text-[#f2f3f498] text-md lg:text-lg">7904228940</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center justify-center bg-[#f2f3f498] rounded-full w-9 h-9 p-2">
                                <ImLocation className="text-gray-600 lg:text-gray-700 text-3xl" />
                            </div>
                            <span className="text-[#f2f3f498] text-md lg:text-lg">Chennai - 600062</span>
                        </div>
                    </div>
            </div>

        </div>
    );
};

export default Contact;