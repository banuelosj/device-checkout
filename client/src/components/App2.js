import React from "react";
import axios from "axios";

import "./App2.css";

//components
import NavBar from "./NavBar";
import DeviceResultList from "./DeviceResultList";
import LoadingSpinner from "./LoadingSpinner";
import SearchBar from "./SearchBar";
import CheckBox from "./CheckBox";
import SearchFilter from "./SearchFilter";

class App2 extends React.Component {
  state = {
    devices: [],
    loading: false,
    searchSource: [],
  };

  // load the devices from the initial query
  componentDidMount = () => {
    const url = process.env.PUBLIC_URL + "./devicesTestData.json";

    // set the loader spinner while querying
    this.setState({ loading: true }, () => {
      axios.get(url).then((results) => {
        console.log(results.data);
        if (results.data.length > 0) {
          this.setState({
            devices: results.data,
            loading: false,
          });
        } else {
          console.log("no device data!");
        }
      });
    });

    // set the search source for the searchBar
    const searchList = [
      "iPhone 11",
      "iPhone 10",
      "Dell",
      "MacBook",
      "iPad Pro",
      "iPhone 12",
      "Samsung Galaxy s10",
      "Samsung Galaxy Tab",
    ];
    this.setState({
      searchSource: searchList,
    });
  };

  render() {
    const { devices, loading } = this.state;

    return (
      <div>
        <NavBar />
        <div className="ui segment">
          <div className="ui grid">
            <div className="twelve wide column">
              <div style={{ marginLeft: "10%" }}>
                <SearchBar source={this.state.searchSource} />
              </div>
            </div>
            <div className="two wide column">
              <SearchFilter />
            </div>
          </div>
        </div>
        <div className="result-container">
          {loading ? (
            <LoadingSpinner />
          ) : (
            <DeviceResultList devices={devices} />
          )}
        </div>
      </div>
    );
  }
}

export default App2;
