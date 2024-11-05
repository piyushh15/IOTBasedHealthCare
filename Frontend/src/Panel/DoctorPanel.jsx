import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import axios from "axios";

const DoctorPanel = () => {
  const [hospitals, setHospitals] = useState([]);
  const [doctorPatients, setDoctorPatients] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedHospital, setSelectedHospital] = useState("");
  const [filteredPatients, setFilteredPatients] = useState([]);

  const fetchUserDetails = async () => {
    try {
      const headerList = {
        Accept: "*/*",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      };
      const reqOptions = {
        url: "http://localhost:8000/api/v1/users/current-user",
        method: "GET",
        headers: headerList,
      };

      const response = await axios.request(reqOptions);
      const hospitalData = response.data.data.hospital || [];
      const patientData = response.data.data.patients || [];
      setHospitals(hospitalData);
      setDoctorPatients(patientData);
      setFilteredPatients(patientData);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    filterPatients(query, selectedHospital);
  };

  const handleFilterChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedHospital(selectedValue);
    filterPatients(searchQuery, selectedValue);
  };

  const filterPatients = (query, hospital) => {
    let filtered = doctorPatients;

    if (query) {
      filtered = filtered.filter((patient) =>
        patient.fullName.toLowerCase().includes(query)
      );
    }

    if (hospital) {
      filtered = filtered.filter(
        (patient) => patient.hospital_id === hospital
      );
    }

    setFilteredPatients(filtered);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800 font-poppins">
      <Header isHomePage={false} isDoctor={true} />
      <main className="flex-grow text-center">
        {/* <Hero mainHeading={["Doctor", "Dashboard"]} className="p-0" /> */}
        <div className="px-20 mt-8">
          <div className="mb-4 flex items-center justify-between bg-gray-100 p-3 rounded-lg shadow">
            <input
              type="text"
              placeholder="Search by name"
              className="border border-gray-300 p-2 rounded-lg w-1/2"
              value={searchQuery}
              onChange={handleSearch}
            />
            <select
              className="border border-gray-300 p-2 rounded-lg w-1/3"
              value={selectedHospital}
              onChange={handleFilterChange}
            >
              <option value="">All Hospitals</option>
              {hospitals.map((hospital) => (
                <option key={hospital._id} value={hospital._id}>
                  {hospital.fullName}
                </option>
              ))}
            </select>
          </div>
          
          {/* Scrollable table container */}
          <div className="overflow-x-auto shadow rounded-lg max-h-[500px] overflow-y-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-gray-200 text-gray-700">
                  <th className="p-4">#</th>
                  <th className="p-4">Name</th>
                  <th className="p-4">Age</th>
                  <th className="p-4">Hospital</th>
                  <th className="p-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredPatients.map((patient, index) => (
                  <tr key={patient._id} className="hover:bg-gray-100 border-b">
                    <td className="p-4">{index + 1}</td>
                    <td className="p-4">{patient.fullName}</td>
                    <td className="p-4">{patient.age}</td>
                    <td className="p-4">
                      {hospitals.find(
                        (hospital) => hospital._id === patient.hospital_id
                      )?.fullName || "Unknown"}
                    </td>
                    <td className="p-4">
                      <button className="bg-blue-500 text-white p-2 rounded-lg">
                        Show Report
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DoctorPanel;
