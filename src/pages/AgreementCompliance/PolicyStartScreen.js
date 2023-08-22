import React from "react";
import blurLicense from "../../assets/blurLicense.png";
import CustomButton from "../../components/CustomButton";
import questionMark from "../../assets/questionMark.png";
import eye from "../../assets/eye.png";
import { useParams } from "react-router-dom";
const PolicyStartScreen = () => {
  const { policyName } = useParams();
  return (
    //container
    <div className="px-4 py-10  sm:px-24">
      <p className="text-black text-2xl font-normal">
        {policyName} :-
      </p>
      <div className="flex flex-col items-center pt-10">
        <div
          className="w-80  h-96  bg-contain   bg-no-repeat mb-10 flex items-center"
          style={{ backgroundImage: `url(${blurLicense})` }}
        >
          <div className="bg-white w-full h-9 flex justify-center ">
            <img className="" src={eye} alt="" />
            <p className="text-Primary text-xl font-normal ml-3 underline ">
              View Sample
            </p>
          </div>
        </div>
        <CustomButton content="Start Generating" />
        <div className="flex items-center mt-8">
          <img className="" src={questionMark} alt="" />
          <p className="text-Primary text-xl font-normal ml-3 underline">
            Generator FAQs.
          </p>
        </div>
        <p className="text-gray-600 text-base font-light my-10 text-center">
          Get your documents and make your site or app compliant in minutes.
        </p>
      </div>
    </div>
  );
};

export default PolicyStartScreen;
