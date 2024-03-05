import React from 'react'
import Table from 'react-bootstrap/Table';

const CurrentAppointments = ({ appointments }) => {
  return (
    <div>
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

    </div>
  )
}

export default CurrentAppointments