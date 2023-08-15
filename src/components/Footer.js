import React from "react";
import logo from "../assets/logo_1.png";

const Footer = () => {
  return (
    <footer className=" bg-footerBackground h-72 pl-36 pt-4">
      <div className="w-1/3">
        <img className="ml-10 mb-5" src={logo} alt="" width={66} height={52} />
        <p className="text-white text-base font-medium">
          Legalzard, a product of UXLiving Lab services, serves as a valuable
          tool for assessing software license compatibility. This application
          not only aids in evaluating licenses but also facilitates the
          generation of various policies essential for websites and mobile
          applications, catering to the legal requirements of businesses and
          promoting compliance.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
