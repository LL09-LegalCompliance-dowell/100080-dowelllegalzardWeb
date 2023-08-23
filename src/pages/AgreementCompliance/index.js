import React from 'react'

import {  Routes, Route  } from "react-router-dom";
import AgreementHome from './AgreementHome';
import PolicyStartScreen from './PolicyStartScreen';
import Slp from './SLP';
const AgreementCompliance = ({setIsMenuOpen}) => {

  return (
    <div className='' onClick={()=>setIsMenuOpen(false)}>
      
      <Routes> 
        <Route path="/" exact element={<AgreementHome />} />
        <Route path="/PolicyStartScreen/:policyName"  element={<PolicyStartScreen />} />
        <Route path="/SLP"  element={<Slp />} />
        
      </Routes>
      </div>
    
      
   
  )
}

export default AgreementCompliance
