import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

function LoginComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform login logic here
    // For demonstration purposes, we'll just set isLoggedIn to true
    setIsLoggedIn(true);
  };

  // If user is logged in, automatically redirect to the specified page
  if (isLoggedIn) {
    return <Navigate to="/your/redirect/page" />;
  }

  // If user is not logged in, render the login form
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginComponent;
