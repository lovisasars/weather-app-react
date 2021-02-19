import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Forecast() {
  return (
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
  );
}
