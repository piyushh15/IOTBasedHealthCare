import React, { useEffect, useState, memo } from "react";
import NavTitle from "../assets/VitalLinkLogo.jpeg.jpg";
import AdminDropDown from "./Button/AdminDropDown";
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
  const navigate = useNavigate();
  const handleclick = async() => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    let headersList = {
      "Accept": "*/*",
      "Content-Type": "application/json",
      "Authorization":`Bearer ${accessToken}`,
    }
    let reqOptions = {
      url: "http://localhost:8000/api/v1/users/logout",
      method: "POST",
      headers: headersList,
    }
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    //console.log(`accessToken=${accessToken};refreshToken=${refreshToken}`);
    let response = await axios.request(reqOptions);
    console.log(response.status);
    if(response.status==200){
      navigate('/');
    }
  }
 
  return (
    <button onClick={handleclick} className="bg-iot-blue hover:bg-blue-600 text-white mx-2 px-4 py-2 rounded-lg">
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
    //first onclick open modal
    //sensors ki id fetch karni hai
    //in modal assign doctor wala checkbox nhi hona chahiye only patient ki details
    //doctor ke add-patient wala route pe bhejna hai 
    <button className="bg-iot-blue hover:bg-blue-600 text-white px-5 mx-2 py-2 rounded-lg">
      Add Patient
    </button>
  );
};

export default memo(Header);
