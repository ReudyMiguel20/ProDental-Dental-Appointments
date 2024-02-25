import React, {useEffect, useState} from "react";
import "./Sidebar.css";
import { Link, useNavigate } from "react-router-dom";
import UserPhoto from "../../Assets/user-photo.png";

const Sidebar = ({ items, username }) => {
    // const [localUsername, setLocalUsername] = useState(username);
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  const clickToDashboard = () => {
    navigate("/dashboard");
  };

  // useEffect(() => {
  //     setLocalUsername(username);
  //   }, [username]);

  return (
    <div className="sidebar-container">
      <div className="sidebar-title" onClick={clickToDashboard}>
        <h5>Dashboard</h5>
      </div>

      <div className="sidebar-logo-user">
        <div className="user-avatar-container">
          <img src={UserPhoto} />
        </div>
        <h5>Bienvenido, {username}</h5>
      </div>

      <div className="sidebar-elements">
        <ul>
          {items.map((item, index) => (
            <Link to={item.path} key={index} style={{ textDecoration: "none" }}>
              <li
                key={index}
                className="row"
                id={window.location.pathname == item.path ? "active" : ""}
                onClick={() => {
                  handleClick(item.path);
                }}
              >
                <div className="icon">{item.icon}</div>{" "}
                <div className="title">{item.title}</div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
