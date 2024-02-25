import React from "react";
import "./UserDashboard.css";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import { userItems } from "../../../Data/UserSidebarData";
import { Route, Routes } from "react-router-dom";
import Home from "../../Home";
import Contact from "../../Contact";
import Profile from "../../../Components/Profile/Profile";
import AppointmentPage from "../../AppointmentPage/AppointmentPage";

const UserDashboard = ({ username }) => {
  return (
    <div className="user-dashboard-container">
      <Sidebar items={userItems} username={username}/>

      <div className="dashboard-content">
        <Routes>
          <Route path="/" element={<Profile />} />
            <Route path="/hacer-cita" element={<AppointmentPage />}/>
          <Route path="/perfil" element={<Profile />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};

export default UserDashboard;
