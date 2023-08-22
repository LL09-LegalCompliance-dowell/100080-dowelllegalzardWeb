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
  const [loading, setLoading] = useState(true);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // useEffect(() => {
  //   const url = new URL(window.location.href);
  //   const sessionId = url.searchParams.get("session_id");
  //   const id = url.searchParams.get("id");
  //   const storedSessionId = localStorage.getItem("session_id");
  //   const storedId = localStorage.getItem("id");
    
  //   if (!storedSessionId && !storedId) {
  //     if (sessionId && id) {
  //       localStorage.setItem("session_id", sessionId);
  //       localStorage.setItem("id", id);
  //       setLoading(true);
  //     } else {
  //       window.location.href = "https://100014.pythonanywhere.com/";
  //       setLoading(false);
  //     }
  //   }
  // }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isMenuOpen]);

  // if (!loading) {
  //   return (
  //     <div className="w-full h-screen flex items-center justify-center">
  //       <h1 className="text-green-600 font-bold text-xl">Loading...</h1>
  //     </div>
  //   );
  // }

  return (
    <HashRouter>
      <Slider isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Header isMenuOpen={isMenuOpen} handleMenuClick={handleMenuClick} />

      <Routes>
        <Route
          path="/"
          exact
          element={<HomeScreen setIsMenuOpen={setIsMenuOpen} />}
        />
        <Route
          path="/OpenSourceLicenseCompatibility"
          element={
            <OpenSourceLicenseCompatibility setIsMenuOpen={setIsMenuOpen} />
          }
        />
        <Route
          path="/SoftwareLicense"
          element={<SoftwareLicense setIsMenuOpen={setIsMenuOpen} />}
        />
        <Route
          path="/AgreementCompliance"
          element={<AgreementCompliance setIsMenuOpen={setIsMenuOpen} />}
        />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
