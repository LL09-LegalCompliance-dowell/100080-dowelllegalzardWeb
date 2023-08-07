
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
const HeaderNavigation = ({ top, isMenuOpen}) => {
  const location = useLocation();
  const currentRoute = location.pathname;
  return (
    <ul
      className={`${
        top
          ? "hidden flex-row items-center sm:flex   sm:text-xs md:text-xs lg:text-sm xl:text-base font-normal ml-4 text-black"
          : ""
      }`}
    >
      <li
        className={` ${
          currentRoute === "/"
            ? "sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold text-Primary mx-6"
            : "mr-6"
        } `}

      >
        <Link to="/">Home</Link>
      </li>
      <li
        className={` ${
          currentRoute === "/OpenSourceLicenseCompatibility"
            ? "sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold text-Primary mx-6"
            : "mr-6"
        } `}
    
      >
        <Link to="/OpenSourceLicenseCompatibility">
          Open Source License Compatibility
        </Link>
      </li>
      <li
        className={` ${
          currentRoute === "/SoftwareLicense"
            ? "sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold text-Primary mx-6"
            : "mr-6"
        } `}
       
      >
        <Link to="/SoftwareLicense">Software License</Link>
      </li>
      <li
        className={` ${
          currentRoute === "/AgreementCompliance"
            ? "sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold text-Primary mx-6"
            : "mr-6"
        } `}
       
      >
        <Link to="/AgreementCompliance">Agreement Compliance</Link>
      </li>

    </ul>
  );
};

export default HeaderNavigation;
