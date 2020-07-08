import React from "react";
import { LocationStore } from "../stores/LocationStore";
import { DevicesStore } from "../stores/DevicesStore";

export const storesContext = React.createContext({
  locationStore: new LocationStore(),
  devicesStore: new DevicesStore(),
});
