import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { createStore } from "redux";
import appReducers from "./reducers/index";
import { Provider } from "react-redux";

const store = createStore(appReducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
