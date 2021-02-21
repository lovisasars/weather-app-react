import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherTemp from "./WeatherTemp";

export default function Forecast(props) {
  
  const [weatherData, setWeatherData] = useState({ ready: false});
const [city, setCity] = useState (props.defaultCity);

  function handleResponse (response) {
   
  setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      humidity: Math.round(response.data.main.humidity),
      description: response.data.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
      date: new Date(response.data.dt * 1000)

  });
}


  function handleSubmit (event) {
event.preventDefault();
search();

  }

  function handleCityChange (event) {
setCity(event.target.value);
  }

function search() {
  const apiKey = "8eb322b04629a0b2fdac0ac79561148e";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  axios.get(apiUrl).then(handleResponse);
}



if (weatherData.ready) {
return (
    <div className="Container">
      <form className="search-city" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your city"
          className="col-form-label"
        onChange={handleCityChange}/>{" "}
        <input type="submit" value="Search" className="btn btn-light" />{" "}
        <button type="button" className="btn btn-light">
          Use my current location
        </button>
      </form>
      <br />
   <h2>{weatherData.city}</h2>
      <FormattedDate date={weatherData.date} />
            <h1>
        <img src={weatherData.icon}  alt="icon" />
       </h1>
      <WeatherTemp celsius={weatherData.temperature} />
     

      <p className="Hum-wind">
        <h3>{weatherData.description}</h3>
        <br />
        Humidity: {weatherData.humidity} % <br />
        Windspeed: {weatherData.wind} km/h
      </p>
    
      <br />
    
  
    <div className="Week">
      <div className="row">
        <div className="col-sm-2">
          <h5 className="card-title">Monday</h5>
          <div className="card">
            <div className="card-body">
              <p className="card-text">
                <img
                  src="http://openweathermap.org/img/wn/02d@2x.png"
                  alt=""
                  className="Icon-one"
                />
                <br />
                -1 °c
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-2">
          <h5 className="card-title">Tuesday</h5>
          <div className="card">
            <div className="card-body">
              <p className="card-text">
                <img
                  src="http://openweathermap.org/img/wn/02d@2x.png"
                  alt=""
                  className="Icon-two"
                />
                <br />
                0°c
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-2">
          <h5 className="card-title">Wednesday</h5>
          <div className="card">
            <div className="card-body">
              <p className="card-text">
                <img
                  src="http://openweathermap.org/img/wn/02d@2x.png"
                  alt=""
                  className="Icon-three"
                />{" "}
                <br />
                1°c
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-2">
          <h5 className="card-title">Thursday</h5>
          <div className="card">
            <div className="card-body">
              <p className="card-text">
                <img
                  src="http://openweathermap.org/img/wn/02d@2x.png"
                  alt=""
                  className="Icon-four"
                />{" "}
                <br />
                2°c
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-2">
          <h5 className="card-title">Friday</h5>
          <div className="card">
            <div className="card-body">
              <p className="card-text">
                <img
                  src="http://openweathermap.org/img/wn/02d@2x.png"
                  alt=""
                  className="Icon-five"
                />
                <br />
                3°c
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
} else {
 search();
return (
  <div>Loading...</div>);

}

 

  
}
