import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(<App />, document.getElementById("root"));
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js");
}
