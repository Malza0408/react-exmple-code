// import React from "react";

import { useState } from "react";

const ControlledComponent = (props) => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };
  const onClick = (e) => {
    console.log(value);
  };

  return (
    <div>
      {/* You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`. */}
      {/* <input type="text" value={value} /> */}
      <input type="text" value={value} onChange={onChange} />
      <button onClick={onClick}>전송</button>
    </div>
  );
};

export default ControlledComponent;
