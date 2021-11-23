import React, { useReducer } from "react";

// reducer => state 변경하는 로직이 담겨있는 함수
const reducer = (state, actoin) => {
  if (actoin.type === "Plus") {
    return {
      count: state.count + 1,
    };
  }
  return state;
};
// dispatch  => action 객체를 넣어서 실행

// action => 객체고 필수 프로퍼티로 type 을 가진다.

const ReducerComponent = (props) => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      <p>Clicked {state.count} times</p>
      <button onClick={click}>Click Me</button>
    </div>
  );

  function click() {
    dispatch({ type: "Plus" });
  }
};

export default ReducerComponent;
