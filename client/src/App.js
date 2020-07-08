import "./styles.css";
import React from "react";
import axios from "axios";

//components
import NavBar from "./components/NavBar";
import LoadingSpinner from "./components/LoadingSpinner";

// react strap components
import ShowLocation from "./components/ShowLocation";

// api
//import mongo from "./apis/mongo";
import RegionHeroList from "./components/RegionHeroList";

class App extends React.Component {
  state = {
    locations: [],
    loading: false,
  };

  // load the Hero's from axios query to server
  // must have server running
  componentDidMount = () => {
    // query locations
    const url = process.env.PUBLIC_URL + "./locationTestData.json";

    //set the loader spinner while querying
    this.setState({ loading: true }, () => {
      axios.get(url).then((results) => {
        if (results.data.locations.length > 0) {
          this.setState({
            locations: results.data.locations,
            loading: false,
          });
        } else {
          console.log("no location data!");
        }
      });
    });

    // query devices
    // const response = await mongo.get("/devices");

    // const responseData = response.data;
    // console.log(responseData);
  };

  render() {
    const { locations, loading } = this.state; //destructuring
    return (
      <div>
        <NavBar />
        <ShowLocation />
        {loading ? (
          <LoadingSpinner />
        ) : (
          <RegionHeroList locations={locations} />
        )}
      </div>
    );
  }
}

export default App;
