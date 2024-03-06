import React from 'react'
import {useQuery} from "react-query";
import Table from "react-bootstrap/Table";
import "./HistoryAppointments.css";

const HistoryAppointments = () => {

    const fetchAppointments = async () => {
        const res = await fetch(
            "http://localhost:8080/api/v1/appointment/appointments?username",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("token"),
                }
            }
        );

        if (!res.ok) {
            throw new Error("Network response was not ok");
        }

        return res.json();
    }

    const {data, status } = useQuery({
        queryKey: "appointments",
        queryFn: fetchAppointments
    })


  return (
    <div className="history-appointments-container">
        <h1>Historial de Citas</h1>

        {status === "loading" && <div>Loading...</div>}
        {status === "error" && <div>Error fetching data</div>}
        {status === "success" && (
            <>
                <Table responsive>

                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Estado</th>
                        <th>Fecha</th>
                        <th>Hora</th>
                        <th>Procedimiento</th>
                        <th>Dentista</th>
                        <th>Lugar</th>
                        <th>Notas</th>
                    </tr>
                    </thead>

                    <tbody>
                    {data.filter(appointment => appointment.status === "COMPLETADA" || appointment.status === "CANCELADA" || appointment.status === "REPROGRAMADA")
                        .map((appointment, index) => {
                            console.log(appointment.id);

                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{appointment.status}</td>
                                    <td>{appointment.appointment_date}</td>
                                    <td>{appointment.appointment_time}</td>
                                    <td>{appointment.procedure}</td>
                                    <td>{appointment.dentist}</td>
                                    <td>{appointment.location}</td>
                                    <td>{appointment.notes}</td>
                                </tr>
                            );
                        })
                    }
                    </tbody>

                </Table>
            </>
        )}
    </div>
  )
}

export default HistoryAppointments