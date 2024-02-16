import React from "react";
import AppNavbar from "./Components/AppNavbar/AppNavbar";
import HeroBanner from "./Components/HeroBanner/HeroBanner";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import InformationCard from "./Components/InformationCard/InformationCard";
import { InformationCardData } from "./Data/InformationCardData";
import ImageForm from "./Components/ImageForm/ImageForm";
import ContactUs from "./Components/ContactUs/ContactUs";
import AppFooter from "./Components/AppFooter/AppFooter";
import FloatingButton from "./Components/FloatingButton/FloatingButton";

function App() {
  return (
      <div className="App">
          <FloatingButton />
          <AppNavbar/>
          <HeroBanner/>

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

          <ImageForm/>
          <ContactUs/>
          <AppFooter/>
      </div>
  );
}

export default App;