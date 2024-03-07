import React from 'react'
import "./ModalUserInfo.css"

const ModalUserInfo = ({ user, closeModal }) => {
  return (
    <div className="modal-background">
        <div className="modal-content">
            <div className="title">
                <h1>Details User</h1>
            </div>

            <button className="close-button" onClick={closeModal}>
                X
            </button>

            <div className="user-info">
                <h4>First Name: </h4>
                <p>{user.first_name}</p>

                <h4>Last Name: </h4>
                <p>{user.last_name}</p>

                <h4>Date of Birth: </h4>
                <p>{user.date_of_birth}</p>

                <h4>Username: </h4>
                <p>{user.username}</p>

                <h4>Email: </h4>
                <p>{user.email}</p>

                <h4>Phone Number: </h4>
                <p>{user.phone_number}</p>

                <h4>Address: </h4>
                <p>{user.address}</p>

                <h4>Role: </h4>
                <p>{user.role}</p>
            </div>
        </div>
    </div>
  )
}

export default ModalUserInfo