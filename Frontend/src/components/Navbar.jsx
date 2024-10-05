import React, { useState } from 'react';
import NavLogo from '../assets/VitalLinkLogo.jpeg.jpg'; 
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="bg-white text-white flex justify-between items-center p-[1rem]">
        <div className='rounded-xl h-auto w-[6rem]'>
          <img className="rounded-xl h-[2rem] w-[8rem] object-cover" src={NavLogo} alt="Nav Logo" />
        </div>
        <div className="flex items-center">
          <button 
            onClick={toggleSidebar} 
            className="md:hidden text-white focus:outline-none"
          >
            &#9776; 
          </button>
          <nav className="hidden md:flex space-x-4">
            <Link to="/doctorlogin">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
                Login
              </button>
            </Link>
            
            <Link to="/signup">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
                Signup
              </button>
            </Link>
          </nav>
        </div>
      </header>

      
      {isSidebarOpen && (
        <div className="fixed inset-0 flex justify-end bg-opacity-90 z-50 md:hidden">
          <div className="flex flex-col items-start p-4 bg-blue-900 rounded-l-md shadow-lg">
            <button onClick={toggleSidebar} className="text-white mb-4 self-end">
              Close
            </button>
            <Link to="/doctorlogin" onClick={toggleSidebar} className="mb-2 w-full">
              <button className="bg-blue-500 hover:bg-blue-600 text-white w-full px-4 py-2 rounded-lg">
                Doctor Login
              </button>
            </Link>

            <Link to="/signup" onClick={toggleSidebar} className="mb-2 w-full">
              <button className="bg-blue-500 hover:bg-blue-600 text-white w-full px-4 py-2 rounded-lg">
                Signup
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
