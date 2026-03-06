import React from "react";
import { createRoot } from 'react-dom/client';
import LoginPage from "./components/login-page/LoginPage";

function App() {
  return <LoginPage />;
}

const root = createRoot(document.getElementById("app"));
root.render(<App />);
