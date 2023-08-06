import "./App.css";
import HomeScreen from "./pages/HomeScreen";
import OpenSourceLicenseCompatibility from "./pages/OpenSourceLicenseCompatibility";
import SoftwareLicense from "./pages/SoftwareLicense";
import AgreementCompliance from "./pages/AgreementCompliance";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" exact Component={HomeScreen} />
        <Route path="/OpenSourceLicenseCompatibility"  Component={OpenSourceLicenseCompatibility} />
        <Route path="/SoftwareLicense"  Component={SoftwareLicense} />
        <Route path="/AgreementCompliance"  Component={AgreementCompliance} />
        <Route path="/AboutUs"  Component={AboutUs} />
        <Route path="/ContactUs"  Component={ContactUs} />
      </Routes>
    </Router>
  );
}

export default App;
