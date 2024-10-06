import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen font-poppins justify-between">
        <Header isDoctor={false} isHomePage={true} />
        {/* <div className="flex flex-col justify-content items-center  flex-grow p-[6rem] ">
          <h1 className="text-6xl font-bold mb-2 pb-3">
            Welcome to <span className="text-blue-600"> VitalLink</span>
          </h1>
          <h2 className="text-3xl font-semibold mb-4 font-palanquin">
            One Stop Solution for Health Tech
          </h2>
          <p className="text-gray-700 text-2xl items-center justify-center text-center font-poppins">
            At VitalLink, we provide innovative solutions to enhance healthcare
            delivery, streamline communication between healthcare providers and
            patients, and ensure effective management of health data for better
            outcomes. Join us on a journey towards a healthier future!
          </p>
        </div> */}
        <Hero
          mainHeading={["Welcome to", "VitalLink"]}
          subHeading={"One Stop Solution for Health Tech"}
          paragraph={
            "At VitalLink, we provide innovative solutions to enhance healthcare delivery, streamline communication between healthcare providers and patients, and ensure effective management of health data for better outcomes. Join us on a journey towards a healthier future!"
          }
        />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
