// import React from 'react';

import { createRef, useEffect, useState } from "react";
import { debounce } from "lodash";

const UncontrolledComponent = (props) => {
  //   const [value, setValue] = useState("");
  const [debounceValue, setDebounceValue] = useState("");
  const inputRef = createRef();
  const inputRef2 = createRef();
  const onClick = (e) => {
    // 실제 dom을 가져온다. vdom 이 아니다.
    // const input = document.querySelector("#input");
    // console.log(input);
    // 위와 같은 방식은 react 에서 지양한다. react 에서는
    // vdom 을 사용하기 때문에 실제 dom 을 가져와서 변조를 가하거나
    // 값을 읽어들이는 것은 react가 추구하는 방향과는 다르다.
    console.log(inputRef.current.value);
  };

  const handleChange = () => {
    console.log(inputRef.current.value);
  };

  const updateDebounceValue = (e) => {
    setDebounceValue(inputRef2.current.value);
  };
  const debouncedOnChange = debounce(updateDebounceValue, 500);
  useEffect(() => {
    // 한번이라도 rendering 된 후에 inputRef 가 참조하고 있는 것을 볼 수 있다.
    // console.log(inputRef);
    // current: <input type="text">
    console.log(debounceValue);
  });
  return (
    <div>
      <input type="text" ref={inputRef} onChange={handleChange} />
      <input
        type="text"
        ref={inputRef2}
        onChange={debouncedOnChange}
        placeholder="use Debouce"
      />
      <button onClick={onClick}>전송</button>
    </div>
  );
};

export default UncontrolledComponent;
