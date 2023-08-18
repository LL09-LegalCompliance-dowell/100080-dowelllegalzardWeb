import React from 'react'

import {  Routes, Route } from "react-router-dom";
import AgreementHome from './AgreementHome';
const AgreementCompliance = ({setIsMenuOpen}) => {
  return (
    <div className='' onClick={()=>setIsMenuOpen(false)}>
      
      <Routes> 
        <Route path="/" exact element={<AgreementHome />} />
        
      </Routes>
      </div>
    
      
   
  )
}

export default AgreementCompliance
