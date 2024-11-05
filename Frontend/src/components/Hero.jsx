import React from "react";

const Hero = ({ mainHeading, subHeading, paragraph }) => {
  return (
    <div className="flex flex-col w-full pt-28 text-center justify-center item-center">
      <h1 className="text-7xl text-black font-bold">
        {mainHeading[0]}{" "}
        <span className="text-iot-blue"> {mainHeading[1]} </span>
      </h1>
      {subHeading && <h2 className="text-3xl mt-4">{subHeading}</h2>}
      <p className="px-64 text-2xl font-regular mt-8">{paragraph}</p>
    </div>
  );
};

export default Hero;
