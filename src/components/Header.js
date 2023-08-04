import { useState } from "react";
import logo from "../assets/logo.png";
import account from "../assets/Account circle.png";
import DropDown from "./DropDown";
import { AiOutlineMenu } from "react-icons/ai";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <header className="border-b border-gray-300 py-2 ">
        <div className="flex items-center   sm:justify-between mx-2">
          <div className="sm:hidden">
            <AiOutlineMenu
              onClick={handleMenuClick}
              className="cursor-pointer"
              size={30}
            />
          </div>
          <img className="ml-5 sm:ml-0" src={logo} alt="" width={40} height={20} />
          <ul className="hidden sm:flex flex-row items-center text-xs lg:text-sm xl:text-base font-normal text-black space-y-2 lg:space-y-0 lg:space-x-3">
            <li className="px-3 sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold text-Primary ">
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

          <DropDown style="ml-auto mr-3"/>
          <img src={account} alt="" width={40} height={20} />
        </div>
      </header>
      <ul className={`${isMenuOpen ? "left-0" : "hidden"} lg:hidden `}>
        <li className="px-3 sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold text-Primary ">
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
    </>
  );
};

export default Header;
