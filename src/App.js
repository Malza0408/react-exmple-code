import logo from "./logo.svg";
import "./App.css";
import ControlledComponent from "./components/controlledComponent";
import UncontrolledComponent from "./components/uncontrolledComponent";
import useWindowWidth from "./hooks/useWindowWidth";
import withHasMounted from "./hocs/withHasMounted";
import useHasMounted from "./hooks/useHasMounted";

function App({ hasMounted }) {
  const customHookWidth = useWindowWidth();
  const hasMountedFromHooks = useHasMounted();

  console.log(hasMounted, hasMountedFromHooks);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* controlled and uncontrolled example
        <ControlledComponent />
        <UncontrolledComponent /> */}
        {/* CustomHook Example
        {customHookWidth} */}
      </header>
    </div>
  );
}

export default withHasMounted(App);
