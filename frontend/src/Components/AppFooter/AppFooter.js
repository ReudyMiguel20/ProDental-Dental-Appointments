import React from "react";
import "./AppFooter.css";

const AppFooter = () => {
  return (
    <div className="footer-container">
      <div className="footer-about">
        <h4>Acerca de</h4>
        <p>
          Estamos comprometidos con la excelencia en la atención odontológica
          desde el momento en que abrimos nuestras puertas en 2019. Nuestra
          misión es brindar a nuestros pacientes una experiencia dental
          excepcional, combinando la última tecnología con un enfoque centrado
          en el paciente.
        </p>
      </div>
      <div className="footer-services">
        <h4>Servicios</h4>
        <ul>
          <li>Blanqueamiento Dental</li>
          <li>Endodoncia</li>
          <li>Implantes Dentales</li>
          <li>Ortodoncia</li>
          <li>Profilaxis Dental</li>
          <li>Prótesis Dental</li>
        </ul>
      </div>
      <div className="footer-socials">
        <h4>Redes Sociales</h4>
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
          <li>LinkedIn</li>
        </ul>
      </div>
      <div></div>
    </div>
  );
};

export default AppFooter;
