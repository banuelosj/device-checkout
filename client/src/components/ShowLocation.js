import React from "react";
import { observer } from "mobx-react";
import { useStores } from "../hooks/user-stores";

const ShowLocation = observer(() => {
  const { locationStore } = useStores();
  return (
    <div>
      <p>Current location: {locationStore.name}</p>
    </div>
  );
});

export default ShowLocation;
