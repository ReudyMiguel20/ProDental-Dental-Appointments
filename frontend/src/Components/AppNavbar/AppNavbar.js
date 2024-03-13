import React, {useState} from "react";
import "./AppNavbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../Assets/Pro-Dental.png";

const AppNavbar = () => {
  const [user, setUser] = useState(localStorage.getItem("user") || null);
  const [userLoggedIn, setUserLoggedIn] = useState(localStorage.getItem("userLoggedIn") || false);

  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
    setUserLoggedIn(false);
  }

  return (
      <Navbar bg="primary" data-bs-theme="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
                src={logo}
                style={{ width: "40px", height: "40px", backgroundColor: "blue" }}
                alt="logo"
            />
            <span className="logo-title">Pro Dental</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Inicio</Nav.Link>
              {!userLoggedIn && <Nav.Link href="/registro">Registrarse</Nav.Link>}
              <Nav.Link href="#pricing">Nosotros</Nav.Link>
              <Nav.Link href="/contact">Contacto</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <div className="right-options">
                {!userLoggedIn && <Nav.Link href="/inicio-sesion">Iniciar Sesión</Nav.Link>}

                {userLoggedIn && (
                    <>
                      <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                      <p>|</p>
                      <Nav.Link href="/" onClick={handleLogout}>Cerrar Sesión</Nav.Link>
                    </>
                )}

              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default AppNavbar;