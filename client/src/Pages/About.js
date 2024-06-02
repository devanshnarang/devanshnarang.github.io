import React from "react";
import { Link } from "react-router-dom";


const About = () => {
  return (
   
        <div className="flex flex-row" style={{color:"white"}} id="1">
          <div className="w-1/2 pl-40 pt-20">
            <img src="/images/myimg.jpeg" className="rounded-full border-8 border-green-500" style={{maxHeight:"40vh"}} alt="My image" />  
          </div>
          <div className="w-1/2 flex flex-col pr-20 pt-20">
            <h1 style={{ color: "rgb(6, 251, 6)", fontWeight:"bold", marginBottom:"2vh",fontSize:"1.4rem" }}>About me</h1>
            <h3>
              My name is Devansh. I'm from New Delhi .Currently, I'm pursuing my
              Bachelor's in Technology from Computer Science stream from Delhi
              Technological University. I'm a full stack web developer
              ,specialising in crafting dynamic and visually appealing user
              interfaces. Armed with a strong foundation in HTML5, CSS3,
              JavaScript and React Js, I seamlessly blend creativity with
              technical proficiency to bring websites to life.
            </h3>
            <div>
              <a href="https://drive.google.com/file/d/1S2dypy5dwBPTMrk7bh_XxO04HKo6zS1E/view?usp=share_link">
            <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-3 ">Download Resume</button>
            </a>
            </div>
          </div>
        </div>
      
    
  );
};

export default About;
