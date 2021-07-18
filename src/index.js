require("file-loader?name=[name].[ext]!./index.html");
import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom";
import store from "./store";
import { Provider } from "react-redux";
import App from "./App.js";
import "./App.scss";

const app = document.getElementById("app");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  app
);
