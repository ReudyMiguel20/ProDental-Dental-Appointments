import React from "react";
import herobanner from "../../Assets/Banner.png";
import "./HeroBanner.css";

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <img className="hero-banner-img" src={herobanner} alt="hero-banner" />

      <div className="hero-banner-text">
        <span className="hero-banner-text-one">Nosotros Cuidaremos</span>
        <span className="hero-banner-text-two">Tus Dientes</span>

        <div className="hero-banner-description">
          <span>Pro Dental ofrece una gama completa de servicios dentales</span>
          <span>tanto para adultos como niños.</span>
        </div>

        <div className="hero-appointment">
          <button>Agenda Tu Cita</button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
