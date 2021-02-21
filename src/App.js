import "./App.css";
import React from "react";
import Footer from "./Footer";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <br />
      
   
      <Weather defaultCity="New York"/>
      <Footer />
      <br />
    </div>
  );
}
