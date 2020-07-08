import "./RegionHero.css";

// this component will display a Hero for one of the Esri regions of Support Services
import React from "react";
import LazyHero from "react-lazy-hero";

// adding location store from mobx to track the location
import { observer } from "mobx-react";
import { useStores } from "../hooks/user-stores";

//OG
// const RegionHero = (props) => {
//   return (
//     <div>
//       <LazyHero imageSrc={props.img}>
//         <h3>{props.location}</h3>
//       </LazyHero>
//       <p>
//         <i>{props.alt}</i>
//       </p>
//     </div>
//   );
// };

const RegionHero = observer((props) => {
  const { locationStore } = useStores();
  return (
    <div onClick={() => locationStore.setLocation(props.location)}>
      <LazyHero imageSrc={props.img}>
        <h3>{props.location}</h3>
      </LazyHero>
      <p>
        <i>{props.alt}</i>
      </p>
    </div>
  );
});

export default RegionHero;
