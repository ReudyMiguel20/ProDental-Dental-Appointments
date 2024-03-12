import React, {useEffect} from "react";
import "./RegistrationSuccessful.css";
import {useNavigate} from "react-router-dom";

const RegistrationSuccessful = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    // This will clear Timeout when component unmount like in willComponentUnmount
    return () => {
      clearTimeout(timer);
    };
  }, [navigate]);

  useEffect(() => {
    document.title = "Registro - Pro Dental";
  }, []);

  return (
    <div className="registration-notice-container">
      <div className="registration-notice">
        <h4 style={{ marginBottom: "20px" }}>Cuenta Creada con Exito</h4>
        <p>
          Tu cuenta sera activada por un administrador en menos de 24 horas.
        </p>
        <p>Recibiras un correo con la confirmacion de tu cuenta.</p>
        <hr></hr>
        <p>
          Seras redirigido a la pagina de inicio en 5 segundos.
          <br />
          Si no eres redirigido, haz click <a href="/">aqui</a>
        </p>
      </div>
    </div>
  );
};

export default RegistrationSuccessful;
