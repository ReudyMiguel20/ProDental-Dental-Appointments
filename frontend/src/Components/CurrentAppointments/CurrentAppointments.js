import React, {useEffect} from 'react'
import Table from 'react-bootstrap/Table';
import "./CurrentAppointments.css";
import {useQuery, useMutation, useQueryClient} from "react-query";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDeleteLeft, faEraser} from "@fortawesome/free-solid-svg-icons";


const CurrentAppointments = () => {
    const queryClient = useQueryClient();

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
    };

    // function to delete an appointment from the list of appointments return a promise to be used in the useMutation hook
    const deleteAppointment = (id) => {
        return fetch("http://localhost:8080/api/v1/appointment/" + id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token"),
            }
        }).then((res) => {
            if (!res.ok) {
                throw new Error("Network response was not ok");
            }
        });
    }

    const {data, status} = useQuery({
        queryKey: "appointments",
        queryFn: fetchAppointments
    });

    // mutate function to delete an appointment from the list of appointments and update the UI
    const { mutate } = useMutation(deleteAppointment, {
        onSuccess: () => {
            queryClient.invalidateQueries('appointments');
        },
    });

    return (
        <div className="appointments-container">
            {status === "loading" && <div>Loading...</div>}
            {status === "error" && <div>Error fetching data</div>}
            {status === "success" && (
                <>
                    <h1>Citas Actuales</h1>
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
                            <th>Borrar</th>
                        </tr>
                        </thead>

                        <tbody>
                        {data.filter(appointment => appointment.status === "PENDIENTE" || appointment.status === "AGENDADA")
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
                                        <td>
                                            <button onClick={() => mutate(appointment.id)}><FontAwesomeIcon
                                                icon={faDeleteLeft}/></button>
                                        </td>
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

export default CurrentAppointments