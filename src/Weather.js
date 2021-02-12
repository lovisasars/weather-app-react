import React from "react";
import axios from "axios";

export default function Weather(props) {
  function displayWeather(response) {
    return alert(
      `The temperature in ${response.data.name} is currently ${Math.round(
        response.data.main.temp
      )}°C`
    );
  }

  const apiKey = `8eb322b04629a0b2fdac0ac79561148e`;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
  return <div>Testing weather component..</div>;
}
