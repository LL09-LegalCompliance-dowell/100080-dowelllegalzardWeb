import React from 'react'

import {  Routes, Route  } from "react-router-dom";
import AgreementHome from './AgreementHome';
import PolicyStartScreen from './PolicyStartScreen';
import Slp from './SLP';
import { Provider } from 'react-redux';
import store from '../../store';
const AgreementCompliance = ({setIsMenuOpen}) => {

  return (
    <div className='' onClick={()=>setIsMenuOpen(false)}>
      <Provider store={store}>
      <Routes> 
        <Route path="/" exact element={<AgreementHome />} />
        <Route path="/PolicyStartScreen/:policyName"  element={<PolicyStartScreen />} />
        <Route path="/SLP"  element={<Slp />} />
        
      </Routes>
      </Provider>
      </div>
    
      
   
  )
}

export default AgreementCompliance
