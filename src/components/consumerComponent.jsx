import React from "react";
import personContext from "../contexts/PersonContext";

const ConsumerComponent = (props) => {
  return (
    <personContext.Consumer>
      {(value) => (
        <ul>
          {value.map((person) => (
            <li>{person.name}</li>
          ))}
        </ul>
      )}
    </personContext.Consumer>
  );
};

export default ConsumerComponent;
