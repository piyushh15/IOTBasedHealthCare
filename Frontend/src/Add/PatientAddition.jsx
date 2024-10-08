import React, { useState } from "react";

const AddPatientForm = ({ handleClose }) => {
  const [patientName, setPatientName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [aadharNumber, setAadharNumber] = useState("");
  const [selectedSensorId, setSelectedSensorId] = useState("");
  const [assignDoctor, setAssignDoctor] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState("");

  
  const sensorIds = ["Sensor 1", "Sensor 2", "Sensor 3"];  //backend se maangliyo
  const doctors = ["Dr. Himanshu", "Dr. Manish", "Dr. Ekam", "Dr. Piyush"];  //admin mein jo added doctors hai usse list leliyo

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!/^\d{12}$/.test(aadharNumber)) {
      alert("Aadhar number must be exactly 12 digits.");
      return;
    }
    if(assignDoctor){
      //send it to assigneddoctor route
    }
    else {
      //send it to addpatient route 
    }
    console.log({
      patientName,
      age,
      gender,
      aadharNumber,
      selectedSensorId,
      selectedDoctor: assignDoctor ? selectedDoctor : "No doctor assigned",
    });

    handleClose(); 
  };

  return (
    <form onSubmit={handleSubmit} >
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="name"> Name</label>
        <input id="name"name="name"type="text"value={patientName}onChange={(e) => setPatientName(e.target.value)}className="w-full px-3 py-2 border rounded"required/>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="age">Age</label>
        <input id="age"name="age"type="number"value={age}onChange={(e) => setAge(e.target.value)}className="w-full px-3 py-2 border text-black rounded"required/>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="gender">Gender</label>
        <select id="gender"name="gender"value={gender}onChange={(e) => setGender(e.target.value)}className="w-full px-3 py-2 text-black border rounded"required>
          <option value="" disabled>
            Select Gender
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="aadhar">
          Aadhar Number
        </label>
        <input id="aadhar" name="aadhar"type="text"value={aadharNumber}onChange={(e) => setAadharNumber(e.target.value)}maxLength={12}className="w-full px-3 py-2 text-black border rounded"placeholder="Enter 12-digit Aadhar number"title="Aadhar number must be exactly 12 digits"required/>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="sensorId">
          Sensor ID
        </label>
        <select
          id="sensorId"name="sensorId"value={selectedSensorId}onChange={(e) => setSelectedSensorId(e.target.value)}
          className="w-full px-3 py-2 border text-black rounded"required >
          <option value="" disabled>
            Select Sensor ID
          </option>
          {sensorIds.map((sensorId, index) => (
            <option key={index} value={sensorId}>
              {sensorId}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-2">
        <label className="inline-flex items-center">
          <input
            type="checkbox" checked={assignDoctor}onChange={(e) => setAssignDoctor(e.target.checked)}
            className="form-checkbox h-4 w-4 text-blue-600"
          />
          <span className="ml-2 text-gray-700">Assign a Doctor</span>
        </label>
      </div>

      {assignDoctor && (
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="doctor">Doctor</label>
          <select id="doctor"name="doctor"value={selectedDoctor}onChange={(e) => setSelectedDoctor(e.target.value)}
            className="w-full px-3 py-2 border text-black rounded"required={assignDoctor}>
            <option value="" disabled>
              Select a Doctor
            </option>
            {doctors.map((doctor, index) => (
              <option key={index} value={doctor}>
                {doctor}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className="flex justify-end ">
        <button
          type="button"onClick={handleClose}className="bg-red-500 text-white px-4 py-2 rounded mr-2">
          Cancel
        </button>
        <button type="submit"className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddPatientForm;
