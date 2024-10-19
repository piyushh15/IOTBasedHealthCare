import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const DoctorSignup = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    specification: "",
    gender: "",
  });

  const [showPassword, setShowPassword] = useState(false); 
  const [isDoctor, setIsDoctor] = useState(false); 
  const [loading, setLoading] = useState(false); 
 
  const handleSubmit = async (e) => {
     e.preventDefault();
    setLoading(true); 

    try {
      const payload=isDoctor?{
        fullName:credentials.name,
        email: credentials.email,
        username: credentials.username,
        password: credentials.password,
        specification: credentials.specification,
        gender: credentials.gender.toLowerCase(),
        isAdmin:false,
      }
      :{fullName: credentials.name,
        email: credentials.email,
        username: credentials.username,
        password: credentials.password,
        isAdmin: true,
      };
      console.log(JSON.stringify(payload));
      let headersList = {
        "Accept": "*/*",
        "Content-Type": "application/json" 
       }

       let reqOptions = {
        url: "http://localhost:8000/api/v1/users/register",
        method: "POST",
        headers: headersList,
        data:payload,
      }
      
      let response = await axios.request(reqOptions);
      console.log(response.data);
      console.log(response.data.statusCode);
      if(response.data.statusCode=== 200){
          navigate("/login");
      }
    } catch (error) {
      
      throw new Error (error.message);

    }finally{
      setLoading(false);
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
    <div className="min-h-screen bg-gradient-to-br  from-[#0575E6]  to-[#021B79] flex items-center justify-center font-poppins">
      <div className="relative p-6 sm:max-w-xl w-full ">
        <div className="relative w-full bg-slate-200 text-black backdrop-filter  border border-slate-300 backdrop-blur-lg  sm:rounded-3xl pb-4 px-8   "> 
          <h1 className="text-3xl pt-8 text-center  font-semibold font-poppins">
            Create a new account
          </h1>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-500 ease-in-out opacity-95">
              {/* Name */}
              <div>
                <label htmlFor="name"className="block text-sm font-medium leading-6 text-black">
                  Name
                </label>
                <input id="name" name="name" type="text"
                  className="mt-2 block w-full px-4 py-2 rounded-md bg-slate-300 text-black shadow-sm focus:ring-2 focus:ring-blue-600"
                  value={credentials.name}onChange={onChange}required/>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">
                  Email address
                </label>
                <input id="email" name="email" type="email"
                  className="mt-2 block w-full px-4 py-2 rounded-md bg-slate-300 text-black shadow-sm focus:ring-2 focus:ring-blue-600"
                  value={credentials.email}onChange={onChange}required/>
              </div>

              {/* Username */}
              <div>
                <label
                  htmlFor="username"className="block text-sm font-medium leading-6 text-black">
                  Username
                </label>
                <input id="username"name="username"type="text"
                  className="mt-2 block w-full px-4 py-2 rounded-md bg-slate-300 text-black shadow-sm focus:ring-2 focus:ring-blue-600"
                  value={credentials.username}onChange={onChange}required/>
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-black">Password</label>
                <div className="relative mt-2">
                  <input id="password"name="password"type={showPassword ? "text" : "password"}
                    className="block w-full px-4 py-2 rounded-md bg-slate-300 text-black shadow-sm focus:ring-2 focus:ring-blue-600"
                    value={credentials.password}onChange={onChange}required
                  />
                  <button type="button"onClick={togglePasswordVisibility}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sm text-black"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {/* Checkbox for Doctor Signup */}
              <div className="col-span-2">
                <label
                  htmlFor="doctorCheckbox"className="block text-sm font-medium leading-6 text-black"
                >
                  <input id="doctorCheckbox" name="doctorCheckbox" type="checkbox" className="mr-2" onChange={toggleDoctorFields}
                  />
                  Signup as a Doctor
                </label>
              </div>

              {isDoctor && (
                <div className=" grid grid-cols-1 gap-x-8 gap-6 ">
                  

                  {/* Gender */}
                  <div>
                    <label htmlFor="gender"className="block text-sm font-medium leading-6 text-black"> Gender</label>
                    <select
                      id="gender"name="gender"
                      className="mt-2 block w-full px-4 py-2 rounded-md bg-slate-300 text-black shadow-sm focus:ring-2 focus:ring-blue-600"
                      value={credentials.gender}onChange={onChange}required>
                      <option value="" disabled>Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* specificationialization */}
                  <div>
                    <label htmlFor="specification"className="block text-sm font-medium leading-6 text-black">
                     Specs
                    </label>
                    <select id="specification"name="specification"
                      className="mt-2 block w-full rounded-md px-4 py-2 bg-slate-300 text-black shadow-sm focus:ring-2 focus:ring-blue-600"
                      value={credentials.specification}onChange={onChange}required>
                      <option className="" value="" disabled>
                        Select specs
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
              <button type="submit"
                  className="w-full rounded-md bg-[#0575e6] px-4 py-2 text-white shadow-md hover:bg-[#059ae6] transition-all duration-200"
                  disabled={loading}
                >
                  {loading ? "Signing Up..." : "Sign Up"}
                </button>
              </div>
            </div>
          </form>



          <p className="mt-4 text-center text-black">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DoctorSignup;
