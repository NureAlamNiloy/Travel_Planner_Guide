import { useState } from "react";
import {  FaHotel } from "react-icons/fa";
import { Link } from "react-router-dom";
import Cards from "../Cards/Cards"; // Import the Cards component

const NavButton = () => {
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setButtonClicked(!buttonClicked);
  };

  return (
    <div>
      <div className="flex flex-wrap justify-center space-x-2 gap-u-2 mt-4">
        <Link
          to="/Hotels"
          className={`flex items-center px-4 py-2 bg-white bg-opacity-20 text-white rounded-md hover:bg-blue-600 mb-2 sm:mb-0 ${
            buttonClicked ? "bg-blue-600" : ""
          }`}
          onClick={handleButtonClick}

        >
          <FaHotel className="mr-2" /> Hotels
        </Link>
        <Link
          to="/ThinksToDo"
          className={`flex items-center px-4 py-2 bg-white bg-opacity-20 text-white rounded-md hover:bg-blue-600 mb-2 sm:mb-0 ${
            buttonClicked ? "bg-blue-600" : ""
          }`}
          onClick={handleButtonClick}

        >
          <FaHotel className="mr-2" /> Things to do
        </Link>
        <Link
          to="/Restaurants"
          className={`flex items-center px-4 py-2 bg-white bg-opacity-20 text-white rounded-md hover:bg-blue-600 mb-2 sm:mb-0 ${
            buttonClicked ? "bg-blue-600" : ""
          }`}
          onClick={handleButtonClick}

        >
          <FaHotel className="mr-2" /> Restaurents
        </Link>
        <Link
          to="/Vacations"
          className={`flex items-center px-4 py-2 bg-white bg-opacity-20 text-white rounded-md hover:bg-blue-600 mb-2 sm:mb-0 ${
            buttonClicked ? "bg-blue-600" : ""
          }`}
          onClick={handleButtonClick}

        >
          <FaHotel className="mr-2" /> Vacatation
        </Link>
        {/* ... other links */}
      </div>
      
      {/* Pass buttonClicked as a prop to the Cards component */}
      <Cards buttonClicked={buttonClicked} />
    </div>
  );
};

export default NavButton;

