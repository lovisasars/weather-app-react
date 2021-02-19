import "./App.css";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Forecast from "./Forecast";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <br />
      <Header />
      <h2>Stockholm</h2>
      <h3>Monday 12:25</h3>
      <h1>
        <img
          src="http://openweathermap.org/img/wn/02d@2x.png"
          alt="weatherIcon"
        />
        1
        <span className="Units">
          <a href="#" className="active">
            {" "}
            °C
          </a>{" "}
          |<a href="#">°F</a>
        </span>
      </h1>
      <p className="Hum-wind">
        Humidity: 86 % <br />
        Windspeed: 1 km/h
      </p>
      <br />
      <Forecast />
      <Footer />
      <br />
    </div>
  );
}
