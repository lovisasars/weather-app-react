import "./App.css";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Forecast from "./Forecast";

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
          id="icon"
        />
        <span id="temp-number">1</span>
        <span className="Units">
          <a href="#" id="celsius-link" className="active">
            {" "}
            °C
          </a>{" "}
          |
          <a href="#" id="fahrenheit-link">
            °F
          </a>
        </span>
      </h1>
      <p className="Hum-wind">
        Humidity: <span id="humidity">86</span>% <br />
        Windspeed: <span id="windspeed">1</span> km/h
      </p>
      <br />
      <Forecast />
      <Footer />
      <br />
    </div>
  );
}
