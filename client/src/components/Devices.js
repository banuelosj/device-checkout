import React from "react";
import NavBar from "./NavBar";

import { observer } from "mobx-react";
import { useStores } from "../hooks/user-stores";

const Devices = observer(() => {
  const { locationStore } = userStores();

  return (
    <div>
      <NavBar />
    </div>
  );
});

export default Devices;
