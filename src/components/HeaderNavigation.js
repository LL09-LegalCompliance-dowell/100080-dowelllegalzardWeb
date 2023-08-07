import { useState } from "react";
import { Link } from "react-router-dom";
const HeaderNavigation = ({ top, isMenuOpen }) => {
  const [selectedState, setSelectedState] = useState("Home");
  return (
    <ul
      className={`${
        top
          ? "hidden flex-row items-center sm:flex   sm:text-xs md:text-xs lg:text-sm xl:text-base font-normal text-black"
          : `${isMenuOpen ? "left-0" : "hidden"}`
      }`}
    >
      <li
        className={` ${
          selectedState === "Home"
            ? "sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold text-Primary mx-6"
            : "mr-6"
        } `}
        onClick={()=>{setSelectedState("Home")}}
      >
        <Link to="/">Home</Link>
      </li>
      <li
        className={` ${
          selectedState === "OpenSourceLicenseCompatibility"
            ? "sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold text-Primary mx-6"
            : "mr-6"
        } `}
        onClick={()=>{setSelectedState("OpenSourceLicenseCompatibility")}}
      >
        <Link to="/OpenSourceLicenseCompatibility">
          Open Source License Compatibility
        </Link>
      </li>
      <li
        className={` ${
          selectedState === "SoftwareLicense"
            ? "sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold text-Primary mx-6"
            : "mr-6"
        } `}
        onClick={()=>{setSelectedState("SoftwareLicense")}}
      >
        <Link to="/SoftwareLicense">Software License</Link>
      </li>
      <li
        className={` ${
          selectedState === "AgreementCompliance"
            ? "sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold text-Primary mx-6"
            : "mr-6"
        } `}
        onClick={()=>{setSelectedState("AgreementCompliance")}}
      >
        <Link to="/AgreementCompliance">Agreement Compliance</Link>
      </li>
      <li
        className={` ${
          selectedState === "AboutUs"
            ? "sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold text-Primary mx-6"
            : "mr-6"
        } `}
        onClick={()=>{setSelectedState("AboutUs")}}
      >
        <Link to="/AboutUs">About Us</Link>
      </li>
      <li
        className={` ${
          selectedState === "ContactUs"
            ? "sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold text-Primary mx-6"
            : "mr-6"
        } `}
        onClick={()=>{setSelectedState("ContactUs")}}
      >
        <Link to="/ContactUs">Contact Us</Link>
      </li>
    </ul>
  );
};

export default HeaderNavigation;
