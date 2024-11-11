import React, { useState } from "react";
import { useAdminContext } from "../Panel/AdminContext";
import axios from "axios";
import AddremovePopup from "../Add/AddremovePopup";

const AdminPanelHospitalised = () => {
  const { patients, loading, error, refetchData } = useAdminContext();
  const [removalError, setRemovalError] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [selectedPatientId, setSelectedPatientId] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRemovePatient = async () => {
    if (!selectedPatientId) return;

    setIsSubmitting(true);
    try {
      const response=await axios.patch(
        "http://localhost:8000/api/v1/hospital/remove-patient",
        { patient_id: selectedPatientId },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            "Content-Type": "application/json",
          },
        }
      );
    
      refetchData();
      setShowPopup(false); // Close the popup after removal
    } catch (err) {
      console.error("Error removing patient:", err);
      setRemovalError("Failed to remove the patient. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const openPopup = (patientId) => {
    setSelectedPatientId(patientId);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedPatientId(null);
  };

  return (
    <div className="p-6 bg-white min-h-screen font-poppins">
      <h1 className="text-3xl font-semibold mb-6">Hospitalised Patients List</h1>

      {loading ? (
        <p>Loading patients...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="overflow-auto shadow rounded-lg">
          {removalError && <p className="text-red-500 mb-2">{removalError}</p>}
          <table className="min-w-full bg-white border border-gray-300 text-left">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="px-4 py-3 border">S. No</th>
                <th className="px-4 py-3 border">Name</th>
                <th className="px-4 py-3 border">Age</th>
                <th className="px-4 py-3 border">Aadhar</th>
                <th className="px-4 py-3 border">Gender</th>
                <th className="px-4 py-3 border">Sensor ID</th>
                <th className="px-4 py-3 border">Remove Patient</th>
              </tr>
            </thead>
            <tbody>
              {patients
                .filter((patient) => patient.admitted === true)
                .map((patient, index) => (
                  <tr key={index} className="text-center hover:bg-gray-100 border-t">
                    <td className="px-4 py-3 border">{index + 1}</td>
                    <td className="px-4 py-3 border">{patient.fullName}</td>
                    <td className="px-4 py-3 border">{patient.age}</td>
                    <td className="px-4 py-3 border">{patient.aadhaar || "N/A"}</td>
                    <td className="px-4 py-3 border">{patient.gender}</td>
                    <td className="px-4 py-3 border">{patient.sensor_id?.sensorID || "N/A"}</td>

                    <td className="px-4 py-3 border">
                      <button
                        onClick={() => openPopup(patient._id)}
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              {patients.filter((patient) => patient.admitted === true).length === 0 && (
                <tr>
                  <td colSpan="7" className="px-4 py-4 text-center">
                    No hospitalised patients found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* Confirmation Popup */}
      {showPopup && (
        <AddremovePopup
          onClose={closePopup}
          onConfirm={handleRemovePatient}
          isSubmitting={isSubmitting}
          message="Are you sure you want to remove this patient?"
        />
      )}
    </div>
  );
};

export default AdminPanelHospitalised;
