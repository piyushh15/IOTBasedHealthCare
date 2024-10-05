import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const DoctorSignup = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    dob: "", 
    gender: "",
    spec: "",
  });

  const [showPassword, setShowPassword] = useState(false); 
  const [isDoctor, setIsDoctor] = useState(false); 

  const handleSubmit = async (e) => {
     e.preventDefault();
   
    // const response = await fetch("https://tcpp-backend.onrender.com/createuser", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(credentials),
    // });
    // const json = await response.json();
  
    // if (!json.success) {
    //   alert("Enter valid credentials");
    // } else {
    
    
    if (isDoctor) {
      navigate('/doctorpanel');
    } else {
      navigate('/adminpanel');
    }
    
  };
  

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleDoctorFields = () => {
    setIsDoctor(!isDoctor);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-black flex items-center justify-center font-poppins">
      <div className="relative p-6 sm:max-w-xl w-full ">
        <div className="relative w-full bg-slate-900 bg-opacity-30 backdrop-filter backdrop-blur-lg  sm:rounded-3xl pb-4 px-8 border border-white shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] "> 
          <h1 className="text-3xl pt-4 text-center text-white font-semibold font-poppins">
            Create a new account
          </h1>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-500 ease-in-out opacity-95">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="mt-2 block w-full px-4 py-2 rounded-md bg-gray-800 text-white shadow-sm focus:ring-2 focus:ring-blue-600"
                  value={credentials.name}
                  onChange={onChange}
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="mt-2 block w-full px-4 py-2 rounded-md bg-gray-800 text-white shadow-sm focus:ring-2 focus:ring-blue-600"
                  value={credentials.email}
                  onChange={onChange}
                  required
                />
              </div>

              {/* Username */}
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  className="mt-2 block w-full px-4 py-2 rounded-md bg-gray-800 text-white shadow-sm focus:ring-2 focus:ring-blue-600"
                  value={credentials.username}
                  onChange={onChange}
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Password
                </label>
                <div className="relative mt-2">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    className="block w-full px-4 py-2 rounded-md bg-gray-800 text-white shadow-sm focus:ring-2 focus:ring-blue-600"
                    value={credentials.password}
                    onChange={onChange}
                    required
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sm text-white"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {/* Checkbox for Doctor Signup */}
              <div className="col-span-2">
                <label
                  htmlFor="doctorCheckbox"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  <input
                    id="doctorCheckbox"
                    name="doctorCheckbox"
                    type="checkbox"
                    className="mr-2"
                    onChange={toggleDoctorFields}
                  />
                  Signup as a Doctor
                </label>
              </div>

              {isDoctor && (
                <div className=" grid grid-cols-1 gap-x-8 gap-6 ">
                  {/* Date of Birth */}
                  <div>
                    <label
                      htmlFor="DOB"
                      className="block text-sm font-medium leading-6 text-white"
                    >
                      Date of Birth
                    </label>
                    <input
                      id="dob"
                      name="dob"
                      type="date"
                      className="mt-2 block w-full px-4 py-2 rounded-md bg-gray-800 text-white shadow-sm focus:ring-2 focus:ring-blue-600"
                      value={credentials.dob}
                      onChange={onChange}
                      required
                    />
                  </div>

                  {/* Gender */}
                  <div>
                    <label
                      htmlFor="gender"
                      className="block text-sm font-medium leading-6 text-white"
                    >
                      Gender
                    </label>
                    <select
                      id="gender"
                      name="gender"
                      className="mt-2 block w-full px-4 py-2 rounded-md bg-gray-800 text-white shadow-sm focus:ring-2 focus:ring-blue-600"
                      value={credentials.gender}
                      onChange={onChange}
                      required
                    >
                      <option value="" disabled>
                        Select Gender
                      </option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Specialization */}
                  <div>
                    <label
                      htmlFor="spec"
                      className="block text-sm font-medium leading-6 text-white"
                    >
                      Specialization
                    </label>
                    <select
                      id="spec"
                      name="spec"
                      className="mt-2 block w-full rounded-md px-4 py-2 bg-gray-800 text-white shadow-sm focus:ring-2 focus:ring-blue-600"
                      value={credentials.spec}
                      onChange={onChange}
                      required
                    >
                      <option className="" value="" disabled>
                        Select Specialization
                      </option>
                      <option value="Cardiologist">Cardiologist</option>
                      <option value="Dermatologist">Dermatologist</option>
                      <option value="Pediatrician">Pediatrician</option>
                      <option value="Neurologist">Neurologist</option>
                      <option value="Psychiatrist">Psychiatrist</option>
                      <option value="Orthopedist">Orthopedist</option>
                      <option value="Radiologist">Radiologist</option>
                      <option value="Surgeon">Surgeon</option>
                      <option value="Oncologist">Oncologist</option>
                      <option value="Gynaecologist">Gynaecologist</option>
                      <option value="General Practitioner">General Practitioner</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              )}

              <div className="col-span-2">
                <button
                  type="submit"
                  className="w-full rounded-md bg-blue-600 px-4 py-2 text-white shadow-md hover:bg-blue-700 transition-all duration-200"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </form>
          <p className="mt-4 text-center text-white">
            Already have an account?{" "}
            <Link to="/doctorlogin" className="text-blue-500 hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DoctorSignup;
