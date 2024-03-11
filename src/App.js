import React, { useState, useEffect } from 'react';

export default function App() {
  // Define state to hold the value from localStorage.
  const [storedValue, setStoredValue] = useState('');

  // Define a key to store the value in localStorage.
  const localStorageKey = 'myStorageValue';

  // Define a function to handle changes to the input value.
  const handleChange = (event) => {
    // Update the state with the new value.
    setStoredValue(event.target.value);
  }

  // Use useEffect to retrieve the stored value from localStorage on component mount.
  useEffect(() => {
    const storedItem = localStorage.getItem(localStorageKey);

    // If a value exists is localStorage, update the state with it.
    if (storedItem) {
      setStoredValue(storedItem);
    }
  }, [localStorageKey]);

  useEffect(() => {
    localStorage.setItem(localStorageKey, storedValue)
  }, [localStorageKey, storedValue]);

  return (
    <div>
      <h1>Local Storage Example</h1>
      <input
        type="text"
        value={storedValue}
        onChange={handleChange}
        placeholder="Enter a value..."
      />
      <p>Stored Value: {storedValue}</p>
    </div>
  );
}
