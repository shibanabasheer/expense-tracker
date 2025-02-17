import React from "react";
import ReactDOM from "react-dom";
import { SnackbarProvider } from "notistack";
import App from "./App";
import "./App.css";

ReactDOM.render(
  <SnackbarProvider maxSnack={3}>
    <App />
  </SnackbarProvider>,
  document.getElementById("root")
);
