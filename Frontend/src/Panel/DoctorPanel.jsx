import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

const DoctorPanel = () => {
  const hospitalArray = [
    { id: "1", name: "hospitalA" },
    { id: "2", name: "hospitalB" },
    { id: "3", name: "hospitalC" },
  ];
  const patientsArray = [
    { id: "1", name: "gojo", hospital_id: "1", hospital_name: "hospitalA" },
    { id: "2", name: "gojo2", hospital_id: "1", hospital_name: "hospitalA" },
    { id: "3", name: "gojo3", hospital_id: "1", hospital_name: "hospitalA" },
    { id: "4", name: "gojo4", hospital_id: "1", hospital_name: "hospitalA" },
    { id: "5", name: "sukuna1", hospital_id: "2", hospital_name: "hospitalB" },
    { id: "6", name: "sukuna2", hospital_id: "2", hospital_name: "hospitalB" },
    { id: "7", name: "sukuna3", hospital_id: "2", hospital_name: "hospitalB" },
    { id: "8", name: "sukuna4", hospital_id: "2", hospital_name: "hospitalB" },
    { id: "9", name: "itadori1", hospital_id: "3", hospital_name: "hospitalC" },
    {
      id: "10",
      name: "itadori2",
      hospital_id: "3",
      hospital_name: "hospitalC",
    },
    {
      id: "11",
      name: "itadori3",
      hospital_id: "3",
      hospital_name: "hospitalC",
    },
    {
      id: "12",
      name: "itadori4",
      hospital_id: "3",
      hospital_name: "hospitalC",
    },
  ];
  const selectiondata = {
    hospitals: hospitalArray,
    patients: patientsArray,
  };
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800 font-poppins ">
      {/* Header */}
      <Header isHomePage={false} isDoctor={true} />

      {/* Dashboard Main Content */}
      <main className="flex-grow text-center">
        <Hero
          mainHeading={["Doctor", "Dashboard"]}
          paragraph={
            " Our platform provides real-time patient monitoring and seamlessly assigns specialized doctors based on health data, ensuring timely and personalized medical care."
          }
        />
        <ReportSelection data={selectiondata} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

const ReportSelection = ({ data }) => {
  const [hospital, setHospital] = useState("");
  const [patient, setPatient] = useState("");
  const [filterPatients, setFilterPatients] = useState([]);
  const handleReportClick = () => {
    alert(`Report for ${hospital} and ${patient}`);
  };
  const handleFilteredPatients = (hospital_name) => {
    setFilterPatients(
      data?.patients.filter((item) => item.hospital_name === hospital_name),
    );
  };
  return (
    <div className="w-auto flex flex-col justify-center items-start mx-48 px-16 py-8 gap-2 bg-[#efefef] shadow-md rounded-lg ">
      <h1 className="text-xl font-bold mb-8">Select to view report</h1>
      <div className="w-full flex justify-between items-center">
        <select
          value={hospital}
          onChange={(e) => {
            setHospital(e.target.value);
            handleFilteredPatients(e.target.value);
          }}
          className="block w-1/3 px-4 py-2 bg-[#d9d9d9] border border-gray-300 rounded-lg shadow-sm focus:outline-none"
        >
          <option value="" disabled>
            Select Hospital
          </option>
          {data?.hospitals.map((item) => (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
        <select
          value={patient}
          onChange={(e) => setPatient(e.target.value)}
          className="block w-1/3 px-4 py-2 bg-[#d9d9d9] border border-gray-300 rounded-lg shadow-sm focus:outline-none"
        >
          <option value="" disabled>
            Select Patient
          </option>
          {filterPatients &&
            filterPatients.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            ))}
        </select>
        <button
          onClick={handleReportClick}
          className="bg-iot-blue text-white font-poppins px-12 py-2 rounded-lg shadow-md"
        >
          Show Report
        </button>
      </div>
    </div>
  );
};

export default DoctorPanel;
