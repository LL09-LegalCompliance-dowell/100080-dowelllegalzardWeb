import { useState } from "react";
import logo from "../assets/logo.png";
import account from "../assets/Account circle.png";

import { AiOutlineMenu } from "react-icons/ai";
import HeaderNavigation from "./HeaderNavigation";
import ReactFlagsSelect from "react-flags-select";
const Header = ({ handleMenuClick,isMenuOpen }) => {
  const [selectedLanguagee, setSelectedLanguagee] = useState("US");

  return (
    <>
      <header className="border-b border-gray-300 py-2 ">
        <div className="flex items-center   sm:justify-between ml-10 mr-3">
          <div className="sm:hidden">
            <AiOutlineMenu
              onClick={handleMenuClick}
              className="cursor-pointer"
              size={30}
            />
          </div>
          <img
            className="ml-5 sm:ml-0"
            src={logo}
            alt=""
            width={66}
            height={52}
          />
          <HeaderNavigation top={true} />
          <div className="ml-auto sm:ml-0"></div>
          {!isMenuOpen &&(<ReactFlagsSelect
            selectButtonClassName="h-8  mt-2  "
            selected={selectedLanguagee}
            countries={["US", "IN", "FR", "CN", "ES", "JP", "PT"]}
            customLabels={{
              US: "English",
              IN: "हिंदी",
              FR: "Français",
              CN: "简体中文",
              ES: "Español",
              JP: "日本語",
              PT: "Português",
            }}
            onSelect={(code) => {
              setSelectedLanguagee(code);
            }}
          />)}
          

          <img src={account} alt="" width={50} height={30} />
        </div>
      </header>
    </>
  );
};

export default Header;
