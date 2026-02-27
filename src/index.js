import React from "react";
import ReactDOM from "react-dom";
import LoginPage from "./components/login-page/LoginPage";

function App() {
  return <LoginPage />;
}

const rootElement = document.getElementById("app");
ReactDOM.render(<App />, rootElement);
