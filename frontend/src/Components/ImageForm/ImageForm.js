import React from "react";
import "./ImageForm.css";
import womanPhoto from "../../Assets/woman.png"

const ImageForm = () => {
  return (
  <div className="image-form-container">
    <div className="image-form-info" style={{maxWidth: "600px"}}>
        <h2>Mas de 5 Años <br/>
            de Trabajo Honesto</h2>
        <h4>Pro Dental está abierto para usted!</h4>

        <br/>
        <hr style={{borderTop: "8px solid #0D6EFD", borderRadius: "10%"}}/>

        <p>Nuestra clínica se complace en brindar a nuestros pacientes ayuda dental calificada.
            Para muchas personas acudir al dentista siempre es un estrés  ¡pero aquí en Pro Dental te olvidarás de cualquier problema! Miles de pacientes obtuvieron una nueva y hermosa sonrisa gracias a nuestra clínica dental y a nuestros médicos.</p>
    </div>
    <div className="image-form-image">
        <img src={womanPhoto} alt="woman" />
    </div>
  </div>
  );
};

export default ImageForm;
