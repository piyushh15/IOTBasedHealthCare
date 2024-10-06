import React, { useEffect, useState, memo } from "react";
import NavTitle from "../assets/VitalLinkLogo.jpeg.jpg";
import AdminDropDown from "./Button/AdminDropDown";
import { Link } from "react-router-dom";

const Header = ({ isDoctor, isHomePage }) => {
  return (
    <header className=" text-white flex justify-between items-center p-[0.7rem] px-8 border shadow-lg">
      <MemoizedLogo NavTitle={NavTitle} />
      {isHomePage ? <HomePageNav /> : <AdminDoctorNav isDoctor={isDoctor} />}
    </header>
  );
};
const HomePageNav = () => {
  return (
    <div className="relative">
      <Link to="/signup">
        <Signup />
      </Link>
      <Link to="/login">
        <Login />
      </Link>
    </div>
  );
};

const AdminDoctorNav = ({ isDoctor }) => {
  return (
    <div className="relative">
      {isDoctor ? <AddPatients /> : <AdminDropDown />}
      <Logout />
    </div>
  );
};

const Logo = () => {
  return (
    <div className="rounded-xl h-auto w-[6rem]">
      <img
        className="rounded-xl h-[2rem] w-[8rem] object-cover"
        src={NavTitle}
        alt="Nav Title"
      />
    </div>
  );
};
const MemoizedLogo = memo(Logo);

const Logout = () => {
  return (
    <button className="bg-iot-blue hover:bg-blue-600 text-white mx-2 px-4 py-2 rounded-lg">
      Log Out
    </button>
  );
};

const Login = () => {
  return (
    <button className="bg-iot-blue hover:bg-blue-600 text-white mx-2 px-4 py-2 rounded-lg">
      Log In
    </button>
  );
};

const Signup = () => {
  return (
    <button className="bg-iot-blue hover:bg-blue-600 text-white mx-2 px-4 py-2 rounded-lg">
      Sign Up
    </button>
  );
};
const AddPatients = () => {
  return (
    <button className="bg-iot-blue hover:bg-blue-600 text-white px-5 mx-2 py-2 rounded-lg">
      Add Patient
    </button>
  );
};

export default memo(Header);
