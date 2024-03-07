import React from 'react'
import "./AdminUserManagement.css"
import {useQuery} from "react-query";

const AdminUserManagement = () => {

    const fetchUsers = async () => {
        const response = await fetch(
            "http://localhost:8080/api/v1/admin/users",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("token"),
                }
            }
        )

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        return response.json();
    }

    const {data, status} = useQuery({
        queryKey: "users",
        queryFn: fetchUsers
    });

    return (
        <div className="admin-user-management-container">
            {/*{status === "loading" && <div>Loading...</div>}*/}
            {/*{status === "error" && <div>Error fetching data</div>}*/}
            {/*{status === "success" && (*/}
                <div>
                    <h2>Users</h2>
                    {/*<table>*/}
                    {/*    <thead>*/}
                    {/*    <tr>*/}
                    {/*        <th>Username</th>*/}
                    {/*        <th>Role</th>*/}
                    {/*    </tr>*/}
                    {/*    </thead>*/}
                    {/*    <tbody>*/}
                    {/*    {data.map((user) => (*/}
                    {/*        <tr key={user.username}>*/}
                    {/*            <td>{user.username}</td>*/}
                    {/*            <td>{user.role}</td>*/}
                    {/*        </tr>*/}
                    {/*    ))}*/}
                    {/*    </tbody>*/}
                    {/*</table>*/}
                </div>
        < /div>
    )
}


export default AdminUserManagement