import React from 'react'
import "./AdminAppointmentManagement.css"
import {useMutation, useQuery} from "react-query";

const AdminAppointmentManagement = () => {
    // Variables
    const [showModal, setShowModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const queryClient = useQueryClient();

    // Functions using the API

    const fetchAppointments = async () => {
        const response = await fetch(
            "http://localhost:8080/api/v1/admin/appointments",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            }
        )

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        return response.json()
    }

    const deleteAppointment = async ({appointmentId}) => {
        const response = await fetch(
            "http://localhost:8080/api/v1/admin/appointments" + appointmentId,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("token"),
                }
            }
        )
    }

    const setAppointmentScheduled = async ({appointmentId}) => {
        const response = await fetch(
            "http://localhost:8080/api/v1/admin/appointments/scheduled/" + appointmentId,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            }
        )
    }

    const setAppointmentCanceled = async ({appointmentId}) => {
        const response = await fetch(
            "http://localhost:8080/api/v1/admin/appointments/canceled/" + appointmentId,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            }
        )
    }

    const setAppointmentPending = async ({appointmentId}) => {
        const response = await fetch(
            "http://localhost:8080/api/v1/admin/appointments/pending/" + appointmentId,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            }
        )
    }

    const setAppointmentCompleted = async ({appointmentId}) => {
        const response = await fetch(
            "http://localhost:8080/api/v1/admin/appointments/completed/" + appointmentId,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            }
        )
    }

    const setAppointmentRescheduled = async ({appointmentId}) => {
        const response = await fetch (
            "http://localhost:8080/api/v1/admin/appointments/rescheduled/" + appointmentId,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            }
        )
    }

    const deleteAppointmentMutation = useMutation(deleteAppointment, {
        onSuccess: () => {
            queryClient.invalidateQueries("appointments")
        }
    })

    const setAppointmentScheduledMutation = useMutation(setAppointmentScheduled, {
        onSuccess: () => {
            queryClient.invalidateQueries("appointments")
        }
    })

    const setAppointmentCanceledMutation = useMutation(setAppointmentCanceled, {
        onSuccess: () => {
            queryClient.invalidateQueries("appointments")
        }
    })

    // UseQuery hook to fetch data from the API
    const {data, status} = useQuery({
        queryKey: "appointments",
        queryFn: fetchAppointments
    })


    return (
        <div className="admin-appointment-management-container">

        </div>
    )
}

export default AdminAppointmentManagement