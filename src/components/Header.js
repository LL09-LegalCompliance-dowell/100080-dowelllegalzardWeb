import React from "react";
import logo from "../assets/logo.png";
import account from "../assets/Account circle.png";
import DropDown from "./DropDown";
const Header = () => {
  return (
    <header className="border-b border-gray-300 py-2 ">
      <div className="flex items-center justify-between mx-2">
      
          <img src={logo} alt="" width={70} height={20} />
       

        <ul className="flex  justify-between  text-base font-normal text-black ">
          <li className="px-3 text-xl font-bold text-Primary ">
            <a href="#a">Home</a>
          </li>
          <li className="px-3">
            <a href="#a">Open Source License Compatibility</a>
          </li>
          <li className="px-3">
            <a href="#a">Software License</a>
          </li>
          <li className="px-3">
            <a href="#a">Agreement Compliance</a>
          </li>
          <li className="px-3">
            <a href="#a">About Us</a>
          </li>
          <li className="px-3">
            <a href="#a">Contact Us</a>
          </li>
        </ul>

        <DropDown />
        <img src={account} alt="" width={50} height={20} />
      </div>
    </header>
  );
};

export default Header;
