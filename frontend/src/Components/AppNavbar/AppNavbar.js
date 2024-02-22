import React from "react";
import "./AppNavbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../Assets/Pro-Dental.png";

const AppNavbar = () => {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            style={{ width: "40px", height: "40px", backgroundColor: "blue" }}
            alt="logo"
          />
          <span className="logo-title">Pro Dental</span>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Inicio</Nav.Link>
          <Nav.Link href="#features">Registrarse</Nav.Link>
          <Nav.Link href="#pricing">Nosotros</Nav.Link>
          <Nav.Link href="/contact">Contacto</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
