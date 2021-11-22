import logo from "./logo.svg";
import "./App.css";
import ControlledComponent from "./components/controlledComponent";
import UncontrolledComponent from "./components/uncontrolledComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ControlledComponent />
        <UncontrolledComponent />
      </header>
    </div>
  );
}

export default App;
