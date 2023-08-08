import React from "react";
import { Link } from "react-router-dom";
import CompatibilityLogo from "../assets/Compatibility Logo.png";
const WelcomeCard = () => {
  return (
    <div className="bg-white bg-opacity-60 h-3/4  w-4/5 ml-auto mr-auto rounded-xl flex flex-row justify-evenly items-center">
      <div className="w-2/4 flex flex-col items-center">
        <p className="md:text-5xl sm:text-4xl text-xl font-bold text-center mb-24 ">
          Open Source License Compatibility
        </p>
        <p className="md:text-2xl sm:text-xl text-base font-normal text-center ">
          Check your Open Source License Compatibility
        </p>
      </div>
      <div className="flex flex-col justify-between items-center">
        <img alt="" src={CompatibilityLogo} className="w-48 h-48 mb-6" />
        <button className="bg-Primary text-opacity-100 rounded-xl w-36 h-11 text-white font text-2xl  ">
          <Link to="/OpenSourceLicenseCompatibility">Check Now</Link>
        </button>
      </div>
    </div>
  );
};

export default WelcomeCard;
