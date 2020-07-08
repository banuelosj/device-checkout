import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const SearchSuggestions = (props) => {
  let counter = 0;

  const suggestions = props.source.map((suggestion) => {
    return <ListGroupItem key={counter++}>{suggestion}</ListGroupItem>;
  });

  return (
    <div>
      <ListGroup>{suggestions}</ListGroup>
    </div>
  );
};

export default SearchSuggestions;
