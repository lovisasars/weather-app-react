import React from "react";

export default function Forecast() {
  return (
    <div className="Week">
      <div className="row">
        <div className="col-sm-2">
          <h5 className="card-title">
            Monday
            <span id="day-one"></span>
          </h5>
          <div className="card">
            <div className="card-body">
              <p className="card-text">
                <img
                  src="http://openweathermap.org/img/wn/02d@2x.png"
                  alt=""
                  id="icon-one"
                />
                <br />
                <span id="temp-one">-1</span> °c
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-2">
          <h5 className="card-title">
            Tuesday
            <span id="day-two"></span>
          </h5>
          <div className="card">
            <div className="card-body">
              <p className="card-text">
                <img
                  src="http://openweathermap.org/img/wn/02d@2x.png"
                  alt=""
                  id="icon-two"
                />
                <br />
                <span id="temp-two">0</span>°c
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-2">
          <h5 className="card-title">
            Wednesday
            <span id="day-three"></span>
          </h5>
          <div className="card">
            <div className="card-body">
              <p className="card-text">
                <img
                  src="http://openweathermap.org/img/wn/02d@2x.png"
                  alt=""
                  id="icon-three"
                />{" "}
                <br />
                <span id="temp-three">1</span>°c
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-2">
          <h5 className="card-title">
            Thursday
            <span id="day-four"></span>
          </h5>
          <div className="card">
            <div className="card-body">
              <p className="card-text">
                <img
                  src="http://openweathermap.org/img/wn/02d@2x.png"
                  alt=""
                  id="icon-four"
                />{" "}
                <br />
                <span id="temp-four">2</span>°c
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-2">
          <h5 className="card-title">
            Friday
            <span id="day-five"></span>
          </h5>
          <div className="card">
            <div className="card-body">
              <p className="card-text">
                <img
                  src="http://openweathermap.org/img/wn/02d@2x.png"
                  alt=""
                  id="icon-five"
                />
                <br />
                <span id="temp-five">3</span>°c
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
