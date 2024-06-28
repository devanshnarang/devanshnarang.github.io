import React from "react";

function Item1() {
  return (
    <div className="w-[80%] md:w-[50%]" style={{ flexWrap: "wrap", top: "0", justifyContent: "flex-start"}}>
      <div
        className="containerItem"
        style={{ color: "whitesmoke", fontSize: "2rem", fontWeight: "bold" }}
      >
        Delbil - A Car Pooling App
      </div>
      <div style={{ textAlign: "left" }} className="text-white text-xl">
        <p style={{ textAlign: "left" }}>
          It is a carpooling web app which facilitates users to pool cars thus helping in saving enovironment.In return they get rewarded in form of some e-coins.
        </p>
        <h3 className="font-bold text-slate-400">
          React Js, Javascript, Tailwind Css
        </h3>
      </div>
      <div id="media" className="text-3xl">
        <a href="https://github.com/Daksh-1905/Carpooling-WebApp" className="media">
          <i className="fa fa-github" style={{ color: "white" }}></i>
        </a>
        <a href="https://delbil.vercel.app/" className="ml-4">
          <i className="fa fa-external-link" style={{ color: "white" }}></i>
        </a>
      </div>
    </div>
  );
}



function Item2() {
    return (
      <div className="w-[80%] md:w-[50%]" style={{ flexWrap: "wrap", top: "0", justifyContent: "flex-start"}}>
        <div
          className="containerItem"
          style={{ color: "whitesmoke", fontSize: "2rem", fontWeight: "bold" ,textAlign:'right'}}
        >
            Portfolio
        </div>
        <div style={{ textAlign: "right" }} className="text-white text-xl">
          <p style={{ textAlign: "right" }}>
          It is My Portfolio Website built to showcase my skill and to show my
          ability to make highly responsive websites with an attractive user
          interface.
          </p>
          <h3 className="font-bold text-slate-400">
            React Js, Javascript, Tailwind Css
          </h3>
        </div>
        <div id="media" className="text-3xl" style={{textAlign:"right"}}>
          <a href="https://github.com/devanshnarang/devanshnarang.github.io" className="media">
            <i className="fa fa-github" style={{ color: "white" }}></i>
          </a>
          <a href="https://devanshnportfolio.vercel.app/" className="ml-4">
            <i className="fa fa-external-link" style={{ color: "white" }}></i>
          </a>
        </div>
      </div>
    );
  }


  
  function Item3() {
    return (
      <div className="w-[80%] md:w-[50%]" style={{ flexWrap: "wrap", top: "0", justifyContent: "flex-end"}}>
      <div
        className="containerItem"
        style={{ color: "whitesmoke", fontSize: "2rem", fontWeight: "bold", textAlign: "left" }}
      >
        CityPulse
      </div>
      <div style={{ textAlign: "left" }} className="text-white text-xl">
        <p style={{ textAlign: "left" }}>
          An initiative towards building safer & smarter cities, being eco-friendly and proper utilization of resources
        </p>
        <h3 className="font-bold text-slate-400">
        React Js, NodeJs, Javascript, MongoDb
        </h3>
      </div>
      <div id="media" style={{ textAlign: "left" }} className="text-3xl">
        <a href="https://github.com/AyusGup/SmartCity" className="media">
          <i className="fa fa-github" style={{ color: "white" }}></i>
        </a>
        <a href="https://smart-city-neon.vercel.app/" className="ml-4">
          <i className="fa fa-external-link" style={{ color: "white" }}></i>
        </a>
      </div>
    </div>  
    );
  }
  

  function Item4() {
    return (
      <div className="w-[80%] md:w-[50%]" style={{ flexWrap: "wrap", top: "0", justifyContent: "flex-end"}}>
      <div
        className="containerItem"
        style={{ color: "whitesmoke", fontSize: "2rem", fontWeight: "bold", textAlign: "right" }}
      >
        E-Waste App
      </div>
      <div style={{ textAlign: "right" }} className="text-white text-xl">
        <p style={{ textAlign: "right" }}>
          An initiative towards building cleaner environment, being eco-friendly and proper utilization of useful waste.
        </p>
        <h3 className="font-bold text-slate-400" >
        HTML,CSS
        </h3>
      </div>
      <div id="media" style={{ textAlign: "right" }} className="text-3xl">
        <a href="https://github.com/devanshnarang/e-waste" className="media">
          <i className="fa fa-github" style={{ color: "white" }}></i>
        </a>
        <a href="https://devanshnarang.github.io/e-waste/WEBSITE/" className="ml-4">
          <i className="fa fa-external-link" style={{ color: "white" }}></i>
        </a>
      </div>
    </div>  
    );
  }
  
export { Item1,Item2,Item3,Item4 };