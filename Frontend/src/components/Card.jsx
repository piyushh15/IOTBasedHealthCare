import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, value, route }) => {
  return (
    <Link
      to={route}
      className="flex flex-col justify-center items-center h-[180px] w-[301px] bg-iot-blue shadow-md rounded-lg p-6 cursor-pointer transform hover:scale-105 transition-transform duration-300"
    >
      <h2 className="text-7xl text-white font-bold font-jetbrains">{value}</h2>
      <p className="text-white text-xl mt-2 font-poppins">{title}</p>
    </Link>
  );
};
export default Card;
