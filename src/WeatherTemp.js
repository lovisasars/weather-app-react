import React, { useState } from "react";

export default function WeatherTemp(props) {
    const [unit, setUnit] = useState(`celsius`)


    function showFahrenheit (event) {
        event.preventDefault();
        setUnit(`Fahrenheit`);
    }

    function showCelsius (event) {
        event.preventDefault();
        setUnit(`celsius`);
    }

    if (unit === `celsius`) {
return (
            <h1>
        {props.celsius}
        <span className="Units">
          
            {" "}
            °C
          {" "}
          |{" "}<a href="#" onClick={showFahrenheit}>°F</a>
        </span>
      </h1>
    
    );
    } else {
        const Fahrenheit = Math.round((props.celsius * 9) / 5 + 32)
        return (
                <h1>
        {Fahrenheit}
        <span className="Units">
          <a href="#" onClick={showCelsius}>
            {" "}
            °C
          </a>{" "}
          |{" "}°F
        </span>
      </h1>
        );
    }

    
}