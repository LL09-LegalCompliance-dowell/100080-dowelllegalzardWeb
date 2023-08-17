import React from "react";
import logo from "../assets/logo_1.png";
import Contactsupport from "../assets/ContactSupport.png";

const Footer = () => {
  return (
    <footer className="flex flex-col sm:flex-row bg-footerBackground pb-4 sm:pb-12 px-5  sm:pl-36 pt-4 relative ">
      <div className="sm:w-1/4">
        <img className="ml-auto mr-auto sm:ml-10 mb-5" src={logo} alt="" width={66} height={52} />
        <p className="text-white text-sm font-medium">
          Legalzard, a product of UXLiving Lab services, serves as a valuable
          tool for assessing software license compatibility. This application
          not only aids in evaluating licenses but also facilitates the
          generation of various policies essential for websites and mobile
          applications, catering to the legal requirements of businesses and
          promoting compliance.
        </p>
      </div>
      <div className="sm:ml-40 mt-10 text-white ">
        <p className="text-s font-bold mb-3">CONSUMER POLICY</p>
        <p className="text-xs font-normal mb-3">Open Source Licenses</p>
        <p className="text-xs font-normal mb-3">Terms & Conditions</p>
        <p className="text-xs font-normal mb-3">Privacy Policy</p>
        <p className="text-xs font-normal">Disclaimer</p>
      </div>
      <div className="w-16 h-16 bg-Primary rounded-t-full rounded-bl-full absolute bottom-8 right-8 justify-center items-center flex flex-col">
        <img src={Contactsupport} alt="" width={30} height={20}></img>
        <p className="text-white text-sm font-light">Help</p>
      </div>
    </footer>
  );
};

export default Footer;
