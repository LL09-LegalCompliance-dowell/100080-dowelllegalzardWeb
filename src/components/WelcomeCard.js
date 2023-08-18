import React from "react";
import { Link } from "react-router-dom";
import CompatibilityLogo from "../assets/Compatibility Logo.png";
const WelcomeCard = () => {
  return (
    <div className="bg-white bg-opacity-60 sm:h-3/4  sm:w-4/5  h-56 w-80  rounded-xl flex flex-row justify-evenly items-center">
      <div className="w-2/4 flex flex-col items-center">
        <p className="md:text-5xl sm:text-4xl text-base font-bold text-center mb-7 sm-mb-24 ">
          Open Source License Compatibility
        </p>
        <p className="md:text-2xl sm:text-xl text-sm font-normal text-center ">
          Check your Open Source License Compatibility
        </p>
      </div>
      <div className="flex flex-col justify-between items-center">
        <img alt="" src={CompatibilityLogo} className="sm:w-48 sm:h-48 w-20 h-20 mb-4 sm:mb-6" />
        <button className="bg-Primary text-opacity-100 rounded-xl w-20 h-6 sm:w-36 sm:h-11  text-white  sm:text-2xl text-sm ">
          <Link to="/OpenSourceLicenseCompatibility">Check Now</Link>
        </button>
      </div>
    </div>
  );
};

export default WelcomeCard;
