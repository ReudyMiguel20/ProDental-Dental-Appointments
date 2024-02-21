import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import UserPhoto from "../../Assets/user-photo.png";

const Sidebar = ({ items }) => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-title">
        <h5>Dashboard</h5>
      </div>
        
      <div className="sidebar-logo-user">
        <div className="user-avatar-container">
          <img src={UserPhoto} />
        </div>
        <h5>Bienvenido, user</h5>
      </div>

      <div className="sidebar-elements">
        <ul>
          {items.map((item, index) => (
            <Link to={item.path} key={index} style={{textDecoration: "none"}}>
                <li className="row"><div className="icon">{item.icon}</div> <div className="title">{item.title}</div></li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
