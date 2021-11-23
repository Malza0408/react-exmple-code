import logo from "./logo.svg";
import "./App.css";
import ControlledComponent from "./components/controlledComponent";
import UncontrolledComponent from "./components/uncontrolledComponent";
import useWindowWidth from "./hooks/useWindowWidth";
import withHasMounted from "./hocs/withHasMounted";
import useHasMounted from "./hooks/useHasMounted";
import ReducerComponent from "./components/reducerComponent";
import UseMemoComponent from "./components/useMemoComponent";
import UseRefComponent from "./components/useRefComponent";
import ConsumerComponent from "./components/consumerComponent";
import ContextTypeComponent from "./components/contextTypeComponent";
import UseContextComponent from "./components/useContextComponent";

function App({ hasMounted }) {
  const customHookWidth = useWindowWidth();
  const hasMountedFromHooks = useHasMounted();

  console.log(hasMounted, hasMountedFromHooks);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* controlled and uncontrolled example */}
        {/* <ControlledComponent />
        <UncontrolledComponent /> */}
        {/* CustomHook Example */}
        {/* {customHookWidth} */}
        {/* reducer Example */}
        {/* <ReducerComponent /> */}
        {/* useMemo Example */}
        {/* <UseMemoComponent /> */}
        {/* useRefComponent */}
        {/* <UseRefComponent /> */}
        {/* <ConsumerComponent /> */}
        <ContextTypeComponent />
        <UseContextComponent />
      </header>
    </div>
  );
}

export default withHasMounted(App);
