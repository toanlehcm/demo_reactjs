import React from "react";

export default function LoginForm() {
  return (
    <form className="dashboard-login-form">
      <div className="dashboard-login-input-row">
        <input type="text" className="dashboard-login-input" placeholder="USERNAME" autoComplete="username" />
      </div>
      <div className="dashboard-login-input-row">
        <input type="password" className="dashboard-login-input" placeholder="PASSWORD" autoComplete="current-password" />
      </div>
      <button type="submit" className="dashboard-login-btn">
        LOGIN
      </button>
      <div className="dashboard-login-forgot">
        <a href="#" tabIndex={0}>
          Forgot password?
        </a>
      </div>
    </form>
  );
}
