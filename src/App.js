import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  async function handleLogin() {
    try {
      const response = await axios.post('https://js-post-api.herokuapp.com/api/login', { username, password });
      const { accessToken, expiredAt } = response.data;

      // Store accessToken in a cookie with HttpOnly flag.
      document.cookie = `accessToken=${accessToken};`;

      setLoggedIn(true);
    } catch (error) {
      console.error('login failed', error);
    }
  }

  function handleLogout() {

    // Remove accessToken from cookie.
    document.cookie = 'accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

    setLoggedIn(false);
  }

  // Check for accessToken on component mount.
  useEffect(() => {
    const accessToken = document.cookie.split('; ').find(row => row.startsWith('accessToken='));

    if (accessToken) {
      setLoggedIn(true);
    }
  }, []);

  return (
    <div>
      <h2>User Login</h2>
      {loggedIn ? (
        <div>
          <p>Welcome, User!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}

export default App;
