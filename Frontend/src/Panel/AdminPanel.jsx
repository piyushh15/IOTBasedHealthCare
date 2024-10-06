import { useState } from 'react';
import { Link } from 'react-router-dom'; 
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
      <header className=" text-white flex justify-between items-center p-[0.7rem] border shadow-lg">
        <div className='rounded-xl h-auto w-[6rem]'>
          <img className="rounded-xl h-[2rem] w-[8rem] object-cover" src={NavTitle} alt="Nav Title" />
        </div>
        <div className="relative">
          <button 
            onClick={toggleDropdown} 
            className="bg-iot-blue hover:bg-blue-600 text-white px-5 mx-2 py-2 rounded-lg">
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
          <button className="bg-iot-blue hover:bg-blue-600 text-white mx-2 px-4 py-2 rounded-lg">
            LOG OUT
          </button>
        </div>
      </header>

      {/* Dashboard Main Content */}
      <main className="flex-grow text-center py-5 px-10">
        <h1 className="text-6xl font-bold mb-2 pt-[3rem]">
          Admin <span className="text-blue-500">Dashboard</span>
        </h1>
        <p className="text-black mb-10 p-[0.8rem] px-2 text-xl">
          Our platform provides real-time patient monitoring and seamlessly assigns specialized doctors based on health data, ensuring timely and personalized medical care.
        </p>

        {/* Cards Section */}
        <div className="flex justify-around items-center content-around gap-8 px-[160px] ">
          {/* Patients Card */}
          <Link to="/patients" className="flex flex-col justify-center items-center h-[180px] w-[301px] font-jetbrains bg-iot-blue shadow-md rounded-lg p-6 cursor-pointer transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-7xl text-white font-bold">345</h2>
            <p className="text-white text-xl mt-2">Patients</p>
          </Link>

          {/* Doctors Card */}
          <Link to="/patients" className="flex flex-col justify-center items-center h-[180px] w-[301px] font-jetbrains bg-iot-blue shadow-md rounded-lg p-6 cursor-pointer transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-7xl text-white font-bold">50</h2>
            <p className="text-white text-xl mt-2">Doctors</p>
          </Link>
         
          {/* Hospitalised Card */}
          <Link to="/hospitalised" className="flex flex-col justify-center items-center h-[180px] w-[301px] font-jetbrains bg-iot-blue shadow-md rounded-lg p-6 cursor-pointer transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-7xl text-white font-bold">232</h2>
            <p className=" text-white  mt-2 text-xl">Hospitalised</p>
          </Link>
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default AdminPanel;
