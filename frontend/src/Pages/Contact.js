import React, {useEffect} from "react";
import ContactUs from "../Components/ContactUs/ContactUs";

const Contact = () => {

    useEffect(() => {
        document.title = "Contacto - Pro Dental";
    }, []);

  return (
    <div>
      <ContactUs />
      <h5
        style={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: "30px",
        }}
      >
        Servicio de Chat y Correo para recibir respuestas en menos de 48 horas.
      </h5>
    </div>
  );
};

export default Contact;
