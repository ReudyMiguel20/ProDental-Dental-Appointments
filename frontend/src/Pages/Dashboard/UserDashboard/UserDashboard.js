import React from 'react'
import "./UserDashboard.css"
import Sidebar from "../../../Components/Sidebar/Sidebar";
import { userItems } from "../../../Data/UserSidebarData";

const UserDashboard = () => {
  return (
    <div className="user-dashboard-container">
        <Sidebar items={userItems}/>
    </div>
  )
}

export default UserDashboard