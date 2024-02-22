import React from "react";
import "./InformationCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";

const InformationCard = (props) => {
  return (
    <div className="information-card-container">
      <div className="information-card-main">
        <div className="information-card-icon">
          <div className="icon-border">
            <FontAwesomeIcon icon={props.icon} size="3x" />
          </div>
        </div>

        <div className="information-card-title">
          <h3>{props.title}</h3>
        </div>

        <div className="information-card-description">
          <p style={{ textAlign: "center" }}>
            {props.firstDescription} <br />
            {props.secondDescription}
          </p>
        </div>

        <div className="information-card-button">
          <button>{props.buttonText}</button>
        </div>
      </div>
    </div>
  );
};

export default InformationCard;
