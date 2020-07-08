import React from "react";
import RegionHero from "./RegionHero";

const RegionHeroList = (props) => {
  const locations = props.locations.map((location) => {
    return (
      <div>
        <RegionHero
          img={process.env.PUBLIC_URL + location.image}
          alt={location.imageAlt}
          location={location.name}
        />
      </div>
    );
  });
  return <div>{locations}</div>;
};

export default RegionHeroList;
