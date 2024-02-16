import React from "react";
import "./ModalContactButton.css";

const ModalContactButton = ({ show, closeModal }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={closeModal}>X</button>
        <h2 className="modal-name">John Doe</h2>
        <hr />
        <p className="modal-phone">Phone: +18297916935</p>
      </div>
    </div>
  );
};

export default ModalContactButton;
