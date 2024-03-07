import React from "react";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import {adminItems} from "../../../Data/AdminSidebarData";
import "./AdminDashboard.css";
import {Route, Routes} from "react-router-dom";
import Profile from "../../../Components/Profile/Profile";
import AppointmentPage from "../../AppointmentPage/AppointmentPage";
import Contact from "../../Contact";
import CurrentAppointments from "../../../Components/CurrentAppointments/CurrentAppointments";
import HistoryAppointments from "../../../Components/HistoryAppointments/HistoryAppointments";

const AdminDashboard = ({ username }) => {
  return (
      <div className="admin-dashboard-container">
          <Sidebar items={adminItems} username={username}/>

          <div className="dashboard-content">
              <Routes>
                  <Route path="/" element={<Profile/>}/>
                  <Route path="/hacer-cita" element={<AppointmentPage/>}/>
                  <Route path="/perfil" element={<Profile/>}/>
                  <Route path="/contacto" element={<Contact/>}/>
                  <Route path="/citas" element={<CurrentAppointments/>}/>
                  <Route path="/historial" element={<HistoryAppointments/>}/>
              </Routes>
          </div>
      </div>
  )
};

export default AdminDashboard;
