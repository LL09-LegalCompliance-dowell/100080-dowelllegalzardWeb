import React from "react";

const MostVisitedCard = ({ image, text }) => {
  return (
    <div className="flex flex-row items-center mb-5">
      <img className="mr-10 w-16 h-16" src={image} alt="" />
      <p className="text-xl font-normal text-black">{text}</p>
    </div>
  );
};

export default MostVisitedCard;
