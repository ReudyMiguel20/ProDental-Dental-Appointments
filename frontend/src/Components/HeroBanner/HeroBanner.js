import React from "react";
import herobanner from "../../Assets/Banner.png";
import "./HeroBanner.css";

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <img src={herobanner} alt="hero-banner" />
    </div>
  );
};

export default HeroBanner;
