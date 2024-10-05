import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Footer from '../components/Footer';
import NavTitle from '../assets/VitalLinkLogo.jpeg.jpg';

const AdminPanel = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleOptionClick = (option) => {
    console.log(`Selected option: ${option}`);
    setIsDropdownOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800 font-poppins">
      {/* Header */}
      <header className=" text-white flex justify-between items-center p-[1.2rem]">
        <div className='rounded-xl h-auto w-[6rem]'>
          <img className="rounded-xl h-[2.6rem] w-[8rem]" src={NavTitle} alt="Nav Title" />
        </div>
        <div className="relative">
          <button 
            onClick={toggleDropdown} 
            className="bg-blue-500 hover:bg-blue-600 text-white px-2 mx-2 py-2 rounded-lg">
            ADD +
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 bg-white text-black rounded-lg shadow-lg mt-2 w-48 z-10">
              <ul className="py-2">
                <li onClick={() => handleOptionClick('Add Node')} className="px-4 py-2 hover:bg-blue-100 cursor-pointer">
                  Add Node
                </li>
                <li onClick={() => handleOptionClick('Add Patient')} className="px-4 py-2 hover:bg-blue-100 cursor-pointer">
                  Add Patient
                </li>
                <li onClick={() => handleOptionClick('Add Doctor')} className="px-4 py-2 hover:bg-blue-100 cursor-pointer">
                  Add Doctor
                </li>
              </ul>
            </div>
          )}
          <button className="bg-blue-500 hover:bg-blue-600 text-white mx-2 px-4 py-2 rounded-lg">
            LOG OUT
          </button>
        </div>
      </header>

      {/* Dashboard Main Content */}
      <main className="flex-grow text-center py-5 px-10">
        <h1 className="text-4xl font-bold mb-2 pt-[3rem]">
          Admin <span className="text-blue-500">Dashboard</span>
        </h1>
        <p className="text-black mb-10 p-[0.8rem] px-2">
          Our platform provides real-time patient monitoring and seamlessly assigns specialized doctors based on health data, ensuring timely and personalized medical care.
        </p>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10">
          {/* Patients Card */}
          <Link to="/patients" className="bg-slate-200 shadow-md rounded-lg p-6 cursor-pointer transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-3xl font-bold">345</h2>
            <p className="text-black text-xl mt-2">Patients</p>
          </Link>

          {/* Doctors Card */}
          <Link to="/doctors" className="bg-slate-200 shadow-md rounded-lg p-6 cursor-pointer transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-3xl font-bold flex items-center justify-center">
              45 <span className="text-green-500 ml-2 text-xl">↑</span> / 5 <span className="text-red-500 ml-2 text-xl">↓</span>
            </h2>
            <p className="text-black mt-2 text-xl">Doctors</p>
            <p className="text-gray-400 text-xl">Active / Inactive</p>
          </Link>

          {/* Hospitalised Card */}
          <Link to="/hospitalised" className="bg-slate-200 shadow-md rounded-lg p-6 cursor-pointer transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-3xl font-bold">232</h2>
            <p className="text-black mt-2 text-xl">Hospitalised</p>
          </Link>
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default AdminPanel;
