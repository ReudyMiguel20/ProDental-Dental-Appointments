import React, {useEffect, useState} from "react";
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
import RegistrationSuccessful from "./Components/RegistrationSuccessful/RegistrationSuccessful";
import LoginForm from "./Components/LoginForm/LoginForm";
import { jwtDecode } from "jwt-decode";
import AppointmentForm from "./Components/AppointmentForm/AppointmentForm";
import AppointmentPage from "./Pages/AppointmentPage/AppointmentPage";
import CurrentAppointments from "./Components/CurrentAppointments/CurrentAppointments";
import { useQuery } from 'react-query';
import AdminDashboard from "./Pages/Dashboard/AdminDashboard/AdminDashboard";

function App() {
  let [username, setUsername] = useState(null);
  let [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const decodedToken = jwtDecode(token);
      setUsername(decodedToken.sub);

      const role = decodedToken.role[0].authority;
      setUserRole(role);
      console.log(userRole)
    }

  },[]);

  console.log(username);

  


  return (
    <div className="App">
      <Router>
        <FloatingButton />
        <AppNavbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard/*" element={userRole === "ADMIN" ? <AdminDashboard username={username} /> : <UserDashboard username={username}  />} />
            <Route path="/registro" element={<RegistrationForm />} />
            <Route path="/cuenta-creada" element={<RegistrationSuccessful />} />
            <Route path="/inicio-sesion" element={<LoginForm />} />
          </Routes>
        </div>
        <AppFooter />
      </Router>
    </div>
  );
}

export default App;
