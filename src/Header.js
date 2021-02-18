import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  return (
    <div className="Container">
      <form id="search-city">
        <input
          type="text"
          id="city-value"
          placeholder="Enter your city"
          className="col-form-label"
        />{" "}
        <input type="submit" value="Search" className="btn btn-light" />{" "}
        <button type="button" id="location-button" className="btn btn-light">
          Use my current location
        </button>
      </form>

      <br />
    </div>
  );
}
