import React from "react";
import { useState } from "react";
import AddremovePopup from "./AddremovePopup";
//display a list of available doctors which will be having
//a search bar searching through the data
//all the doctors will be displayed in scroll manner
//name email id and photo icon and to the right will be having
//option where it will display available doctors

const doctorsList = [
  {
    name: "Piyush Jha",
    email: "PiyushJha@gmail.com",
    avatar: "https://ui-avatars.com/api/?name=Piyush+Jha",
    added: false,
  },
  {
    name: "Himanshu Shakya",
    email: "Himanshu.Shakya@gmail.com",
    avatar: "https://ui-avatars.com/api/?name=Himanshu+Shakya",
    added: true,
  },
  {
    name: "Ekam Singh",
    email: "Ekam.singh.007@gmail.com",
    avatar: "https://ui-avatars.com/api/?name=Ekam+singh",
    added: false,
  },
  {
    name: "Manish Akharia",
    email: "Manish.akharia@gmail.com",
    avatar: "https://ui-avatars.com/api/?name=Manish+akharia",
    added: true,
  },
  {
    name: "Kunwar Singh",
    email: "Kunwarsingh@gmail.com",
    avatar: "https://ui-avatars.com/api/?name=Kunwar+Singh",
    added: false,
  },
  {
    name: "Kunwar Singh",
    email: "Kunwarsingh@gmail.com",
    avatar: "https://ui-avatars.com/api/?name=Kunwar+Singh",
    added: true,
  },
];


const DoctorAddition = ({ handleclose }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentDoctor, setCurrentDoctor] = useState(null);  //popup kholne keliye
  const [doctors, setDoctors] = useState(doctorsList);  //backend se doctors list jo aaegi uske liye
  const [showModal, setShowModal] = useState(false);

  const handleToggle = (index) => {
    setCurrentDoctor(doctors[index]);
    setShowModal(true);
  };


  const handleConfirm = () => {
    const updatedDoctors = doctors.map((doctor) =>
      doctor === currentDoctor
        ? { ...doctor, added: !doctor.added }
        : doctor
    );

    setDoctors(updatedDoctors);
    setShowModal(false);
    setCurrentDoctor(null);
  };
  const handleCancel = () => {
    setShowModal(false);
    setCurrentDoctor(null);
  };
  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.email.toLowerCase().includes(searchTerm.toLowerCase())
  );
  

  return (
    <div className="mt-10">
    
      <input type="text" placeholder="Search for Doctors ..."
        className="w-full p-3 mb-4 border rounded-lg shadow-md text-black"
        value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
      />

     
      <div className="overflow-y-auto no-scrollbar scroll-smooth max-h-[25rem] shadow-lg border rounded-lg">
        {filteredDoctors.map((doctor, index) => (
         <div key={index} className={`flex items-center justify-between p-3 border-b transition ${doctor.added ? "bg-green-100" : "bg-white" }`}>
            <div className="flex items-center space-x-2">
              <img src={doctor.avatar}alt="avatar"className="w-10 h-10 rounded-full"/>
              <div>
                <p className="font-semibold text-black">{doctor.name}</p>
                <p className="text-gray-500">{doctor.email}</p>
              </div>
            </div>
            <button onClick={() => handleToggle(index)}
              className={`px-3 py-1 rounded ${doctor.added ? "bg-red-500 text-white" : "bg-blue-500 text-white"}`}>
              {doctor.added ? "Remove" : "Add"}
            </button>
          </div>
        ))}
        {filteredDoctors.length === 0 && (
          <div className="p-4 text-center text-gray-500">No doctors found.</div>
        )}
      </div>
      {
        showModal && (
        <AddremovePopup

        onClose={handleCancel}
        onConfirm={handleConfirm}
        message={`Are you sure you want to ${
          currentDoctor?.added ? "remove" : "add"
        } ${currentDoctor?.name}?`}
      />
        )

      }
      
    </div>
  );
};

export default DoctorAddition;
