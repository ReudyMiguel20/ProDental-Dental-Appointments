import React, { useState } from "react";
import "./AppointmentPage.css";
import AppointmentForm from "../../Components/AppointmentForm/AppointmentForm";

const AppointmentPage = () => {
  const [isAppointmentSuccessful, setIsAppointmentSuccessful] = useState(false);

  const handleSuccess = () => {
    setIsAppointmentSuccessful(true);
  };

  const AppointmentStatus = () => {
    return (
      <div className="appointment-status-container">
        <h4 style={{ textAlign: "center" }}>
          La cita se ha creado correctamente.
        </h4>
        <hr />
        <h5 style={{ textAlign: "center", marginTop: "35px" }}>
          Su cita esta en estado ''Pendiente'', pronto se le notificara si su
          cita ha sido "Agendada" via correo electronico.
        </h5>
      </div>
    );
  };

  return (
    <div className="appointment-page-container">
      <div className="appointment-content">
        {isAppointmentSuccessful ? (
          <AppointmentStatus />
        ) : (
          <AppointmentForm onSuccess={handleSuccess} />
        )}
      </div>
    </div>
  );
};

export default AppointmentPage;
