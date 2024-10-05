import React, { useState } from 'react';
import Navlogo from "../assets/VitalLinkLogo.jpeg.jpg";
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const DoctorLogin = () => {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({ username: "", password: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Add your authentication logic here
        navigate("/doctorpanel");
    };

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    return (
        <section className="bg-gradient-to-r from-gray-800 to-gray-800 min-h-screen flex items-center justify-center font-poppins ">
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg  h-[65vh] w-[60vh]">
                <h2 className="text-2xl font-bold text-white text-center mb-6 font-briem">Welcome Back</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-200">Username</label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-800 text-white focus:ring focus:ring-blue-500 focus:border-blue-500"
                            value={credentials.username}
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-200">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-800 text-white focus:ring focus:ring-blue-500 focus:border-blue-500"
                            value={credentials.password}
                            onChange={onChange}
                        />
                    </div>
                    <div className='py-5'>
                        <button type="submit" className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-400 transition duration-200">
                            Submit
                        </button>
                    </div>
                </form>
                <div className="mt-4  text-center">
                    <p className="text-sm text-gray-400">
                        Don’t have an account?{" "}
                        <Link to="/signup" className="text-blue-500 hover:underline">Create one</Link>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default DoctorLogin;
