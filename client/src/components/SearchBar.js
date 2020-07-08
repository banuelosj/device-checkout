import React from "react";

import SearchSuggestions from "./SearchSuggestions";

class SearchBar extends React.Component {
  state = { searchTerm: "", filteredSearch: [] };

  onSearchSubmit = (event) => {
    event.preventDefault();
    console.log("search submitted");
    console.log(this.props.source);
    // call the callback from parent component
  };

  onInputChange = (event) => {
    const { source } = this.props;
    let textValue;

    this.setState(
      {
        searchTerm: event.target.value,
      },
      () => {
        textValue = this.state.searchTerm.toUpperCase();
        const filteredResults = [];
        source.forEach((name) => {
          if (name.toUpperCase().includes(textValue)) {
            filteredResults.push(name);
          }
        });
        this.setState({
          filteredSearch: filteredResults,
        });
      }
    );
  };

  render() {
    return (
      <div className="ui search-bar">
        <form onSubmit={this.onSearchSubmit} className="ui form">
          <div className="ui icon input" style={{ width: "75%" }}>
            <input
              type="text"
              placeholder="Search for device..."
              value={this.state.searchTerm}
              onChange={this.onInputChange}
            />
            <i className="search icon"></i>
          </div>
        </form>
        <div style={{ width: "75%" }}>
          {this.state.searchTerm.length > 0 ? (
            <SearchSuggestions source={this.state.filteredSearch} />
          ) : (
            <SearchSuggestions source={[]} />
          )}
        </div>
      </div>
    );
  }
}

export default SearchBar;
