import React from "react";
import HeaderNavigation from "./HeaderNavigation";
const Slider = ({ isMenuOpen, }) => {
  console.log(isMenuOpen);
  return (
    <div className={`sm:hidden slider ${isMenuOpen ?"slide":""}`}>
      <HeaderNavigation/>
    </div>
  );
};

export default Slider;
