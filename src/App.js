import React, { useState, useEffect } from 'react';

function App() {
  // State variable to store the authentication token
  const [authToken, setAuthToken] = useState('');

  // Check for authToken in session storage on component mount
  useEffect(() => {
    const token = sessionStorage.getItem('authToken');
    if (token) {
      setAuthToken(token);
    }
  }, []);

  // Function to handle user login
  const handleLogin = () => {
    // Simulate a login request and obtain the authentication token
    const token = 'exampleAuthToken123';

    // Store the authentication token in session storage
    sessionStorage.setItem('authToken', token);
    setAuthToken(token);
  };

  // Function to handle user logout
  const handleLogout = () => {
    // Remove the authentication token from session storage
    sessionStorage.removeItem('authToken');
    setAuthToken('');
  };

  // Render the UI based on the presence of authToken
  return (
    <div>
      <h1>User Authentication Example</h1>
      {authToken ? (
        <div>
          <p>Welcome, User!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Please login to continue</p>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}

export default App;
