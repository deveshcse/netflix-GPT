import { Provider } from "react-redux";
import Body from "./Components/Body.jsx";
import appStore from "./utils/appStore.jsx";

function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
