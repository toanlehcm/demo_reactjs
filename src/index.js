import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
// import AutomaticBatching from "./containers/AutomaticBatching";
import WithoutUseTransition from "./containers/WithoutUseTransition";

function App() {
  return <WithoutUseTransition />;
}

const rootElement = document.getElementById("app");
ReactDOM.render(<App />, rootElement);
