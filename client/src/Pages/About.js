import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex flex-col items-center lg:flex-row justify-center text-white" id="1">
      <div className="w-full lg:w-1/3 flex justify-center lg:justify-end lg:pl-20 pt-10 lg:pt-20">
        <img 
          src="/images/myimg.jpeg" 
          className="rounded-full border-8 border-green-500 w-40 sm:w-60 md:w-80 lg:w-96" 
          alt="My image" 
        />  
      </div>
      <div className="w-full lg:w-2/3 flex flex-col items-center lg:items-start text-center lg:text-left px-5 lg:px-20 pt-10 lg:pt-20">
        <h1 className="text-green-500 font-bold mb-4">About Me</h1>
        <h3 className="text-lg lg:text-xl">
          My name is Devansh. I'm from New Delhi. Currently, I'm pursuing my
          Bachelor's in Technology in Computer Science from Delhi Technological University.
          I'm a full stack web developer specializing in crafting dynamic and visually
          appealing user interfaces. Armed with a strong foundation in HTML5, CSS3,
          JavaScript, and React Js. I seamlessly blend creativity with technical proficiency
          to bring websites to life.
        </h3>
        <div className="mt-5">
          <a href="https://drive.google.com/file/d/1S2dypy5dwBPTMrk7bh_XxO04HKo6zS1E/view?usp=share_link">
            <button 
              type="button" 
              className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
            >
              Download Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
