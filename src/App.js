import "./App.css";
import HomeScreen from "./pages/HomeScreen";
import OpenSourceLicenseCompatibility from "./pages/OpenSourceLicenseCompatibility";
import SoftwareLicense from "./pages/SoftwareLicense";
import AgreementCompliance from "./pages/AgreementCompliance";
import { useState } from "react";
import Header from "./components/Header";
import { HashRouter, Route, Routes } from "react-router-dom";
import Slider from "./components/Slider";
import { useEffect } from "react";
import Footer from "./components/Footer";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
 useEffect(()=>{
  if(isMenuOpen){
    document.body.classList.add('no-scroll');
  }else{
    document.body.classList.remove('no-scroll');
  }
 },[isMenuOpen])
  return (
    <HashRouter>
      <Slider isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Header isMenuOpen={isMenuOpen} handleMenuClick={handleMenuClick} />
      
      <Routes>
        <Route path="/" exact element={<HomeScreen setIsMenuOpen={setIsMenuOpen} />} />
        <Route
          path="/OpenSourceLicenseCompatibility"
          element={<OpenSourceLicenseCompatibility setIsMenuOpen={setIsMenuOpen}/>}
        />
        <Route path="/SoftwareLicense" element={<SoftwareLicense setIsMenuOpen={setIsMenuOpen}/>} />
        <Route path="/AgreementCompliance" element={<AgreementCompliance setIsMenuOpen={setIsMenuOpen}/>} />
        
      </Routes>
      <Footer/>
      
    </HashRouter>
  );
}

export default App;
