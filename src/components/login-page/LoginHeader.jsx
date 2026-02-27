import React from "react";

export default function LoginHeader() {
  return (
    <div className="dashboard-login-header">
      <svg width="64" height="64" viewBox="0 0 64 64" className="dashboard-login-cart">
        <g stroke="#fff" strokeWidth="3" fill="none">
          <path d="M16 24h32l-6 16H22z" />
          <circle cx="26" cy="44" r="2.5" />
          <circle cx="38" cy="44" r="2.5" />
          <path d="M32 20v-8" />
          <path d="M32 12l4 8" />
        </g>
      </svg>
    </div>
  );
}
