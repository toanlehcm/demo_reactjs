import React from "react";

export default function LoginForm() {
  return (
    <form className="dashboard-login-form">
      {/* Username input với icon */}
      <div className="dashboard-login-input-row">
        <svg className="dashboard-login-input-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="white" strokeWidth="1.5" />
          <path d="M3 22C3 17.5817 7.02944 14 12 14C16.9706 14 21 17.5817 21 22" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <input type="text" className="dashboard-login-input" placeholder="USERNAME" autoComplete="username" />
      </div>

      {/* Password input với icon */}
      <div className="dashboard-login-input-row">
        <svg className="dashboard-login-input-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="11" width="18" height="11" rx="2" stroke="white" strokeWidth="1.5" />
          <path d="M7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="12" cy="16" r="1.5" fill="white" />
        </svg>
        <input type="password" className="dashboard-login-input" placeholder="PASSWORD" autoComplete="current-password" />
      </div>

      {/* Submit button - full width bằng input */}
      <button type="submit" className="dashboard-login-btn">
        LOGIN
      </button>

      {/* Forgot password */}
      <div className="dashboard-login-forgot">
        <a href="#" tabIndex={0}>
          Forgot password?
        </a>
      </div>
    </form>
  );
}
