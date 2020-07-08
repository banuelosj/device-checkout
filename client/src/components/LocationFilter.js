import React from "react";

const LocationFilter = () => {
  return (
    <div>
      <select id="distanceSelect" className="ui dropdown">
        <option value="" disabled style={{ backgroundColor: "#F1F1F1" }}>
          Location
        </option>
        <option value="1">Redlands</option>
        <option value="5">Charlotte</option>
        <option value="10">NORUS</option>
      </select>
    </div>
  );
};

export default LocationFilter;
