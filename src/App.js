import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./store";

import { Provider } from "react-redux";
import { AppRoute } from "./pages";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AppRoute />
      </Provider>
    </div>
  );
}

export default App;
