import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import AutomaticBatching from "./containers/NewFeaturesReact17";

function App() {
  return <AutomaticBatching />;
}

const rootElement = document.getElementById("app");
ReactDOM.render(<App />, rootElement);
