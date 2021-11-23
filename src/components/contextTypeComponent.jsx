import React, { Component } from "react";
import personContext from "../contexts/PersonContext";

class ContextTypeComponent extends Component {
  //   static contextType = personContext;
  render() {
    const persons = this.context;
    return (
      <ul>
        {persons.map((person) => (
          <li>{person.name}</li>
        ))}
      </ul>
    );
  }
}

export default ContextTypeComponent;

ContextTypeComponent.contextType = personContext;
