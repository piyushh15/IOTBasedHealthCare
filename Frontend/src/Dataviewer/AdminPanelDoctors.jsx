import React, { useState } from "react";
import { useAdminContext } from "../Panel/AdminContext";
import axios from "axios";

const AdminPanelDoctors = () => {
  const { doctors, loading, error, refetchData } = useAdminContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [specializationFilter, setSpecializationFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");

 //unique specilisation nikaalo 
  const uniqueSpecializations = [...new Set(doctors.map(doctor => doctor.specification))];
  const uniqueGenders = [...new Set(doctors.map(doctor => doctor.gender))];

  
  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearchTerm = doctor.fullName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialization = specializationFilter ? doctor.specification === specializationFilter : true;
    const matchesGender = genderFilter ? doctor.gender === genderFilter : true;
    return matchesSearchTerm && matchesSpecialization && matchesGender;
  });

  const handleDismissDoctor = async (doctorId) => {
    const headersList = {
      Accept: "*/*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    };

    const bodyContent = JSON.stringify({
      doctor_id: doctorId, 
    });

    const reqOptions = {
      url: "http://localhost:8000/api/v1/hospital/remove-doctor", 
      method: "DELETE",
      headers: headersList,
      data: bodyContent,
    };

    try {
      const response = await axios.request(reqOptions);
      console.log("Doctor dismissed:", response.data);
      refetchData(); 
    } catch (err) {
      console.error("Error dismissing doctor:", err);
    }
  };

  return (
    <div className="p-6 bg-white min-h-screen font-poppins px-10">
      <h1 className="text-3xl font-semibold mb-6">Doctors List</h1>

      {/* Search and Filter Options */}
      <div className="mb-4 flex justify-between items-center">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 p-2 rounded-lg w-1/3"
        />

        <div>
          <select
            value={specializationFilter}
            onChange={(e) => setSpecializationFilter(e.target.value)}
            className="border border-gray-300 p-2 rounded-lg mx-2"
          >
            <option value="">All Specializations</option>
            {uniqueSpecializations.map((spec, index) => (
              <option key={index} value={spec}>{spec}</option>
            ))}
          </select>

          <select
            value={genderFilter}
            onChange={(e) => setGenderFilter(e.target.value)}
            className="border border-gray-300 p-2 rounded-lg"
          >
            <option value="">All Genders</option>
            {uniqueGenders.map((gender, index) => (
              <option key={index} value={gender}>{gender}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Display Loading, Error, or Table */}
      {loading ? (
        <p>Loading doctors...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="overflow-auto shadow rounded-lg">
          <table className="min-w-full bg-white border border-gray-300 text-center">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="px-4 py-3 border">Name</th>
                <th className="px-4 py-3 border">Gender</th>
                <th className="px-4 py-3 border">Specialization</th>
                <th className="px-4 py-3 border">Dismiss Doctor</th>
              </tr>
            </thead>
            <tbody>
              {filteredDoctors.length > 0 ? (
                filteredDoctors.map((doctor, index) => (
                  <tr key={index} className="text-center hover:bg-gray-100 border-t">
                    <td className="px-4 py-3 border">{doctor.fullName}</td>
                    <td className="px-4 py-3 border">{doctor.gender}</td>
                    <td className="px-4 py-3 border">{doctor.specification}</td>
                    <td className="px-4 py-3 border">
                      <button
                        onClick={() => handleDismissDoctor(doctor._id)}
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                      >
                        Dismiss
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="px-4 py-4 text-center">
                    No doctors found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminPanelDoctors;
