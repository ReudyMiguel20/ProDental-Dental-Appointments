import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>Contacto</h2>
        <h4>¡Estamos aquí para ayudarte!</h4>

        <br />
        <hr style={{ borderTop: "8px solid #0D6EFD", borderRadius: "10%" }} />

        <form>
          <input type="text" placeholder="Nombre" />
          <input type="text" placeholder="Correo" />
          <input type="text" placeholder="Asunto" />
          <textarea placeholder="Mensaje" />
          <button>Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
