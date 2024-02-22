import React from "react";
import AppNavbar from "../Components/AppNavbar/AppNavbar";
import HeroBanner from "../Components/HeroBanner/HeroBanner";
import { InformationCardData } from "../Data/InformationCardData";
import InformationCard from "../Components/InformationCard/InformationCard";
import ImageForm from "../Components/ImageForm/ImageForm";
import ContactUs from "../Components/ContactUs/ContactUs";

const Home = () => {
  return (
    <div className="home">
      <HeroBanner />

      <div className="information-card">
        {InformationCardData.map((item, index) => (
          <InformationCard
            key={index}
            icon={item.icon}
            title={item.title}
            firstDescription={item.firstDescription}
            secondDescription={item.secondDescription}
            buttonText={item.buttonText}
          />
        ))}
      </div>

      <ImageForm />
      <ContactUs />
    </div>
  );
};

export default Home;
