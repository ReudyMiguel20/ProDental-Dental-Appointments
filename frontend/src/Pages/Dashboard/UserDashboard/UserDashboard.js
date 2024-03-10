import React from "react";
import "./UserDashboard.css";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import {userItems} from "../../../Data/UserSidebarData";
import {Route, Routes} from "react-router-dom";
import Contact from "../../Contact";
import Profile from "../../../Components/Profile/Profile";
import AppointmentPage from "../../AppointmentPage/AppointmentPage";
import CurrentAppointments from "../../../Components/CurrentAppointments/CurrentAppointments";
import HistoryAppointments from "../../../Components/HistoryAppointments/HistoryAppointments";

const UserDashboard = ({ username }) => {
  return (
    <div className="user-dashboard-container">
      <Sidebar items={userItems} username={username} />

      <div className="dashboard-content">
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/hacer-cita" element={<AppointmentPage />} />
          <Route path="/perfil" element={<Profile />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/citas" element={<CurrentAppointments />} />
          <Route path="/historial" element={<HistoryAppointments />} />
        </Routes>
      </div>
    </div>
  );
};

export default UserDashboard;
