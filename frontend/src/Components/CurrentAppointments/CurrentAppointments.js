import React from 'react'
import Table from 'react-bootstrap/Table';
import {useQuery} from "react-query";

const CurrentAppointments = ({ appointments }) => {

    // // use react query here
    // const {data} = useQuery({
    //     queryKey: ["todo"],
    //     queryFn: () =>
    //         fetch("http://localhost:8080/api/v1/appointment/appointments?username").then((res) =>
    //             res.json()
    //         ),
    // });

    const fetchAppointments = async () => {
        const res = await fetch("http://localhost:8080/api/v1/appointment/appointments?username");

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
    <div>
        {status === "loading" && <div>Loading...</div>}
        {status === "error" && <div>Error fetching data</div>}
        {status === "success" && (
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
                <tr>
                    <td>1</td>
                    {Array.from({ length: 7 }).map((_, index) => (
                        <td key={index}>Table cell {index}</td>
                    ))}
                </tr>
                <tr>
                    <td>2</td>
                    {Array.from({ length: 7 }).map((_, index) => (
                        <td key={index}>Table cell {index}</td>
                    ))}
                </tr>
                <tr>
                    <td>3</td>
                    {Array.from({ length: 7 }).map((_, index) => (
                        <td key={index}>Table cell {index}</td>
                    ))}
                </tr>
                </tbody>
            </Table>
        )};


    </div>
  )
}

export default CurrentAppointments