import React from 'react'
import "./ModalConfirmation.css"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalConfirmation = ({ show, closeModal, deleteAppointmentMutation, appointmentId  }) => {
    if (!show) {
        return null;
    }

    const handleDelete = () => {
        if (deleteAppointmentMutation) {
            deleteAppointmentMutation.mutate({appointmentId: appointmentId});
        }
        closeModal();
    }

  return (
      <div
          className="modal show"
          style={{display: 'block', position: 'initial'}}
      >
          <div className="modal-dialog">
              <div className="modal-header">
                  <h5
                      className="modal-title"
                      style={{marginLeft: "85px"}}
                  >
                      Confirmación Para Borrar Cita
                  </h5>
                  <button
                      type="button"
                      className="close"
                      onClick={closeModal}
                      style={{backgroundColor: "#0D6EFD"}}
                  >
                      <span aria-hidden="true">&times;</span>
                  </button>
              </div>

              <div className="modal-body">
                  <p>
                      Desea borrar la cita de este usuario?
                      Los cambios no podran revertirse
                  </p>
              </div>

              <div className="modal-footer">
                  <Button variant="secondary" onClick={closeModal}>Cerrar</Button>
                  <Button variant="danger" onClick={handleDelete}>Borrar Cita</Button>
              </div>

          </div>
      </div>
  )
}

export default ModalConfirmation