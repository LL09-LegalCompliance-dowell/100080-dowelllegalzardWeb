import React from "react";
import slp from "../../assets/slp.png";
import privacyPolicy from "../../assets/privacyPolicy.png";
import cookiesPolicy from "../../assets/cookiesPolicy.png";
import disclaimer from "../../assets/disclaimer.png";
import eula from "../../assets/eula.png";
import return_refund from "../../assets/return&refund.png";
import websiteTermsOfUse from "../../assets/websiteTermsOfUse.png";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
const AgreementHome = () => {
  const location = useLocation();
  const currentRoute = location.pathname;

  return (
    <div className="pl-10 sm:pl-20 my-5 sm:my-10">
      <p className="text-base- font-normal text-black">
        We help with the legal requirements, so you can focus on the business.
      </p>
      <div className="px-5 pt-5 sm:pl-20 sm:pt-10">
        <div className=" flex items-center">
          <img className="mr-10" src={slp} alt="" width={66} height={52} />
          <Link to={`${currentRoute}/PolicyStartScreen`}>
          <p className="text-Primary text-2xl font-normal underline">
            Software License Policy
          </p>
          </Link>
        </div>
        <div className=" pt-10 flex items-center">
          <img
            className="mr-10"
            src={privacyPolicy}
            alt=""
            width={66}
            height={52}
          />
          <p className="text-Primary text-2xl font-normal underline">
            Privacy Policy
          </p>
        </div>
        <div className="pt-10 flex items-center">
          <img
            className="mr-10"
            src={cookiesPolicy}
            alt=""
            width={66}
            height={52}
          />
          <p className="text-Primary text-2xl font-normal underline">
            Cookies Policy
          </p>
        </div>
        <div className="pt-10 flex items-center">
          <img
            className="mr-10"
            src={disclaimer}
            alt=""
            width={66}
            height={52}
          />
          <p className="text-Primary text-2xl font-normal underline">
            Disclaimer
          </p>
        </div>
        <div className="pt-10 flex items-center">
          <img className="mr-10" src={eula} alt="" width={66} height={52} />
          <p className="text-Primary text-2xl font-normal underline">EULA</p>
        </div>
        <div className="pt-10 flex items-center">
          <img
            className="mr-10"
            src={return_refund}
            alt=""
            width={66}
            height={52}
          />
          <p className="text-Primary text-2xl font-normal underline">
            Return & Refund
          </p>
        </div>
        <div className="pt-10 flex items-center">
          <img
            className="mr-10"
            src={websiteTermsOfUse}
            alt=""
            width={66}
            height={52}
          />
          <p className="text-Primary text-2xl font-normal underline">
            Website Terms of Use
          </p>
        </div>
      </div>
    </div>
  );
};

export default AgreementHome;
