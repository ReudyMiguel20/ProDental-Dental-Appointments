import React from "react";
import "./InformationCard.css";


const InformationCard = () => {
  return (
    <div className="information-card-container">
      <div className="information-card-main">
        <div className="information-card-icon">
          <img src={} alt=""/>
          Icon Here
        </div>

        <div className="information-card-title">
          <h3>BButi Grande gigante redonde</h3>
        </div>

        <div className="information-card-description">
          <p>Description here</p>
        </div>

        <div className="information-card-button">
          <button>button here</button>
        </div>
      </div>
    </div>
  );
};

export default InformationCard;
