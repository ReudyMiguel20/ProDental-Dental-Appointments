import React from "react";
import "./InformationCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";

const InformationCard = () => {
  return (
    <div className="information-card-container">
      <div className="information-card-main">
        <div className="information-card-icon">

          <div className="icon-border">
            <FontAwesomeIcon icon={faCalendarCheck} size="3x" />
          </div>
        </div>

        <div className="information-card-title">
          <h3>Agenda Tu Cita</h3>
        </div>

        <div className="information-card-description">
          <p>Description hereDescription hereDescription hereDescription hereDescription hereDescription hereDescription hereDescription here</p>
        </div>

        <div className="information-card-button">
          <button>button here</button>
        </div>
      </div>
    </div>
  );
};

export default InformationCard;
