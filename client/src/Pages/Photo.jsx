import React from "react";


const Photo1 = () => {
  return (
    <img
      src={"/images/Delbil.png"}
      alt="ERROR 404"
      className="w-[80%] md:w-[40%] border rounded-lg"
    />
  );
};

const Photo2 = () => {
    return (
      <img
        src={"/images/portfol.png"}
        alt="ERROR 404"
        className="w-[80%] md:w-[40%] border rounded-lg"
      />
    );
  };

  const Photo3 = () => {
    return (
      <img
        src={"/images/Citypulse.png"}
        alt="ERROR 404"
        className="w-[80%] md:w-[40%] border rounded-lg"
      />
    );
  };

  const Photo4 = () => {
    return (
      <img
        src={"/images/ewaste.png"}
        alt="ERROR 404"
        className="w-[80%] md:w-[40%] border rounded-lg"
      />
    );
  };


export { Photo1 ,Photo2,Photo3,Photo4};