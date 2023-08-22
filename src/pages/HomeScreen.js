import React, { useEffect, useState } from "react";
import backgroundImage from "../assets/Home.png";
import WelcomeCard from "../components/WelcomeCard";
import agreementCompliance from "../assets/agreementCompliance.png";
import services from "../assets/services.png";
import softwarlicense from "../assets/softwarlicense.png";
import ProductsServicesCard from "../components/Products&ServicesCard";
import mostVisited1 from "../assets/mostVisited1.png";
import mostVisited2 from "../assets/mostVisited2.png";
import mostVisited3 from "../assets/mostVisited3.png";
import mostVisited4 from "../assets/mostVisited4.png";
import MostVisitedCard from "../components/MostVisitedCard";
const HomeScreen = ({ setIsMenuOpen }) => {

  return (
    <div className="min-h-screen" onClick={() => setIsMenuOpen(false)}>
      <div
        className="customH  h-64 w-full bg-cover   bg-no-repeat  bg-top flex justify-center items-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <WelcomeCard />
      </div>
      <div className="mx-5 my-5 sm:mx-24 sm:my-11">
        <p className="text-2xl font-semibold  text-black">Product & Services</p>
        <div className="overflow-x-auto ">
          <div className="flex my-6 p-4 justify-between space-x-4 mx-3 sm:mx-14">
            <ProductsServicesCard
              title="Software License"
              subTitle="Check your Open Source License Compatibility"
              Image={softwarlicense}
            />
            <ProductsServicesCard
              title="Agreement Compliance"
              subTitle="Generate policies using our agreement compliance system"
              Image={agreementCompliance}
            />
            <ProductsServicesCard
              title="Other Legal Compliance"
              subTitle="Check out our other products & services provided"
              Image={services}
            />
          </div>
        </div>
      </div>
      <div className="mx-5 my-5 sm:mx-24 sm:my-11">
        <p className="text-2xl font-semibold  text-black">Most Visited</p>
        <div className="my-6 mx-5">
          <MostVisitedCard
            image={mostVisited1}
            text="Apache vs MIT Compatibility result"
          />
          <MostVisitedCard image={mostVisited2} text="GNU GPL v 1.0" />
          <MostVisitedCard
            image={mostVisited3}
            text="Apache vs LGPL compatibility results"
          />
          <MostVisitedCard image={mostVisited4} text="PHP License 3.01" />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
// pt-8 pl-24 sm:pt-0 sm:pl-0 sm:
