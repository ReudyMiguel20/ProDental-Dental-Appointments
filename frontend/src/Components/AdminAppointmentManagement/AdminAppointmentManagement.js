import React, {useState} from "react";
import "./AdminAppointmentManagement.css";
import {useMutation, useQuery, useQueryClient} from "react-query";
import Table from "react-bootstrap/Table";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ModalConfirmation from "../ModalConfirmation/ModalConfirmation";

const AdminAppointmentManagement = () => {
  // Variables
  const [showModal, setShowModal] = useState(false);
  const [appointmentId, setAppointmentId] = useState(null);
  const queryClient = useQueryClient();

  const toggleModal = () => {
    setShowModal(!showModal);
  }

  // Functions using the API

  const fetchAppointments = async () => {
    const response = await fetch(
      "http://localhost:8080/api/v1/admin/appointments",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      },
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return response.json();
  };

  const deleteAppointment = async ({ appointmentId }) => {
    const response = await fetch(
      "http://localhost:8080/api/v1/admin/appointments/" + appointmentId,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      },
    );
  };

  const setAppointmentScheduled = async ({ appointmentId }) => {
    const response = await fetch(
      "http://localhost:8080/api/v1/admin/appointments/scheduled/" +
        appointmentId,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      },
    );
  };

  const setAppointmentCanceled = async ({ appointmentId }) => {
    const response = await fetch(
      "http://localhost:8080/api/v1/admin/appointments/canceled/" +
        appointmentId,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      },
    );
  };

  const setAppointmentPending = async ({ appointmentId }) => {
    const response = await fetch(
      "http://localhost:8080/api/v1/admin/appointments/pending/" +
        appointmentId,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      },
    );
  };

  const setAppointmentCompleted = async ({ appointmentId }) => {
    const response = await fetch(
      "http://localhost:8080/api/v1/admin/appointments/completed/" +
        appointmentId,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      },
    );
  };

  const setAppointmentRescheduled = async ({ appointmentId }) => {
    const response = await fetch(
      "http://localhost:8080/api/v1/admin/appointments/rescheduled/" +
        appointmentId,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      },
    );
  };

  const deleteAppointmentMutation = useMutation(deleteAppointment, {
    onSuccess: () => {
      queryClient.invalidateQueries("appointments");
      toast.success("Appointment deleted successfully");
    },
  });

  const setAppointmentScheduledMutation = useMutation(setAppointmentScheduled, {
    onSuccess: () => {
      queryClient.invalidateQueries("appointments");
      toast.success("Cita cambiada a estado \"AGENDADA\"")
    },
  });

  const setAppointmentCanceledMutation = useMutation(setAppointmentCanceled, {
    onSuccess: () => {
      queryClient.invalidateQueries("appointments");
      toast.success("Cita cambiada a estado \"CANCELADA\"")
    },
  });

  const setAppointmentPendingMutation = useMutation(setAppointmentPending, {
    onSuccess: () => {
      queryClient.invalidateQueries("appointments");
      toast.success("Cita cambiada a estado \"PENDIENTE\"")
    },
  });

  const setAppointmentCompletedMutation = useMutation(setAppointmentCompleted, {
    onSuccess: () => {
      queryClient.invalidateQueries("appointments");
      toast.success("Cita cambiada a estado \"COMPLETADA\"")
    },
  });

  const setAppointmentRescheduledMutation = useMutation(
    setAppointmentRescheduled,
    {
      onSuccess: () => {
        queryClient.invalidateQueries("appointments");
        toast.success("Cita cambiada a estado \"REPROGRAMADA\"")
      },
    },
  );

  // UseQuery hook to fetch data from the API
  const { data, status } = useQuery({
    queryKey: "appointments",
    queryFn: fetchAppointments,
  });

  const handleSelectChange = async (event, appointment) => {
    switch (event.target.value) {
      case "AGENDADA":
        await setAppointmentScheduledMutation.mutate({
          appointmentId: appointment.id,
        });
        break;
      case "CANCELADA":
        await setAppointmentCanceledMutation.mutate({
          appointmentId: appointment.id,
        });
        break;
      case "PENDIENTE":
        await setAppointmentPendingMutation.mutate({
          appointmentId: appointment.id,
        });
        break;
      case "COMPLETADA":
        await setAppointmentCompletedMutation.mutate({
          appointmentId: appointment.id,
        });
        break;
      case "REPROGRAMADA":
        await setAppointmentRescheduledMutation.mutate({
          appointmentId: appointment.id,
        });
        break;
      default:
        console.log("No matching appointment status found");
    }
  };

  return (
    <div className="admin-appointment-management-container">
      <ToastContainer />
      {status === "loading" && <div>Loading...</div>}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <div>
          <h2>Citas de los Usuarios</h2>

          <Table responsive>
            <thead>
              <tr>
                <th>Usuario</th>
                <th>Dia</th>
                <th>Hora</th>
                <th>Procedimiento</th>
                <th>Estado</th>
                <th>Accion</th>
                <th>Borrar</th>
              </tr>
            </thead>

            <tbody>
              {data.map((appointment) => (
                <tr key={appointment.appointmentId}>
                  <td>{appointment.user}</td>
                  <td>{appointment.appointment_date}</td>
                  <td>{appointment.appointment_time}</td>
                  <td>{appointment.procedure}</td>
                  <td>{appointment.status}</td>
                  <td>
                    <select
                      value={appointment.status}
                      onChange={(event) =>
                        handleSelectChange(event, appointment)
                      }
                    >
                      <option value="AGENDADA">Agendada</option>
                      <option value="PENDIENTE">Pendiente</option>
                      <option value="COMPLETADA">Completada</option>
                      <option value="REPROGRAMADA">Reprogramada</option>
                      <option value="CANCELADA">Cancelada</option>
                    </select>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                          setAppointmentId(appointment.id)
                          setShowModal(true)
                      }}
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>

      )}
      {showModal &&
          <ModalConfirmation
              show={showModal}
              closeModal={toggleModal}
              deleteAppointmentMutation={deleteAppointmentMutation}
              appointmentId={appointmentId}
      />
      }
    </div>
  );
};

export default AdminAppointmentManagement;
