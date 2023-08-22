import "./App.css";
import HomeScreen from "./pages/HomeScreen";
import OpenSourceLicenseCompatibility from "./pages/OpenSourceLicenseCompatibility";
import SoftwareLicense from "./pages/SoftwareLicense";
import AgreementCompliance from "./pages/AgreementCompliance";
import { useState } from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Slider from "./components/Slider";
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
 
  return (
    <Router>
      <Slider isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Header isMenuOpen={isMenuOpen} handleMenuClick={handleMenuClick} />

      <Routes>
        <Route path="/" exact Component={HomeScreen} />
        <Route
          path="/OpenSourceLicenseCompatibility"
          Component={OpenSourceLicenseCompatibility}
        />
        <Route path="/SoftwareLicense" Component={SoftwareLicense} />
        <Route path="/AgreementCompliance" Component={AgreementCompliance} />
      </Routes>
    </Router>
  );
}

export default App;
