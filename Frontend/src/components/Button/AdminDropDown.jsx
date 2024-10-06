import React, { useEffect, useState, memo } from "react";

const AdminDropDown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleOptionClick = (option) => {
    console.log(`Selected option: ${option}`);
    setIsDropdownOpen(false);
  };

  const optionsArray = ["Add Node", "Add Patient", "Add Doctors"];
  return (
    <>
      <button
        onClick={toggleDropdown}
        className="bg-iot-blue hover:bg-blue-600 text-white px-5 mx-2 py-2 rounded-lg"
      >
        ADD +
      </button>
      {isDropdownOpen && (
        <ListofOptions
          optionsArray={optionsArray}
          handleOptionClick={handleOptionClick}
        />
      )}
    </>
  );
};

const ListofOptions = ({ optionsArray, handleOptionClick }) => {
  return (
    <div className="absolute right-0 bg-white text-black rounded-lg shadow-lg mt-2 w-48 z-10">
      <ul className="py-2">
        {optionsArray.map((choice, index) => (
          <Option
            key={index}
            handleOptionClick={handleOptionClick}
            choice={choice}
          />
        ))}
      </ul>
    </div>
  );
};
const Option = ({ handleOptionClick, choice }) => {
  return (
    <li
      onClick={() => handleOptionClick(choice)}
      className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
    >
      {choice}
    </li>
  );
};

export default AdminDropDown;
