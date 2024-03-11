import React, { useState, useEffect } from 'react';

export default function App() {
  // Define state to store user information.
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isMale, setIsMale] = useState(true);
  const [email, setEmail] = useState({ email: '' });
  const [hobbies, setHobbies] = useState([]);
  const [dob, setDob] = useState('');
  const [favoriteSymbol, setFavoriteSymbol] = useState('');
  const [storedValue, setStoredValue] = useState(null); // State to store retrieved value.

  // Define a key to store the value in localStorage.
  const localStorageKey = 'userData';

  // Define a function to handle changes to the input value.
  const handleChange = (event, field) => {

    // Update the state with the new value.
    switch (field) {
      case "name":
        setName(event.target.value);
        break;

      case "phone":
        // https://www.w3schools.com/jsref/jsref_slice_string.asp
        setPhone(event.target.value.slice(0, 10));
        break;

      case "gender":
        setIsMale(event.target.value === '1');
        break;

      case "email":
        setEmail({ email: event.target.value });
        break;

      case "hobbies":
        // https://www.w3schools.com/jsref/jsref_split.asp
        // https://www.w3schools.com/jsref/jsref_join.asp
        setHobbies(event.target.value.split(', '));
        break;

      case "dob":
        setDob(event.target.value);
        break;

      case "symbol":
        setFavoriteSymbol(event.target.value);
        break;

      default:
        break;
    }
  }

  // Use useEffect to retrieve the stored value from localStorage on component mount.
  useEffect(() => {
    const storedItem = localStorage.getItem(localStorageKey);

    console.log('storedItem', storedItem);

    // If a value exists is localStorage, update the state with it.
    if (storedItem) {
      const storedData = JSON.parse(storedItem);

      setName(storedData.name);
      setPhone(storedData.phone);
      setIsMale(storedData.isMale);
      setEmail(storedData.email);
      setHobbies(storedData.hobbies);
      setDob(storedData.dob);
      setFavoriteSymbol(storedData.favoriteSymbol);
      setStoredValue(storedData);
    }
  }, [localStorageKey]);

  // Update localStorage whenever user information changes
  useEffect(() => {
    const userData = {
      name, phone, isMale, email, hobbies, dob, favoriteSymbol: favoriteSymbol.toString()
    };

    localStorage.setItem(localStorageKey, JSON.stringify(userData))
  }, [name, phone, isMale, email, hobbies, dob, favoriteSymbol]);

  return (
    <div>
      <h2>User Information Form</h2>
      <form>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => handleChange(e, 'name')} />
        </label>
        <br />
        <label>
          Phone:
          <input type="number" value={phone} onChange={(e) => handleChange(e, 'phone')} />
        </label>
        <br />
        <label>
          Gender:
          <select value={isMale ? '1' : '0'} onChange={(e) => handleChange(e, 'gender')}>
            <option value={"1"}>Male</option>
            <option value={"0"}>Female</option>
          </select>
        </label>
        <br />
        <label>
          Email:
          <input type="text" value={email.email} onChange={(e) => handleChange(e, 'email')} />
        </label>
        <br />
        <label>
          Hobbies:
          <input type="text" value={hobbies.join(', ')} onChange={(e) => handleChange(e, 'hobbies')} />
        </label>
        <br />
        <label>
          Date of Birth:
          <input type="date" value={dob} onChange={(e) => handleChange(e, 'dob')} />
        </label>
        <br />
        <label>
          Favorite Symbol:
          <input type="text" value={favoriteSymbol} onChange={(e) => handleChange(e, 'symbol')} />
        </label>
      </form>

      {storedValue && (
        <div>
          <h3>User Information (Stored Value):</h3>
          <p>Name: {storedValue.name}</p>
          <p>Phone: {storedValue.phone}</p>
          <p>Gender: {storedValue.isMale ? 'Male' : 'Female'}</p>
          <p>Email: {storedValue.email.email}</p>
          <p>Interests: {storedValue.hobbies.join(', ')}</p>
          <p>Date of Birth: {storedValue.dob}</p>
          <p>Favorite Icon: {storedValue.favoriteSymbol}</p>
        </div>
      )}
    </div>
  );
}
