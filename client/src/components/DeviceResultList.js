import React from "react";
import DeviceCard from "./DeviceCard";

const DeviceResultList = (props) => {
  let counter = 0;
  const devices = props.devices.map((device) => {
    return <DeviceCard deviceName={device.name} key={counter++} />;
  });
  return <div>{devices}</div>;
};

export default DeviceResultList;
