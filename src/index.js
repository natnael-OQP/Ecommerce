import React from "react";
import ReactDOM from "react-dom";
// react-router-dom
import { BrowserRouter } from "react-router-dom";
// redux
import { Provider } from "react-redux";
// style
import "./index.css";
import App from "./App"


ReactDOM.render(
  
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>,
  document.getElementById("root")
);
