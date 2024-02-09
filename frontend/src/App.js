import React from "react";
import AppNavbar from "./Components/AppNavbar/AppNavbar";
import HeroBanner from "./Components/HeroBanner/HeroBanner"
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import InformationCard from "./Components/InformationCard/InformationCard";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <HeroBanner />
      <InformationCard />
    </div>
  );
}

export default App;
