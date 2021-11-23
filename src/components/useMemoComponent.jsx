import React, { useCallback, useMemo, useState } from "react";

function sum(persons) {
  console.log("sum...");
  return persons.map((person) => person.age).reduce((l, r) => l + r, 0);
}

const UseMemoComponent = (props) => {
  const [value, setValue] = useState("");
  const [persons] = useState([
    { name: "malza", age: 29 },
    { name: "hoon", age: 21 },
  ]);

  const count = useMemo(() => {
    sum(persons);
  }, [persons]);

  return (
    <div>
      <input type="text" value={value} onChange={change} />
      <p>{count}</p>
    </div>
  );

  function change(e) {
    setValue(e.target.value);
  }
};

export default UseMemoComponent;
