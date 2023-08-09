import React from "react";
import backgroundImage from "../assets/Home.png";
import WelcomeCard from "../components/WelcomeCard";
const HomeScreen = () => {
  return (
   
    <div className="h-screen">
      <div
        className="h-5/6 w-full bg-cover bg-no-repeat  bg-top flex justify-center items-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <WelcomeCard />
      </div>
    </div>
  );
};

export default HomeScreen;
