import React from "react";
import ReactDOM from "react-dom";
// react-router-dom
import { BrowserRouter } from "react-router-dom";
// redux import provider and Store
import { Provider } from "react-redux";
import store from "./Redux/store";
// style
import "./index.css";
import App from "./App"


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
