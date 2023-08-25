// import React from "react";
// import MultiStep from "react-multistep";
// import SlpFisrtScreen from "./SlpFisrtScreen";
// const Slp = () => {
import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import SlpFisrtScreen from "./SlpFisrtScreen";
// import { useSelector,useDispatch } from 'react-redux';
// import { addData } from "../../../store/policyDataSlice";
const SlP = () => {
  //for testing
  const steps = ["", "", ""];
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className=" flex justify-center my-10">
      <Box sx={{ width: "70%" }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label,index) => {
            return (
              <Step key={index}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
            <SlpFisrtScreen/>
            <div className="flex justify-center" >
              <button
                disabled={activeStep === 0}
                onClick={handleBack}
                className="bg-primary_2 text-white rounded-2xl w-28 justify-center items-center py-2 p-2 mr-5"
              >
                Previous Step
              </button>

              <button
                onClick={handleNext}
                className="bg-primary_2 text-white rounded-2xl w-28 justify-center items-center py-2 p-2"
              >
                {" "}
                {activeStep === steps.length - 1 ? "Finish" : "Next Step"}
              </button>
            </div>
          </React.Fragment>
        )}
      </Box>
    </div>
  );
};
export default SlP;
