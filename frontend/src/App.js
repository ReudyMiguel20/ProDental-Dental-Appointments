import React from "react";
import AppNavbar from "./Components/AppNavbar/AppNavbar";
import HeroBanner from "./Components/HeroBanner/HeroBanner";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import InformationCard from "./Components/InformationCard/InformationCard";
import { InformationCardData } from "./Data/InformationCardData";
import ImageForm from "./Components/ImageForm/ImageForm";
import ContactUs from "./Components/ContactUs/ContactUs";
import AppFooter from "./Components/AppFooter/AppFooter";
import FloatingButton from "./Components/FloatingButton/FloatingButton";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import UserDashboard from "./Pages/Dashboard/UserDashboard/UserDashboard";
import RegistrationForm from "./Components/RegistrationForm/RegistrationForm";

function App() {
  return (
    <div className="App">
      <Router>
        <FloatingButton />
        <AppNavbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard/*" element={<UserDashboard />} />
            <Route path="/registro" element={<RegistrationForm />} />
          </Routes>
        </div>
        <AppFooter />
      </Router>
    </div>
  );
}

export default App;
