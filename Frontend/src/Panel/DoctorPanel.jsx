import React, { useState } from 'react';
import Footer from '../components/Footer';
import NavTitle from '../assets/VitalLinkLogo.jpeg.jpg';

const DoctorPanel = () => {
  const [hospital, setHospital] = useState('');
  const [patient, setPatient] = useState('');

  const handleReportClick = () => {
    alert(`Report for ${hospital} and ${patient}`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800 font-poppins ">
      {/* Header */}
      <header className=" text-white flex justify-between items-center p-[0.8rem] ">
        <div className='rounded-xl h-auto w-[6rem]'>
          <img className="rounded-xl h-[2.3rem] w-[8rem]" src={NavTitle} alt="Nav Title" />
        </div>
        <div className="space-x-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
            Add Patient
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
            LOG OUT
          </button>
        </div>
      </header>

      {/* Dashboard Main Content */}
      <main className="flex-grow text-center py-[2.7rem] px-[2.7rem]">
        <h1 className="text-4xl font-bold mb-2">
          Doctor <span className="text-blue-500">Dashboard</span>
        </h1>
        <p className="text-black mb-10 text-[20px] pt-[2rem] pb-[2.5rem]">
          Our platform provides real-time patient monitoring and seamlessly assigns specialized doctors based on health data, ensuring timely and personalized medical care.
        </p>

        {/* Report Selection Section */}
        <div className="bg-white shadow-md rounded-lg p-6 w-4/5 mx-auto">
          <p className="text-lg font-semibold mb-4">Select to view report</p>
          <div className="flex justify-between space-x-4">
            {/* Hospital Dropdown */}
            <select
              value={hospital}
              onChange={(e) => setHospital(e.target.value)}
              className="block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none"
            >
              <option value="" disabled>Select Hospital</option>
              <option value="Hospital A">Hospital A</option>
              <option value="Hospital B">Hospital B</option>
              <option value="Hospital C">Hospital C</option>
            </select>

            {/* Patient Dropdown */}
            <select
              value={patient}
              onChange={(e) => setPatient(e.target.value)}
              className="block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none"
            >
              <option value="" disabled>Select Patient</option>
              <option value="Patient X">Patient X</option>
              <option value="Patient Y">Patient Y</option>
              <option value="Patient Z">Patient Z</option>
            </select>

            {/* Show Report Button */}
            <button
              onClick={handleReportClick}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md transition duration-300"
            >
              Show Report
            </button>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default DoctorPanel;
