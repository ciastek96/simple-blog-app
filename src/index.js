require("file-loader?name=[name].[ext]!./index.html");
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";
import App from "./App.js";
import "./App.scss";

const app = document.getElementById("app");

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  app
);
