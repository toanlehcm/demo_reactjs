import React, { useState, useEffect } from 'react';

function UserForm() {
  // Define state variables to store user information.
  const [userData, setUserData] = useState({
    name: '',
    phone: '',
    email: '',
    // Add other fields as needed.
  });

  // Define the key for localStorage.
  const localStorageKey = 'userData';

  // useEffect to retrieve user data from localStorage on component mount.
  useEffect(() => {

    // Retrieve stored data from localStorage.
    const storedData = localStorage.getItem(localStorageKey);

    // If stored data exists, parse it and update state.
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, []); // Empty dependency array to run only once on mount.

  // Function to handle input change and update state.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // useEffect to update localStorage when user data changes.
  useEffect(() => {

    // Serialize user data to JSON string before storing.
    const serializedData = JSON.stringify(userData);
    localStorage.setItem(localStorageKey, serializedData);
  }, [userData]); // Run whenever userData changes.

  return (
    <div>
      <h2>User Information Form</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" value={userData.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Phone:
          <input type="text" name="phone" value={userData.phone} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="text" name="email" value={userData.email} onChange={handleChange} />
        </label>
        {/* Add more input fields for other user information */}
      </form>
    </div>
  );
}

export default UserForm;
