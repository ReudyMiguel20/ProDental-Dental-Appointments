import React from 'react'
import Table from 'react-bootstrap/Table';
import "./CurrentAppointments.css";
import {useQuery} from "react-query";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDeleteLeft, faEraser} from "@fortawesome/free-solid-svg-icons";


const CurrentAppointments = () => {

    // // use react query here
    // const {data} = useQuery({
    //     queryKey: ["todo"],
    //     queryFn: () =>
    //         fetch("http://localhost:8080/api/v1/appointment/appointments?username").then((res) =>
    //             res.json()
    //         ),
    // });

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

    const { data, status } = useQuery({
        queryKey: "appointments",
        queryFn: fetchAppointments
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
                {data.map((appointments, index) => (
                    <tr key={index}>
                    <td>{index + 1}</td>
                        <td>{appointments.status}</td>
                        <td>{appointments.appointment_date}</td>
                        <td>{appointments.appointment_time}</td>
                        <td>{appointments.procedure}</td>
                        <td>{appointments.dentist}</td>
                        <td>{appointments.location}</td>
                        <td><button><FontAwesomeIcon icon={faDeleteLeft} /></button></td>
                    </tr>
                ))}
                </tbody>

            </Table>
            </>
        )};


    </div>
  )
}

export default CurrentAppointments