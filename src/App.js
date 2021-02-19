import "./App.css";
import React from "react";
import Footer from "./Footer";
import Forecast from "./Forecast";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <br />
      
   
      <Forecast defaultCity="New York"/>
      <Footer />
      <br />
    </div>
  );
}
