import React, { useEffect, useState } from "react";
import blurLicense from "../../assets/blurLicense.png";
import CustomButton from "../../components/CustomButton";
import questionMark from "../../assets/questionMark.png";
import eye from "../../assets/eye.png";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
const PolicyStartScreen = () => {
  const navigate = useNavigate();
  const { policyName } = useParams();
  const [imageUrl, setImageUrl] = useState("");
  const handleButtonPress = () => {
    // Use history.push to navigate to the desired route
    navigate('/AgreementCompliance/SLP');
  };
  useEffect(() => {
    switch (policyName) {
      case "Cookies Policy":
        setImageUrl(
          "https://100080.pythonanywhere.com/media/doc/cookies-policy.pdf"
        );
        break;
      case "Software License Policy":
        setImageUrl(
          "https://100080.pythonanywhere.com/media/doc/software-license-agreement.pdf"
        );
        break;
      case "Privacy Policy":
        setImageUrl(
          "https://100080.pythonanywhere.com/media/doc/website-privacy-policy.pdf"
        );
        break;
      case "Disclaimer":
        setImageUrl(
          "https://100080.pythonanywhere.com/media/doc/discliamer-for-website.pdf"
        );
        break;
      case "EULA":
        setImageUrl(
          "https://100080.pythonanywhere.com/media/doc/end-user-licensing-agreement.pdf"
        );
        break;
      case "Return & Refund":
        setImageUrl(
          "https://100080.pythonanywhere.com/media/doc/return-refund-policy.pdf"
        );
        break;
      case "Website Terms of Use":
        setImageUrl(
          "https://100080.pythonanywhere.com/media/doc/website-terms-of-use.pdf"
        );
        break;
      default:
    }
  }, [policyName, setImageUrl]);
  return (
    //container
    <div className="px-4 py-10  sm:px-24">
      <p className="text-black text-2xl font-normal">{policyName} :-</p>
      <div className="flex flex-col items-center pt-10">
        <div
          className="w-80  h-96  bg-contain   bg-no-repeat mb-10 flex items-center"
          style={{ backgroundImage: `url(${blurLicense})` }}
        >
          <div className="bg-white w-full h-9 flex justify-center ">
            <img className="" src={eye} alt="" />
            <a
              href={imageUrl}
              target="_blank"
              rel="noreferrer"
              className="text-Primary text-xl font-normal ml-3 underline "
            >
              View Sample
            </a>
          </div>
        </div>
        <CustomButton onClick={handleButtonPress} content="Start Generating" />
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
