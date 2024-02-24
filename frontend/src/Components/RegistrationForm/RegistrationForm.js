import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegistrationForm.css";
import Spinner from "react-bootstrap/Spinner";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [registrationSuccessful, setRegistrationSuccessful] = useState(false);

  const navigate = useNavigate();

  function spinnerSuccess() {
    return (
      <div className="spinner-container">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newUserData = {
      first_name: firstName,
      last_name: lastName,
      date_of_birth: birthDate,
      username,
      email,
      phone_number: phoneNumber,
      address,
      password,
    };

    setRegistrationSuccessful(true);

    try {
      const response = await fetch(
        "http://localhost:8080/api/v1/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUserData),
        },
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        setRegistrationSuccessful(true);
      }
    } catch (error) {
      setRegistrationSuccessful(false);
      console.error("Error:", error);
    } finally {
      setTimeout(() => {
        setRegistrationSuccessful(false);
        navigate("/cuenta-creada");
      }, 2000);
    }
  };

  return (
    <div className="registration-form-container">
      <div className="form-container">
        <h3>Crear nuevo usuario</h3>

        <form>
          <h5>Nombre:</h5>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <h5>Apellidos:</h5>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <h5>Fecha de Nacimiento:</h5>
          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />

          <h5>Correo:</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Numero de Telefono:</h5>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />

          <h5>Dirección:</h5>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <h5>Nombre de Usuario:</h5>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <h5>Contraseña:</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="button-form" onClick={handleSubmit}>
            Crear nueva cuenta
          </button>
        </form>

        {registrationSuccessful && spinnerSuccess()}
      </div>
    </div>
  );
};

export default RegistrationForm;
