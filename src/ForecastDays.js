import React from "react";

export default function ForecastDays (props) {
let days = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let day = days[props.date.getDay()];
return (
    <h5 className="card-title">{day}</h5>
    )
}