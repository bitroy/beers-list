import React from "react";
import { Provider } from "react-redux";
import HomePage from "./components/general/HomePage";
import store from "./store/index";

export const applicationStore = store();

function App() {
  return (
    <Provider store={applicationStore}>
      <HomePage />
    </Provider>
  );
}

export default App;
