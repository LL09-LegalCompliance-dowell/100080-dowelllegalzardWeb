import React from "react";
import backgroundImage from "../assets/Home.png";
import WelcomeCard from "../components/WelcomeCard";
import softwarlicense from "../assets/softwarlicense.png";
import agreementCompliance from "../assets/agreementCompliance.png";
import services from "../assets/services.png";
import { Link } from "react-router-dom";
const HomeScreen = () => {
  return (
    <div className="h-screen">
      <div
        className="sm:h-5/6  h-64 w-full bg-cover   bg-no-repeat  bg-top flex justify-center items-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <WelcomeCard />
      </div>
      <div className="mx-5 my-5 sm:mx-24 sm:my-11">
        <p className="text-2xl font-semibold  text-black">Product & Services</p>
        <div className="overflow-x-auto ">
          <div className="flex my-6 p-4 justify-between space-x-4 mx-3 sm:mx-14">
            <div className="flex-none flex flex-col justify-center items-center rounded-xl w-52 h-72 sm:w-80 sm:h-96 bg-gradient-to-br from-green-400 to-green-200">
              <img
                className="mr-2 sm:w-32 sm:h-32 w-16 h-16"
                src={softwarlicense}
                alt=""
               
              />
              <p className="text-lg  sm:text-2xl font-medium">Software License</p>
              <p className="text-sm sm:text-xl font-light text-center my-2">
                Scroll through our list of software licenses curated just for
                you
              </p>
              <button className="bg-black text-white rounded-md w-36 h-8 mt-12 ">
                <Link to="/OpenSourceLicenseCompatibility">Explore Now</Link>
              </button>
            </div>
            <div className="flex-none flex flex-col justify-center items-center rounded-xl w-52 h-72 sm:w-80 sm:h-96 bg-gradient-to-br from-green-400 to-green-200">
              <img
                className="mr-2 sm:w-32 sm:h-32 w-16 h-16"
                src={agreementCompliance}
                alt=""
                
              />
              <p className="text-lg  sm:text-2xl font-medium">Agreement Compliance</p>
              <p className="text-sm sm:text-xl font-light text-center my-2">
                Generate policies using our agreement compliance system
              </p>
              <button className="bg-black text-white rounded-md w-36 h-8 mt-12 ">
                <Link to="/OpenSourceLicenseCompatibility">Explore Now</Link>
              </button>
            </div>
            <div className="flex-none flex flex-col justify-center items-center rounded-xl w-52 h-72 sm:w-80 sm:h-96 bg-gradient-to-br from-green-400 to-green-200">
              <img
                className="mr-2 sm:w-32 sm:h-32 w-16 h-16"
                src={services}
                alt=""

              />
              <p className="text-lg  sm:text-2xl font-medium">Other Legal Compliance</p>
              <p className="text-sm sm:text-xl font-light text-center my-2">
                Check out our other products & services provided
              </p>
              <button className="bg-black text-white rounded-md w-36 h-8 mt-12 ">
                <Link to="/OpenSourceLicenseCompatibility">Explore Now</Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="overflow-x-auto bg-red-600 ">
          <div className="flex my-6 justify-center ">
            <div className="flex-none flex flex-col justify-center items-center rounded-xl w-80 h-96 bg-gradient-to-br from-green-400 to-green-200  mr-14 ">
              <img
                className="mr-2"
                src={softwarlicense}
                alt=""
                width={130}
                height={130}
              />
              <p className="text-2xl font-medium">Software License</p>
              <p className="text-xl font-light text-center my-2">
                Scroll through our list of software licenses curated just for
                you
              </p>
              <button className="bg-black text-white rounded-md w-36 h-8 mt-12 ">
                <Link to="/OpenSourceLicenseCompatibility">Explore Now</Link>
              </button>
            </div>
            <div className="flex-none flex flex-col justify-center items-center rounded-xl w-80 h-96 bg-gradient-to-br from-green-400 to-green-200  mr-14">
              <img
                className="mr-2"
                src={agreementCompliance}
                alt=""
                width={130}
                height={130}
              />
              <p className="text-2xl font-medium">Agreement Compliance</p>
              <p className="text-xl font-light text-center my-2">
                Generate policies using our agreement compliance system
              </p>
              <button className="bg-black text-white rounded-md w-36 h-8 mt-12 ">
                <Link to="/OpenSourceLicenseCompatibility">Explore Now</Link>
              </button>
            </div>
            <div className="flex-none flex flex-col justify-center items-center rounded-xl w-80 h-96 bg-gradient-to-br from-green-400 to-green-200  mr-14">
              <img
                className="mr-2"
                src={services}
                alt=""
                width={130}
                height={130}
              />
              <p className="text-2xl font-medium">Other Legal Compliance</p>
              <p className="text-xl font-light text-center my-2">
                Check out our other products & services provided
              </p>
              <button className="bg-black text-white rounded-md w-36 h-8 mt-12 ">
                <Link to="/OpenSourceLicenseCompatibility">Explore Now</Link>
              </button>
            </div>
          </div>
        </div> */}
    </div>
  );
};

export default HomeScreen;
// pt-8 pl-24 sm:pt-0 sm:pl-0 sm:
