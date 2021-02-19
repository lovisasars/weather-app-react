import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Forecast() {
 
  return (

    <div className="Container">
      <form className="search-city">
        <input
          type="text"
          placeholder="Enter your city"
          className="col-form-label"
        />{" "}
        <input type="submit" value="Search" className="btn btn-light" />{" "}
        <button type="button" className="btn btn-light">
          Use my current location
        </button>
      </form>
      <br />
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
}
