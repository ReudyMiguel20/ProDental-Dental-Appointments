import React from 'react'
import Table from 'react-bootstrap/Table';

const CurrentAppointments = () => {
  return (
    <div>
        {/*<Table striped bordered hover>*/}
        {/*    <thead>*/}
        {/*    <tr>*/}
        {/*        <th>#</th>*/}
        {/*        <th>Estado</th>*/}
        {/*        <th>Fecha</th>*/}
        {/*        <th>Hora</th>*/}
        {/*        <th>Procedimiento</th>*/}
        {/*        <th>Dentista</th>*/}
        {/*        <th>Lugar</th>*/}
        {/*    </tr>*/}
        {/*    </thead>*/}
        {/*    <tbody>*/}
        {/*    <tr>*/}
        {/*        <td>1</td>*/}
        {/*        <td>Mark</td>*/}
        {/*        <td>Otto</td>*/}
        {/*        <td>@mdo</td>*/}
        {/*    </tr>*/}
        {/*    <tr>*/}
        {/*        <td>2</td>*/}
        {/*        <td>Jacob</td>*/}
        {/*        <td>Thornton</td>*/}
        {/*        <td>@fat</td>*/}
        {/*    </tr>*/}
        {/*    <tr>*/}
        {/*        <td>3</td>*/}
        {/*        <td>Jacob</td>*/}
        {/*        <td>Thornton</td>*/}
        {/*        <td>@fat</td>*/}
        {/*    </tr>*/}
        {/*    </tbody>*/}
        {/*</Table>*/}

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