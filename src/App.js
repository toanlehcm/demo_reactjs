import React from 'react';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';

function YourComponent() {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to a specific route
    navigate('/your-route');
  };

  return (
    <Router>
      <div>
        <button onClick={handleClick}>Go to Another Page</button>
      </div>
    </Router>
  );
}

export default YourComponent;
