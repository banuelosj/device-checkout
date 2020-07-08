import React from "react";
import "./DeviceCard.css";

const DeviceCard = (props) => {
  return (
    <div className="card-custom">
      <div
        className="ui inverted green segment padded"
        onClick={() => console.log(props.deviceName + " has been selected")}
      >
        <p>{props.deviceName}</p>
      </div>
    </div>
  );
};

export default DeviceCard;
