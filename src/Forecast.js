import React, { useState } from "react";
import axios from "axios";

export default function Forecast (props) {
    const [loaded, setLoaded] = useState (false);
    const [forecast, setForecast] = useState(null);

   
   
function handleResponse (response) {
    
    setForecast(response.data);
    setLoaded(true)
    

   
}

if (loaded) {
    let IconOne = `https://openweathermap.org/img/wn/${forecast.list[8].weather[0].icon}@2x.png`
    let IconTwo = `https://openweathermap.org/img/wn/${forecast.list[16].weather[0].icon}@2x.png`
    let IconThree = `https://openweathermap.org/img/wn/${forecast.list[24].weather[0].icon}@2x.png`
    let IconFour = `https://openweathermap.org/img/wn/${forecast.list[32].weather[0].icon}@2x.png`
    let IconFive = `https://openweathermap.org/img/wn/${forecast.list[39].weather[0].icon}@2x.png`

    return  (
        <div className="Week">
      <div className="row">
        <div className="col-sm-2">
          <h5 className="card-title">Monday</h5>
          <div className="card">
            <div className="card-body">
              <p className="card-text">
                <img
                  src={IconOne}
                  alt=""
                  className="Icon-one"
                />
                <br />
                {Math.round(forecast.list[8].main.temp)} °c
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
                  src={IconTwo}
                  alt=""
                  className="Icon-two"
                />
                <br />
                {Math.round(forecast.list[16].main.temp)}°c
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
                  src={IconThree}
                  alt=""
                  className="Icon-three"
                />{" "}
                <br />
                {Math.round(forecast.list[24].main.temp)}°c
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
                  src={IconFour}
                  alt=""
                  className="Icon-four"
                />{" "}
                <br />
                {Math.round(forecast.list[32].main.temp)}°c
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
                  src={IconFive}
                  alt=""
                  className="Icon-five"
                />
                <br />
                {Math.round(forecast.list[39].main.temp)}°c
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    );
} else {
const apiKey = "8eb322b04629a0b2fdac0ac79561148e";
const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`
axios.get(apiUrl).then(handleResponse);

    return (
        <div>
{props.city}
        </div>
        );
}

}


//response data forecast
//first day = forecast.list[8].main.temp // response.data.list[8].weather[0].icon
//second day = response.data.list[16].main.temp // response.data.list[16].weather[0].icon
//third day = response.data.list[24].main.temp // response.data.list[24].weather[0].icon
//fourth day = response.data.list[32].main.temp // response.data.list[32].weather[0].icon
//fifth day = response.data.list[39].main.temp // response.data.list[39].weather[0].icon