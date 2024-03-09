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
import AdminUserManagement from "../../../Components/AdminUserManagement/AdminUserManagement";
import AdminAppointmentManagement from "../../../Components/AdminAppointmentManagement/AdminAppointmentManagement";

const AdminDashboard = ({ username }) => {
  return (
      <div className="admin-dashboard-container">
          <Sidebar items={adminItems} username={username}/>

          <div className="dashboard-content">
              <Routes>
                  <Route path="/" element={<Profile/>}/>
                  <Route path="/administrar-usuarios" element={<AdminUserManagement />}/>
                  <Route path="/perfil" element={<Profile/>}/>
                  <Route path="/administar-citas" element={<AdminAppointmentManagement />}/>
                  <Route path="/citas" element={<CurrentAppointments/>}/>
                  <Route path="/historial" element={<HistoryAppointments/>}/>
              </Routes>
          </div>
      </div>
  )
};

export default AdminDashboard;
