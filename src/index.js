import React from "react";
import { createRoot } from 'react-dom/client';
import SignUpPage from "./components/signup-page/SignUpPage";

function App() {
  return <SignUpPage />;
}

const root = createRoot(document.getElementById("app"));
root.render(<App />);
