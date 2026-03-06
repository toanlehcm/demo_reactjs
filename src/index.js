import React from "react";
import { createRoot } from 'react-dom/client';
import LoginPage from "./components/login-page/LoginPage";
import SignUpPage from "./components/signup-page/SignUpPage";
import './index.css';

function App() {
  return <LoginPage />;  
  // return <SignUpPage />;  
}

const root = createRoot(document.getElementById("app"));
root.render(<App />);
