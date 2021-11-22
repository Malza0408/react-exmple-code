import logo from "./logo.svg";
import "./App.css";
import ControlledComponent from "./components/controlledComponent";
import UncontrolledComponent from "./components/uncontrolledComponent";
import useWindowWidth from "./hooks/useWindowWidth";
import { useEffect } from "react";

function App() {
  const customHookWidth = useWindowWidth();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* controlled and uncontrolled example
        <ControlledComponent />
        <UncontrolledComponent /> */}
        {/* CustomHook Example */}
        {customHookWidth}
      </header>
    </div>
  );
}

export default App;
