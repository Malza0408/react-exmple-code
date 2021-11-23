import React, { createRef, useState } from "react";
import { useRef } from "react";

const UseRefComponent = (props) => {
  const [value, setValue] = useState("");
  const inputCreateRef = createRef();
  const inputUseRef = useRef();

  console.log(inputCreateRef.current, inputUseRef.current);

  return (
    <div>
      <input type="text" value={value} onChange={change} />
      <input type="text" ref={inputCreateRef} />
      <input type="text" ref={inputUseRef} />
    </div>
  );

  function change(e) {
    setValue(e.target.value);
  }
};

export default UseRefComponent;
