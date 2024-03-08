import React from 'react';
import { BrowserRouter as Router, useSearchParams } from 'react-router-dom';

// Function to serialize form data into { key: value } pairs.
function serializeFormQuery(form) {
  const formData = new FormData(form);
  const params = Object.fromEntries(formData);
  return params;
}

function App() {
  // Destructure searchParams and setSearchParams from useSearchParams hook
  // const [ setSearchParams] = useSearchParams();

  // Function to handle form submission.
  function handleSubmit(event) {
    event.preventDefault();

    // Serialize form data into { key: value } pairs
    const params = serializeFormQuery(event.target);
    // setSearchParams(params);
  }

  return (
    <Router> {/* Wrap the component with Router */}
      <div>
        <form onSubmit={handleSubmit}>
          {/* Input fields for the form */}
          <label>
            Query Param 1:
            <input type="text" name="param1" />
          </label>
          <label>
            Query Param 2:
            <input type="text" name="param2" />
          </label>
          {/* Submit button */}
          <button type="submit">Submit</button>
        </form>
      </div>
    </Router>
  );
}

export default App;
