import React, {useState} from 'react'
import "./FloatingButton.css"
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ModalContactButton from "../ModalContactButton/ModalContactButton";

const FloatingButton = () => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    }



  return (
      <>
      <button className="floating-button" onClick={toggleModal}>
          <FontAwesomeIcon icon={faPhone} color="white" size="2x"/>
      </button>
      <ModalContactButton show={showModal} closeModal={toggleModal} />
      </>
  )
}

export default FloatingButton