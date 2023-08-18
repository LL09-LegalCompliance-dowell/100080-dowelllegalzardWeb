import React from 'react'

import {  Routes, Route  } from "react-router-dom";
import AgreementHome from './AgreementHome';
import PolicyStartScreen from './PolicyStartScreen';
const AgreementCompliance = ({setIsMenuOpen}) => {

  return (
    <div className='' onClick={()=>setIsMenuOpen(false)}>
      
      <Routes> 
        <Route path="/" exact element={<AgreementHome />} />
        <Route path="/PolicyStartScreen"  element={<PolicyStartScreen />} />
        
      </Routes>
      </div>
    
      
   
  )
}

export default AgreementCompliance
