import React, { useContext } from "react";
import personContext from "../contexts/PersonContext";

const UseContextComponent = (props) => {
  const persons = useContext(personContext);
  return (
    <ul>
      {persons.map((person) => (
        <li>{person.name}</li>
      ))}
    </ul>
  );
};

export default UseContextComponent;
