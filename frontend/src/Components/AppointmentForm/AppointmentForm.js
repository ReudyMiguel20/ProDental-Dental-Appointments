import React, {useState} from 'react'
import './AppointmentForm.css'
import AppointmentProcedures from "../../Data/AppointmentProcedures";
import Popup  from 'reactjs-popup';

const AppointmentForm = ({ onSuccess }) => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [procedure, setProcedure] = useState("");
    const dentist = "Odontologist";
    const location = "Universidad UFHEC";
    const [isAppointmentSuccessful, setIsAppointmentSuccessful] = useState(false);


    // Reverse the object so that we can use the values as keys and
    // the keys as values in the select input for procedures
    const reverseAppointmentProcedures = Object.entries(AppointmentProcedures)
        .reduce((acc, [key, value]) => {
        acc[value] = key;
        return acc;
    }, {});


    // Function to handle the form submission
    const handleSubmit = async (event) => {
        event.preventDefault();

        const appointmentInfo = {
            appointment_date: date,
            appointment_time: time,
            procedure: reverseAppointmentProcedures[procedure],
            dentist,
            location
        }

        // Send appointment info to the server to be stored in the database
        try {
            const response = await fetch(
                "http://localhost:8080/api/v1/appointment/create",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + localStorage.getItem("token")
                    },
                    body: JSON.stringify(appointmentInfo),
                },
            );

            console.log(response);

            // If the response is not ok, throw an error
            if (!response.ok) {

            } else {
                onSuccess();
            }


        } catch (error) {

        }

    }




    return (
        <div className="appointment-form-container">
            <div className="appointment-form-content">



                <div className="appointment-form-title" style={{marginBottom: "50px"}}>
                    <img src="https://img.icons8.com/ios/50/000000/calendar.png"/>
                    <h3>Agendar Cita</h3>
                </div>

                <form>
                    <div className="input-container">
                        <label htmlFor="appointment-date">Fecha para la Cita:</label>
                        <input
                            type="date"
                            id="appointment-date"
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>

                    <div className="input-container">
                        <label htmlFor="appointment-time">Hora para la Cita:</label>
                        <input
                            type="time"
                            id="appointment-time"
                            onChange={(e) => setTime(e.target.value)}
                        />
                    </div>


                    <div className="input-container">
                        <label htmlFor="procedures">Procedimiento:</label>
                        <select
                            id="procedures"
                            onChange={(e) => setProcedure(e.target.value)}
                        >
                            {Object.values(AppointmentProcedures).map((procedure, index) => (
                                <option key={index} value={procedure}>{procedure}</option>
                            ))}
                        </select>
                    </div>

                    <div className="input-container">
                        <label htmlFor="ondontologist">Odontologa:</label>
                        <input type="text" disabled={true} placeholder="Odontologa" id="odontologist"/>
                    </div>

                    <div className="input-container">
                        <label htmlFor="location">Lugar:</label>
                        <input type="text" disabled={true} placeholder="Universidad UFHEC" id="location"/>
                        <Popup
                            trigger={<p style={{marginLeft: "50px", cursor: "pointer"}}>Como Llegar?</p>}
                            position="right center"
                            on="hover"
                        >
                            <iframe
                                title="location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6364.827628666636!2d-69.97963801751908!3d18.45876848189089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ea561e7a24d7551%3A0x8937bdd9390739bb!2sUniversidad%20Federico%20Henr%C3%ADquez%20y%20Carvajal%20(UFHEC)!5e0!3m2!1ses!2sdo!4v1708835159559!5m2!1ses!2sdo"
                                width="600"
                                height="450"
                                style={{border: 0}}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </Popup>
                    </div>


                    <button
                        onClick={handleSubmit}
                        className="button-form"
                    >
                        Agendar Cita
                    </button>

                </form>
            </div>
        </div>
    )
}

export default AppointmentForm