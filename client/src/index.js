// @flow

import React from "react";
import ReactDOM from "react-dom";

import App from "./app/app";
import "./index.scss";

const rootEl = document.getElementById("root");

if (rootEl) {
  ReactDOM.render(
    <App />,
    rootEl
  );
} else {
  throw new Error("No root element present.");
}
