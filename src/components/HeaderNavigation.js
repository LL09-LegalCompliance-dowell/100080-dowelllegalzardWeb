

const HeaderNavigation = ({top,isMenuOpen}) => {
  return (
    <ul className={`${top?"hidden flex-row items-center sm:flex   sm:text-xs md:text-xs lg:text-sm xl:text-base font-normal text-black":`${isMenuOpen ? "left-0" : "hidden"}`}`}>
      <li className="mx-6 sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold text-Primary ">
        <a href="#a">Home</a>
      </li>
      <li className="mr-6">
        <a href="#a">Open Source License Compatibility</a>
      </li>
      <li className="mr-6">
        <a href="#a">Software License</a>
      </li>
      <li className="mr-6">
        <a href="#a">Agreement Compliance</a>
      </li>
      <li className="mr-6">
        <a href="#a">About Us</a>
      </li>
      <li className="mr-6">
        <a href="#a">Contact Us</a>
      </li>
    </ul>
  );
};

export default HeaderNavigation;
