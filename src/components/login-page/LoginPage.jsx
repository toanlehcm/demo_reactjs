import React from "react";
import LoginHeader from "./LoginHeader";
import LoginForm from "./LoginForm";
import LoginFooter from "./LoginFooter";
import "./LoginPage.css";

export default function LoginPage() {
  return (
    <div className="dashboard-login-root">
      <div className="dashboard-login-bg">
        <div className="dashboard-login-ellipse" />
        <div className="dashboard-login-container">
          <LoginHeader />
          <LoginForm />
          <LoginFooter />
        </div>
      </div>
    </div>
  );
}
