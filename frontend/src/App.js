import React, {useEffect, useState} from "react";
import AppNavbar from "./Components/AppNavbar/AppNavbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppFooter from "./Components/AppFooter/AppFooter";
import FloatingButton from "./Components/FloatingButton/FloatingButton";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import UserDashboard from "./Pages/Dashboard/UserDashboard/UserDashboard";
import RegistrationForm from "./Components/RegistrationForm/RegistrationForm";
import RegistrationSuccessful from "./Components/RegistrationSuccessful/RegistrationSuccessful";
import LoginForm from "./Components/LoginForm/LoginForm";
import {jwtDecode} from "jwt-decode";
import AdminDashboard from "./Pages/Dashboard/AdminDashboard/AdminDashboard";
import ModalUserInfo from "./Components/ModalUserInfo/ModalUserInfo";
import ModalConfirmation from "./Components/ModalConfirmation/ModalConfirmation";
import NotFound from "./Components/NotFound/NotFound";

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
      console.log(userRole);
    }
  }, []);

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
            <Route
              path="/dashboard/*"
              element={
              userRole ? (
                userRole === "ADMIN" ? (
                  <AdminDashboard username={username} />
                ) : (
                  <UserDashboard username={username} />
                )
                ) : (
                    <Navigate to="/inicio-sesion" />
                )
              }
            />
            <Route path="/registro" element={<RegistrationForm />} />
            <Route path="/cuenta-creada" element={<RegistrationSuccessful />} />
            <Route path="/inicio-sesion" element={<LoginForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <AppFooter />
      </Router>
    </div>
  );
}

export default App;
